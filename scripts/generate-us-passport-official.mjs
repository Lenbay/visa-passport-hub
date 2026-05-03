import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const INDEX_URL = "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html";
const OUTPUT_PATH = new URL("../passport-official-data.js", import.meta.url);
const CACHE_DIR = new URL("../.cache/travel-state/", import.meta.url);

function fetchHtml(url) {
  const cacheKey = createHash("sha1").update(url).digest("hex");
  const cachePath = new URL(`${cacheKey}.html`, CACHE_DIR);
  if (existsSync(cachePath)) {
    return readFileSync(cachePath, "utf8");
  }

  const html = execFileSync("curl", ["-L", "-A", "Mozilla", "--max-time", "20", "-s", url], {
    encoding: "utf8",
    maxBuffer: 2 * 1024 * 1024
  });
  writeFileSync(cachePath, html);
  return html;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function extractDestinations(indexHtml) {
  const linkRegex = /<th scope="row"><a href="([^"]+)"[^>]*>([^<]+)<\/a><\/th>/g;
  const seen = new Set();
  const destinations = [];

  for (const match of indexHtml.matchAll(linkRegex)) {
    const url = match[1].startsWith("http") ? match[1] : new URL(match[1], INDEX_URL).href;
    const name = stripHtml(match[2]);
    if (!seen.has(url)) {
      destinations.push({ name, url });
      seen.add(url);
    }
  }

  return destinations;
}

function extractRequirementText(html) {
  const quickFactMatch = html.match(/TOURIST VISA REQUIRED:\s*<\/div>\s*<div class="tsg-rwd-qf-box-data">([\s\S]*?)<\/div>\s*<\/div>/i);
  if (quickFactMatch) {
    return stripHtml(quickFactMatch[1]);
  }

  const marker = html.search(/Tourist visa requirements/i);
  if (marker === -1) {
    return "";
  }

  const afterMarker = html.slice(marker);
  const nextIcon = afterMarker.indexOf('<div class="iconcallout"', 200);
  const block = nextIcon === -1 ? afterMarker.slice(0, 2600) : afterMarker.slice(0, nextIcon);
  return stripHtml(block.replace(/Tourist visa requirements/i, ""));
}

function classifyRequirement(text) {
  const lower = text.toLowerCase();

  if (!lower) {
    return "unknown";
  }

  if (/(visa on arrival|upon arrival|on arrival)/i.test(lower)) {
    return "visaOnArrival";
  }

  if (/(evisa|e-visa|electronic visa|electronic travel authori[sz]ation|electronic travel authority|\beta\b|esta|eta required|approved eta)/i.test(lower)) {
    return "eVisa";
  }

  if (/^(no|none|not required)\b/i.test(lower) || /(no visa required|visa not required|do not need a visa|not need a visa|not required for stays|not required for tourist stays|none required)/i.test(lower)) {
    return "visaFree";
  }

  if (/^yes\b/i.test(lower) || /(visa required|visa is required|obtain a visa before|obtain in advance|must obtain a visa|apply for a visa before|must apply for a visa|tourist visa.*required|required before travel)/i.test(lower)) {
    return "visaRequired";
  }

  return "unknown";
}

function buildData() {
  const indexHtml = fetchHtml(INDEX_URL);
  const destinations = extractDestinations(indexHtml);
  const access = {
    visaFree: [],
    eVisa: [],
    visaOnArrival: [],
    visaRequired: []
  };
  const sources = {
    visaFree: {},
    eVisa: {},
    visaOnArrival: {},
    visaRequired: {}
  };
  const unknown = [];

  for (const [index, destination] of destinations.entries()) {
    try {
      if ((index + 1) % 20 === 0 || index === 0) {
        console.error(`Fetching ${index + 1}/${destinations.length}: ${destination.name}`);
      }

      const html = fetchHtml(destination.url);
      const requirement = extractRequirementText(html);
      const category = classifyRequirement(requirement);

      if (access[category]) {
        access[category].push(destination.name);
        sources[category][destination.name] = destination.url;
      } else {
        unknown.push({ ...destination, requirement });
      }
    } catch (error) {
      unknown.push({ ...destination, requirement: `Fetch failed: ${error.message}` });
    }
  }

  for (const category of Object.keys(access)) {
    access[category].sort((a, b) => a.localeCompare(b, "en"));
  }

  return {
    generatedAt: new Date().toISOString(),
    source: INDEX_URL,
    access,
    sources,
    unknown
  };
}

mkdirSync(CACHE_DIR, { recursive: true });
mkdirSync(new URL("../", import.meta.url), { recursive: true });
const usData = buildData();
const output = `window.OFFICIAL_PASSPORT_ACCESS = ${JSON.stringify({ US: {
  verified: true,
  updated: usData.generatedAt.slice(0, 10),
  source: usData.source,
  access: usData.access,
  sources: usData.sources,
  unknown: usData.unknown
} }, null, 2)};\n`;

writeFileSync(OUTPUT_PATH, output);
console.log(JSON.stringify({
  updated: usData.generatedAt,
  counts: Object.fromEntries(Object.entries(usData.access).map(([key, value]) => [key, value.length])),
  unknown: usData.unknown.length,
  output: OUTPUT_PATH.pathname
}, null, 2));
