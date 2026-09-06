#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://flyingrc-official.github.io";
const STATIC_VERSION = "20260826-download-card-layout-v1";
const SITE_LASTMOD = "2026-09-06";
const SOCIAL_IMAGE = `${SITE_URL}/assets/brand/flyingrc-social-card.jpg`;
const BRAND_LOGO = "/assets/brand/flyingrc-logo-transparent.png";
const COMPANY_MAP_URL = "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%97%B5%E8%A1%8C%E5%8C%BA%E6%B5%A6%E6%B1%9F%E9%95%87%E7%AB%B9%E5%9B%AD%E8%B7%AF559%E5%8F%B7%20%E5%BF%85%E7%BF%94%E5%BD%B1%E5%83%8F%E7%A7%91%E6%8A%80%E4%BA%A7%E4%B8%9A%E5%9B%AD%20T9%E5%8F%B7%E6%A5%BC";
const CONTACT = {
  email: "FlyingRC.Official@gmail.com",
  whatsapp: "https://wa.me/6591216107",
  github: "https://github.com/FlyingRC-Official",
  taobao: "https://e7wgwo2ehnynhjklw2knt535zmlw176.world.taobao.com/shop/view_shop.htm?appUid=RAzN8HAiDiXrnbmP2phqB88hKp1Wt&spm=a21n57.1.hoverItem.1"
};

