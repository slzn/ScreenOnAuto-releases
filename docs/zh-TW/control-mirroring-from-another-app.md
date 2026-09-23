---
title: "從其他應用程式控制鏡像"
description: "以 Intent 啟動、停止或切換鏡像 —— 可來自自動化應用程式、捷徑或 ADB。"
lang: zh-TW
slug: control-mirroring-from-another-app
permalink: /docs/zh-TW/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# 從其他應用程式控制鏡像


自 **v1.8.4** 起，ScreenOnAuto 提供三個可啟動、停止或切換鏡像的 Intent。任何能送出
Intent 的東西 —— 自動化應用程式、主畫面捷徑、透過 ADB 的指令稿，或你自己寫的
App —— 都能用它們控制鏡像，讓鏡像隨你其他的行車設定一起啟動，不必手動開。

## 三個 action

| Action | 作用 |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | 開始鏡像。若已在執行則不做任何事。 |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | 停止鏡像。若未在執行則不做任何事。 |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | 執行中就停止，未執行就開始。 |

重複送出永遠是安全的。對已在執行的鏡像送出 START 會被忽略，而不是把工作階段拆掉重建，
所以每次藍牙連線都觸發的自動化不會打斷既有的鏡像。

## 在自動化應用程式中設定

多數自動化應用程式會用自己的名稱呈現同樣的東西 —— 通常是一個「送出 Intent」動作，
欄位大致如下：

| 欄位 | 值 |
|---|---|
| Action | 上面三個 action 其中之一 |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity`（廣播則填 `…MirrorControlReceiver`） |
| Target | Activity（或 Broadcast） |

沒有特別理由的話就用 Activity —— 下面兩節說明兩者的差異，以及為什麼廣播不能用來可靠地
*啟動*鏡像。無論選哪一種，**Class** 欄位都不能空著：留空的話廣播根本不會送達。

如果怎麼試都沒反應，先用下面對應的 ADB 指令測一次。它能告訴你問題出在 Intent 本身，
還是送出它的那個 App。

## 啟動 Activity（建議）

把 action 以 **Activity** 方式送給 `idv.lzn.screenonauto/.MirrorControlActivity`：

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

過程中不會看到 ScreenOnAuto 的任何畫面，也不會在最近使用的應用程式裡留下紀錄。你也可以
在*還沒上車之前*就送出 START —— 鏡像會等著，車機畫面一出現就自動接上。

> **ℹ️ 說明**
> 鏡像啟動時 Android 仍會要求螢幕擷取權限。想要完全免手動，可以先用 ADB 預先授權一次 ——
> 見[使用 ADB 授予鏡像權限](/docs/zh-TW/grant-mirror-permission-via-adb/)。

## 送出廣播

同樣三個 action 也能以**廣播**方式送出，改送給
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

以這種方式送出的 **STOP** 完全無聲 —— 沒有視窗，也不會閃動。

指定元件不是選配。現在的 Android 不會把廣播送給沒有指明元件的 App，所以只帶 action 的
廣播會被丟棄，什麼都不會發生，而且不會有任何錯誤訊息。

> **⚠️ 警告**
> 以廣播方式送出的 **START** 並不可靠，而且失敗時毫無跡象。有兩件事必須先允許，
> 而它們在許多手機上預設都是關的：
>
> - **自啟動。** 許多手機內建的電源管理會完全阻止 App 被廣播喚醒。請在電池或手機管理員
>   設定裡找「自啟動管理」之類的項目，允許 ScreenOnAuto。手機可能會出言勸阻。
> - **顯示在其他應用程式上層。** 在 Android 的應用程式設定裡授予 ScreenOnAuto。
>
> 如果你只需要 START，就用上面的 Activity —— 兩者都不需要。

## 疑難排解

- **完全沒反應** —— 檢查是否指定了元件。沒有指定的廣播在 ScreenOnAuto 收到之前就被丟掉了。
- **STOP 有用但 START 沒反應** —— 你送的是廣播，而上面警告裡的兩項權限少了一項。改用 Activity。
- **每次都跳出權限對話框** —— 正常現象，除非你用 [ADB](/docs/zh-TW/grant-mirror-permission-via-adb/) 預先授權。
- **鏡像已在執行時送 START 沒反應** —— 也是正常的，見上文。
