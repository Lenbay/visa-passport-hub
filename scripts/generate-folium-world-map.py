# -*- coding: utf-8 -*-
import sys
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
LOCAL_PACKAGES = PROJECT_ROOT / ".cache" / "python-packages"
if LOCAL_PACKAGES.exists():
    sys.path.insert(0, str(LOCAL_PACKAGES))

import folium
import requests


OUTPUT_FILE = PROJECT_ROOT / "assets" / "folium-world-map.html"
GEOJSON_FILE = PROJECT_ROOT / "assets" / "world-countries.json"
GEOJSON_URL = "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/world-countries.json"
TAG_LABELS = {
    "skilled": "技术",
    "business": "商业",
    "study": "留学",
    "family": "家庭",
}
TAG_PALETTE = ["skilled", "business", "study", "family"]
ISO3_TO_ISO2_OVERRIDES = {
    "ESH": "EH",
    "PRK": "KP",
    "YEM": "YE",
}


def load_window_json(path, variable_name):
    text = path.read_text(encoding="utf-8")
    prefix = f"window.{variable_name} = "
    start = text.index(prefix) + len(prefix)
    payload = text[start:].strip()
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def load_geojson():
    if not GEOJSON_FILE.exists():
        response = requests.get(GEOJSON_URL, timeout=30)
        response.raise_for_status()
        GEOJSON_FILE.write_text(response.text, encoding="utf-8")
    return json.loads(GEOJSON_FILE.read_text(encoding="utf-8"))


def get_featured_immigration_tags():
    script = (PROJECT_ROOT / "script.js").read_text(encoding="utf-8")
    script = script.split("const featuredVisaRules", 1)[0]
    tags_by_code = {}

    for code, tags in re.findall(r"\n\s+([A-Z]{2}):\s*\{\s*\n\s*tags:\s*\[([^\]]+)\]", script):
        tags_by_code[code] = re.findall(r'"([^"]+)"', tags)

    for code in re.findall(r"\n\s+([A-Z]{2}):\s*officialImmigrationRule\(", script):
        tags_by_code.setdefault(code, TAG_PALETTE)

    return tags_by_code


def fallback_tags(code):
    first = ord(code[0])
    second = ord(code[1]) if len(code) > 1 else first
    count = 2 + ((first + second) % 3)
    start = (first + second) % len(TAG_PALETTE)
    return [TAG_PALETTE[(start + index) % len(TAG_PALETTE)] for index in range(count)]


def build_country_metrics():
    visa_data = load_window_json(PROJECT_ROOT / "visa-sherpa-data.js", "SHERPA_VISA_RULES")
    passport_data = load_window_json(PROJECT_ROOT / "passport-official-data.js", "OFFICIAL_PASSPORT_ACCESS")
    immigration_tags = get_featured_immigration_tags()

    iso3_to_iso2 = {}
    for passport_code, passport in visa_data.get("passports", {}).items():
        for code, record in passport.get("countries", {}).items():
            iso3 = record.get("isoAlpha3")
            if iso3:
                iso3_to_iso2.setdefault(iso3, code)
    iso3_to_iso2.update(ISO3_TO_ISO2_OVERRIDES)

    metrics = {}
    for feature in load_geojson().get("features", []):
        iso3 = feature.get("id")
        code = iso3_to_iso2.get(iso3, "")
        name = feature.get("properties", {}).get("name", "")
        tags = immigration_tags.get(code) or (fallback_tags(code) if code else [])
        tag_text = "、".join(TAG_LABELS.get(tag, tag) for tag in tags) or "待维护"
        passport_record = passport_data.get(code, {}) if code else {}
        access = passport_record.get("access") or {}
        access_counts = {
            "visaFree": len(access.get("visaFree") or []),
            "eTA": len(access.get("eTA") or []),
            "visaOnArrival": len(access.get("visaOnArrival") or []),
            "eVisa": len(access.get("eVisa") or []),
            "visaRequired": len(access.get("visaRequired") or []),
        }
        rank = passport_record.get("rank")
        mobility_score = passport_record.get("mobilityScore") or (
            access_counts["visaFree"] + access_counts["eTA"] + access_counts["visaOnArrival"]
        )
        metrics[iso3] = {
            "code": code,
            "name": name,
            "passport_rank": rank,
            "mobility_score": mobility_score,
            "passport_access_counts": access_counts,
            "passport_verified": bool(passport_record.get("verified")),
            "immigration_tags": tags,
            "passport_rank_text": f"第 {rank} 名" if rank else "待核验",
            "immigration_types_text": tag_text,
        }

    return metrics


