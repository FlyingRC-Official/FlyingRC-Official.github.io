window.FLYINGRC_CATALOG = {
  categories: {
    all: { en: "All products", zh: "全部产品" },
    "flight-controllers": { en: "Flight Controllers", zh: "飞控" },
    esc: { en: "ESCs", zh: "电调" },
    bec: { en: "BEC Modules", zh: "BEC 降压模块" },
    stacks: { en: "Stack Kits", zh: "飞塔套装" },
    "fixed-wing-kits": { en: "Fixed-wing Kits", zh: "固定翼套餐" },
    "fpv-kits": { en: "FPV Kits", zh: "穿越机套餐" },
    modules: { en: "Other Modules", zh: "其他模块" },
    sensors: { en: "Sensors and GPS", zh: "传感器与 GPS" }
  },
  products: [
    {
      slug: "f4wing-mini-mk1",
      category: "flight-controllers",
      tags: ["F405", "fixed-wing", "ArduPilot", "wiring"],
      title: { en: "FlyingRC F4Wing Mini MK1 F405 Fixed-wing Flight Controller", zh: "FlyingRC F4Wing Mini MK1 F405 主控固定翼飞控" },
      summary: { en: "Compact F405 fixed-wing controller with product photos, parameter table, packing list, and wiring diagrams.", zh: "紧凑型 F405 固定翼飞控，包含产品图、参数表、发货清单和接线图。" },
      specs: { en: ["F405 fixed-wing flight controller", "Includes dimension and wiring reference images", "Suitable for compact fixed-wing builds"], zh: ["F405 主控固定翼飞控", "包含尺寸图与接线参考图", "适合紧凑固定翼装机"] },
      hero: "assets/products/f4wing-mini-mk1/hero.jpg",
      images: [
        img("assets/products/f4wing-mini-mk1/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/f4wing-mini-mk1/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/f4wing-mini-mk1/wiring.jpg", "Full wiring diagram", "完整接线图", "diagram")
      ]
    },
    {
      slug: "h7wlite-mk1",
      category: "flight-controllers",
      tags: ["H743", "fixed-wing", "CAN", "PDB"],
      title: { en: "FlyingRC H7Wlite MK1 H743 Fixed-wing Flight Controller", zh: "FlyingRC H7Wlite MK1 H743 主控固定翼飞控" },
      summary: { en: "H743 fixed-wing controller materials with layout, battery wiring, and render references.", zh: "H743 固定翼飞控资料，包含布局图、电池接线图和渲染参考。" },
      specs: { en: ["H743 fixed-wing controller", "Layout, dimension, and battery wiring references", "Curated public images kept web-sized"], zh: ["H743 主控固定翼飞控", "包含布局、尺寸与电池接线参考", "公开图片已整理为网页尺寸"] },
      hero: "assets/products/h7wlite-mk1/hero.jpg",
      images: [
        img("assets/products/h7wlite-mk1/dimension.jpg", "Dimension and layout", "尺寸与布局", "diagram"),
        img("assets/products/h7wlite-mk1/bat.jpeg", "Battery wiring", "电池接线", "diagram")
      ]
    },
    {
      slug: "f4wse-f405",
      category: "flight-controllers",
      tags: ["F405", "fixed-wing", "Type-C", "wiring"],
      title: { en: "FlyingRC F4WSE F405 Fixed-wing Flight Controller", zh: "FlyingRC F4WSE F405 主控固定翼飞控" },
      summary: { en: "F4WSE fixed-wing controller reference page with product images, wiring layout, and render material.", zh: "F4WSE 固定翼飞控资料页，包含产品图、接线布局和渲染素材。" },
      specs: { en: ["F405 main controller", "Fixed-wing flight controller layout", "Type-C render material available"], zh: ["F405 主控", "固定翼飞控布局", "提供 Type-C 渲染素材"] },
      hero: "assets/products/f4wse-f405/hero.jpg",
      images: [img("assets/products/f4wse-f405/wiring.jpg", "Wiring and layout", "接线与布局", "diagram")]
    },
    {
      slug: "f4wse-pro",
      category: "flight-controllers",
      tags: ["F405", "fixed-wing", "Pro"],
      title: { en: "FlyingRC F4WSE F405 Pro Fixed-wing Flight Controller", zh: "FlyingRC F4WSE F405 Pro 主控固定翼飞控" },
      summary: { en: "Pro version listing material for the F4WSE fixed-wing controller family.", zh: "F4WSE 固定翼飞控系列 Pro 版本上架资料。" },
      specs: { en: ["F405 Pro fixed-wing controller", "Curated product image available", "Use as a higher-positioned F4WSE family page"], zh: ["F405 Pro 固定翼飞控", "已整理产品主图", "作为 F4WSE 系列高配资料页"] },
      hero: "assets/products/f4wse-pro/hero.jpg"
    },
    {
      slug: "f4d-mk1",
      category: "flight-controllers",
      tags: ["F405", "FPV", "DJI O4", "video"],
      title: { en: "FlyingRC F4D MK1 F405 FPV Flight Controller", zh: "FlyingRC F4D MK1 F405 主控穿越机飞控" },
      summary: { en: "F405 FPV flight controller materials with DJI O4 wiring, feature image, render, and product video.", zh: "F405 穿越机飞控资料，包含 DJI O4 接线、特点图、渲染图和产品视频。" },
      specs: { en: ["F405 FPV flight controller", "DJI O4 wiring reference", "Product feature and video assets included"], zh: ["F405 穿越机飞控", "DJI O4 接线参考", "包含产品特点图与视频素材"] },
      hero: "assets/products/f4d-mk1/hero.jpg",
      images: [
        img("assets/products/f4d-mk1/features.jpg", "Product features", "产品特点", "spec"),
        img("assets/products/f4d-mk1/wiring.jpg", "DJI O4 wiring", "DJI O4 接线", "diagram")
      ]
    },
    {
      slug: "h7d-h743",
      category: "flight-controllers",
      tags: ["H743", "FPV", "DJI O4", "ELRS", "analog VTX"],
      title: { en: "FlyingRC H7D H743 FPV Flight Controller", zh: "FlyingRC H7D H743 主控穿越机飞控" },
      summary: { en: "H743 FPV controller reference with dimension drawing and common receiver/video wiring diagrams.", zh: "H743 穿越机飞控资料，包含尺寸图以及常用接收机和图传接线图。" },
      specs: { en: ["H743 FPV flight controller", "Dimension, DJI O4, ELRS, and VTX references", "Product combination image included"], zh: ["H743 穿越机飞控", "包含尺寸、DJI O4、ELRS 与图传参考", "包含产品组合图"] },
      hero: "assets/products/h7d-h743/hero.jpg",
      images: [
        img("assets/products/h7d-h743/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/h7d-h743/dji-o4.jpg", "DJI O4 wiring", "DJI O4 接线", "diagram"),
        img("assets/products/h7d-h743/elrs.jpg", "ELRS receiver connector", "ELRS 接收机接口", "diagram")
      ]
    },
    {
      slug: "h7d-pro",
      category: "flight-controllers",
      tags: ["H743", "FPV", "Pro"],
      title: { en: "FlyingRC H7D Pro H743 FPV Flight Controller", zh: "FlyingRC H7D Pro H743 主控穿越机飞控" },
      summary: { en: "H7D Pro listing material with board and front-side images for the H743 FPV line.", zh: "H7D Pro 上架资料，包含整板图与正面图，属于 H743 穿越机飞控系列。" },
      specs: { en: ["H743 FPV controller family", "Pro-positioned H7D variant", "Board and front-view images available"], zh: ["H743 穿越机飞控系列", "H7D Pro 高配版本", "包含整板图与正面图"] },
      hero: "assets/products/h7d-pro/hero.jpg",
      images: [img("assets/products/h7d-pro/board.jpg", "Board view", "整板图", "gallery")]
    },
    {
      slug: "am32-4in1-75a",
      category: "esc",
      tags: ["AM32", "4-in-1", "75A", "FPV"],
      title: { en: "FlyingRC 4IN1 75A ESC FPV Metal-sealed ESC", zh: "FlyingRC 4IN1 75A ESC 四合一穿越机金封电调" },
      summary: { en: "Four-in-one 75A FPV ESC with parameter table and dimension drawing.", zh: "75A 四合一穿越机电调，包含参数表和尺寸图。" },
      specs: { en: ["4-in-1 FPV ESC", "75A class", "Parameter and dimension references included"], zh: ["四合一穿越机电调", "75A 级别", "包含参数与尺寸参考"] },
      hero: "assets/products/am32-4in1-75a/hero.jpg",
      images: [
        img("assets/products/am32-4in1-75a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/am32-4in1-75a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram")
      ]
    },
    {
      slug: "am32-4in1-45a",
      category: "esc",
      tags: ["AM32", "4-in-1", "45A", "FPV"],
      title: { en: "FlyingRC 4IN1 45A ESC FPV ESC", zh: "FlyingRC 4IN1 45A ESC 四合一穿越机电调" },
      summary: { en: "Product folder is present in the listing materials; curated public imagery is not yet available in v1.", zh: "上架资料中已有产品文件夹；v1 暂无可公开整理的清晰素材。" },
      specs: { en: ["4-in-1 FPV ESC", "45A class", "Awaiting clean public diagrams"], zh: ["四合一穿越机电调", "45A 级别", "等待清晰公开图纸素材"] }
    },
    {
      slug: "am32-mini-esc-40a",
      category: "esc",
      tags: ["AM32", "40A", "fixed-wing", "mini"],
      title: { en: "FlyingRC AM32 Mini ESC 40A V1 Single ESC", zh: "FlyingRC AM32 Mini ESC 40A V1 单体电调" },
      summary: { en: "Mini 40A AM32 single ESC with main image and top/bottom render references.", zh: "Mini 40A AM32 单体电调，包含主图和上下视角渲染参考。" },
      specs: { en: ["AM32 firmware family", "40A single ESC", "Compact mini form factor"], zh: ["AM32 固件系列", "40A 单体电调", "Mini 紧凑尺寸"] },
      hero: "assets/products/am32-mini-esc-40a/hero.jpg",
      images: [img("assets/products/am32-mini-esc-40a/render-up.jpg", "PCB render", "PCB 渲染图", "gallery")]
    },
    {
      slug: "am32-esc-75a-v25",
      category: "esc",
      tags: ["AM32", "75A", "fixed-wing", "V2.5"],
      title: { en: "FlyingRC AM32 ESC 75A V2.5 Single Metal-sealed ESC", zh: "FlyingRC AM32 ESC 75A V2.5 单体金封电调" },
      summary: { en: "75A single AM32 ESC listing page with product image and control-board render.", zh: "75A AM32 单体电调资料页，包含产品图和控制板渲染图。" },
      specs: { en: ["AM32 single ESC", "75A class", "V2.5 listing material"], zh: ["AM32 单体电调", "75A 级别", "V2.5 上架资料"] },
      hero: "assets/products/am32-esc-75a-v25/hero.jpg",
      images: [img("assets/products/am32-esc-75a-v25/render.jpg", "PCB render", "PCB 渲染图", "gallery")]
    },
    {
      slug: "am32-dual-esc-40a",
      category: "esc",
      tags: ["AM32", "dual", "40A", "fixed-wing"],
      title: { en: "FlyingRC AM32 Dual ESC 40A Two-in-one ESC", zh: "FlyingRC AM32 Dual ESC 40A 二合一电调" },
      summary: { en: "Dual 40A AM32 ESC material for fixed-wing twin-motor style builds.", zh: "40A AM32 二合一电调资料，适合固定翼双发类装机。" },
      specs: { en: ["Dual ESC layout", "40A class", "AM32 firmware family"], zh: ["二合一电调布局", "40A 级别", "AM32 固件系列"] },
      hero: "assets/products/am32-dual-esc-40a/hero.jpg"
    },
    {
      slug: "bec-5a-6s",
      category: "bec",
      tags: ["BEC", "5A", "6S", "9V"],
      title: { en: "FlyingRC 5A 6S BEC Step-down Module", zh: "FlyingRC 5A 6S BEC 降压模块" },
      summary: { en: "5A 6S BEC module with parameter table, dimension image, delivery list, and wiring photos.", zh: "5A 6S BEC 降压模块，包含参数表、尺寸图、发货清单和焊接图。" },
      specs: { en: ["5A BEC module", "Up to 6S input class", "9V output variant shown in materials"], zh: ["5A BEC 模块", "6S 输入级别", "资料中展示 9V 输出版本"] },
      hero: "assets/products/bec-5a-6s/hero.jpg",
      images: [
        img("assets/products/bec-5a-6s/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/bec-5a-6s/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/bec-5a-6s/wired.jpg", "Wired capacitor and power leads", "焊好电容和电源线", "gallery")
      ]
    },
    {
      slug: "bec-10a-12s",
      category: "bec",
      tags: ["BEC", "10A", "12S"],
      title: { en: "FlyingRC 10A 12S BEC Step-down Module", zh: "FlyingRC 10A 12S BEC 降压模块" },
      summary: { en: "Higher-power 10A 12S BEC module with battery/capacitor connection references and render.", zh: "10A 12S BEC 降压模块，包含电池、电容连接参考和渲染图。" },
      specs: { en: ["10A BEC module", "12S input class", "Battery and capacitor connection references"], zh: ["10A BEC 模块", "12S 输入级别", "电池与电容连接参考"] },
      hero: "assets/products/bec-10a-12s/hero.jpg",
      images: [
        img("assets/products/bec-10a-12s/bat.jpeg", "Battery connection", "电池连接", "diagram"),
        img("assets/products/bec-10a-12s/cap.jpg", "Capacitor connection", "电容连接", "diagram"),
        img("assets/products/bec-10a-12s/render.jpg", "PCB render", "PCB 渲染图", "gallery")
      ]
    },
    {
      slug: "bec-mini-dji-o4",
      category: "bec",
      tags: ["BEC", "DJI O4", "9V", "mini"],
      title: { en: "FlyingRC Mini BEC for DJI O4", zh: "FlyingRC Mini BEC For DJI O4" },
      summary: { en: "Mini BEC module for DJI O4 power use, with 9V layout image reference.", zh: "面向 DJI O4 供电的小型 BEC 模块，包含 9V 布局图参考。" },
      specs: { en: ["Mini BEC for DJI O4", "9V layout reference", "Small power module for digital video builds"], zh: ["DJI O4 小型 BEC", "9V 布局参考", "适合数字图传装机的小型供电模块"] },
      hero: "assets/products/bec-mini-dji-o4/hero.jpg",
      images: [img("assets/products/bec-mini-dji-o4/layout.jpg", "9V layout", "9V 布局", "diagram")]
    },
    {
      slug: "stack-f405-45a",
      category: "stacks",
      tags: ["F405", "45A", "stack", "entry"],
      title: { en: "FlyingRC Entry Stack Kit F405 FC + 45A 4-in-1 ESC", zh: "FlyingRC 入门版飞塔套装 F405 控 + 四合一 45A 金封电调" },
      summary: { en: "Entry-level FPV stack kit combining an F405 flight controller with a 45A four-in-one ESC.", zh: "入门版穿越机飞塔套装，组合 F405 飞控和 45A 四合一电调。" },
      specs: { en: ["F405 flight controller stack", "45A 4-in-1 ESC bundle", "Entry-level stack positioning"], zh: ["F405 飞控飞塔", "45A 四合一电调组合", "入门版定位"] },
      hero: "assets/products/stack-f405-45a/hero.jpg"
    },
    {
      slug: "stack-h743-45a",
      category: "stacks",
      tags: ["H743", "45A", "stack"],
      title: { en: "FlyingRC Advanced Stack Kit H743 FC + 45A 4-in-1 ESC", zh: "FlyingRC 进阶版飞塔套装 H743 飞控 + 四合一 45A 电调" },
      summary: { en: "H743-based advanced stack kit with 45A four-in-one ESC materials.", zh: "基于 H743 飞控的进阶飞塔套装，搭配 45A 四合一电调资料。" },
      specs: { en: ["H743 flight controller stack", "45A 4-in-1 ESC bundle", "Advanced stack positioning"], zh: ["H743 飞控飞塔", "45A 四合一电调组合", "进阶版定位"] },
      hero: "assets/products/stack-h743-45a/hero.jpg",
      images: [img("assets/products/stack-h743-45a/gallery.jpg", "Product detail", "产品细节", "gallery")]
    },
    {
      slug: "stack-f4d-75a",
      category: "stacks",
      tags: ["F4D", "75A", "stack"],
      title: { en: "FlyingRC Advanced Stack Kit F4D FC + 75A 4-in-1 ESC", zh: "FlyingRC 进阶版飞塔套装 F4D 穿越机飞控 + 四合一 75A 金封电调" },
      summary: { en: "Product folder is present in listing materials; clean public images are not yet available in v1.", zh: "上架资料中已有产品文件夹；v1 暂无清晰公开图片。" },
      specs: { en: ["F4D FPV flight controller stack", "75A 4-in-1 ESC bundle", "Awaiting curated imagery"], zh: ["F4D 穿越机飞控飞塔", "75A 四合一电调组合", "等待整理公开图片"] }
    },
    {
      slug: "stack-h743-75a",
      category: "stacks",
      tags: ["H743", "75A", "stack", "high-end"],
      title: { en: "FlyingRC High-end Stack Kit H743 FC + 75A 4-in-1 ESC", zh: "FlyingRC 高阶版飞塔套装 H743 穿越机飞控 + 四合一 75A 金封电调" },
      summary: { en: "High-end H743 FPV stack kit with 75A metal-sealed four-in-one ESC listing images.", zh: "高阶 H743 穿越机飞塔套装，搭配 75A 金封四合一电调上架图片。" },
      specs: { en: ["H743 FPV flight controller stack", "75A 4-in-1 ESC bundle", "High-end stack positioning"], zh: ["H743 穿越机飞控飞塔", "75A 四合一电调组合", "高阶版定位"] },
      hero: "assets/products/stack-h743-75a/hero.jpg",
      images: [img("assets/products/stack-h743-75a/details.jpg", "Detail image", "详情图", "gallery")]
    },
    {
      slug: "fpv-stack-f4d-45a",
      category: "fpv-kits",
      tags: ["F4D", "45A", "FPV", "stack"],
      title: { en: "FlyingRC FPV Stack F4D + 41N1 45A ESC", zh: "FlyingRC 飞塔 F4D + 41N1 45A ESC" },
      summary: { en: "FPV stack bundle page for F4D flight controller plus 45A ESC package materials.", zh: "F4D 飞控加 45A 电调穿越机飞塔套装资料页。" },
      specs: { en: ["F4D FPV flight controller bundle", "45A ESC package", "FPV stack kit"], zh: ["F4D 穿越机飞控组合", "45A 电调套装", "穿越机飞塔套餐"] },
      hero: "assets/products/fpv-stack-f4d-45a/hero.jpg",
      images: [img("assets/products/fpv-stack-f4d-45a/gallery.jpg", "Product image", "产品图", "gallery")]
    },
    {
      slug: "fixed-wing-kit",
      category: "fixed-wing-kits",
      tags: ["fixed-wing", "kit", "F4WSE", "H7Wlite"],
      title: { en: "FlyingRC Fixed-wing Kit Series", zh: "FlyingRC 固定翼套餐系列" },
      summary: { en: "Fixed-wing package materials covering F4WSE, F4Wing Mini, H7Wlite, and related kit images.", zh: "固定翼套餐资料，覆盖 F4WSE、F4Wing Mini、H7Wlite 等组合图片。" },
      specs: { en: ["Fixed-wing package family", "Multiple controller bundle images", "Use for comparing kit positioning"], zh: ["固定翼套餐系列", "多种飞控组合图片", "用于对比套餐定位"] },
      hero: "assets/products/fixed-wing-kit/hero.jpg",
      images: [
        img("assets/products/fixed-wing-kit/f4wse.jpg", "F4WSE kit image", "F4WSE 套餐图", "gallery"),
        img("assets/products/fixed-wing-kit/f4wing-mini.jpg", "F4Wing Mini kit image", "F4Wing Mini 套餐图", "gallery")
      ]
    },
    {
      slug: "fpv-kit",
      category: "fpv-kits",
      tags: ["FPV", "kit", "stack"],
      title: { en: "FlyingRC FPV Kit Series", zh: "FlyingRC 穿越机套餐系列" },
      summary: { en: "FPV package materials for stack and drone electronics bundles.", zh: "穿越机套餐资料，用于飞塔和穿越机电子组合展示。" },
      specs: { en: ["FPV package family", "Stack and electronics bundle imagery", "Useful for kit selection"], zh: ["穿越机套餐系列", "飞塔与电子设备组合图片", "用于套餐选择"] },
      hero: "assets/products/fpv-kit/hero.jpg",
      images: [img("assets/products/fpv-kit/gallery.jpg", "Kit image", "套餐图", "gallery")]
    },
    {
      slug: "rm3100-module",
      category: "sensors",
      tags: ["RM3100", "sensor", "wiring", "video"],
      title: { en: "FlyingRC RM3100 Module", zh: "FlyingRC RM3100 模块" },
      summary: { en: "Module documentation with parameter table, layout, pin definition, wiring table, render, instruction image, and video.", zh: "RM3100 模块资料，包含参数表、布局图、引脚定义、接线表、渲染图、说明图和视频。" },
      specs: { en: ["RM3100-style sensor module", "Parameter, layout, and wiring tables", "Product video included"], zh: ["RM3100 类传感器模块", "包含参数、布局与接线表", "包含产品视频"] },
      hero: "assets/products/rm3100-module/hero.jpg",
      images: [
        img("assets/products/rm3100-module/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/rm3100-module/layout.jpg", "Layout", "布局图", "diagram"),
        img("assets/products/rm3100-module/wiring.jpg", "Wiring table", "接线表", "diagram")
      ],
      downloads: [download("assets/products/rm3100-module/video-square.mp4", "Product video", "产品视频")]
    },
    {
      slug: "h7-can-gps",
      category: "sensors",
      tags: ["GPS", "CAN", "H7"],
      title: { en: "FlyingRC H7 CAN GPS", zh: "FlyingRC H7 CAN GPS" },
      summary: { en: "CAN GPS product material for ArduPilot-style CAN sensor integration.", zh: "CAN GPS 产品资料，面向 ArduPilot 类 CAN 传感器集成。" },
      specs: { en: ["CAN GPS module", "H7 product family", "Main product image available"], zh: ["CAN GPS 模块", "H7 产品系列", "包含产品主图"] },
      hero: "assets/products/h7-can-gps/hero.jpg"
    },
    {
      slug: "ublox-m10-gps",
      category: "sensors",
      tags: ["GPS", "U-Blox", "M10"],
      title: { en: "FlyingRC U-Blox M10 GPS", zh: "FlyingRC U-Blox M10 GPS" },
      summary: { en: "U-Blox M10 GPS product material for navigation builds.", zh: "U-Blox M10 GPS 产品资料，用于导航类装机。" },
      specs: { en: ["U-Blox M10 GPS", "Navigation module", "Product render available"], zh: ["U-Blox M10 GPS", "导航模块", "包含产品渲染图"] },
      hero: "assets/products/ublox-m10-gps/hero.jpg"
    },
    {
      slug: "digital-airspeed",
      category: "sensors",
      tags: ["airspeed", "fixed-wing", "sensor"],
      title: { en: "FlyingRC Pitotless Digital Airspeed Meter", zh: "FlyingRC 无空速管数字空速计" },
      summary: { en: "Digital airspeed product material for fixed-wing users who want a no-pitot airspeed option.", zh: "无空速管数字空速计资料，面向需要无空速管方案的固定翼用户。" },
      specs: { en: ["Digital airspeed sensor", "Pitotless product positioning", "Fixed-wing sensor accessory"], zh: ["数字空速传感器", "无空速管定位", "固定翼传感器配件"] },
      hero: "assets/products/digital-airspeed/hero.jpg"
    },
    {
      slug: "l4-can-rcgps-adapter",
      category: "modules",
      tags: ["CAN", "serial", "PWM", "adapter"],
      title: { en: "FlyingRC L4 CAN RCGPS Adapter CAN Serial and PWM Expansion Board", zh: "FlyingRC L4 CAN RCGPS Adapter CAN 总线串口 & PWM 扩展板" },
      summary: { en: "CAN bus adapter and serial/PWM expansion board material for peripheral integration.", zh: "CAN 总线串口与 PWM 扩展板资料，用于外设集成。" },
      specs: { en: ["CAN bus adapter", "Serial and PWM expansion", "Peripheral integration board"], zh: ["CAN 总线适配器", "串口与 PWM 扩展", "外设集成板"] },
      hero: "assets/products/l4-can-rcgps-adapter/hero.jpg"
    },
    {
      slug: "elrs-24g-diversity",
      category: "modules",
      tags: ["ELRS", "2.4GHz", "receiver", "diversity"],
      title: { en: "FlyingRC ELRS 2.4G True Diversity Receiver", zh: "FlyingRC ELRS 2.4G 分集接收机" },
      summary: { en: "ELRS 2.4GHz true-diversity receiver page with curated product images.", zh: "ELRS 2.4G 分集接收机资料页，包含整理后的产品图。" },
      specs: { en: ["ELRS 2.4GHz receiver", "True-diversity receiver positioning", "Curated product images available"], zh: ["ELRS 2.4G 接收机", "分集接收机定位", "包含整理后的产品图"] },
      hero: "assets/products/elrs-24g-diversity/hero.jpg",
      images: [
        img("assets/products/elrs-24g-diversity/gallery-1.jpg", "Product image", "产品图", "gallery"),
        img("assets/products/elrs-24g-diversity/gallery-2.jpg", "Product image", "产品图", "gallery")
      ]
    },
    {
      slug: "am32-configurator",
      category: "modules",
      tags: ["AM32", "ESC", "configurator", "tool"],
      title: { en: "FlyingRC AM32 ESC Configurator Tool", zh: "FlyingRC AM32 电调调参器" },
      summary: { en: "AM32 ESC configuration adapter with connection diagrams, dimension image, and firmware-support image.", zh: "AM32 电调调参器，包含连接图、尺寸图和多固件支持说明图。" },
      specs: { en: ["AM32 ESC configuration tool", "ESC connection reference", "Supports multiple firmware workflows shown in material"], zh: ["AM32 电调调参工具", "电调连接参考", "资料展示支持多种固件流程"] },
      hero: "assets/products/am32-configurator/hero.jpg",
      images: [
        img("assets/products/am32-configurator/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-configurator/wiring.jpg", "ESC connection", "电调连接图", "diagram"),
        img("assets/products/am32-configurator/firmware.jpg", "Firmware support", "固件支持", "spec")
      ]
    },
    {
      slug: "pdb-12s-400a",
      category: "modules",
      tags: ["PDB", "12S", "400A", "FPV"],
      title: { en: "FlyingRC 10A 12S 400A FPV Power Distribution Board", zh: "FlyingRC 10A 12S 400A 穿越机分电板" },
      summary: { en: "High-current FPV power distribution board materials with top and bottom renders.", zh: "大电流穿越机分电板资料，包含正反面渲染图。" },
      specs: { en: ["FPV power distribution board", "12S and 400A class labels from listing material", "Top and bottom PCB renders"], zh: ["穿越机分电板", "资料标注 12S 与 400A 级别", "包含正反面 PCB 渲染图"] },
      hero: "assets/products/pdb-12s-400a/hero.jpg",
      images: [img("assets/products/pdb-12s-400a/bottom.jpg", "Bottom render", "反面渲染图", "gallery")]
    }
  ]
};

function img(src, en, zh, type) {
  return { src, label: { en, zh }, type };
}

function download(href, en, zh) {
  return { href, label: { en, zh } };
}
