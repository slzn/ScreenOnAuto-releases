# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md)

*🌐 [公式サイト](https://screenonauto.lzn.idv.tw/ja/)*

> Android スマホの画面を Android Auto のディスプレイにミラーリングします。メディアボタンでの操作にも対応しています。
>
> **無料で使えます。追加の支払いが必要な機能はありません。**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="地図と並べて Android Auto のディスプレイにミラーリングされたスマホの画面"></p>

> [!IMPORTANT]
> **インストール方法は Android のバージョンによって異なります：**
> - **Android 14 以上** — **Google Play からのみ**インストールできます。30 分ごとのラウンドに登録し、25 分以内にインストールしてください（Play ストアでは**検索に表示されません**）。[登録する →](https://screenonauto.lzn.idv.tw/join/?lang=ja)
> - **Android 13 以下** — KingInstaller で APK をサイドロードするか（[下記の手順](#インストール)）、Google Play からインストールします。
> - **Google Play からインストールできず、AAWireless ドングルがある場合** — APK を直接インストールできます（[別の方法](#別の方法--aawireless-ドングルを使う)）。

## 機能

- **画面ミラーリング** — スマホの画面をキャプチャし、Android Auto のヘッドユニットにリアルタイムでミラーリングします
- **メディアセッションプロキシ** — Android Auto 標準のメディア画面から、スマホのあらゆるメディアアプリを操作できます
- **自動減光** — ミラーリング中に操作がないと、スマホの画面の明るさを自動で下げます（15 / 30 / 60 / 120 秒後）
- **夜間減光** — 夜間に車の画面のミラーを暗くします。車の昼夜モードに連動し（「常に」も選択可）、強さを調整でき、画面に切り替えボタンも表示できます。「詳細設定」でオンにします。「ScreenOnAuto」ミラーでは、独自描画ミラーがオフのときスマホの画面も一緒に暗くなります
- **自動開始** — 車の画面で ScreenOnAuto または ScreenOnAuto (Legacy) を開くと、自動でミラーリングを開始します
- **外部からの操作** — インテントでミラーリングを開始・停止・切り替えできます。自動化アプリ、ホーム画面のショートカット、ADB から使えます。詳しくは [他のアプリからミラーリングを操作](https://github.com/slzn/ScreenOnAuto-releases/wiki/他のアプリからミラーリングを操作) を参照してください
- **スリープを防止** — ミラーリング中にスマホの画面がスリープしないようにします
- **切断時に停止** — Android Auto との接続が切れると、自動でミラーリングを停止します
- **自動起動アプリ** — ミラーリングが始まり Android Auto に接続しているときに、選んだアプリをスマホで自動的に起動します
- **このアプリだけをミラーリング** *（Android 15 以上）* — 画面全体ではなく自動起動アプリだけを車に送り、スマホのほかの部分は見せません。[ADB で事前に付与した](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-でミラーリング権限を付与)画面キャプチャの権限が必要です。そのアプリから離れている間、車の画面は何も表示しません
- **横向きを強制** — ミラーリング中にスマホを横向きに固定します。接続時に自動で開始でき、画面上のボタンで切り替えられます
- **起動ショートカット** — Android Auto のミラーリング画面に、アプリをすぐ起動できるボタンを最大 4 つ追加できます
- **画面のボタン** — 「画面のボタン」ページで、ミラーリング画面のボタンを 1 つずつ表示・非表示にできます：横向きを強制、自動減光、夜間減光、スマホの戻る / ホーム / 最近のアプリ（同時に最大 4 つ）
- **ボタンの配置** — Legacy のミラーリングで、画面のボタンを左揃えにしたり、スマホのナビゲーションバーを自動で避けたりできます
- **ミラーリングの調整** — 端が切れて表示されるヘッドユニット向けに、「詳細設定」でミラーの幅と高さを調整できます。同じ画面にある実験的な **独自描画ミラー** は、分割表示での映像のゆがみも防ぎます
- **タッチ転送** *（実験的）* — Android Auto のディスプレイでのタップ、スクロール、フリック、ピンチズームでスマホを操作できます

## 特権機能

任意 — [Shizuku](https://shizuku.rikka.app/) または root が必要です。どちらもなくても、ほかの機能はまったく同じように動作します。

| 機能 | 内容 |
|---|---|
| **スマホの画面を消灯する** | 自動減光が働くとスマホのパネルを消灯し、車にはミラーリングを表示したままにします。バッテリーを節約でき、夜間にスマホが車内を照らすこともありません |
| **実タッチ入力の注入** | 合成したジェスチャーではなく実際の指の動きを転送するので、Legacy のミラーリングで **長押し、ドラッグ、マルチタッチ** が使えます |
| **スマホのナビゲーションボタン** | 戻る / ホーム / 最近のアプリが、**ユーザー補助サービスをまったく有効にせずに** 使えます。ボタンは **画面のボタン → 機能ボタン** でオンにします |
| **スマホの画面を車の画面比に合わせる** | ミラーリング中、スマホの画面をヘッドユニットの縦横比に合わせて変更するので、黒い帯や分割表示でのゆがみが根本からなくなります。車の画面は自動で測定されます |

接続したら Shizuku が止まった、画面が点灯しない、という場合は [トラブルシューティング](https://github.com/slzn/ScreenOnAuto-releases/wiki/使い方#特権機能shizuku--root) を参照してください。

## 動作環境

- Android 7.0（API 24）以上
- スマホに Android Auto がインストールされていること
- Android Auto に対応した車
- *（任意）* [Shizuku](https://shizuku.rikka.app/) または root — [特権機能](#特権機能) を使う場合

## インストール

### Android 14 以上 — Google Play からインストール

Android Auto は Play ストアからインストールされたアプリしか実行せず、Android 14 以上では KingInstaller による回避策が使えません。そのため、Google Play の内部テストからインストールしてください。GitHub 版と同じ全機能版ですが、Play ストアの検索には表示されません：[**インストールページで登録する**](https://screenonauto.lzn.idv.tw/join/?lang=ja)。30 分ごとに新しいラウンドが始まり、申し込んだラウンドの登録が締め切られた数分後にインストール用のリンクが表示されます。詳しい手順：[**Google Play テストプログラムでインストール**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Google-Play-テストプログラムでインストール)

### Android 13 以下 — KingInstaller でサイドロード

> **なぜ KingInstaller が必要なのですか？**  
> Android Auto は、Google Play ストアからインストールされたアプリしか認めません。APK を直接インストールすると、インストール元がブラウザやファイルマネージャーになり、Android Auto に拒否されます。KingInstaller は、インストール元を Google Play ストアとして報告しながら APK をインストールします。

#### ステップ 1 — KingInstaller をインストール

1. [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) を開き、最新の `KingInstaller.apk` をダウンロードします
2. ブラウザまたはファイルマネージャーに **不明なアプリのインストール** を許可します（初めて APK を開いたときに Android が確認します）
3. `KingInstaller.apk` を開き、**インストール** をタップします

#### ステップ 2 — KingInstaller で ScreenOnAuto をインストール

1. [最新リリース](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) から最新の `ScreenOnAuto-*.apk` をダウンロードします
2. **KingInstaller** を開いて **フォルダのアイコン** をタップし、ダウンロードした APK を選びます
3. **Install** をタップします。KingInstaller が、Google Play ストアからインストールしたものとして扱われるようにインストールします

### 別の方法 — AAWireless ドングルを使う

> **この方法を使う場面**：Google Play からのインストールがうまくいかず（たとえば、サンドボックス化された Google Play を使う GrapheneOS の場合）、AAWireless ドングルを持っている場合です。実際の車では、Android Auto は自身の **提供元不明のアプリ** 設定を無視します。この設定を有効にするのがドングルの Developer Mode なので、**ドングルがないとこの方法は使えません**。

1. [最新リリース](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) から最新の `ScreenOnAuto-*.apk` をダウンロードしてインストールします（Android に確認されたら、ブラウザまたはファイルマネージャーに **不明なアプリのインストール** を許可します）
2. ドングル経由でスマホを車に接続します。**AAWireless** アプリで **Passthrough mode** をオフにし、**Developer Mode** をオンにします
3. スマホの Android Auto の設定で **デベロッパー設定** を開き、**アプリケーション モード** を **デベロッパー** にして、**提供元不明のアプリ** をオンにします
   - デベロッパー設定が見つからない場合は、**バージョンと権限の情報** を 10 回タップしてから ⋮ メニューを開きます
4. スマホを再起動します

## Android Auto で確認

この確認は、KingInstaller でのサイドロード *でも*、Google Play でも、AAWireless を使う方法でも、**どの方法でインストールした場合も**同じです。

スマホで **設定 → 接続設定 → Android Auto → ランチャーをカスタマイズ** を開きます。次の **2 つ** の ScreenOnAuto の項目が表示されているはずです。

| アイコン | 名前 | 機能 |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | スマホの画面を全画面でミラーリングします。地図のエリアを置き換えて全画面で表示します |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Legacy の投影方式でスマホの画面をミラーリングします。地図と並べて表示できます |

古い Android Auto では、3 つ目の項目 **ScreenOnAuto メディアコントローラー** も表示されます。表示されなくても正常で、メディアの操作はどちらでも使えます。上の **2 つ** の項目のどちらかがない場合は、再インストールしてください（サイドロードなら KingInstaller で、Play ならインストールが完了するまで待つ）。その後、Android Auto を開き直してください。AAWireless を使う方法の場合は、Developer Mode と提供元不明のアプリがオンのままか確認してください。

準備ができたら、車でミラーリングを始める方法は **[使い方](https://github.com/slzn/ScreenOnAuto-releases/wiki/使い方)** を参照してください。

## 権限

| 権限 | 必要な機能 |
|---|---|
| 画面キャプチャ（MediaProjection） | 画面ミラーリング |
| 通知へのアクセス | メディアセッションプロキシ |
| 他のアプリの上に重ねて表示 | 自動減光、横向きを強制、夜間減光 |
| ユーザー補助サービス | タッチ転送、戻る / ホーム / 最近のアプリのボタン（特権機能を使う場合は不要） |

> **ヒント：** 起動するたびに画面キャプチャの許可ダイアログが出ないようにするには、ADB でこの権限を事前に付与できます。[ADB でミラーリング権限を付与](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-でミラーリング権限を付与) を参照してください。**このアプリだけをミラーリング** を使えるようにするのも、この設定です。

## 既知の制限

- **ミラーリング中はスマホの画面をオンにしておく必要があります** — ミラーリングに映るのはスマホの画面に表示されている内容です。**スリープを防止** で画面をオンのままにし、**自動減光** でバッテリーを節約してください。Shizuku または root があれば、「スマホの画面を消灯する」でこの制限はなくなります。
- **DRM で保護されたコンテンツはミラーリングできません** — Netflix や Disney+ などのアプリは、ミラーリング上で黒い画面になります。これは Android プラットフォームの制限で、アプリでは回避できません。
- **ミラーリング中に Android Auto の Google マップが黒くなることがあります（Android 15 以上）** — アプリが画面をキャプチャしている間、Android は機密性が高いと判断したアプリを隠します。Google マップがその対象になることがあります。**開発者向けオプション → 画面共有の保護を無効にする** をオンにすると解決します。これをオンにすると、画面の共有中にワンタイムコードを含む通知も隠されなくなります。この設定は次にミラーリングを開始したときから反映されます。詳しい手順は [使い方](https://github.com/slzn/ScreenOnAuto-releases/wiki/使い方#ミラーリング中に-android-auto-の-google-マップが黒くなる) を参照してください。
- 車の画面の **Android Auto のナビゲーションバー** は Android Auto 自身が描画しているため、非表示にできません。

## 免責事項

運転中は常に前方に注意し、このアプリを操作しないでください。

このプロジェクトは Google と提携しておらず、Google による承認や後援を受けていません。Android Auto は Google LLC の商標です。

## スペシャルサンクス

- **Jurek Harla** — Android の丸いアイコン形状に合うよう、ScreenOnAuto、ScreenOnAuto (Legacy)、メディアコントローラーのアイコンをデザインし直してくれました（v1.9.2）。

## スポンサー

このアプリが役に立ったら、寄付やタピオカのおごりで応援していただけるとうれしいです 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
