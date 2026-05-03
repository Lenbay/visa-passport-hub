const regionCodes = [
  "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ",
  "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ",
  "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CR", "CU", "CV", "CW", "CX", "CY", "CZ",
  "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET",
  "FI", "FJ", "FK", "FM", "FO", "FR",
  "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY",
  "HK", "HM", "HN", "HR", "HT", "HU",
  "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT",
  "JE", "JM", "JO", "JP",
  "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ",
  "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY",
  "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ",
  "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ",
  "OM",
  "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY",
  "QA",
  "RE", "RO", "RS", "RU", "RW",
  "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ",
  "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ",
  "UA", "UG", "UM", "US", "UY", "UZ",
  "VA", "VC", "VE", "VG", "VI", "VN", "VU",
  "WF", "WS", "XK",
  "YE", "YT",
  "ZA", "ZM", "ZW"
];

const copy = {
  zh: {
    locale: "zh-CN",
    languageFlag: "🇨🇳",
    languageLabel: "中文",
    title: "通行图谱",
    homeBrand: "通行图谱",
    navHome: "首页",
    navCountries: "国家规则",
    navWatchlist: "重点提醒",
    navSources: "官方来源",
    passportLabel: "护照",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "你想前往哪里？",
    homeText: "用一个极简入口浏览全球目的地，快速比较移民路径、签证类型和护照出行便利度。",
    homeSearchLabel: "搜索目的地",
    homeSearchPlaceholder: "搜索国家、签证或护照目的地",
    homeBadgeVisa: "签证资料库",
    homeBadgeImmigration: "移民路径",
    homeBadgePassport: "护照出行",
    blueprintKicker: "悬浮国家",
    blueprintImmigration: "移民类型",
    blueprintVisa: "签证类型",
    blueprintPassport: "护照信息",
    blueprintDefaultCountry: "选择一个国家或地区",
    blueprintDefaultNote: "悬浮蓝图上的任意国家/地区，快速预览资料库里可维护的路径。",
    blueprintNote: "资料库已为该目的地预留移民与签证规则入口，可继续向下切换查看详情。",
    introEyebrow: "About",
    introTitle: "一个同时管理移民与签证规则的网站。",
    introOneTag: "资料库",
    introOneTitle: "按国家统一收纳",
    introOneText: "每个国家和地区都能维护移民、签证、官方来源、更新时间和关键申请条件。",
    introTwoTag: "检索",
    introTwoTitle: "先看地图，再进详情",
    introTwoText: "首页适合快速发现目的地，下方资料库适合筛选、搜索和展开阅读完整规则。",
    introThreeTag: "维护",
    introThreeTitle: "为更新留好位置",
    introThreeText: "页面预留最后核验日期和官方链接，方便后续接入后台、表格或人工审核流程。",
    heroTitle: "把各国移民规则集中在一个可检索、可展开的页面里。",
    heroText: "每个国家和地区是一块独立信息区。页面会根据屏幕宽度自动排列，电脑上一行显示多个，手机上单列阅读，点击即可展开详细规则。",
    countryCountLabel: "个国家/地区",
    pathCountLabel: "类移民路径",
    yearLabel: "可标记更新年份",
    searchLabel: "搜索国家、地区或关键词",
    searchPlaceholder: "例如：加拿大、香港、台湾、技术移民、投资、留学",
    filters: { all: "全部", skilled: "技术", business: "商业", study: "留学", family: "家庭" },
    countriesTitle: "国家与地区规则",
    countriesText: "下方覆盖全球国家及地区，包含港澳台等地区。重点国家已有示例详情，其余条目预留为待维护规则卡片。",
    emptyState: "没有找到匹配的国家、地区或规则。换个关键词试试。",
    watchlistTitle: "重点提醒",
    watchlistText: "适合放置最近变更、配额关闭、申请费调整、语言要求更新等需要优先核验的信息。",
    noticeOneTag: "更新频率",
    noticeOneTitle: "给每条规则保留“最后核验日期”",
    noticeOneText: "移民政策变化快，页面中的更新时间应来自官方公告或持牌顾问核验记录。",
    noticeTwoTag: "资料来源",
    noticeTwoTitle: "优先链接官方移民局页面",
    noticeTwoText: "每个国家卡片都预留官方来源按钮，方便用户跳转确认原文。",
    noticeThreeTag: "免责声明",
    noticeThreeTitle: "页面可展示信息，不替代法律意见",
    noticeThreeText: "正式申请前应再次核对官方规则，并咨询合资格专业人士。",
    sourcesTitle: "官方来源管理",
    sourcesText: "建议把所有官方来源、更新时间和编辑人维护在同一份表格或后台中，再同步到这个页面。当前版本使用前端数据演示，方便你先确认页面效果。",
    footerBrand: "通行图谱",
    footerNote: "信息展示模板，仅供搭建资料库使用。",
    genericSummary: "该国家/地区规则待维护，可在此记录技术、商业、留学与家庭类移民信息。",
    genericRules: [
      "添加官方移民局或政府签证页面链接，并记录最后核验日期。",
      "按技术、商业、留学、家庭等路径补充申请条件、费用、周期和限制。",
      "正式发布前请再次核验最新政策，避免使用过期资料。"
    ],
    pendingUpdated: "待核验",
    pendingSource: "待添加来源",
    lastChecked: "最后核验",
    officialSource: "官方来源",
    regionLabel: "全球",
    fallbackName: "未命名地区"
  },
  en: {
    locale: "en",
    languageFlag: "🇺🇸",
    languageLabel: "English",
    title: "Mobility Atlas",
    homeBrand: "Mobility Atlas",
    navHome: "Home",
    navCountries: "Countries",
    navWatchlist: "Watchlist",
    navSources: "Sources",
    passportLabel: "Passport",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "Where do you want to move?",
    homeText: "Start from one clean global entry point and compare immigration routes, visa types, and passport access by destination.",
    homeSearchLabel: "Search destination",
    homeSearchPlaceholder: "Search countries, visas, or passport access",
    homeBadgeVisa: "Visa Database",
    homeBadgeImmigration: "Immigration Routes",
    homeBadgePassport: "Passport Access",
    blueprintKicker: "Hover A Country",
    blueprintImmigration: "Immigration Types",
    blueprintVisa: "Visa Types",
    blueprintPassport: "Passport Info",
    blueprintDefaultCountry: "Choose a country or region",
    blueprintDefaultNote: "Hover any destination on the blueprint to preview the maintained pathways.",
    blueprintNote: "The database has immigration and visa rule slots ready for this destination. Continue below to switch views and read details.",
    introEyebrow: "About",
    introTitle: "One website for both immigration and visa rules.",
    introOneTag: "Database",
    introOneTitle: "Organized by destination",
    introOneText: "Each country and region can maintain immigration, visa, official source, update date, and key requirement information.",
    introTwoTag: "Discovery",
    introTwoTitle: "Map first, details next",
    introTwoText: "The homepage is for fast destination discovery; the database below is for filtering, searching, and expanding full rules.",
    introThreeTag: "Maintenance",
    introThreeTitle: "Ready for updates",
    introThreeText: "The page leaves room for last-checked dates and official links, making it ready for a backend, spreadsheet, or review workflow.",
    heroTitle: "A searchable, expandable hub for immigration rules by country and region.",
    heroText: "Each country or region has its own compact area. The grid adapts to the viewport, showing many items per row on desktop and a single readable column on mobile.",
    countryCountLabel: "countries/regions",
    pathCountLabel: "path categories",
    yearLabel: "update year ready",
    searchLabel: "Search country, region, or keyword",
    searchPlaceholder: "Try Canada, Hong Kong, Taiwan, skilled, investment, study",
    filters: { all: "All", skilled: "Skilled", business: "Business", study: "Study", family: "Family" },
    countriesTitle: "Country And Region Rules",
    countriesText: "The grid covers countries and territories worldwide, including Hong Kong, Macao, and Taiwan. Featured countries include sample details; the rest are ready-to-edit placeholders.",
    emptyState: "No matching country, region, or rule found. Try another keyword.",
    watchlistTitle: "Watchlist",
    watchlistText: "Use this area for recent changes, quota closures, fee updates, language requirement changes, and other items that need priority verification.",
    noticeOneTag: "Update cadence",
    noticeOneTitle: "Keep a last-checked date for every rule",
    noticeOneText: "Immigration policies change quickly. Dates should come from official announcements or verified professional review.",
    noticeTwoTag: "Sources",
    noticeTwoTitle: "Prioritize official immigration pages",
    noticeTwoText: "Each card has room for an official source link so readers can verify the original policy.",
    noticeThreeTag: "Disclaimer",
    noticeThreeTitle: "Information display, not legal advice",
    noticeThreeText: "Before applying, verify the official rules again and consult a qualified professional.",
    sourcesTitle: "Official Source Management",
    sourcesText: "A spreadsheet or backend can maintain source links, update dates, and editors, then sync into this page. This version uses front-end demo data so you can confirm the interface first.",
    footerBrand: "Mobility Atlas",
    footerNote: "Information template for building an immigration rules database.",
    genericSummary: "Rules for this country or region are ready to maintain. Add skilled, business, study, and family immigration details here.",
    genericRules: [
      "Add the official immigration or government visa page and keep a last-checked date.",
      "Document requirements, fees, timelines, and restrictions by immigration pathway.",
      "Verify the latest policy before publishing to avoid outdated guidance."
    ],
    pendingUpdated: "Pending review",
    pendingSource: "Source pending",
    lastChecked: "Last checked",
    officialSource: "Official source",
    regionLabel: "Global",
    fallbackName: "Unnamed region"
  }
};

const productContent = {
  zh: {
    immigration: {
      brand: "全球移民规则库",
      tab: "移民",
      title: "全球移民规则库",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "把各国移民规则集中在一个可检索、可展开的页面里。",
      heroText: "每个国家和地区是一块独立信息区。页面会根据屏幕宽度自动排列，电脑上一行显示多个，手机上单列阅读，点击即可展开详细规则。",
      categoryCountLabel: "类移民路径",
      searchLabel: "搜索国家、地区或关键词",
      searchPlaceholder: "例如：加拿大、香港、台湾、技术移民、投资、留学",
      filters: { all: "全部", skilled: "技术", business: "商业", study: "留学", family: "家庭" },
      filterOrder: ["all", "skilled", "business", "study", "family"],
      countriesTitle: "国家与地区移民规则",
      countriesText: "下方覆盖全球国家及地区，包含港澳台等地区。重点国家已有移民示例详情，其余条目预留为待维护规则卡片。",
      emptyState: "没有找到匹配的国家、地区或移民规则。换个关键词试试。",
      genericSummary: "该国家/地区移民规则待维护，可在此记录技术、商业、留学与家庭类移民信息。",
      genericRules: copy.zh.genericRules,
      watchlistText: "适合放置最近移民政策变更、配额关闭、申请费调整、语言要求更新等需要优先核验的信息。",
      noticeOneTitle: "给每条移民规则保留“最后核验日期”",
      noticeOneText: "移民政策变化快，页面中的更新时间应来自官方公告或持牌顾问核验记录。",
      noticeTwoText: "每个移民卡片都预留官方来源按钮，方便用户跳转确认原文。",
      footerBrand: "全球移民规则库",
      footerNote: "移民信息展示模板，仅供搭建资料库使用。"
    },
    visa: {
      brand: "全球签证规则库",
      tab: "签证",
      title: "全球签证规则库",
      eyebrow: "Visa Rules Hub",
      heroTitle: "选择护照国家，查看各目的地签证与入境要求。",
      heroText: "签证页数据来自 Sherpa Requirements API。先设置护照国家，右侧会汇总该护照前往其他目的地的签证类型数量，下方国家卡片同步展示对应标签和内容。",
      categoryCountLabel: "类入境结论",
      searchLabel: "搜索国家、地区或签证结论",
      searchPlaceholder: "例如：日本、澳大利亚、电子授权、落地签、需签证",
      filters: { all: "全部", visaFree: "免签", eTA: "电子授权", visaOnArrival: "落地签", eVisa: "电子签", visaRequired: "需签证", reviewRequired: "需核验" },
      filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"],
      countriesTitle: "Sherpa 签证与入境要求",
      countriesText: "下方展示 Sherpa 可返回的全球目的地数据。每张卡片会按当前选择的护照国家展示签证结论，并保留对应政府或 Sherpa 来源链接。",
      emptyState: "没有找到匹配的国家、地区或签证规则。换个关键词试试。",
      genericSummary: "Sherpa 暂未返回该目的地适用于 USA 护照的签证结论，请进入来源页核验。",
      genericRules: [
        "打开来源页核验目的地是否有免签、电子授权、落地签、电子签或需提前签证要求。",
        "按护照、居住地、出行目的和停留期限分别确认适用条件。",
        "正式申请前请再次核验目的地政府或领事馆的最新入境要求。"
      ],
      watchlistText: "适合放置免签政策、电子授权、电子签开放、落地签暂停、材料清单和入境限制等重点变化。",
      noticeOneTitle: "给每条签证规则保留“最后核验日期”",
      noticeOneText: "当前签证页使用 Sherpa 返回的更新时间，并保留其对应政府或官方来源链接。",
      noticeTwoText: "每个签证卡片都预留官方来源按钮，方便用户跳转确认原文。",
      footerBrand: "全球签证规则库",
      footerNote: "签证信息按所选护照国家展示，正式出行前请核验来源。"
    },
    passport: {
      brand: "全球护照资料库",
      tab: "护照",
      title: "全球护照资料库",
      eyebrow: "Passport Atlas",
      heroTitle: "按护照查看可免签、电子授权、落地签和电子签前往的目的地。",
      heroText: "护照页展示 Henley Passport Index 2026 排名、通行分数和目的地分类数据，并保留官方来源跳转。",
      categoryCountLabel: "类入境方式",
      searchLabel: "搜索国家、地区或护照关键词",
      searchPlaceholder: "例如：中国、美国、日本、免签、电子签、落地签",
      filters: { all: "全部", visaFree: "免签", eTA: "电子授权", visaOnArrival: "落地签", eVisa: "电子签", visaRequired: "需签证" },
      filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"],
      countriesTitle: "Henley 2026 护照出行能力",
      countriesText: "数据来自 Henley Passport Index 2026 Global Ranking 与 Henley 护照指数 API，按通行分数降序展示，并细分免签、电子授权、落地签、电子签和需签证。",
      emptyState: "没有找到匹配的国家、地区或护照信息。换个关键词试试。",
      genericSummary: "该护照出行能力待维护，可在此记录免签、电子签、落地签和需提前签证目的地。",
      genericRules: [
        "记录该护照可免签进入的国家/地区，并标注最长停留时间。",
        "记录电子签、落地签和需提前签证目的地，补充申请入口和限制条件。",
        "正式发布前请再次核验官方入境要求、护照有效期要求和转机规则。"
      ],
      watchlistText: "适合放置免签政策变化、电子签开放、落地签暂停、护照有效期要求和入境限制。",
      noticeOneTitle: "给每条护照出行信息保留“最后核验日期”",
      noticeOneText: "免签和签证便利政策变化快，应以目的地官方移民局、外交部或领事页面为准。",
      noticeTwoText: "每个护照卡片都预留官方来源按钮，方便用户确认最新入境要求。",
      footerBrand: "全球护照出行资料库",
      footerNote: "护照免签、电子签和落地签信息展示模板。"
    }
  },
  en: {
    immigration: {
      brand: "Global Immigration Rules Hub",
      tab: "Immigration",
      title: "Global Immigration Rules Hub",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "A searchable, expandable hub for immigration rules by country and region.",
      heroText: "Each country or region has its own compact area. The grid adapts to the viewport, showing many items per row on desktop and a single readable column on mobile.",
      categoryCountLabel: "path categories",
      searchLabel: "Search country, region, or keyword",
      searchPlaceholder: "Try Canada, Hong Kong, Taiwan, skilled, investment, study",
      filters: { all: "All", skilled: "Skilled", business: "Business", study: "Study", family: "Family" },
      filterOrder: ["all", "skilled", "business", "study", "family"],
      countriesTitle: "Country And Region Immigration Rules",
      countriesText: "The grid covers countries and territories worldwide, including Hong Kong, Macao, and Taiwan. Featured countries include sample immigration details; the rest are ready-to-edit placeholders.",
      emptyState: "No matching country, region, or immigration rule found. Try another keyword.",
      genericSummary: "Immigration rules for this country or region are ready to maintain. Add skilled, business, study, and family details here.",
      genericRules: copy.en.genericRules,
      watchlistText: "Use this area for immigration policy changes, quota closures, fee updates, language requirement changes, and other items that need priority verification.",
      noticeOneTitle: "Keep a last-checked date for every immigration rule",
      noticeOneText: "Immigration policies change quickly. Dates should come from official announcements or verified professional review.",
      noticeTwoText: "Each immigration card has room for an official source link so readers can verify the original policy.",
      footerBrand: "Global Immigration Rules Hub",
      footerNote: "Immigration information template for building a rules database."
    },
    visa: {
      brand: "Global Visa Rules Hub",
      tab: "Visa",
      title: "Global Visa Rules Hub",
      eyebrow: "Visa Rules Hub",
      heroTitle: "Choose a passport country and review visa requirements.",
      heroText: "Visa data is generated from the Sherpa Requirements API. Set a passport country first; the stats summarize that passport's access by visa outcome and the destination cards update with matching tags and details.",
      categoryCountLabel: "entry outcomes",
      searchLabel: "Search countries, regions, or visa outcomes",
      searchPlaceholder: "Try Japan, Australia, ETA, visa on arrival, visa required",
      filters: { all: "All", visaFree: "Visa-free", eTA: "ETA", visaOnArrival: "Visa on arrival", eVisa: "eVisa", visaRequired: "Visa required", reviewRequired: "Review needed" },
      filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"],
      countriesTitle: "Sherpa Visa and Entry Requirements",
      countriesText: "The grid shows global destinations returned by Sherpa. Each card uses the selected passport country and keeps the related government or Sherpa source link.",
      emptyState: "No matching country, region, or visa rule found. Try another keyword.",
      genericSummary: "Sherpa has not returned a USA-passport visa outcome for this destination. Check the source page.",
      genericRules: [
        "Open the source page to verify visa-free, ETA, visa-on-arrival, eVisa, or advance-visa requirements.",
        "Confirm applicability by passport, residence, travel purpose, and stay duration.",
        "Before travel, re-check the destination government or consular source."
      ],
      watchlistText: "Use this area for visa-free changes, eVisa launches, document lists, visa fees, processing times, and entry restriction updates.",
      noticeOneTitle: "Keep a last-checked date for every visa rule",
      noticeOneText: "The current visa page uses Sherpa's returned update date and keeps the related government or official source link.",
      noticeTwoText: "Each visa card keeps a source button so users can confirm the original page.",
      footerBrand: "Global Visa Rules Hub",
      footerNote: "Visa information is shown for the selected passport country. Re-check sources before travel."
    },
    passport: {
      brand: "Global Passport Atlas",
      tab: "Passport",
      title: "Global Passport Atlas",
      eyebrow: "Passport Atlas",
      heroTitle: "Explore visa-free, ETA, visa-on-arrival, and eVisa access by passport.",
      heroText: "The passport view uses Henley Passport Index 2026 rankings, access scores, and destination categories with source links.",
      categoryCountLabel: "entry categories",
      searchLabel: "Search country, region, or passport keyword",
      searchPlaceholder: "Try China, United States, Japan, visa-free, eVisa, visa on arrival",
      filters: { all: "All", visaFree: "Visa-free", eTA: "ETA", visaOnArrival: "Visa on arrival", eVisa: "eVisa", visaRequired: "Visa required" },
      filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"],
      countriesTitle: "Henley 2026 Passport Access",
      countriesText: "Data comes from the Henley Passport Index 2026 Global Ranking and Henley Passport Index API, sorted by access score and split into visa-free, ETA, visa-on-arrival, eVisa, and visa-required destinations.",
      emptyState: "No matching country, region, or passport information found. Try another keyword.",
      genericSummary: "Passport travel access is ready to maintain. Add visa-free, eVisa, visa-on-arrival, and visa-required destinations here.",
      genericRules: [
        "Record visa-free destinations and add maximum stay lengths where available.",
        "Record eVisa, visa-on-arrival, and visa-required destinations with application links and conditions.",
        "Verify official entry rules, passport validity, transit rules, and special restrictions before publishing."
      ],
      watchlistText: "Use this area for visa-free updates, eVisa launches, visa-on-arrival suspensions, passport validity rules, and entry restrictions.",
      noticeOneTitle: "Keep a last-checked date for every passport access item",
      noticeOneText: "Travel access rules change quickly and should be verified against official immigration, foreign ministry, or consular pages.",
      noticeTwoText: "Each passport card has room for an official source link so readers can verify current entry requirements.",
      footerBrand: "Global Passport Access Atlas",
      footerNote: "Passport visa-free, eVisa, and visa-on-arrival information template."
    }
  }
};

