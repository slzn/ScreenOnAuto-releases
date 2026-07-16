---
title: "使用 ADB 授予鏡像權限"
description: "透過 ADB 預先授予 ScreenOnAuto 螢幕擷取權限，讓鏡像啟動時不再顯示對話框。"
lang: zh-TW
slug: grant-mirror-permission-via-adb
permalink: /docs/zh-TW/grant-mirror-permission-via-adb/
---

# 使用 ADB 授予鏡像權限


預設情況下，每次 ScreenOnAuto 開始螢幕鏡像時，Android 都會顯示權限確認對話框。
透過 ADB 預先授予**螢幕擷取（MediaProjection）**權限，可讓此對話框不再出現。

## 前置需求

- 在電腦上安裝 [ADB（Android Debug Bridge）](https://developer.android.com/tools/releases/platform-tools)
- 在手機上啟用 USB 偵錯（**設定 → 開發人員選項 → USB 偵錯**）
- 透過 USB 連接手機與電腦（或使用 Wi-Fi ADB）

## 操作步驟

1. 開啟終端機（Windows 請使用命令提示字元或 PowerShell）。

2. 確認 ADB 可偵測到您的裝置：

   ```
   adb devices
   ```

   裝置狀態應顯示 `device`（而非 `unauthorized`）。

3. 執行指令授予權限：

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. 啟動 ScreenOnAuto 並開始鏡像——系統應不再顯示權限確認對話框。

## 撤銷權限

若要恢復預設行為（每次啟動時顯示對話框）：

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## 疑難排解

- **`error: device unauthorized`** — 請查看手機上「允許 USB 偵錯？」的對話框並點選**允許**。
- **對話框仍然出現** — 請強制停止 ScreenOnAuto 後重新啟動。若問題持續，先撤銷再重新授予權限。
- **重新安裝過 App（或在 Play 版與 sideload 版之間切換）** — 解除安裝會清除此授權；重新安裝後請再執行一次授予指令。
- **重新開機後權限被重置** — 部分 ROM（如 MIUI / HyperOS）重新開機後不保留 `appops` 授權。請在每次重新開機後重新執行指令，或考慮使用 Wi-Fi ADB。