const UI = {
  en: {
    home: "Home",
    products: "Products",
    downloads: "Downloads",
    tutorials: "Tutorials",
    projects: "Projects",
    contact: "Contact",
    store: "Taobao Store",
    choose: "Choose products",
    files: "Download files",
    support: "Technical support",
    hardware: "Hardware",
    heroTitle: "Open-firmware UAV hardware for ArduPilot, INAV, Betaflight and PX4 builders",
    heroLead: "FlyingRC flight controllers, ESCs, BEC modules, GPS, sensors, wiring diagrams, manuals, and tested firmware notes for UAV builders.",
    whyTitle: "Why FlyingRC",
    whyItems: [
      ["Open firmware ready", "ArduPilot, INAV, Betaflight, and PX4 board support plus configuration notes for builders."],
      ["Wiring-first documentation", "Pinout, dimensions, receiver, GPS, CAN, and video wiring diagrams are kept close to each product."],
      ["Revision-aware support", "Board revision, sensor changes, firmware targets, and compatibility notes are documented before flashing."],
      ["Direct technical support", "Email, WhatsApp, GitHub issues, Taobao, and distributor/OEM routes are available from the product path."]
    ],
    companyTitle: "R&D workspace",
    companyLead: "FlyingRC hardware is developed, checked, and documented from a real electronics workspace for UAV builders.",
    locationLabel: "Location",
    locationRegion: "Shanghai, Minhang District, Pujiang Town",
    locationDetail: "Zhuyuan Road No.559, Bixiang Imaging Technology Industrial Park, Building T9, Room 1002A",
    viewOnGoogleMaps: "View on Google Maps",
    companyGalleryLabel: "FlyingRC workspace and office building",
    workspaceAlt: "FlyingRC electronics workspace",
    workspaceCaption: "Electronics bench and documentation workspace",
    buildingAlt: "FlyingRC office building",
    buildingCaption: "Office building",
    productWikiTitle: "Product Wiki",
    productWikiLead: "Bilingual product notes, wiring diagrams, dimensions, and setup notes for FlyingRC hardware.",
    openProductWiki: "Open Product Wiki",
    hardwareLead: "Board support and documentation for autopilot, sensor, ESC, CAN, GPS, receiver, and power modules.",
    flightControllers: "Flight controllers",
    escBecModules: "ESCs and BEC modules",
    sensorModules: "GPS, CAN, receivers, and sensors",
    productIndexTitle: "FlyingRC products",
    productIndexLead: "Static index of FlyingRC hardware pages generated from the product catalog.",
    productCategoryFilter: "Browse by category",
    productCategoryFilterLead: "Choose a category to narrow the product list.",
    productCount: "products",
    noProductsInCategory: "No products in this category.",
    downloadsTitle: "FlyingRC downloads",
    downloadsLead: "Product-first manuals, firmware, checksums, target branches, and reference files.",
    tutorialsTitle: "FlyingRC tutorials",
    tutorialsLead: "Step-by-step setup, flashing, and recovery workflows for FlyingRC hardware users.",
    tutorialUpdated: "Updated",
    tutorialRequirements: "Before you start",
    tutorialSafety: "Safety checks",
    tutorialSteps: "Steps",
    tutorialTroubleshooting: "Troubleshooting",
    tutorialLinks: "Related links",
    tutorialOpen: "Open tutorial",
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
    latestStable: "Latest stable",
    archive: "Past / unstable releases",
    archived: "Archived",
    stable: "Stable",
    unstable: "Unstable",
    releaseNote: "Release note",
    familyArduPilot: "ArduPilot",
    familyBetaflight: "Betaflight",
    familyInav: "INAV / INAVFlight",
    familyPx4: "PX4",
    familyAm32: "AM32",
    familyOther: "Other firmware",
    currentProduct: "Current product file",
    custom: "Custom build",
    manual: "Manual",
    firmware: "Firmware",
    checksums: "Checksums",
    source: "Config / source",
    media: "Models / media",
    other: "Other files",
    skip: "Skip to content",
    staticNotice: "Static product page",
    statusLatest: "LATEST",
    statusEol: "EOL"
  },
  zh: {
    home: "首页",
    products: "产品资料",
    downloads: "下载",
    tutorials: "教程",
    projects: "项目",
    contact: "联系",
    store: "淘宝店铺",
    choose: "产品选型",
    files: "下载资料",
    support: "技术支持",
    hardware: "硬件",
    heroTitle: "面向 ArduPilot / INAV / Betaflight / PX4 装机用户的无人机硬件与固件资料库",
    heroLead: "FlyingRC 提供飞控、电调、BEC、GPS、传感器、接线图、说明书和经过整理的开源固件资料。",
    whyTitle: "为什么选择 FlyingRC",
    whyItems: [
      ["开源固件就绪", "面向 ArduPilot、INAV、Betaflight、PX4 用户整理板卡支持和配置说明。"],
      ["接线优先的资料", "每个产品尽量集中提供引脚、尺寸、接收机、GPS、CAN 和图传接线图。"],
      ["重视硬件版本", "硬件版本、传感器变化、固件目标和兼容说明会在刷写前明确提示。"],
      ["直接技术支持", "产品路径中保留邮箱、WhatsApp、GitHub、淘宝和代理/OEM 咨询入口。"]
    ],
    companyTitle: "研发工作空间",
    companyLead: "FlyingRC 硬件在真实电子研发工位中完成开发、检查和资料整理，面向无人机装机用户持续完善。",
    locationLabel: "所在地区",
    locationRegion: "上海上海市闵行区浦江镇",
    locationDetail: "竹园路559号，必翔影像科技产业园T9号楼1002A",
    viewOnGoogleMaps: "在 Google 地图中查看",
    companyGalleryLabel: "FlyingRC 研发工位和办公楼",
    workspaceAlt: "FlyingRC 电子研发工位",
    workspaceCaption: "电子研发工位和资料整理工作区",
    buildingAlt: "FlyingRC 办公楼",
    buildingCaption: "办公楼",
    productWikiTitle: "产品资料库",
    productWikiLead: "FlyingRC 硬件的双语产品说明、接线图、尺寸图和设置注意事项。",
    openProductWiki: "打开产品资料库",
    hardwareLead: "自动驾驶飞控、传感器、电调、CAN、GPS、接收机和电源模块的板卡支持与文档。",
    flightControllers: "飞控",
    escBecModules: "电调和 BEC 模块",
    sensorModules: "GPS、CAN、接收机和传感器",
    productIndexTitle: "FlyingRC 产品资料",
    productIndexLead: "基于同一份产品数据生成的 FlyingRC 硬件静态页面索引。",
    productCategoryFilter: "按类目浏览",
    productCategoryFilterLead: "选择一个类目，快速筛选产品资料。",
    productCount: "个产品",
    noProductsInCategory: "该类目暂时没有产品。",
    downloadsTitle: "FlyingRC 下载",
    downloadsLead: "按产品整理说明书、固件、校验值、目标分支和参考文件。",
    tutorialsTitle: "FlyingRC 教程",
    tutorialsLead: "面向 FlyingRC 硬件用户的设置、刷写和恢复流程教程。",
    tutorialUpdated: "更新",
    tutorialRequirements: "开始前准备",
    tutorialSafety: "安全检查",
    tutorialSteps: "操作步骤",
    tutorialTroubleshooting: "故障排查",
    tutorialLinks: "相关链接",
    tutorialOpen: "打开教程",
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
    latestStable: "最新稳定版",
    archive: "历史 / 非稳定版本",
    archived: "历史版本",
    stable: "稳定版",
    unstable: "非稳定版",
    releaseNote: "版本说明",
    familyArduPilot: "ArduPilot",
    familyBetaflight: "Betaflight",
    familyInav: "INAV / INAVFlight",
    familyPx4: "PX4",
    familyAm32: "AM32",
    familyOther: "其他固件",
    currentProduct: "当前产品文件",
    custom: "定制构建",
    manual: "说明书",
    firmware: "固件",
    checksums: "校验值",
    source: "配置 / 源码",
    media: "模型 / 媒体",
    other: "其他文件",
    skip: "跳到主要内容",
    staticNotice: "静态产品页",
    statusLatest: "最新",
    statusEol: "停产"
  }
};