const languageProfiles = {
  ja: {
    locale: "ja-JP",
    languageFlag: "🇯🇵",
    languageLabel: "日本語",
    navHome: "ホーム",
    homeBrand: "モビリティアトラス",
    passportLabel: "パスポート"
  },
  ko: {
    locale: "ko-KR",
    languageFlag: "🇰🇷",
    languageLabel: "한국어",
    navHome: "홈",
    homeBrand: "모빌리티 아틀라스",
    passportLabel: "여권"
  },
  th: {
    locale: "th-TH",
    languageFlag: "🇹🇭",
    languageLabel: "ไทย",
    navHome: "หน้าแรก",
    homeBrand: "Mobility Atlas",
    passportLabel: "หนังสือเดินทาง"
  },
  ru: {
    locale: "ru-RU",
    languageFlag: "🇷🇺",
    languageLabel: "Русский",
    navHome: "Главная",
    homeBrand: "Атлас мобильности",
    passportLabel: "Паспорт"
  }
};

const productLanguageProfiles = {
  ja: {
    immigration: { tab: "移住", filters: { all: "すべて", skilled: "技能", business: "事業", study: "留学", family: "家族" }, filterOrder: ["all", "skilled", "business", "study", "family"] },
    visa: { tab: "ビザ", filters: { all: "すべて", visaFree: "ビザ不要", eTA: "電子渡航認証", visaOnArrival: "到着時ビザ", eVisa: "電子ビザ", visaRequired: "ビザ必要", reviewRequired: "要確認" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"] },
    passport: { tab: "パスポート", filters: { all: "すべて", visaFree: "ビザ不要", eTA: "電子渡航認証", visaOnArrival: "到着時ビザ", eVisa: "電子ビザ", visaRequired: "ビザ必要" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"] }
  },
  ko: {
    immigration: { tab: "이민", filters: { all: "전체", skilled: "기술", business: "사업", study: "유학", family: "가족" }, filterOrder: ["all", "skilled", "business", "study", "family"] },
    visa: { tab: "비자", filters: { all: "전체", visaFree: "무비자", eTA: "전자허가", visaOnArrival: "도착비자", eVisa: "전자비자", visaRequired: "비자 필요", reviewRequired: "확인 필요" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"] },
    passport: { tab: "여권", filters: { all: "전체", visaFree: "무비자", eTA: "전자허가", visaOnArrival: "도착비자", eVisa: "전자비자", visaRequired: "비자 필요" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"] }
  },
  th: {
    immigration: { tab: "ย้ายถิ่น", filters: { all: "ทั้งหมด", skilled: "ทักษะ", business: "ธุรกิจ", study: "เรียน", family: "ครอบครัว" }, filterOrder: ["all", "skilled", "business", "study", "family"] },
    visa: { tab: "วีซ่า", filters: { all: "ทั้งหมด", visaFree: "ไม่ต้องขอวีซ่า", eTA: "อนุมัติอิเล็กทรอนิกส์", visaOnArrival: "วีซ่าเมื่อเดินทางถึง", eVisa: "eVisa", visaRequired: "ต้องขอวีซ่า", reviewRequired: "ต้องตรวจสอบ" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"] },
    passport: { tab: "หนังสือเดินทาง", filters: { all: "ทั้งหมด", visaFree: "ไม่ต้องขอวีซ่า", eTA: "อนุมัติอิเล็กทรอนิกส์", visaOnArrival: "วีซ่าเมื่อเดินทางถึง", eVisa: "eVisa", visaRequired: "ต้องขอวีซ่า" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"] }
  },
  ru: {
    immigration: { tab: "Иммиграция", filters: { all: "Все", skilled: "Квалификация", business: "Бизнес", study: "Учеба", family: "Семья" }, filterOrder: ["all", "skilled", "business", "study", "family"] },
    visa: { tab: "Визы", filters: { all: "Все", visaFree: "Без визы", eTA: "Электронное разрешение", visaOnArrival: "Виза по прибытии", eVisa: "Электронная виза", visaRequired: "Нужна виза", reviewRequired: "Проверить" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"] },
    passport: { tab: "Паспорт", filters: { all: "Все", visaFree: "Без визы", eTA: "Электронное разрешение", visaOnArrival: "Виза по прибытии", eVisa: "Электронная виза", visaRequired: "Нужна виза" }, filterOrder: ["all", "visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"] }
  }
};

Object.entries(languageProfiles).forEach(([language, profile]) => {
  copy[language] = { ...copy.en, ...profile };
  productContent[language] = {
    immigration: { ...productContent.en.immigration, ...productLanguageProfiles[language].immigration },
    visa: { ...productContent.en.visa, ...productLanguageProfiles[language].visa },
    passport: { ...productContent.en.passport, ...productLanguageProfiles[language].passport }
  };
});

const localizedCopyOverrides = {
  ja: {
    navCountries: "国・地域ルール",
    navWatchlist: "重要なお知らせ",
    navSources: "公式ソース",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "どこへ行きたいですか？",
    homeText: "世界の目的地を最小限の画面で確認し、移住ルート、ビザ種類、パスポートの移動しやすさを比較できます。",
    homeSearchLabel: "目的地を検索",
    homeSearchPlaceholder: "国、ビザ、パスポートの目的地を検索",
    homeBadgeVisa: "ビザデータベース",
    homeBadgeImmigration: "移住ルート",
    homeBadgePassport: "パスポート渡航",
    introEyebrow: "About",
    introTitle: "移住とビザルールを一緒に管理するサイト。",
    introOneTag: "データベース",
    introOneTitle: "国ごとに一元管理",
    introOneText: "各国・地域ごとに移住、ビザ、公式ソース、更新日、主要条件を管理できます。",
    introTwoTag: "検索",
    introTwoTitle: "地図から詳細へ",
    introTwoText: "トップページで目的地を素早く見つけ、データベースで検索、絞り込み、展開して確認できます。",
    introThreeTag: "更新",
    introThreeTitle: "更新管理のための構造",
    introThreeText: "最終確認日と公式リンクを用意し、後で管理画面や表と接続しやすくしています。",
    countryCountLabel: "国・地域",
    pathCountLabel: "移住ルート",
    yearLabel: "更新年",
    watchlistTitle: "重要なお知らせ",
    noticeOneTag: "更新頻度",
    noticeTwoTag: "ソース",
    noticeThreeTag: "免責事項",
    sourcesTitle: "公式ソース管理",
    sourcesText: "公式ソース、更新日、編集者を同じ表または管理画面で管理し、このページに同期することをおすすめします。",
    pendingUpdated: "未確認",
    pendingSource: "ソース未追加",
    lastChecked: "最終確認",
    officialSource: "公式ソース",
    regionLabel: "国・地域",
    fallbackName: "未命名地域"
  },
  ko: {
    navCountries: "국가 규칙",
    navWatchlist: "중요 알림",
    navSources: "공식 출처",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "어디로 가고 싶나요?",
    homeText: "전 세계 목적지를 간단한 화면에서 보고 이민 경로, 비자 유형, 여권 이동 편의성을 비교합니다.",
    homeSearchLabel: "목적지 검색",
    homeSearchPlaceholder: "국가, 비자 또는 여권 목적지 검색",
    homeBadgeVisa: "비자 데이터베이스",
    homeBadgeImmigration: "이민 경로",
    homeBadgePassport: "여권 이동",
    introEyebrow: "About",
    introTitle: "이민과 비자 규정을 함께 관리하는 웹사이트.",
    introOneTag: "데이터베이스",
    introOneTitle: "국가별 통합 관리",
    introOneText: "각 국가와 지역별로 이민, 비자, 공식 출처, 업데이트 날짜, 핵심 조건을 관리할 수 있습니다.",
    introTwoTag: "검색",
    introTwoTitle: "지도에서 상세 정보로",
    introTwoText: "홈에서 목적지를 빠르게 찾고 데이터베이스에서 필터링, 검색, 펼쳐보기로 확인합니다.",
    introThreeTag: "관리",
    introThreeTitle: "업데이트를 위한 구조",
    introThreeText: "최종 확인일과 공식 링크가 있어 이후 관리자 화면이나 표와 연결하기 쉽습니다.",
    countryCountLabel: "국가/지역",
    pathCountLabel: "이민 경로",
    yearLabel: "업데이트 연도",
    watchlistTitle: "중요 알림",
    noticeOneTag: "업데이트 주기",
    noticeTwoTag: "자료 출처",
    noticeThreeTag: "면책 고지",
    sourcesTitle: "공식 출처 관리",
    sourcesText: "공식 출처, 업데이트 날짜, 편집자를 하나의 표나 관리자 화면에서 관리한 뒤 이 페이지와 동기화하는 것을 권장합니다.",
    pendingUpdated: "확인 대기",
    pendingSource: "출처 미등록",
    lastChecked: "최종 확인",
    officialSource: "공식 출처",
    regionLabel: "국가/지역",
    fallbackName: "이름 없는 지역"
  },
  th: {
    navCountries: "กฎของประเทศ",
    navWatchlist: "รายการสำคัญ",
    navSources: "แหล่งข้อมูลทางการ",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "คุณอยากไปที่ไหน?",
    homeText: "ดูจุดหมายทั่วโลกในหน้าที่เรียบง่าย เปรียบเทียบเส้นทางย้ายถิ่น ประเภทวีซ่า และความสะดวกของหนังสือเดินทาง",
    homeSearchLabel: "ค้นหาจุดหมาย",
    homeSearchPlaceholder: "ค้นหาประเทศ วีซ่า หรือจุดหมายตามหนังสือเดินทาง",
    homeBadgeVisa: "ฐานข้อมูลวีซ่า",
    homeBadgeImmigration: "เส้นทางย้ายถิ่น",
    homeBadgePassport: "การเดินทางด้วยหนังสือเดินทาง",
    introEyebrow: "About",
    introTitle: "เว็บไซต์สำหรับจัดการกฎย้ายถิ่นและวีซ่าในที่เดียว",
    introOneTag: "ฐานข้อมูล",
    introOneTitle: "จัดเก็บตามประเทศ",
    introOneText: "แต่ละประเทศและภูมิภาคสามารถเก็บข้อมูลย้ายถิ่น วีซ่า แหล่งทางการ วันที่อัปเดต และเงื่อนไขสำคัญได้",
    introTwoTag: "ค้นหา",
    introTwoTitle: "จากแผนที่สู่รายละเอียด",
    introTwoText: "หน้าแรกใช้ค้นหาจุดหมายอย่างรวดเร็ว ส่วนฐานข้อมูลใช้กรอง ค้นหา และเปิดอ่านรายละเอียด",
    introThreeTag: "ดูแลข้อมูล",
    introThreeTitle: "เตรียมพื้นที่สำหรับการอัปเดต",
    introThreeText: "มีช่องวันที่ตรวจสอบล่าสุดและลิงก์ทางการ เพื่อเชื่อมต่อกับหลังบ้านหรือตารางข้อมูลได้ในอนาคต",
    countryCountLabel: "ประเทศ/ภูมิภาค",
    pathCountLabel: "เส้นทางย้ายถิ่น",
    yearLabel: "ปีที่อัปเดต",
    watchlistTitle: "รายการสำคัญ",
    noticeOneTag: "ความถี่อัปเดต",
    noticeTwoTag: "แหล่งข้อมูล",
    noticeThreeTag: "ข้อจำกัดความรับผิด",
    sourcesTitle: "จัดการแหล่งข้อมูลทางการ",
    sourcesText: "แนะนำให้เก็บแหล่งทางการ วันที่อัปเดต และผู้แก้ไขไว้ในตารางหรือระบบหลังบ้านเดียวกัน แล้วซิงก์มายังหน้านี้",
    pendingUpdated: "รอตรวจสอบ",
    pendingSource: "ยังไม่มีแหล่งข้อมูล",
    lastChecked: "ตรวจสอบล่าสุด",
    officialSource: "แหล่งทางการ",
    regionLabel: "ประเทศ/ภูมิภาค",
    fallbackName: "ภูมิภาคไม่มีชื่อ"
  },
  ru: {
    navCountries: "Правила стран",
    navWatchlist: "Важные изменения",
    navSources: "Официальные источники",
    homeEyebrow: "Global Mobility Search",
    homeTitle: "Куда вы хотите поехать?",
    homeText: "Просматривайте направления по всему миру и сравнивайте иммиграционные маршруты, типы виз и возможности паспорта.",
    homeSearchLabel: "Поиск направления",
    homeSearchPlaceholder: "Ищите страну, визу или направление по паспорту",
    homeBadgeVisa: "База виз",
    homeBadgeImmigration: "Иммиграционные маршруты",
    homeBadgePassport: "Паспортный доступ",
    introEyebrow: "About",
    introTitle: "Сайт для управления иммиграционными и визовыми правилами.",
    introOneTag: "База данных",
    introOneTitle: "Единая структура по странам",
    introOneText: "Для каждой страны и территории можно вести иммиграцию, визы, источники, даты обновления и ключевые условия.",
    introTwoTag: "Поиск",
    introTwoTitle: "От карты к деталям",
    introTwoText: "Главная страница помогает быстро выбрать направление, а база данных дает фильтры, поиск и подробности.",
    introThreeTag: "Обновления",
    introThreeTitle: "Место для актуализации",
    introThreeText: "Предусмотрены дата последней проверки и официальные ссылки для будущей интеграции с таблицами или админкой.",
    countryCountLabel: "стран/территорий",
    pathCountLabel: "иммиграционных маршрутов",
    yearLabel: "год обновления",
    watchlistTitle: "Важные изменения",
    noticeOneTag: "Частота обновления",
    noticeTwoTag: "Источник",
    noticeThreeTag: "Оговорка",
    sourcesTitle: "Управление официальными источниками",
    sourcesText: "Рекомендуется хранить официальные источники, даты обновления и редакторов в одной таблице или админке и синхронизировать их с этой страницей.",
    pendingUpdated: "Не проверено",
    pendingSource: "Источник не добавлен",
    lastChecked: "Последняя проверка",
    officialSource: "Официальный источник",
    regionLabel: "Страна/территория",
    fallbackName: "Безымянный регион"
  }
};

Object.entries(localizedCopyOverrides).forEach(([language, overrides]) => {
  copy[language] = { ...copy[language], ...overrides };
});

const localizedProductOverrides = {
  ja: {
    immigration: {
      brand: "グローバル移住ルールハブ",
      title: "グローバル移住ルールハブ",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "各国・地域の移住ルールを検索・展開できるページに集約。",
      heroText: "国と地域ごとに独立した情報ブロックを用意しています。画面幅に合わせて自動で並び、クリックすると詳細ルールを確認できます。",
      categoryCountLabel: "移住ルート",
      searchLabel: "国、地域、キーワードを検索",
      searchPlaceholder: "例：カナダ、香港、台湾、技能移住、投資、留学",
      countriesTitle: "国・地域の移住ルール",
      countriesText: "香港、マカオ、台湾を含む世界の国と地域をカバーします。主要国には公式ソース付きの移住情報を用意しています。",
      emptyState: "一致する国、地域、移住ルールが見つかりません。別のキーワードを試してください。",
      genericSummary: "この国・地域の移住ルールは未整備です。技能、事業、留学、家族ルートをここに追加できます。",
      genericRules: ["公式の移民局または政府ページを追加し、最終確認日を記録します。", "移住ルートごとに条件、費用、処理期間、制限を整理します。", "公開前に最新政策を再確認してください。"],
      watchlistText: "移住政策の変更、枠の終了、手数料変更、語学要件など優先確認が必要な情報を置く場所です。",
      noticeOneTitle: "各移住ルールに最終確認日を残す",
      noticeOneText: "移住政策は変わりやすいため、更新日は公式発表または確認済みレビューに基づく必要があります。",
      noticeTwoText: "各カードには公式ソースへのリンクを残し、原文を確認できるようにします。",
      footerBrand: "グローバル移住ルールハブ",
      footerNote: "移住情報データベース構築用の表示テンプレートです。"
    },
    visa: {
      brand: "グローバルビザルールハブ",
      title: "グローバルビザルールハブ",
      eyebrow: "Visa Rules Hub",
      heroTitle: "パスポート国を選び、各目的地のビザ要件を確認。",
      heroText: "ビザページは Sherpa Requirements API のスナップショットを使用します。パスポート国を選ぶと、目的地ごとの入国結論と数量が更新されます。",
      categoryCountLabel: "入国区分",
      searchLabel: "国、地域、ビザ区分を検索",
      searchPlaceholder: "例：日本、オーストラリア、電子渡航認証、到着時ビザ、ビザ必要",
      countriesTitle: "Sherpa ビザ・入国要件",
      countriesText: "Sherpa から取得した目的地データを表示します。カードは選択中のパスポート国に合わせてビザ区分と詳細を表示します。",
      emptyState: "一致する国、地域、ビザルールが見つかりません。",
      genericSummary: "Sherpa はこの目的地のビザ結論を返していません。ソースページで確認してください。",
      genericRules: ["免除、電子渡航認証、到着時ビザ、電子ビザ、事前ビザの有無を確認します。", "パスポート、居住地、渡航目的、滞在期間ごとに条件を確認します。", "渡航前に政府または領事館の最新要件を再確認してください。"],
      watchlistText: "免除変更、電子ビザ開始、到着時ビザ停止、書類一覧、入国制限などの更新を管理します。",
      noticeOneTitle: "各ビザルールに最終確認日を残す",
      noticeOneText: "現在のビザページは Sherpa の更新日と関連ソースリンクを使用します。",
      noticeTwoText: "各ビザカードには原文確認用のソースボタンがあります。",
      footerBrand: "グローバルビザルールハブ",
      footerNote: "ビザ情報は選択したパスポート国に合わせて表示されます。"
    },
    passport: {
      brand: "グローバルパスポートアトラス",
      title: "グローバルパスポートアトラス",
      eyebrow: "Passport Atlas",
      heroTitle: "パスポートごとのビザ不要、電子認証、到着時ビザ、電子ビザを確認。",
      heroText: "Henley Passport Index 2026 の順位、通行スコア、目的地分類データを表示します。",
      categoryCountLabel: "入国方式",
      searchLabel: "国、地域、パスポート情報を検索",
      searchPlaceholder: "例：中国、米国、日本、ビザ不要、電子ビザ、到着時ビザ",
      countriesTitle: "Henley 2026 パスポート通行力",
      countriesText: "Henley Passport Index 2026 のランキングと API データをもとに、通行スコア順で表示します。",
      emptyState: "一致する国、地域、パスポート情報が見つかりません。",
      genericSummary: "このパスポートの渡航情報は未整備です。",
      genericRules: ["ビザ不要で渡航できる目的地と最長滞在日数を記録します。", "電子ビザ、到着時ビザ、事前ビザの目的地と申請条件を追加します。", "公開前に公式入国要件を確認してください。"],
      watchlistText: "免除変更、電子ビザ開始、到着時ビザ停止、パスポート有効期間、入国制限を管理します。",
      noticeOneTitle: "各パスポート情報に最終確認日を残す",
      noticeOneText: "渡航ルールは変わりやすいため、移民局、外務省、領事館ページで確認します。",
      noticeTwoText: "各カードには最新要件を確認するための公式ソースリンクを残します。",
      footerBrand: "グローバルパスポートアトラス",
      footerNote: "パスポート別の免除、電子ビザ、到着時ビザ情報テンプレートです。"
    }
  },
  ko: {
    immigration: {
      brand: "글로벌 이민 규칙 허브",
      title: "글로벌 이민 규칙 허브",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "국가별 이민 규칙을 검색하고 펼쳐볼 수 있는 페이지로 통합했습니다.",
      heroText: "각 국가와 지역은 독립된 정보 영역으로 구성되며 화면 크기에 맞춰 자동 배열됩니다. 클릭하면 상세 규칙을 볼 수 있습니다.",
      categoryCountLabel: "이민 경로",
      searchLabel: "국가, 지역 또는 키워드 검색",
      searchPlaceholder: "예: 캐나다, 홍콩, 대만, 기술이민, 투자, 유학",
      countriesTitle: "국가 및 지역 이민 규칙",
      countriesText: "홍콩, 마카오, 대만을 포함한 전 세계 국가와 지역을 다룹니다. 주요 국가는 공식 출처 기반 정보가 포함됩니다.",
      emptyState: "일치하는 국가, 지역 또는 이민 규칙이 없습니다.",
      genericSummary: "이 국가/지역의 이민 규칙은 아직 관리 대기 상태입니다.",
      genericRules: ["공식 이민국 또는 정부 페이지를 추가하고 최종 확인일을 기록합니다.", "경로별 조건, 비용, 처리 기간, 제한 사항을 정리합니다.", "게시 전 최신 정책을 다시 확인합니다."],
      watchlistText: "정책 변경, 쿼터 종료, 수수료 조정, 언어 요건 변경 등 우선 확인 항목을 관리합니다.",
      noticeOneTitle: "모든 이민 규칙에 최종 확인일을 남기기",
      noticeOneText: "이민 정책은 자주 바뀌므로 업데이트 날짜는 공식 발표나 검증된 리뷰에 기반해야 합니다.",
      noticeTwoText: "각 카드에는 원문 확인을 위한 공식 출처 링크를 둡니다.",
      footerBrand: "글로벌 이민 규칙 허브",
      footerNote: "이민 정보 데이터베이스 구축용 템플릿입니다."
    },
    visa: {
      brand: "글로벌 비자 규칙 허브",
      title: "글로벌 비자 규칙 허브",
      eyebrow: "Visa Rules Hub",
      heroTitle: "여권 국가를 선택하고 각 목적지의 비자 요건을 확인하세요.",
      heroText: "비자 페이지는 Sherpa Requirements API 스냅샷을 사용합니다. 여권 국가를 선택하면 목적지별 입국 결론과 수량이 갱신됩니다.",
      categoryCountLabel: "입국 결론",
      searchLabel: "국가, 지역 또는 비자 결론 검색",
      searchPlaceholder: "예: 일본, 호주, 전자허가, 도착비자, 비자 필요",
      countriesTitle: "Sherpa 비자 및 입국 요건",
      countriesText: "Sherpa에서 반환한 목적지 데이터를 표시합니다. 각 카드는 선택한 여권 국가에 맞춰 비자 유형과 내용을 보여줍니다.",
      emptyState: "일치하는 국가, 지역 또는 비자 규칙이 없습니다.",
      genericSummary: "Sherpa가 이 목적지의 비자 결론을 반환하지 않았습니다. 출처 페이지에서 확인하세요.",
      genericRules: ["무비자, 전자허가, 도착비자, 전자비자, 사전비자 필요 여부를 확인합니다.", "여권, 거주지, 여행 목적, 체류 기간별 적용 조건을 확인합니다.", "출국 전 정부 또는 영사관 최신 요건을 다시 확인합니다."],
      watchlistText: "무비자 변경, 전자비자 개시, 서류 목록, 수수료, 처리 기간, 입국 제한 업데이트를 관리합니다.",
      noticeOneTitle: "모든 비자 규칙에 최종 확인일을 남기기",
      noticeOneText: "현재 비자 페이지는 Sherpa의 반환 업데이트 날짜와 관련 출처 링크를 사용합니다.",
      noticeTwoText: "각 비자 카드에는 원문 확인용 출처 버튼이 있습니다.",
      footerBrand: "글로벌 비자 규칙 허브",
      footerNote: "비자 정보는 선택한 여권 국가 기준으로 표시됩니다."
    },
    passport: {
      brand: "글로벌 여권 아틀라스",
      title: "글로벌 여권 아틀라스",
      eyebrow: "Passport Atlas",
      heroTitle: "여권별 무비자, 전자허가, 도착비자, 전자비자 목적지를 확인하세요.",
      heroText: "Henley Passport Index 2026 순위, 이동 점수, 목적지 분류 데이터를 표시합니다.",
      categoryCountLabel: "입국 방식",
      searchLabel: "국가, 지역 또는 여권 키워드 검색",
      searchPlaceholder: "예: 중국, 미국, 일본, 무비자, 전자비자, 도착비자",
      countriesTitle: "Henley 2026 여권 이동 능력",
      countriesText: "Henley Passport Index 2026 순위와 API 데이터를 바탕으로 이동 점수순으로 표시합니다.",
      emptyState: "일치하는 국가, 지역 또는 여권 정보가 없습니다.",
      genericSummary: "이 여권의 이동 정보는 아직 관리 대기 상태입니다.",
      genericRules: ["무비자로 입국 가능한 목적지와 최장 체류 기간을 기록합니다.", "전자비자, 도착비자, 사전비자 목적지와 신청 조건을 추가합니다.", "게시 전 공식 입국 요건을 확인합니다."],
      watchlistText: "무비자 변경, 전자비자 개시, 도착비자 중단, 여권 유효기간, 입국 제한을 관리합니다.",
      noticeOneTitle: "모든 여권 정보에 최종 확인일을 남기기",
      noticeOneText: "입국 규칙은 빠르게 바뀌므로 이민국, 외교부, 영사관 페이지에서 확인해야 합니다.",
      noticeTwoText: "각 카드에는 최신 요건 확인을 위한 공식 출처 링크를 둡니다.",
      footerBrand: "글로벌 여권 아틀라스",
      footerNote: "여권별 무비자, 전자비자, 도착비자 정보 템플릿입니다."
    }
  },
  th: {
    immigration: {
      brand: "ศูนย์กฎย้ายถิ่นทั่วโลก",
      title: "ศูนย์กฎย้ายถิ่นทั่วโลก",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "รวมกฎย้ายถิ่นของแต่ละประเทศไว้ในหน้าที่ค้นหาและเปิดดูรายละเอียดได้",
      heroText: "แต่ละประเทศและภูมิภาคเป็นบล็อกข้อมูลแยกกัน จัดเรียงตามขนาดหน้าจอและคลิกเพื่อดูรายละเอียดได้",
      categoryCountLabel: "เส้นทางย้ายถิ่น",
      searchLabel: "ค้นหาประเทศ ภูมิภาค หรือคำสำคัญ",
      searchPlaceholder: "เช่น แคนาดา ฮ่องกง ไต้หวัน ทักษะ ลงทุน เรียน",
      countriesTitle: "กฎย้ายถิ่นของประเทศและภูมิภาค",
      countriesText: "ครอบคลุมประเทศและภูมิภาคทั่วโลก รวมฮ่องกง มาเก๊า และไต้หวัน ประเทศสำคัญมีแหล่งข้อมูลทางการประกอบ",
      emptyState: "ไม่พบประเทศ ภูมิภาค หรือกฎย้ายถิ่นที่ตรงกัน",
      genericSummary: "ข้อมูลย้ายถิ่นของประเทศ/ภูมิภาคนี้รอการดูแล",
      genericRules: ["เพิ่มลิงก์หน่วยงานย้ายถิ่นหรือหน้ารัฐบาลทางการและวันที่ตรวจสอบล่าสุด", "บันทึกเงื่อนไข ค่าใช้จ่าย ระยะเวลา และข้อจำกัดตามแต่ละเส้นทาง", "ตรวจสอบนโยบายล่าสุดอีกครั้งก่อนเผยแพร่"],
      watchlistText: "ใช้ติดตามการเปลี่ยนนโยบาย โควตาปิด ค่าธรรมเนียม เงื่อนไขภาษา และรายการที่ต้องตรวจสอบก่อน",
      noticeOneTitle: "เก็บวันที่ตรวจสอบล่าสุดสำหรับทุกกฎย้ายถิ่น",
      noticeOneText: "นโยบายย้ายถิ่นเปลี่ยนเร็ว วันที่อัปเดตควรมาจากประกาศทางการหรือการตรวจสอบที่เชื่อถือได้",
      noticeTwoText: "การ์ดแต่ละใบมีปุ่มแหล่งข้อมูลทางการเพื่อให้ตรวจสอบต้นฉบับได้",
      footerBrand: "ศูนย์กฎย้ายถิ่นทั่วโลก",
      footerNote: "แม่แบบสำหรับสร้างฐานข้อมูลข้อมูลย้ายถิ่น"
    },
    visa: {
      brand: "ศูนย์กฎวีซ่าทั่วโลก",
      title: "ศูนย์กฎวีซ่าทั่วโลก",
      eyebrow: "Visa Rules Hub",
      heroTitle: "เลือกประเทศหนังสือเดินทางเพื่อดูข้อกำหนดวีซ่าของจุดหมายต่าง ๆ",
      heroText: "หน้าวีซ่าใช้ข้อมูลสแนปชอตจาก Sherpa Requirements API เมื่อเลือกประเทศหนังสือเดินทาง จำนวนและประเภทวีซ่าจะอัปเดตตามนั้น",
      categoryCountLabel: "ผลลัพธ์เข้าเมือง",
      searchLabel: "ค้นหาประเทศ ภูมิภาค หรือประเภทวีซ่า",
      searchPlaceholder: "เช่น ญี่ปุ่น ออสเตรเลีย eTA วีซ่าเมื่อเดินทางถึง ต้องขอวีซ่า",
      countriesTitle: "ข้อกำหนดวีซ่าและเข้าเมืองจาก Sherpa",
      countriesText: "แสดงข้อมูลจุดหมายจาก Sherpa การ์ดแต่ละใบแสดงประเภทวีซ่าตามประเทศหนังสือเดินทางที่เลือก",
      emptyState: "ไม่พบประเทศ ภูมิภาค หรือกฎวีซ่าที่ตรงกัน",
      genericSummary: "Sherpa ยังไม่มีผลลัพธ์วีซ่าสำหรับจุดหมายนี้ โปรดตรวจสอบจากแหล่งข้อมูล",
      genericRules: ["ตรวจสอบว่าไม่ต้องขอวีซ่า/eTA/วีซ่าเมื่อเดินทางถึง/eVisa/ต้องขอวีซ่าล่วงหน้าหรือไม่", "ยืนยันเงื่อนไขตามหนังสือเดินทาง ถิ่นพำนัก วัตถุประสงค์ และระยะเวลาพำนัก", "ก่อนเดินทางให้ตรวจสอบข้อมูลล่าสุดจากรัฐบาลหรือสถานกงสุล"],
      watchlistText: "ใช้ติดตามการเปลี่ยนการไม่ต้องขอวีซ่า การเปิด eVisa รายการเอกสาร ค่าธรรมเนียม ระยะเวลาดำเนินการ และข้อจำกัดเข้าเมือง",
      noticeOneTitle: "เก็บวันที่ตรวจสอบล่าสุดสำหรับทุกกฎวีซ่า",
      noticeOneText: "หน้าวีซ่าใช้วันที่อัปเดตจาก Sherpa และลิงก์แหล่งข้อมูลที่เกี่ยวข้อง",
      noticeTwoText: "การ์ดวีซ่ามีปุ่มแหล่งข้อมูลสำหรับตรวจสอบต้นฉบับ",
      footerBrand: "ศูนย์กฎวีซ่าทั่วโลก",
      footerNote: "ข้อมูลวีซ่าแสดงตามประเทศหนังสือเดินทางที่เลือก"
    },
    passport: {
      brand: "แผนที่หนังสือเดินทางโลก",
      title: "แผนที่หนังสือเดินทางโลก",
      eyebrow: "Passport Atlas",
      heroTitle: "ดูจุดหมายที่ไม่ต้องขอวีซ่า, eTA, วีซ่าเมื่อเดินทางถึง และ eVisa ตามหนังสือเดินทาง",
      heroText: "แสดงอันดับ Henley Passport Index 2026 คะแนนการเดินทาง และการแบ่งประเภทจุดหมาย",
      categoryCountLabel: "ประเภทเข้าเมือง",
      searchLabel: "ค้นหาประเทศ ภูมิภาค หรือข้อมูลหนังสือเดินทาง",
      searchPlaceholder: "เช่น จีน สหรัฐ ญี่ปุ่น ไม่ต้องขอวีซ่า eVisa วีซ่าเมื่อเดินทางถึง",
      countriesTitle: "ศักยภาพหนังสือเดินทาง Henley 2026",
      countriesText: "ใช้ข้อมูลอันดับและ API ของ Henley Passport Index 2026 และจัดเรียงตามคะแนนการเดินทาง",
      emptyState: "ไม่พบประเทศ ภูมิภาค หรือข้อมูลหนังสือเดินทางที่ตรงกัน",
      genericSummary: "ข้อมูลการเดินทางของหนังสือเดินทางนี้รอการดูแล",
      genericRules: ["บันทึกจุดหมายที่ไม่ต้องขอวีซ่าและระยะเวลาพำนักสูงสุด", "บันทึกจุดหมาย eVisa วีซ่าเมื่อเดินทางถึง และต้องขอวีซ่าล่วงหน้า", "ตรวจสอบข้อกำหนดเข้าเมืองทางการก่อนเผยแพร่"],
      watchlistText: "ใช้ติดตามการเปลี่ยนการไม่ต้องขอวีซ่า การเปิด eVisa การหยุดวีซ่าเมื่อเดินทางถึง อายุหนังสือเดินทาง และข้อจำกัดเข้าเมือง",
      noticeOneTitle: "เก็บวันที่ตรวจสอบล่าสุดสำหรับทุกข้อมูลหนังสือเดินทาง",
      noticeOneText: "กฎเข้าเมืองเปลี่ยนเร็ว ควรตรวจสอบจากหน่วยงานตรวจคนเข้าเมือง กระทรวงต่างประเทศ หรือสถานกงสุล",
      noticeTwoText: "การ์ดแต่ละใบมีลิงก์แหล่งข้อมูลทางการสำหรับตรวจสอบข้อมูลล่าสุด",
      footerBrand: "แผนที่หนังสือเดินทางโลก",
      footerNote: "แม่แบบข้อมูลไม่ต้องขอวีซ่า, eVisa และวีซ่าเมื่อเดินทางถึงตามหนังสือเดินทาง"
    }
  },
  ru: {
    immigration: {
      brand: "Глобальный центр иммиграционных правил",
      title: "Глобальный центр иммиграционных правил",
      eyebrow: "Immigration Rules Hub",
      heroTitle: "Иммиграционные правила стран собраны в поисковом и раскрываемом интерфейсе.",
      heroText: "Каждая страна и территория имеет отдельный информационный блок. Сетка адаптируется к экрану, а карточки раскрываются для подробностей.",
      categoryCountLabel: "маршрутов",
      searchLabel: "Поиск страны, территории или ключевого слова",
      searchPlaceholder: "Например: Канада, Гонконг, Тайвань, квалификация, инвестиции, учеба",
      countriesTitle: "Иммиграционные правила стран и территорий",
      countriesText: "Охвачены страны и территории мира, включая Гонконг, Макао и Тайвань. Для ключевых направлений добавлены официальные источники.",
      emptyState: "Подходящие страны, территории или правила не найдены.",
      genericSummary: "Иммиграционные правила этой страны/территории ожидают заполнения.",
      genericRules: ["Добавьте официальный сайт иммиграционной службы или правительства и дату проверки.", "Заполните условия, сборы, сроки и ограничения по каждому маршруту.", "Перед публикацией проверьте актуальную политику."],
      watchlistText: "Здесь можно отслеживать изменения политики, закрытие квот, сборы, языковые требования и срочные проверки.",
      noticeOneTitle: "Сохраняйте дату последней проверки для каждого правила",
      noticeOneText: "Иммиграционная политика быстро меняется, поэтому даты должны опираться на официальные объявления или проверку.",
      noticeTwoText: "На каждой карточке есть ссылка на официальный источник для проверки первоисточника.",
      footerBrand: "Глобальный центр иммиграционных правил",
      footerNote: "Шаблон для базы иммиграционной информации."
    },
    visa: {
      brand: "Глобальный центр визовых правил",
      title: "Глобальный центр визовых правил",
      eyebrow: "Visa Rules Hub",
      heroTitle: "Выберите страну паспорта и смотрите визовые требования по направлениям.",
      heroText: "Визовая страница использует снимок Sherpa Requirements API. После выбора паспорта обновляются типы въезда и количество направлений.",
      categoryCountLabel: "типов въезда",
      searchLabel: "Поиск страны, территории или визового типа",
      searchPlaceholder: "Например: Япония, Австралия, ETA, виза по прибытии, нужна виза",
      countriesTitle: "Визовые и въездные требования Sherpa",
      countriesText: "Показаны направления, возвращенные Sherpa. Каждая карточка использует выбранную страну паспорта.",
      emptyState: "Подходящие страны, территории или визовые правила не найдены.",
      genericSummary: "Sherpa не вернул визовый результат для этого направления. Проверьте источник.",
      genericRules: ["Проверьте безвизовый въезд, электронное разрешение, визу по прибытии, электронную визу или необходимость визы заранее.", "Уточните применимость по паспорту, месту проживания, цели поездки и сроку пребывания.", "Перед поездкой перепроверьте сайт правительства или консульства."],
      watchlistText: "Здесь можно отслеживать безвизовые изменения, запуск eVisa, документы, сборы, сроки и ограничения въезда.",
      noticeOneTitle: "Сохраняйте дату последней проверки для каждого визового правила",
      noticeOneText: "Страница использует дату обновления Sherpa и связанные источники.",
      noticeTwoText: "На каждой визовой карточке есть кнопка источника для проверки первоисточника.",
      footerBrand: "Глобальный центр визовых правил",
      footerNote: "Визовая информация показана для выбранной страны паспорта."
    },
    passport: {
      brand: "Глобальный паспортный атлас",
      title: "Глобальный паспортный атлас",
      eyebrow: "Passport Atlas",
      heroTitle: "Смотрите безвизовый доступ, ETA, визу по прибытии и eVisa по паспорту.",
      heroText: "Показаны рейтинги Henley Passport Index 2026, баллы мобильности и категории направлений.",
      categoryCountLabel: "категорий въезда",
      searchLabel: "Поиск страны, территории или паспорта",
      searchPlaceholder: "Например: Китай, США, Япония, без визы, eVisa, виза по прибытии",
      countriesTitle: "Паспортная мобильность Henley 2026",
      countriesText: "Данные основаны на рейтинге Henley Passport Index 2026 и API, отсортированы по баллам мобильности.",
      emptyState: "Подходящие страны, территории или паспортные данные не найдены.",
      genericSummary: "Данные по этому паспорту ожидают заполнения.",
      genericRules: ["Запишите безвизовые направления и максимальный срок пребывания.", "Добавьте направления eVisa, визы по прибытии и предварительной визы.", "Перед публикацией проверьте официальные правила въезда."],
      watchlistText: "Здесь можно отслеживать безвизовые изменения, запуск eVisa, приостановку виз по прибытии, срок действия паспорта и ограничения.",
      noticeOneTitle: "Сохраняйте дату последней проверки для каждого паспорта",
      noticeOneText: "Правила въезда быстро меняются и должны проверяться по сайтам иммиграционных служб, МИД или консульств.",
      noticeTwoText: "На каждой карточке есть официальный источник для проверки актуальных требований.",
      footerBrand: "Глобальный паспортный атлас",
      footerNote: "Шаблон данных о безвизовом доступе, eVisa и визах по прибытии."
    }
  }
};

Object.entries(localizedProductOverrides).forEach(([language, products]) => {
  Object.entries(products).forEach(([product, overrides]) => {
    productContent[language][product] = {
      ...productContent[language][product],
      ...overrides
    };
  });
});

const supportedLanguages = ["zh", "en", "ja", "ko", "th", "ru"];

const featuredRules = {
  CA: {
    tags: ["skilled", "study", "family"],
    source: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    zh: {
      summary: "联邦快速通道、省提名和留学转永居路径较常见。",
      rules: [
        "技术类通常关注年龄、学历、语言、工作经验和职业匹配。",
        "省提名需要同时满足对应省份的职业需求、雇主或居住意向要求。",
        "留学路径应重点核验毕业工签、院校资格和省级项目衔接。"
      ]
    },
    en: {
      summary: "Express Entry, provincial nominations, and study-to-residence pathways are common.",
      rules: [
        "Skilled pathways usually assess age, education, language, work experience, and occupation fit.",
        "Provincial nominations may require occupation demand, employer support, or intent to reside.",
        "Study pathways should verify post-graduation work permits, eligible schools, and provincial links."
      ]
    }
  },
  AU: {
    tags: ["skilled", "business", "study"],
    source: "https://immi.homeaffairs.gov.au/",
    zh: {
      summary: "以打分技术移民、州担保、雇主担保和学生签证为核心。",
      rules: ["技术移民需核验职业清单、职业评估、英语成绩和EOI分数。", "州担保要求会按州变化，部分职业有居住、工作或邀请条件。", "商业投资类对资金来源、经营背景和州政府邀请要求较高。"]
    },
    en: {
      summary: "Points-tested skilled migration, state nomination, employer sponsorship, and student visas are key areas.",
      rules: ["Check occupation lists, skills assessment, English scores, and EOI points.", "State nomination criteria vary and may include residence, work, or invitation requirements.", "Business and investment routes need strong evidence of funds, business background, and nomination."]
    }
  },
  NZ: {
    tags: ["skilled", "study", "family"],
    source: "https://www.immigration.govt.nz/",
    zh: {
      summary: "技术、雇主认证工作签和家庭团聚路径常被关注。",
      rules: ["技术类别通常需要满足技能、薪资、学历和工作经验相关条件。", "雇主支持路径应确认雇主认证状态和职位是否符合移民局要求。", "家庭类别需重点核验关系证明、担保资格和收入要求。"]
    },
    en: {
      summary: "Skilled, accredited employer work, and family pathways are common focus areas.",
      rules: ["Skilled categories often require skills, salary, education, and work experience evidence.", "Employer-supported routes should confirm employer accreditation and role eligibility.", "Family categories need relationship evidence, sponsor eligibility, and income checks."]
    }
  },
  US: {
    tags: ["skilled", "business", "family", "study"],
    source: "https://www.uscis.gov/",
    zh: {
      summary: "职业移民、亲属移民、学生签证和投资移民路径复杂。",
      rules: ["职业移民需关注优先类别、雇主申请、排期和身份调整条件。", "投资移民需核验投资金额、区域中心、资金来源和签证排期。", "学生签证和工作签证涉及身份维持、雇主资格和转换规则。"]
    },
    en: {
      summary: "Employment, family, student, and investment immigration routes are complex.",
      rules: ["Employment immigration depends on preference category, employer filing, visa bulletin timing, and adjustment rules.", "Investment routes require verification of amount, regional center status, source of funds, and visa availability.", "Student and work visas involve status maintenance, employer eligibility, and change-of-status rules."]
    }
  },
  GB: {
    tags: ["skilled", "business", "study", "family"],
    source: "https://www.gov.uk/browse/visas-immigration",
    zh: {
      summary: "工作签证、创新创始人、学生和家庭签证是主要模块。",
      rules: ["技术工作签证通常需要持牌雇主、合格岗位和薪资门槛。", "创新创始人类项目需关注背书机构、商业计划和经营要求。", "家庭类签证应重点核验收入门槛、关系证明和居住安排。"]
    },
    en: {
      summary: "Work, innovator founder, student, and family visas are major modules.",
      rules: ["Skilled work usually needs a licensed sponsor, eligible role, and salary threshold.", "Innovator founder routes depend on endorsement, business plan, and operating requirements.", "Family visas require income, relationship evidence, and accommodation checks."]
    }
  },
  DE: {
    tags: ["skilled", "study", "family"],
    source: "https://www.make-it-in-germany.com/en/",
    zh: {
      summary: "欧盟蓝卡、机会卡、学习和家庭团聚适合分栏目维护。",
      rules: ["技术工作路径需关注学历认可、雇佣合同、薪资和职业匹配。", "机会卡等求职路径应核验积分、语言、资金和停留期限。", "家庭团聚通常涉及住房、收入、语言和关系证明。"]
    },
    en: {
      summary: "EU Blue Card, Opportunity Card, study, and family reunion deserve separate tracking.",
      rules: ["Skilled work routes need education recognition, employment contract, salary, and occupation fit.", "Job-search routes should verify points, language, funds, and stay duration.", "Family reunion often involves housing, income, language, and relationship evidence."]
    }
  },
  FR: {
    tags: ["skilled", "business", "study", "family"],
    source: "https://france-visas.gouv.fr/",
    zh: {
      summary: "人才护照、学生居留、创业和家庭团聚适合重点跟踪。",
      rules: ["人才护照类别需按雇佣、研究、创业或投资等子类核验条件。", "学生路径要关注录取、资金、保险以及毕业后转换居留规则。", "创业和投资路径需要商业计划、资金证明和经济贡献材料。"]
    },
    en: {
      summary: "Talent Passport, student residence, entrepreneurship, and family reunion are key areas.",
      rules: ["Talent Passport criteria vary by employment, research, startup, or investment subcategory.", "Student routes require admission, funds, insurance, and post-study transition checks.", "Startup and investment routes need a business plan, proof of funds, and economic contribution evidence."]
    }
  },
  JP: {
    tags: ["skilled", "business", "study", "family"],
    source: "https://www.moj.go.jp/isa/",
    zh: {
      summary: "高度人才、经营管理、留学和家族滞在路径常见。",
      rules: ["高度人才通常按学历、收入、经历、年龄和研究成果等项目积分。", "经营管理签证需关注公司设立、办公室、资本金和真实经营计划。", "留学转工签应核验专业关联、雇佣合同和在留资格变更。"]
    },
    en: {
      summary: "Highly skilled professional, business manager, student, and dependent routes are common.",
      rules: ["Highly skilled status uses points such as education, income, experience, age, and research output.", "Business manager visas require company setup, office, capital, and a real operating plan.", "Student-to-work transitions need field relevance, employment contract, and status-change checks."]
    }
  },
  SG: {
    tags: ["skilled", "business", "family"],
    source: "https://www.ica.gov.sg/",
    zh: {
      summary: "就业准证、创业准证、家属准证和永居申请需分开维护。",
      rules: ["就业准证应核验薪资、学历、岗位、雇主资质和COMPASS相关要求。", "创业准证通常关注创新属性、融资、知识产权或孵化器支持。", "永居申请会综合评估工作、家庭、纳税、居住和社会联系。"]
    },
    en: {
      summary: "Employment Pass, EntrePass, dependent passes, and PR applications should be maintained separately.",
      rules: ["Employment Pass checks include salary, education, role, employer status, and COMPASS factors.", "EntrePass often focuses on innovation, funding, intellectual property, or incubator support.", "PR assessment considers work, family, tax, residence, and social ties."]
    }
  },
  AE: {
    tags: ["business", "skilled", "family"],
    source: "https://u.ae/en/information-and-services/visa-and-emirates-id",
    zh: {
      summary: "黄金签证、投资者签证、工作居留和家属担保适合集中管理。",
      rules: ["黄金签证类别按投资者、企业家、专业人才等身份分别核验。", "投资或房产相关路径需确认金额、持有条件和当地主管机关要求。", "家属担保与收入、住房、保险和申请人居留状态相关。"]
    },
    en: {
      summary: "Golden Visa, investor visas, work residence, and family sponsorship fit well in this hub.",
      rules: ["Golden Visa rules vary for investors, entrepreneurs, and specialized talents.", "Investment or property routes need amount, holding conditions, and authority checks.", "Family sponsorship depends on income, housing, insurance, and the sponsor's residence status."]
    }
  },
  PT: {
    tags: ["business", "skilled", "family"],
    source: "https://vistos.mne.gov.pt/en/",
    zh: {
      summary: "数字游民、创业、工作和家庭团聚类信息适合持续核验。",
      rules: ["数字游民路径需关注远程收入、居住证明、保险和停留期限。", "创业或工作路径要核验合同、商业计划、资金和当地机构要求。", "家庭团聚需准备关系证明、住所、收入和合法居留材料。"]
    },
    en: {
      summary: "Digital nomad, startup, work, and family reunion routes need regular review.",
      rules: ["Digital nomad routes require remote income, residence evidence, insurance, and stay-duration checks.", "Startup or work paths need contracts, business plans, funds, and local authority requirements.", "Family reunion requires relationship evidence, housing, income, and lawful residence documents."]
    }
  },
  ES: {
    tags: ["business", "skilled", "study", "family"],
    source: "https://www.inclusion.gob.es/web/migraciones",
    zh: {
      summary: "数字游民、非盈利居留、学生和家庭团聚路径常被查询。",
      rules: ["数字游民和远程工作路径应核验收入、雇佣关系、保险和税务影响。", "非盈利居留通常要求稳定资金、保险和不从事当地工作的承诺。", "学生居留需关注院校录取、资金、保险以及工作小时限制。"]
    },
    en: {
      summary: "Digital nomad, non-lucrative residence, student, and family routes are frequently searched.",
      rules: ["Digital nomad and remote work routes require income, employment relation, insurance, and tax checks.", "Non-lucrative residence usually needs stable funds, insurance, and no local work activity.", "Student residence requires school admission, funds, insurance, and work-hour limits."]
    }
  }
};

function officialImmigrationRule(source, zhSummary, enSummary, tags = ["skilled", "business", "study", "family"]) {
  const detailCopies = {
    tags,
    source,
    zh: {
      summary: zhSummary,
      rules: [
        "优先核验该官方入口的长期居留、工作、投资、学习与家庭类规则。",
        "记录适用人群、核心条件、申请材料、办理周期和最后核验日期。",
        "正式递交前请再次确认主管机关公告、表格和费用是否更新。"
      ]
    },
    en: {
      summary: enSummary,
      rules: [
        "Prioritize the official portal for residence, work, investment, study, and family routes.",
        "Track eligibility, key requirements, documents, processing time, and last-checked date.",
        "Before filing, re-check authority notices, forms, and fees."
      ]
    }
  };
}

Object.assign(featuredRules, {
  CA: officialImmigrationRule(
    "https://www.canada.ca/en/services/immigration-citizenship.html",
    "加拿大移民、难民及公民部官方入口，适合维护联邦、家庭、留学转居留及省提名路径；安大略省 OINP 可同步参考。",
    "IRCC's official portal covers federal, family, study-to-residence, and provincial pathways; Ontario OINP can be tracked alongside it."
  ),
  AU: officialImmigrationRule("https://immi.homeaffairs.gov.au/", "澳大利亚内政部官方入口，覆盖技术、雇主担保、商业投资、学生和家庭类签证。", "Australia's Department of Home Affairs covers skilled, employer-sponsored, business, student, and family visas."),
  NZ: officialImmigrationRule("https://www.immigration.govt.nz/", "新西兰移民局官方入口，适合维护技术、认证雇主工作、留学和家庭团聚路径。", "Immigration New Zealand is the official source for skilled, accredited employer, study, and family pathways."),
  US: officialImmigrationRule("https://www.uscis.gov/", "美国 USCIS 官方入口，适合维护职业移民、亲属移民、身份调整、投资和长期身份规则。", "USCIS is the official source for employment, family, adjustment, investment, and long-term status routes."),
  DE: officialImmigrationRule("https://www.make-it-in-germany.com/", "德国专业人才官方平台，适合维护欧盟蓝卡、机会卡、技术工作和家庭团聚路径。", "Germany's official skilled-worker portal covers EU Blue Card, Opportunity Card, skilled work, and family reunion."),
  PT: officialImmigrationRule("https://aima.gov.pt/", "葡萄牙 AIMA 官方入口，适合维护居留、工作、家庭团聚、投资及数字游民相关路径。", "Portugal's AIMA portal covers residence, work, family reunion, investment, and digital nomad routes."),
  ES: officialImmigrationRule("https://www.exteriores.gob.es/", "西班牙外交部及领事馆平台，适合维护长期签证、非盈利居留、学生、工作和家庭路径。", "Spain's foreign ministry and consular platform covers long-stay visas, non-lucrative residence, study, work, and family routes."),
  IE: officialImmigrationRule("https://www.irishimmigration.ie/", "爱尔兰司法部移民局官方入口，适合维护就业许可、学生、家庭和长期居留规则。", "Irish Immigration Service covers employment permission, study, family, and long-term residence rules."),
  GR: officialImmigrationRule("https://migration.gov.gr/", "希腊移民与庇护部官方入口，适合维护黄金签证、居留许可、工作和家庭类信息。", "Greece's Ministry of Migration and Asylum covers Golden Visa, residence permits, work, and family routes."),
  NL: officialImmigrationRule("https://ind.nl/en", "荷兰 IND 官方入口，适合维护高技术移民、创业、学习、家庭和永居归化规则。", "The Dutch IND portal covers highly skilled migrants, startup, study, family, permanent residence, and naturalisation."),
  FR: officialImmigrationRule("https://www.interieur.gouv.fr/", "法国内政部官方居留与签证入口，适合维护人才、工作、学生、家庭和长期居留路径。", "France's interior ministry portal supports talent, work, student, family, and long-stay residence routes."),
  CH: officialImmigrationRule("https://www.sem.admin.ch/", "瑞士 SEM 官方入口，适合维护工作许可、家庭团聚、长期居留和入籍相关信息。", "Switzerland's SEM portal covers work permits, family reunion, long-term residence, and naturalisation."),
  AT: officialImmigrationRule("https://www.migration.gv.at/", "奥地利移民与居住平台，适合维护红白红卡、工作、学习和家庭团聚路径。", "Austria's migration portal covers Red-White-Red Card, work, study, and family reunion routes."),
  IT: officialImmigrationRule("https://www.esteri.it/", "意大利外交与国际合作部入口，适合维护长期签证、工作、学习、家庭和投资相关路径。", "Italy's foreign ministry portal covers long-stay visas, work, study, family, and investment-related routes."),
  CY: officialImmigrationRule("https://www.moi.gov.cy/crmd", "塞浦路斯民事登记与移民局入口，适合维护居留、投资、工作和家庭类规则。", "Cyprus CRMD covers residence, investment, work, and family rules."),
  MT: officialImmigrationRule("https://www.identitymalta.com/", "马耳他 Identity Malta 入口，适合维护居留、身份、投资和家庭相关路径。", "Identity Malta covers residence, identity, investment, and family-related pathways."),
  SG: officialImmigrationRule("https://www.ica.gov.sg/", "新加坡 ICA 官方入口，适合维护长期准证、永居、入境许可和家庭类信息。", "Singapore ICA covers long-term passes, permanent residence, entry permits, and family-related information."),
  JP: officialImmigrationRule("https://www.moj.go.jp/isa/", "日本出入国在留管理厅入口，适合维护在留资格、高度人才、经营管理、学习和家族滞在路径。", "Japan ISA covers statuses of residence, highly skilled, business manager, study, and dependent routes."),
  KR: officialImmigrationRule("https://www.hikorea.go.kr/", "韩国 HiKorea/出入境与外国人政策入口，适合维护工作、留学、投资、永住和家庭类规则。", "Korea HiKorea covers work, study, investment, permanent residence, and family rules."),
  MY: officialImmigrationRule("https://www.imi.gov.my/", "马来西亚移民局入口，适合维护长期访问、工作、第二家园和家庭类信息。", "Malaysia Immigration covers long-term visit, work, MM2H, and family-related information."),
  TH: officialImmigrationRule("https://consular.mfa.go.th/", "泰国领事事务局入口，适合维护长期签证、投资促进、工作、学习和家庭类规则。", "Thailand's consular portal supports long-stay, investment promotion, work, study, and family routes."),
  AE: officialImmigrationRule("https://icp.gov.ae/en/", "阿联酋 ICP 官方入口，适合维护黄金签证、居留、身份、公民及家属担保信息。", "UAE ICP covers Golden Visa, residence, identity, citizenship, and family sponsorship information."),
  TR: officialImmigrationRule("https://en.goc.gov.tr/", "土耳其移民总局入口，适合维护居留许可、长期居留、家庭和入籍相关信息。", "Turkey's migration authority covers residence permits, long-term residence, family, and citizenship information."),
  PH: officialImmigrationRule("https://immigration.gov.ph/", "菲律宾移民局入口，适合维护长期居留、工作、家庭和特别居留路径。", "The Philippines Bureau of Immigration covers long-term residence, work, family, and special resident routes."),
  KN: officialImmigrationRule("https://ciu.gov.kn/", "圣基茨和尼维斯投资入籍部门入口，适合维护 CBI 项目、尽调、费用和资格要求。", "St Kitts and Nevis CIU covers CBI eligibility, due diligence, fees, and program requirements.", ["business", "family"]),
  AG: officialImmigrationRule("https://ab.gov.ag/", "安提瓜和巴布达官方入口，适合维护投资入籍、居留和家庭相关要求。", "Antigua and Barbuda's official portal can track citizenship by investment, residence, and family requirements.", ["business", "family"]),
  GD: officialImmigrationRule("https://www.cbi.gov.gd/", "格林纳达 CBI 官方入口，适合维护投资入籍、家庭成员、尽调和费用规则。", "Grenada CBI covers investment citizenship, family members, due diligence, and fees.", ["business", "family"]),
  LC: officialImmigrationRule("https://www.cipsaintlucia.com/", "圣卢西亚投资入籍官方入口，适合维护 CBI 资格、投资选项、费用和家庭成员规则。", "Saint Lucia CIP covers CBI eligibility, investment options, fees, and family member rules.", ["business", "family"]),
  DM: officialImmigrationRule("https://cbi.gov.dm/", "多米尼加投资入籍官方入口，适合维护 CBI 申请、尽调、投资和家庭规则。", "Dominica CBI covers citizenship applications, due diligence, investment, and family rules.", ["business", "family"]),
  VU: officialImmigrationRule("https://vnto.gov.vu/", "瓦努阿图官方入口，适合维护投资入籍及长期居留相关信息。", "Vanuatu's official portal can be used to track citizenship by investment and long-stay information.", ["business", "family"]),
  BR: officialImmigrationRule("https://www.gov.br/mj/pt-br", "巴西司法及公共安全部入口，适合维护居留、工作、家庭和入籍相关规则。", "Brazil's justice ministry portal covers residence, work, family, and naturalisation-related rules."),
  CL: officialImmigrationRule("https://serviciomigraciones.cl/", "智利国家移民局入口，适合维护临时居留、工作、家庭和长期居留规则。", "Chile SERMIG covers temporary residence, work, family, and long-term residence rules."),
  MX: officialImmigrationRule("https://www.gob.mx/inm", "墨西哥国家移民局入口，适合维护临时/永久居留、工作和家庭类规则。", "Mexico INM covers temporary and permanent residence, work, and family rules."),
  FJ: officialImmigrationRule("https://www.immigration.gov.fj/", "斐济移民局入口，适合维护工作、投资、居留和家庭类信息。", "Fiji Immigration covers work, investment, residence, and family information."),
  HK: officialImmigrationRule("https://www.immd.gov.hk/", "中国香港入境事务处入口，适合维护优才、高才、投资、输入人才和受养人路径。", "Hong Kong Immigration Department covers talent, investment, admission schemes, and dependent routes."),
  MO: officialImmigrationRule("https://www.fsm.gov.mo/psp/", "中国澳门治安警察局出入境事务厅入口，适合维护居留、工作、家庭和特别逗留规则。", "Macao PSP covers residence, work, family, and special stay rules."),
  TW: officialImmigrationRule("https://www.immigration.gov.tw/", "中国台湾内政部移民署入口，适合维护居留、就业金卡、家庭和永久居留规则。", "Taiwan National Immigration Agency covers residence, Employment Gold Card, family, and permanent residence rules."),
  NO: officialImmigrationRule("https://www.udi.no/en/", "挪威 UDI 官方入口，适合维护工作、学习、家庭和永久居留规则。", "Norway UDI covers work, study, family, and permanent residence rules."),
  FI: officialImmigrationRule("https://migri.fi/en/home", "芬兰 Migri 官方入口，适合维护工作、创业、学习、家庭和永居规则。", "Finland Migri covers work, entrepreneurship, study, family, and permanent residence rules."),
  DK: officialImmigrationRule("https://www.nyidanmark.dk/en-US", "丹麦移民与融合入口，适合维护工作、学习、家庭团聚和长期居留规则。", "New to Denmark covers work, study, family reunification, and long-term residence rules."),
  SE: officialImmigrationRule("https://www.migrationsverket.se/", "瑞典移民局入口，适合维护工作许可、学习、家庭、永居和入籍规则。", "Swedish Migration Agency covers work permits, study, family, permanent residence, and citizenship rules."),
  PL: officialImmigrationRule("https://www.gov.pl/web/diplomacy/visas", "波兰外交部领事信息入口，适合维护长期签证、工作、学习和家庭相关规则。", "Poland's consular portal covers long-stay visas, work, study, and family-related rules."),
  CZ: officialImmigrationRule("https://www.mvcr.cz/mvcren/", "捷克内政部移民信息入口，适合维护长期居留、工作、学习和家庭规则。", "Czech Ministry of Interior covers long-term residence, work, study, and family rules.")
});

const featuredVisaRules = {
  US: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://travel.state.gov/content/travel/en/us-visas.html",
    zh: {
      summary: "常见类别包括旅游/商务、学生、交流访问和工作类签证。",
      rules: ["旅游或商务访问通常需要确认访问目的、资金、行程和回国约束。", "学生签证应核验学校文件、SEVIS、资金证明和面谈要求。", "工作类签证通常涉及雇主申请、职位资格、配额或批准文件。"]
    },
    en: {
      summary: "Common categories include visitor, student, exchange visitor, and work visas.",
      rules: ["Visitor visas usually require purpose, funds, itinerary, and home-tie evidence.", "Student visas need school documents, SEVIS, financial proof, and interview checks.", "Work visas often involve employer filing, role eligibility, caps, or approval notices."]
    }
  },
  JP: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    zh: {
      summary: "旅游、商务、留学和工作签证材料适合按停留目的拆分维护。",
      rules: ["短期访问需核验护照、申请表、行程、资金和邀请材料。", "学习或工作类签证通常需要在留资格认定证明书等前置文件。", "免签或电子签安排需按国籍和居住地分别核验。"]
    },
    en: {
      summary: "Tourist, business, study, and work visa requirements should be separated by purpose of stay.",
      rules: ["Short stays need passport, application form, itinerary, funds, and invitation evidence.", "Study or work visas often require a Certificate of Eligibility or similar prior document.", "Visa-free or eVisa rules should be checked by nationality and residence."]
    }
  },
  GB: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://www.gov.uk/browse/visas-immigration",
    zh: {
      summary: "访客、学生、工作和家庭相关签证类别需要分开记录。",
      rules: ["访客签证应确认访问目的、停留期限、资金和不得工作的限制。", "学生签证需核验CAS、资金、英语和课程资格。", "工作签证通常需要雇主担保、岗位资格和薪资条件。"]
    },
    en: {
      summary: "Visitor, student, work, and family-related visa categories should be maintained separately.",
      rules: ["Visitor visas require purpose, duration, funds, and no-work restrictions.", "Student visas need CAS, funds, English, and course eligibility checks.", "Work visas usually need sponsorship, eligible occupation, and salary conditions."]
    }
  },
  CA: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
    zh: {
      summary: "访客签证、电子旅行授权、学习许可和工作许可是主要签证模块。",
      rules: ["短期访问需核验签证或eTA适用性、资金、行程和离境意图。", "学习许可需关注录取、资金、DLI资格和随行家庭规则。", "工作许可需区分LMIA、豁免类别、雇主合规和开放工签。"]
    },
    en: {
      summary: "Visitor visas, eTA, study permits, and work permits are major visa modules.",
      rules: ["Short visits require visa or eTA eligibility, funds, itinerary, and intent to leave.", "Study permits need admission, funds, DLI eligibility, and family-accompanying rules.", "Work permits should distinguish LMIA, exemptions, employer compliance, and open permits."]
    }
  },
  AU: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder",
    zh: {
      summary: "访客、学生、临时工作和商务访问签证可按目的筛选。",
      rules: ["访客类需确认停留目的、资金、健康品行和不得长期工作的限制。", "学生签证需核验录取、资金、保险和真实临时入境要求。", "临时工作类需确认雇主、职业、担保和停留期限。"]
    },
    en: {
      summary: "Visitor, student, temporary work, and business visitor visas can be filtered by purpose.",
      rules: ["Visitor categories require purpose, funds, health and character checks, and work restrictions.", "Student visas need admission, funds, insurance, and genuine temporary entrant checks.", "Temporary work routes require employer, occupation, sponsorship, and stay-duration checks."]
    }
  },
  CN: {
    tags: ["tourist", "business", "study", "work"],
    source: "https://cova.mfa.gov.cn/",
    zh: {
      summary: "旅游、商务、学习、工作和探亲签证适合按字母类别维护。",
      rules: ["旅游和商务签证通常需要行程、邀请、住宿或往返交通材料。", "学习签证需核验录取通知、JW表或对应学习证明。", "工作签证通常需要工作许可通知及相关雇佣材料。"]
    },
    en: {
      summary: "Tourist, business, study, work, and family visit visas should be maintained by letter category.",
      rules: ["Tourist and business visas usually need itinerary, invitation, lodging, or transport evidence.", "Study visas require admission and JW form or equivalent study documents.", "Work visas usually require a work permit notification and employment materials."]
    }
  }
};

const featuredPassportAccess = {
  US: {
    verified: true,
    updated: "2026-05-02",
    source: "https://travel.state.gov/content/travel/en/international-travel.html",
    access: {
      visaFree: ["加拿大", "日本"],
      eVisa: ["英国", "澳大利亚", "新西兰"],
      visaOnArrival: ["埃及", "尼泊尔"],
      visaRequired: ["中国"]
    },
    sources: {
      visaFree: {
        加拿大: "https://travel.state.gov/en/international-travel/travel-advisories/canada.html",
        日本: "https://travel.state.gov/en/international-travel/travel-advisories/japan.html"
      },
      eVisa: {
        英国: "https://travel.state.gov/en/international-travel/travel-advisories/united-kingdom.html",
        澳大利亚: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Australia.html",
        新西兰: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/NewZealand.html"
      },
      visaOnArrival: {
        埃及: "https://travel.state.gov/en/international-travel/travel-advisories/egypt.html",
        尼泊尔: "https://travel.state.gov/en/international-travel/travel-advisories/nepal.html"
      },
      visaRequired: {
        中国: "https://travel.state.gov/en/international-travel/travel-advisories/china.html"
      }
    }
  }
};

const regionAliases = {
  AC: { zh: "阿森松岛", en: "Ascension Island" },
  CP: { zh: "克利珀顿岛", en: "Clipperton Island" },
  DG: { zh: "迪戈加西亚岛", en: "Diego Garcia" },
  EA: { zh: "休达与梅利利亚", en: "Ceuta and Melilla" },
  IC: { zh: "加那利群岛", en: "Canary Islands" },
  TA: { zh: "特里斯坦-达库尼亚群岛", en: "Tristan da Cunha" },
  XK: { zh: "科索沃", en: "Kosovo" }
};

const tagPalette = ["skilled", "business", "study", "family"];
const visaTagPalette = ["visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired", "reviewRequired"];
const passportTagPalette = ["visaFree", "eTA", "visaOnArrival", "eVisa", "visaRequired"];
const passportIndexCodes = [
  "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE",
  "BZ", "BJ", "BT", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "CF", "TD",
  "CL", "CN", "CO", "KM", "CG", "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC",
  "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "DE", "GH", "GR", "GD",
  "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM",
  "JP", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU",
  "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MA",
  "MZ", "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "KP", "MK", "NO", "OM", "PK", "PW", "PS",
  "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "RW", "KN", "LC", "WS", "SM", "ST", "SA",
  "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "SS", "ES", "LK", "VC", "SD", "SR",
  "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UA",
  "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "YE", "ZM", "ZW"
];
const passportPhotoFiles = {
  AF: "Afghan Passport.svg",
  AL: "Albanian Passport.svg",
  AI: "Anguilla Passport.svg",
  AM: "Armenia Passport.svg",
  AO: "Angolan passport.svg",
  AT: "Reisepass at.svg",
  AZ: "Azerbaijan Passport.svg",
  BA: "Bosnia and Herzegovina Passport.svg",
  BD: "Bangladeshi E-Passport.svg",
  BM: "Bermuda Passport.svg",
  BN: "Brunei Passport.svg",
  BR: "Brazilian Passport Cover.jpg",
  CA: "Canadian passport.svg",
  CH: "Schweizer Pass 22.jpg",
  CN: "People's Republic of China Passport 2012.svg",
  HR: "Croatia Passport.svg",
  DK: "Danish Passport Cover.svg",
  EE: "Estonia Passport.svg",
  EG: "Egyptian Passport.svg",
  FR: "French Passport Cover.svg",
  GB: "British Passport 2020.svg",
  GE: "Georgia Passport.svg",
  GG: "Guernsey Passport.svg",
  GI: "Gibraltar Passport.svg",
  GR: "Greek Passport.svg",
  HK: "Hong Kong Special Administrative Region Passport 2007.svg",
  ID: "Indonesian Passport (2025).svg",
  IE: "Irish Passport.svg",
  IL: "Israeli Passport.svg",
  IM: "Isle of Man Passport.svg",
  IN: "Indian Passport (e-Passport, 2024).svg",
  JE: "Jersey Passport.svg",
  JP: "Japanese passport.JPG",
  KG: "Kyrgyz Passport.svg",
  KH: "Cambodian Passport.svg",
  KP: "North Korean Passport First Page.png",
  KZ: "Kazakhstan Passport.svg",
  LA: "Laos Passport.svg",
  LT: "Lithuanian Passport.svg",
  LU: "Luxembourg Passport.svg",
  LV: "Latvia Passport.svg",
  MA: "Moroccan passport.svg",
  MD: "Moldova Passport.svg",
  ME: "Montenegro Passport.svg",
  MG: "Malagasy Passport Cover 2013.svg",
  MK: "Macedonian Passport.svg",
  MM: "Myanmar Passport Cover.svg",
  MN: "Mongolia Passport 2023.svg",
  MO: "Macao-PASSPORT.svg",
  MS: "Montserrat Passport.svg",
  MX: "Pasaporte electrónico Mexicano 2021.svg",
  MY: "Malaysia Passport.svg",
  NO: "Norway passport 2020 Ordinary.svg",
  PH: "Regular Philippine Passport.svg",
  RO: "Romania Passport (2024).svg",
  RS: "Serbian Passport.svg",
  RU: "Russian Passport (External).svg",
  SA: "Saudi Arabia Passport.svg",
  SE: "Swedish passport 2022.svg",
  SG: "Singapore Passport.svg",
  SH: "St. Helena and Dep Passport.svg",
  SI: "Slovenia Passport.svg",
  SY: "Syrian passport.svg",
  TC: "Turks and Caicos Islands Passport.svg",
  TH: "Thai Passport V.3 (2020-2021).svg",
  TJ: "Tajikistan Passport.svg",
  TL: "East Timorese Passport.svg",
  TM: "Turkmen Passport.svg",
  TR: "Turkish Passport.svg",
  TW: "Republic of China (Taiwan) Passport 2020.svg",
  UA: "Ukrainian Passport.svg",
  US: "United States Passport.svg",
  UZ: "Uzbek passport.svg",
  VG: "British Virgin Islands Passport.svg",
  VN: "Vietnam passport.svg",
  XK: "Passaporta e Kosoves.svg",
  YE: "Yemen Passport.svg"
};
const developedPassportCodes = [
  "AD", "AT", "AU", "BE", "CA", "CH", "DE", "DK", "FI", "FR", "GB", "HK", "IE", "IS", "IT", "JP", "KR",
  "LI", "LU", "MC", "NL", "NO", "NZ", "SE", "SG", "SM", "US"
];
const grid = document.querySelector("#countryGrid");
const searchInput = document.querySelector("#searchInput");
const homeSearchInput = document.querySelector("#homeSearchInput");
const homeSearchSuggestions = document.querySelector("#homeSearchSuggestions");
const emptyState = document.querySelector("#emptyState");
const countryCount = document.querySelector("#countryCount");
const categoryCount = document.querySelector("#categoryCount");
const filterGroup = document.querySelector("#filterGroup");
const productTabs = document.querySelectorAll(".product-tab");
const topTabs = document.querySelectorAll(".top-tab");
const homeSections = document.querySelectorAll(".view-home");
const databaseSections = document.querySelectorAll(".view-database");
const languageToggle = document.querySelector("#languageToggle");
const languageMenu = document.querySelector("#languageMenu");
const languageList = document.querySelector("#languageList");
const languageFlag = document.querySelector("#languageFlag");
const languageLabel = document.querySelector("#languageLabel");
const brandText = document.querySelector("#brandText");
const brandHomeLink = document.querySelector("#brandHomeLink");
const heroEyebrow = document.querySelector("#heroEyebrow");
const blueprintMap = document.querySelector("#blueprintMap");
const mapTooltip = document.querySelector("#mapTooltip");
const detailPage = document.querySelector("#countryDetail");
const detailContent = document.querySelector("#countryDetailContent");
const detailBackButton = document.querySelector("#detailBackButton");
const visaPassportPanel = document.querySelector("#visaPassportPanel");
const visaPassportPickerLabel = document.querySelector("#visaPassportPickerLabel");
const visaPassportSelect = document.querySelector("#visaPassportSelect");
const visaPassportStats = document.querySelector("#visaPassportStats");

let activeFilter = "all";
let currentLanguage = supportedLanguages.includes(localStorage.getItem("preferredLanguage")) ? localStorage.getItem("preferredLanguage") : "zh";
let currentProduct = localStorage.getItem("preferredProduct") || "immigration";
let currentView = localStorage.getItem("preferredView") || "home";
let currentVisaPassport = localStorage.getItem("preferredVisaPassport") || "US";
let currentDetailCode = "";
let destinationVisaSourceCache = null;

const specialOfficialSources = {
  AC: "https://www.ascension.gov.ac/travel-and-shipping/immigration",
  AQ: "https://www.gov.uk/guidance/visits-to-antarctica-how-to-apply-for-a-permit",
  BV: "https://npolar.no/en/themes/bouvetoya/",
  CP: "https://www.outre-mer.gouv.fr/territoires/ile-de-la-passion-clipperton",
  DG: "https://www.gov.uk/foreign-travel-advice/british-indian-ocean-territory/entry-requirements",
  EA: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/",
  EH: "https://evis.ma/en",
  HM: "https://www.antarctica.gov.au/antarctic-operations/stations-and-field-locations/heard-island/",
  IC: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/",
  TA: "https://www.tristandc.com/visits.php",
  TF: "https://taaf.fr/acceder-aux-territoires/demande-de-visa/"
};

function getRegionName(code, language) {
  if (regionAliases[code]) {
    return regionAliases[code][language] || regionAliases[code].en || regionAliases[code].zh || copy[language].fallbackName;
  }

  try {
    const displayNames = new Intl.DisplayNames([copy[language].locale], { type: "region" });
    return displayNames.of(code) || copy[language].fallbackName;
  } catch {
    return copy[language].fallbackName;
  }
}

function getFlag(code) {
  if (!/^[A-Z]{2}$/.test(code) || ["AC", "CP", "DG", "EA", "IC", "TA", "XK"].includes(code)) {
    return "🏳️";
  }

  return [...code]
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join("");
}

function getTagsForCode(code, featured, palette) {
  if (featured[code]) {
    return featured[code].tags;
  }

  const first = code.charCodeAt(0);
  const second = code.charCodeAt(1) || first;
  const count = 2 + ((first + second) % 3);
  const start = (first + second) % palette.length;
  return Array.from({ length: count }, (_, index) => palette[(start + index) % palette.length]);
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getCountryNameAliases(code) {
  return [
    code,
    ...supportedLanguages.map((language) => getRegionName(code, language)),
    ...Object.values(regionAliases[code] || {})
  ].filter(Boolean);
}

function getPassportAccessSearchTerms(code) {
  const officialRecord = getOfficialPassportRecord(code);
  if (!officialRecord?.verified) {
    return [];
  }

  return passportTagPalette.flatMap((tag) => {
    const destinations = officialRecord.access?.[tag] || [];
    return destinations.flatMap((destination) => {
      if (typeof destination === "string") {
        return [destination];
      }

      return [destination.code, destination.name, destination.zh].filter(Boolean);
    });
  });
}

function getVisaSearchTerms(code) {
  const record = getSherpaVisaRecord(code);
  if (!record) {
    return [];
  }

  return [
    record.category,
    record.passport,
    record.sourceTitle?.zh,
    record.sourceTitle?.en,
    ...Object.values(record.zh || {}),
    ...Object.values(record.en || {})
  ].filter((value) => typeof value === "string");
}

function getCountrySearchText(country, labels) {
  const terms = [
    ...getCountryNameAliases(country.code),
    country.name,
    country.region,
    country.updated,
    country.source,
    ...country.tags.map((tag) => labels[tag] || tag)
  ];

  if (currentProduct !== "passport") {
    terms.push(country.summary, ...country.rules);
  }

  if (currentProduct === "visa") {
    terms.push(...getVisaSearchTerms(country.code));
  }

  return normalizeSearchText(terms.join(" "));
}

function getSherpaVisaData() {
  return window.SHERPA_VISA_RULES || { countries: {}, passports: {}, meta: {} };
}

function normalizeVisaPassportSelection() {
  const data = getSherpaVisaData();
  if (data.passports?.[currentVisaPassport]) {
    return currentVisaPassport;
  }

  currentVisaPassport = data.meta?.defaultPassport || Object.keys(data.passports || {})[0] || "US";
  localStorage.setItem("preferredVisaPassport", currentVisaPassport);
  return currentVisaPassport;
}

function getSelectedVisaPassportData() {
  const data = getSherpaVisaData();
  const passport = normalizeVisaPassportSelection();
  return data.passports?.[passport] || { countries: data.legacyCountries || {}, counts: {}, countryCount: 0 };
}

function getSherpaVisaRecord(code) {
  return getSelectedVisaPassportData().countries?.[code] || null;
}

function getDestinationVisaSourceCache() {
  if (destinationVisaSourceCache) {
    return destinationVisaSourceCache;
  }

  destinationVisaSourceCache = {};
  const passports = getSherpaVisaData().passports || {};
  Object.values(passports).forEach((passport) => {
    Object.entries(passport.countries || {}).forEach(([code, record]) => {
      if (!destinationVisaSourceCache[code] && (record?.source || record?.sherpaUrl)) {
        destinationVisaSourceCache[code] = record.source || record.sherpaUrl;
      }
    });
  });

  return destinationVisaSourceCache;
}

function getDestinationVisaSource(code) {
  const selectedRecord = getSherpaVisaRecord(code);
  if (selectedRecord?.source || selectedRecord?.sherpaUrl) {
    return selectedRecord.source || selectedRecord.sherpaUrl;
  }

  return getDestinationVisaSourceCache()[code] || "";
}

function getDestinationPassportSource(code) {
  const record = getOfficialPassportRecord(code);
  return record?.source || record?.henley?.fullVisaPdf || "";
}

function getBestCountrySource(code, preferredProduct = currentProduct) {
  const featuredSource = featuredRules[code]?.source || featuredVisaRules[code]?.source || "";
  const sourceByProduct = {
    immigration: featuredSource || getDestinationVisaSource(code) || getDestinationPassportSource(code),
    visa: getDestinationVisaSource(code) || featuredVisaRules[code]?.source || featuredSource || getDestinationPassportSource(code),
    passport: getDestinationPassportSource(code) || getDestinationVisaSource(code) || featuredSource
  };

  return sourceByProduct[preferredProduct] || featuredSource || getDestinationVisaSource(code) || getDestinationPassportSource(code) || specialOfficialSources[code] || "";
}

function getSherpaVisaCodes() {
  return Object.keys(getSelectedVisaPassportData().countries || {})
    .filter((code) => code !== currentVisaPassport);
}

function getSelectedVisaCounts() {
  const countries = getSelectedVisaPassportData().countries || {};
  return getSherpaVisaCodes().reduce((counts, code) => {
    const tag = countries[code]?.category || "reviewRequired";
    counts[tag] = (counts[tag] || 0) + 1;
    return counts;
  }, Object.fromEntries(visaTagPalette.map((tag) => [tag, 0])));
}

function getVisaNarrative({ name, tag, passport, sourceLabel, localized, productCopy }) {
  if (currentLanguage === "zh" && localized?.summary) {
    return {
      summary: localized.summary,
      rules: localized.rules?.length ? localized.rules : productCopy.genericRules
    };
  }

  const label = productCopy.filters[tag] || tag;
  const copyByLanguage = {
    en: {
      summary: `${passport} passport to ${name}: ${label}. Verify entry documents before travel.`,
      rules: [
        `Visa conclusion: ${label}`,
        "Travel eligibility can depend on purpose, stay duration, transit route, and document validity.",
        "Check arrival cards, health declarations, and passport validity requirements before departure.",
        `Source: ${sourceLabel}`
      ]
    },
    ja: {
      summary: `${passport} パスポートで ${name} へ渡航：${label}。出発前に入国書類を確認してください。`,
      rules: [
        `ビザ結論：${label}`,
        "渡航目的、滞在期間、乗継経路、書類の有効性によって条件が変わる場合があります。",
        "出発前に入国カード、健康申告、パスポート有効期間を確認してください。",
        `ソース：${sourceLabel}`
      ]
    },
    ko: {
      summary: `${passport} 여권으로 ${name} 방문: ${label}. 출발 전 입국 서류를 확인하세요.`,
      rules: [
        `비자 결론: ${label}`,
        "여행 목적, 체류 기간, 환승 경로, 서류 유효성에 따라 조건이 달라질 수 있습니다.",
        "출발 전 입국 카드, 건강 신고, 여권 유효기간 요건을 확인하세요.",
        `출처: ${sourceLabel}`
      ]
    },
    th: {
      summary: `หนังสือเดินทาง ${passport} ไป ${name}: ${label} โปรดตรวจสอบเอกสารเข้าเมืองก่อนเดินทาง`,
      rules: [
        `ผลสรุปวีซ่า: ${label}`,
        "เงื่อนไขอาจขึ้นอยู่กับวัตถุประสงค์การเดินทาง ระยะเวลาพำนัก เส้นทางต่อเครื่อง และความถูกต้องของเอกสาร",
        "ตรวจสอบบัตรเข้าเมือง การแจ้งสุขภาพ และอายุหนังสือเดินทางก่อนออกเดินทาง",
        `แหล่งข้อมูล: ${sourceLabel}`
      ]
    },
    ru: {
      summary: `Паспорт ${passport} в ${name}: ${label}. Проверьте въездные документы перед поездкой.`,
      rules: [
        `Визовое заключение: ${label}`,
        "Условия могут зависеть от цели поездки, срока пребывания, транзитного маршрута и действительности документов.",
        "Перед выездом проверьте карты прибытия, медицинские декларации и срок действия паспорта.",
        `Источник: ${sourceLabel}`
      ]
    }
  };

  return copyByLanguage[currentLanguage] || copyByLanguage.en;
}

function getSherpaVisaCountry(code, languageCopy, productCopy) {
  const record = getSherpaVisaRecord(code);
  const localized = record?.[currentLanguage] || (currentLanguage === "zh" ? record?.zh : record?.en) || record?.zh || {};
  const name = currentLanguage === "zh"
    ? localized.name || getRegionName(code, currentLanguage)
    : getRegionName(code, currentLanguage) || localized.name;
  const tag = record?.category || "reviewRequired";
  const sourceLabel = record?.sourceTitle?.[currentLanguage] || (currentLanguage === "zh" ? record?.sourceTitle?.zh : record?.sourceTitle?.en) || record?.sourceTitle?.zh || "Sherpa";
  const narrative = getVisaNarrative({
    name,
    tag,
    passport: record?.passport || currentVisaPassport,
    sourceLabel,
    localized,
    productCopy
  });

  return {
    code,
    name,
    flag: getFlag(code),
    region: languageCopy.regionLabel,
    updated: record?.updated || languageCopy.pendingUpdated,
    tags: record?.tags?.length ? record.tags : [tag],
    summary: narrative.summary || productCopy.genericSummary,
    rules: narrative.rules?.length ? narrative.rules : productCopy.genericRules,
    source: record?.source || getSherpaVisaData().meta?.source || "",
    sherpaSource: record?.sherpaUrl || getSherpaVisaData().meta?.source || "",
    visaPassport: record?.passport || currentVisaPassport,
    visaCategory: tag,
    visaSourceTitle: sourceLabel,
    isSherpaVerified: Boolean(record?.verified)
  };
}

function getPassportAccess(code) {
  const officialRecord = getOfficialPassportRecord(code);
  if (officialRecord?.verified) {
    return Object.fromEntries(passportTagPalette.map((tag) => {
      const destinations = officialRecord.access?.[tag] || [];
      const names = destinations.map((destination) => {
        if (typeof destination === "string") {
          return destination;
        }

        return currentLanguage === "zh"
          ? destination.zh || destination.name
          : destination.name || destination.zh;
      });

      return [tag, names];
    }));
  }

  return {
    visaFree: [],
    eTA: [],
    eVisa: [],
    visaOnArrival: [],
    visaRequired: []
  };
}

function getOfficialPassportRecord(code) {
  return window.OFFICIAL_PASSPORT_ACCESS?.[code] || featuredPassportAccess[code];
}

function getDevelopedDestinationNames() {
  return new Set(developedPassportCodes.map((code) => getRegionName(code, currentLanguage)));
}

function countDevelopedVisaFreeDestinations(access) {
  const developedNames = getDevelopedDestinationNames();
  return access.visaFree.filter((destination) => developedNames.has(destination)).length;
}

function getPassportCover(code) {
  const file = passportPhotoFiles[code];
  const passportIndexImage = `https://images.weserv.nl/?url=img.passportindex.org/countries/${code.toLowerCase()}.png&w=180`;

  return {
    image: passportIndexImage,
    fallback: file ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}` : "",
    source: file ? "Passport Index / Wikimedia Commons" : "Passport Index"
  };
}

function getPassportCountry(code, languageCopy, productCopy) {
  const access = getPassportAccess(code);
  const name = getRegionName(code, currentLanguage);
  const delimiter = currentLanguage === "zh" ? "、" : ", ";
  const officialRecord = getOfficialPassportRecord(code);
  const isVerified = Boolean(officialRecord?.verified);
  const accessCounts = Object.entries(access)
    .map(([tag, list]) => `${productCopy.filters[tag]} ${list.length}`)
    .join(" · ");
  const pendingSummary = currentLanguage === "zh"
    ? `${name}护照出行数据待官方核验。`
    : `${name} passport access data is pending official verification.`;
  const pendingRule = currentLanguage === "zh" ? "待官方核验" : "Pending official verification";

  return {
    code,
    name,
    flag: getFlag(code),
    region: languageCopy.regionLabel,
    updated: isVerified ? officialRecord.updated : languageCopy.pendingUpdated,
    tags: passportTagPalette,
    summary: isVerified ? `${name}${currentLanguage === "zh" ? "护照出行能力：" : " passport access: "}${accessCounts}` : pendingSummary,
    rules: passportTagPalette.map((tag) => `${productCopy.filters[tag]}: ${access[tag].length ? access[tag].join(delimiter) : pendingRule}`),
    source: officialRecord?.henley?.fullVisaPdf || officialRecord?.source || "",
    passportIndexSource: officialRecord?.source || "",
    passportFullVisaPdf: officialRecord?.henley?.fullVisaPdf || "",
    passportAccessSources: officialRecord?.sources || {},
    passportAccess: access,
    passportCover: getPassportCover(code),
    isPassportVerified: isVerified,
    visaFreeCount: access.visaFree.length,
    eTACount: access.eTA.length,
    eVisaCount: access.eVisa.length,
    visaOnArrivalCount: access.visaOnArrival.length,
    visaRequiredCount: access.visaRequired.length,
    mobilityScore: officialRecord?.mobilityScore || access.visaFree.length + access.eTA.length + access.visaOnArrival.length,
    developedVisaFreeCount: countDevelopedVisaFreeDestinations(access),
    passportRank: officialRecord?.rank || 0
  };
}

function comparePassportCountries(first, second, languageCopy) {
  const verifiedDifference = Number(second.isPassportVerified) - Number(first.isPassportVerified);
  const rankDifference = (first.passportRank || 999) - (second.passportRank || 999);
  const scoreDifference = second.mobilityScore - first.mobilityScore;
  const visaFreeDifference = second.visaFreeCount - first.visaFreeCount;
  const developedDifference = second.developedVisaFreeCount - first.developedVisaFreeCount;
  return verifiedDifference || rankDifference || scoreDifference || visaFreeDifference || developedDifference || first.name.localeCompare(second.name, languageCopy.locale);
}

function getPassportPageOrderMap(languageCopy) {
  const passportProductCopy = productContent[currentLanguage].passport;
  const orderedPassportCountries = passportIndexCodes
    .map((code) => getPassportCountry(code, languageCopy, passportProductCopy))
    .sort((first, second) => comparePassportCountries(first, second, languageCopy));

  return new Map(orderedPassportCountries.map((country, index) => [country.code, index]));
}

function compareByPassportPageOrder(first, second, languageCopy, passportOrderMap) {
  const fallbackIndex = Number.MAX_SAFE_INTEGER;
  const firstIndex = passportOrderMap.get(first.code) ?? fallbackIndex;
  const secondIndex = passportOrderMap.get(second.code) ?? fallbackIndex;
  return firstIndex - secondIndex || first.name.localeCompare(second.name, languageCopy.locale);
}

function buildCountries() {
  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][currentProduct];
  const featured = currentProduct === "visa" ? featuredVisaRules : featuredRules;
  const palette = currentProduct === "visa" ? visaTagPalette : tagPalette;

  if (currentProduct === "passport") {
    const passportCountries = passportIndexCodes
      .map((code) => getPassportCountry(code, languageCopy, productCopy))
      .sort((first, second) => comparePassportCountries(first, second, languageCopy));

    return passportCountries;
  }

  if (currentProduct === "visa") {
    const passportOrderMap = getPassportPageOrderMap(languageCopy);
    return getSherpaVisaCodes()
      .map((code) => getSherpaVisaCountry(code, languageCopy, productCopy))
      .sort((first, second) => compareByPassportPageOrder(first, second, languageCopy, passportOrderMap));
  }

  const passportOrderMap = getPassportPageOrderMap(languageCopy);
  return regionCodes.map((code) => {
    const featuredRule = featured[code];
    const localizedRules = featuredRule?.[currentLanguage] || (currentLanguage === "zh" ? featuredRule?.zh : featuredRule?.en) || featuredRule?.zh;

    return {
      code,
      name: getRegionName(code, currentLanguage),
      flag: getFlag(code),
      region: languageCopy.regionLabel,
      updated: featuredRule ? "2026-04" : languageCopy.pendingUpdated,
      tags: getTagsForCode(code, featured, palette),
      summary: localizedRules?.summary || productCopy.genericSummary,
      rules: localizedRules?.rules || productCopy.genericRules,
      source: getBestCountrySource(code, "immigration")
    };
  }).sort((first, second) => compareByPassportPageOrder(first, second, languageCopy, passportOrderMap));
}

function getFoliumMapTemplate() {
  const selectedPassport = normalizeVisaPassportSelection();
  const mapLabel = {
    zh: "Folium 世界国家地图",
    en: "Folium world country map",
    ja: "Folium 世界国別地図",
    ko: "Folium 세계 국가 지도",
    th: "แผนที่ประเทศทั่วโลก Folium",
    ru: "Карта стран мира Folium"
  }[currentLanguage] || "Folium world country map";

  return `
    <iframe
      class="folium-map-frame"
      title="${mapLabel}"
      src="assets/folium-world-map.html?v=20260503-map-passport-aligned&lang=${encodeURIComponent(currentLanguage)}&passport=${encodeURIComponent(selectedPassport)}"
      loading="lazy"
    ></iframe>
  `;
}

function renderBlueprint() {
  blueprintMap.innerHTML = getFoliumMapTemplate();
  hideMapTooltip();
}

function getCountrySearchOptions() {
  return regionCodes.map((code) => ({
    code,
    name: getRegionName(code, currentLanguage),
    aliases: supportedLanguages
      .map((language) => getRegionName(code, language))
      .concat(Object.values(regionAliases[code] || {}))
      .concat(code)
      .filter(Boolean)
  }));
}

function scoreCountrySearch(option, keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) {
    return 0;
  }

  return option.aliases.reduce((bestScore, alias) => {
    const text = String(alias).toLowerCase();
    if (text === normalizedKeyword) {
      return Math.min(bestScore, 0);
    }
    if (text.startsWith(normalizedKeyword)) {
      return Math.min(bestScore, 1);
    }
    if (text.includes(normalizedKeyword)) {
      return Math.min(bestScore, 2);
    }
    return bestScore;
  }, Number.POSITIVE_INFINITY);
}

function getHomeSearchMatches() {
  const keyword = homeSearchInput?.value.trim() || "";
  if (!keyword) {
    return [];
  }

  return getCountrySearchOptions()
    .map((option) => ({ ...option, score: scoreCountrySearch(option, keyword) }))
    .filter((option) => Number.isFinite(option.score))
    .sort((first, second) => first.score - second.score || first.name.localeCompare(second.name, copy[currentLanguage].locale))
    .slice(0, 8);
}

function getActiveHomeSearchOption() {
  return homeSearchSuggestions?.querySelector(".home-search-option.is-active");
}

function setActiveHomeSearchOption(nextIndex) {
  const options = [...(homeSearchSuggestions?.querySelectorAll(".home-search-option") || [])];
  if (!options.length) {
    return;
  }

  const safeIndex = (nextIndex + options.length) % options.length;
  options.forEach((option, index) => {
    const isActive = index === safeIndex;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });
}

function moveActiveHomeSearchOption(direction) {
  const options = [...(homeSearchSuggestions?.querySelectorAll(".home-search-option") || [])];
  if (!options.length) {
    return;
  }

  const currentIndex = Math.max(0, options.findIndex((option) => option.classList.contains("is-active")));
  setActiveHomeSearchOption(currentIndex + direction);
}

function hideHomeSearchSuggestions() {
  homeSearchSuggestions?.classList.remove("is-visible");
  homeSearchInput?.setAttribute("aria-expanded", "false");
}

function renderHomeSearchSuggestions() {
  if (!homeSearchInput || !homeSearchSuggestions) {
    return [];
  }

  const matches = getHomeSearchMatches();
  if (!matches.length) {
    homeSearchSuggestions.innerHTML = "";
    hideHomeSearchSuggestions();
    return matches;
  }

  homeSearchSuggestions.innerHTML = matches.map((option, index) => `
    <button class="home-search-option ${index === 0 ? "is-active" : ""}" type="button" role="option" data-home-search-code="${option.code}" aria-selected="${index === 0}">
      <span aria-hidden="true">${getFlag(option.code)}</span>
      <strong>${option.name}</strong>
      <small>${option.code}</small>
    </button>
  `).join("");
  homeSearchSuggestions.classList.add("is-visible");
  homeSearchInput.setAttribute("aria-expanded", "true");
  return matches;
}

function openHomeSearchResult(code) {
  if (!code) {
    return;
  }

  currentProduct = "immigration";
  currentView = "detail";
  currentDetailCode = code;
  activeFilter = "all";
  searchInput.value = "";
  homeSearchInput.value = "";
  hideHomeSearchSuggestions();
  localStorage.setItem("preferredProduct", currentProduct);
  localStorage.setItem("preferredView", currentProduct);
  applyLanguage();
  window.location.hash = `country/${code.toLowerCase()}?type=immigration`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function hideMapTooltip() {
  mapTooltip.classList.remove("is-visible");
}

function renderFilterButtons(productCopy) {
  filterGroup.innerHTML = productCopy.filterOrder
    .map((filter) => `
      <button class="filter-pill ${filter === activeFilter ? "is-active" : ""}" type="button" data-filter="${filter}">
        ${productCopy.filters[filter]}
      </button>
    `)
    .join("");
}

function renderLanguageList() {
  languageList.innerHTML = supportedLanguages
    .map((language) => {
      const languageCopy = copy[language];
      return `
        <button class="language-option ${language === currentLanguage ? "is-active" : ""}" type="button" role="option" aria-selected="${language === currentLanguage}" data-language="${language}">
          <span aria-hidden="true">${languageCopy.languageFlag}</span>
          <span>${languageCopy.languageLabel}</span>
        </button>
      `;
    })
    .join("");
}

function getVisaPassportOptionCodes(languageCopy) {
  const data = getSherpaVisaData();
  return Object.keys(data.passports || {})
    .sort((first, second) => first.localeCompare(second));
}

function renderVisaPassportPanel(productCopy, languageCopy) {
  if (!visaPassportPanel || !visaPassportSelect || !visaPassportStats) {
    return;
  }

  normalizeVisaPassportSelection();
  const selectedCounts = getSelectedVisaCounts();
  const selectedName = getRegionName(currentVisaPassport, currentLanguage);
  const optionCodes = getVisaPassportOptionCodes(languageCopy);
  const labels = productCopy.filters;
  const visaPanelCopy = {
    zh: { total: "目的地", label: "设置护照国家/地区", passport: "护照" },
    en: { total: "Destinations", label: "Set Passport Country/Region", passport: "passport" },
    ja: { total: "目的地", label: "パスポート国・地域を設定", passport: "パスポート" },
    ko: { total: "목적지", label: "여권 국가/지역 설정", passport: "여권" },
    th: { total: "จุดหมาย", label: "ตั้งค่าประเทศ/ภูมิภาคของหนังสือเดินทาง", passport: "หนังสือเดินทาง" },
    ru: { total: "направлений", label: "Выберите страну/территорию паспорта", passport: "паспорт" }
  }[currentLanguage] || { total: "Destinations", label: "Set Passport Country/Region", passport: "passport" };
  const countItems = visaTagPalette.map((tag) => ({
    label: labels[tag],
    count: selectedCounts[tag] || 0,
    tag
  }));

  visaPassportPickerLabel.textContent = visaPanelCopy.label;
  visaPassportSelect.innerHTML = optionCodes
    .map((code) => `<option value="${code}" ${code === currentVisaPassport ? "selected" : ""}>${getFlag(code)} ${getRegionName(code, currentLanguage)} · ${code}</option>`)
    .join("");

  visaPassportStats.innerHTML = `
    <div class="visa-stat visa-stat-selected">
      <strong>${getSherpaVisaCodes().length}</strong>
      <span>${selectedName} ${visaPanelCopy.passport} · ${visaPanelCopy.total}</span>
    </div>
    ${countItems.map((item) => `
      <div class="visa-stat">
        <strong>${item.count}</strong>
        <span>${item.label}</span>
      </div>
    `).join("")}
  `;
}

function applyLanguage() {
  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][currentProduct];
  document.documentElement.lang = languageCopy.locale;
  document.title = currentView === "home" ? languageCopy.homeBrand : `${languageCopy.homeBrand} - ${productCopy.tab}`;
  brandText.textContent = languageCopy.homeBrand;
  heroEyebrow.textContent = productCopy.eyebrow;
  languageFlag.textContent = languageCopy.languageFlag;
  languageLabel.textContent = languageCopy.languageLabel;
  renderLanguageList();
  renderHomeSearchSuggestions();
  searchInput.placeholder = productCopy.searchPlaceholder;
  emptyState.textContent = productCopy.emptyState;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = languageCopy[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = languageCopy[key];
  });

  document.querySelector("[data-i18n='heroTitle']").textContent = productCopy.heroTitle;
  document.querySelector("[data-i18n='heroText']").textContent = productCopy.heroText;
  document.querySelector("[data-i18n='pathCountLabel']").textContent = productCopy.categoryCountLabel;
  document.querySelector("[data-i18n='searchLabel']").textContent = productCopy.searchLabel;
  document.querySelector("[data-i18n='countriesTitle']").textContent = productCopy.countriesTitle;
  document.querySelector("[data-i18n='countriesText']").textContent = productCopy.countriesText;
  document.querySelector("[data-i18n='watchlistText']").textContent = productCopy.watchlistText;
  document.querySelector("[data-i18n='noticeOneTitle']").textContent = productCopy.noticeOneTitle;
  document.querySelector("[data-i18n='noticeOneText']").textContent = productCopy.noticeOneText;
  document.querySelector("[data-i18n='noticeTwoText']").textContent = productCopy.noticeTwoText;
  document.querySelector("[data-i18n='footerBrand']").textContent = productCopy.footerBrand;
  document.querySelector("[data-i18n='footerNote']").textContent = productCopy.footerNote;

  if (!productCopy.filterOrder.includes(activeFilter)) {
    activeFilter = "all";
  }
  renderFilterButtons(productCopy);
  renderVisaPassportPanel(productCopy, languageCopy);

  productTabs.forEach((button) => {
    button.textContent = productContent[currentLanguage][button.dataset.product].tab;
    button.classList.toggle("is-active", button.dataset.product === currentProduct);
  });

  topTabs.forEach((button) => {
    if (button.dataset.view === "home") {
      button.textContent = languageCopy.navHome;
    } else {
      button.textContent = productContent[currentLanguage][button.dataset.view].tab;
    }
    button.classList.toggle("is-active", button.dataset.view === currentView);
  });

  categoryCount.textContent = productCopy.filterOrder.length - 1;

  renderBlueprint();
  if (currentView === "detail" && currentDetailCode) {
    renderCountryDetail();
  }
  applyView();
  renderCountries();
}

function applyView() {
  const isHome = currentView === "home";
  const isDetail = currentView === "detail";
  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][currentProduct];

  homeSections.forEach((section) => section.classList.toggle("is-hidden", !isHome));
  databaseSections.forEach((section) => section.classList.toggle("is-hidden", isHome || isDetail));
  visaPassportPanel?.classList.toggle("is-hidden", isHome || isDetail || currentProduct !== "visa");
  detailPage.classList.toggle("is-hidden", !isDetail);
  brandText.textContent = languageCopy.homeBrand;
  document.title = isHome ? languageCopy.homeBrand : `${languageCopy.homeBrand} - ${productCopy.tab}`;

  topTabs.forEach((button) => {
    const isActive = isDetail ? button.dataset.view === currentProduct : button.dataset.view === currentView;
    button.classList.toggle("is-active", isActive);
  });
}

function renderCountries() {
  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][currentProduct];
  const labels = productCopy.filters;
  const countries = buildCountries();
  const keyword = normalizeSearchText(searchInput.value.trim());
  const filteredCountries = countries.filter((country) => {
    const matchesFilter = activeFilter === "all" || country.tags.includes(activeFilter);
    const searchable = getCountrySearchText(country, labels);

    return matchesFilter && searchable.includes(keyword);
  });

  grid.innerHTML = filteredCountries.map((country, index) => createCountryCard(country, index, labels, languageCopy)).join("");
  emptyState.hidden = filteredCountries.length > 0;
  countryCount.textContent = countries.length;
  bindCardToggles();
}

function createCountryCard(country, index, labels, languageCopy) {
  const tags = country.tags
    .map((tag) => createCardTag(country, tag, labels))
    .join("");

  const rules = country.rules
    .map((rule) => `<li>${rule}</li>`)
    .join("");

  const sourceLink = country.source
    ? `<a class="source-link" href="${country.source}" data-official-source="${country.source}">${languageCopy.officialSource}</a>`
    : `<span class="source-link is-disabled">${languageCopy.pendingSource}</span>`;
  const cardCopy = {
    zh: {
      detail: "查看详情",
      rank: "第",
      rankSuffix: "名",
      access: "通行",
      pending: "待官方核验",
      passport: "护照",
      cover: "护照封面",
      photoPending: "照片待补充"
    },
    en: {
      detail: "View details",
      rank: "Rank",
      rankSuffix: "",
      access: "Access",
      pending: "Pending official verification",
      passport: "passport",
      cover: "passport cover",
      photoPending: "Photo pending"
    },
    ja: {
      detail: "詳細を見る",
      rank: "順位",
      rankSuffix: "",
      access: "通行",
      pending: "公式確認待ち",
      passport: "パスポート",
      cover: "パスポート表紙",
      photoPending: "写真未追加"
    },
    ko: {
      detail: "상세 보기",
      rank: "순위",
      rankSuffix: "",
      access: "이동 점수",
      pending: "공식 확인 대기",
      passport: "여권",
      cover: "여권 표지",
      photoPending: "사진 대기"
    },
    th: {
      detail: "ดูรายละเอียด",
      rank: "อันดับ",
      rankSuffix: "",
      access: "คะแนนเดินทาง",
      pending: "รอตรวจสอบทางการ",
      passport: "หนังสือเดินทาง",
      cover: "ปกหนังสือเดินทาง",
      photoPending: "รอรูปภาพ"
    },
    ru: {
      detail: "Подробнее",
      rank: "Ранг",
      rankSuffix: "",
      access: "Доступ",
      pending: "Ожидает официальной проверки",
      passport: "паспорт",
      cover: "обложка паспорта",
      photoPending: "Фото ожидается"
    }
  }[currentLanguage] || {
    detail: "View details",
    rank: "Rank",
    rankSuffix: "",
    access: "Access",
    pending: "Pending official verification",
    passport: "passport",
    cover: "passport cover",
    photoPending: "Photo pending"
  };
  const detailLabel = cardCopy.detail;
  const rankLabel = currentLanguage === "zh"
    ? `${cardCopy.rank} ${country.passportRank} ${cardCopy.rankSuffix}`
    : `${cardCopy.rank} ${country.passportRank}`;
  const passportRankMeta = country.isPassportVerified
    ? (currentLanguage === "zh"
      ? `第 ${country.passportRank} 名 · 通行 ${country.mobilityScore} · 免签 ${country.visaFreeCount} · 电子授权 ${country.eTACount} · 落地签 ${country.visaOnArrivalCount} · 电子签 ${country.eVisaCount} · 需签证 ${country.visaRequiredCount}`
      : `${rankLabel} · ${cardCopy.access} ${country.mobilityScore} · ${labels.visaFree} ${country.visaFreeCount} · ${labels.eTA} ${country.eTACount} · ${labels.visaOnArrival} ${country.visaOnArrivalCount} · ${labels.eVisa} ${country.eVisaCount} · ${labels.visaRequired} ${country.visaRequiredCount}`)
    : cardCopy.pending;
  const countryMeta = currentProduct === "passport"
    ? passportRankMeta
    : currentProduct === "visa"
      ? `${country.visaPassport || "US"} ${cardCopy.passport} · ${productContent[currentLanguage].visa.filters[country.visaCategory] || country.visaCategory} · ${country.updated}`
      : country.updated;
  const visual = currentProduct === "passport"
    ? (country.passportCover.image ? `
      <span class="passport-photo" data-passport-photo="${country.code}">
        <img src="${country.passportCover.image}" data-fallback-src="${country.passportCover.fallback}" alt="${country.name} ${cardCopy.cover}" loading="lazy">
        <span>${cardCopy.photoPending}</span>
      </span>
    ` : `
      <span class="passport-photo is-missing" data-passport-photo="${country.code}">
        <span>${cardCopy.photoPending}</span>
      </span>
    `)
    : `<span class="flag" aria-hidden="true">${country.flag}</span>`;
  const detailAction = currentProduct === "passport"
    ? ""
    : `
      <div class="card-actions">
        <button class="detail-button" type="button" data-detail-code="${country.code}">${detailLabel}</button>
      </div>
    `;

  return `
    <article class="country-card" data-country="${country.name}" data-code="${country.code}">
      <button class="country-toggle" type="button" aria-expanded="false" aria-controls="detail-${index}">
        ${visual}
        <span>
          <span class="country-name">${country.name}</span>
          <span class="country-meta">${country.code} · ${countryMeta}</span>
        </span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div class="country-summary">
        ${tags}
      </div>
      ${detailAction}
      <div class="country-detail" id="detail-${index}">
        <div class="detail-inner">
          <div class="detail-content">
            <h3>${country.summary}</h3>
            <ul class="detail-list">${rules}</ul>
            <div class="detail-footer">
              <span>${languageCopy.lastChecked}：${country.updated}</span>
              ${sourceLink}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function createCardTag(country, tag, labels) {
  if (currentProduct !== "passport") {
    return `<span class="tag ${tag}">${labels[tag] || tag}</span>`;
  }

  const accessList = country.passportAccess?.[tag] || [];
  const sourceMap = country.passportAccessSources?.[tag] || {};
  const emptyText = currentLanguage === "zh" ? "待官方核验" : "Pending official verification";
  const preview = accessList.length
    ? accessList.map((destination) => {
      const source = sourceMap[destination] || country.passportFullVisaPdf || country.source;
      return source
        ? `<a href="${source}" target="_blank" rel="noreferrer">${destination}</a>`
        : `<span>${destination}</span>`;
    }).join("")
    : `<span>${emptyText}</span>`;

  return `
    <span class="tag ${tag} passport-access-tag" tabindex="0">
      ${labels[tag]}
      <span class="tag-flyout" role="tooltip">
        <strong>${country.name} · ${labels[tag]}</strong>
        <span class="tag-flyout-grid">${preview}</span>
      </span>
    </span>
  `;
}

function bindCardToggles() {
  document.querySelectorAll(".country-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".country-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-detail-code]").forEach((button) => {
    button.addEventListener("click", () => {
      openCountryDetail(button.dataset.detailCode);
    });
  });

  bindPassportImageFallbacks();
}

function bindPassportImageFallbacks() {
  document.querySelectorAll(".passport-photo img").forEach((image) => {
    image.addEventListener("load", () => {
      image.closest(".passport-photo")?.classList.add("has-image");
    });

    image.addEventListener("error", () => {
      const wrapper = image.closest(".passport-photo");
      const fallback = image.dataset.fallbackSrc;
      if (fallback && image.src !== fallback) {
        image.dataset.fallbackSrc = "";
        image.src = fallback;
        return;
      }

      wrapper?.classList.add("is-missing");
      image.remove();
    });
  });
}

function getProductCountry(product, code) {
  const previousProduct = currentProduct;
  currentProduct = product;
  const country = buildCountries().find((item) => item.code === code);
  currentProduct = previousProduct;
  if (country) {
    return country;
  }

  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][product];
  const tags = product === "passport"
    ? passportTagPalette
    : product === "visa"
      ? ["reviewRequired"]
      : getTagsForCode(code, featuredRules, tagPalette);

  return {
    code,
    name: getRegionName(code, currentLanguage),
    flag: getFlag(code),
    region: languageCopy.regionLabel,
    updated: languageCopy.pendingUpdated,
    tags,
    summary: productCopy.genericSummary,
    rules: productCopy.genericRules,
    source: getBestCountrySource(code, product),
    passportAccess: product === "passport" ? getPassportAccess(code) : undefined,
    passportIndexSource: getDestinationPassportSource(code),
    passportFullVisaPdf: "",
    sherpaSource: product === "visa" ? getDestinationVisaSource(code) : ""
  };
}

function getDetailOptions(country, labels) {
  const detailCopy = getDetailCopy();
  return country.tags.map((tag) => ({
    label: labels[tag] || tag,
    title: `${country.name} ${labels[tag] || tag}`,
    duration: country.updated === copy[currentLanguage].pendingUpdated ? detailCopy.pendingDuration : "2026",
    complexity: country.source ? detailCopy.medium : detailCopy.pending
  }));
}

function getDetailCopy() {
  const detailCopies = {
    zh: {
      destination: "目的地",
      code: "国家/地区代码",
      currentType: "当前分类",
      options: "当前可选路径",
      timeline: "周期",
      complexity: "复杂度",
      keyRequirements: "办理要点",
      immigrationTypes: "移民类型",
      visaTypes: "签证类型",
      passportTypes: "护照出行类型",
      officialSources: "对应官方来源",
      sourceNote: "下方来源来自当前已维护的移民、签证和护照数据。",
      pending: "待核验",
      medium: "中等",
      pendingDuration: "待维护"
    },
    en: {
      destination: "Destination",
      code: "Code",
      currentType: "Current Type",
      options: "Available Options",
      timeline: "Timeline",
      complexity: "Complexity",
      keyRequirements: "Key Requirements",
      immigrationTypes: "Immigration Types",
      visaTypes: "Visa Types",
      passportTypes: "Passport Access Types",
      officialSources: "Official Sources",
      sourceNote: "Sources below come from maintained immigration, visa, and passport datasets.",
      pending: "Review",
      medium: "Medium",
      pendingDuration: "Pending"
    },
    ja: {
      destination: "目的地",
      code: "国・地域コード",
      currentType: "現在の分類",
      options: "現在の選択肢",
      timeline: "期間",
      complexity: "難易度",
      keyRequirements: "申請要点",
      immigrationTypes: "移住タイプ",
      visaTypes: "ビザタイプ",
      passportTypes: "パスポート渡航タイプ",
      officialSources: "対応する公式ソース",
      sourceNote: "下記のソースは、現在整備済みの移住・ビザ・パスポートデータから取得しています。",
      pending: "要確認",
      medium: "中",
      pendingDuration: "未整備"
    },
    ko: {
      destination: "목적지",
      code: "국가/지역 코드",
      currentType: "현재 분류",
      options: "현재 선택지",
      timeline: "기간",
      complexity: "난이도",
      keyRequirements: "핵심 요건",
      immigrationTypes: "이민 유형",
      visaTypes: "비자 유형",
      passportTypes: "여권 이동 유형",
      officialSources: "해당 공식 출처",
      sourceNote: "아래 출처는 현재 관리 중인 이민, 비자, 여권 데이터에서 가져옵니다.",
      pending: "확인 필요",
      medium: "보통",
      pendingDuration: "대기"
    },
    th: {
      destination: "จุดหมาย",
      code: "รหัสประเทศ/ภูมิภาค",
      currentType: "ประเภทปัจจุบัน",
      options: "ตัวเลือกปัจจุบัน",
      timeline: "ระยะเวลา",
      complexity: "ความซับซ้อน",
      keyRequirements: "ข้อกำหนดสำคัญ",
      immigrationTypes: "ประเภทย้ายถิ่น",
      visaTypes: "ประเภทวีซ่า",
      passportTypes: "ประเภทการเดินทางด้วยหนังสือเดินทาง",
      officialSources: "แหล่งข้อมูลทางการที่เกี่ยวข้อง",
      sourceNote: "แหล่งข้อมูลด้านล่างมาจากชุดข้อมูลย้ายถิ่น วีซ่า และหนังสือเดินทางที่ดูแลไว้",
      pending: "ต้องตรวจสอบ",
      medium: "ปานกลาง",
      pendingDuration: "รอดำเนินการ"
    },
    ru: {
      destination: "Направление",
      code: "Код страны/территории",
      currentType: "Текущий раздел",
      options: "Доступные варианты",
      timeline: "Срок",
      complexity: "Сложность",
      keyRequirements: "Ключевые требования",
      immigrationTypes: "Типы иммиграции",
      visaTypes: "Типы виз",
      passportTypes: "Типы паспортного доступа",
      officialSources: "Соответствующие официальные источники",
      sourceNote: "Источники ниже взяты из поддерживаемых данных по иммиграции, визам и паспортам.",
      pending: "Проверить",
      medium: "Средняя",
      pendingDuration: "Ожидает"
    }
  };

  return detailCopies[currentLanguage] || detailCopies.en;
}

function getDetailSourceLinks(immigrationCountry, visaCountry, passportCountry, productCopy) {
  const code = immigrationCountry?.code || visaCountry?.code || passportCountry?.code;
  const entries = [
    {
      label: productContent[currentLanguage].immigration.tab,
      url: immigrationCountry?.source || getBestCountrySource(code, "immigration")
    },
    {
      label: productContent[currentLanguage].visa.tab,
      url: visaCountry?.source || visaCountry?.sherpaSource || getBestCountrySource(code, "visa")
    },
    {
      label: productContent[currentLanguage].passport.tab,
      url: passportCountry?.passportIndexSource || passportCountry?.passportFullVisaPdf || passportCountry?.source || getBestCountrySource(code, "passport")
    }
  ];
  const seen = new Set();

  return entries.filter((entry) => {
    if (!entry.url || seen.has(entry.url)) {
      return false;
    }

    seen.add(entry.url);
    return true;
  });
}

function openCountryDetail(code) {
  currentDetailCode = code;
  currentView = "detail";
  localStorage.setItem("preferredView", currentProduct);
  renderCountryDetail();
  applyView();
  window.location.hash = `country/${code.toLowerCase()}?type=${currentProduct}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCountryDetail() {
  const languageCopy = copy[currentLanguage];
  const productCopy = productContent[currentLanguage][currentProduct];
  const detailCopy = getDetailCopy();
  const country = buildCountries().find((item) => item.code === currentDetailCode) || buildCountries()[0];
  const immigrationCountry = getProductCountry("immigration", country.code);
  const visaCountry = getProductCountry("visa", country.code);
  const passportCountry = getProductCountry("passport", country.code);
  const currentOptions = getDetailOptions(country, productCopy.filters);
  const immigrationOptions = getDetailOptions(immigrationCountry, productContent[currentLanguage].immigration.filters);
  const visaOptions = getDetailOptions(visaCountry, productContent[currentLanguage].visa.filters);
  const passportOptions = getDetailOptions(passportCountry, productContent[currentLanguage].passport.filters);
  const passportAccess = passportCountry.passportAccess || getPassportAccess(country.code);
  const passportAccessSections = passportTagPalette.map((tag) => `
    <section class="detail-section-card">
      <h2>${productContent[currentLanguage].passport.filters[tag]}</h2>
      <div class="detail-chip-row">
        ${passportAccess[tag].map((destination) => `<span class="tag ${tag}">${destination}</span>`).join("")}
      </div>
    </section>
  `).join("");
  const source = country.source
    ? `<a class="source-link" href="${country.source}" data-official-source="${country.source}">${languageCopy.officialSource}</a>`
    : `<span class="source-link is-disabled">${languageCopy.pendingSource}</span>`;
  const sourceLinks = getDetailSourceLinks(immigrationCountry, visaCountry, passportCountry, productCopy);
  const sourceList = sourceLinks.length
    ? sourceLinks.map((entry) => `<a class="source-link" href="${entry.url}" data-official-source="${entry.url}">${entry.label}</a>`).join("")
    : `<span class="source-link is-disabled">${languageCopy.pendingSource}</span>`;

  detailContent.innerHTML = `
    <div class="detail-hero">
      <article class="detail-main">
        <div class="detail-title-row">
          <span class="flag">${country.flag}</span>
          <div>
            <p class="eyebrow">${productCopy.tab} ${detailCopy.destination}</p>
            <h1>${country.name}</h1>
          </div>
        </div>
        <div class="detail-chip-row">
          ${country.tags.map((tag) => `<span class="tag ${tag}">${productCopy.filters[tag] || tag}</span>`).join("")}
        </div>
        <p>${country.summary}</p>
      </article>
      <aside class="detail-side">
        <div class="detail-stat"><span>${detailCopy.code}</span><strong>${country.code}</strong></div>
        <div class="detail-stat"><span>${languageCopy.lastChecked}</span><strong>${country.updated}</strong></div>
        <div class="detail-stat"><span>${detailCopy.currentType}</span><strong>${productCopy.tab}</strong></div>
      </aside>
    </div>

    <div class="detail-sections">
      <section class="detail-section-card">
        <h2>${detailCopy.options}</h2>
        <ul class="detail-option-list">
          ${currentOptions.map((option) => `<li><strong>${option.title}</strong><span>${detailCopy.timeline}: ${option.duration} · ${detailCopy.complexity}: ${option.complexity}</span></li>`).join("")}
        </ul>
      </section>
      <section class="detail-section-card">
        <h2>${detailCopy.keyRequirements}</h2>
        <ul class="detail-list">
          ${country.rules.map((rule) => `<li>${rule}</li>`).join("")}
        </ul>
        ${source}
      </section>
      <section class="detail-section-card">
        <h2>${detailCopy.immigrationTypes}</h2>
        <div class="detail-chip-row">
          ${immigrationOptions.map((option) => `<span class="tag">${option.label}</span>`).join("")}
        </div>
      </section>
      <section class="detail-section-card">
        <h2>${detailCopy.visaTypes}</h2>
        <div class="detail-chip-row">
          ${visaOptions.map((option) => `<span class="tag">${option.label}</span>`).join("")}
        </div>
      </section>
      <section class="detail-section-card">
        <h2>${detailCopy.passportTypes}</h2>
        <div class="detail-chip-row">
          ${passportOptions.map((option) => `<span class="tag">${option.label}</span>`).join("")}
        </div>
      </section>
      <section class="detail-section-card">
        <h2>${detailCopy.officialSources}</h2>
        <p>${detailCopy.sourceNote}</p>
        <div class="detail-chip-row">${sourceList}</div>
      </section>
      ${currentProduct === "passport" ? passportAccessSections : ""}
    </div>
  `;
}

filterGroup.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-pill");
  if (!button) {
    return;
  }

  filterGroup.querySelectorAll(".filter-pill").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  activeFilter = button.dataset.filter;
  renderCountries();
});

visaPassportSelect?.addEventListener("change", () => {
  currentVisaPassport = visaPassportSelect.value;
  activeFilter = "all";
  searchInput.value = "";
  localStorage.setItem("preferredVisaPassport", currentVisaPassport);
  applyLanguage();
});

productTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentProduct = button.dataset.product;
    currentView = currentProduct;
    activeFilter = "all";
    searchInput.value = "";
    localStorage.setItem("preferredProduct", currentProduct);
    localStorage.setItem("preferredView", currentView);
    applyLanguage();
  });
});

detailBackButton.addEventListener("click", () => {
  currentView = currentProduct;
  currentDetailCode = "";
  localStorage.setItem("preferredView", currentView);
  applyLanguage();
  window.location.hash = currentProduct;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

brandHomeLink.addEventListener("click", (event) => {
  event.preventDefault();
  currentView = "home";
  localStorage.setItem("preferredView", currentView);
  applyLanguage();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

topTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentView = button.dataset.view;
    currentDetailCode = "";

    if (currentView !== "home") {
      currentProduct = currentView;
      activeFilter = "all";
      searchInput.value = "";
      localStorage.setItem("preferredProduct", currentProduct);
    }

    localStorage.setItem("preferredView", currentView);
    applyLanguage();
    window.location.hash = currentView === "home" ? "home" : currentView;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

languageToggle.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("is-open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) {
    return;
  }

  currentLanguage = button.dataset.language;
  localStorage.setItem("preferredLanguage", currentLanguage);
  languageMenu.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
  applyLanguage();
});

document.addEventListener("click", (event) => {
  const officialLink = event.target.closest("[data-official-source]");
  if (officialLink) {
    event.preventDefault();
    window.location.href = officialLink.dataset.officialSource;
    return;
  }

  if (!languageMenu.contains(event.target)) {
    languageMenu.classList.remove("is-open");
    languageToggle.setAttribute("aria-expanded", "false");
  }

  if (homeSearchSuggestions && homeSearchInput && !homeSearchInput.contains(event.target) && !homeSearchSuggestions.contains(event.target)) {
    hideHomeSearchSuggestions();
  }
});

homeSearchInput?.addEventListener("input", renderHomeSearchSuggestions);

homeSearchInput?.addEventListener("focus", renderHomeSearchSuggestions);

homeSearchInput?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!homeSearchSuggestions?.classList.contains("is-visible")) {
      renderHomeSearchSuggestions();
      return;
    }
    moveActiveHomeSearchOption(1);
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!homeSearchSuggestions?.classList.contains("is-visible")) {
      renderHomeSearchSuggestions();
      return;
    }
    moveActiveHomeSearchOption(-1);
    return;
  }

  if (event.key === "Escape") {
    hideHomeSearchSuggestions();
    return;
  }

  if (event.key !== "Enter") {
    return;
  }

  const activeOption = getActiveHomeSearchOption();
  const matches = getHomeSearchMatches();
  const code = activeOption?.dataset.homeSearchCode || matches[0]?.code;
  if (!code) {
    return;
  }

  event.preventDefault();
  openHomeSearchResult(code);
});

homeSearchSuggestions?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-home-search-code]");
  if (!button) {
    return;
  }

  openHomeSearchResult(button.dataset.homeSearchCode);
});

searchInput.addEventListener("input", renderCountries);

function restoreFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const match = hash.match(/^country\/([a-z]{2})/i);

  if (["home", "immigration", "visa", "passport"].includes(hash)) {
    currentView = hash;
    if (hash !== "home") {
      currentProduct = hash;
    }
    currentDetailCode = "";
    return;
  }

  if (!match) {
    return;
  }

  const type = hash.includes("type=passport")
    ? "passport"
    : hash.includes("type=visa")
      ? "visa"
      : "immigration";
  currentProduct = type;
  currentView = "detail";
  currentDetailCode = match[1].toUpperCase();
}

restoreFromHash();
applyLanguage();

window.addEventListener("hashchange", () => {
  restoreFromHash();
  applyLanguage();
});
