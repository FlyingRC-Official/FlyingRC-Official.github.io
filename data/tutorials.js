(function () {
  window.FLYINGRC_TUTORIALS = {
    tutorials: [
      {
        slug: "analog-video-vs-uart",
        updated: "2026-08-10",
        category: {
          en: "FPV / Wiring",
          zh: "FPV / 接线"
        },
        title: {
          en: "Analog FPV video is not UART",
          zh: "模拟图传的视频信号不是串口"
        },
        summary: {
          en: "Learn the difference between VIDEO, CAM, VIN, VOUT, UART TX/RX, SmartAudio, and Tramp to avoid common analog FPV wiring mistakes.",
          zh: "分清 VIDEO、CAM、VIN、VOUT、UART TX/RX、SmartAudio 与 Tramp，避免常见的模拟图传接线错误。"
        },
        audience: {
          en: "Builders wiring an analog FPV camera, flight-controller OSD, and video transmitter.",
          zh: "适用于连接模拟 FPV 摄像头、飞控 OSD 与模拟图传的装机用户。"
        },
        requirements: [
          {
            en: "The pinout diagrams for the exact flight controller, camera, and video transmitter.",
            zh: "对应飞控、摄像头和图传的准确引脚图。"
          },
          {
            en: "Confirmation that the video system is analog rather than DJI, HDZero, Walksnail, or another digital system.",
            zh: "确认当前使用的是模拟图传，而不是 DJI、HDZero、Walksnail 等数字图传系统。"
          },
          {
            en: "Propellers removed and power disconnected while checking or changing wiring.",
            zh: "检查或修改接线时拆除螺旋桨并断开电源。"
          }
        ],
        warnings: [
          {
            en: "VIDEO, CAM, VIN, and VOUT carry an analog image signal. Never connect them to an ordinary UART TX or RX pad.",
            zh: "VIDEO、CAM、VIN 和 VOUT 承载模拟图像信号，不能连接到普通 UART TX 或 RX 焊盘。"
          },
          {
            en: "A pad labelled VTX may mean analog video output to the transmitter, not a UART. Verify the board pinout before wiring.",
            zh: "标记为 VTX 的焊盘可能表示输出到图传的模拟视频，而不是 UART；接线前必须核对飞控引脚图。"
          },
          {
            en: "SmartAudio and IRC Tramp control VTX settings; they do not carry the camera image.",
            zh: "SmartAudio 和 IRC Tramp 只控制图传参数，不承载摄像头画面。"
          }
        ],
        steps: [
          {
            title: {
              en: "Identify the three signal types",
              zh: "先分清三类信号"
            },
            body: {
              en: "VIDEO/CAM/VIN/VOUT is analog video, UART TX/RX is digital serial data, and SmartAudio or Tramp is a digital control connection for VTX settings.",
              zh: "VIDEO/CAM/VIN/VOUT 是模拟视频，UART TX/RX 是数字串口数据，SmartAudio 或 Tramp 是控制图传参数的数字连接。"
            }
          },
          {
            title: {
              en: "Wire the camera video into the flight controller",
              zh: "把摄像头视频接入飞控"
            },
            body: {
              en: "Connect Camera VIDEO to the flight controller CAM, VIN, or VIDEO IN pad, then connect camera power and ground according to the product pinout.",
              zh: "将 Camera VIDEO 接到飞控的 CAM、VIN 或 VIDEO IN 焊盘，并按产品引脚图连接摄像头电源与地线。"
            }
          },
          {
            title: {
              en: "Wire the flight-controller video output to the VTX",
              zh: "把飞控视频输出接到图传"
            },
            body: {
              en: "Connect the flight controller VOUT, VIDEO OUT, or analog VTX pad to the video input on the transmitter. The video remains analog while the flight controller adds OSD information.",
              zh: "将飞控的 VOUT、VIDEO OUT 或模拟 VTX 焊盘接到图传的视频输入。飞控叠加 OSD 时，视频仍然是模拟信号。"
            }
          },
          {
            title: {
              en: "Connect optional VTX control separately",
              zh: "单独连接可选的图传控制线"
            },
            body: {
              en: "If the transmitter supports SmartAudio or Tramp, connect its control wire to the UART TX or dedicated control pad specified by the manuals. This wire controls channel, frequency, power, or Pit Mode only.",
              zh: "如果图传支持 SmartAudio 或 Tramp，将控制线接到说明书指定的 UART TX 或专用控制焊盘。这条线只控制频道、频率、功率或 Pit Mode。"
            }
          },
          {
            title: {
              en: "Diagnose OSD without a camera image",
              zh: "排查有 OSD 但没有摄像头画面"
            },
            body: {
              en: "If OSD text is visible on a black background, the flight-controller-to-VTX path is probably working. Check camera power, camera VIDEO, ground, and the flight-controller CAM/VIDEO IN connection before changing UART settings.",
              zh: "如果黑色背景上能看到 OSD 字符，飞控到图传的输出路径通常已经工作。应先检查摄像头供电、VIDEO、地线和飞控 CAM/VIDEO IN，不要先改 UART 参数。"
            }
          },
          {
            title: {
              en: "Use a direct-video bypass test when needed",
              zh: "必要时做视频直连旁路测试"
            },
            body: {
              en: "Temporarily connect Camera VIDEO directly to VTX VIDEO. If the image works directly but not through the flight controller, inspect the flight-controller video input/output wiring and analog OSD circuit.",
              zh: "临时将 Camera VIDEO 直接接到 VTX VIDEO。若直连有画面、经过飞控却没有，应重点检查飞控视频输入/输出接线和模拟 OSD 电路。"
            }
          }
        ],
        troubleshooting: [
          {
            issue: {
              en: "VTX VIDEO was connected to a UART TX/RX pad",
              zh: "图传 VIDEO 被接到了 UART TX/RX"
            },
            fix: {
              en: "Move the video wire to the flight controller's analog VIDEO OUT/VTX pad. Use UART only for SmartAudio, Tramp, or another documented control protocol.",
              zh: "把视频线移到飞控的模拟 VIDEO OUT/VTX 焊盘；UART 仅用于 SmartAudio、Tramp 或说明书明确指定的控制协议。"
            }
          },
          {
            issue: {
              en: "The camera works when connected directly to the VTX but not through the flight controller",
              zh: "摄像头直连图传有画面，经过飞控却没有"
            },
            fix: {
              en: "Check CAM/VIDEO IN, VIDEO OUT, shared ground, the board's analog OSD hardware, and any firmware setting specifically related to analog OSD.",
              zh: "检查 CAM/VIDEO IN、VIDEO OUT、共地、飞控模拟 OSD 硬件，以及固件中专门与模拟 OSD 有关的设置。"
            }
          },
          {
            issue: {
              en: "A digital VTX also uses UART and the wiring seems contradictory",
              zh: "数字图传也使用 UART，看起来与本文矛盾"
            },
            fix: {
              en: "Digital systems may exchange OSD or control data over UART/MSP, but their video path is handled inside the digital system. Follow the digital VTX manual rather than the analog wiring path.",
              zh: "数字图传可以通过 UART/MSP 交换 OSD 或控制数据，但视频链路由数字系统内部处理；应遵循数字图传说明书，而不是模拟视频接线方式。"
            }
          }
        ],
        links: [
          {
            label: {
              en: "FlyingRC product pages",
              zh: "FlyingRC 产品资料"
            },
            href: "/wiki.html"
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
              en: "Contact FlyingRC support",
              zh: "联系 FlyingRC 技术支持"
            },
            href: "/contact.html"
          }
        ]
      },
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
