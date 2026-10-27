---
title: "如何使用"
description: "手機連上車機後如何啟動 ScreenOnAuto 鏡像：兩個鏡像入口與差異，以及逐步啟動流程。"
lang: zh-TW
slug: how-to-use
permalink: /docs/zh-TW/how-to-use/
date: 2026-07-16
last_modified_at: 2026-10-21
---

# 如何使用


> **ℹ️ 說明**
> **開始前請先確認：**
> - 已安裝 ScreenOnAuto，且 Android Auto 啟動器中看得到 ScreenOnAuto 的項目。
> - 已在手機上開啟過 app 並授予所需權限。

## 兩個鏡像入口

Android Auto 的 app 啟動器中有**兩個**鏡像入口。兩者鏡像的都是同一個手機畫面——差別在於鏡像**如何顯示**在車機上：

![Android Auto 啟動器中的 ScreenOnAuto 項目](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="ScreenOnAuto 全螢幕鏡像"></p>
全螢幕——佔用地圖區域
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) 與地圖並排顯示"></p>
車機螢幕<b>夠大</b>時，分割檢視可<b>與地圖並排</b>；螢幕較小時地圖會退到背景、畫面上只顯示鏡像（並<b>不會</b>取代地圖）
</td>
</tr>
</table>

兩個都試試，哪個在你的車機上表現好就用哪個。兩者顯示的是同一個鏡像，隨時可以切換——鏡像啟動後，打開另一個入口會直接顯示，不會再次要求權限。

> **💡 小技巧**
> 如果之前開過 **ScreenOnAuto**（全螢幕入口），現在想改用 **ScreenOnAuto (Legacy)**，建議先在車機上打開地圖 app（例如 Google 地圖）再啟動 Legacy 鏡像。這樣車機會把地圖 app 重新設回預設地圖，地圖相關的操作就不會被全螢幕鏡像佔用。

## 開始鏡像

### 開啟「自動開始鏡像」（建議）

1. 在手機的 app 中開啟**自動開始鏡像**（只需設定一次）。
2. 把手機連上車機，在 Android Auto 啟動器點任一個 ScreenOnAuto 入口（<img src="/images/icon_launcher.png" width="24" align="middle" alt="ScreenOnAuto 圖示"> 或 <img src="/images/icon_legacy.png" width="24" align="middle" alt="ScreenOnAuto (Legacy) 圖示">）。
3. 手機會自動跳出螢幕擷取權限對話框——拿起手機點**立即開始**（Start now）：

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="手機上的螢幕擷取權限對話框">

   如果手機原本在休眠，螢幕會自己亮起；如果設有 PIN、圖形或指紋鎖，請先解鎖，對話框就會出現。如果已用 ADB 預先授權，就不會有對話框：鏡像會直接開始，解鎖手機之前，車機上顯示的是鎖屏畫面。

4. 手機畫面出現在車機上：

   ![手機畫面鏡像到車機](/images/how-to-use/mirror-active.png)

> **ℹ️ 說明**
> 權限對話框是 Android 的規定——每次開始鏡像時出現一次，不是每次切換畫面都會跳。若未開啟「自動開始鏡像」，點入口只會打開鏡像畫面；在你自己啟動之前不會擷取任何內容。

### 手動開始

如果想維持**自動開始鏡像**關閉：

1. 在手機上打開 ScreenOnAuto，開啟**鏡像傳輸**開關，並在權限對話框點**立即開始** (Start now)。
2. 在車機上打開任一個 ScreenOnAuto 入口——鏡像已在執行，會立即顯示。

（順序不拘——也可以先在車機上打開入口，再回手機開**鏡像傳輸**開關。）

### 跳過權限對話框

不想每個工作階段都跳對話框？可以用 ADB 預先授權一次——見 [使用 ADB 授予鏡像權限](/docs/zh-TW/grant-mirror-permission-via-adb/)。

## 停止鏡像

以下任一方式都可以：

- **斷開車機連線** — 鏡像自動停止（預設的「斷線時停止」設定）。
- 點手機常駐通知上的**停止鏡像**。
- 在 app 裡關閉**鏡像傳輸**開關。

## 疑難排解

### 鏡像與畫面

#### 入口打開了但畫面空白

鏡像尚未啟動；看看手機上是否有權限對話框，或用**鏡像傳輸**開關啟動。

#### 畫面周圍有黑邊

手機和車機螢幕比例不同所致。點鏡像畫面上的**強制固定方向**按鈕（或開啟設定中的**自動啟動強制固定方向**）。若要完全貼合車機可用的畫面，請開啟特權功能中的**讓手機畫面比例對齊車機**（需要 Shizuku 或 root）。

#### 版面變動後畫面被拉伸/變形

分割檢視中可視區域變大或變小時就會發生。旋轉手機、讓畫面在直式與橫式之間切換一次，就能恢復正常（若開著**強制固定方向**，請先用畫面上的按鈕解除）。另外也有兩個設定可以改善：

- 開啟**設定 → 進階 → 固定鏡像尺寸**，鏡像會維持原尺寸不變形（可能被部分遮住）。適用於全螢幕的 **ScreenOnAuto** 入口。
- 開啟**設定 → 進階 → 自繪鏡像（實驗性）**。鏡像畫面改由 app 自行繪製，不再交給系統縮放，分割檢視時就不會變形。耗電略增，切換後於下次開始鏡像時生效。**讓手機畫面比例對齊車機**（特權功能）以另一種方式解決同一個問題，兩者可以同時開啟。

#### 鏡像時 Android Auto 的 Google 地圖變黑

在 Android 15 以上，只要有 app 在擷取螢幕（所有鏡像 app 都必須這麼做），Android 就會隱藏它認為含有敏感內容的 app，而 Google 地圖可能被列入其中。這時 Android Auto 的地圖會一直是黑的，直到停止鏡像；換成其他鏡像 app 或地圖 app 也一樣。解決方法是開啟**設定 → 開發人員選項 → 停用螢幕畫面分享防護**。如果看不到開發人員選項，請在設定中搜尋**版本號碼**，連點 7 次。開啟後，分享螢幕時 Android 也不會再隱藏含有一次性驗證碼的通知，如果你在意這點，就不要開啟。開啟後請停止鏡像再重新開始，這個設定要等開始鏡像時才會生效。

#### Android Auto 導覽列無法隱藏

車機畫面上的 **Android Auto 導覽列**是 Android Auto 自己繪製的，app 無法隱藏。

### 特權功能（Shizuku / root）

#### 以 ADB 啟動的 Shizuku 會在插上車機時被關閉

USB 連線會讓手機進入配件模式，這會重啟 ADB 並一併帶走 Shizuku——無線偵錯走的是同一個 ADB，所以一樣沒用。重新啟動 Shizuku 即可，ScreenOnAuto 會自行重新連線；更省事的做法是改用 [Shizuku-Next 分支版](https://github.com/rushiranpise/Shizuku-Next)，它的 watchdog 服務會自動幫你重啟。root 使用者與無線 Android Auto 連線不受影響。

#### 螢幕關閉後如何再喚醒

觸控面板會隨螢幕一同斷電，因此點手機不會有反應。點車機畫面上的**自動調暗**按鈕即可——切換自動調暗會喚醒螢幕（前提是已在**畫面按鈕 → 功能按鈕**中開啟它，該按鈕預設為關閉）；或連按手機電源鍵**兩次**，因為第一下是讓系統進入休眠。停止鏡像或中斷 Android Auto 也會讓螢幕恢復。
