# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md)

> [!WARNING]
> **僅支援 Android 13 以下版本。** 本應用程式不支援 Android 14 或更新版本。

> 將您的手機螢幕鏡像至 Android Auto 顯示器，並支援透過多媒體按鈕控制手機播放。
>
> **完全免費，所有功能無需額外付費。**

## 功能介紹

- **螢幕鏡像** — 即時將手機螢幕內容顯示於 Android Auto 車機上
- **媒體工作階段代理** — 透過 Android Auto 原生媒體介面控制手機上的任意播放器
- **自動降低亮度** — 閒置鏡像時自動調暗手機螢幕亮度（可設定 15/30/60/120 秒延遲）
- **自動啟動** — 連線 Android Auto 後自動開始鏡像
- **維持螢幕常亮** — 鏡像期間防止手機螢幕進入休眠
- **斷線自動停止** — Android Auto 斷線後自動停止鏡像
- **自動開啟應用程式** — 鏡像啟動且 Android Auto 連線後，自動在手機上開啟指定的應用程式
- **觸控轉發** *（實驗性功能）* — 在車機畫面上點擊/滑動即可操控手機

## 系統需求

- Android 7.0（API 24）以上
- 手機已安裝 Android Auto
- 支援 Android Auto 的車機

## 下載

前往 [Releases](https://github.com/slzn/ScreenOnAuto-releases/releases) 頁面，下載最新版 `ScreenOnAuto-V1.5.0.apk`。

## 安裝步驟

> **為什麼需要 KingInstaller？**  
> Android Auto 要求 app 必須透過 Google Play 商店安裝。
> 直接安裝 APK 會讓系統記錄安裝來源為瀏覽器或檔案管理器，
> 導致 Android Auto 拒絕使用。KingInstaller 能以 Google Play 商店身份安裝 APK，
> 解決此限制。

### 第一步 — 安裝 KingInstaller

1. 前往 [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases)，下載最新版 `KingInstaller.apk`
2. 在手機上開啟：**設定 → 安全性 → 允許安裝未知來源應用程式**
3. 開啟 `KingInstaller.apk` 並點選**安裝**

### 第二步 — 透過 KingInstaller 安裝 ScreenOnAuto

1. 從 [Releases](https://github.com/slzn/ScreenOnAuto-releases/releases) 頁面下載 `ScreenOnAuto-V1.5.0.apk`
2. 開啟 **KingInstaller**，點選**資料夾圖示**，選取已下載的 APK
3. 點選**安裝** — KingInstaller 會以 Google Play 商店身份完成安裝

### 第三步 — 在 Android Auto 中驗證

在手機上前往 **設定 → 已連結的裝置 → Android Auto → 自訂啟動器**。
您應可看到 **三個** ScreenOnAuto 項目：

| 圖示 | 名稱 | 功能 |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | 將手機螢幕鏡像至 Android Auto，取代地圖位置達到全螢幕顯示 |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | 使用舊版投影路徑鏡像手機螢幕，可與地圖並列顯示 |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | 透過 Android Auto 原生媒體介面控制手機上的播放器 |

若三個項目皆出現，代表安裝成功。
若其中一個缺失，請重新透過 KingInstaller 安裝，並確認其安裝來源為 Google Play 商店。

### 第四步 — 授予權限

啟動 **ScreenOnAuto**，依照 App 內提示授予所需權限。

## 權限說明

| 權限 | 用途 |
|---|---|
| 螢幕擷取（MediaProjection） | 螢幕鏡像 |
| 通知存取服務 | 媒體工作階段代理 |
| 修改系統設定 | 自動降低亮度（亮度控制） |
| 在其他應用程式上層顯示 | 偵測使用者操作，於自動降低亮度後恢復正常亮度 |
| 無障礙服務 | 觸控轉發 *（實驗性功能）* |

> **小提示：** 若希望每次鏡像時不再顯示螢幕擷取權限對話框，可透過 ADB 預先授予此權限——請參閱[使用 ADB 授予鏡像權限](https://github.com/slzn/ScreenOnAuto-releases/wiki/使用-ADB-授予鏡像權限)。

## 免責聲明

開車時請專注路況，切勿操作此應用程式。

## 贊助

如果這個 App 對您有幫助，歡迎捐款支持或請我喝杯珍珠奶茶 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
