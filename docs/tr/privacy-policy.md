---
title: "Gizlilik Politikası"
description: "ScreenOnAuto'nun verilerinizle ne yaptığı ve ne yapmadığı: Uygulamanın internet izni yoktur, hiçbir şey toplamaz ve hiçbir şey paylaşmaz."
lang: tr
slug: privacy-policy
permalink: /docs/tr/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-19
---

# Gizlilik Politikası

ScreenOnAuto, Chih-En Liu tarafından geliştirilen ve telefon ekranını Android Auto araç ünitesine yansıtan bir Android uygulamasıdır. Bu politika uygulamayı ve `/join/` kurulum sayfası dahil screenonauto.lzn.idv.tw web sitesini kapsar.

**Kısacası: Uygulama hiçbir kişisel veri toplamaz, hiçbir sunucuda saklamaz ve kimseyle paylaşmaz.**

## Uygulama

### İnternet erişimi yok

ScreenOnAuto, Android'in internet iznini istemez; bu yüzden telefonunuzdan dışarıya veri gönderemez. Reklam, analiz, çökme raporlama veya izleme kitaplıkları içermez ve hesap gerektirmez.

### İzinler ne için kullanılır

Aşağıdakilerin tümü telefonunuzda gerçekleşir. Telefondan çıkan her şey yalnızca Android Auto bağlantısı üzerinden aracınıza gider.

| İzin | Ne için kullanılır |
|---|---|
| Ekran Kaydı (MediaProjection) | Telefon ekranını veya tek bir uygulamayı yakalayıp araç ekranında göstermek. Hiçbir şey kaydedilmez veya saklanmaz. |
| Bildirim Dinleyici | Medya kontrolleri için etkin medya oturumlarını (çalan içerik, oynat/duraklat, atla) okumak. Bildirim içerikleri okunmaz ve saklanmaz. |
| Erişilebilirlik Hizmeti | Araç ekranındaki dokunmaları telefonda dokunmaya dönüştürmek ve Geri / Ana ekran / Son uygulamalar düğmeleri. Ekran içeriğini okumaz ve aldığı erişilebilirlik olaylarını kullanmaz. |
| Diğer uygulamaların üzerinde göster | Otomatik Karartma, Yönü Kilitle ve Gece Karartması katmanları. |
| Sistem ayarlarını değiştirme | Android 16 ve sonrasında tablet modunda, yansıtma sırasında ekran döndürmeyi kilitlemek. |
| Shizuku veya root (isteğe bağlı) | Ayrıcalıklı özellikler: telefon ekranını kapatma, dokunma enjeksiyonu, telefonun gezinme düğmeleri ve yansıtma sırasında telefonun ekran boyutunu, yoğunluğunu, temasını, yazı tipi boyutunu, gezinme modunu ve varsayılan başlatıcısını (ana ekran uygulaması) değiştirme. Yansıtma bittiğinde telefonun kendi değerleri geri yüklenir. |

### Neler saklanır

Ayarlarınız ve uygulamanın yansıtmadan sonra geri yüklediği telefonun orijinal değerleri (ekran boyutu, tema veya varsayılan başlatıcı gibi), uygulamanın telefonunuzdaki kendi depolama alanında saklanır. Uygulamayı kaldırdığınızda silinir. Android yedeklemesi açıksa Android, çoğu uygulamada olduğu gibi bu ayarları kendi Google hesabınızın yedeğine ekleyebilir veya verilerinizi yeni bir telefona aktarırken oraya kopyalayabilir.

### Google Play

ScreenOnAuto'yu Google Play'den yüklerseniz Google, cihaz ayarlarınıza göre çökme ve performans istatistikleri toplayabilir ve bunları geliştiriciyle toplu olarak paylaşabilir (Android vitals). Bu, Google tarafından [Google Gizlilik Politikası](https://policies.google.com/privacy?hl=tr) kapsamında yürütülür.

## Web sitesi

### Kurulum sayfası (`/join/`)

Test kullanıcısı olmak için kurulum sayfasında Google ile oturum açarsınız. Yalnızca hesabınızın e-posta adresi, sizi o turun Google Play test kullanıcısı listesine eklemek için kullanılır. Size hiçbir zaman e-posta gönderilmez ve liste, turun kurulum süresi bittiğinde silinir.

Oturum açma işlemini Google yürütür: Sayfa, Google çerezleri ayarlayabilen ve IP adresinizi alan Google oturum açma betiğini yükler; bu, [Google Gizlilik Politikası](https://policies.google.com/privacy?hl=tr) kapsamındadır. Oturum açtıktan sonra Google'ın döndürdüğü ve e-posta adresiniz gibi Google hesabı bilgilerinizi içeren oturum açma jetonu, sekmeyi kapatana kadar tarayıcınızın oturum depolama alanında tutulur. Sayfa bu jetonu kurulum sunucusuna (api.screenonauto.lzn.idv.tw) gönderir; sunucu her istekte IP adresinizi alır, ancak IP adresinizi veya e-posta adresinizi kaydetmez.

### Geri kalan her şey

Kurulum sayfasındaki oturum açma dışında site analiz, izleme veya çerez kullanmaz. Açık/koyu tema tercihiniz tarayıcınızın yerel depolama alanında tutulur. Site GitHub Pages üzerinde barındırılır ve yazı tiplerini Google Fonts'tan yükler; bu nedenle GitHub ve Google, sayfaları sunarken kendi gizlilik politikaları kapsamında IP adresinizi alır.

## Gönderdiğiniz hata raporları

Bir hata raporu veya günlük göndermeyi seçerseniz (örneğin bir GitHub issue'sundaki Google Drive bağlantısıyla), bu rapor cihazınız ve üzerindeki uygulamalar hakkında bilgi içerebilir. Yalnızca sorununuzu incelemek için kullanılır ve inceleme bittiğinde silinir. GitHub issue'ları herkese açıktır; bu yüzden oraya kişisel bilgi paylaşmayın.

## Çocuklar

ScreenOnAuto 13 yaşından küçük çocuklara yönelik değildir ve bilerek kimseden veri toplamaz.

## Değişiklikler

Bu politika değişirse yeni sürüm bu sayfada yayımlanır ve aşağıdaki “Son güncelleme” tarihi değişir.

## İletişim

[GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) üzerinde bir issue açın veya screenonauto@gmail.com adresine e-posta gönderin.
