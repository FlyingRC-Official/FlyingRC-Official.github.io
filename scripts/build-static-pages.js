#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://flyingrc-official.github.io";
const STATIC_VERSION = "20260630-seo-static-v1";
const SOCIAL_IMAGE = `${SITE_URL}/assets/brand/flyingrc-social-card.jpg`;
const CONTACT = {
  email: "FlyingRC.Official@gmail.com",
  whatsapp: "https://wa.me/6591216107",
  github: "https://github.com/FlyingRC-Official",
  taobao: "https://e7wgwo2ehnynhjklw2knt535zmlw176.world.taobao.com/shop/view_shop.htm?appUid=RAzN8HAiDiXrnbmP2phqB88hKp1Wt&spm=a21n57.1.hoverItem.1"
};

const CORE_SLUGS = [
  "f4wing-mini-mk1",
  "f4wse-pro",
  "h7d-pro",
  "h7d-h743",
  "f4d-mk1",
  "h7wlite-mk1",
  "am32-4in1-75a",
  "am32-4in1-45a",
  "am32-mini-esc-40a",
  "am32-esc-75a-v25",
  "l4-can-rm3100",
  "bec-mini-dji-o4"
];

const CORE_SET = new Set(CORE_SLUGS);

const UI = {
  en: {
    home: "Home",
    products: "Products",
    downloads: "Downloads",
    projects: "Projects",
    contact: "Contact",
    store: "Taobao Store",
    choose: "Choose products",
    files: "Download files",
    support: "Technical support",
    heroTitle: "Open-firmware UAV hardware for ArduPilot, INAV, Betaflight and PX4 builders",
    heroLead: "FlyingRC flight controllers, ESCs, BEC modules, GPS, sensors, wiring diagrams, manuals, and tested firmware notes for UAV builders.",
    whyTitle: "Why FlyingRC",
    whyItems: [
      ["Open firmware ready", "ArduPilot, INAV, Betaflight, and PX4 board support plus configuration notes for builders."],
      ["Wiring-first documentation", "Pinout, dimensions, receiver, GPS, CAN, and video wiring diagrams are kept close to each product."],
      ["Revision-aware support", "Board revision, sensor changes, firmware targets, and compatibility notes are documented before flashing."],
      ["Direct technical support", "Email, WhatsApp, GitHub issues, Taobao, and distributor/OEM routes are available from the product path."]
    ],
    productIndexTitle: "FlyingRC products",
    productIndexLead: "Static index of FlyingRC hardware pages generated from the product catalog.",
    downloadsTitle: "FlyingRC downloads",
    downloadsLead: "Product-first manuals, firmware, checksums, target branches, and reference files.",
    keySpecs: "Key specs",
    bestFor: "Best used for",
    features: "Key features",
    setup: "Setup / wiring notes",
    check: "Check before use",
    downloadsForProduct: "Downloads",
    references: "Reference files",
    productCta: "Product inquiry",
    buy: "Buy on Taobao",
    email: "Email sales",
    whatsapp: "WhatsApp support",
    github: "GitHub",
    boardRevision: "Board revision",
    firmwareTarget: "Firmware target",
    checksum: "SHA256",
    compatibility: "Compatibility note",
    manual: "Manual",
    firmware: "Firmware",
    checksums: "Checksums",
    source: "Config / source",
    media: "Models / media",
    other: "Other files",
    skip: "Skip to content",
    staticNotice: "Static product page"
  },
  zh: {
    home: "首页",
    products: "产品资料",
    downloads: "下载",
    projects: "项目",
    contact: "联系",
    store: "淘宝店铺",
    choose: "产品选型",
    files: "下载资料",
    support: "技术支持",
    heroTitle: "面向 ArduPilot / INAV / Betaflight / PX4 装机用户的无人机硬件与固件资料库",
    heroLead: "FlyingRC 提供飞控、电调、BEC、GPS、传感器、接线图、说明书和经过整理的开源固件资料。",
    whyTitle: "为什么选择 FlyingRC",
    whyItems: [
      ["开源固件就绪", "面向 ArduPilot、INAV、Betaflight、PX4 用户整理板卡支持和配置说明。"],
      ["接线优先的资料", "每个产品尽量集中提供引脚、尺寸、接收机、GPS、CAN 和图传接线图。"],
      ["重视硬件版本", "硬件版本、传感器变化、固件目标和兼容说明会在刷写前明确提示。"],
      ["直接技术支持", "产品路径中保留邮箱、WhatsApp、GitHub、淘宝和代理/OEM 咨询入口。"]
    ],
    productIndexTitle: "FlyingRC 产品资料",
    productIndexLead: "基于同一份产品数据生成的 FlyingRC 硬件静态页面索引。",
    downloadsTitle: "FlyingRC 下载",
    downloadsLead: "按产品整理说明书、固件、校验值、目标分支和参考文件。",
    keySpecs: "关键参数",
    bestFor: "适合场景",
    features: "主要功能",
    setup: "设置 / 接线注意",
    check: "使用前检查",
    downloadsForProduct: "下载",
    references: "参考文件",
    productCta: "产品咨询",
    buy: "去淘宝购买",
    email: "邮件咨询",
    whatsapp: "WhatsApp 技术支持",
    github: "GitHub",
    boardRevision: "硬件版本",
    firmwareTarget: "固件目标",
    checksum: "SHA256",
    compatibility: "兼容说明",
    manual: "说明书",
    firmware: "固件",
    checksums: "校验值",
    source: "配置 / 源码",
    media: "模型 / 媒体",
    other: "其他文件",
    skip: "跳到主要内容",
    staticNotice: "静态产品页"
  }
};

