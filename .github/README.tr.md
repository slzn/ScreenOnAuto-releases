# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [العربية](README.ar.md) | [한국어](README.ko.md)

*🌐 [Resmî web sitesi](https://screenonauto.lzn.idv.tw/tr/)*

> Android telefonunuzun ekranını Android Auto ekranına yansıtın; medya düğmesi kontrolleri de desteklenir.
>
> **Kullanımı ücretsizdir. Hiçbir özellik ek ödeme gerektirmez.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Android Auto ekranında haritayla yan yana yansıtılan telefon ekranı"></p>

> [!IMPORTANT]
> **Kurulum yönteminiz Android sürümünüze bağlıdır:**
> - **Android 14 ve üzeri** — **yalnızca Google Play üzerinden** kurulur: yarım saatte bir açılan bir tura kaydolun, ardından 25 dakika içinde yükleyin (uygulama Play Store'da **aramada görünmez**). [Kaydol →](https://screenonauto.lzn.idv.tw/join/?lang=tr)
> - **Android 13 ve altı** — APK'yı KingInstaller ile elle yükleyin ([adımlar aşağıda](#kurulum)) veya Google Play üzerinden kurun.

## Özellikler

- **Ekran Yansıtma** — Telefon ekranınızı gerçek zamanlı olarak Android Auto araç ekranına yansıtın
- **Medya Oturumu Aracısı** — Telefondaki herhangi bir medya uygulamasını Android Auto'nun yerleşik medya arayüzünden kontrol edin
- **Otomatik Karartma** — Yansıtma boştayken telefon ekranı parlaklığını otomatik olarak düşürün (15/30/60/120 sn gecikme)
- **Otomatik Başlatma** — Android Auto bağlandığında yansıtmayı otomatik olarak başlatın
- **Harici Kontrol** — Yansıtmayı bir intent ile başlatın, durdurun veya değiştirin; otomasyon uygulamasından, kısayoldan veya ADB'den — [Yansıtmayı Başka Bir Uygulamadan Kontrol Etme](https://github.com/slzn/ScreenOnAuto-releases/wiki/Yansıtmayı-Başka-Bir-Uygulamadan-Kontrol-Etme)
- **Uykuyu Engelleme** — Yansıtma sırasında telefon ekranının uykuya geçmesini engelleyin
- **Bağlantı Kesilince Durdurma** — Android Auto bağlantısı kesildiğinde yansıtmayı otomatik olarak durdurun
- **Uygulamayı Otomatik Başlatma** — Yansıtma başladığında ve Android Auto bağlıyken seçtiğiniz bir uygulamayı telefonda otomatik olarak açın
- **Yalnızca bu uygulamayı yansıt** *(Android 15+)* — Tüm ekran yerine yalnızca otomatik başlatılan uygulamayı arabaya gönderir, telefonun geri kalanı gizli kalır. Ekran Kaydı izninin [ADB ile önceden verilmiş olmasını](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-ile-Yansıtma-İzni-Verme) gerektirir; o uygulamadan ayrıldığınızda araba ekranı boş kalır
- **Yatay Modu Zorlama** — Yansıtma sırasında telefonu yatay moda zorlayın; bağlantıda otomatik başlar, ekranda aç/kapat düğmesi vardır
- **Başlatma Kısayolları** — Android Auto yansıtma ekranına en fazla 4 hızlı uygulama başlatma düğmesi ekleyin
- **Ekran Düğmeleri** — Yansıtma ekranındaki düğmeleri Ekran düğmeleri sayfasından tek tek gösterin veya gizleyin: Yatay modu zorla, Otomatik karartma ve telefonun Geri / Ana ekran / Son uygulamalar düğmeleri (aynı anda en fazla 4)
- **Düğme Konumu** — Legacy yansıtmada düğmeleri sola hizalayın veya telefonun gezinme çubuğundan otomatik olarak kaçının
- **Yansıtma Ayarı** — Kenarları kesen araç ekranları için Gelişmiş ayarlardan yansıtma genişliğini/yüksekliğini kırpın; aynı yerdeki deneysel **Uygulamanın çizdiği yansıtma** da bölünmüş görünümdeki bozulmayı önler
- **Dokunma Aktarımı** *(deneysel)* — Telefonunuzu kontrol etmek için Android Auto ekranına dokunun, kaydırın, savurun ve iki parmakla yakınlaştırın

## Ayrıcalıklı özellikler

İsteğe bağlı — [Shizuku](https://shizuku.rikka.app/) veya root gerektirir. Bunlar olmadan diğer her şey aynen çalışır.

| Özellik | Ne yapar |
|---|---|
| **Telefon ekranını kapat** | Otomatik Karartma devreye girdiğinde telefonun panelini kapatır, araç ise yansıtmayı göstermeye devam eder — pil tasarrufu sağlar ve gece telefonun kabini aydınlatmasını önler |
| **Gerçek dokunma enjeksiyonu** | Sentezlenmiş hareketler yerine gerçek parmak hareketlerinizi aktarır; böylece **uzun basma, sürükleme ve çoklu dokunma** Legacy yansıtmasında çalışır |
| **Telefon gezinme düğmeleri** | Geri / Ana ekran / Son uygulamalar **hiçbir Erişilebilirlik Hizmeti etkin olmadan** çalışır. Düğmeleri **Ekran düğmeleri → İşlev düğmeleri** bölümünden açın |
| **Telefon ekranını arabaya uydur** | Yansıtma sırasında telefon ekranını araba ünitesinin en boy oranına dönüştürür, böylece siyah kenarlıklar ve bölünmüş ekrandaki bozulma kaynağında ortadan kalkar — araba ekranı otomatik olarak ölçülür |

Araca takınca Shizuku durdu mu, ya da ekran uyanmıyor mu? [Sorun Giderme](https://github.com/slzn/ScreenOnAuto-releases/wiki/Nasıl-Kullanılır#sorun-giderme) bölümüne bakın.

## Gereksinimler

- Android 7.0 (API 24) veya üzeri
- Telefonda Android Auto kurulu
- Android Auto destekleyen bir araç
- *(İsteğe bağlı)* [Shizuku](https://shizuku.rikka.app/) veya root — [Ayrıcalıklı özellikler](#ayrıcalıklı-özellikler) için

## Kurulum

### Android 14 ve üzeri — Google Play üzerinden kurulum

Android Auto yalnızca Play Store'dan yüklenen uygulamaları çalıştırır ve Android 14+ KingInstaller yöntemini engeller — bu yüzden Google Play dahili testi üzerinden yükleyin. GitHub'dakiyle aynı tam uygulamadır, ancak Play Store aramalarında görünmez: [**yükleme sayfasından kaydolun**](https://screenonauto.lzn.idv.tw/join/?lang=tr). Her 30 dakikada yeni bir tur açılır ve tur başladığında yükleme bağlantınız görünür. Tüm adımlar: [**Beta Testine Katılın**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Beta-Testine-Katılın).

### Android 13 ve altı — KingInstaller ile elle yükleme

> **Neden KingInstaller?**  
> Android Auto, uygulamaların Google Play Store üzerinden yüklenmesini şart koşar.
> APK'yı doğrudan yüklerseniz yükleyici kaynağı tarayıcınız veya dosya yöneticiniz
> olarak görünür ve Android Auto bunu reddeder. KingInstaller, APK'ları yükleyici
> kaynağı olarak Google Play Store'u bildirerek kurar.

#### 1. Adım — KingInstaller'ı kurun

1. [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) sayfasına gidin ve en yeni `KingInstaller.apk` dosyasını indirin
2. Tarayıcınızın veya dosya yöneticinizin **bilinmeyen uygulamaları yüklemesine** izin verin — Android bunu bir APK'yı ilk açtığınızda sorar
3. `KingInstaller.apk` dosyasını açın ve **Yükle**'ye dokunun

#### 2. Adım — ScreenOnAuto'yu KingInstaller ile kurun

1. En yeni `ScreenOnAuto-*.apk` dosyasını [en son sürümden](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) indirin
2. **KingInstaller**'ı açın, **klasör simgesine** dokunun ve indirdiğiniz APK'yı seçin
3. **Yükle**'ye dokunun — KingInstaller uygulamayı Google Play Store'dan gelmiş gibi kurar

#### 3. Adım — İzinleri verin

**ScreenOnAuto**'yu başlatın ve gerekli izinleri vermek için uygulama içi yönergeleri izleyin.

## Android Auto'da Doğrulama

Bu adım **kurulum yönteminizden bağımsız** çalışır — KingInstaller ile elle yükleme *veya* Google Play.

Telefonunuzda **Ayarlar → Bağlı cihazlar → Android Auto → Başlatıcıyı özelleştir** yolunu izleyin.
Şu **iki** ScreenOnAuto girişini görmelisiniz:

| Simge | Ad | İşlev |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Telefon ekranını tam ekran yansıtır — tam ekran görünüm için harita alanının yerini alır |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Telefon ekranını Legacy projeksiyon yoluyla yansıtır — haritayla yan yana gösterilebilir |

Eski Android Auto sürümleri üçüncü bir öğe de gösterir: **ScreenOnAuto Media Controller**. Görmüyorsanız bu normaldir — medya kontrolü yine çalışır.
Yukarıdaki **iki** öğeden biri eksikse yeniden yükleyin — sideload için KingInstaller ile, Play için kurulumun bitmesini bekleyin — ve Android Auto'yu yeniden açın.

Hazır mısınız? Arabada yansıtmayı başlatmak için **[Nasıl Kullanılır](https://github.com/slzn/ScreenOnAuto-releases/wiki/Nasıl-Kullanılır)** kılavuzuna bakın.

## İzinler

| İzin | Gerekli Olduğu Özellik |
|---|---|
| Ekran Kaydı (MediaProjection) | Ekran Yansıtma |
| Bildirim Dinleyici | Medya Oturumu Aracısı |
| Diğer uygulamaların üzerinde göster | Otomatik Karartma ve Yatay Modu Zorlama |
| Erişilebilirlik Hizmeti | Dokunma aktarımı ve Geri / Ana ekran / Son uygulamalar düğmeleri (ayrıcalıklı özelliklerle gerekmez) |

> **İpucu:** Her başlatmada Ekran Kaydı izin penceresiyle karşılaşmamak için izni ADB ile önceden verebilirsiniz — bkz. [ADB ile Yansıtma İzni Verme](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-ile-Yansıtma-İzni-Verme). Bu aynı zamanda **Yalnızca bu uygulamayı yansıt** özelliğini de açar.

## Bilinen Sınırlamalar

- **Yansıtma sırasında telefon ekranı açık kalmalıdır** — yansıtma telefon ekranında görüneni gösterir. Ekranı açık tutmak için **Uykuyu engelle**'yi, pil tasarrufu için **Otomatik karartma**'yı kullanın; Shizuku veya root ile Telefon ekranını kapat bu sınırlamayı kaldırır.
- **DRM korumalı içerik yansıtılamaz** — Netflix veya Disney+ gibi uygulamalar yansıtmada siyah ekran gösterir. Bu, uygulamanın aşamayacağı bir Android platform kısıtlamasıdır.
- Araç ekranındaki **Android Auto gezinme çubuğu** Android Auto'nun kendisi tarafından çizilir ve gizlenemez.

## Sorumluluk Reddi

Gözleriniz her zaman yolda olsun — bu uygulamayı sürüş sırasında kullanmayın.

Bu proje Google ile bağlantılı değildir; Google tarafından onaylanmamış veya desteklenmemiştir. Android Auto, Google LLC'nin ticari markasıdır.

## Özel Teşekkürler

- **Jurek Harla** — ScreenOnAuto, ScreenOnAuto (Legacy) ve Media Controller simgelerini Android’in yuvarlak simge biçimine sığacak şekilde yeniden tasarladı (v1.9.2).

## Destek

Bu uygulamayı yararlı buluyorsanız bağış yapabilir veya bana bir bubble tea ısmarlayabilirsiniz 🧋

[![PayPal ile bağış yap](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Bana bir bubble tea ısmarla](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