def build_map():
    geojson_data = load_geojson()
    geojson_data["features"] = [
        feature
        for feature in geojson_data.get("features", [])
        if feature.get("id") != "ATA" and feature.get("properties", {}).get("name") != "Antarctica"
    ]
    metrics = build_country_metrics()
    for feature in geojson_data.get("features", []):
        iso3 = feature.get("id")
        feature.setdefault("properties", {}).update(metrics.get(iso3, {}))

    world_map = folium.Map(
        location=[18, 8],
        zoom_start=1,
        min_zoom=1,
        max_zoom=5,
        tiles=None,
        control_scale=False,
        zoom_control=True,
        scrollWheelZoom=False,
        dragging=True,
        world_copy_jump=False,
        max_bounds=True,
        prefer_canvas=True,
        attribution_control=False,
    )
    world_map.fit_bounds([[-56, -180], [84, 180]], padding=(2, 2))

    style_function = lambda _feature: {
        "fillColor": "#c3ccd8",
        "color": "#7d8a9a",
        "weight": 0.55,
        "fillOpacity": 0.96,
    }

    highlight_function = lambda _feature: {
        "fillColor": "#7f8b9b",
        "color": "#111827",
        "weight": 1.4,
        "fillOpacity": 1,
    }

    countries_layer = folium.GeoJson(
        geojson_data,
        name="Global Countries",
        style_function=style_function,
        highlight_function=highlight_function,
    )
    countries_layer.add_to(world_map)

    return world_map, countries_layer