function loadCatalog() {
  const code = fs.readFileSync(path.join(ROOT, "data/products.js"), "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "data/products.js" });
  return context.window.FLYINGRC_CATALOG;
}

function loadTutorials() {
  const code = fs.readFileSync(path.join(ROOT, "data/tutorials.js"), "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "data/tutorials.js" });
  return context.window.FLYINGRC_TUTORIALS;
}

const catalog = loadCatalog();
const tutorialCatalog = loadTutorials();

function writeFile(relativePath, content) {
  const fullPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.replace(/[ \t]+$/gm, ""), "utf8");
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

function tutorialBySlug(slug) {
  return tutorialCatalog.tutorials.find((tutorial) => tutorial.slug === slug);
}

function staticProductHref(product, lang = "en") {
  return `/${lang}/products/${encodeURIComponent(product.slug)}/`;
}

function staticTutorialHref(tutorial, lang = "en") {
  return `/${lang}/tutorials/${encodeURIComponent(tutorial.slug)}/`;
}

function sharedPageHref(page, lang) {
  return `/${page}.html?lang=${encodeURIComponent(lang)}`;
}

function productStatusBadge(product, lang) {
  if (!product.status) return "";
  const label = product.status === "latest"
    ? UI[lang].statusLatest
    : product.status === "eol"
      ? UI[lang].statusEol
      : product.status.toUpperCase();
  return `<span class="product-status product-status-${attr(product.status)}">${html(label)}</span>`;
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

function pageShell({ lang, title, description, canonicalPath, alternates = [], current = "", body, scripts = [], styleVersion = STATIC_VERSION }) {
  const labels = UI[lang];
  const canonical = absoluteUrl(canonicalPath);
  const langAttr = lang === "zh" ? "zh-Hans" : "en";
  const nav = [
    [labels.home, `/${lang}/`, "home"],
    [labels.products, `/${lang}/products/`, "products"],
    [labels.downloads, `/${lang}/downloads/`, "downloads"],
    [labels.tutorials, `/${lang}/tutorials/`, "tutorials"],
    [labels.projects, sharedPageHref("projects", lang), "projects"],
    [labels.contact, sharedPageHref("contact", lang), "contact"]
  ].map(([label, href, key]) => `<a href="${attr(href)}"${current === key ? ' aria-current="page"' : ""}>${html(label)}</a>`).join("");
  const altLinks = alternates.map((item) => `<link rel="alternate" hreflang="${attr(item.lang)}" href="${attr(absoluteUrl(item.href))}">`).join("\n    ");
  const scriptTags = scripts.length ? `\n    ${scripts.map((src) => `<script src="${attr(src)}" defer></script>`).join("\n    ")}` : "";

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
    <link rel="stylesheet" href="/styles.css?v=${attr(styleVersion)}">
  </head>
  <body>
    <a class="skip-link" href="#main">${html(labels.skip)}</a>
    <header class="site-header">
      <a class="brand" href="/${lang}/" aria-label="FlyingRC Official home">
        <img src="${BRAND_LOGO}" alt="" class="brand-mark">
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
    </footer>${scriptTags}
  </body>
</html>
`;
}

function alternateForLang(alternates, lang) {
  return alternates.find((item) => item.lang === lang)?.href;
}

function productShell({ product, lang, canonicalPath, alternates }) {
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
          <a class="back-link" href="/${lang}/products/">${html(labels.products)}</a>
          <p class="detail-kicker"><span>${html(localized(catalog.categories[product.category], lang))}</span>${productStatusBadge(product, lang)}</p>
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
    [labels.tutorials, `/${lang}/tutorials/`, "tutorials"],
    [labels.projects, sharedPageHref("projects", lang), "projects"],
    [labels.contact, sharedPageHref("contact", lang), "contact"]
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
        <img src="${BRAND_LOGO}" alt="" class="brand-mark">
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
    ${downloadSectionContent(items, lang)}
  </section>`;
}

function imageSection(product, lang) {
  const images = product.images || [];
  const sections = [
    {
      title: lang === "zh" ? "接线 / 尺寸 / 参数图" : "Wiring / dimensions / specs",
      items: images.filter((item) => ["diagram", "spec"].includes(item.type))
    },
    {
      title: lang === "zh" ? "产品图库" : "Product gallery",
      items: images.filter((item) => item.type === "gallery" && item.src !== product.hero)
    }
  ].filter((section) => section.items.length);
  return sections.map(({ title, items }) => `<section class="detail-section"><h2>${html(title)}</h2><div class="detail-media-grid">${items.map((item) => `
    <figure>
      <a href="${attr(assetUrl(item.src))}" target="_blank" rel="noopener">
        <img src="${attr(assetUrl(item.src))}" alt="${attr(localized(item.label, lang))}" loading="lazy" decoding="async">
      </a>
      <figcaption>${html(localized(item.label, lang))}</figcaption>
    </figure>`).join("")}</div></section>`).join("");
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
    [labels.compatibility, localized(item.compatibilityNote, lang)],
    [labels.releaseNote, localized(item.archiveNote, lang)]
  ].filter(([, value]) => value);
  const href = /^https?:\/\//i.test(item.href) ? item.href : assetUrl(item.href);
  return `<a class="${meta.length ? "download-link-with-meta" : ""}" href="${attr(href)}" target="_blank" rel="noopener">
    <span>${html(localized(item.label, lang))}</span>
    ${downloadReleaseChips(item, lang)}
    ${meta.length ? `<dl class="download-file-meta">${meta.map(([label, value]) => `<div><dt>${html(label)}</dt><dd>${html(value)}</dd></div>`).join("")}</dl>` : ""}
  </a>`;
}

function downloadReleaseChips(item, lang) {
  const labels = UI[lang];
  if (!item.releaseRole && !item.releaseVersion && !item.releaseChannel && !localized(item.variant, lang)) return "";
  const roleChip = item.releaseRole === "latest-stable"
    ? labels.latestStable
    : item.releaseRole === "current-product"
      ? labels.currentProduct
      : labels.archived;
  const channelChip = item.releaseChannel === "unstable"
    ? labels.unstable
    : item.releaseChannel === "custom"
      ? labels.custom
      : labels.stable;
  const chips = [
    roleChip,
    item.releaseVersion,
    localized(item.variant, lang),
    channelChip
  ].filter(Boolean);
  return `<span class="download-release-chips">${chips.map((chip) => `<b>${html(chip)}</b>`).join("")}</span>`;
}

function firmwareFamilyLabel(family, lang) {
  const labels = UI[lang];
  const key = {
    ardupilot: "familyArduPilot",
    betaflight: "familyBetaflight",
    inav: "familyInav",
    px4: "familyPx4",
    am32: "familyAm32",
    other: "familyOther"
  }[family || "other"] || "familyOther";
  return labels[key];
}

function firmwareFamilyGroups(items) {
  const order = ["ardupilot", "betaflight", "inav", "px4", "am32", "other"];
  const groups = new Map();
  items.forEach((item) => {
    const family = item.firmwareFamily || "other";
    if (!groups.has(family)) groups.set(family, []);
    groups.get(family).push(item);
  });
  return [...groups.entries()]
    .sort(([a], [b]) => {
      const rankA = order.includes(a) ? order.indexOf(a) : order.indexOf("other");
      const rankB = order.includes(b) ? order.indexOf(b) : order.indexOf("other");
      return rankA - rankB;
    })
    .map(([family, familyItems]) => ({ family, items: familyItems }));
}

function firmwareFamilyPanels(items, lang) {
  return `<div class="download-firmware-families">${firmwareFamilyGroups(items).map((group) => firmwareFamilyPanel(group, lang)).join("")}</div>`;
}

function firmwareFamilyPanel(group, lang) {
  const labels = UI[lang];
  const latestItems = group.items.filter((item) => ["latest-stable", "current-product"].includes(item.releaseRole));
  const archiveItems = group.items.filter((item) => !["latest-stable", "current-product"].includes(item.releaseRole));
  const currentLabel = latestItems.some((item) => item.releaseRole === "latest-stable")
    ? labels.latestStable
    : labels.currentProduct;
  return `
      <section class="download-firmware-family">
        <div class="download-firmware-family-head">
          <h4>${html(firmwareFamilyLabel(group.family, lang))}</h4>
          ${latestItems.length ? `<span>${html(currentLabel)}</span>` : ""}
        </div>
        ${latestItems.length ? `<div class="download-file-list download-latest-list">${latestItems.map((item) => downloadLink(item, lang)).join("")}</div>` : ""}
        ${archiveItems.length ? `
          <details class="download-firmware-archive">
            <summary>${html(labels.archive)} (${archiveItems.length})</summary>
            <div class="download-file-list download-archive-list">${archiveItems.map((item) => downloadLink(item, lang)).join("")}</div>
          </details>
        ` : ""}
      </section>
    `;
}

function downloadSectionContent(items, lang) {
  const firmwareItems = items.filter((item) => downloadKind(item) === "firmware");
  const otherItems = items.filter((item) => downloadKind(item) !== "firmware");
  return `
    ${firmwareItems.length ? firmwareFamilyPanels(firmwareItems, lang) : ""}
    ${otherItems.length ? `<div class="download-list">${otherItems.map((item) => downloadLink(item, lang)).join("")}</div>` : ""}
  `;
}

function productEmailHref(product) {
  const productName = localized(product.title, "en");
  const subjectName = /^FlyingRC\b/i.test(productName) ? productName : `FlyingRC ${productName}`;
  const subject = `${subjectName} stock / price inquiry`;
  const body = [
    "Hello FlyingRC,",
    "",
    `I would like to ask about ${productName}.`,
    `Product page: ${absoluteUrl(staticProductHref(product, "en"))}`,
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
    { lang: "x-default", href: "/en/" }
  ];
  const body = `
    <section class="hero">
      <div class="hero-mark" aria-label="FlyingRC Official">
        <img src="${BRAND_LOGO}" alt="">
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
    <section class="home-strip product-wiki-band">
      <div>
        <h2>${html(labels.productWikiTitle)}</h2>
        <p>${html(labels.productWikiLead)}</p>
      </div>
      <a class="plain-link" href="/${lang}/products/">${html(labels.openProductWiki)}</a>
    </section>
    <section class="home-strip company-band" aria-labelledby="company-title">
      <div class="company-copy">
        <p class="status">FlyingRC Official</p>
        <h2 id="company-title">${html(labels.companyTitle)}</h2>
        <p>${html(labels.companyLead)}</p>
        <a class="company-address address-map-link" href="${COMPANY_MAP_URL}" target="_blank" rel="noopener noreferrer">
          <span>${html(labels.locationLabel)}</span>
          <strong>${html(labels.locationRegion)}</strong>
          <small>${html(labels.locationDetail)}</small>
          <b class="map-cta">${html(labels.viewOnGoogleMaps)}</b>
        </a>
      </div>
      <div class="company-gallery" aria-label="${attr(labels.companyGalleryLabel)}">
        <figure>
          <img src="/assets/company/flyingrc-workspace.jpg" alt="${attr(labels.workspaceAlt)}" loading="lazy" decoding="async">
          <figcaption>${html(labels.workspaceCaption)}</figcaption>
        </figure>
        <figure>
          <img src="/assets/company/flyingrc-building.jpg" alt="${attr(labels.buildingAlt)}" loading="lazy" decoding="async">
          <figcaption>${html(labels.buildingCaption)}</figcaption>
        </figure>
      </div>
    </section>
    <section class="home-strip hardware-band" id="hardware">
      <div>
        <h2>${html(labels.hardware)}</h2>
        <p>${html(labels.hardwareLead)}</p>
      </div>
      <ul class="capability-list">
        <li><a href="/${lang}/products/">${html(labels.flightControllers)}</a></li>
        <li><a href="/${lang}/products/">${html(labels.escBecModules)}</a></li>
        <li><a href="/${lang}/products/">${html(labels.sensorModules)}</a></li>
      </ul>
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
    { lang: "x-default", href: "/en/products/" }
  ];
  const products = catalog.products;
  const categoryButtons = Object.entries(catalog.categories).map(([category, label]) =>
    `<button class="filter-button${category === "all" ? " active" : ""}" type="button" data-product-category-filter="${attr(category)}" aria-pressed="${category === "all" ? "true" : "false"}">${html(localized(label, lang))}</button>`
  ).join("\n        ");
  const body = `
    <section class="wiki-hero">
      <div>
        <p class="status">FlyingRC Official</p>
        <h1>${html(labels.productIndexTitle)}</h1>
        <p class="lead">${html(labels.productIndexLead)}</p>
      </div>
    </section>
    <section class="wiki-toolbar product-category-toolbar" aria-labelledby="product-category-filter-title">
      <div class="product-category-filter-heading">
        <div>
          <h2 id="product-category-filter-title">${html(labels.productCategoryFilter)}</h2>
          <p>${html(labels.productCategoryFilterLead)}</p>
        </div>
        <p class="product-filter-count" data-product-filter-count aria-live="polite">${products.length} ${html(labels.productCount)}</p>
      </div>
      <div class="category-filters" data-product-category-filters role="group" aria-label="${attr(labels.productCategoryFilter)}">
        ${categoryButtons}
      </div>
    </section>
    <section class="wiki-grid-section">
      <div class="wiki-product-grid" data-product-grid data-empty-message="${attr(labels.noProductsInCategory)}">${products.map((product) => productCard(product, lang)).join("")}</div>
    </section>
  `;
  return pageShell({
    lang,
    title: `${labels.productIndexTitle} | FlyingRC Official`,
    description: labels.productIndexLead,
    canonicalPath: `/${lang}/products/`,
    alternates,
    current: "products",
    body,
    styleVersion: "20260809-product-categories-v2",
    scripts: ["/scripts/static-product-filters.js?v=20260809-product-categories-v1"]
  });
}

function productCard(product, lang) {
  const description = localized(product.cardSummary, lang) || localized(product.summary, lang);
  const href = staticProductHref(product, lang);
  return `<article class="wiki-product-card" data-product-category="${attr(product.category)}">
    <a class="product-media" href="${attr(href)}">${product.hero ? `<img src="${attr(assetUrl(product.hero))}" alt="${attr(localized(product.title, lang))}" loading="lazy" decoding="async">` : ""}</a>
    <div class="product-card-body">
      <div class="product-card-meta"><span>${html(localized(catalog.categories[product.category], lang))}</span>${productStatusBadge(product, lang)}</div>
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
    { lang: "x-default", href: "/en/downloads/" }
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

function tutorialsIndexPage(lang) {
  const labels = UI[lang];
  const alternates = [
    { lang: "en", href: "/en/tutorials/" },
    { lang: "zh-Hans", href: "/zh/tutorials/" },
    { lang: "x-default", href: "/en/tutorials/" }
  ];
  const body = `
    <section class="wiki-hero tutorials-hero">
      <div>
        <p class="status">FlyingRC Official</p>
        <h1>${html(labels.tutorialsTitle)}</h1>
        <p class="lead">${html(labels.tutorialsLead)}</p>
      </div>
    </section>
    <section class="tutorials-section">
      <div class="tutorial-grid">${tutorialCatalog.tutorials.map((tutorial) => tutorialCard(tutorial, lang)).join("")}</div>
    </section>
  `;
  return pageShell({
    lang,
    title: `${labels.tutorialsTitle} | FlyingRC Official`,
    description: labels.tutorialsLead,
    canonicalPath: `/${lang}/tutorials/`,
    alternates,
    current: "tutorials",
    body
  });
}

function tutorialCard(tutorial, lang) {
  const labels = UI[lang];
  const href = staticTutorialHref(tutorial, lang);
  return `<article class="tutorial-card">
    <div class="tutorial-card-meta">
      <span>${html(localized(tutorial.category, lang))}</span>
      <span>${html(labels.tutorialUpdated)} ${html(tutorial.updated)}</span>
    </div>
    <h2>${html(localized(tutorial.title, lang))}</h2>
    <p>${html(localized(tutorial.summary, lang))}</p>
    <a class="text-link" href="${attr(href)}">${html(labels.tutorialOpen)}</a>
  </article>`;
}

function tutorialPage(tutorial, lang) {
  const labels = UI[lang];
  const alternates = [
    { lang: "en", href: `/en/tutorials/${tutorial.slug}/` },
    { lang: "zh-Hans", href: `/zh/tutorials/${tutorial.slug}/` },
    { lang: "x-default", href: `/en/tutorials/${tutorial.slug}/` }
  ];
  const canonicalPath = staticTutorialHref(tutorial, lang);
  const title = `${localized(tutorial.title, lang)} | FlyingRC Official`;
  const description = localized(tutorial.summary, lang);
  const jsonLd = tutorialHowToJsonLd(tutorial, lang, canonicalPath);
  const body = `
    <section class="product-detail-hero tutorial-detail-hero">
      <div>
        <a class="back-link" href="/${lang}/tutorials/">${html(labels.tutorials)}</a>
        <p class="detail-kicker"><span>${html(localized(tutorial.category, lang))}</span><span>${html(labels.tutorialUpdated)} ${html(tutorial.updated)}</span></p>
        <h1>${html(localized(tutorial.title, lang))}</h1>
        <p>${html(description)}</p>
      </div>
      <div class="tutorial-hero-panel">
        <strong>${html(lang === "zh" ? "适用场景" : "Use case")}</strong>
        <p>${html(localized(tutorial.audience, lang))}</p>
      </div>
    </section>
    <section class="tutorial-layout">
      <article class="tutorial-article">
        ${tutorialListSection(labels.tutorialRequirements, tutorial.requirements, lang, "tutorial-check-list")}
        ${tutorialListSection(labels.tutorialSafety, tutorial.warnings, lang, "tutorial-warning-list")}
        <section class="detail-section tutorial-steps-section">
          <h2>${html(labels.tutorialSteps)}</h2>
          <ol class="tutorial-steps">${tutorial.steps.map((step) => `<li>
              <h3>${html(localized(step.title, lang))}</h3>
              <p>${html(localized(step.body, lang))}</p>
            </li>`).join("")}</ol>
        </section>
        <section class="detail-section">
          <h2>${html(labels.tutorialTroubleshooting)}</h2>
          <div class="troubleshooting-list">${tutorial.troubleshooting.map((item) => `<article>
              <h3>${html(localized(item.issue, lang))}</h3>
              <p>${html(localized(item.fix, lang))}</p>
            </article>`).join("")}</div>
        </section>
        <section class="detail-section">
          <h2>${html(labels.tutorialLinks)}</h2>
          <div class="download-list tutorial-link-list">${tutorial.links.map((item) => `<a href="${attr(localizedTutorialLinkHref(item.href, lang))}"${/^https?:\/\//i.test(item.href) ? ' target="_blank" rel="noopener"' : ""}>${html(localized(item.label, lang))}</a>`).join("")}</div>
        </section>
      </article>
    </section>
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;
  return pageShell({
    lang,
    title,
    description,
    canonicalPath,
    alternates,
    current: "tutorials",
    body
  });
}

function tutorialListSection(title, items, lang, className) {
  return `<section class="detail-section ${html(className)}">
    <h2>${html(title)}</h2>
    <ul class="detail-rich-list">${items.map((item) => `<li>${html(localized(item, lang))}</li>`).join("")}</ul>
  </section>`;
}

function localizedTutorialLinkHref(href, lang) {
  if (href === "/downloads.html") return `/${lang}/downloads/`;
  if (href === "/wiki.html") return `/${lang}/products/`;
  if (href === "/contact.html") return sharedPageHref("contact", lang);
  return href;
}

function tutorialHowToJsonLd(tutorial, lang, canonicalPath) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: localized(tutorial.title, lang),
    description: localized(tutorial.summary, lang),
    dateModified: tutorial.updated,
    image: SOCIAL_IMAGE,
    url: absoluteUrl(canonicalPath),
    tool: [
      { "@type": "HowToTool", name: "STM32CubeProgrammer" },
      { "@type": "HowToTool", name: "USB data cable" }
    ],
    supply: [
      { "@type": "HowToSupply", name: lang === "zh" ? "匹配的 FlyingRC .hex 固件文件" : "Matching FlyingRC .hex firmware file" }
    ],
    step: tutorial.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: localized(step.title, lang),
      text: localized(step.body, lang)
    }))
  };
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
      <div class="download-file-groups">${groups.map((group) => downloadGroupSection(group, lang)).join("")}</div>
      <a class="text-link download-product-page-link" href="${attr(staticProductHref(product, lang))}">${html(labels.products)}</a>
    </div>
  </details>`;
}

function downloadGroupSection(group, lang) {
  const labels = UI[lang];
  return `<section class="download-file-group download-file-group-${html(group.id)}">
    <h3>${html(labels[group.id])}</h3>
    ${group.id === "firmware" ? firmwareFamilyPanels(group.items, lang) : `<div class="download-file-list">${group.items.map((item) => downloadLink(item, lang)).join("")}</div>`}
  </section>`;
}

function groupDownloads(downloads) {
  const groups = ["manual", "firmware", "checksums", "source", "media", "other"].map((id) => ({ id, items: [] }));
  const byId = Object.fromEntries(groups.map((group) => [group.id, group]));
  downloads.forEach((item) => byId[downloadKind(item)].items.push(item));
  return groups.filter((group) => group.items.length);
}

function redirectPage({ title, destination, script = "" }) {
  const target = absoluteUrl(destination);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,follow">
    <meta name="description" content="This legacy FlyingRC URL has moved to the localized site.">
    <link rel="canonical" href="${attr(target)}">
    <link rel="icon" href="/assets/brand/flyingrc-logo.jpg" type="image/jpeg">
    <title>${html(title)} | FlyingRC Official</title>
    ${script ? `<script>${script}</script>` : ""}
    <meta http-equiv="refresh" content="0;url=${attr(destination)}">
  </head>
  <body>
    <p>This page has moved to <a href="${attr(destination)}">${html(destination)}</a>.</p>
  </body>
</html>
`;
}

