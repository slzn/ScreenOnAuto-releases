---
title: "隱私權政策"
description: "ScreenOnAuto 如何處理你的資料：app 沒有網路權限，不收集也不分享任何資料。"
lang: zh-TW
slug: privacy-policy
permalink: /docs/zh-TW/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-19
---

# 隱私權政策

ScreenOnAuto 是由 Chih-En Liu 開發的 Android app，可將手機畫面鏡像到 Android Auto 車機。本政策適用於這個 app 及其網站 screenonauto.lzn.idv.tw，包括 `/join/` 安裝頁面。

**簡單來說：這個 app 不會收集任何個人資料，不會存到任何伺服器，也不會分享給任何人。**

## App

### 沒有網路存取

ScreenOnAuto 不要求 Android 的網路權限，因此無法把資料傳出手機。App 內沒有廣告、分析、當機回報或追蹤程式庫，也不需要帳號。

### 各項權限的用途

以下所有處理都在你的手機上進行。會離開手機的內容，只會透過 Android Auto 連線送到你的車機。

| 權限 | 用途 |
|---|---|
| 螢幕擷取（MediaProjection） | 擷取手機畫面或單一應用程式，並顯示在車機螢幕上。不會錄影，也不會儲存。 |
| 通知存取服務 | 讀取目前的媒體工作階段（正在播放的內容、播放／暫停、切換曲目），供媒體控制使用。不會讀取或儲存通知內容。 |
| 無障礙服務 | 把車機螢幕上的觸控轉成手機上的觸控，以及返回／主畫面／最近應用程式按鈕。不會讀取螢幕內容，也不會使用收到的無障礙事件。 |
| 在其他應用程式上層顯示 | 自動調暗、強制固定方向與夜間調暗的覆蓋層。 |
| 修改系統設定 | 在 Android 16 以上的平板模式下，於鏡像時鎖定螢幕旋轉。 |
| Shizuku 或 root（選用） | 特權功能：關閉手機螢幕、觸控注入、手機導覽按鈕，以及在鏡像期間變更手機的螢幕尺寸、密度、主題、字型大小、導覽模式與預設啟動器（主畫面應用程式）。鏡像結束後會還原手機原本的設定。 |

### 儲存的資料

你的設定，以及鏡像結束後要還原的手機原始設定值（例如螢幕尺寸、主題或預設啟動器），都存放在 app 自己位於手機上的儲存空間中。解除安裝 app 就會刪除。如果你開啟了 Android 備份，Android 可能會像對待大多數 app 一樣，把這些設定備份到你自己的 Google 帳號，或在你換新手機轉移資料時一併複製過去。

### Google Play

如果你從 Google Play 安裝 ScreenOnAuto，Google 可能會依你的裝置設定收集當機與效能統計資料，並以彙總形式提供給開發者（Android vitals）。這部分由 Google 依 [Google 隱私權政策](https://policies.google.com/privacy?hl=zh-TW)處理。

## 網站

### 安裝頁面（`/join/`）

要成為測試者，你需要在安裝頁面以 Google 帳號登入。我們只使用帳號的電子郵件地址，用來把你加進該輪的 Google Play 測試者名單。我們不會寄信給你，該輪的安裝時段結束後，名單就會清除。

登入由 Google 處理：頁面會載入 Google 的登入程式，它可能會設定 Google 的 cookie，並收到你的 IP 位址，這部分依 [Google 隱私權政策](https://policies.google.com/privacy?hl=zh-TW)處理。登入後，Google 傳回的登入憑證（包含電子郵件地址等 Google 帳號資訊）會存放在瀏覽器的工作階段儲存空間，直到你關閉分頁為止。頁面會把它送到安裝伺服器（api.screenonauto.lzn.idv.tw），伺服器在處理每個請求時會收到你的 IP 位址，但不會記錄你的 IP 位址或電子郵件地址。

### 其他部分

除了安裝頁面的登入之外，網站沒有分析、追蹤，也不使用 cookie。你選擇的淺色／深色主題會存在瀏覽器的本機儲存空間。網站由 GitHub Pages 代管，字型從 Google Fonts 載入，因此 GitHub 與 Google 在提供網頁時會收到你的 IP 位址，並依其各自的隱私權政策處理。

## 你寄來的錯誤報告

如果你選擇提供錯誤報告或記錄檔（例如在 GitHub issue 中附上 Google 雲端硬碟連結），其中可能包含你的裝置及裝置上應用程式的資訊。這些資料只會用來調查你的問題，調查結束後就會刪除。GitHub issue 是公開的，請不要在上面張貼個人資訊。

## 兒童

ScreenOnAuto 並非以 13 歲以下兒童為對象，也不會在知情的情況下收集任何人的資料。

## 政策變更

如果本政策有所變更，新版本會發布在本頁，下方的「最後更新」日期也會隨之更新。

## 聯絡方式

請在 [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) 開 issue，或寄信至 screenonauto@gmail.com。
