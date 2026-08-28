---
title: "如何使用"
description: "手機連上車機後如何啟動 ScreenOnAuto 鏡像：兩個鏡像入口與差異，以及逐步啟動流程。"
lang: zh-TW
slug: how-to-use
permalink: /docs/zh-TW/how-to-use/
date: 2026-07-16
last_modified_at: 2026-07-16
---

# 如何使用


本指南說明**手機連上車機之後如何啟動鏡像**——兩個鏡像入口與差異,以及逐步的啟動
流程。

> **ℹ️ 說明**
> **開始前請先確認:**
> - 已安裝 ScreenOnAuto,且 Android Auto 啟動器中看得到 ScreenOnAuto 的項目。
> - 已在手機上開啟過 app 並授予所需權限。

## 兩個鏡像入口

Android Auto 的 app 啟動器中有**兩個**鏡像入口。兩者鏡像的都是同一個手機畫面——差別
在於鏡像**如何顯示**在車機上:

![Android Auto 啟動器中的 ScreenOnAuto 項目](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| 顯示方式 | 全螢幕——佔用地圖區域 | 車機螢幕**夠大**時,分割檢視可**與地圖並排**;螢幕較小時地圖會退到背景、畫面上只顯示鏡像(並**不會**取代地圖) |

**ScreenOnAuto**——全螢幕,佔用地圖區域:

![ScreenOnAuto 全螢幕鏡像](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)**——與地圖並排:

![ScreenOnAuto (Legacy) 與地圖並排顯示](/images/how-to-use/legacy-split.png)

兩個都試試,哪個在你的車機上表現好就用哪個。兩者顯示的是同一個鏡像,隨時可以切換——
鏡像啟動後,打開另一個入口會直接顯示,不會再次要求權限。

> **💡 小技巧**
> 如果之前開過 **ScreenOnAuto**(全螢幕入口),現在想改用 **ScreenOnAuto (Legacy)**,
> 建議先在車機上打開地圖 app(例如 Google 地圖)再啟動 Legacy 鏡像。這樣車機會把地圖
> app 重新設回預設地圖,地圖相關的操作就不會被全螢幕鏡像佔用。

## 開始鏡像

### 開啟「自動開始鏡像」(建議)

1. 在手機的 app 中開啟**自動開始鏡像**(只需設定一次)。
2. 把手機連上車機,在 Android Auto 啟動器點任一個 ScreenOnAuto 入口
   (<img src="/images/icon_launcher.png" width="24" align="center"> 或
   <img src="/images/icon_legacy.png" width="24" align="center">)。
3. 手機會自動跳出螢幕擷取權限對話框——拿起手機點**立即開始**(Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="手機上的螢幕擷取權限對話框">

4. 手機畫面出現在車機上:

   ![手機畫面鏡像到車機](/images/how-to-use/mirror-active.png)

> **ℹ️ 說明**
> 權限對話框是 Android 的規定——每次開始鏡像時出現一次,不是每次切換畫面都會跳。
> 若未開啟「自動開始鏡像」,點入口只會打開鏡像畫面;在你自己啟動之前不會擷取任何
> 內容。

### 手動開始

如果想維持**自動開始鏡像**關閉:

1. 在手機上打開 ScreenOnAuto,開啟**鏡像傳輸**開關,並在權限對話框點**立即開始**
   (Start now)。
2. 在車機上打開任一個 ScreenOnAuto 入口——鏡像已在執行,會立即顯示。

(順序不拘——也可以先在車機上打開入口,再回手機開**鏡像傳輸**開關。)

### 跳過權限對話框

不想每個工作階段都跳對話框?可以用 ADB 預先授權一次——見
[使用 ADB 授予鏡像權限](/docs/zh-TW/grant-mirror-permission-via-adb/)。

## 停止鏡像

以下任一方式都可以:

- **斷開車機連線** — 鏡像自動停止(預設的「斷線時停止」設定)。
- 點手機常駐通知上的**停止鏡像**。
- 在 app 裡關閉**鏡像傳輸**開關。

## 疑難排解

- **入口打開了但畫面空白** — 鏡像尚未啟動;看看手機上是否有權限對話框,或用**鏡像
  傳輸**開關啟動。
- **畫面周圍有黑邊** — 手機和車機螢幕比例不同所致;點鏡像畫面上的**強制橫向**按鈕
  (或開啟 app 設定中的**自動啟動強制橫向**)通常能大幅改善。若仍有細縫或邊緣被裁切,
  可用**設定 → 進階 → 調整鏡像寬度/調整鏡像高度**微調(正值收回被裁切的邊、負值往外
  填補黑邊)。
- **版面變動後畫面被拉伸/變形**(例如分割檢視中可視區域變大或變小)— 開啟**設定 →
  進階 → 固定鏡像尺寸**,鏡像會維持原尺寸不變形(可能被部分遮住)。適用於全螢幕的
  **ScreenOnAuto** 入口。
- 車機畫面上的 **Android Auto 導覽列**是 Android Auto 自己繪製的,app 無法隱藏。
