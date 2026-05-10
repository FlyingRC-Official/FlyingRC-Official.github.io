(function () {
  const catalog = window.FLYINGRC_CATALOG;
  const langKey = "flyingrc-wiki-lang";
  const initialCategories = requestedCategories();
  const state = {
    lang: localStorage.getItem(langKey) || "en",
    category: initialCategories.length === 1 ? initialCategories[0] : "all",
    categories: initialCategories,
    labels: requestedLabelIds(),
    selector: "all",
    requirements: [],
    query: ""
  };

  const labels = {
    en: {
      all: "All products",
      search: "Search products, specs, wiring, firmware...",
      products: "Products",
      latest: "Latest",
      eol: "EOL",
      empty: "No matching products",
      view: "Open details",
      inquire: "Ask price / stock",
      fileManual: "Manual",
      fileStep: "STEP",
      fileVideo: "Video",
      fileWiring: "Wiring",
      fileImages: "Images",
      labelFilters: "Label filters",
      clearLabels: "Clear labels",
      selectorTitle: "Find the right hardware",
      selectorLead: "Choose a build style and optional requirements to narrow the catalog before comparing details.",
      selectorAll: "All builds",
      selectorFixedWing: "Fixed-wing aircraft",
      selectorFpv: "FPV / multirotor",
      selectorRobot: "Robotics / vehicle",
      selectorPower: "Power system",
      selectorNavigation: "Navigation / sensors",
      selectorNeeds: "Requirements",
      selectorClear: "Clear selector",
      reqArdupilot: "ArduPilot / CAN",
      reqBetaflight: "Betaflight / FPV",
      reqAm32: "AM32 ESC",
      reqDjiO4: "DJI O4",
      reqHighVoltage: "HV / high-voltage system",
      reqCompact: "Compact / mini",
      keySpecs: "Key Specs",
      specTable: "English specification table",
      specTableTitle: "Buyer-readable specifications",
      specTableNote: "Consolidated from the product summary, manual notes, wiring references, and listed technical highlights.",
      specItem: "Attribute",
      specDetail: "Specification",
      whatItDoes: "What this does",
      bestFor: "Best used for",
      keyFeatures: "Key features",
      technicalHighlights: "Technical highlights",
      setupNotes: "Setup / wiring notes",
      watchOut: "Check before use",
      diagrams: "Wiring / Pinout / Dimension",
      gallery: "Gallery",
      downloads: "Downloads / Reference Files",
      related: "Related Products",
      back: "Back to products",
      contact: "Contact",
      contactCta: "Email sales",
      whatsappCta: "WhatsApp support",
      githubCta: "GitHub",
      compareTitle: "Product comparison",
      compareLead: "Quick category comparisons for choosing the right FlyingRC hardware before opening the detail pages.",
      compareProduct: "Product",
      compareRole: "Best for",
      comparePower: "Power / input",
      compareFirmware: "Firmware / notes",
      compareDownloads: "Files",
      compareOpen: "Details",
      compareFlightControllers: "Flight controllers",
      compareEscStacks: "ESCs and stack kits",
      comparePowerModules: "BEC and power modules",
      compareSensorsModules: "Sensors, GPS, and modules",
      manualAvailable: "Manual",
      source: "Curated from FlyingRC manuals and listing materials",
      home: "Home",
      projects: "Projects",
      hardware: "Hardware",
      wikiLead: "Search flight controllers, ESCs, BEC modules, sensors, GPS, receivers, adapters, and stack kits with bilingual product notes and original wiring/spec images.",
      wikiTitle: "FlyingRC Product Wiki",
      homeTitle: "FlyingRC Official",
      homeLead: "Flight controllers, ESCs, BEC modules, GPS, sensors, and open firmware notes for UAV builders.",
      productWikiTitle: "Product Wiki",
      productWikiLead: "Bilingual product notes, wiring diagrams, dimensions, and setup notes for FlyingRC hardware.",
      openProductWiki: "Open Product Wiki",
      hardwareLead: "Board support and documentation for autopilot, sensor, ESC, CAN, GPS, receiver, and power modules.",
      flightControllers: "Flight controllers",
      escBecModules: "ESCs and BEC modules",
      sensorModules: "GPS, CAN, receivers, and sensors",
      projectsTitle: "Projects",
      projectsLead: "Firmware configuration, board support notes, and hardware demos for FlyingRC products.",
      repositories: "Repositories",
      repositoriesLead: "Selected public repositories for builders who want firmware targets, sensor demos, and reference code.",
      betaflightConfigDesc: "FlyingRC Betaflight target configuration and firmware notes.",
      rm3100DemoDesc: "Example code for working with RM3100 magnetometer modules over SPI.",
      microsenseDemoDesc: "MicroPython demo materials for the MicroSense C3 product family.",
      contactTitle: "Contact",
      contactLead: "Contact FlyingRC Official for product, sales, and technical support.",
      directContactTitle: "Direct contact",
      directContactLead: "For product, sales, and technical support, use the contact methods below.",
      salesLaneTitle: "Sales / Product Inquiry",
      salesLaneLead: "Product selection, pricing, availability, and order questions.",
      techLaneTitle: "Technical Support",
      techLaneLead: "Wiring, firmware setup, troubleshooting, and compatibility questions.",
      distributorLaneTitle: "Distributor / OEM",
      distributorLaneLead: "Bulk purchasing, reseller discussions, and custom hardware opportunities.",
      firmwareLaneTitle: "Firmware / GitHub",
      firmwareLaneLead: "Public repositories, firmware targets, demo code, and documentation issues.",
      startEmail: "Start by email",
      openWhatsapp: "Open WhatsApp",
      managerContact: "Manager Liu",
      technicalContact: "Technical support",
      emailContact: "Email",
      telephoneLabel: "Telephone",
      emailLabel: "Email",
      githubContactLead: "Find public repositories, firmware configuration, demo code, and product documentation maintained by FlyingRC Official.",
      openGithub: "Open GitHub"
    },
    zh: {
      all: "全部产品",
      search: "搜索产品、参数、接线、固件...",
      products: "产品资料",
      latest: "最新",
      eol: "已停产",
      empty: "没有匹配的产品",
      view: "查看详情",
      inquire: "询价 / 库存",
      fileManual: "说明书",
      fileStep: "STEP",
      fileVideo: "视频",
      fileWiring: "接线",
      fileImages: "张图片",
      labelFilters: "标签筛选",
      clearLabels: "清空标签",
      selectorTitle: "快速选型",
      selectorLead: "先选择装机场景，再按需求缩小产品范围，然后再进入详情页对比参数。",
      selectorAll: "全部场景",
      selectorFixedWing: "固定翼",
      selectorFpv: "穿越机 / 多旋翼",
      selectorRobot: "机器人 / 车辆",
      selectorPower: "电源系统",
      selectorNavigation: "导航 / 传感器",
      selectorNeeds: "需求",
      selectorClear: "清空选型",
      reqArdupilot: "ArduPilot / CAN",
      reqBetaflight: "Betaflight / FPV",
      reqAm32: "AM32 电调",
      reqDjiO4: "DJI O4",
      reqHighVoltage: "HV 高压系统",
      reqCompact: "紧凑 / mini",
      keySpecs: "关键参数",
      specTable: "结构化参数表",
      specTableTitle: "便于选型的参数说明",
      specTableNote: "根据产品简介、说明书要点、接线参考和技术参数整理，方便快速判断是否适合当前装机。",
      specItem: "项目",
      specDetail: "规格说明",
      whatItDoes: "这个产品做什么",
      bestFor: "适合场景",
      keyFeatures: "主要功能",
      technicalHighlights: "技术要点",
      setupNotes: "设置 / 接线注意",
      watchOut: "使用前检查",
      diagrams: "接线 / 引脚 / 尺寸",
      gallery: "图片资料",
      downloads: "下载 / 参考文件",
      related: "相关产品",
      back: "返回产品列表",
      contact: "联系",
      contactCta: "邮件咨询",
      whatsappCta: "WhatsApp 技术支持",
      githubCta: "GitHub",
      compareTitle: "产品对比",
      compareLead: "按类别快速对比 FlyingRC 硬件，先判断适合哪一款，再打开详情页查看接线和资料。",
      compareProduct: "产品",
      compareRole: "适合场景",
      comparePower: "供电 / 输入",
      compareFirmware: "固件 / 说明",
      compareDownloads: "资料",
      compareOpen: "详情",
      compareFlightControllers: "飞控",
      compareEscStacks: "电调和飞塔套装",
      comparePowerModules: "BEC 和电源模块",
      compareSensorsModules: "传感器、GPS 和模块",
      manualAvailable: "说明书",
      source: "整理自 FlyingRC 产品说明书和上架资料",
      home: "首页",
      projects: "项目",
      hardware: "硬件",
      wikiLead: "搜索飞控、电调、BEC 降压模块、传感器、GPS、接收机、扩展板和飞塔套装，查看双语产品说明和原始接线/参数图片。",
      wikiTitle: "FlyingRC 产品资料",
      homeTitle: "FlyingRC Official",
      homeLead: "为无人机装机用户提供飞控、电调、BEC、GPS、传感器和开源固件资料。",
      productWikiTitle: "产品资料库",
      productWikiLead: "FlyingRC 硬件的双语产品说明、接线图、尺寸图和设置注意事项。",
      openProductWiki: "打开产品资料库",
      hardwareLead: "自动驾驶飞控、传感器、电调、CAN、GPS、接收机和电源模块的板卡支持与文档。",
      flightControllers: "飞控",
      escBecModules: "电调和 BEC 模块",
      sensorModules: "GPS、CAN、接收机和传感器",
      projectsTitle: "项目",
      projectsLead: "FlyingRC 产品相关的固件配置、板卡支持说明和硬件演示仓库。",
      repositories: "仓库",
      repositoriesLead: "面向装机用户整理的公开仓库，包括固件目标、传感器演示和参考代码。",
      betaflightConfigDesc: "FlyingRC Betaflight 目标配置和固件说明。",
      rm3100DemoDesc: "RM3100 磁力计模块 SPI 使用示例代码。",
      microsenseDemoDesc: "MicroSense C3 产品系列的 MicroPython 演示资料。",
      contactTitle: "联系",
      contactLead: "联系 FlyingRC Official，获取产品、销售和技术支持。",
      directContactTitle: "直接联系方式",
      directContactLead: "产品咨询、销售沟通和技术支持可使用以下方式联系。",
      salesLaneTitle: "销售 / 产品咨询",
      salesLaneLead: "产品选型、价格、库存和订单问题。",
      techLaneTitle: "技术支持",
      techLaneLead: "接线、固件设置、故障排查和兼容性问题。",
      distributorLaneTitle: "代理 / OEM",
      distributorLaneLead: "批量采购、代理合作和定制硬件机会。",
      firmwareLaneTitle: "固件 / GitHub",
      firmwareLaneLead: "公开仓库、固件目标、演示代码和文档问题。",
      startEmail: "邮件联系",
      openWhatsapp: "打开 WhatsApp",
      managerContact: "刘经理",
      technicalContact: "技术支持",
      emailContact: "邮箱",
      telephoneLabel: "电话",
      emailLabel: "邮箱",
      githubContactLead: "查看 FlyingRC Official 维护的公开仓库、固件配置、演示代码和产品文档。",
      openGithub: "打开 GitHub"
    }
  };

  const contact = {
    email: "FlyingRC.Official@gmail.com",
    whatsapp: "https://wa.me/6591216107",
    github: "https://github.com/FlyingRC-Official",
    siteUrl: "https://flyingrc-official.github.io"
  };

  const selectorProfiles = [
    { id: "all", labelKey: "selectorAll", slugs: [] },
    { id: "fixed-wing", labelKey: "selectorFixedWing", slugs: ["f4wing-mini-mk1", "h7wlite-mk1", "f4wse-f405", "f4wse-pro", "am32-mini-esc-40a", "am32-esc-75a-v25", "am32-dual-esc-40a", "bec-5a-6s", "bec-10a-12s", "fixed-wing-kit", "rm3100-module", "h7-can-gps", "ublox-m10-gps", "digital-airspeed", "l4-can-rcgps-adapter"] },
    { id: "fpv", labelKey: "selectorFpv", slugs: ["f4d-mk1", "h7d-h743", "h7d-pro", "am32-4in1-75a", "am32-4in1-45a", "bec-mini-dji-o4", "stack-f405-45a", "stack-h743-45a", "stack-f4d-75a", "stack-h743-75a", "fpv-stack-f4d-45a", "fpv-kit", "elrs-24g-diversity", "pdb-12s-400a"] },
    { id: "robot", labelKey: "selectorRobot", slugs: ["am32-mini-esc-40a", "am32-esc-75a-v25", "am32-dual-esc-40a", "rm3100-module", "bec-5a-6s", "bec-10a-12s", "am32-configurator", "pdb-12s-400a"] },
    { id: "power", labelKey: "selectorPower", slugs: ["am32-4in1-75a", "am32-4in1-45a", "am32-mini-esc-40a", "am32-esc-75a-v25", "am32-dual-esc-40a", "bec-5a-6s", "bec-10a-12s", "bec-mini-dji-o4", "pdb-12s-400a", "stack-f405-45a", "stack-h743-45a", "stack-f4d-75a", "stack-h743-75a", "fpv-stack-f4d-45a"] },
    { id: "navigation", labelKey: "selectorNavigation", slugs: ["rm3100-module", "h7-can-gps", "ublox-m10-gps", "digital-airspeed", "l4-can-rcgps-adapter"] }
  ];

  const selectorRequirements = [
    { id: "ardupilot", labelKey: "reqArdupilot", tokens: ["ardupilot", "arduplane", "can", "ap_periph", "gps", "airspeed"] },
    { id: "betaflight", labelKey: "reqBetaflight", tokens: ["betaflight", "fpv", "dji", "vtx", "elrs", "stack"] },
    { id: "am32", labelKey: "reqAm32", tokens: ["am32", "esc"] },
    { id: "dji-o4", labelKey: "reqDjiO4", tokens: ["dji o4", "dji", "o4", "9 v", "9v"] },
    { id: "high-voltage", labelKey: "reqHighVoltage", tokens: ["7s", "8s", "12s", "60 v", "60v", "75a", "400a", "440a"] },
    { id: "compact", labelKey: "reqCompact", tokens: ["compact", "mini", "small", "micro", "2.8 g", "紧凑", "小型"] }
  ];

  const comparisonGroups = [
    {
      titleKey: "compareFlightControllers",
      categories: ["flight-controllers"],
      slugs: ["f4wing-mini-mk1", "h7wlite-mk1", "f4wse-pro", "f4d-mk1", "h7d-pro", "h7d-h743", "f4wse-f405"]
    },
    {
      titleKey: "compareEscStacks",
      categories: ["esc", "stacks", "fpv-kits", "fixed-wing-kits"],
      slugs: ["am32-4in1-45a", "am32-4in1-75a", "am32-mini-esc-40a", "am32-esc-75a-v25", "am32-dual-esc-40a", "stack-f405-45a", "stack-h743-45a", "stack-f4d-75a", "stack-h743-75a", "fpv-stack-f4d-45a", "fixed-wing-kit", "fpv-kit"]
    },
    {
      titleKey: "comparePowerModules",
      categories: ["bec", "modules"],
      slugs: ["bec-5a-6s", "bec-10a-12s", "bec-mini-dji-o4", "pdb-12s-400a"]
    },
    {
      titleKey: "compareSensorsModules",
      categories: ["sensors", "modules"],
      slugs: ["rm3100-module", "h7-can-gps", "ublox-m10-gps", "digital-airspeed", "l4-can-rcgps-adapter", "elrs-24g-diversity", "am32-configurator"]
    }
  ];

  function text(value) {
    if (!value) return "";
    return typeof value === "string" ? value : value[state.lang] || value.en || value.zh || "";
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem(langKey, lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.classList.toggle("active", button.dataset.langButton === lang);
    });
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (labels[lang][key]) node.textContent = labels[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (labels[lang][key]) node.placeholder = labels[lang][key];
    });
    document.querySelectorAll("[data-category]").forEach((button) => {
      const category = button.dataset.category;
      if (catalog.categories[category]) button.textContent = text(catalog.categories[category]);
    });
    if (document.body.dataset.page === "wiki") renderLabelFilters();
    if (document.body.dataset.page === "wiki") renderSelector();
    if (document.body.dataset.page === "wiki") renderWiki();
    if (document.body.dataset.page === "product") renderProduct();
  }

  function bindLanguage() {
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.langButton));
    });
    setLanguage(state.lang);
  }

  function searchable(product) {
    return [
      product.slug,
      product.category,
      text(product.title),
      text(product.summary),
      text(product.cardSummary),
      text(product.whatItDoes),
      product.status,
      product.status ? labels.en[product.status] : "",
      product.status ? labels.zh[product.status] : "",
      ...(product.tags || []),
      ...plainLabels(product.labels),
      ...(product.specs?.en || []),
      ...(product.specs?.zh || []),
      ...plainList(product.bestFor),
      ...plainList(product.keyFeatures),
      ...plainList(product.technicalHighlights),
      ...plainList(product.setupNotes),
      ...plainList(product.watchOut)
    ].join(" ").toLowerCase();
  }

  function productCorpus(product) {
    return [
      searchable(product),
      product.slug,
      product.category,
      ...(product.tags || []),
      ...plainLabels(product.labels),
      ...(product.specs?.en || []),
      ...(product.specs?.zh || []),
      ...plainList(product.bestFor),
      ...plainList(product.keyFeatures),
      ...plainList(product.technicalHighlights),
      ...plainList(product.setupNotes),
      ...plainList(product.watchOut)
    ].join(" ").toLowerCase();
  }

  function localizedList(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return value[state.lang] || value.en || value.zh || [];
  }

  function plainList(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [...(value.en || []), ...(value.zh || [])];
  }

  function plainLabels(value) {
    if (!value) return [];
    return value.flatMap((item) => [item.id, item.en, item.zh, item.group]).filter(Boolean);
  }

  function productLabels(product) {
    const manualLabels = product.labels || [];
    if (manualLabels.length) {
      return manualLabels
        .map((item) => labelDefinition(item))
        .filter(Boolean)
        .sort((a, b) => (a.priority || 50) - (b.priority || 50) || a.id.localeCompare(b.id));
    }
    return (product.tags || []).map((tag) => ({ en: tag, zh: tag, type: "legacy" }));
  }

  function labelDefinition(item) {
    if (!item) return null;
    const source = typeof item === "string" ? { id: item } : item;
    const definition = catalog.labelDefinitions?.[source.id] || {};
    return { ...definition, ...source, group: source.group || definition.group || "feature" };
  }

  function labelText(item) {
    return item[state.lang] || item.en || item.zh || "";
  }

  function productLabelChips(product, limit = Infinity) {
    const chips = productLabels(product).slice(0, limit);
    if (!chips.length) return "";
    return `<div class="product-tags product-labels">${chips.map((item) => `
      <span class="product-label product-label-${escapeHtml(item.group || item.type || "feature")}">${escapeHtml(labelText(item))}</span>
    `).join("")}</div>`;
  }

  function productCardSummary(product) {
    return text(product.cardSummary) || text(product.whatItDoes) || text(product.summary);
  }

  function productStatusBadge(product) {
    if (!product.status) return "";
    const label = labels[state.lang][product.status] || product.status.toUpperCase();
    return `<span class="product-status product-status-${escapeHtml(product.status)}">${escapeHtml(label)}</span>`;
  }

  function productFileBadges(product) {
    const badges = [];
    const downloads = product.downloads || [];
    const images = product.images || [];
    if (downloads.some((item) => /\.docx$/i.test(item.href))) badges.push(labels[state.lang].fileManual);
    if (downloads.some((item) => /\.(step|stp)$/i.test(item.href))) badges.push(labels[state.lang].fileStep);
    if (downloads.some((item) => /\.(mp4|mov|webm)$/i.test(item.href))) badges.push(labels[state.lang].fileVideo);
    if (images.some((item) => item.type === "diagram")) badges.push(labels[state.lang].fileWiring);
    if (images.length) badges.push(`${images.length} ${labels[state.lang].fileImages}`);
    if (!badges.length) return "";
    return `<div class="file-badges" aria-label="${labels[state.lang].downloads}">${badges.slice(0, 4).map((badge) => `<span>${escapeHtml(badge)}</span>`).join("")}</div>`;
  }

  function requestedCategories() {
    const params = new URLSearchParams(location.search);
    const multi = params.get("categories");
    const single = params.get("category");
    const requested = multi ? multi.split(",") : single ? [single] : [];
    return requested.map((id) => id.trim()).filter((id) => id && id !== "all" && catalog.categories[id]);
  }

  function requestedLabelIds() {
    const params = new URLSearchParams(location.search);
    const requested = (params.get("labels") || "").split(",");
    return uniqueList(requested.map((id) => id.trim()).filter((id) => catalog.labelDefinitions?.[id]));
  }

  function activeCategoryIds() {
    if (state.categories.length) return state.categories;
    return state.category === "all" ? [] : [state.category];
  }

  function updateFilterUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("categories");
    if (state.categories.length > 1) {
      url.searchParams.delete("category");
      url.searchParams.set("categories", state.categories.join(","));
    } else if (state.category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.delete("category");
      url.searchParams.set("categories", state.category);
    }
    if (state.labels.length) {
      url.searchParams.set("labels", state.labels.join(","));
    } else {
      url.searchParams.delete("labels");
    }
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function selectorMatches(product) {
    const profile = selectorProfiles.find((item) => item.id === state.selector) || selectorProfiles[0];
    const corpus = productCorpus(product);
    const profileSlugs = profile.slugs || [];
    const profileCategories = profile.categories || [];
    const profileTokens = profile.tokens || [];
    const profileMatch = profile.id === "all"
      || profileSlugs.includes(product.slug)
      || ((profileCategories.length || profileTokens.length)
        && (!profileCategories.length || profileCategories.includes(product.category))
        && (!profileTokens.length || profileTokens.some((token) => corpus.includes(token))));
    if (!profileMatch) return false;
    return state.requirements.every((id) => {
      const requirement = selectorRequirements.find((item) => item.id === id);
      return !requirement || requirement.tokens.some((token) => corpus.includes(token));
    });
  }

  function labelMatches(product) {
    if (!state.labels.length) return true;
    const productLabelIds = new Set(productLabels(product).map((item) => item.id).filter(Boolean));
    return state.labels.every((id) => productLabelIds.has(id));
  }

  function labelsByGroup() {
    const seen = new Set();
    const broadView = !activeCategoryIds().length
      && state.selector === "all"
      && !state.requirements.length
      && !state.query
      && !state.labels.length;
    const filterIds = broadView
      ? catalog.primaryFilterLabelIds || catalog.filterLabelIds
      : catalog.filterLabelIds;
    const visibleFilterIds = new Set(filterIds || Object.keys(catalog.labelDefinitions || {}));
    const groups = Object.fromEntries(Object.keys(catalog.labelGroups || {}).map((group) => [group, []]));
    const activeCategories = activeCategoryIds();
    const baseProducts = catalog.products.filter((product) => {
      const categoryMatch = !activeCategories.length || activeCategories.includes(product.category);
      const queryMatch = !state.query || searchable(product).includes(state.query.toLowerCase());
      return categoryMatch && queryMatch && selectorMatches(product);
    });
    baseProducts.forEach((product) => {
      productLabels(product).forEach((item) => {
        if (!item.id || seen.has(item.id)) return;
        if (!visibleFilterIds.has(item.id) && !state.labels.includes(item.id)) return;
        seen.add(item.id);
        const group = item.group || "feature";
        if (!groups[group]) groups[group] = [];
        groups[group].push(item);
      });
    });
    Object.values(groups).forEach((items) => {
      items.sort((a, b) => labelText(a).localeCompare(labelText(b), state.lang === "zh" ? "zh-Hans" : "en"));
    });
    return groups;
  }

  function renderLabelFilters() {
    const target = document.querySelector("[data-label-filters]");
    if (!target) return;
    const groups = labelsByGroup();
    const groupEntries = Object.entries(catalog.labelGroups || {}).filter(([id]) => groups[id]?.length);
    target.innerHTML = `
      <div class="label-filter-heading">
        <span>${labels[state.lang].labelFilters}</span>
        ${state.labels.length ? `<button class="label-filter-clear" type="button" data-label-clear>${labels[state.lang].clearLabels}</button>` : ""}
      </div>
      <div class="label-filter-groups">
        ${groupEntries.map(([groupId, groupLabel]) => `
          <div class="label-filter-group">
            <span class="label-filter-group-title">${escapeHtml(text(groupLabel))}</span>
            <div class="label-filter-options">
              ${groups[groupId].map((item) => `
                <button class="label-filter-button product-label-${escapeHtml(item.group)}${state.labels.includes(item.id) ? " active" : ""}" type="button" data-label-filter="${escapeHtml(item.id)}">
                  ${escapeHtml(labelText(item))}
                </button>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderSelector() {
    const target = document.querySelector("[data-selector-panel]");
    if (!target) return;
    target.innerHTML = `
      <div class="selector-copy">
        <p class="status">${labels[state.lang].selectorNeeds}</p>
        <h2>${labels[state.lang].selectorTitle}</h2>
        <p>${labels[state.lang].selectorLead}</p>
      </div>
      <div class="selector-controls">
        <div class="selector-button-row" role="group" aria-label="${labels[state.lang].selectorTitle}">
          ${selectorProfiles.map((profile) => `
            <button class="selector-button${state.selector === profile.id ? " active" : ""}" type="button" data-selector-profile="${profile.id}">
              ${labels[state.lang][profile.labelKey]}
            </button>
          `).join("")}
        </div>
        <div class="selector-button-row selector-requirements" role="group" aria-label="${labels[state.lang].selectorNeeds}">
          ${selectorRequirements.map((requirement) => `
            <button class="selector-button selector-chip${state.requirements.includes(requirement.id) ? " active" : ""}" type="button" data-selector-requirement="${requirement.id}">
              ${labels[state.lang][requirement.labelKey]}
            </button>
          `).join("")}
          <button class="selector-button selector-clear" type="button" data-selector-clear>${labels[state.lang].selectorClear}</button>
        </div>
      </div>
    `;
  }

  function bindSelector() {
    const panel = document.querySelector("[data-selector-panel]");
    if (!panel) return;
    panel.addEventListener("click", (event) => {
      const profileButton = event.target.closest("[data-selector-profile]");
      const requirementButton = event.target.closest("[data-selector-requirement]");
      if (profileButton) {
        state.selector = profileButton.dataset.selectorProfile;
        renderSelector();
        renderLabelFilters();
        renderWiki();
        return;
      }
      if (requirementButton) {
        const id = requirementButton.dataset.selectorRequirement;
        state.requirements = state.requirements.includes(id)
          ? state.requirements.filter((item) => item !== id)
          : [...state.requirements, id];
        renderSelector();
        renderLabelFilters();
        renderWiki();
        return;
      }
      if (event.target.closest("[data-selector-clear]")) {
        state.selector = "all";
        state.requirements = [];
        renderSelector();
        renderLabelFilters();
        renderWiki();
      }
    });
    renderSelector();
  }

  function bindLabelFilters() {
    const target = document.querySelector("[data-label-filters]");
    if (!target) return;
    target.addEventListener("click", (event) => {
      const clearButton = event.target.closest("[data-label-clear]");
      const filterButton = event.target.closest("[data-label-filter]");
      if (clearButton) {
        state.labels = [];
      } else if (filterButton) {
        const id = filterButton.dataset.labelFilter;
        state.labels = state.labels.includes(id)
          ? state.labels.filter((item) => item !== id)
          : [...state.labels, id];
      } else {
        return;
      }
      updateFilterUrl();
      renderLabelFilters();
      renderWiki();
    });
    renderLabelFilters();
  }

  function productImage(product) {
    if (product.hero) {
      return `<img src="${product.hero}" alt="${escapeHtml(text(product.title))}">`;
    }
    return `<div class="product-card-placeholder" aria-hidden="true">${escapeHtml(text(catalog.categories[product.category]))}</div>`;
  }

  function renderWiki() {
    const grid = document.querySelector("[data-product-grid]");
    const count = document.querySelector("[data-product-count]");
    const activeCategories = activeCategoryIds();
    const filtered = catalog.products.filter((product) => {
      const categoryMatch = !activeCategories.length || activeCategories.includes(product.category);
      const queryMatch = !state.query || searchable(product).includes(state.query.toLowerCase());
      return categoryMatch && queryMatch && selectorMatches(product) && labelMatches(product);
    });

    count.textContent = `${filtered.length} ${labels[state.lang].products}`;
    grid.innerHTML = filtered.length ? filtered.map((product) => `
      <article class="wiki-product-card">
        <a class="product-media" href="product.html?p=${encodeURIComponent(product.slug)}">
          ${productImage(product)}
        </a>
        <div class="product-card-body">
          <div class="product-card-meta">
            <span>${escapeHtml(text(catalog.categories[product.category]))}</span>
            ${productStatusBadge(product)}
          </div>
          <h3>${escapeHtml(text(product.title))}</h3>
          <p>${escapeHtml(productCardSummary(product))}</p>
          ${productLabelChips(product, 5)}
          ${productFileBadges(product)}
          <div class="card-actions">
            <a class="text-link" href="product.html?p=${encodeURIComponent(product.slug)}">${labels[state.lang].view}</a>
            <a class="inquiry-link" href="${productEmailHref(product)}">${labels[state.lang].inquire}</a>
          </div>
        </div>
      </article>
    `).join("") : `<p class="empty-state">${labels[state.lang].empty}</p>`;
    renderComparisons();
  }

  function renderComparisons() {
    const target = document.querySelector("[data-comparison-tables]");
    if (!target) return;
    target.innerHTML = `
      <div class="section-heading">
        <h2>${labels[state.lang].compareTitle}</h2>
        <p>${labels[state.lang].compareLead}</p>
      </div>
      <div class="comparison-stack">
        ${comparisonGroups.map((group) => comparisonTable(group)).join("")}
      </div>
    `;
  }

  function comparisonTable(group) {
    const products = group.slugs
      .map((slug) => catalog.products.find((product) => product.slug === slug))
      .filter(Boolean);
    return `
      <section class="comparison-table-wrap">
        <h3>${labels[state.lang][group.titleKey]}</h3>
        <div class="comparison-table-scroll">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>${labels[state.lang].compareProduct}</th>
                <th>${labels[state.lang].compareRole}</th>
                <th>${labels[state.lang].comparePower}</th>
                <th>${labels[state.lang].compareFirmware}</th>
                <th>${labels[state.lang].compareDownloads}</th>
              </tr>
            </thead>
            <tbody>
              ${products.map((product) => comparisonRow(product)).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function comparisonRow(product) {
    const specs = localizedValue(product.specs, state.lang);
    const technical = localizedValue(product.technicalHighlights, state.lang);
    const allDetails = uniqueList([...specs, ...technical, ...(product.tags || []), ...plainLabels(product.labels)]);
    const role = sentenceJoin(localizedValue(product.bestFor, state.lang), 1, state.lang)
      || localizedText(product.summary, state.lang);
    const power = matchingDetails(allDetails, /\b(input|输入|LiPo|LiHV|DC|[0-9]+S|BEC|VTX|5\s*V|9\s*V|12\s*V|电源|供电|输出)\b/i, 2, null, state.lang)
      || sentenceJoin(specs, 1, state.lang);
    const firmware = matchingDetails(allDetails, /\b(firmware|固件|Betaflight|ArduPilot|ArduPlane|INAV|AM32|ELRS|AP_Periph|target|目标|CAN|GPS)\b/i, 2, null, state.lang)
      || sentenceJoin(product.tags || [], 2, state.lang);
    const hasManual = (product.downloads || []).some((item) => /\.docx$/i.test(item.href));

    return `
      <tr>
        <th scope="row">
          <a href="product.html?p=${encodeURIComponent(product.slug)}">${escapeHtml(text(product.title))}</a>
          ${productStatusBadge(product)}
        </th>
        <td data-label="${labels[state.lang].compareRole}">${escapeHtml(role)}</td>
        <td data-label="${labels[state.lang].comparePower}">${escapeHtml(power)}</td>
        <td data-label="${labels[state.lang].compareFirmware}">${escapeHtml(firmware)}</td>
        <td data-label="${labels[state.lang].compareDownloads}">
          <div class="comparison-actions">
            ${hasManual ? `<span>${labels[state.lang].manualAvailable}</span>` : `<span class="comparison-action-placeholder" aria-hidden="true"></span>`}
            <a href="product.html?p=${encodeURIComponent(product.slug)}">${labels[state.lang].compareOpen}</a>
          </div>
        </td>
      </tr>
    `;
  }

  function initWiki() {
    bindSelector();
    bindLabelFilters();
    const filters = document.querySelector("[data-category-filters]");
    const activeCategories = activeCategoryIds();
    filters.innerHTML = Object.entries(catalog.categories).map(([id, label]) => `
      <button class="filter-button${(id === "all" && !activeCategories.length) || activeCategories.includes(id) ? " active" : ""}" type="button" data-category="${id}">${escapeHtml(text(label))}</button>
    `).join("");
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      state.categories = state.category === "all" ? [] : [state.category];
      document.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("active", item === button));
      updateFilterUrl();
      renderLabelFilters();
      renderWiki();
    });

    const search = document.querySelector("[data-product-search]");
    search.addEventListener("input", () => {
      state.query = search.value.trim();
      renderLabelFilters();
      renderWiki();
    });
    renderWiki();
  }

  function mediaSection(product, wantedType) {
    const items = (product.images || []).filter((item) => item.type === wantedType || (wantedType === "gallery" && !["spec", "diagram"].includes(item.type)));
    if (!items.length) return "";
    return `<div class="detail-media-grid">${items.map((item) => `
      <figure>
        <a href="${item.src}" target="_blank" rel="noopener">
          <img src="${item.src}" alt="${escapeHtml(text(item.label))}">
        </a>
        <figcaption>${escapeHtml(text(item.label))}</figcaption>
      </figure>
    `).join("")}</div>`;
  }

  const specRowLabels = {
    en: {
      role: "Product role",
      bestFor: "Best used for",
      productClass: "Product class",
      hardware: "Core hardware",
      firmware: "Firmware / software",
      input: "Electrical input",
      recommended: "Recommended battery",
      power: "Power outputs",
      current: "Current rating",
      size: "Size / mounting / weight",
      io: "Interfaces / I/O",
      setup: "Setup notes",
      watch: "Check before use",
      source: "Documentation basis"
    },
    zh: {
      role: "产品定位",
      bestFor: "适合场景",
      productClass: "产品类别",
      hardware: "核心硬件",
      firmware: "固件 / 软件",
      input: "电源输入",
      recommended: "推荐电池",
      power: "供电输出",
      current: "电流等级",
      size: "尺寸 / 安装 / 重量",
      io: "接口 / I/O",
      setup: "设置注意",
      watch: "使用前检查",
      source: "资料来源"
    }
  };

  function localizedValue(value, lang) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return value[lang] || value.en || value.zh || [];
  }

  function localizedText(value, lang) {
    if (!value) return "";
    return typeof value === "string" ? value : value[lang] || value.en || value.zh || "";
  }

  function sentenceJoin(items, limit = 3, lang = "en") {
    const separator = lang === "zh" ? "；" : "; ";
    return uniqueList(items)
      .filter(Boolean)
      .slice(0, limit)
      .map((item) => String(item).replace(/[.。]$/, ""))
      .join(separator);
  }

  function uniqueList(items) {
    const seen = new Set();
    return items.filter((item) => {
      const key = String(item).trim().toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function matchingDetails(items, pattern, limit = 3, excludePattern = null, lang = "en") {
    return sentenceJoin(items.filter((item) => pattern.test(item) && !(excludePattern && excludePattern.test(item))), limit, lang);
  }

  function labeledDetail(items, labelPattern) {
    const row = items.reduce((found, item) => {
      if (found) return found;
      const parsed = String(item).match(/^([^:：]+)[:：]\s*(.+)$/);
      return parsed && labelPattern.test(parsed[1].trim()) ? parsed[2] : "";
    }, "");
    return row;
  }

  function specRowsForProduct(product, specs, lang) {
    const rowLabels = specRowLabels[lang] || specRowLabels.en;
    const technical = localizedValue(product.technicalHighlights, lang);
    const features = localizedValue(product.keyFeatures, lang);
    const setup = localizedValue(product.setupNotes, lang);
    const watch = localizedValue(product.watchOut, lang);
    const allTechnical = uniqueList([...technical, ...features, ...specs]);
    const productClassSpecs = specs.filter((item) => !/\b(input|输入|LiPo|LiHV|DC|BEC|output|输出|size|尺寸|dimension|mounting|孔距|安装|weight|重量|UART|PWM|SBUS|I2C|SPI|USB|connector|接口|current|电流|continuous|持续|burst|瞬时|per channel|单路)\b/i.test(item));
    const rows = [];
    const usedLabels = new Set();

    function add(label, detail) {
      const value = String(detail || "").trim();
      const key = label.toLowerCase();
      if (!value || usedLabels.has(key)) return;
      usedLabels.add(key);
      rows.push([label, value.replace(/\.$/, ".")]);
    }

    add(rowLabels.role, localizedText(product.whatItDoes, lang) || localizedText(product.summary, lang));
    add(rowLabels.bestFor, sentenceJoin(localizedValue(product.bestFor, lang), 3, lang));
    add(rowLabels.productClass, sentenceJoin(productClassSpecs.length ? productClassSpecs : specs, 2, lang));
    add(rowLabels.hardware, matchingDetails(allTechnical, /\b(STM32|MCU|gyro|陀螺仪|barometer|气压计|MOSFET|driver|驱动|RM3100|ASIC|QF32|Infineon|MP9447|U-?Blox|主控|芯片|传感器)\b/i, 3, /\b(current sensor|external I2C current|电流计|外接 I2C 电流)\b/i, lang));
    add(rowLabels.firmware, labeledDetail(technical, /^(Firmware target|固件目标)$/i) || matchingDetails(allTechnical, /\b(firmware|固件|Betaflight|ArduPilot|ArduPlane|INAV|AM32|ELRS|AP_Periph|BF4|target|目标)\b/i, 3, /\b(UART|PWM|SBUS|I2C|SPI|USB|connector|plug-in|接口|直插)\b/i, lang));
    const inputDetail = labeledDetail(technical, /^(Input|输入)$/i)
      || matchingDetails(allTechnical, /(input|输入)/i, 2, /\b(recommended|推荐|BEC output|Power outputs|供电输出)\b/i, lang)
      || matchingDetails(allTechnical, /\b(LiPo|LiHV|DC|[0-9]+S)\b/i, 2, /\b(recommended|推荐|BEC output|Power outputs|供电输出)\b/i, lang);
    add(rowLabels.input, inputDetail);
    add(rowLabels.recommended, labeledDetail(technical, /^(Recommended|推荐)$/i));
    add(rowLabels.power, labeledDetail(allTechnical, /^(Dual BEC outputs|Power outputs|Selectable output voltage|Output|双 BEC|供电输出|可选输出电压|输出)$/i) || matchingDetails(allTechnical, /\b(BEC|5\s*V|6\.2\s*V|7\.4\s*V|9\s*V|12\s*V|VTX\/camera power|图传\/相机供电)\b/i, 3, /(recommended|推荐|voltage detection|电压检测|input range|输入范围|power input|供电为)/i, lang));
    add(rowLabels.current, matchingDetails(allTechnical, /\b(continuous current|burst current|current class|ESC class|per channel|持续电流|瞬时电流|电流级别|单路|[0-9]+\s*A\s*(single|dual|four|4-in-1|two-in-one|x\s*4|单体|二合一|四合一)?)\b/i, 3, /\b(BEC|output|输出|VTX|camera|power|供电|sensor|requirements|要求)\b/i, lang));
    add(rowLabels.size, labeledDetail(technical, /^(Size|Dimensions|尺寸)$/i) || matchingDetails(allTechnical, /\b(size|dimension|dimensions|mounting|weight|尺寸|孔距|安装|重量|mm|board size)\b/i, 3, /\b(requirements|要求|orientation|方向|connector|接口)\b/i, lang));
    add(rowLabels.io, matchingDetails(allTechnical, /\b(UART|USART|PWM|SBUS|I2C|SPI|USB|Type-C|CAN|GPS|connector|接口|引脚|DRDY|SCK|MISO|MOSI|LED|buzzer|蜂鸣器|ADC|RSSI|OSD)\b/i, 4, /\b(weight|重量|mounting hole|孔距|voltage\/current requirements|电压\/电流要求)\b/i, lang));
    add(rowLabels.setup, sentenceJoin(setup, 2, lang));
    add(rowLabels.watch, sentenceJoin(watch, 2, lang));
    add(rowLabels.source, product.manualSource || labels[lang].source);
    return rows;
  }

  function specTable(product, specs) {
    const rows = specRowsForProduct(product, specs, state.lang);
    if (!rows.length) return "";

    return `
      <div class="spec-table-wrap" aria-label="${labels[state.lang].specTable}">
        <div class="spec-table-intro">
          <h3>${labels[state.lang].specTableTitle}</h3>
          <p>${labels[state.lang].specTableNote}</p>
        </div>
        <table class="spec-table">
          <thead>
            <tr>
              <th>${labels[state.lang].specItem}</th>
              <th>${labels[state.lang].specDetail}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(([label, detail]) => `
              <tr>
                <th scope="row">${escapeHtml(label)}</th>
                <td>${escapeHtml(detail)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function textPanel(titleKey, value) {
    const content = text(value);
    if (!content) return "";
    return `
      <section class="detail-info-panel detail-info-panel-wide">
        <h2>${labels[state.lang][titleKey]}</h2>
        <p>${escapeHtml(content)}</p>
      </section>
    `;
  }

  function listPanel(titleKey, value, className = "") {
    const items = localizedList(value).filter(Boolean);
    if (!items.length) return "";
    return `
      <section class="detail-info-panel ${className}">
        <h2>${labels[state.lang][titleKey]}</h2>
        <ul class="detail-rich-list">
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  function practicalSections(product) {
    const sections = [
      textPanel("whatItDoes", product.whatItDoes || product.summary),
      listPanel("bestFor", product.bestFor),
      listPanel("keyFeatures", product.keyFeatures),
      listPanel("technicalHighlights", product.technicalHighlights),
      listPanel("setupNotes", product.setupNotes),
      listPanel("watchOut", product.watchOut, "detail-info-panel-warning")
    ].filter(Boolean);

    if (!sections.length) return "";
    return `<section class="detail-practical-grid">${sections.join("")}</section>`;
  }

  function renderProduct() {
    const slug = new URLSearchParams(location.search).get("p") || location.hash.replace("#", "");
    const product = catalog.products.find((item) => item.slug === slug) || catalog.products[0];
    const main = document.querySelector("[data-product-detail]");
    document.title = `${text(product.title)} | FlyingRC Official`;
    updateProductMeta(product);
    const specs = product.specs?.[state.lang] || product.specs?.en || [];
    const diagramHtml = mediaSection(product, "diagram");
    const specImages = state.lang === "zh" ? mediaSection(product, "spec") : "";
    const galleryHtml = mediaSection(product, "gallery");
    const downloads = product.downloads || [];
    const related = catalog.products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);

    main.innerHTML = `
      <section class="product-detail-hero">
        <div>
          <a class="back-link" href="wiki.html">${labels[state.lang].back}</a>
          <p class="detail-kicker">
            <span>${escapeHtml(text(catalog.categories[product.category]))}</span>
            ${productStatusBadge(product)}
          </p>
          <h1>${escapeHtml(text(product.title))}</h1>
          <p>${escapeHtml(productCardSummary(product))}</p>
          ${productLabelChips(product)}
          <div class="detail-actions">
            <a class="button primary" href="${productEmailHref(product)}">${labels[state.lang].contactCta}</a>
            <a class="button secondary" href="${contact.whatsapp}" target="_blank" rel="noopener">${labels[state.lang].whatsappCta}</a>
            <a class="button secondary" href="${contact.github}" target="_blank" rel="noopener">${labels[state.lang].githubCta}</a>
          </div>
        </div>
        <div class="detail-hero-image">${productImage(product)}</div>
      </section>
      ${practicalSections(product)}
      <section class="detail-section">
        <h2>${labels[state.lang].keySpecs}</h2>
        <ul class="spec-list">${specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("")}</ul>
        ${specTable(product, specs)}
        ${specImages}
      </section>
      ${diagramHtml ? `<section class="detail-section"><h2>${labels[state.lang].diagrams}</h2>${diagramHtml}</section>` : ""}
      ${galleryHtml ? `<section class="detail-section"><h2>${labels[state.lang].gallery}</h2>${galleryHtml}</section>` : ""}
      ${downloads.length ? `<section class="detail-section"><h2>${labels[state.lang].downloads}</h2><div class="download-list">${downloads.map((item) => `<a href="${item.href}" target="_blank" rel="noopener">${escapeHtml(text(item.label))}</a>`).join("")}</div></section>` : ""}
      ${related.length ? `<section class="detail-section"><h2>${labels[state.lang].related}</h2><div class="related-grid">${related.map((item) => `<a href="product.html?p=${encodeURIComponent(item.slug)}">${escapeHtml(text(item.title))}</a>`).join("")}</div></section>` : ""}
    `;
  }

  function productEmailHref(product) {
    const subject = `FlyingRC product inquiry: ${localizedText(product.title, "en")}`;
    const body = [
      `Hello FlyingRC,`,
      ``,
      `I would like to ask about ${localizedText(product.title, "en")}.`,
      `Product page: ${absoluteUrl(`product.html?p=${encodeURIComponent(product.slug)}`)}`,
      ``,
      `My question:`
    ].join("\n");
    return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function updateProductMeta(product) {
    const title = `${text(product.title)} | FlyingRC Official`;
    const description = productCardSummary(product);
    const url = absoluteUrl(`product.html?p=${encodeURIComponent(product.slug)}`);
    const image = product.hero ? absoluteUrl(product.hero) : absoluteUrl("assets/products/rm3100-module/hero.jpg");

    document.title = title;
    setMeta("description", description);
    setLink("canonical", url);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "product", "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setJsonLd(product, url, image, description);
  }

  function setJsonLd(product, url, image, description) {
    let node = document.querySelector("#product-jsonld");
    if (!node) {
      node = document.createElement("script");
      node.type = "application/ld+json";
      node.id = "product-jsonld";
      document.head.appendChild(node);
    }
    node.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: text(product.title),
      description,
      image,
      url,
      brand: {
        "@type": "Brand",
        name: "FlyingRC Official"
      },
      category: text(catalog.categories[product.category]),
      additionalProperty: (product.tags || []).slice(0, 8).map((tag) => ({
        "@type": "PropertyValue",
        name: "Tag",
        value: tag
      }))
    });
  }

  function setMeta(name, content, attribute = "name") {
    let node = document.head.querySelector(`meta[${attribute}="${name}"]`);
    if (!node) {
      node = document.createElement("meta");
      node.setAttribute(attribute, name);
      document.head.appendChild(node);
    }
    node.setAttribute("content", content);
  }

  function setLink(rel, href) {
    let node = document.head.querySelector(`link[rel="${rel}"]`);
    if (!node) {
      node = document.createElement("link");
      node.setAttribute("rel", rel);
      document.head.appendChild(node);
    }
    node.setAttribute("href", href);
  }

  function absoluteUrl(path) {
    if (/^https?:\/\//i.test(path)) return path;
    return `${contact.siteUrl}/${path.replace(/^\//, "")}`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    })[char]);
  }

  window.addEventListener("DOMContentLoaded", () => {
    bindLanguage();
    if (document.body.dataset.page === "wiki") initWiki();
    if (document.body.dataset.page === "product") renderProduct();
  });
})();
