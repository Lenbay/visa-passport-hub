import fs from "node:fs/promises";

const API_KEY = "AIzaSyCd3jDrVQKwFnj_hk3j1gIjkqCghP3c3TY";
const API_BASE = "https://requirements-api.joinsherpa.com";
const DEFAULT_PASSPORT = "US";
const SHERPA_SOURCE_BASE_URL = "https://apply.joinsherpa.com/explore";
const DEVICE_ID = "00000000-0000-4000-8000-000000000000";
const LANGUAGES = [
  ["zh", "zh-CN"],
  ["en", "en-US"]
];

const tagPriority = ["visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"];
const zhLabels = {
  visaFree: "免签",
  eTA: "电子授权",
  visaOnArrival: "落地签",
  eVisa: "电子签",
  visaRequired: "需签证",
  reviewRequired: "需核验"
};
const enLabels = {
  visaFree: "Visa-free",
  eTA: "Electronic authorization",
  visaOnArrival: "Visa on arrival",
  eVisa: "eVisa",
  visaRequired: "Visa required",
  reviewRequired: "Review needed"
};

function readRegionCodes(source) {
  const match = source.match(/const regionCodes = \[([\s\S]*?)\];/);
  if (!match) {
    throw new Error("Unable to find regionCodes in script.js");
  }

  return JSON.parse(`[${match[1]}]`);
}

function readPassportCodes(source) {
  const match = source.match(/const passportIndexCodes = \[([\s\S]*?)\];/);
  if (!match) {
    throw new Error("Unable to find passportIndexCodes in script.js");
  }

  return JSON.parse(`[${match[1]}]`);
}

function getSherpaSourceUrl(passportCode) {
  return `${SHERPA_SOURCE_BASE_URL}/${passportCode}?affiliateId=sherpa&language=zh-CN&utm_source=b2bwebsite&utm_medium=web&utm_content=nav`;
}

function appliesToOrigin(attributes, passport) {
  const included = attributes.included || [];
  const excluded = attributes.excluded || [];
  const excludedOrigin = excluded.some((item) => isOriginMatcher(item, passport));
  if (excludedOrigin) {
    return false;
  }

  const originItems = included.filter((item) => item.locationType === "ORIGIN" || item.type === "NATIONALITY");
  if (!originItems.length) {
    return true;
  }

  return originItems.some((item) => isOriginMatcher(item, passport));
}

function isOriginMatcher(item, passport) {
  return passport.matchers.some((matcher) => item.isoAlpha3 === matcher || item.code === matcher);
}

function extractMaxStayDays(record) {
  const text = `${record.attributes?.title || ""} ${record.attributes?.description || ""}`;
  const matches = [...text.matchAll(/(\d+)\s*(?:天|day|days)/gi)].map((match) => Number(match[1]));
  return matches.length ? Math.max(...matches) : 0;
}

function isTravelerVisaRecord(attributes) {
  const tags = attributes.tags || [];
  const hasTravelerPurpose = tags.includes("tourism") || tags.includes("business");
  const transitOnly = tags.includes("transit") && !hasTravelerPurpose;
  return !transitOnly;
}