function loadCatalog() {
  const code = fs.readFileSync(path.join(ROOT, "data/products.js"), "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "data/products.js" });
  return context.window.FLYINGRC_CATALOG;
}

const catalog = loadCatalog();

function writeFile(relativePath, content) {
  const fullPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
}

function html(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function attr(value) {
  return html(value);
}

function localized(value, lang) {
  if (!value) return "";
  return typeof value === "string" ? value : value[lang] || value.en || value.zh || "";
}

function localizedList(value, lang) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value[lang] || value.en || value.zh || [];
}

function productBySlug(slug) {
  return catalog.products.find((product) => product.slug === slug);
}

function staticProductHref(product, lang = "en", rootAlias = false) {
  if (!CORE_SET.has(product.slug)) return `/product.html?p=${encodeURIComponent(product.slug)}`;
  if (rootAlias) return `/products/${encodeURIComponent(product.slug)}/`;
  return `/${lang}/products/${encodeURIComponent(product.slug)}/`;
}

function absoluteUrl(relativeUrl) {
  if (/^https?:\/\//i.test(relativeUrl)) return relativeUrl;
  return `${SITE_URL}${relativeUrl.startsWith("/") ? "" : "/"}${relativeUrl}`;
}

function assetUrl(src) {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `/${src.replace(/^\//, "")}`;
}

function metaImage(product) {
  return product?.hero ? absoluteUrl(assetUrl(product.hero)) : SOCIAL_IMAGE;
}

function pageShell({ lang, title, description, canonicalPath, alternates = [], current = "", body }) {
  const labels = UI[lang];
  const canonical = absoluteUrl(canonicalPath);
  const langAttr = lang === "zh" ? "zh-Hans" : "en";
  const nav = [
    [labels.home, `/${lang}/`, "home"],
    [labels.products, `/${lang}/products/`, "products"],
    [labels.downloads, `/${lang}/downloads/`, "downloads"],
    [labels.projects, "/projects.html", "projects"],
    [labels.contact, "/contact.html", "contact"]
  ].map(([label, href, key]) => `<a href="${attr(href)}"${current === key ? ' aria-current="page"' : ""}>${html(label)}</a>`).join("");
  const altLinks = alternates.map((item) => `<link rel="alternate" hreflang="${attr(item.lang)}" href="${attr(absoluteUrl(item.href))}">`).join("\n    ");

  return `<!doctype html>
<html lang="${langAttr}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${attr(description)}">
    <link rel="canonical" href="${attr(canonical)}">
    ${altLinks}
    <link rel="icon" href="/assets/brand/flyingrc-logo.jpg" type="image/jpeg">
    <meta property="og:title" content="${attr(title)}">
    <meta property="og:description" content="${attr(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${attr(canonical)}">
    <meta property="og:image" content="${attr(SOCIAL_IMAGE)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${attr(title)}">
    <meta name="twitter:description" content="${attr(description)}">
    <meta name="twitter:image" content="${attr(SOCIAL_IMAGE)}">
    <title>${html(title)}</title>
    <link rel="stylesheet" href="/styles.css?v=${STATIC_VERSION}">
  </head>
  <body>
    <a class="skip-link" href="#main">${html(labels.skip)}</a>
    <header class="site-header">
      <a class="brand" href="/${lang}/" aria-label="FlyingRC Official home">
        <img src="/assets/brand/flyingrc-logo.jpg" alt="" class="brand-mark">
        <span>FlyingRC Official</span>
      </a>
      <nav aria-label="Primary navigation">${nav}</nav>
      <div class="language-switch compact" aria-label="Language selector">
        <a class="${lang === "en" ? "active" : ""}" href="${attr(alternateForLang(alternates, "en") || "/en/")}">EN</a>
        <a class="${lang === "zh" ? "active" : ""}" href="${attr(alternateForLang(alternates, "zh-Hans") || "/zh/")}">中文</a>
      </div>
    </header>
    <main id="main">${body}</main>
    <footer class="site-footer">
      <span>FlyingRC Official</span>
      <a href="${attr(CONTACT.taobao)}" target="_blank" rel="noopener">${html(labels.store)}</a>
      <a href="https://github.com/FlyingRC-Official">github.com/FlyingRC-Official</a>
    </footer>
  </body>
</html>
`;
}

function alternateForLang(alternates, lang) {
  return alternates.find((item) => item.lang === lang)?.href;
}

function productShell({ product, lang, canonicalPath, alternates, rootAlias = false }) {
  const labels = UI[lang];
  const title = `${localized(product.title, lang)} | FlyingRC Official`;
  const description = localized(product.cardSummary, lang) || localized(product.whatItDoes, lang) || localized(product.summary, lang);
  const canonical = absoluteUrl(canonicalPath);
  const image = metaImage(product);
  const downloads = product.downloads || [];
  const downloadItems = downloads.filter(isDownloadArtifact);
  const referenceItems = downloads.filter((item) => !isDownloadArtifact(item));
  const specs = localizedList(product.specs, lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: localized(product.title, lang),
    description,
    image,
    url: canonical,
    brand: { "@type": "Brand", name: "FlyingRC Official" },
    category: localized(catalog.categories[product.category], lang),
    additionalProperty: [
      ...(product.tags || []).map((tag) => ({ "@type": "PropertyValue", name: "Tag", value: tag })),
      ...downloads.filter((item) => item.firmwareTarget).map((item) => ({
        "@type": "PropertyValue",
        name: "Firmware target",
        value: localized(item.firmwareTarget, lang)
      }))
    ]
  };
  const body = `
      <section class="product-detail-hero">
        <div>
          <a class="back-link" href="${rootAlias ? "/wiki.html" : `/${lang}/products/`}">${html(labels.products)}</a>
          <p class="detail-kicker"><span>${html(localized(catalog.categories[product.category], lang))}</span>${product.status ? `<span class="product-status product-status-${html(product.status)}">${html(product.status)}</span>` : ""}</p>
          <h1>${html(localized(product.title, lang))}</h1>
          <p>${html(description)}</p>
          ${labelChips(product, lang)}
          <div class="detail-actions">
            <a class="button primary" href="${attr(CONTACT.taobao)}" target="_blank" rel="noopener">${html(labels.buy)}</a>
            <a class="button secondary" href="${attr(productEmailHref(product))}">${html(labels.email)}</a>
            <a class="button secondary" href="${attr(CONTACT.whatsapp)}" target="_blank" rel="noopener">${html(labels.whatsapp)}</a>
            <a class="button secondary" href="${attr(CONTACT.github)}" target="_blank" rel="noopener">${html(labels.github)}</a>
          </div>
        </div>
        <div class="detail-hero-image">${product.hero ? `<img src="${attr(assetUrl(product.hero))}" alt="${attr(localized(product.title, lang))}" loading="eager" decoding="async">` : ""}</div>
      </section>
      ${practicalSections(product, lang)}
      ${specs.length ? `<section class="detail-section"><h2>${html(labels.keySpecs)}</h2><ul class="spec-list">${specs.map((item) => `<li>${html(item)}</li>`).join("")}</ul></section>` : ""}
      ${downloadItems.length ? fileSection(labels.downloadsForProduct, downloadItems, lang) : ""}
      ${referenceItems.length ? fileSection(labels.references, referenceItems, lang) : ""}
      ${imageSection(product, lang)}
      <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;

  return productPageShell({
    lang,
    title,
    description,
    canonicalPath,
    alternates,
    body,
    image,
    ogType: "product"
  });
}

function productPageShell({ lang, title, description, canonicalPath, alternates, body, image, ogType }) {
  const labels = UI[lang];
  const canonical = absoluteUrl(canonicalPath);
  const langAttr = lang === "zh" ? "zh-Hans" : "en";
  const nav = [
    [labels.home, `/${lang}/`, "home"],
    [labels.products, `/${lang}/products/`, "products"],
    [labels.downloads, `/${lang}/downloads/`, "downloads"],
    [labels.projects, "/projects.html", "projects"],
    [labels.contact, "/contact.html", "contact"]
  ].map(([label, href, key]) => `<a href="${attr(href)}"${key === "products" ? ' aria-current="page"' : ""}>${html(label)}</a>`).join("");
  const altLinks = alternates.map((item) => `<link rel="alternate" hreflang="${attr(item.lang)}" href="${attr(absoluteUrl(item.href))}">`).join("\n    ");

  return `<!doctype html>
<html lang="${langAttr}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${attr(description)}">
    <link rel="canonical" href="${attr(canonical)}">
    ${altLinks}
    <link rel="icon" href="/assets/brand/flyingrc-logo.jpg" type="image/jpeg">
    <meta property="og:title" content="${attr(title)}">
    <meta property="og:description" content="${attr(description)}">
    <meta property="og:type" content="${attr(ogType)}">
    <meta property="og:url" content="${attr(canonical)}">
    <meta property="og:image" content="${attr(image)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${attr(title)}">
    <meta name="twitter:description" content="${attr(description)}">
    <meta name="twitter:image" content="${attr(image)}">
    <title>${html(title)}</title>
    <link rel="stylesheet" href="/styles.css?v=${STATIC_VERSION}">
  </head>
  <body>
    <a class="skip-link" href="#main">${html(labels.skip)}</a>
    <header class="site-header">
      <a class="brand" href="/${lang}/" aria-label="FlyingRC Official home">
        <img src="/assets/brand/flyingrc-logo.jpg" alt="" class="brand-mark">
        <span>FlyingRC Official</span>
      </a>
      <nav aria-label="Primary navigation">${nav}</nav>
      <div class="language-switch compact" aria-label="Language selector">
        <a class="${lang === "en" ? "active" : ""}" href="${attr(alternateForLang(alternates, "en") || "/en/")}">EN</a>
        <a class="${lang === "zh" ? "active" : ""}" href="${attr(alternateForLang(alternates, "zh-Hans") || "/zh/")}">中文</a>
      </div>
    </header>
    <main id="main">${body}</main>
    <footer class="site-footer">
      <span>FlyingRC Official</span>
      <a href="${attr(CONTACT.taobao)}" target="_blank" rel="noopener">${html(labels.store)}</a>
      <a href="https://github.com/FlyingRC-Official">github.com/FlyingRC-Official</a>
    </footer>
  </body>
</html>
`;
}

function labelChips(product, lang) {
  const chips = (product.labels || []).slice(0, 8);
  if (!chips.length) return "";
  return `<div class="product-tags product-labels">${chips.map((item) => `<span class="product-label product-label-${html(item.group || "feature")}">${html(localized(item, lang))}</span>`).join("")}</div>`;
}

function practicalSections(product, lang) {
  const labels = UI[lang];
  const panels = [
    [labels.bestFor, localizedList(product.bestFor, lang)],
    [labels.features, localizedList(product.keyFeatures, lang)],
    [labels.setup, localizedList(product.setupNotes, lang)],
    [labels.check, localizedList(product.watchOut, lang)]
  ].filter(([, items]) => items.length);
  if (!panels.length) return "";
  return `<section class="detail-practical-grid">${panels.map(([title, items]) => `
    <section class="detail-info-panel">
      <h2>${html(title)}</h2>
      <ul class="detail-rich-list">${items.map((item) => `<li>${html(item)}</li>`).join("")}</ul>
    </section>
  `).join("")}</section>`;
}

function fileSection(title, items, lang) {
  return `<section class="detail-section">
    <h2>${html(title)}</h2>
    <div class="download-list">${items.map((item) => downloadLink(item, lang)).join("")}</div>
  </section>`;
}

function imageSection(product, lang) {
  const items = (product.images || []).filter((item) => ["diagram", "spec"].includes(item.type)).slice(0, 4);
  if (!items.length) return "";
  const title = lang === "zh" ? "接线 / 尺寸 / 参数图" : "Wiring / dimensions / specs";
  return `<section class="detail-section"><h2>${html(title)}</h2><div class="detail-media-grid">${items.map((item) => `
    <figure>
      <a href="${attr(assetUrl(item.src))}" target="_blank" rel="noopener">
        <img src="${attr(assetUrl(item.src))}" alt="${attr(localized(item.label, lang))}" loading="lazy" decoding="async">
      </a>
      <figcaption>${html(localized(item.label, lang))}</figcaption>
    </figure>`).join("")}</div></section>`;
}

function isDownloadArtifact(item) {
  const value = `${item.href || ""} ${localized(item.label, "en")} ${localized(item.label, "zh")}`.toLowerCase();
  return /\.(docx?|pdf|hex|zip|apj|bin)$/i.test(item.href || "") || /sha256|checksum|校验/.test(value);
}

function downloadKind(item) {
  const href = item.href || "";
  const label = localized(item.label, "en");
  const value = `${href} ${label}`.toLowerCase();
  if (/sha256|sha256sums|checksum|校验/.test(value)) return "checksums";
  if (/\.(docx?|pdf)(?:$|[?#])/i.test(href)) return "manual";
  if (/\.(hex|bin|apj)(?:$|[?#])/i.test(href)) return "firmware";
  if (/\.zip(?:$|[?#])/i.test(href) && /(firmware|px4|ardupilot|arduplane|arducopter|ardurover|betaflight|inav)/i.test(value)) return "firmware";
  if (/^https?:\/\/github\.com\//i.test(href)) return "source";
  if (/\.(step|stp|mp4|mov|webm)(?:$|[?#])/i.test(href)) return "media";
  return "other";
}

function downloadLink(item, lang) {
  const labels = UI[lang];
  const meta = [
    [labels.boardRevision, localized(item.boardRevision, lang)],
    [labels.firmwareTarget, localized(item.firmwareTarget, lang)],
    [labels.checksum, item.checksum],
    [labels.compatibility, localized(item.compatibilityNote, lang)]
  ].filter(([, value]) => value);
  const href = /^https?:\/\//i.test(item.href) ? item.href : assetUrl(item.href);
  return `<a class="${meta.length ? "download-link-with-meta" : ""}" href="${attr(href)}" target="_blank" rel="noopener">
    <span>${html(localized(item.label, lang))}</span>
    ${meta.length ? `<dl class="download-file-meta">${meta.map(([label, value]) => `<div><dt>${html(label)}</dt><dd>${html(value)}</dd></div>`).join("")}</dl>` : ""}
  </a>`;
}

function productEmailHref(product) {
  const productName = localized(product.title, "en");
  const subjectName = /^FlyingRC\b/i.test(productName) ? productName : `FlyingRC ${productName}`;
  const subject = `${subjectName} stock / price inquiry`;
  const body = [
    "Hello FlyingRC,",
    "",
    `I would like to ask about ${productName}.`,
    `Product page: ${absoluteUrl(staticProductHref(product, "en", true))}`,
    "Quantity:",
    "Country / region:",
    "Firmware ecosystem: ArduPilot / INAV / Betaflight / PX4 / other",
    "Board revision if known:",
    "",
    "My question:"
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function homePage(lang) {
  const labels = UI[lang];
  const alternates = [
    { lang: "en", href: "/en/" },
    { lang: "zh-Hans", href: "/zh/" },
    { lang: "x-default", href: "/" }
  ];
  const body = `
    <section class="hero">
      <div class="hero-mark" aria-label="FlyingRC Official">
        <img src="/assets/brand/flyingrc-logo.jpg" alt="">
      </div>
      <h1>${html(labels.heroTitle)}</h1>
      <p>${html(labels.heroLead)}</p>
      <div class="hero-links">
        <a href="/${lang}/products/">${html(labels.choose)}</a>
        <a href="/${lang}/downloads/">${html(labels.files)}</a>
        <a href="/contact.html">${html(labels.support)}</a>
      </div>
      <div class="hero-secondary-links" aria-label="Purchase and repository links">
        <a href="${attr(CONTACT.taobao)}" target="_blank" rel="noopener">${html(labels.buy)}</a>
        <a href="${attr(CONTACT.github)}">GitHub</a>
      </div>
    </section>
    <section class="home-strip why-band">
      <div class="section-heading">
        <p class="status">FlyingRC Official</p>
        <h2>${html(labels.whyTitle)}</h2>
      </div>
      <div class="why-grid">${labels.whyItems.map(([title, text]) => `<article><h3>${html(title)}</h3><p>${html(text)}</p></article>`).join("")}</div>
    </section>
  `;
  return pageShell({
    lang,
    title: lang === "zh" ? "FlyingRC 中文官网 | 开源固件无人机硬件资料库" : "FlyingRC Official | Open-firmware UAV hardware",
    description: labels.heroLead,
    canonicalPath: `/${lang}/`,
    alternates,
    current: "home",
    body
  });
}

function productsIndexPage(lang) {
  const labels = UI[lang];
  const alternates = [
    { lang: "en", href: "/en/products/" },
    { lang: "zh-Hans", href: "/zh/products/" },
    { lang: "x-default", href: "/wiki.html" }
  ];
  const products = catalog.products;
  const body = `
    <section class="wiki-hero">
      <div>
        <p class="status">FlyingRC Official</p>
        <h1>${html(labels.productIndexTitle)}</h1>
        <p class="lead">${html(labels.productIndexLead)}</p>
      </div>
    </section>
    <section class="wiki-grid-section">
      <div class="wiki-product-grid">${products.map((product) => productCard(product, lang)).join("")}</div>
    </section>
  `;
  return pageShell({
    lang,
    title: `${labels.productIndexTitle} | FlyingRC Official`,
    description: labels.productIndexLead,
    canonicalPath: `/${lang}/products/`,
    alternates,
    current: "products",
    body
  });
}

function productCard(product, lang) {
  const description = localized(product.cardSummary, lang) || localized(product.summary, lang);
  const href = staticProductHref(product, lang);
  return `<article class="wiki-product-card">
    <a class="product-media" href="${attr(href)}">${product.hero ? `<img src="${attr(assetUrl(product.hero))}" alt="${attr(localized(product.title, lang))}" loading="lazy" decoding="async">` : ""}</a>
    <div class="product-card-body">
      <div class="product-card-meta"><span>${html(localized(catalog.categories[product.category], lang))}</span></div>
      <h3>${html(localized(product.title, lang))}</h3>
      <p>${html(description)}</p>
      ${labelChips(product, lang)}
      <div class="card-actions">
        <a class="text-link" href="${attr(href)}">${html(UI[lang].products)}</a>
        <a class="inquiry-link" href="${attr(productEmailHref(product))}">${html(UI[lang].productCta)}</a>
      </div>
    </div>
  </article>`;
}

function downloadsIndexPage(lang) {
  const labels = UI[lang];
  const alternates = [
    { lang: "en", href: "/en/downloads/" },
    { lang: "zh-Hans", href: "/zh/downloads/" },
    { lang: "x-default", href: "/downloads.html" }
  ];
  const products = catalog.products.filter((product) => product.downloads?.length);
  const body = `
    <section class="wiki-hero downloads-hero">
      <div>
        <p class="status">FlyingRC Official</p>
        <h1>${html(labels.downloadsTitle)}</h1>
        <p class="lead">${html(labels.downloadsLead)}</p>
      </div>
    </section>
    <section class="downloads-section">
      <div class="download-accordion">${products.map((product) => staticDownloadProduct(product, lang)).join("")}</div>
    </section>
  `;
  return pageShell({
    lang,
    title: `${labels.downloadsTitle} | FlyingRC Official`,
    description: labels.downloadsLead,
    canonicalPath: `/${lang}/downloads/`,
    alternates,
    current: "downloads",
    body
  });
}

function staticDownloadProduct(product, lang) {
  const labels = UI[lang];
  const groups = groupDownloads(product.downloads || []);
  return `<details class="download-product">
    <summary>
      <span class="download-product-copy">
        <span class="download-product-meta"><span>${html(localized(catalog.categories[product.category], lang))}</span></span>
        <strong>${html(localized(product.title, lang))}</strong>
      </span>
      <span class="download-product-badges">${groups.map((group) => `<span>${html(labels[group.id])} ${group.items.length}</span>`).join("")}</span>
      <svg class="download-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </summary>
    <div class="download-product-body">
      ${groups.some((group) => group.id === "firmware") ? `<p class="download-safety-note">${html(lang === "zh" ? "刷写固件前，请核对硬件版本、目标名称和产品页说明。" : "Before flashing firmware, verify the board revision, target name, and product-page notes.")}</p>` : ""}
      <div class="download-file-groups">${groups.map((group) => `<section class="download-file-group"><h3>${html(labels[group.id])}</h3><div class="download-file-list">${group.items.map((item) => downloadLink(item, lang)).join("")}</div></section>`).join("")}</div>
      <a class="text-link download-product-page-link" href="${attr(staticProductHref(product, lang))}">${html(labels.products)}</a>
    </div>
  </details>`;
}

function groupDownloads(downloads) {
  const groups = ["manual", "firmware", "checksums", "source", "media", "other"].map((id) => ({ id, items: [] }));
  const byId = Object.fromEntries(groups.map((group) => [group.id, group]));
  downloads.forEach((item) => byId[downloadKind(item)].items.push(item));
  return groups.filter((group) => group.items.length);
}

function generateProductPages() {
  CORE_SLUGS.forEach((slug) => {
    const product = productBySlug(slug);
    if (!product) return;
    const alternates = [
      { lang: "en", href: `/en/products/${slug}/` },
      { lang: "zh-Hans", href: `/zh/products/${slug}/` },
      { lang: "x-default", href: `/products/${slug}/` }
    ];
    writeFile(`products/${slug}/index.html`, productShell({
      product,
      lang: "en",
      canonicalPath: `/products/${slug}/`,
      alternates,
      rootAlias: true
    }));
    writeFile(`en/products/${slug}/index.html`, productShell({
      product,
      lang: "en",
      canonicalPath: `/en/products/${slug}/`,
      alternates
    }));
    writeFile(`zh/products/${slug}/index.html`, productShell({
      product,
      lang: "zh",
      canonicalPath: `/zh/products/${slug}/`,
      alternates
    }));
  });
}

function generateSitemap() {
  const urls = [
    "/",
    "/wiki.html",
    "/downloads.html",
    "/projects.html",
    "/contact.html",
    "/support.html",
    "/en/",
    "/zh/",
    "/en/products/",
    "/zh/products/",
    "/en/downloads/",
    "/zh/downloads/",
    ...CORE_SLUGS.flatMap((slug) => [`/products/${slug}/`, `/en/products/${slug}/`, `/zh/products/${slug}/`])
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${html(absoluteUrl(url))}</loc><lastmod>2026-06-30</lastmod></url>`).join("\n")}
</urlset>
`;
  writeFile("sitemap.xml", body);
}

function main() {
  writeFile("en/index.html", homePage("en"));
  writeFile("zh/index.html", homePage("zh"));
  writeFile("en/products/index.html", productsIndexPage("en"));
  writeFile("zh/products/index.html", productsIndexPage("zh"));
  writeFile("en/downloads/index.html", downloadsIndexPage("en"));
  writeFile("zh/downloads/index.html", downloadsIndexPage("zh"));
  generateProductPages();
  generateSitemap();
  console.log(`Generated localized entry pages and ${CORE_SLUGS.length} core product pages.`);
}

main();
