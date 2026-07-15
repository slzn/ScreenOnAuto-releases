# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md)

> 將您的手機螢幕鏡像至 Android Auto 顯示器，並支援透過多媒體按鈕控制手機播放。
>
> **完全免費，所有功能無需額外付費。**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="手機畫面鏡像至 Android Auto 顯示器，與地圖並排顯示"></p>

> [!IMPORTANT]
> **安裝方式取決於你的 Android 版本：**
> - **Android 14 以上（含）** — **僅能透過 Play 商店安裝**（採邀請制，**商店搜尋不到**）。[加入測試者名單 →](https://github.com/slzn/ScreenOnAuto-releases/wiki/加入-Beta-測試)
> - **Android 13 以下（含）** — 用 KingInstaller sideload 安裝 APK（[步驟見下方](#安裝步驟)），或改用 Play 商店安裝。

## 功能介紹

- **螢幕鏡像** — 即時將手機螢幕內容顯示於 Android Auto 車機上
- **媒體工作階段代理** — 透過 Android Auto 原生媒體介面控制手機上的任意播放器
- **自動調暗** — 閒置鏡像時自動調暗手機螢幕亮度（可設定 15/30/60/120 秒延遲）
- **自動啟動** — 連線 Android Auto 後自動開始鏡像
- **防止進入休眠** — 鏡像期間防止手機螢幕進入休眠
- **斷線自動停止** — Android Auto 斷線後自動停止鏡像
- **自動開啟應用程式** — 鏡像啟動且 Android Auto 連線後，自動在手機上開啟指定的應用程式
- **強制橫向** — 鏡像期間將手機強制轉為橫向；連線時自動啟動，並提供畫面開關
- **快捷啟動** — 在 Android Auto 鏡像畫面上新增最多 4 個應用程式快捷啟動按鈕
- **畫面按鈕** — 在進階設定中個別顯示/隱藏鏡像畫面按鈕：強制橫向、自動調暗、手機的返回/主畫面/最近應用程式（最多同時 4 個）
- **按鈕位置** — Legacy 鏡像可將畫面按鈕靠左對齊，或自動避開手機導覽列
- **鏡像微調** — 進階設定可微調鏡像寬度/高度，修正車機裁切畫面邊緣的問題
- **觸控轉發** *（實驗性功能）* — 在車機畫面上點擊/滑動即可操控手機

## 系統需求

- Android 7.0（API 24）以上
- 手機已安裝 Android Auto
- 支援 Android Auto 的車機

## 安裝步驟

### Android 14 以上（含）— 透過 Play 商店安裝

> **為什麼要用 Play 商店安裝？**  
> Android Auto 只接受由 Play 商店安裝的 App，而 Android 14+ 已擋掉下方的
> KingInstaller 變通法 —— 因此 Play 是唯一能讓 Android Auto 正常運作的安裝方式。
> 安裝到的仍是**完整版 App**，內容與 GitHub 版本相同，只是透過 Play 內部測試軌道發佈。

**Play 商店裡搜尋不到本 App** —— 採**邀請制**：報名表單與詳細步驟請見
**[加入 Beta 測試](https://github.com/slzn/ScreenOnAuto-releases/wiki/加入-Beta-測試)**。
安裝完成後，啟動 App 並依相同方式授予 App 內權限。

### Android 13 以下（含）— 透過 KingInstaller sideload

> **為什麼需要 KingInstaller？**  
> Android Auto 要求 app 必須透過 Google Play 商店安裝。
> 直接安裝 APK 會讓系統記錄安裝來源為瀏覽器或檔案管理器，
> 導致 Android Auto 拒絕使用。KingInstaller 能以 Google Play 商店身份安裝 APK，
> 解決此限制。

#### 第一步 — 安裝 KingInstaller

1. 前往 [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases)，下載最新版 `KingInstaller.apk`
2. 在手機上開啟：**設定 → 安全性 → 允許安裝未知來源應用程式**
3. 開啟 `KingInstaller.apk` 並點選**安裝**

#### 第二步 — 透過 KingInstaller 安裝 ScreenOnAuto

1. 從 [最新版本](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) 頁面下載最新的 `ScreenOnAuto-*.apk`
2. 開啟 **KingInstaller**，點選**資料夾圖示**，選取已下載的 APK
3. 點選**安裝** — KingInstaller 會以 Google Play 商店身份完成安裝

#### 第三步 — 授予權限

啟動 **ScreenOnAuto**，依照 App 內提示授予所需權限。

## 在 Android Auto 中驗證

**無論你用哪種方式安裝**——KingInstaller sideload 或 Play 商店——都適用此段。

在手機上前往 **設定 → 已連結的裝置 → Android Auto → 自訂啟動器**。
您應可看到 **三個** ScreenOnAuto 項目：

| 圖示 | 名稱 | 功能 |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | 將手機螢幕鏡像至 Android Auto，取代地圖位置達到全螢幕顯示 |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | 使用舊版投影路徑鏡像手機螢幕，可與地圖並列顯示 |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | 透過 Android Auto 原生媒體介面控制手機上的播放器 |

若三個項目皆出現，代表安裝成功。
若其中一個缺失：sideload 安裝者請重新透過 KingInstaller 安裝並確認安裝來源為 Google Play 商店；Play 商店安裝者請確認 Play 版已安裝完成，再重新開啟 Android Auto。

安裝完成後，請見 **[如何使用](https://github.com/slzn/ScreenOnAuto-releases/wiki/如何使用)** 了解如何在車上啟動鏡像。

## 權限說明

| 權限 | 用途 |
|---|---|
| 螢幕擷取（MediaProjection） | 螢幕鏡像 |
| 通知存取服務 | 媒體工作階段代理 |
| 在其他應用程式上層顯示 | 自動調暗與強制橫向 |
| 無障礙服務 | 觸控轉發 *（實驗性功能）* 與返回/主畫面/最近應用程式按鈕 |

> **小提示：** 若希望每次鏡像時不再顯示螢幕擷取權限對話框，可透過 ADB 預先授予此權限——請參閱[使用 ADB 授予鏡像權限](https://github.com/slzn/ScreenOnAuto-releases/wiki/使用-ADB-授予鏡像權限)。

## 已知限制

- **受 DRM 保護的內容無法鏡像** — Netflix、Disney+ 等 app 在鏡像畫面上會顯示黑畫面。這是 Android 平台的限制，app 無法繞過。
- 車機畫面上的 **Android Auto 導覽列**由 Android Auto 自行繪製，無法隱藏。

## 免責聲明

開車時請專注路況，切勿操作此應用程式。

本專案與 Google 無任何關聯，亦未獲其認可或贊助。Android Auto 為 Google LLC 之商標。

## 贊助

如果這個 App 對您有幫助，歡迎捐款支持或請我喝杯珍珠奶茶 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