function classifyVisaRecord(record) {
  const attributes = record.attributes || {};
  const text = `${attributes.title || ""} ${attributes.description || ""}`.toLowerCase();
  const isTransit = (attributes.tags || []).includes("transit") && !(attributes.tags || []).includes("tourism");

  if (isTransit) {
    return "";
  }

  if (/无需签证|不需要签证|免签|签证豁免|no visa required|visa not required|visa-free|visa exemption/.test(text)) {
    return "visaFree";
  }

  if (/落地签|抵达时.*签证|visa on arrival|on-arrival visa|obtain.*visa.*arrival/.test(text)) {
    return "visaOnArrival";
  }

  if (/电子旅行授权|电子授权|\beta\b|esta|k-eta|electronic travel authorization|electronic system for travel authorization/.test(text)) {
    return "eTA";
  }

  if (/电子签证|电子签|\be-?visa\b|electronic visa/.test(text)) {
    return "eVisa";
  }

  if (/需要.*签证|必须.*签证|需.*签证|visa required|required to obtain.*visa|must obtain.*visa|must have.*visa|requires a visa/.test(text)) {
    return "visaRequired";
  }

  return "";
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getBestRecords(payload, passport) {
  const included = payload.included || [];
  return included
    .filter((record) => record.type === "PROCEDURE" || record.type === "RESTRICTION")
    .filter((record) => appliesToOrigin(record.attributes || {}, passport))
    .filter((record) => isTravelerVisaRecord(record.attributes || {}));
}

function chooseVisaRecord(records) {
  const classified = records
    .map((record) => ({ record, tag: classifyVisaRecord(record) }))
    .filter((item) => item.tag);

  classified.sort((first, second) => {
    const categoryDifference = tagPriority.indexOf(first.tag) - tagPriority.indexOf(second.tag);
    const stayDifference = extractMaxStayDays(second.record) - extractMaxStayDays(first.record);
    const includedDifference = (second.record.attributes?.included?.length || 0) - (first.record.attributes?.included?.length || 0);
    return categoryDifference || stayDifference || includedDifference;
  });
  return classified[0] || null;
}

function chooseSupportRecords(records, visaRecord) {
  const selected = [];
  const seen = new Set([visaRecord?.record?.id]);
  const keywords = /护照|passport|允许旅行|allowed|enter|入境|arrival|declaration|申报/iu;

  for (const record of records) {
    if (seen.has(record.id)) {
      continue;
    }

    const title = cleanText(record.attributes?.title);
    if (!title || !keywords.test(title)) {
      continue;
    }

    seen.add(record.id);
    selected.push(record);
    if (selected.length >= 2) {
      break;
    }
  }

  return selected;
}

function getRecordSource(record) {
  return record?.attributes?.source || {};
}

function getLatestDate(payload, records) {
  const dates = [
    payload.data?.attributes?.lastUpdatedAt,
    ...records.map((record) => record.attributes?.lastUpdatedAt)
  ].filter(Boolean).sort().reverse();

  return dates[0] ? dates[0].slice(0, 10) : "";
}

function summarizeLanguage(code, payload, languageKey, passport) {
  const country = payload.data?.attributes || {};
  const records = getBestRecords(payload, passport);
  const visaRecord = chooseVisaRecord(records);
  const supportRecords = chooseSupportRecords(records, visaRecord);
  const tag = visaRecord?.tag || "reviewRequired";
  const labels = languageKey === "zh" ? zhLabels : enLabels;
  const countryName = country.countryName || code;
  const visaTitle = cleanText(visaRecord?.record?.attributes?.title);
  const source = getRecordSource(visaRecord?.record || supportRecords[0]);
  const supportTitles = supportRecords
    .map((record) => cleanText(record.attributes?.title))
    .filter(Boolean);

  const summary = languageKey === "zh"
    ? `${passport.code} 护照前往${countryName}：${labels[tag]}${visaTitle ? `，${visaTitle}` : "，请核验入境文件要求"}。`
    : `${passport.code} passport to ${countryName}: ${labels[tag]}${visaTitle ? `, ${visaTitle}` : ", verify entry documents"}.`;

  const rules = [
    visaTitle || (languageKey === "zh" ? "签证结论待核验" : "Visa conclusion pending review"),
    ...supportTitles
  ].slice(0, 4);

  if (source.title) {
    rules.push(languageKey === "zh" ? `来源：${source.title}` : `Source: ${source.title}`);
  }

  return {
    name: countryName,
    isoAlpha3: country.isoAlpha3 || "",
    updated: getLatestDate(payload, records),
    tag,
    source: source.url || getSherpaSourceUrl(passport.code),
    sourceTitle: source.title || "Sherpa",
    summary,
    rules
  };
}

async function fetchCountry(code, locale) {
  const params = new URLSearchParams({
    include: "restriction,procedure",
    key: API_KEY,
    affiliateId: "sherpa",
    language: locale
  });
  const response = await fetch(`${API_BASE}/v2/countries/${code}?${params}`, {
    headers: {
      "user-agent": "Mozilla/5.0",
      "x-sherpa-deviceId": DEVICE_ID
    }
  });

  if (!response.ok) {
    throw new Error(`${code} ${locale} ${response.status}`);
  }

  return response.json();
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let index = 0;
  const runners = Array.from({ length: limit }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current], current);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const scriptSource = await fs.readFile("script.js", "utf8");
  const codes = readRegionCodes(scriptSource).filter((code) => /^[A-Z]{2}$/.test(code));
  const passportCodes = readPassportCodes(scriptSource);
  const countries = {};
  const passports = {};
  const payloadsByCode = {};
  const failures = [];

  await mapLimit(codes, 8, async (code) => {
    try {
      const localizedPayloads = {};
      for (const [languageKey, locale] of LANGUAGES) {
        localizedPayloads[languageKey] = await fetchCountry(code, locale);
      }
      payloadsByCode[code] = localizedPayloads;
      countries[code] = {
        isoAlpha3: localizedPayloads.zh.data?.attributes?.isoAlpha3 || localizedPayloads.en.data?.attributes?.isoAlpha3 || "",
        zh: localizedPayloads.zh.data?.attributes?.countryName || code,
        en: localizedPayloads.en.data?.attributes?.countryName || code,
        updated: localizedPayloads.zh.data?.attributes?.lastUpdatedAt?.slice(0, 10) || ""
      };
      process.stdout.write(".");
    } catch (error) {
      failures.push({ code, error: error.message });
      process.stdout.write("x");
    }
  });

  const passportProfiles = passportCodes
    .filter((code) => payloadsByCode[code]?.zh?.data?.attributes?.isoAlpha3 || code === "US")
    .map((code) => {
      const isoAlpha3 = payloadsByCode[code]?.zh?.data?.attributes?.isoAlpha3 || (code === "US" ? "USA" : "");
      const extraMatchers = {
        DE: ["D", "DEU"],
        GB: ["GBR"],
        KR: ["KOR"],
        XK: ["RKS"],
        VA: ["VAT"]
      }[code] || [];

      return {
        code,
        isoAlpha3,
        matchers: [...new Set([code, isoAlpha3, ...extraMatchers].filter(Boolean))]
      };
    });

  for (const passport of passportProfiles) {
    const recordsByDestination = {};
    const counts = Object.fromEntries(tagPriority.map((tag) => [tag, 0]));

    for (const [destinationCode, localizedPayloads] of Object.entries(payloadsByCode)) {
      const localized = {};
      for (const [languageKey] of LANGUAGES) {
        localized[languageKey] = summarizeLanguage(destinationCode, localizedPayloads[languageKey], languageKey, passport);
      }

      const zh = localized.zh;
      const en = localized.en;
      const tag = zh.tag === "reviewRequired" ? en.tag : zh.tag;
      counts[tag] = (counts[tag] || 0) + 1;
      recordsByDestination[destinationCode] = {
        verified: tag !== "reviewRequired",
        passport: passport.code,
        isoAlpha3: zh.isoAlpha3 || en.isoAlpha3,
        updated: [zh.updated, en.updated].filter(Boolean).sort().reverse()[0] || "",
        tags: [tag],
        category: tag,
        source: zh.source || en.source || getSherpaSourceUrl(passport.code),
        sourceTitle: {
          zh: zh.sourceTitle,
          en: en.sourceTitle
        },
        sherpaUrl: getSherpaSourceUrl(passport.code),
        zh: {
          name: zh.name,
          summary: zh.summary,
          rules: zh.rules
        },
        en: {
          name: en.name,
          summary: en.summary,
          rules: en.rules
        }
      };
    }

    passports[passport.code] = {
      code: passport.code,
      isoAlpha3: passport.isoAlpha3,
      counts,
      countryCount: Object.keys(recordsByDestination).length,
      countries: recordsByDestination
    };
  }

  const output = `window.SHERPA_VISA_RULES = ${JSON.stringify({
    meta: {
      provider: "Sherpa Requirements API",
      defaultPassport: DEFAULT_PASSPORT,
      source: getSherpaSourceUrl(DEFAULT_PASSPORT),
      generatedAt: new Date().toISOString(),
      countryCount: Object.keys(countries).length,
      passportCount: Object.keys(passports).length,
      failedCount: failures.length,
      failures
    },
    countries,
    passports,
    legacyCountries: passports[DEFAULT_PASSPORT]?.countries || {}
  }, null, 2)};\n`;

  await fs.writeFile("visa-sherpa-data.js", output);
  console.log(`\nWrote ${Object.keys(countries).length} destinations for ${Object.keys(passports).length} passports. Failed: ${failures.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
