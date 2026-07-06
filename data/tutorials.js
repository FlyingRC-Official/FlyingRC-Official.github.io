(function () {
  window.FLYINGRC_TUTORIALS = {
    tutorials: [
      {
        slug: "stm32cubeprogrammer-firmware-flashing",
        updated: "2026-07-06",
        category: {
          en: "Firmware flashing",
          zh: "固件刷写"
        },
        title: {
          en: "Flash firmware with STM32CubeProgrammer",
          zh: "使用 STM32CubeProgrammer 刷写固件"
        },
        summary: {
          en: "Use ST's official STM32CubeProgrammer to write a FlyingRC .hex firmware file over the STM32 USB bootloader / DFU interface.",
          zh: "使用 ST 官方 STM32CubeProgrammer，通过 STM32 USB Bootloader / DFU 接口写入 FlyingRC 的 .hex 固件文件。"
        },
        audience: {
          en: "FlyingRC flight controller users who need to recover, replace, or update STM32-based firmware from a local file.",
          zh: "适用于需要从本地文件恢复、替换或升级 STM32 飞控固件的 FlyingRC 用户。"
        },
        requirements: [
          {
            en: "A FlyingRC STM32-based board and its matching firmware file from the Downloads page.",
            zh: "FlyingRC STM32 板卡，以及下载页中与该板卡匹配的固件文件。"
          },
          {
            en: "ST STM32CubeProgrammer installed on your computer.",
            zh: "电脑已安装 ST STM32CubeProgrammer。"
          },
          {
            en: "A known-good USB data cable. Charge-only cables will not expose the bootloader.",
            zh: "一根确认可传输数据的 USB 线。仅充电线无法识别 Bootloader。"
          },
          {
            en: "Propellers removed and external power disconnected unless the product manual explicitly requires it.",
            zh: "拆除螺旋桨，且除非产品说明书明确要求，否则不要接外部电源。"
          }
        ],
        warnings: [
          {
            en: "Match the firmware target to the exact board model and hardware revision before writing. A wrong target can leave the board unable to boot normally.",
            zh: "刷写前必须确认固件目标与板卡型号、硬件版本一致。目标错误可能导致板卡无法正常启动。"
          },
          {
            en: "Follow the product manual if its BOOT / DFU entry method differs from this general workflow.",
            zh: "如果产品说明书中的 BOOT / DFU 进入方式与本通用流程不同，以对应产品说明书为准。"
          },
          {
            en: "Do not connect motors, propellers, or live payload wiring while testing firmware recovery.",
            zh: "固件恢复测试期间不要连接电机、螺旋桨或带电负载线。"
          }
        ],
        steps: [
          {
            title: {
              en: "Download the correct firmware",
              zh: "下载正确固件"
            },
            body: {
              en: "Open the FlyingRC Downloads page, choose your exact product, and download the .hex firmware that matches the listed firmware target and board revision. Keep the checksum file nearby when available.",
              zh: "打开 FlyingRC 下载页，选择准确的产品型号，下载与页面中固件目标和硬件版本一致的 .hex 固件。如有校验文件，请一并保留。"
            }
          },
          {
            title: {
              en: "Prepare the board safely",
              zh: "安全准备板卡"
            },
            body: {
              en: "Remove propellers, disconnect battery power, unplug unnecessary peripherals, and use only USB unless the product manual says otherwise.",
              zh: "拆除螺旋桨，断开电池电源，拔掉非必要外设。除非产品说明书另有要求，本步骤只使用 USB。"
            }
          },
          {
            title: {
              en: "Enter the STM32 bootloader / DFU mode",
              zh: "进入 STM32 Bootloader / DFU 模式"
            },
            body: {
              en: "Hold the board BOOT button or BOOT pads as described in the product manual, then plug in USB. The board should enumerate as an STM32 bootloader / DFU device.",
              zh: "按照产品说明书按住 BOOT 按键或短接 BOOT 焊盘，再插入 USB。电脑应识别到 STM32 Bootloader / DFU 设备。"
            }
          },
          {
            title: {
              en: "Connect in STM32CubeProgrammer",
              zh: "在 STM32CubeProgrammer 中连接"
            },
            body: {
              en: "Open STM32CubeProgrammer, choose the USB connection mode, select the detected DFU device, then click Connect. If no USB device appears, re-enter bootloader mode and try another USB cable or port.",
              zh: "打开 STM32CubeProgrammer，选择 USB 连接方式，选中识别到的 DFU 设备，然后点击 Connect。如果没有 USB 设备，重新进入 Bootloader 模式，并更换 USB 线或接口重试。"
            }
          },
          {
            title: {
              en: "Load and program the .hex file",
              zh: "载入并写入 .hex 文件"
            },
            body: {
              en: "Open the Erasing & Programming view, select the downloaded .hex file, keep verification enabled, then start programming. Do not unplug USB until STM32CubeProgrammer reports success.",
              zh: "进入 Erasing & Programming 页面，选择下载好的 .hex 文件，保持写入后校验开启，然后开始刷写。STM32CubeProgrammer 提示成功前不要拔掉 USB。"
            }
          },
          {
            title: {
              en: "Reboot and confirm normal firmware startup",
              zh: "重启并确认固件正常启动"
            },
            body: {
              en: "Disconnect from STM32CubeProgrammer, unplug USB, then reconnect normally without holding BOOT. Open the matching configurator or ground-station software and verify that the firmware connects.",
              zh: "在 STM32CubeProgrammer 中断开连接，拔掉 USB，再不按 BOOT 正常重新插入。打开对应配置器或地面站，确认固件可以正常连接。"
            }
          }
        ],
        troubleshooting: [
          {
            issue: {
              en: "STM32CubeProgrammer does not show a USB device",
              zh: "STM32CubeProgrammer 没有显示 USB 设备"
            },
            fix: {
              en: "Use a data cable, try another USB port, hold BOOT before plugging in USB, and check whether the product manual requires a specific bootloader entry method.",
              zh: "更换可传输数据的 USB 线，换 USB 接口，先按住 BOOT 再插 USB，并检查产品说明书是否有特定的 Bootloader 进入方式。"
            }
          },
          {
            issue: {
              en: "Programming starts but fails",
              zh: "开始写入后失败"
            },
            fix: {
              en: "Reconnect in DFU mode, enable verification, avoid USB hubs, and confirm the file is a complete FlyingRC .hex firmware file rather than a compressed package.",
              zh: "重新进入 DFU 模式连接，保持校验开启，避免使用 USB 集线器，并确认文件是完整的 FlyingRC .hex 固件，而不是压缩包。"
            }
          },
          {
            issue: {
              en: "The board still starts old firmware",
              zh: "板卡仍然启动旧固件"
            },
            fix: {
              en: "Confirm the programming operation completed successfully, then power-cycle the board without holding BOOT. If needed, repeat the write with the correct .hex file selected.",
              zh: "确认写入流程已成功完成，然后在不按 BOOT 的情况下重新上电。如果仍异常，重新选择正确的 .hex 文件再刷写一次。"
            }
          },
          {
            issue: {
              en: "Configurator cannot connect after flashing",
              zh: "刷写后配置器无法连接"
            },
            fix: {
              en: "Use the configurator that matches the firmware family, check the expected USB serial device, and verify that the board was flashed with the correct target.",
              zh: "使用与固件体系匹配的配置器，确认 USB 串口设备是否出现，并再次核对固件目标是否与板卡一致。"
            }
          }
        ],
        links: [
          {
            label: {
              en: "Download STM32CubeProgrammer from ST",
              zh: "从 ST 下载 STM32CubeProgrammer"
            },
            href: "https://www.st.com/en/development-tools/stm32cubeprog.html"
          },
          {
            label: {
              en: "FlyingRC downloads",
              zh: "FlyingRC 下载页"
            },
            href: "/downloads.html"
          },
          {
            label: {
              en: "FlyingRC product pages",
              zh: "FlyingRC 产品资料"
            },
            href: "/wiki.html"
          },
          {
            label: {
              en: "Contact FlyingRC support",
              zh: "联系 FlyingRC 技术支持"
            },
            href: "/contact.html"
          }
        ]
      }
    ]
  };
})();