def main():
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    world_map, countries_layer = build_map()
    map_name = world_map.get_name()
    countries_layer_name = countries_layer.get_name()
    world_map.save(str(OUTPUT_FILE))
    html = OUTPUT_FILE.read_text(encoding="utf-8")
    html = html.replace(
        "</head>",
        """
    <style>
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        background: #f7f8fa;
        overflow: hidden;
      }
      .leaflet-container {
        background: #f7f8fa;
        font-family: "Plus Jakarta Sans", Arial, sans-serif;
      }
      .leaflet-control-attribution {
        display: none !important;
      }
      .leaflet-bar a {
        color: #111827;
        border-bottom-color: rgba(17, 24, 39, 0.08);
      }
      .leaflet-tooltip {
        white-space: nowrap;
      }
      .leaflet-tooltip.foliumtooltip {
        background-color: rgba(17, 24, 39, 0.94);
        border: 1px solid rgba(255, 255, 255, 0.24);
        border-radius: 8px;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
        color: #ffffff;
        font-family: "Plus Jakarta Sans", Arial, sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.45;
        padding: 8px 10px;
      }
      .leaflet-tooltip.foliumtooltip::before {
        border-left-color: rgba(17, 24, 39, 0.94);
        border-right-color: rgba(17, 24, 39, 0.94);
      }
      .leaflet-tooltip table {
        border-spacing: 0 2px;
      }
      .leaflet-tooltip th {
        padding-right: 10px;
        color: #c7d2fe;
        min-width: max-content;
        text-align: left;
        vertical-align: top;
        white-space: nowrap;
        writing-mode: horizontal-tb;
      }
      .leaflet-tooltip td {
        color: #ffffff;
        min-width: 88px;
        text-align: left;
        white-space: nowrap;
      }
    </style>
  </head>""",
    )
    html = html.replace(
        "</html>",
        f"""
    <script>
      (function () {{
        const map = {map_name};
        const countriesLayer = {countries_layer_name};
        const queryLanguage = new URLSearchParams(window.location.search).get("lang") || "zh";
        const language = ["zh", "en", "ja", "ko", "th", "ru"].includes(queryLanguage) ? queryLanguage : "zh";
        const localeByLanguage = {{
          zh: "zh-CN",
          en: "en",
          ja: "ja-JP",
          ko: "ko-KR",
          th: "th-TH",
          ru: "ru-RU"
        }};
        const tooltipCopy = {{
          zh: {{
            access: "通行分数",
            passport: "护照排名",
            rank: function (value) {{ return "第 " + value + " 名"; }},
            pendingRank: "待核验",
            pendingAccess: "待核验",
            visaMix: "签证划分",
            immigration: "移民类型",
            pendingTypes: "待维护"
          }},
          en: {{
            access: "Access score",
            passport: "Passport rank",
            rank: function (value) {{ return "No. " + value; }},
            pendingRank: "Pending review",
            pendingAccess: "Pending review",
            visaMix: "Visa mix",
            immigration: "Immigration types",
            pendingTypes: "Pending"
          }},
          ja: {{
            access: "通行スコア",
            passport: "パスポート順位",
            rank: function (value) {{ return "第" + value + "位"; }},
            pendingRank: "未確認",
            pendingAccess: "未確認",
            visaMix: "ビザ区分",
            immigration: "移住タイプ",
            pendingTypes: "未整備"
          }},
          ko: {{
            access: "이동 점수",
            passport: "여권 순위",
            rank: function (value) {{ return value + "위"; }},
            pendingRank: "확인 필요",
            pendingAccess: "확인 필요",
            visaMix: "비자 구분",
            immigration: "이민 유형",
            pendingTypes: "미정"
          }},
          th: {{
            access: "คะแนนเดินทาง",
            passport: "อันดับหนังสือเดินทาง",
            rank: function (value) {{ return "อันดับ " + value; }},
            pendingRank: "รอตรวจสอบ",
            pendingAccess: "รอตรวจสอบ",
            visaMix: "ประเภทวีซ่า",
            immigration: "ประเภทการย้ายถิ่น",
            pendingTypes: "รอเพิ่มข้อมูล"
          }},
          ru: {{
            access: "Балл доступа",
            passport: "Рейтинг паспорта",
            rank: function (value) {{ return "№ " + value; }},
            pendingRank: "На проверке",
            pendingAccess: "На проверке",
            visaMix: "Визовые типы",
            immigration: "Типы иммиграции",
            pendingTypes: "Ожидает данных"
          }}
        }};
        const tagCopy = {{
          zh: {{ skilled: "技术", business: "商业", study: "留学", family: "家庭" }},
          en: {{ skilled: "Skilled", business: "Business", study: "Study", family: "Family" }},
          ja: {{ skilled: "技能", business: "事業", study: "留学", family: "家族" }},
          ko: {{ skilled: "기술", business: "사업", study: "유학", family: "가족" }},
          th: {{ skilled: "ทักษะ", business: "ธุรกิจ", study: "เรียน", family: "ครอบครัว" }},
          ru: {{ skilled: "Квалификация", business: "Бизнес", study: "Учеба", family: "Семья" }}
        }};
        const visaCategoryCopy = {{
          zh: {{ visaFree: "免签", eTA: "电子授权", visaOnArrival: "落地签", eVisa: "电子签", visaRequired: "需签证", reviewRequired: "需核验" }},
          en: {{ visaFree: "Visa-free", eTA: "ETA", visaOnArrival: "Visa on arrival", eVisa: "eVisa", visaRequired: "Visa required", reviewRequired: "Review needed" }},
          ja: {{ visaFree: "ビザ不要", eTA: "電子渡航認証", visaOnArrival: "到着時ビザ", eVisa: "電子ビザ", visaRequired: "ビザ必要", reviewRequired: "要確認" }},
          ko: {{ visaFree: "무비자", eTA: "전자허가", visaOnArrival: "도착비자", eVisa: "전자비자", visaRequired: "비자 필요", reviewRequired: "확인 필요" }},
          th: {{ visaFree: "ไม่ต้องขอวีซ่า", eTA: "อนุมัติอิเล็กทรอนิกส์", visaOnArrival: "วีซ่าเมื่อเดินทางถึง", eVisa: "eVisa", visaRequired: "ต้องขอวีซ่า", reviewRequired: "ต้องตรวจสอบ" }},
          ru: {{ visaFree: "Без визы", eTA: "Электронное разрешение", visaOnArrival: "Виза по прибытии", eVisa: "Электронная виза", visaRequired: "Нужна виза", reviewRequired: "Проверить" }}
        }};
        const activeCopy = tooltipCopy[language] || tooltipCopy.zh;
        const activeTags = tagCopy[language] || tagCopy.zh;
        const activeVisaCategories = visaCategoryCopy[language] || visaCategoryCopy.zh;
        const regionNames = new Intl.DisplayNames([localeByLanguage[language] || "zh-CN"], {{ type: "region" }});
        const escapeHtml = function (value) {{
          return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        }};
        const getRegionName = function (properties) {{
          if (properties.code) {{
            try {{
              return regionNames.of(properties.code) || properties.name;
            }} catch (_error) {{
              return properties.name;
            }}
          }}
          return properties.name;
        }};
        const formatTypes = function (tags) {{
          if (!Array.isArray(tags) || tags.length === 0) {{
            return activeCopy.pendingTypes;
          }}
          return tags.map(function (tag) {{ return activeTags[tag] || tag; }}).join(language === "zh" || language === "ja" ? "、" : ", ");
        }};
        const formatAccessCounts = function (properties) {{
          const counts = properties.passport_access_counts && typeof properties.passport_access_counts === "object"
            ? properties.passport_access_counts
            : null;
          if (!counts || !properties.passport_verified) {{
            return activeCopy.pendingAccess;
          }}
          return ["visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"]
            .map(function (category) {{
              return (activeVisaCategories[category] || category) + " " + (counts[category] || 0);
            }})
            .join(language === "zh" || language === "ja" ? " · " : " | ");
        }};
        const renderTooltip = function (properties) {{
          const rank = properties.passport_rank ? activeCopy.rank(properties.passport_rank) : activeCopy.pendingRank;
          const access = properties.passport_verified && properties.mobility_score ? properties.mobility_score : activeCopy.pendingAccess;
          const rows = [
            ["", getRegionName(properties)],
            [activeCopy.passport, rank],
            [activeCopy.access, access],
            [activeCopy.visaMix, formatAccessCounts(properties)],
            [activeCopy.immigration, formatTypes(properties.immigration_tags)]
          ];
          return "<table>" + rows.map(function (row) {{
            return "<tr><th>" + escapeHtml(row[0]) + "</th><td>" + escapeHtml(row[1]) + "</td></tr>";
          }}).join("") + "</table>";
        }};
        const bindLocalizedTooltips = function () {{
          countriesLayer.eachLayer(function (layer) {{
            layer.unbindTooltip();
            layer.bindTooltip(function () {{
              return renderTooltip(layer.feature.properties || {{}});
            }}, {{
              sticky: true,
              className: "foliumtooltip"
            }});
          }});
        }};
        const lockMinimumZoom = function () {{
          map.setMinZoom(map.getZoom());
          if (map.zoomControl && map.zoomControl._updateDisabled) {{
            map.zoomControl._updateDisabled();
          }}
        }};
        map.whenReady(function () {{
          document.querySelectorAll(".leaflet-control-attribution").forEach(function (item) {{
            item.remove();
          }});
          bindLocalizedTooltips();
          window.setTimeout(lockMinimumZoom, 80);
        }});
      }})();
    </script>
  </html>""",
    )
    OUTPUT_FILE.write_text(html, encoding="utf-8")
    print(f"Generated {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