function legacyProductRedirectPage() {
  const slugs = JSON.stringify(catalog.products.map((product) => product.slug));
  const script = `
      (() => {
        const slugs = new Set(${slugs});
        const slug = new URLSearchParams(location.search).get("p");
        const target = slug && slugs.has(slug)
          ? "/en/products/" + encodeURIComponent(slug) + "/"
          : "/en/products/";
        location.replace(target);
      })();`;
  return redirectPage({
    title: "Product page moved",
    destination: "/en/products/",
    script
  });
}

function generateProductPages() {
  catalog.products.forEach((product) => {
    const slug = product.slug;
    const alternates = [
      { lang: "en", href: `/en/products/${slug}/` },
      { lang: "zh-Hans", href: `/zh/products/${slug}/` },
      { lang: "x-default", href: `/en/products/${slug}/` }
    ];
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
    writeFile(`products/${slug}/index.html`, redirectPage({
      title: `${localized(product.title, "en")} page moved`,
      destination: `/en/products/${slug}/`
    }));
  });
}

function generateTutorialPages() {
  writeFile("en/tutorials/index.html", tutorialsIndexPage("en"));
  writeFile("zh/tutorials/index.html", tutorialsIndexPage("zh"));
  tutorialCatalog.tutorials.forEach((tutorial) => {
    writeFile(`en/tutorials/${tutorial.slug}/index.html`, tutorialPage(tutorial, "en"));
    writeFile(`zh/tutorials/${tutorial.slug}/index.html`, tutorialPage(tutorial, "zh"));
    writeFile(`tutorials/${tutorial.slug}/index.html`, redirectPage({
      title: `${localized(tutorial.title, "en")} moved`,
      destination: `/en/tutorials/${tutorial.slug}/`
    }));
  });
}

