---
title: "Kullanım Koşulları"
description: "ScreenOnAuto'nun kullanım koşulları: ücretsiz kullanım, araç kullanırken sorumluluğunuz, ayrıcalıklı özellikler ve garanti olmaması."
lang: tr
slug: terms-of-use
permalink: /docs/tr/terms-of-use/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Kullanım Koşulları

Bu koşullar, Chih-En Liu tarafından geliştirilen Android uygulaması ScreenOnAuto'yu ve `/join/` kurulum sayfası dahil screenonauto.lzn.idv.tw web sitesini kapsar. ScreenOnAuto'yu yükleyerek veya kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen uygulamayı kullanmayın.

## Uygulamanın kullanımı

ScreenOnAuto ücretsizdir. Uygulamayı değiştirip veya kaynak koduna dönüştürüp (decompile) sonucu yeniden dağıtamaz; uygulamayı veya onun gibi sunulan herhangi bir şeyi, uygulama mağazaları dahil, ScreenOnAuto adıyla yeniden yayımlayamazsınız. Resmi indirme sayfalarının bağlantılarını paylaşmanız memnuniyetle karşılanır.

Uygulamayı yalnızca resmi kaynaklardan edinin: [GitHub sürümler sayfası](https://github.com/slzn/ScreenOnAuto-releases/releases) ve [kurulum sayfasındaki](/join/?lang=tr) Google Play test programı. Başka yerlerden alınan kopyalar değiştirilmiş olabilir.

## Araç kullanırken güvenlik

ScreenOnAuto'yu bir araçta nasıl kullandığınızdan siz sorumlusunuz.

- Gözünüzü her zaman yoldan ayırmayın. Araç kullanırken uygulamayı çalıştırmayın ve gösterdiklerini izlemeyin.
- Araç kullandığınız yerin trafik kurallarına uyun. Pek çok yerde, araç kullanırken video izlemek veya bir ekranı kullanmak, hangi uygulama gösteriyor olursa olsun yasaktır.
- İşiniz gereği araç kullanıyorsanız, örneğin taksi, yolcu taşıma uygulaması veya kurye şoförü olarak, işvereninizin veya platformun kurallarına da uyun.
- Yansıtmayı yola çıkmadan önce ayarlayın veya bir yolcunun kullanmasına izin verin.

Geliştirici, uygulamanın araç kullanırken kullanılmasından doğan kazalardan, cezalardan veya diğer sonuçlardan sorumlu değildir.

## Sistem ayarlarını değiştiren özellikler

Bazı özellikler yansıtma sırasında telefonun sistem ayarlarını değiştirir ve yansıtma bitince geri yükler:

- Shizuku veya root ile: ekran boyutu, yoğunluk, tema, yazı tipi boyutu, gezinme modu ve varsayılan başlatıcı (ana ekran uygulaması);
- Android 16 ve sonrasında tablet modunda Yönü Kilitle: sistemin döndürme kilidi.

Geri yükleme başarısız olabilir; örneğin kabloyu çıkardığınız anda Shizuku bağlantısı koparsa. Bu özellikleri kullanma riski size aittir. Bir ayar değişmiş olarak kalırsa telefonun Ayarlar uygulamasından geri alın. Ekran boyutu ve yoğunluk `adb shell wm size reset` ve `adb shell wm density reset` ile de sıfırlanabilir.

Yine Shizuku veya root gerektiren Telefon ekranını kapat özelliği, yansıtma sırasında telefonun ekranını kapatır. Ekran yeniden açılmazsa telefonun güç düğmesine iki kez basın.

## Android Auto ve Google Play

Bu proje Google ile bağlantılı değildir; Google tarafından onaylanmamış veya desteklenmemiştir. Android Auto, Google LLC'nin ticari markasıdır.

Uygulama, Google'ın her an değiştirebileceği Android Auto, Android ve Google Play davranışlarına dayanır. Bunlardan herhangi birinin güncellemesi bazı veya tüm özelliklerin çalışmamasına yol açabilir ve her zaman bir çözüm mümkün olmayabilir. Kurulum sayfasındaki Google Play test programı her an değişebilir, duraklatılabilir veya sona erebilir.

## Garanti yoktur

ScreenOnAuto ve web sitesi, satılabilirlik, belirli bir amaca uygunluk ve ihlal etmeme garantileri dahil, açık veya zımni hiçbir garanti olmaksızın "olduğu gibi" ve "mevcut olduğu şekilde" sunulur. Uygulamanın telefonunuzla veya aracınızla çalışacağı ya da kesintisiz ve hatasız çalışacağı garanti edilmez.

## Sorumluluğun sınırlandırılması

Yasaların izin verdiği en geniş ölçüde geliştirici, ScreenOnAuto'nun veya web sitesinin kullanılmasından ya da kullanılamamasından doğan doğrudan, dolaylı, arızi veya sonuç olarak ortaya çıkan hiçbir zarardan sorumlu değildir. Buna kazalar, cezalar, veri kaybı ve telefonunuza veya aracınıza gelen hasar dahildir.

## Destek ve bağışlar

Destek, [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) üzerinden elden gelen ölçüde verilir; yanıt süresi garanti edilmez. Bağışlar gönüllüdür. Geliştirmeyi destekler; özellik, destek veya herhangi bir garanti satın almaz.

## Gizlilik

Verilerin nasıl işlendiği [Gizlilik Politikası](/docs/tr/privacy-policy/) sayfasında açıklanmıştır.

## Değişiklikler

Bu koşullar güncellenebilir. Yeni sürüm bu sayfada yayımlanır ve aşağıdaki “Son güncelleme” tarihi değişir. Bir değişiklikten sonra ScreenOnAuto'yu kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.

## İletişim

[GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) üzerinde bir issue açın veya screenonauto@gmail.com adresine e-posta gönderin.
