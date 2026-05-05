(function () {
  const catalog = window.FLYINGRC_CATALOG;
  const langKey = "flyingrc-wiki-lang";
  const state = {
    lang: localStorage.getItem(langKey) || "en",
    category: "all",
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
      diagrams: "Wiring / Pinout / Dimension",
      gallery: "Gallery",
      downloads: "Downloads / Reference Files",
      related: "Related Products",
      back: "Back to products",
      contact: "Contact",
      contactCta: "GitHub / Contact",
      source: "Curated from FlyingRC listing materials",
      home: "Home",
      hardware: "Hardware",
      wikiLead: "Search flight controllers, ESCs, BEC modules, sensors, GPS, receivers, adapters, and stack kits with bilingual product notes and original wiring/spec images.",
      wikiTitle: "FlyingRC Product Wiki"
    },
    zh: {
      all: "全部产品",
      search: "搜索产品、参数、接线、固件...",
      products: "产品资料",
      empty: "没有匹配的产品",
      view: "查看详情",
      keySpecs: "关键参数",
      diagrams: "接线 / 引脚 / 尺寸",
      gallery: "图片资料",
      downloads: "下载 / 参考文件",
      related: "相关产品",
      back: "返回产品列表",
      contact: "联系",
      contactCta: "GitHub / 联系",
      source: "整理自 FlyingRC 上架资料",
      home: "首页",
      hardware: "硬件",
      wikiLead: "搜索飞控、电调、BEC 降压模块、传感器、GPS、接收机、扩展板和飞塔套装，查看双语产品说明和原始接线/参数图片。",
      wikiTitle: "FlyingRC 产品资料"
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
      ...(product.tags || []),
      ...(product.specs?.en || []),
      ...(product.specs?.zh || [])
    ].join(" ").toLowerCase();
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
    const filtered = catalog.products.filter((product) => {
      const categoryMatch = state.category === "all" || product.category === state.category;
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
          <p>${escapeHtml(text(product.summary))}</p>
          <div class="product-tags">${(product.tags || []).slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="text-link" href="product.html?p=${encodeURIComponent(product.slug)}">${labels[state.lang].view}</a>
        </div>
      </article>
    `).join("") : `<p class="empty-state">${labels[state.lang].empty}</p>`;
  }

  function initWiki() {
    const filters = document.querySelector("[data-category-filters]");
    filters.innerHTML = Object.entries(catalog.categories).map(([id, label]) => `
      <button class="filter-button${id === state.category ? " active" : ""}" type="button" data-category="${id}">${escapeHtml(text(label))}</button>
    `).join("");
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      document.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("active", item === button));
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

  function renderProduct() {
    const slug = new URLSearchParams(location.search).get("p") || location.hash.replace("#", "");
    const product = catalog.products.find((item) => item.slug === slug) || catalog.products[0];
    const main = document.querySelector("[data-product-detail]");
    document.title = `${text(product.title)} | FlyingRC Official`;
    const specs = product.specs?.[state.lang] || product.specs?.en || [];
    const diagramHtml = mediaSection(product, "diagram");
    const specImages = mediaSection(product, "spec");
    const galleryHtml = mediaSection(product, "gallery");
    const downloads = product.downloads || [];
    const related = catalog.products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);

    main.innerHTML = `
      <section class="product-detail-hero">
        <div>
          <a class="back-link" href="wiki.html">${labels[state.lang].back}</a>
          <p class="detail-kicker">${escapeHtml(text(catalog.categories[product.category]))}</p>
          <h1>${escapeHtml(text(product.title))}</h1>
          <p>${escapeHtml(text(product.summary))}</p>
          <div class="product-tags">${(product.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="button primary" href="https://github.com/FlyingRC-Official">${labels[state.lang].contactCta}</a>
        </div>
        <div class="detail-hero-image">${productImage(product)}</div>
      </section>
      <section class="detail-section">
        <h2>${labels[state.lang].keySpecs}</h2>
        <ul class="spec-list">${specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("")}</ul>
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