function generateSitemap() {
  const urls = [
    "/",
    "/projects.html",
    "/contact.html",
    "/en/",
    "/zh/",
    "/en/products/",
    "/zh/products/",
    "/en/downloads/",
    "/zh/downloads/",
    "/en/tutorials/",
    "/zh/tutorials/",
    ...catalog.products.flatMap((product) => [`/en/products/${product.slug}/`, `/zh/products/${product.slug}/`]),
    ...tutorialCatalog.tutorials.flatMap((tutorial) => [
      `/en/tutorials/${tutorial.slug}/`,
      `/zh/tutorials/${tutorial.slug}/`
    ])
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${html(absoluteUrl(url))}</loc><lastmod>${SITE_LASTMOD}</lastmod></url>`).join("\n")}
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
  writeFile("wiki.html", redirectPage({ title: "Products moved", destination: "/en/products/" }));
  writeFile("product.html", legacyProductRedirectPage());
  writeFile("downloads.html", redirectPage({ title: "Downloads moved", destination: "/en/downloads/" }));
  writeFile("tutorials.html", redirectPage({ title: "Tutorials moved", destination: "/en/tutorials/" }));
  generateProductPages();
  generateTutorialPages();
  generateSitemap();
  console.log(`Generated localized entry pages, ${catalog.products.length} product pages per language, and ${tutorialCatalog.tutorials.length} tutorial pages per language.`);
}

main();
