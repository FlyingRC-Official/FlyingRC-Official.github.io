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
      slug: "f435wing-mini-osd",
      category: "flight-controllers",
      status: "latest",
      tags: ["AT32F435", "fixed-wing", "INAV", "BMI270", "SPA06-003", "AT7456F", "analog OSD", "digital VTX", "7 PWM"],
      title: { en: "FlyingRC F435Wing Mini OSD AT32F435 Fixed-wing Flight Controller", zh: "FlyingRC F435Wing Mini OSD版 AT32F435 主控固定翼飞控" },
      summary: {
        en: "Ultra-compact AT32F435 fixed-wing flight controller with analog OSD, digital VTX interface, seven PWM outputs, and dedicated INAV 9.1.0 firmware for 1 MB and 4 MB variants.",
        zh: "超紧凑 AT32F435 固定翼飞控，集成模拟 OSD、数字图传接口与 7 路 PWM，并提供适配 1MB 和 4MB 版本的 INAV 9.1.0 固件。"
      },
      specs: {
        en: [
          "AT32F435CGU7 (1 MB Flash) or AT32F435CMU7 (4 MB Flash), 288 MHz, 384 KB SRAM",
          "BMI270 six-axis IMU, SPA06-003 barometer, and AT7456F analog OSD",
          "27.96 x 20.29 x 11.4 mm; 17.8 x 17.8 mm M1.2 mounting pattern",
          "3.1 g without pin headers; 5.1 g with soldered headers",
          "7 PWM outputs (one shared with LED), 3 UARTs, I2C, SBUS, and passive buzzer output",
          "External regulated 5 V flight-controller power; external I2C current meter supported",
          "INAV only; ArduPilot, Betaflight, and PX4 are not supported"
        ],
        zh: [
          "AT32F435CGU7（1MB Flash）或 AT32F435CMU7（4MB Flash），288MHz，384KB SRAM",
          "BMI270 六轴 IMU、SPA06-003 气压计与 AT7456F 模拟 OSD",
          "尺寸 27.96 x 20.29 x 11.4mm；安装孔距 17.8 x 17.8mm，M1.2",
          "未焊排针 3.1g；焊好排针 5.1g",
          "7 路 PWM（其中一路兼作 LED）、3 路 UART、I2C、SBUS 与无源蜂鸣器接口",
          "飞控本体需外部稳定 5V 供电；支持外置 I2C 电流计",
          "仅支持 INAV；不支持 ArduPilot、Betaflight、PX4"
        ]
      },
      hero: "assets/products/f435wing-mini-osd/hero.jpg",
      images: [
        img("assets/products/f435wing-mini-osd/dimensions.jpg", "Dimensions and weight", "尺寸与重量", "diagram"),
        img("assets/products/f435wing-mini-osd/component-layout.jpg", "Component layout", "元件布局", "diagram"),
        img("assets/products/f435wing-mini-osd/port-definition.jpg", "Connector and pin definitions", "接口与引脚定义", "diagram"),
        img("assets/products/f435wing-mini-osd/digital-vtx-pinout.jpg", "Digital VTX and battery passthrough pinout", "数字图传与电池直通接口定义", "diagram"),
        img("assets/products/f435wing-mini-osd/wiring-external-bec.jpg", "Complete wiring with external BEC", "外置独立 BEC 完整接线", "diagram"),
        img("assets/products/f435wing-mini-osd/wiring-esc-bec.jpg", "Complete wiring with ESC BEC", "电调内置 BEC 完整接线", "diagram"),
        img("assets/products/f435wing-mini-osd/package-contents.jpg", "Package contents", "包装清单", "gallery"),
        img("assets/products/f435wing-mini-osd/product-angle.jpg", "Flight controller with soldered pin headers", "焊好排针产品图", "gallery"),
        img("assets/products/f435wing-mini-osd/board-front.jpg", "Board front", "飞控正面", "gallery"),
        img("assets/products/f435wing-mini-osd/board-front-angle.jpg", "Board front angle", "飞控正面斜视图", "gallery"),
        img("assets/products/f435wing-mini-osd/board-back.jpg", "Board back", "飞控反面", "gallery"),
        img("assets/products/f435wing-mini-osd/board-detail.jpg", "Connector detail", "接口细节", "gallery"),
        img("assets/products/f435wing-mini-osd/render-top.jpg", "Top render", "顶部渲染图", "gallery"),
        img("assets/products/f435wing-mini-osd/render-bottom.jpg", "Bottom render", "底部渲染图", "gallery"),
        img("assets/products/f435wing-mini-osd/render-side.jpg", "Side render", "侧面渲染图", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-flight-controller.jpg", "Flight controller SKU", "飞控 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-bec.jpg", "Flight controller and BEC SKU", "飞控与 BEC SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-esc.jpg", "Flight controller and ESC SKU", "飞控与电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-dual-esc.jpg", "Flight controller and dual ESC SKU", "飞控与双电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-bec-esc.jpg", "Flight controller, BEC, and ESC SKU", "飞控、BEC 与电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-bec-dual-esc.jpg", "Flight controller, BEC, and dual ESC SKU", "飞控、BEC 与双电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-pins-bec.jpg", "Soldered headers and BEC SKU", "焊排针与 BEC SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-pins-esc.jpg", "Soldered headers and ESC SKU", "焊排针与电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-pins-dual-esc.jpg", "Soldered headers and dual ESC SKU", "焊排针与双电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-pins-bec-esc.jpg", "Soldered headers, BEC, and ESC SKU", "焊排针、BEC 与电调 SKU", "gallery"),
        img("assets/products/f435wing-mini-osd/sku-pins-bec-dual-esc.jpg", "Soldered headers, BEC, and dual ESC SKU", "焊排针、BEC 与双电调 SKU", "gallery")
      ]
    },
    {
      slug: "f4wing-mini-mk1",
      category: "flight-controllers",
      tags: ["F405", "fixed-wing", "ArduPilot", "wiring"],
      title: { en: "FlyingRC F4Wing Mini MK1 F405 Fixed-wing Flight Controller", zh: "FlyingRC F4Wing Mini MK1 F405 主控固定翼飞控" },
      summary: { en: "Compact F405 fixed-wing controller with product photos, parameter table, packing list, and wiring diagrams.", zh: "紧凑型 F405 固定翼飞控，包含产品图、参数表、发货清单和接线图。" },
      specs: { en: ["STM32F405 fixed-wing autopilot controller", "27.9 x 20.3 x 11.2 mm board size", "6 PWM outputs, 3 UARTs, SBUS, I2C, USB-C, and HD VTX connector"], zh: ["F405 主控固定翼飞控", "包含尺寸图与接线参考图", "适合紧凑固定翼装机"] },
      hardwareChanges: {
        title: { en: "F4Wing Mini MK1 Hardware Revision Notice: IMU Update", zh: "F4Wing Mini MK1 硬件版本说明：IMU 更新" },
        note: {
          en: "F4Wing Mini MK1 units shipped on or after May 25, 2026 use the BMI270 IMU with the SPA06-003 barometer. Earlier units may use ICM42688P / ICM42605 IMUs and SPL06-001 / SPA06-003 barometers.",
          zh: "2026/5/25 日以后发货的 F4Wing Mini MK1 使用 BMI270 IMU 和 SPA06-003 气压计。早期版本可能使用 ICM42688P / ICM42605 IMU，以及 SPL06-001 / SPA06-003 气压计。"
        },
        reason: {
          en: "Reason for the revision: ICM-series IMUs became difficult and expensive to source consistently. The current BMI270 + SPA06-003 combination allows us to keep this Mini product line affordable and available, while still providing tested firmware support for the intended use case.",
          zh: "版本调整原因：ICM 系列 IMU 变得较难稳定采购且成本明显上升。当前 BMI270 + SPA06-003 组合可以继续维持 Mini 产品线的可负担价格和稳定供货，同时为目标使用场景提供经过测试的固件支持。"
        },
        identifyNote: {
          en: "Please check the onboard sensor markings and the version-identification photos below before selecting firmware or configuration files.",
          zh: "选择固件或配置文件前，请先核对板上器件丝印，并参考下方版本辨别图片。"
        },
        columns: {
          en: ["Item", "Earlier hardware", "Current revision shipped from May 25, 2026"],
          zh: ["项目", "早期硬件", "当前版本（2026/5/25 起发货）"]
        },
        rows: [
          {
            item: { en: "IMU (gyro and accelerometer)", zh: "IMU（陀螺仪和加速度计）" },
            values: [
              { en: "ICM42688P / ICM42605", zh: "ICM42688P / ICM42605" },
              { en: "BMI270 (current revision)", zh: "BMI270（当前版本）" }
            ],
            emphasis: true
          },
          {
            item: { en: "Barometer", zh: "气压计" },
            values: [
              { en: "SPL06-001 / SPA06-003", zh: "SPL06-001 / SPA06-003" },
              { en: "SPA06-003", zh: "SPA06-003" }
            ]
          },
          {
            item: { en: "Firmware target / config", zh: "固件目标 / 配置" },
            values: [
              { en: "Use earlier hardware target/config", zh: "使用早期硬件对应目标 / 配置" },
              { en: "Use BMI270 hardware revision target/config", zh: "使用 BMI270 硬件版本对应目标 / 配置" }
            ]
          },
          {
            item: { en: "How to identify", zh: "如何辨别" },
            values: [
              { en: "Check sensor marking / photos", zh: "查看传感器丝印 / 图片" },
              { en: "Check sensor marking / photos", zh: "查看传感器丝印 / 图片" }
            ]
          }
        ],
        firmwareNote: {
          title: {
            en: "Firmware compatibility note for SPA06-003 barometer",
            zh: "SPA06-003 气压计固件兼容性说明"
          },
          intro: {
            en: "The SPA06-003 barometer requires firmware with SPA06 / DPS310-compatible barometer support.",
            zh: "SPA06-003 气压计需要固件包含 SPA06 / DPS310-compatible 气压计支持。"
          },
          recommendedTitle: { en: "Recommended tested versions", zh: "建议使用的已测试版本" },
          versions: [
            { firmware: "ArduPilot", version: "4.6.0 or newer", versionZh: "4.6.0 或更新版本" },
            { firmware: "INAV", version: "8.0.0 or newer", versionZh: "8.0.0 或更新版本" },
            { firmware: "Betaflight", version: "4.5.0 or newer", versionZh: "4.5.0 或更新版本" }
          ],
          caution: {
            en: "Older firmware or old user-submitted targets may not detect the barometer correctly. Please use the firmware target/configuration listed for this hardware revision.",
            zh: "旧固件或旧的用户提交 target 可能无法正确识别气压计。请使用此硬件版本对应的固件 target / 配置文件。"
          },
          targetNote: {
            en: "Driver support alone is not enough. The firmware target must also enable the correct barometer driver and bus configuration for this board revision.",
            zh: "只有驱动支持还不够。固件 target 还必须为这个板卡版本启用正确的气压计驱动和总线配置。"
          }
        }
      },
      hardwareRevisionImages: [
        img("assets/products/f4wing-mini-mk1/imu-revision-20260527.jpg", "IMU chip marking guide for earlier and current revisions", "IMU 芯片丝印新旧版本辨别图", "gallery")
      ],
      hero: "assets/products/f4wing-mini-mk1/hero.jpg",
      images: [
        img("assets/products/f4wing-mini-mk1/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/f4wing-mini-mk1/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/f4wing-mini-mk1/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/f4wing-mini-mk1/receiver-kit.jpg", "Flight controller with receiver", "飞控 + 接收机组合", "gallery"),
        img("assets/products/f4wing-mini-mk1/detail.jpg", "Product detail image", "产品细节图", "gallery"),
        img("assets/products/f4wing-mini-mk1/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/f4wing-mini-mk1/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/f4wing-mini-mk1/photo-pin-headers-20260508.jpg", "Soldered pin header photo", "焊接排针实物图", "gallery"),
        img("assets/products/f4wing-mini-mk1/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/f4wing-mini-mk1/layout-top.png", "Top layout", "正面布局", "diagram"),
        img("assets/products/f4wing-mini-mk1/layout-bottom.png", "Bottom layout", "反面布局", "diagram"),
        img("assets/products/f4wing-mini-mk1/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "h7wlite-mk1",
      category: "flight-controllers",
      tags: ["H743", "fixed-wing", "CAN", "PDB"],
      title: { en: "FlyingRC H7Wlite MK1 H743 Fixed-wing Flight Controller", zh: "FlyingRC H7Wlite MK1 H743 主控固定翼飞控" },
      summary: { en: "H743 fixed-wing controller materials with layout, battery wiring, and render references.", zh: "H743 固定翼飞控资料，包含布局图、电池接线图和渲染参考。" },
      specs: { en: ["H743-class fixed-wing autopilot controller", "Supports CAN/GPS/peripheral expansion planning", "Includes dimension and battery wiring references"], zh: ["H743 主控固定翼飞控", "包含布局、尺寸与电池接线参考", "公开图片已整理为网页尺寸"] },
      hero: "assets/products/h7wlite-mk1/hero.jpg",
      images: [
        img("assets/products/h7wlite-mk1/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/h7wlite-mk1/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/h7wlite-mk1/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/h7wlite-mk1/layout-top.jpg", "Top layout", "正面布局", "diagram"),
        img("assets/products/h7wlite-mk1/layout-bottom.jpg", "Bottom layout", "反面布局", "diagram"),
        img("assets/products/h7wlite-mk1/soldered-pins.jpg", "Soldered pin headers", "焊好排针", "gallery"),
        img("assets/products/h7wlite-mk1/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "h7wlite-v2",
      category: "flight-controllers",
      status: "latest",
      tags: ["H743", "fixed-wing", "BMI270", "SPA06-003", "QMC5883P", "CAN"],
      title: { en: "FlyingRC H7Wlite V2 H743 Fixed-wing Flight Controller", zh: "FlyingRC H7Wlite V2 H743 主控固定翼飞控" },
      summary: {
        en: "H7Wlite V2 hardware revision with dual BMI270 IMUs, SPA06-003 barometer, and internal QMC5883P compass. ArduPilot and INAV retain legacy ICM support; Betaflight is BMI270-only.",
        zh: "H7Wlite V2 硬件版本采用双 BMI270 IMU、SPA06-003 气压计和内置 QMC5883P 罗盘。ArduPilot 与 INAV 保留旧版 ICM 支持；Betaflight 仅适用于 BMI270。"
      },
      specs: {
        en: ["STM32H743 fixed-wing flight controller", "Dual BMI270 IMUs; legacy ICM alternatives remain available in ArduPilot and INAV", "SPA06-003 barometer and internal QMC5883P compass on I2C2", "12 PWM outputs, SDIO logging, analog OSD, CAN, and seven UARTs"],
        zh: ["STM32H743 固定翼飞控", "双 BMI270 IMU；ArduPilot 与 INAV 仍支持旧版 ICM 替代器件", "I2C2 上的 SPA06-003 气压计与内置 QMC5883P 罗盘", "12 路 PWM、SDIO 日志、模拟 OSD、CAN 与 7 路 UART"]
      },
      hardwareRevisionDescription: {
        en: "V2 is the BMI270 / SPA06-003 / QMC5883P revision. The H7Wlite family images below are temporary mechanical and connector references; verify the V2 sensor markings before flashing.",
        zh: "V2 为 BMI270 / SPA06-003 / QMC5883P 硬件版本。下方暂用 H7Wlite 系列图片作为机械尺寸和接口参考；刷写前请核对 V2 传感器丝印。"
      },
      hero: "assets/products/h7wlite-v2/hero-20260809-v4.png",
      images: [
        img("assets/products/h7wlite-mk1/specs.jpg", "H7Wlite family spec reference; verify V2 sensor revision", "H7Wlite 系列参数参考；请核对 V2 传感器版本", "spec"),
        img("assets/products/h7wlite-mk1/dimension.jpg", "H7Wlite family dimension reference", "H7Wlite 系列尺寸参考", "diagram"),
        img("assets/products/h7wlite-mk1/wiring-full.jpg", "H7Wlite family wiring reference", "H7Wlite 系列接线参考", "diagram"),
        img("assets/products/h7wlite-mk1/layout-top.jpg", "H7Wlite family top-layout reference", "H7Wlite 系列正面布局参考", "diagram"),
        img("assets/products/h7wlite-mk1/layout-bottom.jpg", "H7Wlite family bottom-layout reference", "H7Wlite 系列反面布局参考", "diagram")
      ]
    },
    {
      slug: "f4wse-f405",
      category: "flight-controllers",
      status: "eol",
      tags: ["F405", "fixed-wing", "Type-C", "wiring"],
      title: { en: "FlyingRC F4WSE F405 Fixed-wing Flight Controller", zh: "FlyingRC F4WSE F405 主控固定翼飞控" },
      summary: { en: "F4WSE fixed-wing controller reference page with product images, wiring layout, and render material.", zh: "F4WSE 固定翼飞控资料页，包含产品图、接线布局和渲染素材。" },
      specs: { en: ["STM32F405 fixed-wing autopilot controller", "ArduPilot/INAV-style airplane control workflow", "Wiring layout reference for receiver, GPS, telemetry, and PWM outputs"], zh: ["F405 主控", "固定翼飞控布局", "提供 Type-C 渲染素材"] },
      hero: "assets/products/f4wse-f405/hero-20260809-v3.jpg",
      images: [
        img("assets/products/f4wse-f405/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/f4wse-f405/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/f4wse-f405/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/f4wse-f405/layout-top.jpg", "Top layout", "正面布局", "diagram"),
        img("assets/products/f4wse-f405/board.jpeg", "Board photo", "整板图", "gallery"),
        img("assets/products/f4wse-f405/layout-3.png", "Additional layout reference 3", "补充布局参考图 3", "diagram"),
        img("assets/products/f4wse-f405/layout-4.png", "Additional layout reference 4", "补充布局参考图 4", "diagram")
      ]
    },
    {
      slug: "f4wse-pro",
      category: "flight-controllers",
      status: "latest",
      tags: ["F405", "fixed-wing", "Pro"],
      title: { en: "FlyingRC F4WSE F405 Pro Fixed-wing Flight Controller", zh: "FlyingRC F4WSE F405 Pro 主控固定翼飞控" },
      summary: { en: "Pro version listing material for the F4WSE fixed-wing controller family.", zh: "F4WSE 固定翼飞控系列 Pro 版本上架资料。" },
      specs: { en: ["F405 Pro fixed-wing autopilot controller", "Supports ArduPilot and INAV workflows", "MatekF405-TE compatible firmware path noted in manual"], zh: ["F405 Pro 固定翼飞控", "已整理产品主图", "作为 F4WSE 系列高配资料页"] },
      hero: "assets/products/f4wse-pro/hero.jpg",
      hardwareRevisionDescription: {
        en: "Identify F4WSE Pro hardware revisions by the IMU chip marking: current units use BMI270, while earlier units use ICM42688P.",
        zh: "可通过 IMU 芯片丝印辨别 F4WSE Pro 新旧版本：当前版本使用 BMI270，早期版本使用 ICM42688P。"
      },
      hardwareRevisionImages: [
        img("assets/products/f4wse-pro/imu-revision-20260602.jpg", "IMU chip marking guide for F4WSE Pro earlier and current revisions", "F4WSE Pro IMU 芯片丝印新旧版本辨别图", "gallery")
      ],
      images: [
        img("assets/products/f4wse-pro/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/f4wse-pro/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/f4wse-pro/base-soldered.jpg", "Base version soldered headers", "基础版焊好排针", "gallery"),
        img("assets/products/f4wse-pro/advanced-soldered.jpg", "Advanced version soldered headers and TF board", "进阶版焊好排针和 TF 卡小板", "gallery"),
        img("assets/products/f4wse-pro/detail.jpg", "Product detail image", "产品细节图", "gallery"),
        img("assets/products/f4wse-pro/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/f4wse-pro/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/f4wse-pro/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/f4wse-pro/specs-bmi270.png", "BMI270 revision parameter table", "BMI270 版本参数表", "spec"),
        img("assets/products/f4wse-pro/package-base.jpg", "Base version package contents", "基础版发货清单", "gallery"),
        img("assets/products/f4wse-pro/package-advanced.jpg", "Advanced version package contents", "进阶版发货清单", "gallery")
      ]
    },
    {
      slug: "f4d-mk1",
      category: "flight-controllers",
      tags: ["F405", "FPV", "DJI O4", "video"],
      title: { en: "FlyingRC F4D MK1 F405 FPV Flight Controller", zh: "FlyingRC F4D MK1 F405 主控穿越机飞控" },
      summary: { en: "F405 FPV flight controller materials with DJI O4 wiring, feature image, render, and product video.", zh: "F405 穿越机飞控资料，包含 DJI O4 接线、特点图、渲染图和产品视频。" },
      specs: { en: ["STM32F405 FPV flight controller", "7-28 V DC / 2-6S LiPo input range", "Onboard 9 V BEC for VTX/camera power"], zh: ["F405 穿越机飞控", "DJI O4 接线参考", "包含产品特点图与视频素材"] },
      hero: "assets/products/f4d-mk1/hero.jpg",
      images: [
        img("assets/products/f4d-mk1/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/f4d-mk1/features.jpg", "Product features", "产品特点", "spec"),
        img("assets/products/f4d-mk1/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/f4d-mk1/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/f4d-mk1/dji-o4.jpg", "DJI O4 wiring", "DJI O4 接线", "diagram"),
        img("assets/products/f4d-mk1/elrs.jpg", "ELRS receiver wiring", "ELRS 接收机接线", "diagram"),
        img("assets/products/f4d-mk1/kit-fc-75a.jpg", "F4D with 75A ESC kit", "飞控 + 75A 金封电调套装", "gallery"),
        img("assets/products/f4d-mk1/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/f4d-mk1/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/f4d-mk1/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/f4d-mk1/specs-technical.jpg", "Technical parameter table", "技术参数表", "spec"),
        img("assets/products/f4d-mk1/layout-top.png", "Top layout", "正面布局", "diagram"),
        img("assets/products/f4d-mk1/layout-bottom.png", "Bottom layout", "反面布局", "diagram"),
        img("assets/products/f4d-mk1/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "h7d-h743",
      category: "flight-controllers",
      status: "eol",
      tags: ["H743", "FPV", "DJI O4", "ELRS", "analog VTX"],
      title: { en: "FlyingRC H7D H743 FPV Flight Controller", zh: "FlyingRC H7D H743 主控穿越机飞控" },
      summary: { en: "H743 FPV controller reference with dimension drawing and common receiver/video wiring diagrams.", zh: "H743 穿越机飞控资料，包含尺寸图以及常用接收机和图传接线图。" },
      specs: { en: ["STM32H743 FPV flight controller", "12-28 V DC / 3-6S LiPo input range", "Dual BEC outputs: 5 V/4 A and 12 V/2 A"], zh: ["H743 穿越机飞控", "包含尺寸、DJI O4、ELRS 与图传参考", "包含产品组合图"] },
      hero: "assets/products/h7d-h743/hero-20260809-v3.jpg",
      images: [
        img("assets/products/h7d-h743/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/h7d-h743/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/h7d-h743/wiring-full.jpg", "Full wiring diagram", "完整接线图", "diagram"),
        img("assets/products/h7d-h743/dji-o4.jpg", "DJI O4 wiring", "DJI O4 接线", "diagram"),
        img("assets/products/h7d-h743/elrs.jpg", "ELRS receiver connector", "ELRS 接收机接口", "diagram"),
        img("assets/products/h7d-h743/gps.jpeg", "GPS wiring", "GPS 接线", "diagram"),
        img("assets/products/h7d-h743/led-buzzer.jpg", "LED and buzzer wiring", "LED 与蜂鸣器接线", "diagram"),
        img("assets/products/h7d-h743/fc-gps-receiver.jpg", "Flight controller with GPS and receiver", "飞控 + GPS + 接收机组合", "gallery"),
        img("assets/products/h7d-h743/kit-fc-gps-receiver-20260527.jpg", "Flight controller, GPS, and receiver kit", "飞控 + GPS + 接收机组合图", "gallery"),
        img("assets/products/h7d-h743/kit-fc-gps-20260527.jpg", "Flight controller and GPS kit", "飞控 + GPS 组合图", "gallery"),
        img("assets/products/h7d-h743/kit-fc-receiver-20260527.jpg", "Flight controller and receiver kit", "飞控 + 接收机组合图", "gallery"),
        img("assets/products/h7d-h743/board-overview-20260527.jpg", "Board overview photo", "整板图", "gallery"),
        img("assets/products/h7d-h743/detail-closeup-20260527.jpg", "Board detail image", "局部细节图", "gallery"),
        img("assets/products/h7d-h743/packing-list-20260527.jpg", "Packing list", "发货清单", "gallery"),
        img("assets/products/h7d-h743/render-bec-20260527.jpg", "BEC render detail", "BEC 功能渲染图", "gallery"),
        img("assets/products/h7d-h743/render-imu-baro-20260527.jpg", "IMU and barometer render detail", "IMU 与气压计渲染图", "gallery"),
        img("assets/products/h7d-h743/render-dji-analog-20260527.jpg", "Digital and analog video render detail", "数字/模拟图传渲染图", "gallery"),
        img("assets/products/h7d-h743/specs-technical.png", "Technical parameter table", "技术参数表", "spec"),
        img("assets/products/h7d-h743/layout-top.png", "Top layout", "正面布局", "diagram"),
        img("assets/products/h7d-h743/layout-bottom.png", "Bottom layout", "反面布局", "diagram")
      ]
    },
    {
      slug: "h7d-pro",
      category: "flight-controllers",
      status: "latest",
      tags: ["H743", "FPV", "Pro", "PX4"],
      title: { en: "FlyingRC H7D Pro H743 FPV Flight Controller", zh: "FlyingRC H7D Pro H743 主控穿越机飞控" },
      summary: { en: "H7D Pro listing material with board and front-side images for the H743 FPV line.", zh: "H7D Pro 上架资料，包含整板图与正面图，属于 H743 穿越机飞控系列。" },
      specs: { en: ["STM32H743 Pro FPV flight controller", "Dual gyro and barometer sensor architecture", "Switchable onboard 9 V BEC for VTX/camera power"], zh: ["H743 穿越机飞控系列", "H7D Pro 高配版本", "包含整板图与正面图"] },
      hero: "assets/products/h7d-pro/hero-20260809-v3.png",
      images: [
        img("assets/products/h7d-pro/specs.jpg", "Spec table", "参数表", "spec"),
        img("assets/products/h7d-pro/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/h7d-pro/pinout-front.jpg", "Front connector and pad map", "正面连接器与焊盘功能", "diagram"),
        img("assets/products/h7d-pro/pinout-back.jpg", "Back connector and pad map", "反面连接器与焊盘功能", "diagram"),
        img("assets/products/h7d-pro/wiring-esc.jpg", "4IN1 75A ESC wiring", "与 4IN1 75A 金封电调连接", "diagram"),
        img("assets/products/h7d-pro/wiring-digital-vtx.jpg", "Digital VTX wiring", "数字图传连接", "diagram"),
        img("assets/products/h7d-pro/front.jpg", "Front view", "正面图", "gallery"),
        img("assets/products/h7d-pro/back.jpg", "Back view", "反面图", "gallery"),
        img("assets/products/h7d-pro/photo-01-20260525.jpg", "Product photo 1", "实物图 1", "gallery"),
        img("assets/products/h7d-pro/photo-02-20260525.jpg", "Product photo 2", "实物图 2", "gallery"),
        img("assets/products/h7d-pro/photo-03-20260525.jpg", "Product photo 3", "实物图 3", "gallery"),
        img("assets/products/h7d-pro/photo-04-20260525.jpg", "Product photo 4", "实物图 4", "gallery"),
        img("assets/products/h7d-pro/wiring-rm3100.png", "RM3100 compass wiring", "RM3100 罗盘接线图", "diagram"),
        img("assets/products/h7d-pro/package.png", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-4in1-75a",
      category: "esc",
      tags: ["AM32", "4-in-1", "75A", "FPV"],
      title: { en: "FlyingRC 4IN1 75A ESC FPV Metal-sealed ESC", zh: "FlyingRC 4IN1 75A ESC 四合一穿越机金封电调" },
      summary: { en: "Four-in-one 75A FPV ESC with parameter table and dimension drawing.", zh: "75A 四合一穿越机电调，包含参数表和尺寸图。" },
      specs: { en: ["AM32 4-in-1 FPV ESC", "75 A per channel continuous rating under manual test conditions", "9-30 V / 3-7S LiPo input range"], zh: ["四合一穿越机电调", "75A 级别", "包含参数与尺寸参考"] },
      hero: "assets/products/am32-4in1-75a/hero.jpg",
      images: [
        img("assets/products/am32-4in1-75a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/am32-4in1-75a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-4in1-75a/product-photo.jpg", "Product photo", "实拍图", "gallery"),
        img("assets/products/am32-4in1-75a/back.jpg", "Back view", "反面图", "gallery"),
        img("assets/products/am32-4in1-75a/detail.jpg", "Product detail image", "产品细节图", "gallery"),
        img("assets/products/am32-4in1-75a/photo-front-wired-20260508.jpg", "Wired front photo", "焊线正面实物图", "gallery"),
        img("assets/products/am32-4in1-75a/photo-back-wired-20260508.jpg", "Wired back photo", "焊线背面实物图", "gallery"),
        img("assets/products/am32-4in1-75a/photo-heatsink-20260508.jpg", "Heatsink side photo", "散热片侧实物图", "gallery"),
        img("assets/products/am32-4in1-75a/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/am32-4in1-75a/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-4in1-45a",
      category: "esc",
      status: "latest",
      tags: ["AM32", "4-in-1", "45A", "FPV"],
      title: { en: "FlyingRC 4IN1 45A ESC FPV ESC", zh: "FlyingRC 4IN1 45A ESC 四合一穿越机电调" },
      summary: { en: "45A four-in-one FPV ESC with product photos, parameter table, dimension drawing, and pinout reference.", zh: "45A 四合一穿越机电调，包含实物图、参数表、尺寸图和引脚定义图。" },
      specs: { en: ["AM32 4-in-1 FPV ESC", "45 A per channel class", "Supports DShot150/300/600, OneShot, and PWM protocols"], zh: ["四合一穿越机电调", "45A 级别", "包含参数、尺寸与引脚定义图"] },
      hero: "assets/products/am32-4in1-45a/hero.jpg",
      images: [
        img("assets/products/am32-4in1-45a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/am32-4in1-45a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-4in1-45a/pinout.jpg", "Pinout diagram", "引脚定义图", "diagram"),
        img("assets/products/am32-4in1-45a/product-front.jpg", "Product front photo", "实物正面图", "gallery"),
        img("assets/products/am32-4in1-45a/product-back.jpg", "Product back photo", "实物背面图", "gallery"),
        img("assets/products/am32-4in1-45a/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-mini-esc-40a",
      category: "esc",
      status: "latest",
      tags: ["AM32", "40A", "fixed-wing", "mini"],
      title: { en: "FlyingRC AM32 Mini ESC 40A V1 Single ESC", zh: "FlyingRC AM32 Mini ESC 40A V1 单体电调" },
      summary: { en: "Mini 40A AM32 single ESC with main image and top/bottom render references.", zh: "Mini 40A AM32 单体电调，包含主图和上下视角渲染参考。" },
      specs: { en: ["AM32 single-channel ESC", "40 A class for one brushless motor", "6-30 V / 2-6S LiPo input range"], zh: ["AM32 固件系列", "40A 单体电调", "Mini 紧凑尺寸"] },
      hero: "assets/products/am32-mini-esc-40a/hero.jpg",
      images: [
        img("assets/products/am32-mini-esc-40a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/am32-mini-esc-40a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-mini-esc-40a/wiring.jpg", "Wiring diagram", "接线图", "diagram"),
        img("assets/products/am32-mini-esc-40a/pad-map.jpg", "Pad map", "焊盘示意图", "diagram"),
        img("assets/products/am32-mini-esc-40a/package-board.jpg", "Delivery board photo", "整板发货图", "gallery"),
        img("assets/products/am32-mini-esc-40a/render-up.jpg", "PCB render", "PCB 渲染图", "gallery"),
        img("assets/products/am32-mini-esc-40a/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/am32-mini-esc-40a/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/am32-mini-esc-40a/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/am32-mini-esc-40a/package.png", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-esc-75a-can",
      category: "esc",
      status: "latest",
      tags: ["AM32", "75A", "CAN", "fixed-wing"],
      title: { en: "FlyingRC AM32 ESC CAN Bus 75A Single Metal-sealed ESC", zh: "FlyingRC AM32 ESC CAN 总线 75A 单体金封电调" },
      summary: { en: "Compact 75 A AM32 single ESC with an onboard CAN interface, high-current metal-sealed MOSFETs, and an included GH1.25 cable set.", zh: "紧凑型 75A AM32 单体金封电调，板载 CAN 总线接口，采用大电流金封 MOS，并附带 GH1.25 线材套件。" },
      specs: {
        en: [
          "7-28 V DC / 2-6S LiPo input",
          "75 A continuous and 85 A burst current under the published 4S test condition",
          "Onboard CAN interface plus DSHOT150/300/600, OneShot, and PWM control support",
          "Approx. 38.10 x 19.16 x 9.24 mm and 7.7 g according to the dimension drawing"
        ],
        zh: [
          "输入：7-28V DC / 2-6S LiPo",
          "资料标注 4S 测试条件下持续电流 75A、瞬时电流 85A",
          "板载 CAN 总线接口，支持 DSHOT150/300/600、OneShot、PWM 等控制信号",
          "尺寸图标注约 38.10 x 19.16 x 9.24mm，重量约 7.7g"
        ]
      },
      hero: "assets/products/am32-esc-75a-can/hero.jpg",
      images: [
        img("assets/products/am32-esc-75a-can/specs.jpg", "Published parameter table", "参数表", "spec"),
        img("assets/products/am32-esc-75a-can/dimension.png", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-esc-75a-can/details.jpg", "Product features", "产品特点", "gallery"),
        img("assets/products/am32-esc-75a-can/photo-1.jpg", "CAN interface board and ESC power board", "CAN 接口控制板与电调功率板", "gallery"),
        img("assets/products/am32-esc-75a-can/photo-2.jpg", "Product photo 2", "产品实拍图 2", "gallery"),
        img("assets/products/am32-esc-75a-can/photo-3.jpg", "Metal-sealed MOSFET power board", "金封 MOS 功率板", "gallery"),
        img("assets/products/am32-esc-75a-can/photo-4.jpg", "Product photo 4", "产品实拍图 4", "gallery"),
        img("assets/products/am32-esc-75a-can/photo-5.jpg", "Product photo 5", "产品实拍图 5", "gallery"),
        img("assets/products/am32-esc-75a-can/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-esc-75a-v25",
      category: "esc",
      tags: ["AM32", "75A", "fixed-wing", "V2.5"],
      title: { en: "FlyingRC AM32 ESC 75A V2.5 Single Metal-sealed ESC", zh: "FlyingRC AM32 ESC 75A V2.5 单体金封电调" },
      summary: { en: "75A single AM32 ESC listing page with product image and control-board render.", zh: "75A AM32 单体电调资料页，包含产品图和控制板渲染图。" },
      specs: { en: ["AM32 single-channel ESC", "75 A class for one high-current brushless motor", "7-28 V DC / 2-6S LiPo input range"], zh: ["AM32 单体电调", "75A 级别", "V2.5 上架资料"] },
      hero: "assets/products/am32-esc-75a-v25/hero-20260809-v3.png",
      images: [
        img("assets/products/am32-esc-75a-v25/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-esc-75a-v25/detail-1.jpg", "Product introduction", "产品介绍图", "gallery"),
        img("assets/products/am32-esc-75a-v25/with-bec.jpg", "Version with BEC", "有 BEC 版本", "gallery"),
        img("assets/products/am32-esc-75a-v25/no-bec.jpg", "Version without BEC", "无 BEC 版本", "gallery"),
        img("assets/products/am32-esc-75a-v25/render.jpg", "PCB render", "PCB 渲染图", "gallery"),
        img("assets/products/am32-esc-75a-v25/photo-wired-front-20260508.jpg", "Wired front photo", "焊线正面实物图", "gallery"),
        img("assets/products/am32-esc-75a-v25/photo-wired-back-20260508.jpg", "Wired back photo", "焊线背面实物图", "gallery"),
        img("assets/products/am32-esc-75a-v25/photo-board-20260508.jpg", "Bare board photo", "裸板实物图", "gallery"),
        img("assets/products/am32-esc-75a-v25/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery")
      ]
    },
    {
      slug: "am32-dual-esc-40a",
      category: "esc",
      status: "latest",
      tags: ["AM32", "dual", "40A", "fixed-wing"],
      title: { en: "FlyingRC AM32 Dual ESC 40A Two-in-one ESC", zh: "FlyingRC AM32 Dual ESC 40A 二合一电调" },
      summary: { en: "Dual 40A AM32 ESC material for fixed-wing twin-motor style builds.", zh: "40A AM32 二合一电调资料，适合固定翼双发类装机。" },
      specs: { en: ["AM32 two-in-one ESC", "40 A dual-motor class", "2-6S LiPo input range"], zh: ["二合一电调布局", "40A 级别", "AM32 固件系列"] },
      hero: "assets/products/am32-dual-esc-40a/hero-20260809-v3.png",
      images: [
        img("assets/products/am32-dual-esc-40a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/am32-dual-esc-40a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-dual-esc-40a/pinout.jpg", "Interface diagram", "接口示意图", "diagram"),
        img("assets/products/am32-dual-esc-40a/wiring-f4wse-pro.jpg", "F4WSE Pro wiring", "与 F4WSE Pro 接线图", "diagram"),
        img("assets/products/am32-dual-esc-40a/soldered-set.jpeg", "Soldered set", "全套焊好", "gallery"),
        img("assets/products/am32-dual-esc-40a/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/am32-dual-esc-40a/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/am32-dual-esc-40a/package.png", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "bec-5a-6s",
      category: "bec",
      tags: ["BEC", "5A", "6S", "9V"],
      title: { en: "FlyingRC 5A 6S BEC Step-down Module", zh: "FlyingRC 5A 6S BEC 降压模块" },
      summary: { en: "5A 6S BEC module with parameter table, dimension image, delivery list, and wiring photos.", zh: "5A 6S BEC 降压模块，包含参数表、尺寸图、发货清单和焊接图。" },
      specs: { en: ["MP9447 step-down BEC module", "7-26 V / 2-6S LiPo input range", "Selectable 5 V, 6.2 V, 7.4 V, or 9 V output"], zh: ["5A BEC 模块", "6S 输入级别", "资料中展示 9V 输出版本"] },
      hero: "assets/products/bec-5a-6s/hero.jpg",
      images: [
        img("assets/products/bec-5a-6s/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/bec-5a-6s/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/bec-5a-6s/wiring.jpg", "Wiring diagram", "接线图", "diagram"),
        img("assets/products/bec-5a-6s/capacitor-kit.jpg", "BEC and capacitor kit", "BEC 和配套电容", "gallery"),
        img("assets/products/bec-5a-6s/wired.jpg", "Wired capacitor and power leads", "焊好电容和电源线", "gallery"),
        img("assets/products/bec-5a-6s/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/bec-5a-6s/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/bec-5a-6s/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/bec-5a-6s/photo-wired-20260508.jpg", "Wired product photo", "焊线实物图", "gallery"),
        img("assets/products/bec-5a-6s/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "bec-10a-12s",
      category: "bec",
      tags: ["BEC", "10A", "12S"],
      title: { en: "FlyingRC 10A 12S BEC Step-down Module", zh: "FlyingRC 10A 12S BEC 降压模块" },
      summary: { en: "Higher-power 10A 12S BEC module with battery/capacitor connection references and render.", zh: "10A 12S BEC 降压模块，包含电池、电容连接参考和渲染图。" },
      specs: { en: ["10 A step-down BEC module", "6-60 V / 2-12S LiPo input range", "Designed for higher-current accessory power"], zh: ["10A BEC 模块", "12S 输入级别", "电池与电容连接参考"] },
      hero: "assets/products/bec-10a-12s/hero.jpg",
      images: [
        img("assets/products/bec-10a-12s/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/bec-10a-12s/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/bec-10a-12s/bat.jpeg", "Battery connection", "电池连接", "diagram"),
        img("assets/products/bec-10a-12s/cap.jpg", "Capacitor connection", "电容连接", "diagram"),
        img("assets/products/bec-10a-12s/board.jpg", "Board photo", "整板图", "gallery"),
        img("assets/products/bec-10a-12s/render.jpg", "PCB render", "PCB 渲染图", "gallery"),
        img("assets/products/bec-10a-12s/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/bec-10a-12s/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/bec-10a-12s/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/bec-10a-12s/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "bec-mini-dji-o4",
      category: "bec",
      status: "latest",
      tags: ["BEC", "DJI O4", "9V", "mini"],
      title: { en: "FlyingRC Mini BEC for DJI O4", zh: "FlyingRC Mini BEC For DJI O4" },
      summary: { en: "Mini BEC module for DJI O4 power use, with 9V layout image reference.", zh: "面向 DJI O4 供电的小型 BEC 模块，包含 9V 布局图参考。" },
      specs: { en: ["Mini step-down BEC for DJI O4", "7-36 V / 2-8S LiPo input range", "Dedicated digital-video power module"], zh: ["DJI O4 小型 BEC", "9V 布局参考", "适合数字图传装机的小型供电模块"] },
      hero: "assets/products/bec-mini-dji-o4/hero.jpg",
      images: [
        img("assets/products/bec-mini-dji-o4/specs.jpg", "Spec table", "技术参数", "spec"),
        img("assets/products/bec-mini-dji-o4/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/bec-mini-dji-o4/layout.jpg", "9V layout", "9V 布局", "diagram"),
        img("assets/products/bec-mini-dji-o4/board.jpeg", "Board photo", "整板图", "gallery"),
        img("assets/products/bec-mini-dji-o4/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/bec-mini-dji-o4/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/bec-mini-dji-o4/photo-side-20260508.jpg", "Side product photo", "实物侧面图", "gallery")
      ]
    },
    {
      slug: "bec-10a-8s",
      category: "bec",
      status: "latest",
      tags: ["BEC", "10A", "8S", "LM61495", "servo"],
      title: { en: "FlyingRC 10A 8S BEC V1 Step-down Module", zh: "FlyingRC 10A 8S BEC V1 降压模块" },
      summary: { en: "Compact 2-8S BEC with selectable 5 V / 6 V / 7 V output, designed for fast transient response in servo-power applications.", zh: "紧凑型 2-8S BEC，支持 5V / 6V / 7V 跳线选压，适合对瞬态响应要求高的舵机供电场景。" },
      specs: { en: ["6-36 V input; 2-8S LiPo", "5 V default output; 6 V / 7 V selectable by jumper", "10 A continuous with heatsink or airflow; 12 A peak at 5 V", "33.9 x 18.5 x 5.5 mm; 10.3 mm with heatsink"], zh: ["输入 6-36V，支持 2-8S LiPo", "默认 5V 输出；跳线可选 6V / 7V", "有散热片或风冷时 5V 持续 10A；5V 峰值 12A", "尺寸 33.9 x 18.5 x 5.5 mm；带散热片高度 10.3 mm"] },
      hero: "assets/products/bec-10a-8s/hero.jpg",
      images: [
        img("assets/products/bec-10a-8s/specs.png", "Parameter table", "参数表", "spec"),
        img("assets/products/bec-10a-8s/dimension.png", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/bec-10a-8s/wiring.png", "Wiring and jumper selection", "接线与跳线选压", "diagram"),
        img("assets/products/bec-10a-8s/board.png", "Board photo", "整板图", "gallery"),
        img("assets/products/bec-10a-8s/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "bec-5a-12s",
      category: "bec",
      status: "latest",
      tags: ["BEC", "5A", "12S", "5V", "12V"],
      title: { en: "FlyingRC 5A 12S BEC V1 Step-down Module", zh: "FlyingRC 12S 5A BEC V1 降压模块" },
      summary: { en: "Compact 2-12S BEC module with 5 V output by default and a 12 V option selected through the jumper pads.", zh: "紧凑型 2-12S BEC 降压模块，默认输出 5V，可通过跳线焊盘选择 12V。" },
      specs: { en: ["6-60 V input; 2-12S LiPo", "5 V default output; 12 V selectable by jumper", "5 A continuous at 5 V with 6S input; 3.5 A at 5 V with 12S input", "30.01 x 17.82 x 5.52 mm; 5.4 g without capacitor"], zh: ["输入 6-60V，支持 2-12S LiPo", "默认 5V 输出；跳线可选 12V", "6S 输入时 5V 持续 5A；12S 输入时 5V 持续 3.5A", "尺寸 30.01 x 17.82 x 5.52 mm；不含电容重 5.4g"] },
      hero: "assets/products/bec-5a-12s/hero-20260809-v2.jpg",
      images: [
        img("assets/products/bec-5a-12s/dimension.jpg", "Dimensions and weight", "尺寸与重量", "diagram"),
        img("assets/products/bec-5a-12s/jumper-12v.jpg", "12 V jumper selection", "12V 跳线选择", "diagram"),
        img("assets/products/bec-5a-12s/product-angle.png", "Angled product view", "产品斜视图", "gallery"),
        img("assets/products/bec-5a-12s/product-top.png", "Top product view", "产品俯视图", "gallery"),
        img("assets/products/bec-5a-12s/wired.png", "BEC with input and output wires", "输入输出线材安装图", "gallery"),
        img("assets/products/bec-5a-12s/heatsink.png", "Wired BEC with heatsink", "带线与散热片安装图", "gallery"),
        img("assets/products/bec-5a-12s/board.png", "Board photo", "整板图", "gallery"),
        img("assets/products/bec-5a-12s/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "stack-f405-45a",
      category: "stacks",
      tags: ["F405", "45A", "stack", "entry"],
      title: { en: "FlyingRC Entry Stack Kit F405 FC + 45A 4-in-1 ESC", zh: "FlyingRC 入门版飞塔套装 F405 控 + 四合一 45A 金封电调" },
      summary: { en: "Entry-level FPV stack kit combining an F405 flight controller with a 45A four-in-one ESC.", zh: "入门版穿越机飞塔套装，组合 F405 飞控和 45A 四合一电调。" },
      specs: { en: ["F405 FPV flight controller bundle", "45 A 4-in-1 ESC bundle", "Matched stack kit for compact FPV builds"], zh: ["F405 飞控飞塔", "45A 四合一电调组合", "入门版定位"] },
      hero: "assets/products/stack-f405-45a/hero-20260809-v3.jpg",
      images: [
        img("assets/products/stack-f405-45a/photo-stack-20260513.jpg", "Stack kit product photo", "飞塔套装实物图", "gallery"),
        img("assets/products/stack-f405-45a/f4d-45a-render.png", "F4D and 45A ESC stack render", "F4D + 45A 电调飞塔渲染图", "gallery"),
        img("assets/products/stack-f405-45a/f4d-45a-photo.png", "F4D and 45A ESC stack product photo", "F4D + 45A 电调飞塔实物图", "gallery")
      ]
    },
    {
      slug: "stack-h743-45a",
      category: "stacks",
      tags: ["H7D Pro", "H743", "45A", "stack"],
      title: { en: "FlyingRC Advanced Stack Kit H7D Pro FC + 45A 4-in-1 ESC", zh: "FlyingRC 进阶版飞塔套装 H7D Pro 飞控 + 45A 四合一电调" },
      summary: { en: "Advanced FPV stack kit pairing the H7D Pro H743 flight controller with a 45A four-in-one ESC.", zh: "进阶版穿越机飞塔套装，组合 H7D Pro H743 飞控和 45A 四合一电调。" },
      specs: { en: ["H7D Pro H743 FPV flight controller bundle", "45 A 4-in-1 ESC bundle", "Matched stack kit for higher-performance FPV builds"], zh: ["H7D Pro H743 穿越机飞控飞塔", "45A 四合一电调组合", "进阶版定位"] },
      hero: "assets/products/stack-h743-45a/hero-20260809-v3.jpg",
      images: [
        img("assets/products/stack-h743-45a/gallery.jpg", "Product detail", "产品细节", "gallery"),
        img("assets/products/stack-h743-45a/detail-20260403.jpg", "Stack kit detail", "飞塔套装细节图", "gallery")
      ]
    },
    {
      slug: "stack-f4d-75a",
      category: "stacks",
      tags: ["F4D", "75A", "stack"],
      title: { en: "FlyingRC Advanced Stack Kit F4D FC + 75A 4-in-1 ESC", zh: "FlyingRC 进阶版飞塔套装 F4D 穿越机飞控 + 四合一 75A 金封电调" },
      summary: { en: "F4D FPV flight-controller bundle with 75A metal-sealed ESC kit photos.", zh: "F4D 穿越机飞控与 75A 金封电调组合套装，已补充套装图片。" },
      specs: { en: ["F4D FPV flight controller bundle", "75 A 4-in-1 ESC bundle", "Matched stack kit for high-current FPV builds"], zh: ["F4D 穿越机飞控飞塔", "75A 四合一电调组合", "包含组合套装图片"] },
      hero: "assets/products/stack-f4d-75a/hero-20260809-v3.jpg",
      images: [
        img("assets/products/stack-f4d-75a/gallery.jpg", "Expanded kit option", "扩展套装选项", "gallery"),
        img("assets/products/stack-f4d-75a/photo-01-20260513.jpg", "Stack kit product photo 1", "飞塔套装实物图 1", "gallery"),
        img("assets/products/stack-f4d-75a/photo-02-20260513.jpg", "Stack kit product photo 2", "飞塔套装实物图 2", "gallery")
      ]
    },
    {
      slug: "stack-h743-75a",
      category: "stacks",
      tags: ["H7D Pro", "H743", "75A", "stack", "high-end"],
      title: { en: "FlyingRC High-end Stack Kit H7D Pro FC + 75A 4-in-1 ESC", zh: "FlyingRC 高阶版飞塔套装 H7D Pro 飞控 + 75A 四合一金封电调" },
      summary: { en: "High-end FPV stack kit pairing the H7D Pro H743 flight controller with a 75A metal-sealed four-in-one ESC.", zh: "高阶穿越机飞塔套装，组合 H7D Pro H743 飞控和 75A 金封四合一电调。" },
      specs: { en: ["H7D Pro H743 FPV flight controller bundle", "75 A 4-in-1 ESC bundle", "High-current stack kit for advanced FPV builds"], zh: ["H7D Pro H743 穿越机飞控飞塔", "75A 四合一电调组合", "高阶版定位"] },
      hero: "assets/products/stack-h743-75a/hero-20260809-v3.jpg",
      images: [
        img("assets/products/stack-h743-75a/details.jpg", "Detail image", "详情图", "gallery"),
        img("assets/products/stack-h743-75a/detail-20260527.jpg", "Stack kit detail", "飞塔套装详情图", "gallery"),
        img("assets/products/stack-h743-75a/photo-01-20260525.jpg", "Stack kit product photo 1", "飞塔套装实物图 1", "gallery"),
        img("assets/products/stack-h743-75a/photo-02-20260525.jpg", "Stack kit product photo 2", "飞塔套装实物图 2", "gallery")
      ]
    },
    {
      slug: "fixed-wing-kit",
      category: "fixed-wing-kits",
      tags: ["fixed-wing", "kit", "F4WSE", "H7Wlite"],
      title: { en: "FlyingRC Fixed-wing Kit Series", zh: "FlyingRC 固定翼套餐系列" },
      summary: { en: "Fixed-wing package materials covering F4WSE, F4Wing Mini, H7Wlite, and related kit images.", zh: "固定翼套餐资料，覆盖 F4WSE、F4Wing Mini、H7Wlite 等组合图片。" },
      specs: { en: ["Fixed-wing controller kit family", "Covers F4WSE, F4Wing Mini, and H7Wlite options", "Bundle overview for comparing aircraft-control packages"], zh: ["固定翼套餐系列", "多种飞控组合图片", "用于对比套餐定位"] },
      hero: "assets/products/fixed-wing-kit/hero.jpg",
      images: [
        img("assets/products/fixed-wing-kit/f4wse.jpg", "F4WSE kit image", "F4WSE 套餐图", "gallery"),
        img("assets/products/fixed-wing-kit/f4wing-mini.jpg", "F4Wing Mini kit image", "F4Wing Mini 套餐图", "gallery"),
        img("assets/products/fixed-wing-kit/h7wlite.jpg", "H7Wlite kit image", "H7Wlite 套餐图", "gallery")
      ]
    },
    {
      slug: "fpv-kit",
      category: "fpv-kits",
      tags: ["FPV", "kit", "stack"],
      title: { en: "FlyingRC FPV Kit Series", zh: "FlyingRC 穿越机套餐系列" },
      summary: { en: "FPV package materials for stack and drone electronics bundles.", zh: "穿越机套餐资料，用于飞塔和穿越机电子组合展示。" },
      specs: { en: ["FPV electronics kit family", "Stack and drone-electronics bundle options", "Bundle overview for comparing FPV build packages"], zh: ["穿越机套餐系列", "飞塔与电子设备组合图片", "用于套餐选择"] },
      hero: "assets/products/fpv-kit/hero.jpg",
      images: [
        img("assets/products/fpv-kit/gallery-1.jpg", "Kit overview 1", "套餐介绍图 1", "gallery"),
        img("assets/products/fpv-kit/gallery-2.jpg", "Kit overview 2", "套餐介绍图 2", "gallery"),
        img("assets/products/fpv-kit/gallery-3.jpg", "Kit overview 3", "套餐介绍图 3", "gallery")
      ]
    },
    {
      slug: "i2c-current-meter",
      category: "sensors",
      status: "latest",
      tags: ["INA226", "I2C", "current", "ArduPilot", "PX4"],
      title: { en: "FlyingRC I2C External Current Meter", zh: "FlyingRC I2C 外置电流计" },
      summary: { en: "Compact INA226 I2C voltage and current sensor for ArduPilot/PX4 aircraft that need an external current meter.", zh: "基于 INA226 的紧凑型 I2C 电压/电流检测模块，适合需要外置电流计的 ArduPilot/PX4 装机。" },
      specs: { en: ["INA226 I2C voltage/current sensing chip", "2-8S LiPo VBAT range", "16.04 x 27.52 mm board size; socket and no-socket versions"], zh: ["INA226 I2C 电压/电流检测芯片", "VBAT 支持 2-8S LiPo", "尺寸 16.04 x 27.52 mm，提供有插座/无插座版本"] },
      hero: "assets/products/i2c-current-meter/hero.jpg",
      images: [
        img("assets/products/i2c-current-meter/specs.png", "Parameter table", "参数表", "spec"),
        img("assets/products/i2c-current-meter/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/i2c-current-meter/wiring-h7wlite.png", "H7Wlite wiring diagram", "与 H7Wlite 接线图", "diagram"),
        img("assets/products/i2c-current-meter/ardupilot-setup.png", "ArduPilot INA226 parameter setup", "ArduPilot INA226 参数设置", "diagram"),
        img("assets/products/i2c-current-meter/socket-display.jpg", "Socket version display", "有插座版本展示图", "gallery"),
        img("assets/products/i2c-current-meter/socket-front.jpg", "Socket version front photo", "有插座版本正面图", "gallery"),
        img("assets/products/i2c-current-meter/socket-back.jpg", "Socket version back photo", "有插座版本背面图", "gallery"),
        img("assets/products/i2c-current-meter/no-socket-board.jpg", "No-socket board photo", "无插座版本整板图", "gallery"),
        img("assets/products/i2c-current-meter/soldered-wires.png", "Soldered XT60 power wire photo", "焊接 XT60 电源线示意图", "gallery"),
        img("assets/products/i2c-current-meter/package-list.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "l4-can-rm3100",
      category: "sensors",
      tags: ["RM3100", "CAN", "ArduPilot", "PX4"],
      title: { en: "FlyingRC L4CAN RM3100 CAN Compass Module", zh: "FlyingRC L4CAN RM3100 CAN 总线罗盘模块" },
      summary: { en: "Professional CAN-bus RM3100 compass module for remote mounting and cleaner heading data in ArduPilot/PX4 builds.", zh: "专业级 CAN 总线 RM3100 罗盘模块，适合远离干扰源安装，为 ArduPilot/PX4 装机提供更干净的航向数据。" },
      specs: { en: ["RM3100 CAN-bus compass module", "STM32L431RCT6 controller with AP_Periph-style firmware workflow", "29.3 x 29.3 x 9.0 mm board size"], zh: ["RM3100 CAN 总线罗盘模块", "STM32L431RCT6 主控，面向 AP_Periph 类固件流程", "尺寸 29.3 x 29.3 x 9.0 mm"] },
      hero: "assets/products/l4-can-rm3100/hero.jpg",
      images: [
        img("assets/products/l4-can-rm3100/specs.png", "Parameter and package list", "产品参数与发货清单", "spec"),
        img("assets/products/l4-can-rm3100/intro.png", "Product introduction", "产品介绍", "spec"),
        img("assets/products/l4-can-rm3100/dimension.png", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/l4-can-rm3100/render-front.png", "Front 3D render", "正面 3D 渲染图", "gallery"),
        img("assets/products/l4-can-rm3100/front.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/l4-can-rm3100/back-rotated.jpg", "Back product photo", "实物反面图", "gallery"),
        img("assets/products/l4-can-rm3100/package.jpg", "Package contents", "发货清单", "gallery"),
        img("assets/products/l4-can-rm3100/specs-table.png", "Technical parameter table", "技术参数表", "spec"),
        img("assets/products/l4-can-rm3100/wiring-h7d-pro.png", "H7D Pro wiring", "与 H7D Pro 接线图", "diagram")
      ]
    },
    {
      slug: "rm3100-spi",
      category: "sensors",
      status: "latest",
      tags: ["RM3100", "SPI", "compass", "PNI", "3.3V"],
      title: { en: "FlyingRC RM3100 SPI Compass Module", zh: "FlyingRC RM3100 SPI 罗盘模块" },
      summary: { en: "Ultra-low-noise PNI RM3100 three-axis compass module with an 8-pin SPI interface for remote mounting away from magnetic interference.", zh: "采用 PNI RM3100 的超低噪声三轴罗盘模块，提供 8Pin SPI 接口，适合远离磁干扰源安装。" },
      specs: { en: ["PNI RM3100 three-axis geomagnetic sensor", "12.70 x 12.70 x 7.42 mm; 0.53 g", "3.3 V recommended supply; operating range 2.0-3.6 V", "8-pin SPI: VCC, dual GND, DRDY, CLK, MISO, MOSI, SSN"], zh: ["PNI RM3100 三轴地磁传感器", "尺寸 12.70 x 12.70 x 7.42 mm；重量 0.53g", "推荐 3.3V 供电；工作范围 2.0-3.6V", "8Pin SPI：VCC、双 GND、DRDY、CLK、MISO、MOSI、SSN"] },
      hero: "assets/products/rm3100-module/hero.jpg",
      images: [
        img("assets/products/rm3100-module/specs.jpg", "Technical specifications", "技术参数", "spec"),
        img("assets/products/rm3100-module/layout.jpg", "Module layout", "模块布局图", "diagram"),
        img("assets/products/rm3100-module/pinout.jpg", "8-pin SPI pinout", "8Pin SPI 引脚定义", "diagram"),
        img("assets/products/rm3100-module/wiring.jpg", "SPI wiring table", "SPI 接线表", "diagram"),
        img("assets/products/rm3100-module/board.jpg", "Board photo", "整板图", "gallery"),
        img("assets/products/rm3100-module/instructions.jpg", "Installation notes", "安装说明", "gallery")
      ]
    },
    {
      slug: "h7-can-gps",
      category: "sensors",
      status: "eol",
      tags: ["GPS", "CAN", "H7"],
      title: { en: "FlyingRC H7 CAN GPS", zh: "FlyingRC H7 CAN GPS" },
      summary: { en: "CAN GPS product material for ArduPilot-style CAN sensor integration.", zh: "CAN GPS 产品资料，面向 ArduPilot 类 CAN 传感器集成。" },
      specs: { en: ["CAN/GPS navigation accessory", "Provides GPS position data for autonomous flight modes", "Designed for CAN-capable flight-controller workflows"], zh: ["CAN GPS 模块", "H7 产品系列", "包含产品主图"] },
      hero: "assets/products/h7-can-gps/hero.jpg"
    },
    {
      slug: "ublox-m10-gps",
      category: "sensors",
      tags: ["GPS", "U-Blox", "M10"],
      title: { en: "FlyingRC U-Blox M10 GPS", zh: "FlyingRC U-Blox M10 GPS" },
      summary: { en: "U-Blox M10 GPS product material for navigation builds.", zh: "U-Blox M10 GPS 产品资料，用于导航类装机。" },
      specs: { en: ["U-Blox M10 GNSS module", "Provides position data for navigation and return-to-home modes", "Manual family covers 18 x 18, 20 x 20, and 28 x 28 mm variants"], zh: ["U-Blox M10 GPS", "导航模块", "包含产品渲染图"] },
      hero: "assets/products/ublox-m10-gps/product-render-20260527.jpg"
    },
    {
      slug: "digital-airspeed",
      category: "sensors",
      status: "eol",
      tags: ["airspeed", "fixed-wing", "sensor"],
      title: { en: "FlyingRC Pitotless Digital Airspeed Meter", zh: "FlyingRC 无空速管数字空速计" },
      summary: { en: "Digital airspeed product material for fixed-wing users who want a no-pitot airspeed option.", zh: "无空速管数字空速计资料，面向需要无空速管方案的固定翼用户。" },
      specs: { en: ["Pitotless digital airspeed sensor", "Fixed-wing airspeed aid for ArduPilot workflows", "Supports automatic thermal soaring use cases"], zh: ["数字空速传感器", "无空速管定位", "固定翼传感器配件"] },
      hero: "assets/products/digital-airspeed/hero-i2c-pitotless-20260811.jpg",
      images: [
        img("assets/products/digital-airspeed/photo-package-20260508.jpg", "Packaged product photo", "包装实物图", "gallery"),
        img("assets/products/digital-airspeed/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/digital-airspeed/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/digital-airspeed/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery")
      ]
    },
    {
      slug: "i2c-digital-airspeed",
      category: "sensors",
      status: "latest",
      tags: ["MS4525D", "I2C", "airspeed", "fixed-wing", "ArduPilot"],
      title: { en: "FlyingRC I2C Digital Airspeed Meter", zh: "FlyingRC I2C 数字空速计" },
      summary: { en: "Latest integrated I2C airspeed sensor and pitot-tube design for fixed-wing ArduPilot setups.", zh: "最新一代 I2C 数字空速计与空速管一体设计，面向固定翼 ArduPilot 装机。" },
      specs: { en: ["MS4525D-compatible digital airspeed sensor with I2C interface", "25 x 15 x 5 mm; 2.8 g", "512 Hz sampling and 8 Hz refresh rate", "0.5 Pa RMS pressure measurement accuracy with temperature compensation"], zh: ["MS4525D 兼容数字空速传感器，I2C 接口", "尺寸 25 x 15 x 5 mm；重量 2.8g", "采样率 512Hz，刷新率 8Hz", "支持温度补偿；压力测量精度 0.5Pa RMS"] },
      hero: "assets/products/i2c-digital-airspeed/hero.png",
      images: [
        img("assets/products/i2c-digital-airspeed/front.png", "Front product view", "产品正面图", "gallery"),
        img("assets/products/i2c-digital-airspeed/back.png", "Back product view", "产品背面图", "gallery"),
        img("assets/products/i2c-digital-airspeed/connector.png", "Connector view", "接口图", "gallery"),
        img("assets/products/i2c-digital-airspeed/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "l4-can-rcgps-adapter",
      category: "modules",
      status: "eol",
      tags: ["CAN", "serial", "PWM", "adapter"],
      title: { en: "FlyingRC L4 CAN RCGPS Adapter CAN Serial and PWM Expansion Board", zh: "FlyingRC L4 CAN RCGPS Adapter CAN 总线串口 & PWM 扩展板" },
      summary: { en: "CAN bus adapter and serial/PWM expansion board material for peripheral integration.", zh: "CAN 总线串口与 PWM 扩展板资料，用于外设集成。" },
      specs: { en: ["CAN bus serial and PWM expansion board", "Runs AP_Periph-style firmware workflow", "Uses GH1.25 connector ecosystem"], zh: ["CAN 总线适配器", "串口与 PWM 扩展", "外设集成板"] },
      hero: "assets/products/l4-can-rcgps-adapter/product-render-20260527.jpg"
    },
    {
      slug: "elrs-24g-diversity",
      category: "modules",
      tags: ["ELRS", "2.4GHz", "receiver", "diversity"],
      title: { en: "FlyingRC ELRS 2.4G True Diversity Receiver", zh: "FlyingRC ELRS 2.4G 分集接收机" },
      summary: { en: "ELRS 2.4GHz true-diversity receiver page with curated product images.", zh: "ELRS 2.4G 分集接收机资料页，包含整理后的产品图。" },
      specs: { en: ["ExpressLRS 2.4 GHz diversity receiver", "Factory firmware version documented as ELRS 3.5.5", "Transmitter module firmware 3.x or newer recommended"], zh: ["ELRS 2.4G 接收机", "分集接收机定位", "包含整理后的产品图"] },
      hero: "assets/products/elrs-24g-diversity/hero.jpg",
      images: [
        img("assets/products/elrs-24g-diversity/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/elrs-24g-diversity/usage.jpg", "Usage guide", "使用方法", "diagram"),
        img("assets/products/elrs-24g-diversity/front-back.jpg", "Front and back view", "正反面图", "gallery"),
        img("assets/products/elrs-24g-diversity/board.jpeg", "Board photo", "整板图", "gallery"),
        img("assets/products/elrs-24g-diversity/photo-front-20260508.jpg", "Front receiver photo", "接收机正面实物图", "gallery"),
        img("assets/products/elrs-24g-diversity/photo-back-20260508.jpg", "Back receiver photo", "接收机背面实物图", "gallery"),
        img("assets/products/elrs-24g-diversity/photo-pair-20260508.jpg", "Receiver pair photo", "接收机组合实物图", "gallery"),
        img("assets/products/elrs-24g-diversity/package.jpg", "Package contents", "发货清单", "gallery")
      ]
    },
    {
      slug: "am32-configurator",
      category: "modules",
      tags: ["AM32", "ESC", "configurator", "tool"],
      title: { en: "FlyingRC AM32 ESC Configurator Tool", zh: "FlyingRC AM32 电调调参器" },
      summary: { en: "AM32 ESC configuration adapter with connection diagrams, dimension image, and firmware-support image.", zh: "AM32 电调调参器，包含连接图、尺寸图和多固件支持说明图。" },
      specs: { en: ["USB programmer for AM32 ESCs", "Connects computer tuning software to the ESC signal wire", "Offline firmware flashing workflow recommended"], zh: ["AM32 电调调参工具", "电调连接参考", "资料展示支持多种固件流程"] },
      hero: "assets/products/am32-configurator/hero.jpg",
      images: [
        img("assets/products/am32-configurator/firmware.jpg", "Firmware support", "固件支持", "spec"),
        img("assets/products/am32-configurator/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/am32-configurator/wiring.jpg", "ESC connection", "电调连接图", "diagram"),
        img("assets/products/am32-configurator/front.jpg", "Front view", "正面图", "gallery"),
        img("assets/products/am32-configurator/back.jpg", "Back view", "反面图", "gallery"),
        img("assets/products/am32-configurator/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/am32-configurator/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery"),
        img("assets/products/am32-configurator/photo-side-20260508.jpg", "USB side photo", "USB 侧实物图", "gallery")
      ]
    },
    {
      slug: "pdb-12s-400a",
      category: "modules",
      tags: ["PDB", "12S", "440A", "FPV"],
      title: { en: "FlyingRC 12S 440A FPV Power Distribution Board", zh: "FlyingRC 12S 440A 穿越机分电板" },
      summary: { en: "High-current FPV power distribution board with 5 V / 12 V BEC outputs and top/bottom render references.", zh: "大电流穿越机分电板，带 5V / 12V BEC 输出，并包含正反面渲染图参考。" },
      specs: { en: ["High-current FPV power distribution board", "6-60 V / 2-12S LiPo input range", "4 x 80 A continuous / 110 A peak ESC outputs; current sensor range up to 440 A"], zh: ["穿越机大电流分电板", "6-60 V / 2-12S LiPo 输入", "4 路 80A 持续 / 110A 峰值电调输出；电流检测最高 440A"] },
      hero: "assets/products/pdb-12s-400a/hero.jpg",
      images: [
        img("assets/products/pdb-12s-400a/specs.jpg", "Parameter table", "参数表", "spec"),
        img("assets/products/pdb-12s-400a/dimension.jpg", "Dimension drawing", "尺寸图", "diagram"),
        img("assets/products/pdb-12s-400a/wiring-esc.jpeg", "ESC wiring", "与电调连接图", "diagram"),
        img("assets/products/pdb-12s-400a/wiring-fc.jpeg", "Flight controller wiring", "与飞控连接图", "diagram"),
        img("assets/products/pdb-12s-400a/board.jpeg", "Board photo", "整板图", "gallery"),
        img("assets/products/pdb-12s-400a/bottom.jpg", "Bottom render", "反面渲染图", "gallery"),
        img("assets/products/pdb-12s-400a/photo-front-20260508.jpg", "Front product photo", "实物正面图", "gallery"),
        img("assets/products/pdb-12s-400a/photo-back-20260508.jpg", "Back product photo", "实物背面图", "gallery"),
        img("assets/products/pdb-12s-400a/photo-angle-20260508.jpg", "Angled product photo", "实物斜视图", "gallery")
      ]
    }
  ]
};

const PRODUCT_EXPLANATIONS = {
  "f435wing-mini-osd": explain({
    manual: "FlyingRC F435Wing Mini OSD版 说明书.docx",
    whatEn: "An ultra-compact AT32F435 fixed-wing flight controller that combines stabilization, navigation interfaces, servo and ESC outputs, an AT7456F analog OSD, and a digital VTX connector on one board.",
    whatZh: "一块超紧凑 AT32F435 固定翼飞控，在单板上集成姿态控制、导航接口、舵机/电调输出、AT7456F 模拟 OSD 和数字图传接口。",
    bestEn: ["Small and micro fixed-wing aircraft that need analog OSD or digital VTX connectivity.", "INAV 9.1.0 builds that need a compact board with seven PWM outputs.", "Builders choosing between the CGU7 1 MB and CMU7 4 MB hardware variants."],
    bestZh: ["需要模拟 OSD 或数字图传接口的小型、微型固定翼。", "需要 7 路 PWM 的 INAV 9.1.0 紧凑装机。", "按容量选择 CGU7 1MB 或 CMU7 4MB 硬件版本的用户。"],
    featuresEn: ["AT32F435CGU7 or AT32F435CMU7 MCU at 288 MHz with 384 KB SRAM.", "BMI270 six-axis IMU, SPA06-003 barometer, dual sensor LDOs, and AT7456F analog OSD.", "Seven PWM outputs with one output shared with WS2812 LED, three UARTs, I2C, SBUS, passive buzzer output, and USB-C.", "Six-pin digital VTX interface provides UART4 RX/TX, SBUS, two grounds, and battery passthrough power."],
    featuresZh: ["AT32F435CGU7 或 AT32F435CMU7 主控，288MHz，384KB SRAM。", "BMI270 六轴 IMU、SPA06-003 气压计、双传感器 LDO 与 AT7456F 模拟 OSD。", "7 路 PWM（其中一路兼作 WS2812 LED）、3 路 UART、I2C、SBUS、无源蜂鸣器接口和 USB-C。", "6P 数字图传接口提供 UART4 RX/TX、SBUS、双 GND 与电池直通供电。"],
    techEn: ["CGU7: 1 MB Flash; CMU7: 4 MB Flash.", "Dimensions: 27.96 x 20.29 x 11.4 mm; mounting pattern: 17.8 x 17.8 mm with M1.2 holes.", "Weight: 3.1 g without pin headers, 5.1 g with soldered headers.", "Battery voltage sensing and VTX passthrough range: 2.5-30 V / 1-6S LiPo; external I2C current meter supported."],
    techZh: ["CGU7：1MB Flash；CMU7：4MB Flash。", "尺寸：27.96 x 20.29 x 11.4mm；安装孔距：17.8 x 17.8mm，M1.2。", "重量：未焊排针 3.1g，焊好排针 5.1g。", "电池电压检测与图传直通范围：2.5-30V / 1-6S LiPo；支持外置 I2C 电流计。"],
    setupEn: ["Power the flight controller itself from an external regulated 5 V source.", "Use the SH1.0 2P VBAT connector only for voltage sensing and battery passthrough power to the digital VTX.", "Flash the matching INAV 9.1.0 target in INAV Configurator: FLYINGRCF435WINGMINI for CGU7 or FLYINGRCF435WINGMINI_CMU7 for CMU7."],
    setupZh: ["飞控本体必须使用外部稳定 5V 电源供电。", "SH1.0 2P VBAT 接口仅用于电压检测和数字图传电池直通供电。", "在 INAV Configurator 中按主控版本刷写 INAV 9.1.0：CGU7 使用 FLYINGRCF435WINGMINI，CMU7 使用 FLYINGRCF435WINGMINI_CMU7。"],
    watchEn: ["The VBAT/SH1.0 connector cannot power the flight controller.", "Verify that the digital VTX supports the connected battery voltage before using passthrough power.", "Only INAV is supported; do not flash ArduPilot, Betaflight, or PX4 firmware."],
    watchZh: ["VBAT/SH1.0 接口不能给飞控本体供电。", "使用电池直通供电前，必须确认数字图传支持所接电池电压。", "本产品仅支持 INAV，请勿刷写 ArduPilot、Betaflight 或 PX4 固件。"]
  }),
  "f4wing-mini-mk1": explain({
    manual: "FlyingRC® F4Wing Mini MK1 Fixed-Wing Flight Controller Product Manual.docx",
    whatEn: "An ultra-small fixed-wing autopilot board. It is the central controller for a small plane: it reads sensors, runs ArduPilot/INAV-style flight firmware, outputs servo/PWM control, and provides connectors for receiver and HD video equipment.",
    whatZh: "一块超小型固定翼自动驾驶飞控。它是小飞机的核心控制板：读取传感器、运行 ArduPilot/INAV 类飞控固件、输出舵机/PWM 控制，并连接接收机和高清图传设备。",
    bestEn: ["Small and micro fixed-wing aircraft where board size and weight matter.", "Builders who want ArduPlane/INAV capability in a compact airframe.", "HD digital video builds using DJI HD, Walksnail HD, OpenIPC, or similar HD OSD workflows."],
    bestZh: ["空间和重量都很紧张的小型/微型固定翼。", "想在小机身里使用 ArduPlane/INAV 能力的玩家。", "使用 DJI HD、Walksnail HD、OpenIPC 等高清图传/HD OSD 的装机。"],
    featuresEn: ["STM32F405RGT6 MCU with BMI270 IMU on current units released from May 25, 2026; earlier units used ICM42688P/ICM42605.", "SPL06/SPA06 barometer, with dual independent sensor LDOs to improve sensor power stability.", "3 UARTs plus SBUS, 6 PWM outputs, I2C, Type-C USB, HD VTX plug-in, and ELRS receiver plug-in support.", "Supports AP, Betaflight, and INAV; ArduPlane is recommended for fixed-wing use."],
    featuresZh: ["STM32F405RGT6 主控；2026/5/25 日以后上市版本使用 BMI270 IMU，早期版本使用 ICM42688P/ICM42605。", "搭配 SPL06/SPA06 气压计，传感器使用双独立 LDO 供电，提高供电稳定性。", "提供 3 路 UART、SBUS、6 路 PWM、I2C、Type-C USB、高清图传直插和 ELRS 接收机直插支持。", "支持 AP、Betaflight、INAV；固定翼推荐使用 ArduPlane。"],
    techEn: ["Dimensions: 27.9 x 20.3 x 11.2 mm.", "Weight: 2.8 g without pin headers, about 5.3 g with soldered headers.", "Voltage detection range: 2.5-30 V / 1-6S LiPo; flight controller power input is 5 V.", "No onboard analog current sensor; external I2C current sensor is supported."],
    techZh: ["尺寸：27.9 x 20.3 x 11.2 mm。", "重量：未焊排针 2.8 g，焊接排针约 5.3 g。", "电压检测范围：2.5-30 V / 1-6S LiPo；飞控本体供电为 5 V。", "无板载模拟电流计，支持外接 I2C 电流计。"],
    setupEn: ["Use the SH1.0 2P connector only for battery voltage detection and HD VTX direct-power input, not as the flight-controller power input.", "For fixed-wing aircraft, start from ArduPlane wiring examples and check UART/SERIAL mapping carefully.", "Use USB-C for configuration; mobile ground-station setup is possible with a USB-C to USB-C cable."],
    setupZh: ["SH1.0 2P 接口仅用于电池电压检测和 HD 图传直通供电，不是飞控本体供电输入。", "固定翼建议从 ArduPlane 接线示例开始，并仔细核对 UART/SERIAL 映射。", "可通过 USB-C 配置；使用 USB-C 对 USB-C 线可连接手机地面站。"],
    watchEn: ["Analog OSD is not supported on this board.", "Because there is no onboard BEC, plan a clean 5 V supply for the flight controller."],
    watchZh: ["本飞控不支持模拟 OSD。", "由于没有板载 BEC，需要为飞控规划干净稳定的 5 V 供电。"]
  }),
  "h7wlite-mk1": explain({
    manual: "FlyingRC® F4WSE Pro Flight Controller Product Manual.docx / fixed-wing family materials",
    whatEn: "A higher-performance fixed-wing flight controller page for users choosing an H7-class board for more processing headroom and richer peripheral integration.",
    whatZh: "面向固定翼的 H7 级飞控资料页，适合需要更高处理性能和更多外设集成空间的用户。",
    bestEn: ["Larger or more capable fixed-wing builds than the ultra-mini F4Wing class.", "ArduPilot fixed-wing users who want H7-class performance.", "Builds that need CAN/GPS/peripheral expansion planning."],
    bestZh: ["比 F4Wing Mini 更大或功能更多的固定翼装机。", "希望使用 H7 级性能的 ArduPilot 固定翼用户。", "需要规划 CAN/GPS/外设扩展的装机。"],
    featuresEn: ["H743-class fixed-wing positioning.", "Public assets include layout, dimension, battery wiring, and product render references.", "Works as the high-end fixed-wing controller family entry in this wiki."],
    featuresZh: ["H743 级固定翼飞控定位。", "公开资料包含布局、尺寸、电池接线和产品渲染参考。", "在本资料库中作为高配固定翼飞控系列入口。"],
    techEn: ["Check the dimension and battery wiring images before selecting an enclosure or mounting stack.", "Use the product image and wiring references to plan power and peripheral routing."],
    techZh: ["选择机舱安装位置或叠层前，先查看尺寸图和电池接线图。", "使用产品图和接线图规划电源与外设走线。"],
    setupEn: ["Treat this as a fixed-wing autopilot board: verify power input, GPS/compass, receiver, telemetry, and servo outputs before powering the full airframe."],
    setupZh: ["按固定翼自动驾驶飞控使用：上电前核对电源、GPS/罗盘、接收机、数传和舵机输出。"],
    watchEn: ["Exact connector pinout should be taken from the layout image/manual before wiring."],
    watchZh: ["实际接线前必须以布局图/说明书中的接口定义为准。"]
  }),
  "f4wse-f405": explain({
    manual: "FlyingRC F4WSE MK1.5 说明书.docx",
    whatEn: "A fixed-wing F405 autopilot board for ArduPilot/INAV-style airplane builds. It sits between receiver/sensors and aircraft servos/ESC, handling stabilization, navigation, telemetry, and flight-mode control.",
    whatZh: "面向固定翼的 F405 自动驾驶飞控，适合 ArduPilot/INAV 类飞机装机。它连接接收机、传感器、舵机和电调，负责姿态稳定、导航、数传和飞行模式控制。",
    bestEn: ["Fixed-wing aircraft needing a mature F405-class controller.", "Users who want fixed-wing firmware support without moving to a larger H7 board.", "Builds where wiring diagrams and ArduPilot serial mapping matter."],
    bestZh: ["需要成熟 F405 级飞控的固定翼飞机。", "想使用固定翼固件但不需要更大 H7 板的用户。", "重视接线图和 ArduPilot 串口映射的装机。"],
    featuresEn: ["F405 fixed-wing controller family.", "Manual materials include technical parameters, product features, firmware use, and wiring sections.", "Designed around open-source flight firmware workflows."],
    featuresZh: ["F405 固定翼飞控系列。", "说明书包含技术参数、产品特点、固件使用和接线章节。", "围绕开源飞控固件工作流设计。"],
    techEn: ["Use the wiring/layout image as the authoritative connector reference.", "Check firmware documentation before mapping UART/USART to ArduPilot SERIAL numbers."],
    techZh: ["以接线/布局图作为接口定义依据。", "配置前核对 UART/USART 与 ArduPilot SERIAL 编号的对应关系。"],
    setupEn: ["Start with the fixed-wing firmware recommended in the manual, then verify receiver, GPS, telemetry, PWM outputs, and power before motor testing."],
    setupZh: ["从说明书推荐的固定翼固件开始，先验证接收机、GPS、数传、PWM 输出和供电，再进行动力测试。"],
    watchEn: ["ArduPilot SERIAL numbers do not always match the printed UART/USART names."],
    watchZh: ["ArduPilot 的 SERIAL 编号不一定等于板子丝印上的 UART/USART 名称。"]
  }),
  "f4wse-pro": explain({
    manual: "FlyingRC® F4WSE Pro Flight Controller Product Manual.docx",
    whatEn: "A Pro fixed-wing F405 flight controller intended for ArduPlane/INAV aircraft. It acts as the aircraft’s autopilot, sensor hub, and servo/ESC output controller.",
    whatZh: "Pro 版 F405 固定翼飞控，面向 ArduPlane/INAV 飞机。它是飞机的自动驾驶核心、传感器中枢和舵机/电调输出控制器。",
    bestEn: ["Fixed-wing users who want a richer F4WSE family board.", "ArduPlane or INAV builds where open firmware and wiring clarity are important.", "Users upgrading from simpler fixed-wing controllers."],
    bestZh: ["希望使用更完整 F4WSE 系列板子的固定翼用户。", "重视开源固件和清晰接线的 ArduPlane/INAV 装机。", "从更简单固定翼飞控升级的用户。"],
    featuresEn: ["Supports ArduPilot and INAV; ArduPlane is the fixed-wing recommended path in the manual.", "Directly compatible with MatekF405-TE firmware according to the manual.", "Manual includes UART/SERIAL mapping and default function references.", "Built-in analog video switch for two camera inputs."],
    featuresZh: ["支持 ArduPilot 和 INAV；说明书中固定翼推荐 ArduPlane。", "说明书标注可直接兼容 MatekF405-TE 固件。", "说明书包含 UART/SERIAL 映射和默认功能参考。", "内置双路模拟摄像头视频切换功能。"],
    techEn: ["F405-class flight controller.", "ArduPilot target branch: FlyingRC-Official/ardupilot add_FlyingRC_F4WSE_Pro_target.", "Dual analog camera switching is controlled by PB5, defined in the F4WSE Pro ArduPilot hwdef as PINIO2 / GPIO82.", "Use S12/LED notes from the manual when configuring LED strip behavior.", "Firmware support and wiring are documented in the manual."],
    techZh: ["F405 级飞控。", "ArduPilot 目标分支：FlyingRC-Official/ardupilot 的 add_FlyingRC_F4WSE_Pro_target。", "双路模拟摄像头切换由 PB5 控制，在 F4WSE Pro 的 ArduPilot hwdef 中定义为 PINIO2 / GPIO82。", "配置 LED 灯带时参考说明书中的 S12/LED 说明。", "说明书提供固件支持和接线说明。"],
    setupEn: ["For fixed-wing aircraft, start with ArduPlane or INAV rather than generic multirotor assumptions.", "Check the SERIAL mapping table before assigning telemetry, GPS, or receiver ports.", "For dual analog camera switching, connect the two camera video signals to C0 and C1, connect the analog VTX video input to VTX, and keep both cameras and the VTX on a shared ground.", "In ArduPilot, configure the switch as Relay2 with RELAY2_PIN=82 and RELAY2_FUNCTION=1, then assign an RC channel such as RC8_OPTION=34 to toggle the active camera input."],
    setupZh: ["固定翼装机应从 ArduPlane 或 INAV 逻辑出发，不要套用普通多旋翼默认假设。", "分配数传、GPS、接收机接口前先查看 SERIAL 映射表。", "使用双模拟摄像头切换时，两路摄像头视频信号分别接 C0 和 C1，模拟图传的视频输入接 VTX，并确保两路摄像头和图传共地。", "在 ArduPilot 中可将该切换脚配置为 Relay2：设置 RELAY2_PIN=82、RELAY2_FUNCTION=1，再将一个遥控通道设为 RC8_OPTION=34 等 Relay2 开关来切换当前画面。"],
    watchEn: ["Use the BDShot ArduPlane firmware only for ESC setups that need bidirectional DShot; standard PWM/servo builds should use the normal ArduPlane firmware.", "Do not guess port numbers from silkscreen alone; use the firmware mapping table.", "Power cameras and analog VTX only within their rated voltage range; if the default camera is opposite to the expected input, invert Relay2 or swap the C0/C1 signal wires."],
    watchZh: ["BDShot 版 ArduPlane 固件仅用于需要双向 DShot 的电调配置；普通 PWM/舵机输出装机请使用标准 ArduPlane 固件。", "不要只凭丝印猜串口编号，要按固件映射表配置。", "摄像头和模拟图传必须按设备额定电压供电；若默认画面与预期相反，可反转 Relay2 或交换 C0/C1 视频信号线。"]
  }),
  "f4d-mk1": explain({
    manual: "FlyingRC® F4D MK1 F405 FPV Flight Controller (2030.5mm Mounting) Product Manual.docx",
    whatEn: "A compact F405 FPV flight controller for multirotor builds. It runs Betaflight by default and connects the receiver, ESC signal harness, VTX/camera, OSD, buzzer, LEDs, and other FPV peripherals.",
    whatZh: "一块紧凑型 F405 穿越机飞控。默认运行 Betaflight，负责连接接收机、电调信号线、图传/相机、OSD、蜂鸣器、LED 和其他穿越机外设。",
    bestEn: ["FPV drones needing 20 x 20 mm or 30.5 x 30.5 mm mounting flexibility.", "Digital video builds using DJI O4 or similar HD VTX wiring.", "Users who want BF as factory default with AP/INAV options available."],
    bestZh: ["需要 20 x 20 mm 或 30.5 x 30.5 mm 孔距灵活安装的穿越机。", "使用 DJI O4 或类似高清图传接线的数字图传装机。", "希望默认使用 BF，同时保留 AP/INAV 可选项的用户。"],
    featuresEn: ["STM32F405RGT6 MCU.", "Supports AP, Betaflight, and INAV; factory default is Betaflight.", "Onboard 9 V BEC for VTX/camera, switchable through PINIO1/User1.", "Wiring diagram applies to BF, AP, and INAV workflows."],
    featuresZh: ["STM32F405RGT6 主控。", "支持 AP、Betaflight、INAV；出厂默认 Betaflight。", "板载 9 V BEC 可给图传/相机供电，并可通过 PINIO1/User1 控制。", "接线图适用于 BF、AP、INAV 使用流程。"],
    techEn: ["Input: 7-28 V DC / 2-6S LiPo.", "When using 2S/3S, VTX BEC input must be above 9.8 V for stable output; 3S-6S is strongly recommended.", "Supports HD/analog FPV wiring depending on diagram and firmware setup."],
    techZh: ["输入：7-28 V DC / 2-6S LiPo。", "使用 2S/3S 时，图传 BEC 输入需高于 9.8 V 才能稳定输出；强烈建议 3S-6S。", "按接线图和固件设置支持高清/模拟 FPV 外设。"],
    setupEn: ["Remove propellers before firmware flashing or bench tests.", "Use the BF wiring examples first if staying on factory firmware.", "For ArduPilot, verify SERIAL mapping because SERIAL numbers do not correspond one-to-one with UART labels."],
    setupZh: ["刷固件或台架测试前必须拆桨。", "如果使用出厂固件，优先参考 BF 接线示例。", "使用 ArduPilot 时要核对 SERIAL 映射，因为 SERIAL 编号不与 UART 丝印一一对应。"],
    watchEn: ["VTX power stability depends on battery voltage; check BEC voltage requirements before long bench sessions."],
    watchZh: ["图传供电稳定性与电池电压有关，长时间台架测试前要确认 BEC 电压条件。"]
  }),
  "h7d-h743": explain({
    manual: "FlyingRC® H7D MK1 H743 FPV Flight Controller Product Manual.docx",
    whatEn: "A high-performance H743 FPV flight controller. It is the main control board for a multirotor: it runs Betaflight/AP/INAV firmware, reads dual gyros and barometer, drives ESC/PWM outputs, and powers/controls VTX and camera accessories.",
    whatZh: "一块高性能 H743 穿越机飞控。它是多旋翼的主控板：运行 Betaflight/AP/INAV 固件，读取双陀螺仪和气压计，输出电调/PWM 控制，并给图传和相机等外设供电/控制。",
    bestEn: ["FPV builds needing H743 processing headroom.", "Pilots using DJI O4, ELRS receiver, analog VTX, LEDs, buzzer, and multiple UART peripherals.", "Users who want onboard 5 V and 12 V BECs with switchable VTX power."],
    bestZh: ["需要 H743 性能余量的穿越机装机。", "使用 DJI O4、ELRS 接收机、模拟图传、LED、蜂鸣器和多个串口外设的玩家。", "需要板载 5 V 和 12 V BEC，并希望可开关图传供电的用户。"],
    featuresEn: ["STM32H743VIT6 MCU, dual ICM-42688-P gyros, and DPS310/DPS368 barometer.", "Analog/HD OSD, 7 UARTs, 9 PWM channels, I2C, ADC RSSI, LED, buzzer, Type-C USB, and 128 MB onboard flash.", "Dual BECs: 5 V/4 A for devices and 12 V/2 A for VTX/camera.", "Switchable onboard 12 V BEC via PINIO1/User1 to reduce VTX overheating during bench testing."],
    featuresZh: ["STM32H743VIT6 主控，双 ICM-42688-P 陀螺仪，DPS310/DPS368 气压计。", "支持模拟/高清 OSD，7 路 UART、9 路 PWM、I2C、ADC RSSI、LED、蜂鸣器、Type-C USB 和 128 MB 板载黑匣子闪存。", "双 BEC：5 V/4 A 给设备供电，12 V/2 A 给图传/相机供电。", "板载 12 V BEC 可通过 PINIO1/User1 开关，减少台架测试时图传过热。"],
    techEn: ["Input: 12-28 V DC / 3-6S LiPo.", "Recommended: 5S/6S LiPo or 4S LiHV for stable VTX BEC margin; for 3S/4S ensure VTX BEC input is above 12.8 V.", "Dimensions: 36.6 x 36.6 x 7.45 mm; weight about 9.3 g.", "Firmware target: FLRC H7D; factory default Betaflight 4.4.2.", "ArduPilot target branch: FlyingRC-Official/ardupilot add_FlyingRC_H7D_target.", "Betaflight config branch: FlyingRC-Official/betaflight-config Add-FlyingRC-H7D-Config."],
    techZh: ["输入：12-28 V DC / 3-6S LiPo。", "推荐 5S/6S LiPo 或 4S LiHV；使用 3S/4S 时需确保图传 BEC 输入高于 12.8 V。", "尺寸：36.6 x 36.6 x 7.45 mm；重量约 9.3 g。", "固件目标：FLRC H7D；出厂默认 Betaflight 4.4.2。", "ArduPilot 目标分支：FlyingRC-Official/ardupilot 的 add_FlyingRC_H7D_target。", "Betaflight 配置分支：FlyingRC-Official/betaflight-config 的 Add-FlyingRC-H7D-Config。"],
    setupEn: ["Use the product wiring diagrams for DJI O4, ELRS, analog VTX, and other peripherals.", "Firmware is compiled by FlyingRC and may not appear in the public Betaflight target list.", "Choose the firmware path that matches your build, then verify board target, wiring, and sensor orientation before flight."],
    setupZh: ["按产品接线图连接 DJI O4、ELRS、模拟图传等外设。", "固件由 FlyingRC 编译，可能不在 Betaflight 公共目标列表中。", "请按装机用途选择对应固件，并在飞行前确认板级目标、接线和传感器方向。"],
    watchEn: ["Check battery voltage before relying on the 12 V VTX output.", "ArduPilot SERIAL numbers do not correspond one-to-one with UART labels."],
    watchZh: ["依赖 12 V 图传输出前必须确认电池电压条件。", "ArduPilot SERIAL 编号不与 UART 丝印一一对应。"]
  }),
  "h7d-pro": explain({
    manual: "FlyingRC® H7D Pro MK1 H743 FPV Flight Controller Product Manual.docx",
    whatEn: "A Pro H743 FPV flight controller for feature-rich multirotor builds. It performs the same central role as H7D but uses the Pro variant material and a switchable 9 V VTX/camera BEC.",
    whatZh: "Pro 版 H743 穿越机飞控，面向功能更丰富的多旋翼装机。它承担 H7D 同类主控职责，并使用 Pro 版本资料与可开关 9 V 图传/相机 BEC。",
    bestEn: ["FPV builds requiring H743 performance with Pro-family layout.", "Digital/analog video setups where switchable VTX power is useful.", "Users who want dual gyro/barometer stability features."],
    bestZh: ["需要 H743 性能和 Pro 系列布局的穿越机装机。", "需要可开关图传供电的数字/模拟图传装机。", "希望使用双陀螺仪和气压计稳定性特性的用户。"],
    featuresEn: ["STM32H743VIT6 MCU family with dual high-precision gyros and barometer.", "Switchable onboard 9 V BEC controlled through PINIO1/User1.", "BF, AP, INAV, and PX4 firmware paths are documented; factory default is BF4.4.2."],
    featuresZh: ["STM32H743VIT6 主控系列，配备双高精度陀螺仪和气压计。", "板载 9 V BEC 可通过 PINIO1/User1 控制。", "说明书包含 BF、AP、INAV 与 PX4 固件路径；出厂默认 BF4.4.2。"],
    techEn: ["Firmware target: FLRC H7D.", "PX4 board port: FlyingRC-Official/PX4-Autopilot branch FlyingRC-H7D-Pro-Board.", "ArduPilot target branch: FlyingRC-Official/ardupilot pr-flyingrch7dpro-upstream.", "Betaflight config branch: FlyingRC-Official/betaflight-config Add-FlyingRC-H7D-Pro-Config.", "LED pad is S13 and can be configured in Betaflight; AP firmware can show flight-controller status through WS2812 LEDs."],
    techZh: ["固件目标：FLRC H7D。", "PX4 板级移植：FlyingRC-Official/PX4-Autopilot 的 FlyingRC-H7D-Pro-Board 分支。", "ArduPilot 目标分支：FlyingRC-Official/ardupilot 的 pr-flyingrch7dpro-upstream。", "Betaflight 配置分支：FlyingRC-Official/betaflight-config 的 Add-FlyingRC-H7D-Pro-Config。", "LED 焊盘为 S13，可在 Betaflight 中配置；AP 固件可用 WS2812 显示飞控状态。"],
    setupEn: ["Use the H7D Pro wiring references before connecting video, receiver, and LED accessories.", "Do not infer ArduPilot SERIAL numbers from UART labels without the mapping table."],
    setupZh: ["连接图传、接收机和 LED 外设前，先查看 H7D Pro 接线参考。", "不要在未查看映射表的情况下用 UART 丝印推断 ArduPilot SERIAL 编号。"],
    watchEn: ["Choose the firmware path that matches your build, and verify the board target, wiring, and sensor orientation before flight."],
    watchZh: ["请按装机用途选择对应固件，并在飞行前确认板级目标、接线和传感器方向。"]
  }),
  "am32-4in1-75a": escExplain("FlyingRC® 4IN1 75A ESC for FPV Drones – Product Manual.docx", "A four-in-one ESC for FPV drones. It takes one battery input and independently drives four brushless motors from flight-controller throttle signals.", "四合一穿越机电调。它接收一个电池输入，并根据飞控油门信号分别驱动四个无刷电机。", ["High-current FPV builds needing a 75 A x 4 ESC.", "5-inch to larger FPV builds where thermal and current margin matter.", "AM32 users who want configurable open-source ESC firmware."], ["需要 75A x4 电调的大电流穿越机。", "重视散热和电流余量的 5 寸或更大穿越机。", "希望使用可配置 AM32 开源电调固件的用户。"], ["QF32F4AK8U7 32-bit MCU with ID6288 gate driver.", "Infineon IRF7480 gold-packaged MOSFETs.", "10-layer 2 oz PCB with copper strip current assistance.", "Pre-flashed with AM32 firmware."], ["QF32F4AK8U7 32 位 MCU，集成 ID6288 栅极驱动。", "Infineon IRF7480 金封 MOSFET。", "10 层 2 oz PCB，并使用铜条辅助过流。", "出厂预刷 AM32 固件。"], ["Input: 9-30 V / 3-7S LiPo or 3-6S LiHV.", "Continuous current: 75 A per channel for 45 seconds under manual test conditions.", "Burst current: 85 A per channel under manual test conditions.", "Size: 45 x 45.2 x 5.5 mm; mounting: 30.5 x 30.5 mm M3; weight: 18.6 g."], ["输入：9-30 V / 3-7S LiPo 或 3-6S LiHV。", "持续电流：说明书测试条件下单路 75 A 持续 45 秒。", "瞬时电流：说明书测试条件下单路 85 A。", "尺寸：45 x 45.2 x 5.5 mm；孔距：30.5 x 30.5 mm M3；重量：18.6 g。"]),
  "am32-4in1-45a": escExplain("FlyingRC® 4IN1 45A ESC for FPV Drones Product Manual.docx", "A 45 A four-in-one AM32 ESC for FPV drones, intended to drive four brushless motors from one compact board.", "一块 45 A 四合一 AM32 穿越机电调，用一块紧凑电调板驱动四个无刷电机。", ["FPV builds that need a lighter current class than the 75 A ESC.", "AM32 firmware users who want configurable motor behavior.", "Builds where a single 4-in-1 ESC simplifies wiring."], ["电流需求低于 75A 版本的穿越机装机。", "希望使用 AM32 固件调参的用户。", "希望用单块四合一电调简化走线的装机。"], ["Pre-flashed with AM32 firmware.", "Supports DSHOT150/300/600, OneShot, PWM and other control signal inputs.", "Manual includes firmware flashing and parameter setting workflow."], ["出厂预刷 AM32 固件。", "支持 DSHOT150/300/600、OneShot、PWM 等控制信号。", "说明书包含固件刷新和参数设置流程。"], ["Input: 9-30 V / 3-7S LiPo or 3-6S LiHV.", "45 A four-in-one current class.", "Current meter ratio and protocol setup are documented in the manual."], ["输入：9-30 V / 3-7S LiPo 或 3-6S LiHV。", "45 A 四合一电流级别。", "说明书记录了电流计比例和协议设置。"]),
  "am32-mini-esc-40a": escExplain("FlyingRC® Mini 40A Single ESC V1.0 Product Manual.docx", "A compact single-channel AM32 ESC. It drives one brushless motor, making it useful for single-motor fixed-wing aircraft, compact vehicles, or builds where separate ESC placement is preferred.", "一块紧凑型单路 AM32 电调，用于驱动一个无刷电机，适合单发固定翼、小型车辆或需要分开放置电调的装机。", ["Single-motor fixed-wing aircraft.", "Mini RC cars, crawlers, and compact robotics where AM32 low-speed behavior is useful.", "Builds where one ESC per motor is preferred instead of a 4-in-1 board."], ["单发固定翼飞机。", "需要 AM32 低速特性的小型车、攀爬车和紧凑机器人。", "希望每个电机独立电调而不是四合一电调的装机。"], ["Pre-flashed with AM32 firmware.", "Sine-wave startup and Stall Protection can provide strong low-speed torque.", "Manual includes offline firmware flashing and parameter setting workflow."], ["出厂预刷 AM32 固件。", "开启正弦启动和堵转保护后，可提供较强低速扭矩。", "说明书包含离线固件刷新和参数设置流程。"], ["Input: 6-30 V DC / 2-6S LiPo.", "40 A single ESC class.", "Uses offline AM32 parameter tuning workflow."], ["输入：6-30 V DC / 2-6S LiPo。", "40 A 单体电调级别。", "使用离线 AM32 调参工作流。"]),
  "am32-esc-75a-can": explain({
    manual: "FlyingRC AM32 ESC CAN Bus 75A listing materials (August 2026)",
    whatEn: "A compact 75 A single-channel AM32 ESC with an onboard CAN interface. It is designed to drive one high-current brushless motor in fixed-wing aircraft, boats, vehicles, or other builds that use a separate ESC per motor.",
    whatZh: "一块紧凑型 75A 单路 AM32 电调，板载 CAN 总线接口，用于驱动一个大电流无刷电机，适合固定翼、船模、车模或每个电机独立配置电调的装机。",
    bestEn: ["High-current single-motor fixed-wing aircraft.", "Boats, vehicles, and robotics using a separate ESC for one brushless motor.", "Systems that can use the product's onboard CAN interface after protocol and pinout compatibility are confirmed."],
    bestZh: ["大电流单发固定翼飞机。", "使用单独电调驱动一个无刷电机的船模、车模和机器人。", "在确认协议与引脚兼容后使用板载 CAN 接口的系统。"],
    featuresEn: ["The original parameter artwork identifies an AT32F421K8U7 64 KB control board; the downloadable firmware below is only for the separate AT32F415KBU7-4 128 KB hardware revision, so check the MCU marking first.", "FD6288/JSM6288Q gate driver and Infineon IRF7480 metal-sealed MOSFETs.", "AM32 firmware with sine-wave startup and Stall Protection support.", "Onboard CAN interface plus DSHOT150/300/600, OneShot, and PWM signal support.", "The published application BIN is a FlyingRC AM32 2.20 DroneCAN build for the AT32F415KBU7-4 hardware revision.", "Product material lists onboard BEC variants rated for continuous 5 V/4 A or 7 V/3.5 A output."],
    featuresZh: ["原始参数图标注的是 AT32F421K8U7 64KB 控制板；下方下载固件仅适用于另一个 AT32F415KBU7-4 128KB 硬件版本，必须先核对 MCU 丝印。", "FD6288/JSM6288Q 栅极驱动器与英飞凌 IRF7480 金封 MOS。", "AM32 固件，支持正弦波启动与 Stall Protection 堵转保护。", "板载 CAN 总线接口，同时支持 DSHOT150/300/600、OneShot、PWM 等信号。", "当前发布的应用 BIN 是面向 AT32F415KBU7-4 硬件版本的 FlyingRC AM32 2.20 DroneCAN 构建。", "产品资料标注板载 BEC 版本可持续输出 5V/4A 或 7V/3.5A。"],
    techEn: ["Input: 7-28 V DC / 2-6S LiPo.", "Published current ratings: 75 A continuous and 85 A burst under the stated 4S test condition.", "Dimension drawing: approximately 38.10 x 19.16 x 9.24 mm; weight approximately 7.7 g.", "Package includes a GH1.25 4-pin cable, 680 uF 35 V electrolytic capacitor, capacitor heat-shrink, heatsink, and 12 AWG silicone power lead with XT60 connector."],
    techZh: ["输入：7-28V DC / 2-6S LiPo。", "资料标注电流：4S 测试条件下持续 75A、瞬时 85A。", "尺寸图标注约 38.10 x 19.16 x 9.24mm，重量约 7.7g。", "包装含 GH1.25 4Pin 线、680uF 35V 电解电容、电容热缩管、散热片及带 XT60 的 12AWG 硅胶电源线。"],
    setupEn: ["Remove the propeller before ESC setup, firmware work, or powered bench testing.", "Verify the GH1.25 connector pinout, CAN bitrate, and controller compatibility before applying power or relying on CAN control/telemetry.", "For SWD recovery/programming, write the application-only BIN at 0x08004000, or write the combined full-flash HEX at 0x08000000; preserve EEPROM at 0x0801F800 and back up the full device first.", "Install the included electrolytic capacitor with the correct polarity and provide airflow or heatsinking appropriate for the actual load.", "Use wire gauge, connectors, soldering, insulation, and strain relief suitable for the expected current."],
    setupZh: ["电调设置、固件操作或通电台架测试前必须拆桨。", "上电或使用 CAN 控制/遥测前，先确认 GH1.25 接口引脚、CAN 波特率及控制器兼容性。", "使用 SWD 恢复/烧写时，应用 BIN 写入 0x08004000，或将合并完整 HEX 从 0x08000000 写入；必须保留 0x0801F800 EEPROM，并先完整备份。", "按正确极性安装随附电解电容，并根据实际负载提供合适风冷或散热片。", "按预期电流选择合适线径、接头、焊接、绝缘与拉力保护。"],
    watchEn: ["DroneCAN operation requires the matching F415 CAN application and PB4 CAN V17 bootloader; the CAN connector alone does not prove that the correct firmware is installed.", "These files are only for the AT32F415KBU7-4 revision. Do not flash them to AT32F421 or 64 KiB AT32F415K8U7-4 hardware.", "The 75 A/85 A figures are published 4S test-condition ratings; real continuous current depends on cooling, wiring, battery voltage, motor load, and installation."],
    watchZh: ["DroneCAN 工作需要匹配的 F415 CAN 应用固件和 PB4 CAN V17 Bootloader；仅有 CAN 接口不能证明板上已安装正确固件。", "这些文件仅适用于 AT32F415KBU7-4 硬件版本，不可刷入 AT32F421 或 64KiB AT32F415K8U7-4 硬件。", "75A/85A 为资料标注的 4S 测试条件数据；实际持续电流取决于散热、接线、电池电压、电机负载和安装环境。"]
  }),
  "am32-esc-75a-v25": escExplain("FlyingRC® AM32 75A Single ESC V2.5 Product Manual.docx", "A 75 A single-channel AM32 ESC for one high-current brushless motor. It is useful when each motor needs its own ESC or when a single powerful motor is used.", "一块 75 A 单路 AM32 电调，用于驱动一个大电流无刷电机。适合每个电机独立电调或单个大功率电机的场景。", ["High-current fixed-wing or vehicle motors.", "Users who need one ESC per motor rather than a 4-in-1 board.", "AM32 setups requiring configurable braking, startup, and protection behavior."], ["大电流固定翼或车辆电机。", "需要每个电机独立电调，而不是四合一电调的用户。", "需要配置刹车、启动和保护行为的 AM32 场景。"], ["AM32 firmware with sinusoidal startup and stall protection.", "Designed for strong low-speed torque when configured appropriately.", "Manual documents firmware and parameter update workflow."], ["AM32 固件，支持正弦启动和堵转保护。", "正确配置后可提供较强低速扭矩。", "说明书记录固件和参数更新流程。"], ["Input: 7-28 V DC / 2-6S LiPo.", "75 A single ESC class.", "Factory firmware is AM32; manual records firmware update cautions."], ["输入：7-28 V DC / 2-6S LiPo。", "75 A 单体电调级别。", "出厂 AM32 固件；说明书记录了固件更新注意事项。"]),
  "am32-dual-esc-40a": escExplain("FlyingRC® AM32 Dual 40A 2 in 1 ESC  Product Manual.docx", "A two-in-one AM32 ESC that drives two brushless motors from one compact board. It is especially useful for twin-motor fixed-wing aircraft or compact dual-motor builds.", "一块二合一 AM32 电调，用一块板驱动两个无刷电机，特别适合双发固定翼或紧凑双电机装机。", ["Twin-motor fixed-wing aircraft.", "Dual-motor robotics or vehicle builds.", "Builds that want fewer separate ESC boards and cleaner wiring."], ["双发固定翼飞机。", "双电机机器人或车辆装机。", "希望减少独立电调数量、简化走线的装机。"], ["Pre-flashed with AM32 firmware.", "Dual-stage LDO power supply for gate drivers and MCUs.", "Supports wide 2-6S input range according to the manual.", "Sine-wave startup and Stall Protection can improve low-speed torque."], ["出厂预刷 AM32 固件。", "栅极驱动和 MCU 使用双级 LDO 供电。", "说明书标注支持 2-6S 宽输入范围。", "正弦启动和堵转保护可改善低速扭矩。"], ["40 A two-in-one ESC class.", "AM32 firmware version information and update workflow are documented in the manual."], ["40 A 二合一电调级别。", "说明书记录了 AM32 固件版本信息和更新流程。"]),
  "bec-5a-6s": explain({
    manual: "FlyingRC® 5A 6S BEC V1 （Step-Down Module） Product Manual.docx / FlyingRC FlyingRC 5A BEC降压模块说明书.docx",
    whatEn: "A small step-down power module. It converts a higher battery voltage into a regulated lower voltage for receivers, flight-controller accessories, servos, video equipment, or other onboard electronics.",
    whatZh: "一块小型降压供电模块。它把较高的电池电压转换成稳定的低压输出，用于接收机、飞控外设、舵机、图传或其他机载电子设备。",
    bestEn: ["2-6S LiPo aircraft electronics needing 5 V, 6.2 V, 7.4 V, or 9 V power.", "Small builds where an external BEC is safer or cleaner than drawing power from the flight controller.", "Users who need selectable output voltage through solder jumpers."],
    bestZh: ["2-6S LiPo 装机中需要 5 V、6.2 V、7.4 V 或 9 V 供电的设备。", "希望用外置 BEC 提供更独立、更干净供电的小型装机。", "需要通过跳线焊盘选择输出电压的用户。"],
    featuresEn: ["Uses MonolithicPower MP9447 buck converter.", "Selectable output voltage: default 5 V, with solder-jumper options for 6.2 V, 7.4 V, and 9 V.", "Designed as a compact, high-performance BEC module."],
    featuresZh: ["采用 MonolithicPower MP9447 降压芯片。", "输出电压可选：默认 5 V，可通过跳线焊盘选择 6.2 V、7.4 V、9 V。", "定位为小体积、高性能 BEC 降压模块。"],
    techEn: ["Input: 7-26 V / 2-6S LiPo.", "Size: 28.9 x 17.7 x 5.4 mm.", "Weight: 4.3 g without capacitor, 4.6 g with capacitor.", "Continuous output depends on cooling and voltage: up to 5 A with cooling in lower-voltage modes; 9 V output has lower current margin."],
    techZh: ["输入：7-26 V / 2-6S LiPo。", "尺寸：28.9 x 17.7 x 5.4 mm。", "重量：不含电容 4.3 g，含电容 4.6 g。", "持续输出取决于散热和电压档位：低压档有散热最高 5 A；9 V 档电流余量更低。"],
    setupEn: ["Solder the included capacitor with correct polarity; long lead is positive and short lead is negative.", "Input voltage must be at least about 0.8 V higher than the selected output voltage.", "Default output is 5 V when no jumper pad is bridged."],
    setupZh: ["焊接包装内电容时注意极性：长脚为正，短脚为负。", "输入电压需比设定输出电压至少高约 0.8 V。", "不短接跳线焊盘时默认输出 5 V。"],
    watchEn: ["Do not reverse capacitor polarity.", "Verify jumper voltage before connecting sensitive equipment."],
    watchZh: ["电容不可接反。", "接入敏感设备前先确认跳线输出电压。"]
  }),
  "bec-10a-12s": explain({
    manual: "FlyingRC® 10A 12S BEC V1 （Step-Down Module） Product Manual.docx",
    whatEn: "A higher-voltage step-down BEC for converting 2-12S battery voltage into a regulated lower output for onboard electronics.",
    whatZh: "一块高输入电压 BEC 降压模块，用于把 2-12S 电池电压转换成稳定低压，为机载电子设备供电。",
    bestEn: ["Large aircraft or FPV power systems using up to 12S batteries.", "Builds that need a stronger external BEC than small 5 A modules.", "Users powering accessories from a high-voltage main battery."],
    bestZh: ["使用最高 12S 电池的大型飞机或 FPV 电源系统。", "需要比小型 5A BEC 更强外置供电的装机。", "希望从高压主电池给外设供电的用户。"],
    featuresEn: ["Step-down module for 2-12S LiPo systems.", "Manual lists capacitor and battery wiring workflow.", "Designed for higher-current accessory power than small BEC modules."],
    featuresZh: ["面向 2-12S LiPo 系统的降压模块。", "说明书包含电容和电池接线流程。", "相比小型 BEC，面向更高电流外设供电。"],
    techEn: ["Input: 6-60 V / 2-12S LiPo.", "Input voltage must be at least about 0.8 V higher than selected output voltage.", "Use connection diagrams for battery and capacitor wiring."],
    techZh: ["输入：6-60 V / 2-12S LiPo。", "输入电压需比设定输出电压至少高约 0.8 V。", "电池和电容接线以连接图为准。"],
    setupEn: ["Confirm output voltage and polarity before connecting flight electronics.", "Keep high-voltage battery wiring physically separated from signal wiring where possible."],
    setupZh: ["连接飞控电子设备前，先确认输出电压和极性。", "尽量让高压电池线与信号线保持物理分离。"],
    watchEn: ["High-voltage batteries can destroy low-voltage electronics if wired incorrectly."],
    watchZh: ["高压电池接线错误会直接损坏低压电子设备。"]
  }),
  "bec-mini-dji-o4": explain({
    manual: "FlyingRC® Mini BEC Step-Down Module For DJI O4  Product Manual.docx",
    whatEn: "A small BEC intended to power DJI O4-style digital video equipment from a higher-voltage flight battery.",
    whatZh: "一块小型 BEC，用于从较高电压飞行动力电池给 DJI O4 类数字图传设备供电。",
    bestEn: ["DJI O4 digital video builds needing a compact dedicated power module.", "Small FPV builds where video power should be separated from other 5 V devices.", "2-8S LiPo input systems."],
    bestZh: ["需要紧凑独立供电模块的 DJI O4 数字图传装机。", "希望将图传供电与其他 5 V 设备分离的小型穿越机。", "2-8S LiPo 输入系统。"],
    featuresEn: ["Step-down module sized for DJI O4 use.", "Manual states 2-8S LiPo input support.", "Layout image shows 9 V wiring reference."],
    featuresZh: ["面向 DJI O4 使用场景的小型降压模块。", "说明书标注支持 2-8S LiPo 输入。", "布局图提供 9 V 接线参考。"],
    techEn: ["Input: 7-36 V / 2-8S LiPo.", "Input voltage must be about 0.8 V higher than the set output voltage."],
    techZh: ["输入：7-36 V / 2-8S LiPo。", "输入电压需比设定输出电压高约 0.8 V。"],
    setupEn: ["Use it as a dedicated video power regulator, and confirm output voltage before connecting DJI O4 hardware."],
    setupZh: ["将其作为独立图传供电降压模块使用，连接 DJI O4 前先确认输出电压。"],
    watchEn: ["Do not connect video equipment until polarity and output voltage are verified."],
    watchZh: ["未确认极性和输出电压前，不要连接图传设备。"]
  }),
  "i2c-current-meter": explain({
    manual: "FlyingRC®I2C 外置电流计产品手册.docx",
    whatEn: "An external I2C current and voltage sensor for flight controllers. It uses an INA226 sensor so ArduPilot/PX4 systems can read battery voltage and current from an external module instead of relying on an onboard analog current sensor.",
    whatZh: "一款外置 I2C 电流/电压检测模块。它使用 INA226 检测芯片，让 ArduPilot/PX4 系统可以从外置模块读取电池电压和电流，而不是依赖飞控板载模拟电流计。",
    bestEn: ["Fixed-wing or multirotor builds that need external battery current sensing.", "FlyingRC H7Wlite and other flight controllers with an available I2C port.", "Builders who want a small 2-8S LiPo current meter with socket and no-socket installation options."],
    bestZh: ["需要外置电池电流检测的固定翼或多旋翼装机。", "FlyingRC H7Wlite 以及其它带可用 I2C 接口的飞控。", "需要 2-8S LiPo 小型电流计，并希望有插座/无插座两种安装方式的用户。"],
    featuresEn: ["Uses INA226 I2C current/voltage sensing chip.", "Supports ArduPilot and PX4 firmware workflows according to the manual.", "2-8S LiPo VBAT input range.", "Socket version and no-socket version are documented in the product photos."],
    featuresZh: ["使用 INA226 I2C 电流/电压检测芯片。", "说明书标注支持 ArduPilot 和 PX4 固件流程。", "VBAT 支持 2-8S LiPo。", "产品图中提供有插座版本和无插座版本。"],
    techEn: ["Size without socket: 16.04 x 27.52 x 6 mm.", "Size with socket: 16.04 x 27.52 x 14.5 mm.", "Weight: 2.4 g without socket; 6.8 g with socket.", "Default INA226 address: 0x40 / decimal 64.", "Shunt value used by the manual: 0.0003 ohm."],
    techZh: ["无插座尺寸：16.04 x 27.52 x 6 mm。", "有插座尺寸：16.04 x 27.52 x 14.5 mm。", "重量：无插座 2.4 g；有插座 6.8 g。", "INA226 默认地址：0x40 / 十进制 64。", "说明书使用的采样电阻值：0.0003 ohm。"],
    setupEn: ["For ArduPilot, set BATT_MONITOR = 21 for INA2xx/INA226.", "Set BATT_I2C_ADDR = 64 and BATT_SHUNT = 0.0003, then reboot the flight controller.", "If current or voltage is not detected, try BATT_I2C_BUS = 0 or 1 because firmware bus numbering may differ from the physical I2C label."],
    setupZh: ["ArduPilot 中将 BATT_MONITOR 设置为 21，对应 INA2xx/INA226。", "设置 BATT_I2C_ADDR = 64、BATT_SHUNT = 0.0003，保存后重启飞控。", "如果无法读取电流/电压，尝试在 BATT_I2C_BUS = 0 和 1 之间切换，因为固件总线编号可能与物理 I2C 丝印不完全一致。"],
    watchEn: ["When soldering XT60 wires, fully insert the connector and avoid touching nearby components with the iron tip.", "Verify I2C bus selection and reboot after each parameter change."],
    watchZh: ["焊接 XT60 线材时插头要插到底，烙铁头不要碰到焊盘旁边元件。", "修改 I2C 总线参数后需要重启飞控，并确认读取结果。"]
  }),
  "l4-can-rm3100": explain({
    manual: "FlyingRC L4CAN RM3100 listing materials",
    whatEn: "A CAN-bus compass module built around the PNI RM3100 geomagnetic sensor and AP_Periph-style firmware. It gives autopilots cleaner heading data when the main flight controller is affected by current, motors, or magnetic interference, while keeping remote communication on a robust CAN link.",
    whatZh: "一款基于 PNI RM3100 地磁传感器和 AP_Periph 类固件的 CAN 总线罗盘模块。当主飞控附近存在电流、电机或磁干扰时，它可以提供更干净的航向数据，同时通过 CAN 总线保持远距离稳定通信。",
    bestEn: ["ArduPilot or PX4 aircraft that need a remote compass on CAN.", "Fixed-wing or multirotor builds where the main flight controller is close to high-current wiring.", "UAV, RC aircraft, robot positioning, vehicle navigation, AHRS, and magnetic-field detection uses."],
    bestZh: ["需要 CAN 外置罗盘的 ArduPilot 或 PX4 飞机。", "主飞控靠近大电流线、电调或电机的固定翼/多旋翼装机。", "无人机、航模、机器人定位、车辆导航、AHRS 和磁场检测应用。"],
    featuresEn: ["Uses PNI RM3100 3-axis geomagnetic magnetometer IC with X/Y sensors, a Z sensor, and MagI2C ASIC controller architecture.", "Industrial-grade RM3100 compass sensor for high-resolution, repeatable heading data.", "CAN communication for remote mounting and stable wiring.", "Supports AP and PX4 firmware workflows according to the listing material.", "Includes 3D printed base, GH1.25 4P cable, and mounting screws in the package list."],
    featuresZh: ["采用 PNI RM3100 三轴地磁磁力计 IC，包含 X/Y 轴传感器、Z 轴传感器和 MagI2C ASIC 控制器结构。", "工业级 RM3100 磁力计可提供高分辨率、重复性好的航向数据。", "通过 CAN 通信，便于远距离安装和稳定接线。", "上架资料标注支持 AP 和 PX4 固件流程。", "发货清单包含 3D 打印底座、GH1.25 4P 硅胶线和安装螺丝。"],
    techEn: ["Size: 29.3 x 29.3 x 9.0 mm.", "Weight: 4.5 g without base, 10.5 g with base.", "Board: 4 layers, 1.64 mm thickness, 1 oz gold-plated finish.", "Controller: STM32L431RCT6.", "RM3100 measurement range: +/-400 uT; sensitivity: 13 nT; noise: 15 nT; maximum tri-axis sampling rate: 550 Hz.", "ArduPilot branch: FlyingRC-Official/ardupilot L4_CAN_RM3100."],
    techZh: ["尺寸：29.3 x 29.3 x 9.0 mm。", "重量：不加底座 4.5 g，加底座 10.5 g。", "板卡：4 层板，板厚 1.64 mm，沉金 1u。", "主控：STM32L431RCT6。", "RM3100 测量范围：+/-400 uT；灵敏度：13 nT；噪声：15 nT；最大三轴采样率：550 Hz。", "ArduPilot 分支：FlyingRC-Official/ardupilot 的 L4_CAN_RM3100。"],
    setupEn: ["Mount at least 10 cm away from power wires, ESCs, motors, magnets, and ferrous metal materials.", "If the CAN cable is long, short the onboard 120 ohm termination jumper as needed for the bus layout.", "After installation, configure CAN/AP_Periph parameters and run compass calibration in the flight firmware."],
    setupZh: ["安装时应远离电源线、电调、电机、磁铁和铁质金属物料，间距不小于 10 厘米。", "如果 CAN 总线接线较长，可按总线布局短接板上 120 欧终端电阻跳帽。", "安装后在飞控固件中配置 CAN/AP_Periph 参数并执行罗盘校准。"],
    watchEn: ["Compass accuracy depends on magnetic cleanliness, orientation, CAN bus wiring, and correct firmware setup."],
    watchZh: ["罗盘精度取决于磁环境、安装方向、CAN 总线接线和正确的固件配置。"]
  }),
  "h7-can-gps": explain({
    manual: "FlyingRC® U-Blox M10 GPS Product Manual.docx / CAN GPS product assets",
    whatEn: "A GPS/navigation accessory page for FlyingRC CAN/GPS-style products. It provides position data to the flight controller so autonomous modes, return-to-home, navigation, and logging can work.",
    whatZh: "FlyingRC CAN/GPS 类导航配件资料页。它为飞控提供位置信息，使自动模式、返航、导航和日志记录能够工作。",
    bestEn: ["ArduPilot-style builds needing external GPS.", "Fixed-wing or multirotor users planning CAN/GPS wiring.", "Users who need a navigation module rather than only manual flying."],
    bestZh: ["需要外置 GPS 的 ArduPilot 类装机。", "正在规划 CAN/GPS 接线的固定翼或多旋翼用户。", "需要导航模块，而不只是手动飞行的用户。"],
    featuresEn: ["Product material identifies it as H7 CAN GPS.", "Use with flight-controller firmware that supports the selected GPS/CAN workflow."],
    featuresZh: ["产品资料标识为 H7 CAN GPS。", "需搭配支持对应 GPS/CAN 工作流的飞控固件使用。"],
    techEn: ["Consult the product/manual wiring image before connecting CAN or GPS wiring."],
    techZh: ["连接 CAN 或 GPS 前查看产品/说明书接线图。"],
    setupEn: ["Place GPS with sky visibility and away from high-current noise sources.", "Confirm CAN/GPS protocol and baud/settings in firmware."],
    setupZh: ["GPS 应安装在视野开阔、远离大电流噪声源的位置。", "在固件中确认 CAN/GPS 协议和波特率/参数。"],
    watchEn: ["GPS performance depends on antenna placement and firmware configuration."],
    watchZh: ["GPS 效果取决于天线位置和固件配置。"]
  }),
  "ublox-m10-gps": explain({
    manual: "FlyingRC® U-Blox M10 GPS Product Manual.docx",
    whatEn: "A U-Blox M10 GPS module for providing location data to flight controllers, robots, or navigation systems.",
    whatZh: "一款 U-Blox M10 GPS 模块，用于为飞控、机器人或导航系统提供位置信息。",
    bestEn: ["Aircraft requiring GPS-assisted modes such as loiter, return-to-home, waypoint navigation, or logging.", "Users choosing among 18 x 18 mm, 20 x 20 mm, or 28 x 28 mm GPS form factors from the manual family.", "Betaflight/INAV/ArduPilot users who need GNSS data."],
    bestZh: ["需要悬停、返航、航点导航或日志定位等 GPS 辅助模式的飞机。", "在说明书系列中的 18 x 18 mm、20 x 20 mm、28 x 28 mm GPS 规格之间选择的用户。", "需要 GNSS 数据的 Betaflight/INAV/ArduPilot 用户。"],
    featuresEn: ["Manual includes multiple size model introductions.", "Supports firmware setup workflows including BF and INAV sections.", "Used as a navigation sensor rather than a power or control board."],
    featuresZh: ["说明书包含多种尺寸型号介绍。", "包含 BF 和 INAV 等固件设置章节。", "作为导航传感器使用，而不是供电或控制板。"],
    techEn: ["Available manual family includes 18 x 18 mm, 20 x 20 mm, and 28 x 28 mm model sections.", "Use the exact model section for wiring and dimensions."],
    techZh: ["说明书系列包含 18 x 18 mm、20 x 20 mm 和 28 x 28 mm 型号章节。", "接线和尺寸需按实际型号章节确认。"],
    setupEn: ["Mount with clear sky view.", "Configure the flight firmware GPS protocol and port according to the selected controller."],
    setupZh: ["安装时保证良好天空视野。", "按所用飞控配置 GPS 协议和串口。"],
    watchEn: ["Do not assume all M10 variants share identical connector orientation or dimensions."],
    watchZh: ["不要假设所有 M10 版本的接口方向和尺寸完全相同。"]
  }),
  "digital-airspeed": explain({
    manual: "FlyingRC® Pitot‑Less Digital Airspeed Sensor Product Manual.docx",
    whatEn: "A digital airspeed sensor that estimates airspeed without a pitot tube. It is meant to give fixed-wing firmware useful airspeed information while avoiding external pitot plumbing.",
    whatZh: "一款无空速管数字空速计，用于在不安装外置空速管的情况下，为固定翼固件提供有用的空速信息。",
    bestEn: ["Fixed-wing aircraft where a pitot tube is hard to install or easy to damage.", "ArduPilot users who want airspeed-related flight features.", "Thermal soaring experiments that use ArduPilot automatic soaring support."],
    bestZh: ["不方便安装空速管或空速管容易损坏的固定翼。", "希望使用空速相关飞行功能的 ArduPilot 用户。", "使用 ArduPilot 自动热气流盘旋功能的实验装机。"],
    featuresEn: ["Manual states support for automatic thermal soaring with ArduPilot firmware.", "Designed as a sensor accessory rather than a main flight controller.", "Includes ArduPilot setup/configuration workflow in the manual."],
    featuresZh: ["说明书标注支持 ArduPilot 固件的自动热气流盘旋。", "定位为传感器配件，不是主飞控。", "说明书包含 ArduPilot 设置/配置流程。"],
    techEn: ["Use the manual's ArduPilot setup section for parameter configuration.", "Mounting and airflow environment affect useful readings."],
    techZh: ["参数配置参考说明书中的 ArduPilot 设置章节。", "安装位置和气流环境会影响读数效果。"],
    setupEn: ["Configure in ArduPilot before relying on airspeed-dependent modes.", "Test readings on the bench and in safe flight conditions."],
    setupZh: ["在依赖空速相关模式前，先在 ArduPilot 中完成配置。", "先台架检查读数，再在安全飞行条件下验证。"],
    watchEn: ["Treat it as a flight-aid sensor; verify behavior before using it for critical autonomy."],
    watchZh: ["应作为飞行辅助传感器使用，在关键自主功能前必须验证行为。"]
  }),
  "l4-can-rcgps-adapter": explain({
    manual: "FlyingRC® L4 CAN RCGPS AdapterCAN Bus Serial & PWM Expansion Board Product Manual.docx",
    whatEn: "A CAN bus adapter and serial/PWM expansion board. It lets compatible flight controllers add remote serial/PWM-style peripheral connections through an AP_Periph-style CAN node.",
    whatZh: "一块 CAN 总线串口/PWM 扩展板。它让兼容飞控通过 AP_Periph 类 CAN 节点扩展远端串口和 PWM 外设连接。",
    bestEn: ["ArduPilot/CAN builds needing distributed peripheral wiring.", "Flight controllers with CAN support such as MATEK H7 series and FlyingRC H7Wlite family according to the manual.", "Users who want to move GPS/RC/PWM-related wiring away from the main controller."],
    bestZh: ["需要分布式外设接线的 ArduPilot/CAN 装机。", "说明书中提到的 MATEK H7 系列和 FlyingRC H7Wlite 等支持 CAN 的飞控。", "希望把 GPS/RC/PWM 类接线从主飞控移开的用户。"],
    featuresEn: ["Runs open-source AP_Periph firmware.", "Uses GH1.25 connectors according to the manual.", "Designed for CAN bus compatible flight-controller ecosystems."],
    featuresZh: ["运行开源 AP_Periph 固件。", "说明书标注使用 GH1.25 接口。", "面向支持 CAN 总线的飞控生态。"],
    techEn: ["Confirm CAN wiring, node settings, and firmware before use.", "Use with flight controllers that support CAN peripheral expansion."],
    techZh: ["使用前确认 CAN 接线、节点设置和固件。", "需搭配支持 CAN 外设扩展的飞控。"],
    setupEn: ["Wire CAN_H/CAN_L and power correctly, then configure AP_Periph/CAN parameters in the flight controller.", "Check connector orientation before plugging in serial/PWM peripherals."],
    setupZh: ["正确连接 CAN_H/CAN_L 和供电后，在飞控中配置 AP_Periph/CAN 参数。", "插入串口/PWM 外设前确认接口方向。"],
    watchEn: ["CAN devices require correct bus wiring and termination strategy."],
    watchZh: ["CAN 设备需要正确总线接线和终端策略。"]
  }),
  "elrs-24g-diversity": explain({
    manual: "FlyingRC® ELRS 2.4G Diversity Receiver Product Manual.docx",
    whatEn: "A 2.4 GHz ELRS diversity receiver. It receives control commands from an ExpressLRS transmitter and sends them to the flight controller, using diversity reception for a more robust radio link.",
    whatZh: "一款 2.4G ELRS 分集接收机。它从 ExpressLRS 遥控发射端接收控制指令并发送给飞控，通过分集接收提升链路可靠性。",
    bestEn: ["FPV or fixed-wing builds using ExpressLRS 2.4 GHz.", "Pilots who want a diversity receiver rather than a basic single-antenna receiver.", "Builds where receiver firmware compatibility must be checked."],
    bestZh: ["使用 ExpressLRS 2.4G 的穿越机或固定翼。", "希望使用分集接收机而不是基础单天线接收机的玩家。", "需要确认接收机固件兼容性的装机。"],
    featuresEn: ["Manual includes firmware flashing workflow.", "Factory firmware version is documented as 3.5.5 in the manual.", "Manual recommends transmitter module firmware version 3.x or higher for compatibility."],
    featuresZh: ["说明书包含固件刷写流程。", "说明书记录出厂固件版本为 3.5.5。", "说明书建议发射模块固件升级到 3.x 或更高以确保兼容。"],
    techEn: ["ELRS 2.4 GHz receiver.", "Firmware flashing website and version-selection steps are documented in the manual."],
    techZh: ["ELRS 2.4G 接收机。", "说明书记录了固件刷写网站和版本选择步骤。"],
    setupEn: ["Match receiver firmware and transmitter module firmware before flight.", "Mount antennas away from carbon, battery, and high-current wiring where possible."],
    setupZh: ["飞行前确认接收机和发射模块固件版本匹配。", "天线尽量远离碳板、电池和大电流线。"],
    watchEn: ["Radio link reliability depends on antenna installation and firmware compatibility."],
    watchZh: ["遥控链路可靠性取决于天线安装和固件兼容性。"]
  }),
  "am32-configurator": explain({
    manual: "FlyingRC® AM32 ESC Parameter Programmer- Product Manual.docx",
    whatEn: "A USB parameter programmer for AM32 ESCs. It bridges the computer tuning software to an ESC signal wire so users can read parameters, change settings, and flash firmware.",
    whatZh: "一款 AM32 电调 USB 调参器。它把电脑调参软件和电调信号线连接起来，用于读取参数、修改设置和刷写固件。",
    bestEn: ["Users tuning AM32 ESCs without routing through a flight controller.", "Firmware update and parameter adjustment workbench use.", "Troubleshooting ESC settings before installing into an aircraft."],
    bestZh: ["希望不经过飞控、直接调试 AM32 电调的用户。", "固件更新和参数调整台架使用。", "装机前排查电调参数问题。"],
    featuresEn: ["Connects to the computer by USB and to the ESC signal wire.", "Manual documents M1 port selection, parameter reading, writing, and firmware flashing workflow.", "Supports AM32 ESC tuning use cases."],
    featuresZh: ["通过 USB 连接电脑，并连接电调信号线。", "说明书记录 M1 端口选择、参数读取/写入和固件刷写流程。", "支持 AM32 电调调参场景。"],
    techEn: ["Use offline parameter tuning software for firmware flashing.", "Manual warns not to use web-based parameter adjustment software for firmware updates."],
    techZh: ["刷固件使用离线调参软件。", "说明书警告不要使用网页版调参软件进行固件更新。"],
    setupEn: ["Connect USB first, then connect the programmer signal wire to the ESC signal wire as shown in the diagram.", "Power the ESC appropriately when tuning or flashing according to the ESC manual.", "After flashing across multiple versions, send default settings if the manual workflow calls for it."],
    setupZh: ["先连接 USB，再按图连接调参器信号线和电调信号线。", "调参或刷固件时按电调说明书为电调正确供电。", "跨多个版本刷固件后，按说明书流程恢复默认参数。"],
    watchEn: ["Web flashing has damaged ESC MCUs according to the manual; use the offline workflow."],
    watchZh: ["说明书记录网页版刷写可能损坏电调 MCU，应使用离线流程。"]
  }),
  "pdb-12s-400a": explain({
    manual: "Product Manual of FlyingRC® 12S 440A Power Distribution Board for FPV Drones.docx / FlyingRC 12S 400A manual",
    whatEn: "A high-current power distribution board for FPV drones. It distributes main battery power to ESCs or other power loads while providing a structured central power node.",
    whatZh: "一块面向穿越机的大电流分电板。它把主电池电源分配给电调或其他大功率负载，作为机身中心电源节点。",
    bestEn: ["High-voltage FPV builds using up to 12S LiPo.", "Builds that need a central high-current distribution board.", "Users planning clean battery-to-ESC power routing."],
    bestZh: ["使用最高 12S LiPo 的高压穿越机。", "需要中心大电流分配板的装机。", "希望清晰规划电池到电调动力线的用户。"],
    featuresEn: ["Manual states 6-60 V DC input / 2-12S LiPo range.", "Designed for high-current FPV power distribution.", "Top and bottom PCB renders are available for layout inspection."],
    featuresZh: ["说明书标注输入 6-60 V DC / 2-12S LiPo。", "面向大电流 FPV 分电应用。", "提供正反面 PCB 渲染图用于布局检查。"],
    techEn: ["Product listing names the board as 12S 400A/440A class depending on manual variant.", "Use the manual and render to check solder pad location and current path."],
    techZh: ["产品资料/说明书中标注为 12S 400A/440A 级别。", "使用说明书和渲染图检查焊盘位置和电流路径。"],
    setupEn: ["Plan battery and ESC wire routing before soldering.", "Use adequate wire gauge, soldering quality, insulation, and strain relief for high-current paths."],
    setupZh: ["焊接前先规划电池线和电调线走向。", "大电流路径需使用合适线径、可靠焊接、绝缘和拉力保护。"],
    watchEn: ["High-current power distribution failures can be destructive; inspect every solder joint before power-up."],
    watchZh: ["大电流分电故障破坏性很强，上电前必须检查每个焊点。"]
  }),
  "stack-f405-45a": kitExplain("A starter FPV stack bundle combining an F405 flight controller with a 45 A 4-in-1 ESC.", "入门级穿越机飞塔套装，组合 F405 飞控和 45 A 四合一电调。", "F405 flight-controller family plus 4IN1 45A ESC manual"),
  "stack-h743-45a": kitExplain("An advanced FPV stack bundle combining the H7D Pro H743 flight controller with a 45 A 4-in-1 ESC.", "进阶穿越机飞塔套装，组合 H7D Pro H743 飞控和 45 A 四合一电调。", "H7D Pro manual plus 4IN1 45A ESC manual"),
  "stack-f4d-75a": kitExplain("An FPV stack bundle pairing the F4D flight controller family with a 75 A 4-in-1 ESC.", "穿越机飞塔套装，组合 F4D 飞控系列和 75 A 四合一电调。", "F4D manual plus 4IN1 75A ESC manual"),
  "stack-h743-75a": kitExplain("A high-end FPV stack bundle pairing the H7D Pro H743 flight controller with the 75 A 4-in-1 ESC.", "高阶穿越机飞塔套装，组合 H7D Pro H743 飞控和 75 A 四合一电调。", "H7D Pro manual plus 4IN1 75A ESC manual"),
  "fixed-wing-kit": kitExplain("A fixed-wing package page for comparing FlyingRC fixed-wing controller bundles such as F4WSE, F4Wing Mini, and H7Wlite.", "固定翼套餐页，用于对比 F4WSE、F4Wing Mini、H7Wlite 等 FlyingRC 固定翼飞控组合。", "Fixed-wing controller manuals"),
  "fpv-kit": kitExplain("An FPV kit overview for stack and drone-electronics bundles.", "穿越机套餐总览，用于飞塔和穿越机电子组合选择。", "FPV flight-controller and ESC manuals"),
  "bec-10a-8s": explain({
    manual: "FlyingRC 10A 8S BEC V1 Product Manual",
    whatEn: "A compact high-current BEC for aircraft and other projects that need a selectable regulated supply.",
    whatZh: "一款紧凑型大电流 BEC，适合需要可选稳压输出的飞机和其他电子项目。",
    featuresEn: ["Uses an LM61495 regulator and current-mode control.", "Select 5 V, 6 V, or 7 V using the output jumper pads.", "The package includes a 16 V 680 uF capacitor and a heatsink."],
    featuresZh: ["使用 LM61495 芯片和电流模式控制。", "通过输出跳线焊盘选择 5V、6V 或 7V。", "包装包含 16V 680uF 电容和散热片。"],
    setupEn: ["Connect the battery to VIN and the load to VOUT.", "Attach the heatsink to the reverse side before sustained high-current use."],
    setupZh: ["电池接 VIN，负载接 VOUT。", "持续大电流使用前，应将散热片贴到 BEC 背面。"],
    watchEn: ["Input voltage must remain at least 0.8 V above the selected output voltage."],
    watchZh: ["输入电压必须比选定输出电压至少高 0.8V。"]
  }),
  "bec-5a-12s": explain({
    manual: "FlyingRC 5A 12S BEC V1 Product Manual",
    whatEn: "A compact high-voltage BEC for 2-12S builds, with 5 V output by default and a 12 V jumper option.",
    whatZh: "一款适用于 2-12S 装机的紧凑型高压 BEC，默认输出 5V，可跳线选择 12V。",
    featuresEn: ["Accepts 6-60 V input.", "Default 5 V output; jumper-selectable 12 V output.", "Supplied with a 35 V 220 uF electrolytic capacitor."],
    featuresZh: ["支持 6-60V 输入。", "默认 5V 输出；跳线可选 12V。", "随附 35V 220uF 电解电容。"],
    setupEn: ["Connect VIN to the battery and VO to the load, with the capacitor installed on the load side."],
    setupZh: ["VIN 接电池，VO 接负载；电容安装在负载侧。"],
    watchEn: ["Select the output jumper before connecting sensitive equipment."],
    watchZh: ["连接敏感设备前，先确认输出跳线选择。"]
  }),
  "rm3100-spi": explain({
    manual: "FlyingRC RM3100 SPI Module Product Manual",
    whatEn: "A remote-mountable three-axis compass module for heading measurement in aircraft, robotics, and navigation projects.",
    whatZh: "一款可远离磁干扰源安装的三轴罗盘模块，用于飞行器、机器人和导航项目的航向测量。",
    featuresEn: ["Uses the PNI RM3100 magnetic sensor set and MagI2C controller.", "Provides SPI clock, MISO, MOSI, chip-select, and data-ready signals.", "Full attitude calibration is required after installation."],
    featuresZh: ["采用 PNI RM3100 磁传感器组和 MagI2C 控制器。", "提供 SPI 时钟、MISO、MOSI、片选和数据就绪信号。", "安装后必须完成全姿态校准。"],
    setupEn: ["Use a 3.3 V supply and follow the 8-pin SPI wiring table.", "Mount the module away from power wiring, motors, and other magnetic interference sources."],
    setupZh: ["使用 3.3V 供电，并遵循 8Pin SPI 接线表。", "模块应远离动力线、电机和其他磁干扰源安装。"],
    watchEn: ["Do not power the module from 5 V."],
    watchZh: ["请勿使用 5V 为模块供电。"]
  }),
  "i2c-digital-airspeed": explain({
    manual: "FlyingRC I2C Digital Airspeed Meter Product Manual",
    whatEn: "The latest integrated I2C airspeed sensor for fixed-wing aircraft using ArduPilot airspeed workflows.",
    whatZh: "面向使用 ArduPilot 空速工作流的固定翼飞机的最新一代 I2C 一体式空速计。",
    featuresEn: ["MS4525D-compatible digital sensor with an integrated pitot tube.", "Factory-calibrated for zero drift before shipment.", "Includes a silicone connector lead and plastic mounting screws."],
    featuresZh: ["MS4525D 兼容数字传感器，空速计与空速管一体化。", "每只产品出货前均进行零漂校准。", "附送硅胶端子线和塑料安装螺丝。"],
    setupEn: ["For ArduPilot, set ARSPD_TYPE = 1 and follow the manual's calibration sequence after a successful basic flight test.", "Keep ARSPD_AUTOCAL enabled only for the calibration flight, then disable it for normal operation."],
    setupZh: ["ArduPilot 中设置 ARSPD_TYPE = 1，并在完成基础试飞后按说明书进行校准。", "仅在校准飞行期间开启 ARSPD_AUTOCAL，正常使用时应关闭。"],
    watchEn: ["This is the current model; the earlier pitotless airspeed meter is retained as EOL reference material."],
    watchZh: ["本产品为当前型号；旧款无空速管数字空速计保留为 EOL 参考资料。"]
  })
};

const PUBLIC_MANUALS = {
  "f435wing-mini-osd": manualDownload("assets/downloads/manuals/f435wing-mini-osd-manual.docx"),
  "f4wing-mini-mk1": manualDownload("assets/downloads/manuals/f4wing-mini-mk1-manual.docx"),
  "h7wlite-mk1": manualDownload("assets/downloads/manuals/f4wse-pro-manual.docx", "Fixed-wing family manual", "固定翼系列说明书"),
  "f4wse-f405": manualDownload("assets/downloads/manuals/f4wse-f405-manual.docx"),
  "f4wse-pro": manualDownload("assets/downloads/manuals/f4wse-pro-manual.docx"),
  "f4d-mk1": manualDownload("assets/downloads/manuals/f4d-mk1-manual.docx"),
  "h7d-h743": manualDownload("assets/downloads/manuals/h7d-h743-manual.docx"),
  "h7d-pro": manualDownload("assets/downloads/manuals/h7d-pro-manual.docx"),
  "am32-4in1-75a": manualDownload("assets/downloads/manuals/am32-4in1-75a-manual.docx"),
  "am32-4in1-45a": manualDownload("assets/downloads/manuals/am32-4in1-45a-manual.docx"),
  "am32-mini-esc-40a": manualDownload("assets/downloads/manuals/am32-mini-esc-40a-manual.docx"),
  "am32-esc-75a-v25": manualDownload("assets/downloads/manuals/am32-esc-75a-v25-manual.docx"),
  "am32-dual-esc-40a": manualDownload("assets/downloads/manuals/am32-dual-esc-40a-manual.docx"),
  "bec-5a-6s": manualDownload("assets/downloads/manuals/bec-5a-6s-manual.docx"),
  "bec-10a-12s": manualDownload("assets/downloads/manuals/bec-10a-12s-manual.docx"),
  "bec-mini-dji-o4": manualDownload("assets/downloads/manuals/bec-mini-dji-o4-manual.docx"),
  "bec-10a-8s": manualDownload("assets/downloads/manuals/bec-10a-8s-manual.docx"),
  "bec-5a-12s": manualDownload("assets/downloads/manuals/bec-5a-12s-manual.docx"),
  "rm3100-spi": manualDownload("assets/downloads/manuals/rm3100-spi-manual.docx"),
  "h7-can-gps": manualDownload("assets/downloads/manuals/ublox-m10-gps-manual.docx", "CAN/GPS family manual", "CAN/GPS 系列说明书"),
  "ublox-m10-gps": manualDownload("assets/downloads/manuals/ublox-m10-gps-manual.docx"),
  "digital-airspeed": manualDownload("assets/downloads/manuals/digital-airspeed-manual.docx"),
  "i2c-digital-airspeed": manualDownload("assets/downloads/manuals/i2c-digital-airspeed-manual.docx"),
  "i2c-current-meter": manualDownload("assets/downloads/manuals/i2c-current-meter-manual.docx"),
  "l4-can-rcgps-adapter": manualDownload("assets/downloads/manuals/l4-can-rcgps-adapter-manual.docx"),
  "elrs-24g-diversity": manualDownload("assets/downloads/manuals/elrs-24g-diversity-manual.docx"),
  "am32-configurator": manualDownload("assets/downloads/manuals/am32-configurator-manual.docx"),
  "pdb-12s-400a": manualDownload("assets/downloads/manuals/pdb-12s-400a-manual.docx")
};

const LABEL_GROUPS = {
  role: { en: "Role / use", zh: "用途 / 场景" },
  firmware: { en: "Firmware", zh: "固件" },
  power: { en: "Power", zh: "供电" },
  hardware: { en: "Hardware / I-O", zh: "硬件 / 接口" },
  setup: { en: "Setup / compatibility", zh: "设置 / 兼容" }
};

const LABEL_DEFINITIONS = {
  "fixed-wing": productLabelDef("Fixed-wing", "固定翼", "role"),
  fpv: productLabelDef("FPV / multirotor", "穿越机 / 多旋翼", "role"),
  robotics: productLabelDef("Robotics / vehicle", "机器人 / 车辆", "role"),
  "flight-controller": productLabelDef("Flight controller", "飞控", "role"),
  esc: productLabelDef("ESC", "电调", "role"),
  "bec-module": productLabelDef("BEC / regulator", "BEC / 降压模块", "role"),
  "stack-bundle": productLabelDef("Stack / kit", "飞塔 / 套装", "role"),
  "navigation-sensor": productLabelDef("Navigation / sensor", "导航 / 传感器", "role"),
  receiver: productLabelDef("Receiver", "接收机", "role"),
  "programming-tool": productLabelDef("Programming tool", "调参 / 刷写工具", "role"),
  "power-distribution": productLabelDef("Power distribution", "分电 / 电源分配", "role"),
  compact: productLabelDef("Compact build", "紧凑装机", "role"),
  "high-current": productLabelDef("High-current build", "大电流装机", "role"),

  ardupilot: productLabelDef("ArduPilot", "ArduPilot", "firmware"),
  arduplane: productLabelDef("ArduPlane", "ArduPlane", "firmware"),
  inav: productLabelDef("INAV", "INAV", "firmware"),
  betaflight: productLabelDef("Betaflight", "Betaflight", "firmware"),
  am32: productLabelDef("AM32", "AM32", "firmware"),
  apperiph: productLabelDef("AP_Periph", "AP_Periph", "firmware"),
  expresslrs: productLabelDef("ExpressLRS", "ExpressLRS", "firmware"),
  px4: productLabelDef("PX4", "PX4", "firmware"),
  "offline-flashing": productLabelDef("Offline flashing", "离线刷写", "firmware"),

  "2-6s": productLabelDef("2-6S LiPo", "2-6S LiPo", "power"),
  "2-8s": productLabelDef("2-8S LiPo", "2-8S LiPo", "power"),
  "2-12s": productLabelDef("2-12S LiPo", "2-12S LiPo", "power"),
  "3-7s": productLabelDef("3-7S LiPo", "3-7S LiPo", "power"),
  "external-5v": productLabelDef("Needs external 5 V", "需外部 5V", "power"),
  "onboard-bec": productLabelDef("Onboard BEC", "板载 BEC", "power"),
  "selectable-bec": productLabelDef("Selectable BEC output", "可选 BEC 输出", "power"),
  "dji-o4-power": productLabelDef("DJI O4 power", "DJI O4 供电", "power"),
  "high-voltage": productLabelDef("High-voltage input", "高压输入", "power"),
  "current-sensor": productLabelDef("Current sensor", "电流检测", "power"),

  f405: productLabelDef("STM32F405", "STM32F405", "hardware"),
  h743: productLabelDef("STM32H743", "STM32H743", "hardware"),
  l431: productLabelDef("STM32L431", "STM32L431", "hardware"),
  can: productLabelDef("CAN", "CAN", "hardware"),
  i2c: productLabelDef("I2C", "I2C", "hardware"),
  uart: productLabelDef("UART / serial", "UART / 串口", "hardware"),
  pwm: productLabelDef("PWM outputs", "PWM 输出", "hardware"),
  spi: productLabelDef("SPI", "SPI", "hardware"),
  usb: productLabelDef("USB", "USB", "hardware"),
  "dji-o4": productLabelDef("DJI O4", "DJI O4", "hardware"),
  "gps-gnss": productLabelDef("GPS / GNSS", "GPS / GNSS", "hardware"),
  rm3100: productLabelDef("RM3100 compass", "RM3100 罗盘", "hardware"),
  "blackbox": productLabelDef("Blackbox logging", "黑匣子记录", "hardware"),
  "4in1-esc": productLabelDef("4-in-1 ESC", "四合一电调", "hardware"),
  "single-esc": productLabelDef("Single ESC", "单体电调", "hardware"),
  "dual-esc": productLabelDef("Dual ESC", "二合一电调", "hardware"),
  "m3-30x30": productLabelDef("30.5 mm M3 stack", "30.5mm M3 飞塔孔", "hardware"),
  "u-blox-m10": productLabelDef("U-Blox M10", "U-Blox M10", "hardware"),
  "true-diversity": productLabelDef("True diversity", "真分集", "hardware"),
  "pitotless": productLabelDef("Pitotless airspeed", "无空速管空速", "hardware"),

  "serial-mapping": productLabelDef("Check serial mapping", "需核对串口映射", "setup"),
  "can-wiring": productLabelDef("CAN wiring", "CAN 总线接线", "setup"),
  "vtx-wiring": productLabelDef("VTX / video wiring", "图传接线", "setup"),
  "capacitor-polarity": productLabelDef("Check capacitor polarity", "注意电容极性", "setup"),
  "check-output": productLabelDef("Check output before use", "上电前确认输出", "setup"),
  "external-mounting": productLabelDef("External mounting", "外置安装", "setup"),
  "ch340-driver": productLabelDef("CH340 driver", "CH340 驱动", "setup"),
  "no-web-flashing": productLabelDef("No web flashing", "不要网页刷写", "setup")
};

const FILTER_LABEL_IDS = [
  "fixed-wing",
  "fpv",
  "robotics",
  "flight-controller",
  "esc",
  "bec-module",
  "stack-bundle",
  "navigation-sensor",
  "power-distribution",
  "compact",
  "high-current",
  "ardupilot",
  "betaflight",
  "am32",
  "inav",
  "apperiph",
  "expresslrs",
  "2-6s",
  "2-8s",
  "2-12s",
  "3-7s",
  "onboard-bec",
  "selectable-bec",
  "dji-o4-power",
  "high-voltage",
  "f405",
  "h743",
  "can",
  "dji-o4",
  "gps-gnss",
  "i2c",
  "4in1-esc",
  "single-esc",
  "dual-esc"
];

const PRIMARY_FILTER_LABEL_IDS = [
  "fixed-wing",
  "fpv",
  "robotics",
  "flight-controller",
  "esc",
  "bec-module",
  "stack-bundle",
  "navigation-sensor",
  "power-distribution",
  "compact",
  "high-current",
  "ardupilot",
  "betaflight",
  "am32",
  "2-6s",
  "2-12s"
];

const PRODUCT_LABELS = {
  "f435wing-mini-osd": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("inav", 3),
    productLabel("pwm", 4),
    productLabel("uart", 5),
    productLabel("dji-o4"),
    productLabel("compact"),
    productLabel("external-5v")
  ],
  "f4wing-mini-mk1": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("f405", 3),
    productLabel("arduplane", 4),
    productLabel("inav", 5),
    productLabel("pwm"),
    productLabel("uart"),
    productLabel("dji-o4"),
    productLabel("compact"),
    productLabel("external-5v")
  ],
  "h7wlite-mk1": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("h743", 3),
    productLabel("ardupilot", 4),
    productLabel("can", 5),
    productLabel("gps-gnss"),
    productLabel("high-current")
  ],
  "h7wlite-v2": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("h743", 3),
    productLabel("ardupilot", 4),
    productLabel("inav", 5),
    productLabel("betaflight"),
    productLabel("can"),
    productLabel("pwm"),
    productLabel("uart")
  ],
  "f4wse-f405": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("f405", 3),
    productLabel("ardupilot", 4),
    productLabel("inav", 5),
    productLabel("uart"),
    productLabel("serial-mapping")
  ],
  "f4wse-pro": [
    productLabel("fixed-wing", 1),
    productLabel("flight-controller", 2),
    productLabel("f405", 3),
    productLabel("arduplane", 4),
    productLabel("serial-mapping", 5),
    productLabel("uart"),
    productLabel("pwm"),
    productLabel("vtx-wiring")
  ],
  "f4d-mk1": [
    productLabel("fpv", 1),
    productLabel("flight-controller", 2),
    productLabel("f405", 3),
    productLabel("betaflight", 4),
    productLabel("dji-o4", 5),
    productLabel("dji-o4-power"),
    productLabel("2-6s"),
    productLabel("vtx-wiring")
  ],
  "h7d-h743": [
    productLabel("fpv", 1),
    productLabel("flight-controller", 2),
    productLabel("h743", 3),
    productLabel("betaflight", 4),
    productLabel("ardupilot", 5),
    productLabel("onboard-bec"),
    productLabel("uart"),
    productLabel("pwm"),
    productLabel("dji-o4"),
    productLabel("blackbox")
  ],
  "h7d-pro": [
    productLabel("fpv", 1),
    productLabel("flight-controller", 2),
    productLabel("h743", 3),
    productLabel("px4", 4),
    productLabel("betaflight", 5),
    productLabel("ardupilot"),
    productLabel("onboard-bec"),
    productLabel("pwm"),
    productLabel("dji-o4"),
    productLabel("blackbox")
  ],
  "am32-4in1-75a": [
    productLabel("fpv", 1),
    productLabel("esc", 2),
    productLabel("4in1-esc", 3),
    productLabel("am32", 4),
    productLabel("high-current", 5),
    productLabel("3-7s"),
    productLabel("m3-30x30")
  ],
  "am32-4in1-45a": [
    productLabel("fpv", 1),
    productLabel("esc", 2),
    productLabel("4in1-esc", 3),
    productLabel("am32", 4),
    productLabel("3-7s", 5),
    productLabel("pwm"),
    productLabel("m3-30x30")
  ],
  "am32-mini-esc-40a": [
    productLabel("fixed-wing", 1),
    productLabel("robotics", 2),
    productLabel("esc", 3),
    productLabel("single-esc", 4),
    productLabel("am32", 5),
    productLabel("2-6s"),
    productLabel("compact")
  ],
  "am32-esc-75a-can": [
    productLabel("fixed-wing", 1),
    productLabel("robotics", 2),
    productLabel("esc", 3),
    productLabel("single-esc", 4),
    productLabel("am32", 5),
    productLabel("can", 6),
    productLabel("2-6s"),
    productLabel("onboard-bec"),
    productLabel("high-current"),
    productLabel("can-wiring")
  ],
  "am32-esc-75a-v25": [
    productLabel("fixed-wing", 1),
    productLabel("robotics", 2),
    productLabel("esc", 3),
    productLabel("single-esc", 4),
    productLabel("am32", 5),
    productLabel("2-6s"),
    productLabel("onboard-bec"),
    productLabel("high-current")
  ],
  "am32-dual-esc-40a": [
    productLabel("fixed-wing", 1),
    productLabel("robotics", 2),
    productLabel("esc", 3),
    productLabel("dual-esc", 4),
    productLabel("am32", 5),
    productLabel("2-6s"),
    productLabel("compact")
  ],
  "bec-5a-6s": [
    productLabel("bec-module", 1),
    productLabel("fixed-wing", 2),
    productLabel("robotics", 3),
    productLabel("2-6s", 4),
    productLabel("selectable-bec", 5),
    productLabel("capacitor-polarity"),
    productLabel("compact")
  ],
  "bec-10a-12s": [
    productLabel("bec-module", 1),
    productLabel("fixed-wing", 2),
    productLabel("robotics", 3),
    productLabel("2-12s", 4),
    productLabel("high-voltage", 5),
    productLabel("selectable-bec"),
    productLabel("check-output")
  ],
  "bec-mini-dji-o4": [
    productLabel("bec-module", 1),
    productLabel("fpv", 2),
    productLabel("dji-o4", 3),
    productLabel("dji-o4-power", 4),
    productLabel("2-8s", 5),
    productLabel("compact"),
    productLabel("check-output")
  ],
  "bec-10a-8s": [
    productLabel("bec-module", 1),
    productLabel("fixed-wing", 2),
    productLabel("2-8s", 3),
    productLabel("selectable-bec", 4),
    productLabel("high-current", 5)
  ],
  "bec-5a-12s": [
    productLabel("bec-module", 1),
    productLabel("fixed-wing", 2),
    productLabel("2-12s", 3),
    productLabel("selectable-bec", 4),
    productLabel("high-voltage", 5)
  ],
  "stack-f405-45a": [
    productLabel("fpv", 1),
    productLabel("stack-bundle", 2),
    productLabel("f405", 3),
    productLabel("4in1-esc", 4),
    productLabel("betaflight", 5),
    productLabel("3-7s")
  ],
  "stack-h743-45a": [
    productLabel("fpv", 1),
    productLabel("stack-bundle", 2),
    productLabel("h743", 3),
    productLabel("4in1-esc", 4),
    productLabel("betaflight", 5),
    productLabel("3-7s")
  ],
  "stack-f4d-75a": [
    productLabel("fpv", 1),
    productLabel("stack-bundle", 2),
    productLabel("f405", 3),
    productLabel("4in1-esc", 4),
    productLabel("high-current", 5),
    productLabel("betaflight"),
    productLabel("3-7s")
  ],
  "stack-h743-75a": [
    productLabel("fpv", 1),
    productLabel("stack-bundle", 2),
    productLabel("h743", 3),
    productLabel("4in1-esc", 4),
    productLabel("high-current", 5),
    productLabel("betaflight"),
    productLabel("3-7s")
  ],
  "fixed-wing-kit": [
    productLabel("fixed-wing", 1),
    productLabel("stack-bundle", 2),
    productLabel("flight-controller", 3),
    productLabel("ardupilot", 4),
    productLabel("inav", 5),
    productLabel("f405"),
    productLabel("h743")
  ],
  "fpv-kit": [
    productLabel("fpv", 1),
    productLabel("stack-bundle", 2),
    productLabel("flight-controller", 3),
    productLabel("4in1-esc", 4),
    productLabel("betaflight", 5)
  ],
  "l4-can-rm3100": [
    productLabel("navigation-sensor", 1),
    productLabel("can", 2),
    productLabel("rm3100", 3),
    productLabel("ardupilot", 4),
    productLabel("px4", 5),
    productLabel("apperiph"),
    productLabel("l431"),
    productLabel("can-wiring"),
    productLabel("external-mounting")
  ],
  "rm3100-spi": [
    productLabel("navigation-sensor", 1),
    productLabel("rm3100", 2),
    productLabel("spi", 3),
    productLabel("fixed-wing", 4),
    productLabel("external-mounting", 5)
  ],
  "h7-can-gps": [
    productLabel("navigation-sensor", 1),
    productLabel("fixed-wing", 2),
    productLabel("gps-gnss", 3),
    productLabel("can", 4),
    productLabel("ardupilot", 5),
    productLabel("can-wiring")
  ],
  "ublox-m10-gps": [
    productLabel("navigation-sensor", 1),
    productLabel("fixed-wing", 2),
    productLabel("fpv", 3),
    productLabel("gps-gnss", 4),
    productLabel("u-blox-m10", 5),
    productLabel("ardupilot"),
    productLabel("betaflight"),
    productLabel("inav")
  ],
  "digital-airspeed": [
    productLabel("navigation-sensor", 1),
    productLabel("fixed-wing", 2),
    productLabel("pitotless", 3),
    productLabel("ardupilot", 4),
    productLabel("compact", 5)
  ],
  "i2c-digital-airspeed": [
    productLabel("navigation-sensor", 1),
    productLabel("fixed-wing", 2),
    productLabel("i2c", 3),
    productLabel("ardupilot", 4),
    productLabel("compact", 5)
  ],
  "i2c-current-meter": [
    productLabel("navigation-sensor", 1),
    productLabel("current-sensor", 2),
    productLabel("i2c", 3),
    productLabel("2-8s", 4),
    productLabel("ardupilot", 5),
    productLabel("px4"),
    productLabel("fixed-wing"),
    productLabel("compact"),
    productLabel("external-mounting")
  ],
  "l4-can-rcgps-adapter": [
    productLabel("navigation-sensor", 1),
    productLabel("fixed-wing", 2),
    productLabel("can", 3),
    productLabel("apperiph", 4),
    productLabel("l431", 5),
    productLabel("uart"),
    productLabel("pwm"),
    productLabel("can-wiring")
  ],
  "elrs-24g-diversity": [
    productLabel("receiver", 1),
    productLabel("fpv", 2),
    productLabel("expresslrs", 3),
    productLabel("true-diversity", 4),
    productLabel("uart", 5)
  ],
  "am32-configurator": [
    productLabel("programming-tool", 1),
    productLabel("esc", 2),
    productLabel("am32", 3),
    productLabel("offline-flashing", 4),
    productLabel("usb", 5),
    productLabel("ch340-driver"),
    productLabel("no-web-flashing")
  ],
  "pdb-12s-400a": [
    productLabel("power-distribution", 1),
    productLabel("fpv", 2),
    productLabel("robotics", 3),
    productLabel("2-12s", 4),
    productLabel("high-current", 5),
    productLabel("current-sensor"),
    productLabel("onboard-bec")
  ]
};

const PUBLIC_REFERENCE_FILES = {
  "f435wing-mini-osd": [
    download("assets/downloads/firmware/f435wing-mini-osd/inav_9.1.0_FLYINGRCF435WINGMINI.hex", "INAV 9.1.0 CGU7 / 1 MB stable firmware", "INAV 9.1.0 CGU7 / 1MB 稳定版固件"),
    download("assets/downloads/firmware/f435wing-mini-osd/inav_9.1.0_FLYINGRCF435WINGMINI_CMU7.hex", "INAV 9.1.0 CMU7 / 4 MB stable firmware", "INAV 9.1.0 CMU7 / 4MB 稳定版固件"),
    download("assets/downloads/firmware/f435wing-mini-osd/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "f4wse-f405": [download("assets/products/f4wse-f405/model.step", "STEP 3D model", "STEP 3D 模型")],
  "h7wlite-mk1": [download("assets/products/h7wlite-mk1/model.step", "STEP 3D model", "STEP 3D 模型")],
  "h7wlite-v2": [
    download("https://github.com/FlyingRC-Official/ardupilot/tree/add_FlyingRC_H7Wlite_target", "ArduPilot H7Wlite V2 target branch", "ArduPilot H7Wlite V2 目标分支"),
    download("https://github.com/FlyingRC-Official/inav/tree/FLYINGRCH7WLITEV2", "INAV H7Wlite V2 target branch", "INAV H7Wlite V2 目标分支"),
    download("https://github.com/FlyingRC-Official/betaflight-config/tree/Add-FlyingRC-H7Wlite-V2-BMI270-Config", "Betaflight H7Wlite V2 config branch", "Betaflight H7Wlite V2 配置分支"),
    download("https://github.com/FlyingRC-Official/PX4-Autopilot/tree/FlyingRC-H7Wlite-V2-Board", "PX4 H7Wlite V2 base branch", "PX4 H7Wlite V2 基础分支"),
    download("assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_arducopter_with_bl.hex", "ArduCopter 4.7.1 firmware with bootloader", "ArduCopter 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_arduplane_with_bl.hex", "ArduPlane 4.7.1 firmware with bootloader", "ArduPlane 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_ardurover_with_bl.hex", "ArduRover 4.7.1 firmware with bootloader", "ArduRover 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_ardusub_with_bl.hex", "ArduSub 4.7.1 firmware with bootloader", "ArduSub 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_arducopter_with_bl.hex", "ArduCopter 4.7.0 firmware with bootloader", "ArduCopter 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_arduplane_with_bl.hex", "ArduPlane 4.7.0 firmware with bootloader", "ArduPlane 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_ardurover_with_bl.hex", "ArduRover 4.7.0 firmware with bootloader", "ArduRover 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_ardusub_with_bl.hex", "ArduSub 4.7.0 firmware with bootloader", "ArduSub 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_arducopter_with_bl.hex", "ArduCopter 4.6.3 firmware with bootloader", "ArduCopter 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_arduplane_with_bl.hex", "ArduPlane 4.6.3 firmware with bootloader", "ArduPlane 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_ardurover_with_bl.hex", "ArduRover 4.6.3 firmware with bootloader", "ArduRover 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7wlite-v2/inav_9.1.0_FLYINGRCH7WLITEV2.hex", "INAV 9.1.0 firmware", "INAV 9.1.0 固件"),
    download("assets/downloads/firmware/h7wlite-v2/betaflight_2026.6.1_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex", "Betaflight 2026.6.1 BMI270 firmware", "Betaflight 2026.6.1 BMI270 固件"),
    download("assets/downloads/firmware/h7wlite-v2/betaflight_2025.12.5_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex", "Betaflight 2025.12.5 BMI270 firmware", "Betaflight 2025.12.5 BMI270 固件"),
    download("assets/downloads/firmware/h7wlite-v2/betaflight_4.5.5_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex", "Betaflight 4.5.5 BMI270 firmware", "Betaflight 4.5.5 BMI270 固件"),
    download("assets/downloads/firmware/h7wlite-v2/FlyingRC_H7WliteV2_PX4_custom_50161b1_FlyingRC-H7Wlite-V2-Board.zip", "PX4 custom firmware package (commit 50161b1)", "PX4 自定义固件包（commit 50161b1）"),
    download("assets/downloads/firmware/h7wlite-v2/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "f4wing-mini-mk1": [
    download("https://github.com/FlyingRC-Official/ardupilot/tree/feature/add_flyingrc_targets", "ArduPilot F4Wing Mini target branch", "ArduPilot F4Wing Mini 目标分支"),
    download("https://github.com/FlyingRC-Official/inav/tree/FLYINGRCF4WINGMINI", "INAV F4Wing Mini target branch", "INAV F4Wing Mini 目标分支"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_arducopter_with_bl.hex", "ArduCopter 4.7.1 firmware with bootloader", "ArduCopter 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_arduplane_with_bl.hex", "ArduPlane 4.7.1 firmware with bootloader", "ArduPlane 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_ardurover_with_bl.hex", "ArduRover 4.7.1 firmware with bootloader", "ArduRover 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_ardusub_with_bl.hex", "ArduSub 4.7.1 firmware with bootloader", "ArduSub 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_arduplane_with_bl.hex", "ArduPlane 4.7.0 firmware with bootloader", "ArduPlane 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_arducopter_with_bl.hex", "ArduCopter 4.7.0 firmware with bootloader", "ArduCopter 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_ardurover_with_bl.hex", "ArduRover 4.7.0 firmware with bootloader", "ArduRover 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_ardusub_with_bl.hex", "ArduSub 4.7.0 firmware with bootloader", "ArduSub 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/inav_9.1.0_FLYINGRCF4WINGMINI.hex", "INAV 9.1.0 firmware", "INAV 9.1.0 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/inav_9.1.0_FLYINGRCF4WINGMINI_INA226.hex", "INAV 9.1.0 custom INA226 I2C firmware", "INAV 9.1.0 INA226 I2C 定制固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/inav_9.0.1_FLYINGRCF4WINGMINI.hex", "INAV 9.0.1 firmware", "INAV 9.0.1 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP463_FlyingRCF4WingMini_arduplane_with_bl.hex", "ArduPlane 4.6.3 firmware with bootloader", "ArduPlane 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/AP463_FlyingRCF4WingMini_arducopter_with_bl.hex", "ArduCopter 4.6.3 firmware with bootloader", "ArduCopter 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/betaflight_2026.6.1_STM32F405_FLYINGRCF4WINGMINI.hex", "Betaflight 2026.6.1 firmware", "Betaflight 2026.6.1 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/betaflight_2025.12.5_STM32F405_FLYINGRCF4WINGMINI.hex", "Betaflight 2025.12.5 firmware", "Betaflight 2025.12.5 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/betaflight_4.5.5_STM32F405_FLYINGRCF4WINGMINI.hex", "Betaflight 4.5.5 firmware", "Betaflight 4.5.5 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/betaflight_2025.12.4_STM32F405_FLYINGRCF4WINGMINI.hex", "Betaflight 2025.12.4 firmware", "Betaflight 2025.12.4 固件"),
    download("assets/downloads/firmware/f4wing-mini-mk1/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "f4wse-pro": [
    download("https://github.com/FlyingRC-Official/ardupilot/tree/add_FlyingRC_F4WSE_Pro_target", "ArduPilot F4WSE Pro target branch", "ArduPilot F4WSE Pro 目标分支"),
    download("https://github.com/FlyingRC-Official/inav/tree/FLYINGRCF4WSEPRO", "INAV F4WSE Pro target branch", "INAV F4WSE Pro 目标分支"),
    download("assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex", "ArduCopter 4.7.1 firmware with bootloader", "ArduCopter 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex", "ArduPlane 4.7.1 firmware with bootloader", "ArduPlane 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex", "ArduRover 4.7.1 firmware with bootloader", "ArduRover 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_ardusub_with_bl.hex", "ArduSub 4.7.1 firmware with bootloader", "ArduSub 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex", "ArduPlane 4.7.0 firmware with bootloader", "ArduPlane 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex", "ArduCopter 4.7.0 firmware with bootloader", "ArduCopter 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex", "ArduRover 4.7.0 firmware with bootloader", "ArduRover 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_ardusub_with_bl.hex", "ArduSub 4.7.0 firmware with bootloader", "ArduSub 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/inav_9.1.0_FLYINGRCF4WSEPRO.hex", "INAV 9.1.0 firmware", "INAV 9.1.0 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex", "ArduPlane 4.6.3 firmware with bootloader", "ArduPlane 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_bdshot_arduplane_with_bl.hex", "ArduPlane 4.6.3 BDShot firmware with bootloader", "ArduPlane 4.6.3 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex", "ArduCopter 4.6.3 firmware with bootloader", "ArduCopter 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP457_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex", "ArduPlane 4.5.7 firmware with bootloader", "ArduPlane 4.5.7 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex", "ArduRover 4.6.3 firmware with bootloader", "ArduRover 4.6.3 带 Bootloader 固件"),
    download("assets/downloads/firmware/f4wse-pro/inav_9.0.1_FLYINGRCF4WSEPRO.hex", "INAV 9.0.1 firmware", "INAV 9.0.1 固件"),
    download("assets/downloads/firmware/f4wse-pro/betaflight_2026.6.1_STM32F405_FLYINGRCF4WSEPRO.hex", "Betaflight 2026.6.1 firmware", "Betaflight 2026.6.1 固件"),
    download("assets/downloads/firmware/f4wse-pro/betaflight_2025.12.5_STM32F405_FLYINGRCF4WSEPRO.hex", "Betaflight 2025.12.5 firmware", "Betaflight 2025.12.5 固件"),
    download("assets/downloads/firmware/f4wse-pro/betaflight_4.5.5_STM32F405_FLYINGRCF4WSEPRO.hex", "Betaflight 4.5.5 firmware", "Betaflight 4.5.5 固件"),
    download("assets/downloads/firmware/f4wse-pro/betaflight_2025.12.4_STM32F405_FLYINGRCF4WSEPRO.hex", "Betaflight 2025.12.4 firmware", "Betaflight 2025.12.4 固件"),
    download("assets/downloads/firmware/f4wse-pro/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "h7d-h743": [
    download("https://github.com/FlyingRC-Official/ardupilot/tree/add_FlyingRC_H7D_target", "ArduPilot H7D target branch", "ArduPilot H7D 目标分支"),
    download("https://github.com/FlyingRC-Official/betaflight-config/tree/Add-FlyingRC-H7D-Config", "Betaflight H7D config branch", "Betaflight H7D 配置分支"),
    download("https://github.com/FlyingRC-Official/inav/tree/Add-Target-FlyingRC-H7D", "INAV H7D target branch", "INAV H7D 目标分支"),
    download("assets/downloads/firmware/h7d-h743/betaflight_2026.6.1_STM32H743_FLRCH7D.hex", "Betaflight 2026.6.1 firmware", "Betaflight 2026.6.1 固件"),
    download("assets/downloads/firmware/h7d-h743/betaflight_2025.12.2_STM32H743_FLRCH7D.hex", "Betaflight 2025.12.2 firmware", "Betaflight 2025.12.2 固件"),
    download("assets/downloads/firmware/h7d-h743/inav_8.0.0_FLRCH7D.hex", "INAV 8.0.0 firmware", "INAV 8.0.0 固件"),
    download("assets/downloads/firmware/h7d-h743/AC463_FLRCH7D_bdshot_arducopter_with_bl.hex", "ArduCopter 4.6.3 BDShot firmware with bootloader", "ArduCopter 4.6.3 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-h743/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "h7d-pro": [
    download("https://github.com/FlyingRC-Official/PX4-Autopilot/tree/FlyingRC-H7D-Pro-Board", "PX4 H7D Pro firmware repository", "PX4 H7D Pro 固件仓库"),
    download("https://github.com/FlyingRC-Official/ardupilot/tree/pr-flyingrch7dpro-upstream", "ArduPilot H7D Pro target branch", "ArduPilot H7D Pro 目标分支"),
    download("https://github.com/FlyingRC-Official/betaflight-config/tree/Add-FlyingRC-H7D-Pro-Config", "Betaflight H7D Pro config branch", "Betaflight H7D Pro 配置分支"),
    download("https://github.com/FlyingRC-Official/inav/tree/FLYINGRCH7DPRO", "INAV H7D Pro target branch", "INAV H7D Pro 目标分支"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-arducopter_with_bl.hex", "ArduCopter 4.7.1 firmware with bootloader", "ArduCopter 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-arduplane_with_bl.hex", "ArduPlane 4.7.1 firmware with bootloader", "ArduPlane 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-ardurover_with_bl.hex", "ArduRover 4.7.1 firmware with bootloader", "ArduRover 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-ardusub_with_bl.hex", "ArduSub 4.7.1 firmware with bootloader", "ArduSub 4.7.1 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-arducopter_with_bl.hex", "ArduCopter 4.7.1 BDShot firmware with bootloader", "ArduCopter 4.7.1 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-arduplane_with_bl.hex", "ArduPlane 4.7.1 BDShot firmware with bootloader", "ArduPlane 4.7.1 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-ardurover_with_bl.hex", "ArduRover 4.7.1 BDShot firmware with bootloader", "ArduRover 4.7.1 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-ardusub_with_bl.hex", "ArduSub 4.7.1 BDShot firmware with bootloader", "ArduSub 4.7.1 BDShot 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-arducopter_with_bl.hex", "ArduCopter 4.7.0 firmware with bootloader", "ArduCopter 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-arduplane_with_bl.hex", "ArduPlane 4.7.0 firmware with bootloader", "ArduPlane 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-ardurover_with_bl.hex", "ArduRover 4.7.0 firmware with bootloader", "ArduRover 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-ardusub_with_bl.hex", "ArduSub 4.7.0 firmware with bootloader", "ArduSub 4.7.0 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/inav_9.1.0_FLYINGRCH7DPRO.hex", "INAV 9.1.0 firmware", "INAV 9.1.0 固件"),
    download("assets/downloads/firmware/h7d-pro/betaflight_2026.6.1_STM32H743_FLRCH7DPRO_DUAL-ICM.hex", "Betaflight 2026.6.1 DUAL-ICM firmware", "Betaflight 2026.6.1 DUAL-ICM 固件"),
    download("assets/downloads/firmware/h7d-pro/betaflight_2025.12.5_STM32H743_FLRCH7DPRO_DUAL-ICM.hex", "Betaflight 2025.12.5 DUAL-ICM firmware", "Betaflight 2025.12.5 DUAL-ICM 固件"),
    download("assets/downloads/firmware/h7d-pro/betaflight_4.5.5_STM32H743_FLRCH7DPRO_DUAL-ICM.hex", "Betaflight 4.5.5 DUAL-ICM firmware", "Betaflight 4.5.5 DUAL-ICM 固件"),
    download("assets/downloads/firmware/h7d-pro/betaflight_2025.12.4_STM32H743_FLRCH7DPRO_DUAL-ICM.hex", "Betaflight 2025.12.4 DUAL-ICM firmware", "Betaflight 2025.12.4 DUAL-ICM 固件"),
    download("assets/downloads/firmware/h7d-pro/betaflight_2025.12.2_STM32H743_FLRCH7DPRO_DUAL-ICM.hex", "Betaflight 2025.12.2 DUAL-ICM firmware", "Betaflight 2025.12.2 DUAL-ICM 固件"),
    download("assets/downloads/firmware/h7d-pro/AP463-FlrcH7DPro-arducopter_with_bl.hex", "ArduCopter 4.6.3 dual ICM42688 firmware with bootloader", "ArduCopter 4.6.3 双 ICM42688 带 Bootloader 固件"),
    download("assets/downloads/firmware/h7d-pro/FlyingRC_H7DPro_PX4_1.17.0_FlyingRC-H7D-Pro-Board.zip", "PX4 1.17.0 firmware package", "PX4 1.17.0 固件包"),
    download("assets/downloads/firmware/h7d-pro/inav_9.0.1_FLYINGRCH7DPRO.hex", "INAV 9.0.1 firmware", "INAV 9.0.1 固件"),
    download("assets/downloads/firmware/h7d-pro/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ],
  "l4-can-rm3100": [download("https://github.com/FlyingRC-Official/ardupilot/tree/L4_CAN_RM3100", "ArduPilot L4 CAN RM3100 branch", "ArduPilot L4 CAN RM3100 分支")],
  "rm3100-spi": [
    download("assets/downloads/rm3100-spi/RM3100SPI模块封装.zip", "PCB footprint package", "PCB 封装包"),
    download("assets/downloads/rm3100-spi/3D_RM3100_SPI_Module.step", "STEP 3D model", "STEP 3D 模型")
  ],
  "bec-mini-dji-o4": [download("assets/products/bec-mini-dji-o4/model.step", "STEP 3D model", "STEP 3D 模型")],
  "elrs-24g-diversity": [download("assets/products/elrs-24g-diversity/model.step", "STEP 3D model", "STEP 3D 模型")],
  "f4d-mk1": [download("assets/products/f4d-mk1/video.mp4", "Product video", "产品视频")],
  "am32-esc-75a-can": [
    download("assets/downloads/firmware/am32-esc-75a-can/AM32_FLYINGRC_75A_F415_CAN_2.20_base_9bf5022_full_flash.hex", "AM32 2.20 full-flash HEX with bootloader (commit 9bf5022)", "AM32 2.20 Bootloader + 应用完整 HEX（commit 9bf5022）"),
    download("assets/downloads/firmware/am32-esc-75a-can/AM32_FLYINGRC_75A_F415_CAN_2.20_base_9bf5022.bin", "AM32 2.20 DroneCAN application BIN (commit 9bf5022)", "AM32 2.20 DroneCAN 应用固件 BIN（commit 9bf5022）"),
    download("assets/downloads/firmware/am32-esc-75a-can/AM32_F415_BOOTLOADER_PB4_CAN_V17.hex", "AM32 F415 PB4 CAN V17 bootloader HEX", "AM32 F415 PB4 CAN V17 Bootloader HEX"),
    download("assets/downloads/firmware/am32-esc-75a-can/SHA256SUMS.txt", "SHA256 checksums", "SHA256 校验值")
  ]
};

const FIRMWARE_DOWNLOAD_METADATA = {
  "assets/downloads/firmware/f435wing-mini-osd/inav_9.1.0_FLYINGRCF435WINGMINI.hex": firmwareMeta({
    family: "inav", version: "9.1.0", channel: "stable", role: "latest-stable",
    variantEn: "CGU7 / 1 MB", variantZh: "CGU7 / 1MB", target: "FLYINGRCF435WINGMINI",
    boardRevisionEn: "F435Wing Mini OSD with AT32F435CGU7, 1 MB Flash, BMI270, and SPA06-003.",
    boardRevisionZh: "F435Wing Mini OSD，AT32F435CGU7、1MB Flash、BMI270 与 SPA06-003 版本。",
    checksum: "39e2e2bda2e5f00bae5b5afd2331eef74bac112b9372038e2d8e8cac273ea985",
    compatibilityEn: "INAV 9.1.0 stable firmware for the CGU7 / 1 MB hardware variant. This product supports INAV only.",
    compatibilityZh: "适用于 CGU7 / 1MB 硬件版本的 INAV 9.1.0 稳定固件。本产品仅支持 INAV。"
  }),
  "assets/downloads/firmware/f435wing-mini-osd/inav_9.1.0_FLYINGRCF435WINGMINI_CMU7.hex": firmwareMeta({
    family: "inav", version: "9.1.0", channel: "stable", role: "latest-stable",
    variantEn: "CMU7 / 4 MB", variantZh: "CMU7 / 4MB", target: "FLYINGRCF435WINGMINI_CMU7",
    boardRevisionEn: "F435Wing Mini OSD with AT32F435CMU7, 4 MB Flash, BMI270, and SPA06-003.",
    boardRevisionZh: "F435Wing Mini OSD，AT32F435CMU7、4MB Flash、BMI270 与 SPA06-003 版本。",
    checksum: "422ec16a4d8d5d4a689f879586fdd98d9f356e871f6ddc450568d9033e800d83",
    compatibilityEn: "INAV 9.1.0 stable firmware for the CMU7 / 4 MB hardware variant. This product supports INAV only.",
    compatibilityZh: "适用于 CMU7 / 4MB 硬件版本的 INAV 9.1.0 稳定固件。本产品仅支持 INAV。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRC_H7WliteV2 / ArduCopter",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "47b6dfc1dad4a6a40fd49b24f629cb6a1d9c9466e8d7b88106f4e85e3727afbc",
    compatibilityEn: "ArduCopter 4.7.1 firmware with bootloader for the FlyingRC_H7WliteV2 target.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 目标的 ArduCopter 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRC_H7WliteV2 / ArduPlane",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "3addcc4fa41042c6ff60c65a614b09a58dc3d763e01b3a2aa42378a742785e7b",
    compatibilityEn: "ArduPlane 4.7.1 firmware with bootloader for the FlyingRC_H7WliteV2 target.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 目标的 ArduPlane 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRC_H7WliteV2 / ArduRover",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "cf8d808e11f81615eb6a814d53fc325c446e35d7e5549c3b1a288eaf63db2365",
    compatibilityEn: "ArduRover 4.7.1 firmware with bootloader for the FlyingRC_H7WliteV2 target.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 目标的 ArduRover 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP471_FlyingRC_H7WliteV2_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRC_H7WliteV2 / ArduSub",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "6258c4ea5b9d8be6cdb0f07f23ecaed4b8a337eba822326a8d0160e2fcd6d54d",
    compatibilityEn: "ArduSub 4.7.1 firmware with bootloader for the FlyingRC_H7WliteV2 target.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 目标的 ArduSub 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRCF4WingMini / ArduCopter",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "1f5067b1fd02d839cf0aee0221b547e7c47facffcfcc372dfd4fd2dc24b8771e",
    compatibilityEn: "ArduCopter 4.7.1 firmware with bootloader for the FlyingRCF4WingMini target.",
    compatibilityZh: "适用于 FlyingRCF4WingMini 目标的 ArduCopter 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRCF4WingMini / ArduPlane",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "c2972614b3f57e52a747b016763e0c9412d6f5463f33f038935f3921d44e0a2c",
    compatibilityEn: "ArduPlane 4.7.1 firmware with bootloader for the FlyingRCF4WingMini target.",
    compatibilityZh: "适用于 FlyingRCF4WingMini 目标的 ArduPlane 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRCF4WingMini / ArduRover",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "330436e376010a80ea7cab19bb08838fc92ba00c88290ecdc511cdfe77e4a65a",
    compatibilityEn: "ArduRover 4.7.1 firmware with bootloader for the FlyingRCF4WingMini target.",
    compatibilityZh: "适用于 FlyingRCF4WingMini 目标的 ArduRover 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP471_FlyingRCF4WingMini_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRCF4WingMini / ArduSub",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "6ed64a8914da7c23158cf4a719963caabe95d3379621b6856518c7fb721296c5",
    compatibilityEn: "ArduSub 4.7.1 firmware with bootloader for the FlyingRCF4WingMini target.",
    compatibilityZh: "适用于 FlyingRCF4WingMini 目标的 ArduSub 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRC_F4WSE_Pro / ArduCopter",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "49ca1d2449a859f5c6b5431bbe86cbe954d4a47e786bc5ae4e510d9cd0e9f7a3",
    compatibilityEn: "ArduCopter 4.7.1 firmware with bootloader for the FlyingRC_F4WSE_Pro target.",
    compatibilityZh: "适用于 FlyingRC_F4WSE_Pro 目标的 ArduCopter 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRC_F4WSE_Pro / ArduPlane",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "7258a307a88186dad9afd0ad9cb7c040ed1310d332658b897f51b7e55effa6da",
    compatibilityEn: "ArduPlane 4.7.1 firmware with bootloader for the FlyingRC_F4WSE_Pro target.",
    compatibilityZh: "适用于 FlyingRC_F4WSE_Pro 目标的 ArduPlane 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRC_F4WSE_Pro / ArduRover",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "d785b3a54653c460eb4309cd9b5ae0d614125c01d4dea0c58d60bb914680ad08",
    compatibilityEn: "ArduRover 4.7.1 firmware with bootloader for the FlyingRC_F4WSE_Pro target.",
    compatibilityZh: "适用于 FlyingRC_F4WSE_Pro 目标的 ArduRover 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP471_FlyingRC_F4WSE_Pro_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRC_F4WSE_Pro / ArduSub",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "54f30c0fb5c3f90ade767269eb2c72fc851f40c4bb7979d2fa2441338b5ad2d7",
    compatibilityEn: "ArduSub 4.7.1 firmware with bootloader for the FlyingRC_F4WSE_Pro target.",
    compatibilityZh: "适用于 FlyingRC_F4WSE_Pro 目标的 ArduSub 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRCH7DPro / ArduCopter",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "c061f9449e8e9dd1ca6307c9a2cdd85cda939f96b118da83cf563d2c5630b65b",
    compatibilityEn: "ArduCopter 4.7.1 firmware with bootloader for the FlyingRCH7DPro target.",
    compatibilityZh: "适用于 FlyingRCH7DPro 目标的 ArduCopter 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRCH7DPro / ArduPlane",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "2815e4e01d5ea14453ae09ce009772bdaedf0f8daa1dc1dba4baa6e096e22cc7",
    compatibilityEn: "ArduPlane 4.7.1 firmware with bootloader for the FlyingRCH7DPro target.",
    compatibilityZh: "适用于 FlyingRCH7DPro 目标的 ArduPlane 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRCH7DPro / ArduRover",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "667cf70293f856d323a4341ba5ee6f19a8afad40f4eb1e75a45caa3bccff9eab",
    compatibilityEn: "ArduRover 4.7.1 firmware with bootloader for the FlyingRCH7DPro target.",
    compatibilityZh: "适用于 FlyingRCH7DPro 目标的 ArduRover 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRCH7DPro / ArduSub",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "2153708720be95cd17d99b60834903ce781b6e7f83ff673d8ddf27c479585a41",
    compatibilityEn: "ArduSub 4.7.1 firmware with bootloader for the FlyingRCH7DPro target.",
    compatibilityZh: "适用于 FlyingRCH7DPro 目标的 ArduSub 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduCopter BDShot", variantZh: "ArduCopter BDShot", target: "FlyingRCH7DPro-bdshot / ArduCopter",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing. This build uses the dedicated BDShot timer mapping.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。 本构建使用专用 BDShot 定时器映射。",
    checksum: "810dd59fca9ce4c63590af39cc9c3df49450dda53edcb94bda37cb5d785baed8",
    compatibilityEn: "ArduCopter 4.7.1 firmware with bootloader for the FlyingRCH7DPro-bdshot target.",
    compatibilityZh: "适用于 FlyingRCH7DPro-bdshot 目标的 ArduCopter 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduPlane BDShot", variantZh: "ArduPlane BDShot", target: "FlyingRCH7DPro-bdshot / ArduPlane",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing. This build uses the dedicated BDShot timer mapping.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。 本构建使用专用 BDShot 定时器映射。",
    checksum: "6e6d924d17cab8e0529acb310abb8dbc857e34a187b812ce0d737da7b8e26205",
    compatibilityEn: "ArduPlane 4.7.1 firmware with bootloader for the FlyingRCH7DPro-bdshot target.",
    compatibilityZh: "适用于 FlyingRCH7DPro-bdshot 目标的 ArduPlane 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduRover BDShot", variantZh: "ArduRover BDShot", target: "FlyingRCH7DPro-bdshot / ArduRover",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing. This build uses the dedicated BDShot timer mapping.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。 本构建使用专用 BDShot 定时器映射。",
    checksum: "5900fe2d2837c2519286a572966d82250da612df4e7dded3b8a4367bc941fa0c",
    compatibilityEn: "ArduRover 4.7.1 firmware with bootloader for the FlyingRCH7DPro-bdshot target.",
    compatibilityZh: "适用于 FlyingRCH7DPro-bdshot 目标的 ArduRover 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP471-FlrcH7DPro-bdshot-ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.1", channel: "stable", role: "latest-stable",
    variantEn: "ArduSub BDShot", variantZh: "ArduSub BDShot", target: "FlyingRCH7DPro-bdshot / ArduSub",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing. This build uses the dedicated BDShot timer mapping.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。 本构建使用专用 BDShot 定时器映射。",
    checksum: "819f98faf9e3d06ca569015df587b0e0d4b9703f59c053202445facc19f7a0fb",
    compatibilityEn: "ArduSub 4.7.1 firmware with bootloader for the FlyingRCH7DPro-bdshot target.",
    compatibilityZh: "适用于 FlyingRCH7DPro-bdshot 目标的 ArduSub 4.7.1 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduCopter 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduCopter 4.7.1 稳定版。",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRC_H7WliteV2 / ArduCopter",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "70498c58b4f279e81d37eae39f40418a6c559faa8b527d3bbee81e95eb3e0035",
    compatibilityEn: "ArduCopter 4.7.0 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduCopter 4.7.0 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduPlane 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduPlane 4.7.1 稳定版。",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRC_H7WliteV2 / ArduPlane",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "0b825a044d5d685330d13676fa042d8d317019976a68f30b7918a6c318b634b5",
    compatibilityEn: "ArduPlane 4.7.0 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduPlane 4.7.0 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduRover 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduRover 4.7.1 稳定版。",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRC_H7WliteV2 / ArduRover",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "13c0d09c9ea186dcdf08faddf31fe131224d2f1c790a3230bfe4ea0e5c7a9d57",
    compatibilityEn: "ArduRover 4.7.0 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduRover 4.7.0 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP470_FlyingRC_H7WliteV2_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduSub 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduSub 4.7.1 稳定版。",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRC_H7WliteV2 / ArduSub",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "deffc1def43aa72ae3542531d062d04e1532ffcb03add2733e8c908d8a5cdb4e",
    compatibilityEn: "ArduSub 4.7.0 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduSub 4.7.0 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduPlane 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduPlane 4.7.1 稳定版。",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRCF4WingMini / ArduPlane",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "0d4cd35ef451d2f57266e2873be73a4bf993567267b418cfeb4a84b5a340b710",
    compatibilityEn: "ArduPlane 4.7.0 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduPlane 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduCopter 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduCopter 4.7.1 稳定版。",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRCF4WingMini / ArduCopter",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "0994c85ebc882058b8af35f54f60ca327c67d9971febe3ac32cd08e686806e8a",
    compatibilityEn: "ArduCopter 4.7.0 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduCopter 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduRover 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduRover 4.7.1 稳定版。",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRCF4WingMini / ArduRover",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "7798dba0a4d55071cba5ade2549974eb757c8b01acbf1689fe099941d672abb9",
    compatibilityEn: "ArduRover 4.7.0 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduRover 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP470_FlyingRCF4WingMini_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduSub 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduSub 4.7.1 稳定版。",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRCF4WingMini / ArduSub",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "39666b26fc3eefc74368924151e5b17c9cb2d03a773f6fe2d4398d5479645b2c",
    compatibilityEn: "ArduSub 4.7.0 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduSub 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduPlane 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduPlane 4.7.1 稳定版。",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRC_F4WSE_Pro / ArduPlane",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "1d2b8d5bb0152110a848827469aae3843fea0402ae30f4e950cf1c77cbeb687b",
    compatibilityEn: "ArduPlane 4.7.0 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduPlane 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduCopter 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduCopter 4.7.1 稳定版。",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRC_F4WSE_Pro / ArduCopter",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "7edc4699ca31cfdb67fa7823a45f4a91d95ee38b1d4d8dfc00fcc46f0e3df572",
    compatibilityEn: "ArduCopter 4.7.0 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduCopter 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduRover 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduRover 4.7.1 稳定版。",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRC_F4WSE_Pro / ArduRover",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "37d53a1ca1446c18eaf96769186bfd5161d594159508f93b1888b6a68bf8dd3c",
    compatibilityEn: "ArduRover 4.7.0 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduRover 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP470_FlyingRC_F4WSE_Pro_ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduSub 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduSub 4.7.1 稳定版。",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRC_F4WSE_Pro / ArduSub",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "c952e1b32b85eaf848c7ba463e531530eba78f59f5d07133ae580c5fe652dbd6",
    compatibilityEn: "ArduSub 4.7.0 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduSub 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduCopter 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduCopter 4.7.1 稳定版。",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRCH7DPro / ArduCopter",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "ee4bbec89c84852bfaf8056c39df510c08636ce37af09a309d7e4724a41be71b",
    compatibilityEn: "ArduCopter 4.7.0 firmware with bootloader for the H7D Pro target.",
    compatibilityZh: "适用于 H7D Pro 目标的 ArduCopter 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduPlane 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduPlane 4.7.1 稳定版。",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRCH7DPro / ArduPlane",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "165bc38e92b5e209b14f0578749784e6fc512b2f855c748e5ee90268864ac139",
    compatibilityEn: "ArduPlane 4.7.0 firmware with bootloader for the H7D Pro target.",
    compatibilityZh: "适用于 H7D Pro 目标的 ArduPlane 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduRover 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduRover 4.7.1 稳定版。",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRCH7DPro / ArduRover",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "1bbcef573dc659d9e86a7100b68f6f762880b07db8ed80c52b622fbb5a833d3c",
    compatibilityEn: "ArduRover 4.7.0 firmware with bootloader for the H7D Pro target.",
    compatibilityZh: "适用于 H7D Pro 目标的 ArduRover 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP470-FlrcH7DPro-ardusub_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.7.0", channel: "stable", role: "archive",
    archiveNoteEn: "Archived formal release; use ArduSub 4.7.1 as the recommended stable release.",
    archiveNoteZh: "历史正式版本；推荐使用 ArduSub 4.7.1 稳定版。",
    variantEn: "ArduSub", variantZh: "ArduSub", target: "FlyingRCH7DPro / ArduSub",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "5d0393f3ffbd88dbd279decc0d942c35ff726a9a1ca39c0fd95b8052c35e528b",
    compatibilityEn: "ArduSub 4.7.0 firmware with bootloader for the H7D Pro target.",
    compatibilityZh: "适用于 H7D Pro 目标的 ArduSub 4.7.0 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.6.3", channel: "stable", role: "archive",
    variantEn: "ArduCopter", variantZh: "ArduCopter", target: "FlyingRC_H7WliteV2 / ArduCopter",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "a30eadeba3c2110ee366dc1483cbd11137261630ba083971d2e241e52655ce0b",
    compatibilityEn: "ArduCopter 4.6.3 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduCopter 4.6.3 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.6.3", channel: "stable", role: "archive",
    variantEn: "ArduPlane", variantZh: "ArduPlane", target: "FlyingRC_H7WliteV2 / ArduPlane",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "3bbd74a275205c26ed9ead5c2050be2ec0177273775ad96d6d0cca372382985a",
    compatibilityEn: "ArduPlane 4.6.3 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduPlane 4.6.3 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/AP463_FlyingRC_H7WliteV2_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot", version: "4.6.3", channel: "stable", role: "archive",
    variantEn: "ArduRover", variantZh: "ArduRover", target: "FlyingRC_H7WliteV2 / ArduRover",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; secondary BMI270 uses corrected ROTATION_NONE orientation; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；第二颗 BMI270 已采用修正后的 ROTATION_NONE 方向；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "5004dd1fd395a06894d1f1062df371bef36c8f38f24010a0eec42d2445b2ccd8",
    compatibilityEn: "ArduRover 4.6.3 firmware with bootloader for FlyingRC_H7WliteV2. Rebuilt with target correction 0a1f8148.",
    compatibilityZh: "适用于 FlyingRC_H7WliteV2 的 ArduRover 4.6.3 带 Bootloader 固件。已按目标修正 commit 0a1f8148 重新构建。"
  }),
  "assets/downloads/firmware/h7wlite-v2/inav_9.1.0_FLYINGRCH7WLITEV2.hex": firmwareMeta({
    family: "inav", version: "9.1.0", channel: "stable", role: "latest-stable", target: "FLYINGRCH7WLITEV2 / H7W2",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; ICM42688P and ICM42605 alternatives are supported.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；兼容 ICM42688P 与 ICM42605 替代器件。",
    checksum: "d5b3e3a9dd65cc24a5b6e1e43dfcca1c7227405c26c3584cd58bf6ceb8fc9d53",
    compatibilityEn: "INAV 9.1.0 firmware for the FLYINGRCH7WLITEV2 target.",
    compatibilityZh: "适用于 FLYINGRCH7WLITEV2 目标的 INAV 9.1.0 固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/betaflight_2025.12.5_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex": firmwareMeta({
    family: "betaflight", version: "2025.12.5", channel: "stable", role: "archive", target: "STM32H743 / FLYINGRCH7WLITEV2_BMI270",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; BMI270 hardware only.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；仅适用于 BMI270 硬件。",
    checksum: "5a7cab472df69c38b6b85c084c1ade63469ecae45e397bfb66e0344627126c92",
    compatibilityEn: "Betaflight 2025.12.5 BMI270-only firmware for FLYINGRCH7WLITEV2_BMI270.",
    compatibilityZh: "适用于 FLYINGRCH7WLITEV2_BMI270 的 Betaflight 2025.12.5 BMI270 专用固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/betaflight_2026.6.1_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex": firmwareMeta({
    family: "betaflight", version: "2026.6.1", channel: "stable", role: "latest-stable", target: "STM32H743 / FLYINGRCH7WLITEV2_BMI270",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; BMI270 hardware only.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；仅适用于 BMI270 硬件。",
    checksum: "30fb3a02604658f71d1e7689f947e672a6692b2aecabed731f41f544a4dc6f57",
    compatibilityEn: "Betaflight 2026.6.1 BMI270-only firmware for FLYINGRCH7WLITEV2_BMI270.",
    compatibilityZh: "适用于 FLYINGRCH7WLITEV2_BMI270 的 Betaflight 2026.6.1 BMI270 专用固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/betaflight_4.5.5_STM32H743_FLYINGRCH7WLITEV2_BMI270.hex": firmwareMeta({
    family: "betaflight", version: "4.5.5", channel: "stable", role: "archive",
    archiveNoteEn: "Retained stable 4.5.x build; use Betaflight 2026.6.1 for the current recommended stable build.",
    archiveNoteZh: "保留的 4.5.x 稳定构建；当前推荐稳定版请使用 Betaflight 2026.6.1。",
    target: "STM32H743 / FLYINGRCH7WLITEV2_BMI270",
    boardRevisionEn: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P revision; BMI270 hardware only.",
    boardRevisionZh: "H7Wlite V2 BMI270 / SPA06-003 / QMC5883P 版本；仅适用于 BMI270 硬件。",
    checksum: "a5c85433c2a0d8eac7c2ec4bc9caf8d77634be72370cecd691e4d4fbe1e5e907",
    compatibilityEn: "Betaflight 4.5.5 BMI270-only firmware for FLYINGRCH7WLITEV2_BMI270.",
    compatibilityZh: "适用于 FLYINGRCH7WLITEV2_BMI270 的 Betaflight 4.5.5 BMI270 专用固件。"
  }),
  "assets/downloads/firmware/h7wlite-v2/FlyingRC_H7WliteV2_PX4_custom_50161b1_FlyingRC-H7Wlite-V2-Board.zip": firmwareMeta({
    family: "px4",
    version: "custom-50161b1",
    channel: "unstable",
    role: "archive",
    archiveNoteEn: "Custom board-port build based on commit 50161b1; not an official tagged PX4 release.",
    archiveNoteZh: "基于 commit 50161b1 的自定义板级移植构建；并非 PX4 官方 tag 正式版。",
    target: "flyingrc_h7wlite-v2 / Board ID 1219",
    boardRevisionEn: "FlyingRC H7Wlite V2 board package with default and bootloader firmware.",
    boardRevisionZh: "FlyingRC H7Wlite V2 板级固件包，包含 default 与 bootloader 固件。",
    checksum: "fa777f8d47b8c9d1f8272bd27759d2cf0e8d0c6d65d8d67bc395465bfecf3168",
    compatibilityEn: "PX4 custom firmware package for the flyingrc_h7wlite-v2 target; use the default .px4 file with QGroundControl.",
    compatibilityZh: "适用于 flyingrc_h7wlite-v2 目标的 PX4 自定义固件包；可在 QGroundControl 中加载 default .px4 文件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/inav_9.1.0_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "inav",
    version: "9.1.0",
    channel: "stable",
    role: "archive",
    target: "FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "de2009e9f90bbced7f05a11387c0dcc2bca69ee1d0aa1ec283dc27756b7c32a3",
    compatibilityEn: "INAV 9.1.0 firmware for the FlyingRC F4Wing Mini target.",
    compatibilityZh: "适用于 FlyingRC F4Wing Mini 目标的 INAV 9.1.0 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/inav_9.1.0_FLYINGRCF4WINGMINI_INA226.hex": firmwareMeta({
    family: "inav",
    version: "9.1.0-custom-INA226",
    channel: "unstable",
    role: "archive",
    variantEn: "INA226 I2C",
    variantZh: "INA226 I2C",
    archiveNoteEn: "Custom build based on official INAV 9.1.0 with FlyingRC INA226 support; it is not an official INAV release asset.",
    archiveNoteZh: "基于官方 INAV 9.1.0 并加入 FlyingRC INA226 支持的定制构建；不是 INAV 官方发布附件。",
    target: "FLYINGRCF4WINGMINI / INA226 on I2C1",
    boardRevisionEn: "F4Wing Mini MK1; external INA226 on PB8 SCL / PB7 SDA at default address 0x40.",
    boardRevisionZh: "F4Wing Mini MK1；外接 INA226 使用 PB8 SCL / PB7 SDA，默认地址 0x40。",
    checksum: "d80855722b3cc6b20bf1a90b86e49dd0c19e04a09864349116091d3155161cb8",
    compatibilityEn: "Select INA226 for current and voltage after flashing, then set ina_shunt_res_uohm to the module's actual shunt resistance.",
    compatibilityZh: "刷写后将电流计和电压计类型设为 INA226，并按模块实际分流电阻设置 ina_shunt_res_uohm。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/inav_9.0.1_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "inav",
    version: "9.0.1",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Older stable INAV build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 INAV 构建，供需要上一版已测试固件的用户使用。",
    target: "FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "c4b6fe0b33c65f49c937d5a3287bbf4de0980171aa0fa09bda7d6f69d4804657",
    compatibilityEn: "INAV 9.0.1 firmware for the FlyingRC F4Wing Mini target.",
    compatibilityZh: "适用于 FlyingRC F4Wing Mini 目标的 INAV 9.0.1 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP463_FlyingRCF4WingMini_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduPlane",
    variantZh: "ArduPlane",
    target: "FlyingRCF4WingMini / ArduPlane",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    compatibilityEn: "ArduPlane 4.6.3 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduPlane 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/AP463_FlyingRCF4WingMini_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduCopter",
    variantZh: "ArduCopter",
    target: "FlyingRCF4WingMini / ArduCopter",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "c21551141b9ee8c941d784d895ba994c534056b0c9335abbc2cec76211411adc",
    compatibilityEn: "ArduCopter 4.6.3 firmware with bootloader for the F4Wing Mini target.",
    compatibilityZh: "适用于 F4Wing Mini 目标的 ArduCopter 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/betaflight_2025.12.5_STM32F405_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.5",
    channel: "stable",
    role: "archive",
    target: "STM32F405 / FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "74455393edd9609c3e422dcb60de122b9dddfeaeba5ee26ff02a308ae483c097",
    compatibilityEn: "Betaflight 2025.12.5 firmware for the FLYINGRCF4WINGMINI target.",
    compatibilityZh: "适用于 FLYINGRCF4WINGMINI 目标的 Betaflight 2025.12.5 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/betaflight_2026.6.1_STM32F405_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "betaflight", version: "2026.6.1", channel: "stable", role: "latest-stable", target: "STM32F405 / FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "178a45fc9325b5747f254b926658ef9b7191b6a5b2caab96985824a970320830",
    compatibilityEn: "Betaflight 2026.6.1 firmware for the FLYINGRCF4WINGMINI target.",
    compatibilityZh: "适用于 FLYINGRCF4WINGMINI 目标的 Betaflight 2026.6.1 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/betaflight_4.5.5_STM32F405_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "betaflight",
    version: "4.5.5",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Retained Betaflight 4.5.5 stable maintenance-line build for users who need the 4.5.x series; use Betaflight 2026.6.1 for the current recommended stable build.",
    archiveNoteZh: "保留的 Betaflight 4.5.5 稳定维护线构建，供需要 4.5.x 系列的用户使用；当前推荐稳定版请优先使用 Betaflight 2026.6.1。",
    target: "STM32F405 / FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "28372661b9200f2b14ad75ae4c8085745929c5d773582da281ff97527c89e4e4",
    compatibilityEn: "Betaflight 4.5.5 firmware for the FLYINGRCF4WINGMINI target.",
    compatibilityZh: "适用于 FLYINGRCF4WINGMINI 目标的 Betaflight 4.5.5 固件。"
  }),
  "assets/downloads/firmware/f4wing-mini-mk1/betaflight_2025.12.4_STM32F405_FLYINGRCF4WINGMINI.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.4",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Older stable Betaflight build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 Betaflight 构建，供需要上一版已测试固件的用户使用。",
    target: "STM32F405 / FLYINGRCF4WINGMINI",
    boardRevisionEn: "F4Wing Mini MK1; verify IMU and barometer revision before flashing.",
    boardRevisionZh: "F4Wing Mini MK1；刷写前请核对 IMU 和气压计版本。",
    checksum: "21f94fb8a6a6a195bbb71895b6fc255f12d552639b7bf2108c15a873809083f2",
    compatibilityEn: "Betaflight 2025.12.4 firmware for the FLYINGRCF4WINGMINI target.",
    compatibilityZh: "适用于 FLYINGRCF4WINGMINI 目标的 Betaflight 2025.12.4 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduPlane",
    variantZh: "ArduPlane",
    target: "FlyingRC_F4WSE_Pro / ArduPlane",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "18009d54878ee5bbd2ac6d22c8ac0f3c7ee71258ce8afa03b152a7047e4ce949",
    compatibilityEn: "ArduPlane 4.6.3 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduPlane 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_bdshot_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduPlane BDShot",
    variantZh: "ArduPlane BDShot",
    archiveNoteEn: "Special BDShot build; use only for ESC setups that need bidirectional DShot.",
    archiveNoteZh: "特殊 BDShot 构建；仅用于需要双向 DShot 的电调配置。",
    target: "FlyingRC_F4WSE_Pro / ArduPlane BDShot",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "52ec4a8df4d3399c3aa18d9efb588c9cc2e62ae990d63376f8d03309da898a41",
    compatibilityEn: "ArduPlane 4.6.3 BDShot firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduPlane 4.6.3 BDShot 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduCopter",
    variantZh: "ArduCopter",
    target: "FlyingRC_F4WSE_Pro / ArduCopter",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "88779e52d06759ad0b47a57e330cce0c420d60727cf4e854327c3624bd61b49b",
    compatibilityEn: "ArduCopter 4.6.3 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduCopter 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP457_FlyingRC_F4WSE_Pro_arduplane_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.5.7",
    channel: "stable",
    role: "archive",
    variantEn: "ArduPlane",
    variantZh: "ArduPlane",
    archiveNoteEn: "Older stable ArduPlane build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 ArduPlane 构建，供需要上一版已测试固件的用户使用。",
    target: "FlyingRC_F4WSE_Pro / ArduPlane",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "4cc715eead96a5a67ff941168dd191afc7e7062c6e6b6514d03d85fab8328a50",
    compatibilityEn: "ArduPlane 4.5.7 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduPlane 4.5.7 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/AP463_FlyingRC_F4WSE_Pro_ardurover_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduRover",
    variantZh: "ArduRover",
    target: "FlyingRC_F4WSE_Pro / ArduRover",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "b765e6d1ca089396d285496b57fbcb84a9b1012d48ae7039969455082c570a15",
    compatibilityEn: "ArduRover 4.6.3 firmware with bootloader for the F4WSE Pro target.",
    compatibilityZh: "适用于 F4WSE Pro 目标的 ArduRover 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/inav_9.0.1_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "inav",
    version: "9.0.1",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Older stable INAV build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 INAV 构建，供需要上一版已测试固件的用户使用。",
    target: "FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "b996bdd8cb1dd4a41a94a15554c7d8b5cad0dc52b5c3b23198d53da1e0c5f1c0",
    compatibilityEn: "INAV 9.0.1 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 INAV 9.0.1 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/inav_9.1.0_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "inav",
    version: "9.1.0",
    channel: "stable",
    role: "archive",
    target: "FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "a5a4c5481812040f21f6ddd3a60b72b6039565891dc121b9c9798b32e856de3d",
    compatibilityEn: "INAV 9.1.0 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 INAV 9.1.0 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/betaflight_2025.12.5_STM32F405_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.5",
    channel: "stable",
    role: "archive",
    target: "STM32F405 / FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "b0ca203c20f507594137cfdd64a69d3d6b009ce75f714472bc0f345cbc8d57f0",
    compatibilityEn: "Betaflight 2025.12.5 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 Betaflight 2025.12.5 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/betaflight_2026.6.1_STM32F405_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "betaflight", version: "2026.6.1", channel: "stable", role: "latest-stable", target: "STM32F405 / FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "ff1ab73aa083c1924a27010bffd4b629e09da81ee0f04b740e0dfed2c84929cf",
    compatibilityEn: "Betaflight 2026.6.1 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 Betaflight 2026.6.1 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/betaflight_4.5.5_STM32F405_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "betaflight",
    version: "4.5.5",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Retained Betaflight 4.5.5 stable maintenance-line build for users who need the 4.5.x series; use Betaflight 2026.6.1 for the current recommended stable build.",
    archiveNoteZh: "保留的 Betaflight 4.5.5 稳定维护线构建，供需要 4.5.x 系列的用户使用；当前推荐稳定版请优先使用 Betaflight 2026.6.1。",
    target: "STM32F405 / FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "abbea0690ddb64050b6b1f43efb7984dc06a795c1c8ae656ede789b70757a2c6",
    compatibilityEn: "Betaflight 4.5.5 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 Betaflight 4.5.5 固件。"
  }),
  "assets/downloads/firmware/f4wse-pro/betaflight_2025.12.4_STM32F405_FLYINGRCF4WSEPRO.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.4",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Older stable Betaflight build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 Betaflight 构建，供需要上一版已测试固件的用户使用。",
    target: "STM32F405 / FLYINGRCF4WSEPRO",
    boardRevisionEn: "F4WSE Pro; verify BMI270 or ICM42688P hardware revision before flashing.",
    boardRevisionZh: "F4WSE Pro；刷写前请核对 BMI270 或 ICM42688P 硬件版本。",
    checksum: "1e982c89bd9946f146e597275ac261fd41d32945023dca6f6f93bc96ed484b5f",
    compatibilityEn: "Betaflight 2025.12.4 firmware for the FLYINGRCF4WSEPRO target.",
    compatibilityZh: "适用于 FLYINGRCF4WSEPRO 目标的 Betaflight 2025.12.4 固件。"
  }),
  "assets/downloads/firmware/h7d-h743/betaflight_2025.12.2_STM32H743_FLRCH7D.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.2",
    channel: "stable",
    role: "archive",
    target: "STM32H743 / FLRCH7D",
    boardRevisionEn: "H7D H743 hardware; verify target name before flashing.",
    boardRevisionZh: "H7D H743 硬件；刷写前请核对目标名称。",
    compatibilityEn: "Betaflight 2025.12.2 firmware for the FLRCH7D target.",
    compatibilityZh: "适用于 FLRCH7D 目标的 Betaflight 2025.12.2 固件。"
  }),
  "assets/downloads/firmware/h7d-h743/betaflight_2026.6.1_STM32H743_FLRCH7D.hex": firmwareMeta({
    family: "betaflight", version: "2026.6.1", channel: "stable", role: "latest-stable", target: "STM32H743 / FLRCH7D",
    boardRevisionEn: "H7D H743 hardware; verify target name before flashing.",
    boardRevisionZh: "H7D H743 硬件；刷写前请核对目标名称。",
    checksum: "620a8fa12f4a30c64fe22757006ad860661053897e868ca93e33a53f6c1b0eba",
    compatibilityEn: "Betaflight 2026.6.1 firmware for the FLRCH7D target.",
    compatibilityZh: "适用于 FLRCH7D 目标的 Betaflight 2026.6.1 固件。"
  }),
  "assets/downloads/firmware/h7d-h743/inav_8.0.0_FLRCH7D.hex": firmwareMeta({
    family: "inav",
    version: "8.0.0",
    channel: "stable",
    role: "archive",
    target: "FLRCH7D",
    boardRevisionEn: "H7D H743 hardware; verify target name before flashing.",
    boardRevisionZh: "H7D H743 硬件；刷写前请核对目标名称。",
    compatibilityEn: "INAV 8.0.0 firmware for the FLRCH7D target.",
    compatibilityZh: "适用于 FLRCH7D 目标的 INAV 8.0.0 固件。"
  }),
  "assets/downloads/firmware/h7d-h743/AC463_FLRCH7D_bdshot_arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "latest-stable",
    variantEn: "ArduCopter BDShot",
    variantZh: "ArduCopter BDShot",
    target: "FLRCH7D / ArduCopter BDShot",
    boardRevisionEn: "H7D H743 hardware; verify target name before flashing.",
    boardRevisionZh: "H7D H743 硬件；刷写前请核对目标名称。",
    compatibilityEn: "ArduCopter 4.6.3 BDShot firmware with bootloader for the FLRCH7D target.",
    compatibilityZh: "适用于 FLRCH7D 目标的 ArduCopter 4.6.3 BDShot 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/betaflight_2025.12.5_STM32H743_FLRCH7DPRO_DUAL-ICM.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.5",
    channel: "stable",
    role: "archive",
    variantEn: "DUAL-ICM",
    variantZh: "DUAL-ICM",
    target: "STM32H743 / FLRCH7DPRO_DUAL-ICM",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "eab0f75717e8d97b739c7070dba9f8d369c2c28ce3ad9e88c656443a622e5135",
    compatibilityEn: "Betaflight 2025.12.5 DUAL-ICM firmware for the FLRCH7DPRO target.",
    compatibilityZh: "适用于 FLRCH7DPRO 目标的 Betaflight 2025.12.5 DUAL-ICM 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/betaflight_2026.6.1_STM32H743_FLRCH7DPRO_DUAL-ICM.hex": firmwareMeta({
    family: "betaflight", version: "2026.6.1", channel: "stable", role: "latest-stable", variantEn: "DUAL-ICM", variantZh: "DUAL-ICM", target: "STM32H743 / FLRCH7DPRO_DUAL-ICM",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "f99ec90962b1dabe7bdb8a6c4c0e1152c87221cc52f06a76b864ec62dde589f4",
    compatibilityEn: "Betaflight 2026.6.1 DUAL-ICM firmware for the FLRCH7DPRO target.",
    compatibilityZh: "适用于 FLRCH7DPRO 的 Betaflight 2026.6.1 DUAL-ICM 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/betaflight_4.5.5_STM32H743_FLRCH7DPRO_DUAL-ICM.hex": firmwareMeta({
    family: "betaflight",
    version: "4.5.5",
    channel: "stable",
    role: "archive",
    variantEn: "DUAL-ICM",
    variantZh: "DUAL-ICM",
    archiveNoteEn: "Retained Betaflight 4.5.5 stable maintenance-line build for users who need the 4.5.x series; use Betaflight 2026.6.1 for the current recommended stable build.",
    archiveNoteZh: "保留的 Betaflight 4.5.5 稳定维护线构建，供需要 4.5.x 系列的用户使用；当前推荐稳定版请优先使用 Betaflight 2026.6.1。",
    target: "STM32H743 / FLRCH7DPRO_DUAL-ICM",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "46af66614e6aafade10b25f78e9af5c2afeeb83b9f3cc6fdcd179a349ea1f710",
    compatibilityEn: "Betaflight 4.5.5 DUAL-ICM firmware for the FLRCH7DPRO target.",
    compatibilityZh: "适用于 FLRCH7DPRO 目标的 Betaflight 4.5.5 DUAL-ICM 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/betaflight_2025.12.4_STM32H743_FLRCH7DPRO_DUAL-ICM.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.4",
    channel: "stable",
    role: "archive",
    variantEn: "DUAL-ICM",
    variantZh: "DUAL-ICM",
    archiveNoteEn: "Older stable Betaflight build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 Betaflight 构建，供需要上一版已测试固件的用户使用。",
    target: "STM32H743 / FLRCH7DPRO_DUAL-ICM",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "db3b4863ce1cdbbefd53d942ab394a7bc9f41057837189cc814f82d74fd0e9cf",
    compatibilityEn: "Betaflight 2025.12.4 DUAL-ICM firmware for the FLRCH7DPRO target.",
    compatibilityZh: "适用于 FLRCH7DPRO 目标的 Betaflight 2025.12.4 DUAL-ICM 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/betaflight_2025.12.2_STM32H743_FLRCH7DPRO_DUAL-ICM.hex": firmwareMeta({
    family: "betaflight",
    version: "2025.12.2",
    channel: "stable",
    role: "archive",
    variantEn: "DUAL-ICM",
    variantZh: "DUAL-ICM",
    archiveNoteEn: "Older stable Betaflight build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 Betaflight 构建，供需要上一版已测试固件的用户使用。",
    target: "STM32H743 / FLRCH7DPRO_DUAL-ICM",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "f9c664961b7a08a8d596c0cddf93d820c32529fc2090163449447297ed43ba0e",
    compatibilityEn: "Betaflight 2025.12.2 DUAL-ICM firmware for the FLRCH7DPRO target.",
    compatibilityZh: "适用于 FLRCH7DPRO 目标的 Betaflight 2025.12.2 DUAL-ICM 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/AP463-FlrcH7DPro-arducopter_with_bl.hex": firmwareMeta({
    family: "ardupilot",
    version: "4.6.3",
    channel: "stable",
    role: "archive",
    variantEn: "ArduCopter",
    variantZh: "ArduCopter",
    target: "FlyingRCH7DPro / ArduCopter",
    boardRevisionEn: "H7D Pro dual ICM42688 hardware; verify sensor revision before flashing.",
    boardRevisionZh: "H7D Pro 双 ICM42688 硬件；刷写前请核对传感器版本。",
    checksum: "2b39a8da307a033cae6e3b9cdaddf9aaa4c83f45978cb4b65a711becf1e1c502",
    compatibilityEn: "ArduCopter 4.6.3 firmware with bootloader for the H7D Pro target.",
    compatibilityZh: "适用于 H7D Pro 目标的 ArduCopter 4.6.3 带 Bootloader 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/FlyingRC_H7DPro_PX4_1.17.0_FlyingRC-H7D-Pro-Board.zip": firmwareMeta({
    family: "px4",
    version: "1.17.0",
    channel: "stable",
    role: "latest-stable",
    target: "FlyingRC-H7D-Pro-Board / PX4",
    boardRevisionEn: "H7D Pro hardware; verify PX4 board package before flashing.",
    boardRevisionZh: "H7D Pro 硬件；刷写前请核对 PX4 板级固件包。",
    checksum: "d129ba717e894c9b30a4173b2256923c69da1aaba0cf38a439168046eda993be",
    compatibilityEn: "PX4 1.17.0 firmware package for the FlyingRC-H7D-Pro-Board port.",
    compatibilityZh: "适用于 FlyingRC-H7D-Pro-Board 板级移植的 PX4 1.17.0 固件包。"
  }),
  "assets/downloads/firmware/h7d-pro/inav_9.0.1_FLYINGRCH7DPRO.hex": firmwareMeta({
    family: "inav",
    version: "9.0.1",
    channel: "stable",
    role: "archive",
    archiveNoteEn: "Older stable INAV build retained for users who need the previous tested release.",
    archiveNoteZh: "保留的旧版稳定 INAV 构建，供需要上一版已测试固件的用户使用。",
    target: "FLYINGRCH7DPRO",
    boardRevisionEn: "H7D Pro hardware; verify target name before flashing.",
    boardRevisionZh: "H7D Pro 硬件；刷写前请核对目标名称。",
    checksum: "82eaee4682d991220e6b17da2b75104d0e0ae841408e74ed8dba698697f3d69b",
    compatibilityEn: "INAV 9.0.1 firmware for the FLYINGRCH7DPRO target.",
    compatibilityZh: "适用于 FLYINGRCH7DPRO 目标的 INAV 9.0.1 固件。"
  }),
  "assets/downloads/firmware/h7d-pro/inav_9.1.0_FLYINGRCH7DPRO.hex": firmwareMeta({
    family: "inav",
    version: "9.1.0",
    channel: "stable",
    role: "latest-stable",
    target: "FLYINGRCH7DPRO",
    boardRevisionEn: "H7D Pro hardware; verify target name before flashing.",
    boardRevisionZh: "H7D Pro 硬件；刷写前请核对目标名称。",
    checksum: "f76b29c0dc32b123c3ec8da8666e7399f0e07fd6eaf19fa911fad2c5de830335",
    compatibilityEn: "INAV 9.1.0 firmware for the FLYINGRCH7DPRO target.",
    compatibilityZh: "适用于 FLYINGRCH7DPRO 目标的 INAV 9.1.0 固件。"
  }),
  "assets/downloads/firmware/am32-esc-75a-can/AM32_FLYINGRC_75A_F415_CAN_2.20_base_9bf5022.bin": firmwareMeta({
    family: "am32",
    version: "2.20",
    channel: "custom",
    role: "current-product",
    variantEn: "DroneCAN application BIN",
    variantZh: "DroneCAN 应用 BIN",
    target: "FLYINGRC_75A_F415_CAN / AT32F415KBU7-4 / application @ 0x08004000",
    boardRevisionEn: "FlyingRC AM32 ESC CAN Bus 75A with AT32F415KBU7-4 (128 KiB); not for AT32F421 or AT32F415K8U7-4.",
    boardRevisionZh: "FlyingRC AM32 ESC CAN 总线 75A，AT32F415KBU7-4（128KiB）版本；不适用于 AT32F421 或 AT32F415K8U7-4。",
    checksum: "f09d85fe64f041b531bd5a8234e7dd567c28c9607c2bbc9811bd57f0163317b6",
    compatibilityEn: "Application-only BIN. For SWD flashing, write at 0x08004000 and preserve the bootloader at 0x08000000-0x08003FFF and EEPROM at 0x0801F800. Intended for the matching PB4 CAN V17 bootloader.",
    compatibilityZh: "仅含应用固件的 BIN。使用 SWD 烧写时写入 0x08004000，并保留 0x08000000-0x08003FFF Bootloader 区域及 0x0801F800 EEPROM；需配合 PB4 CAN V17 Bootloader。",
    archiveNoteEn: "Custom FlyingRC build based on AM32 2.20 at commit 9bf5022; this is the current product build, not an official AM32 release asset.",
    archiveNoteZh: "基于 AM32 2.20、commit 9bf5022 的 FlyingRC 定制构建；这是当前产品固件，并非 AM32 官方 Release 附件。"
  }),
  "assets/downloads/firmware/am32-esc-75a-can/AM32_FLYINGRC_75A_F415_CAN_2.20_base_9bf5022_full_flash.hex": firmwareMeta({
    family: "am32",
    version: "2.20",
    channel: "custom",
    role: "current-product",
    variantEn: "Bootloader + DroneCAN application HEX",
    variantZh: "Bootloader + DroneCAN 应用完整 HEX",
    target: "FLYINGRC_75A_F415_CAN / AT32F415KBU7-4 / full flash @ 0x08000000",
    boardRevisionEn: "FlyingRC AM32 ESC CAN Bus 75A with AT32F415KBU7-4 (128 KiB); not for AT32F421 or AT32F415K8U7-4.",
    boardRevisionZh: "FlyingRC AM32 ESC CAN 总线 75A，AT32F415KBU7-4（128KiB）版本；不适用于 AT32F421 或 AT32F415K8U7-4。",
    checksum: "8d5ab541546acc2545f5fb7afb3a8e8e9a5060268f3b689fa11e29a58d29eff3",
    compatibilityEn: "Combined Intel HEX for SWD recovery/programming: PB4 CAN V17 bootloader at 0x08000000 plus the exact 2.20 application payload at 0x08004000. Data ends at 0x0800FCF4 and does not touch EEPROM at 0x0801F800. Back up the full device before flashing.",
    compatibilityZh: "用于 SWD 恢复/烧写的合并 Intel HEX：PB4 CAN V17 Bootloader 位于 0x08000000，同一份 2.20 应用位于 0x08004000。数据结束于 0x0800FCF4，不触及 0x0801F800 EEPROM；烧写前必须完整备份。",
    archiveNoteEn: "Verified composition: the bootloader payload and application payload match the separately published files byte-for-byte.",
    archiveNoteZh: "已验证组成：其中 Bootloader 和应用载荷分别与单独发布的两个文件逐字节一致。"
  }),
  "assets/downloads/firmware/am32-esc-75a-can/AM32_F415_BOOTLOADER_PB4_CAN_V17.hex": firmwareMeta({
    family: "am32",
    version: "V17",
    channel: "stable",
    role: "current-product",
    variantEn: "PB4 CAN bootloader HEX",
    variantZh: "PB4 CAN Bootloader HEX",
    target: "AT32F415 / PB4 CAN bootloader / 0x08000000",
    boardRevisionEn: "FlyingRC AM32 ESC CAN Bus 75A with AT32F415KBU7-4 (128 KiB); verify the MCU marking before flashing.",
    boardRevisionZh: "FlyingRC AM32 ESC CAN 总线 75A，AT32F415KBU7-4（128KiB）版本；烧写前必须核对 MCU 丝印。",
    checksum: "f8f36060f4fc2405441f5addec6e05ece152fe16d57b2a7decaee040c5947b6a",
    compatibilityEn: "Bootloader-only Intel HEX. Actual data occupies 0x08000000-0x0800397F inside the reserved 0x08000000-0x08003FFF region; the application starts at 0x08004000. Flash only with a compatible SWD programmer after backing up the full device.",
    compatibilityZh: "仅含 Bootloader 的 Intel HEX。实际数据位于预留区 0x08000000-0x08003FFF 内的 0x08000000-0x0800397F；应用从 0x08004000 开始。仅可在完整备份后使用兼容 SWD 下载器烧写。",
    archiveNoteEn: "Official AM32 F415 PB4 CAN V17 bootloader. Bootloader replacement is a recovery/programmer operation, not a normal application update.",
    archiveNoteZh: "AM32 官方 F415 PB4 CAN V17 Bootloader。更换 Bootloader 属于恢复/编程器操作，不是普通应用固件升级。"
  })
};

window.FLYINGRC_CATALOG.labelGroups = LABEL_GROUPS;
window.FLYINGRC_CATALOG.labelDefinitions = LABEL_DEFINITIONS;
window.FLYINGRC_CATALOG.filterLabelIds = FILTER_LABEL_IDS;
window.FLYINGRC_CATALOG.primaryFilterLabelIds = PRIMARY_FILTER_LABEL_IDS;

window.FLYINGRC_CATALOG.products.forEach((product) => {
  Object.assign(product, PRODUCT_EXPLANATIONS[product.slug] || {});
  product.labels = (PRODUCT_LABELS[product.slug] || []).filter(Boolean);
  product.downloads = uniqueDownloads([
    PUBLIC_MANUALS[product.slug],
    ...(PUBLIC_REFERENCE_FILES[product.slug] || []),
    ...(product.downloads || [])
  ].filter(Boolean)).map(attachDownloadMetadata);
});

function img(src, en, zh, type) {
  return { src, label: { en, zh }, type };
}

function download(href, en, zh, metadata = {}) {
  return { href, label: { en, zh }, ...metadata };
}

function firmwareMeta(config) {
  return {
    firmwareFamily: config.family || "other",
    releaseVersion: config.version,
    releaseChannel: config.channel || "stable",
    releaseRole: config.role || "latest-stable",
    variant: { en: config.variantEn, zh: config.variantZh },
    archiveNote: { en: config.archiveNoteEn, zh: config.archiveNoteZh },
    firmwareTarget: config.target,
    boardRevision: { en: config.boardRevisionEn, zh: config.boardRevisionZh },
    checksum: config.checksum,
    compatibilityNote: { en: config.compatibilityEn, zh: config.compatibilityZh }
  };
}

function attachDownloadMetadata(item) {
  return { ...item, ...(FIRMWARE_DOWNLOAD_METADATA[item.href] || {}) };
}

function productLabelDef(en, zh, group) {
  return { en, zh, group };
}

function productLabel(id, priority = 50) {
  const definition = LABEL_DEFINITIONS[id];
  return definition ? { id, ...definition, priority } : null;
}

function manualDownload(href, en = "Product manual", zh = "产品说明书") {
  return download(href, en, zh);
}

function uniqueDownloads(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

function explain(config) {
  return {
    manualSource: config.manual,
    cardSummary: { en: config.whatEn, zh: config.whatZh },
    whatItDoes: { en: config.whatEn, zh: config.whatZh },
    bestFor: { en: config.bestEn || [], zh: config.bestZh || [] },
    keyFeatures: { en: config.featuresEn || [], zh: config.featuresZh || [] },
    technicalHighlights: { en: config.techEn || [], zh: config.techZh || [] },
    setupNotes: { en: config.setupEn || [], zh: config.setupZh || [] },
    watchOut: { en: config.watchEn || [], zh: config.watchZh || [] }
  };
}

function escExplain(manual, whatEn, whatZh, bestEn, bestZh, featuresEn, featuresZh, techEn, techZh) {
  return explain({
    manual,
    whatEn,
    whatZh,
    bestEn,
    bestZh,
    featuresEn,
    featuresZh,
    techEn,
    techZh,
    setupEn: [
      "Remove propellers before ESC parameter tuning or firmware flashing.",
      "Power the ESC with a LiPo battery when tuning/flashing, following the ESC manual.",
      "Use the offline AM32 parameter tuning workflow; the manuals warn against web-based firmware flashing."
    ],
    setupZh: [
      "电调调参或刷固件前必须拆桨。",
      "调参/刷写时按电调说明书使用 LiPo 电池给电调供电。",
      "使用离线 AM32 调参流程；说明书警告不要用网页版流程刷固件。"
    ],
    watchEn: ["Incorrect firmware flashing can damage the ESC MCU; use the manual workflow."],
    watchZh: ["错误刷写固件可能损坏电调 MCU，应按说明书流程操作。"]
  });
}

function kitExplain(whatEn, whatZh, manual) {
  return explain({
    manual,
    whatEn,
    whatZh,
    bestEn: [
      "Users who want a matched flight-controller and ESC/product bundle instead of choosing separate boards.",
      "Builds where mechanical fit, wiring, and component compatibility should be considered together."
    ],
    bestZh: [
      "希望直接选择飞控+电调/产品组合，而不是单独搭配板子的用户。",
      "需要一起考虑机械安装、接线和组件兼容性的装机。"
    ],
    featuresEn: [
      "Bundle page: technical details come from the included flight-controller and ESC/product manuals.",
      "Use this page to understand the package role, then open the related component pages for exact wiring and firmware details."
    ],
    featuresZh: [
      "套餐页：技术细节来自其中飞控、电调/产品的说明书。",
      "先用本页理解组合用途，再打开相关组件页查看精确接线和固件细节。"
    ],
    techEn: [
      "Component-level specs depend on the exact flight controller and ESC included in the bundle.",
      "Check mounting hole spacing, stack height, connector orientation, and voltage/current requirements before assembly."
    ],
    techZh: [
      "组件级参数取决于套餐中实际包含的飞控和电调。",
      "组装前确认孔距、叠层高度、接口方向和电压/电流需求。"
    ],
    setupEn: [
      "Plan the stack as one system: battery to ESC/PDB, ESC signal to flight controller, receiver/video/GPS to the correct ports.",
      "Test flight-controller USB connection and ESC response without propellers before completing the build."
    ],
    setupZh: [
      "按一个系统规划飞塔：电池到电调/分电，电调信号到飞控，接收机/图传/GPS 接到正确接口。",
      "装机完成前先在无桨状态测试飞控 USB 连接和电调响应。"
    ],
    watchEn: ["Bundle pages are orientation guides; exact pinout comes from the individual component diagrams."],
    watchZh: ["套餐页用于理解组合方向；精确引脚以单个组件接线图为准。"]
  });
}
