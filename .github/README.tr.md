# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [Resmî web sitesi](https://screenonauto.lzn.idv.tw/tr/)*

> Android telefonunuzun ekranını Android Auto ekranına yansıtın; medya düğmesi kontrolleri de desteklenir.
>
> **Kullanımı ücretsizdir. Hiçbir özellik ek ödeme gerektirmez.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Android Auto ekranında haritayla yan yana yansıtılan telefon ekranı"></p>

> [!IMPORTANT]
> **Nasıl kurulur:**
> - **Önerilen — Google Play**, tüm Android sürümlerinde: yarım saatte bir açılan bir tura kaydolun, ardından 25 dakika içinde yükleyin (uygulama Play Store'da **aramada görünmez**). Android Auto uygulamayı ek bir ayar gerektirmeden kabul eder. [Kaydol →](https://screenonauto.lzn.idv.tw/join/?lang=tr)
> - **Android 13 ve altı** — APK'yı KingInstaller ile elle de yükleyebilirsiniz ([adımlar aşağıda](#alternatif--android-13-ve-altı-kinginstaller-ile-elle-yükleme)).
> - **AAWireless adaptörünüz mü var?** — APK'yı tüm Android sürümlerinde doğrudan da kurabilirsiniz ([adımlar aşağıda](#alternatif--aawireless-adaptörüyle)).

## Özellikler

- **Ekran Yansıtma** — Telefon ekranınızı gerçek zamanlı olarak Android Auto araç ekranına yansıtın
- **Medya Oturumu Aracısı** — Telefondaki herhangi bir medya uygulamasını Android Auto'nun yerleşik medya arayüzünden kontrol edin
- **Otomatik Karartma** — Yansıtma boştayken telefon ekranı parlaklığını otomatik olarak düşürün (15/30/60/120 sn gecikme)
- **Gece Karartması** — Aracın gündüz/gece moduna göre (veya her zaman) geceleri araç ekranındaki yansıtmayı karartır; gücü ayarlanabilir, isteğe bağlı bir ekran düğmesi vardır. Gelişmiş ayarlardan açılır; “ScreenOnAuto” yansıtmasında, uygulamanın çizdiği yansıtma açık değilse telefon ekranı da kararır
- **Otomatik Başlatma** — Araç ekranında ScreenOnAuto'yu veya ScreenOnAuto (Legacy)'yi açtığınızda yansıtmayı otomatik olarak başlatın
- **Harici Kontrol** — Yansıtmayı bir intent ile başlatın, durdurun veya değiştirin; otomasyon uygulamasından, kısayoldan veya ADB'den — [Yansıtmayı Başka Bir Uygulamadan Kontrol Etme](https://github.com/slzn/ScreenOnAuto-releases/wiki/Yansıtmayı-Başka-Bir-Uygulamadan-Kontrol-Etme)
- **Uykuyu Engelleme** — Yansıtma sırasında telefon ekranının uykuya geçmesini engelleyin
- **Bağlantı Kesilince Durdurma** — Android Auto bağlantısı kesildiğinde yansıtmayı otomatik olarak durdurun
- **Uygulamayı Otomatik Başlatma** — Yansıtma başladığında ve Android Auto bağlıyken seçtiğiniz bir uygulamayı telefonda otomatik olarak açın
- **Yalnızca bu uygulamayı yansıt** *(Android 15+)* — Tüm ekran yerine yalnızca otomatik başlatılan uygulamayı arabaya gönderir, telefonun geri kalanı gizli kalır. Ekran Kaydı izninin [ADB ile önceden verilmiş olmasını](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-ile-Yansıtma-İzni-Verme) gerektirir; o uygulamadan ayrıldığınızda araba ekranı boş kalır
- **Yönü Kilitle** — Yansıtma sırasında telefonu yatay (iki yönde de) veya dikey konumda kilitleyin ya da araç ekranının şekline uydurun; bağlantıda otomatik başlar, ekranda aç/kapat düğmesi vardır
- **Başlatma Kısayolları** — Android Auto yansıtma ekranına en fazla 4 hızlı uygulama başlatma düğmesi ekleyin; araçta gösterilen metni değiştirmek için birine uzun basın
- **Ekran Düğmeleri** — Yansıtma ekranındaki düğmeleri Ekran düğmeleri sayfasından tek tek gösterin veya gizleyin: Yönü kilitle, Otomatik karartma, Gece karartması ve telefonun Geri / Ana ekran / Son uygulamalar düğmeleri (aynı anda en fazla 4)
- **Düğme Konumu** — Legacy yansıtmada düğmeleri sola hizalayın, telefonun gezinme çubuğundan uzak tutun veya aracın kendi kontrollerini kapatmamaları için kenarlara olan mesafelerini (kısayol çubuğu dahil) ayarlayın
- **Yansıtma Ayarı** — Kenarları kesen araç ekranları için Gelişmiş ayarlardan yansıtma genişliğini/yüksekliğini kırpın; aynı yerdeki deneysel **Uygulamanın çizdiği yansıtma** da bölünmüş görünümdeki bozulmayı önler
- **Dokunma Aktarımı** *(deneysel)* — Telefonunuzu kontrol etmek için Android Auto ekranına dokunun, kaydırın, savurun ve iki parmakla yakınlaştırın

## Ayrıcalıklı özellikler

İsteğe bağlı — [Shizuku](https://shizuku.rikka.app/) veya root gerektirir. Bunlar olmadan diğer her şey aynen çalışır.

| Özellik | Ne yapar |
|---|---|
| **Telefon ekranını kapat** | Otomatik Karartma devreye girdiğinde telefonun panelini kapatır, araç ise yansıtmayı göstermeye devam eder — pil tasarrufu sağlar ve gece telefonun kabini aydınlatmasını önler |
| **Gerçek dokunma enjeksiyonu** | Sentezlenmiş hareketler yerine gerçek parmak hareketlerinizi aktarır; böylece **uzun basma, sürükleme ve çoklu dokunma** Legacy yansıtmasında çalışır |
| **Telefon ekranını arabaya uydur** | Yansıtma sırasında telefon ekranını araba ünitesinin en boy oranına dönüştürür, böylece siyah kenarlıklar ve bölünmüş ekrandaki bozulma kaynağında ortadan kalkar — araba ekranı otomatik olarak ölçülür |

Shizuku veya root ile ayrıca:

- **Telefon gezinme düğmeleri** — Hiçbir Erişilebilirlik Hizmeti etkin olmadan Geri / Ana ekran / Son uygulamalar; düğmeleri **Ekran düğmeleri → İşlev düğmeleri** bölümünden açın
- **Aracın gündüz/gece modunu izle** *(Android 10+)* — Yansıtma sırasında telefon, Android Auto ile birlikte açık ve koyu tema arasında geçiş yapar
- **Yansıtma sırasında yazı tipi boyutu** — Yansıtma sırasında telefona farklı bir yazı tipi boyutu verin

Yansıtma bittiğinde telefonun kendi teması ve yazı tipi boyutu geri gelir.

Araca takınca Shizuku durdu mu, ya da ekran uyanmıyor mu? [Sorun Giderme](https://github.com/slzn/ScreenOnAuto-releases/wiki/Nasıl-Kullanılır#ayrıcalıklı-özellikler-shizuku--root) bölümüne bakın.

## Gereksinimler

- Android 7.0 (API 24) veya üzeri
- Telefonda Android Auto kurulu
- Android Auto destekleyen bir araç
- *(İsteğe bağlı)* [Shizuku](https://shizuku.rikka.app/) veya root — [Ayrıcalıklı özellikler](#ayrıcalıklı-özellikler) için

## Kurulum

### Google Play (önerilen)

Tüm Android sürümlerinde çalışır ve Android Auto uygulamayı ek bir ayar gerektirmeden kabul eder (Android Auto yalnızca Play Store'dan yüklenen uygulamaları çalıştırır ve Android 14+ KingInstaller yöntemini engeller). Bu, Google Play dahili testidir — GitHub'dakiyle aynı tam uygulamadır, ancak Play Store aramalarında görünmez: [**yükleme sayfasından kaydolun**](https://screenonauto.lzn.idv.tw/join/?lang=tr). Her 30 dakikada yeni bir tur açılır ve kendi turunuzun kayıtları kapandıktan birkaç dakika sonra yükleme bağlantınız görünür. Tüm adımlar: [**Google Play Test Programı Üzerinden Yükleme**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Google-Play-Test-Programı-Üzerinden-Yükleme).

### Alternatif — Android 13 ve altı: KingInstaller ile elle yükleme

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

### Alternatif — AAWireless adaptörüyle

> **Ne zaman kullanılır:** Bir AAWireless adaptörünüz varsa ve APK'yı Google Play yerine doğrudan kurmayı tercih ediyorsanız — Play'in kuramadığı yerlerde de çalışır, örneğin korumalı alanda (sandboxed) Google Play kullanan GrapheneOS'ta. Gerçek bir araçta Android Auto kendi **Bilinmeyen kaynaklar** ayarını yok sayar; bu ayarı etkin kılan, adaptörün Developer Mode özelliğidir. Bu yüzden **bu yöntem adaptör olmadan çalışmaz**.

1. En yeni `ScreenOnAuto-*.apk` dosyasını [en son sürümden](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) indirip kurun — Android sorarsa tarayıcınızın veya dosya yöneticinizin **bilinmeyen uygulamaları yüklemesine** izin verin
2. Telefonu adaptör üzerinden araca bağlayın. **AAWireless** uygulamasında **Passthrough mode**'u kapatın ve **Developer Mode**'u açın
3. Telefondaki Android Auto ayarlarında **Geliştirici ayarları**'nı açın, **Uygulama modu**'nu **Geliştirici** olarak ayarlayın ve **Bilinmeyen kaynaklar**'ı açın
   - Geliştirici ayarlarını göremiyor musunuz? **Sürüm ve izin bilgileri**'ne 10 kez dokunun, ardından ⋮ menüsünü açın
4. Telefonu yeniden başlatın

## Android Auto'da Doğrulama

Bu adım **kurulum yönteminizden bağımsız** çalışır — KingInstaller ile elle yükleme, Google Play *veya* AAWireless yöntemi.

Telefonunuzda **Ayarlar → Bağlı cihazlar → Android Auto → Başlatıcıyı özelleştir** yolunu izleyin.
Şu **iki** ScreenOnAuto girişini görmelisiniz:

| Simge | Ad | İşlev |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Telefon ekranını tam ekran yansıtır — tam ekran görünüm için harita alanının yerini alır |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Telefon ekranını Legacy projeksiyon yoluyla yansıtır — haritayla yan yana gösterilebilir |

Eski Android Auto sürümleri üçüncü bir öğe de gösterir: **ScreenOnAuto Media Controller**. Görmüyorsanız bu normaldir — medya kontrolü yine çalışır.
Yukarıdaki **iki** öğeden biri eksikse yeniden yükleyin — sideload için KingInstaller ile, Play için kurulumun bitmesini bekleyin — ve Android Auto'yu yeniden açın. AAWireless yönteminde Developer Mode ve Bilinmeyen kaynaklar ayarlarının hâlâ açık olduğunu kontrol edin.

Hazır mısınız? Arabada yansıtmayı başlatmak için **[Nasıl Kullanılır](https://github.com/slzn/ScreenOnAuto-releases/wiki/Nasıl-Kullanılır)** kılavuzuna bakın.

## İzinler

| İzin | Gerekli Olduğu Özellik |
|---|---|
| Ekran Kaydı (MediaProjection) | Ekran Yansıtma |
| Bildirim Dinleyici | Medya Oturumu Aracısı |
| Diğer uygulamaların üzerinde göster | Otomatik Karartma, Yönü Kilitle ve Gece Karartması |
| Erişilebilirlik Hizmeti | Dokunma aktarımı ve Geri / Ana ekran / Son uygulamalar düğmeleri (ayrıcalıklı özelliklerle gerekmez) |

> **İpucu:** Her başlatmada Ekran Kaydı izin penceresiyle karşılaşmamak için izni ADB ile önceden verebilirsiniz — bkz. [ADB ile Yansıtma İzni Verme](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB-ile-Yansıtma-İzni-Verme). Bu aynı zamanda **Yalnızca bu uygulamayı yansıt** özelliğini de açar.

## Bilinen Sınırlamalar

- **Yansıtma sırasında telefon ekranı açık kalmalıdır** — yansıtma telefon ekranında görüneni gösterir. Ekranı açık tutmak için **Uykuyu engelle**'yi, pil tasarrufu için **Otomatik karartma**'yı kullanın; Shizuku veya root ile Telefon ekranını kapat bu sınırlamayı kaldırır.
- **DRM korumalı içerik yansıtılamaz** — Netflix veya Disney+ gibi uygulamalar yansıtmada siyah ekran gösterir. Bu, uygulamanın aşamayacağı bir Android platform kısıtlamasıdır.
- **Yansıtma sırasında Android Auto'daki Google Haritalar siyah ekrana dönebilir (Android 15+)** — bir uygulama ekranı kaydederken Android, hassas saydığı uygulamaları gizler ve Google Haritalar bu listeye girebilir. Düzeltmek için **Geliştirici seçenekleri → Ekran paylaşımı korumalarını devre dışı bırak** seçeneğini açın; bu, ekranınızı paylaşırken Android'in tek kullanımlık kod içeren bildirimleri gizlemesini de durdurur. Ayar, yansıtma bir sonraki başlatılışında etkili olur; adımların tamamı için [Nasıl Kullanılır](https://github.com/slzn/ScreenOnAuto-releases/wiki/Nasıl-Kullanılır#yansıtma-sırasında-android-autodaki-google-haritalar-siyah-ekrana-dönüyor) sayfasına bakın.
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
