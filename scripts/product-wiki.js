(function () {
  const catalog = window.FLYINGRC_CATALOG;
  const langKey = "flyingrc-wiki-lang";
  const initialCategories = requestedCategories();
  const state = {
    lang: localStorage.getItem(langKey) || "en",
    category: initialCategories.length === 1 ? initialCategories[0] : "all",
    categories: initialCategories,
    query: ""
  };

  const labels = {
    en: {
      all: "All products",
      search: "Search products, specs, wiring, firmware...",
      products: "Products",
      empty: "No matching products",
      view: "Open details",
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
      contactCta: "GitHub / Contact",
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
      empty: "没有匹配的产品",
      view: "查看详情",
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
      contactCta: "GitHub / 联系",
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
      managerContact: "刘经理",
      technicalContact: "技术支持",
      emailContact: "邮箱",
      telephoneLabel: "电话",
      emailLabel: "邮箱",
      githubContactLead: "查看 FlyingRC Official 维护的公开仓库、固件配置、演示代码和产品文档。",
      openGithub: "打开 GitHub"
    }
  };

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
      ...(product.tags || []),
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

  function productCardSummary(product) {
    return text(product.cardSummary) || text(product.whatItDoes) || text(product.summary);
  }

  function requestedCategories() {
    const params = new URLSearchParams(location.search);
    const multi = params.get("categories");
    const single = params.get("category");
    const requested = multi ? multi.split(",") : single ? [single] : [];
    return requested.map((id) => id.trim()).filter((id) => id && id !== "all" && catalog.categories[id]);
  }

  function activeCategoryIds() {
    if (state.categories.length) return state.categories;
    return state.category === "all" ? [] : [state.category];
  }

  function updateCategoryUrl(category) {
    const url = new URL(window.location.href);
    url.searchParams.delete("categories");
    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.delete("category");
      url.searchParams.set("categories", category);
    }
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
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
      return categoryMatch && queryMatch;
    });

    count.textContent = `${filtered.length} ${labels[state.lang].products}`;
    grid.innerHTML = filtered.length ? filtered.map((product) => `
      <article class="wiki-product-card">
        <a class="product-media" href="product.html?p=${encodeURIComponent(product.slug)}">
          ${productImage(product)}
        </a>
        <div class="product-card-body">
          <div class="product-card-meta">${escapeHtml(text(catalog.categories[product.category]))}</div>
          <h3>${escapeHtml(text(product.title))}</h3>
          <p>${escapeHtml(productCardSummary(product))}</p>
          <div class="product-tags">${(product.tags || []).slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="text-link" href="product.html?p=${encodeURIComponent(product.slug)}">${labels[state.lang].view}</a>
        </div>
      </article>
    `).join("") : `<p class="empty-state">${labels[state.lang].empty}</p>`;
  }

  function initWiki() {
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
      updateCategoryUrl(state.category);
      renderWiki();
    });

    const search = document.querySelector("[data-product-search]");
    search.addEventListener("input", () => {
      state.query = search.value.trim();
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
          <p class="detail-kicker">${escapeHtml(text(catalog.categories[product.category]))}</p>
          <h1>${escapeHtml(text(product.title))}</h1>
          <p>${escapeHtml(productCardSummary(product))}</p>
          <div class="product-tags">${(product.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="button primary" href="https://github.com/FlyingRC-Official">${labels[state.lang].contactCta}</a>
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
