---
title: "Yansıtmayı Başka Bir Uygulamadan Kontrol Etme"
description: "Yansıtmayı bir intent ile başlatın, durdurun veya değiştirin — otomasyon uygulamasından, kısayoldan veya ADB'den."
lang: tr
slug: control-mirroring-from-another-app
permalink: /docs/tr/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Yansıtmayı Başka Bir Uygulamadan Kontrol Etme


**v1.8.4** sürümünden itibaren ScreenOnAuto, yansıtmayı başlatan, durduran veya açıp kapatan
üç intent kabul ediyor. Intent gönderebilen her şey — bir otomasyon uygulaması, ana ekran
kısayolu, ADB üzerinden bir betik, kendi yazdığınız bir uygulama — yansıtmayı bunlarla
sürebilir; böylece yansıtma elle değil, sürüş düzeninizin geri kalanıyla birlikte devreye
girer.

## Üç eylem

| Eylem | Ne yapar |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Yansıtmayı başlatır. Zaten çalışıyorsa hiçbir şey yapmaz. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Yansıtmayı durdurur. Çalışmıyorsa hiçbir şey yapmaz. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Çalışıyorsa durdurur, çalışmıyorsa başlatır. |

Bir eylemi yinelemek her zaman güvenlidir. Zaten çalışan bir yansıtmaya gönderilen başlatma,
oturumu yıkıp yeniden kurmak yerine yok sayılır; yani her Bluetooth bağlantısında tetiklenen
bir şey, hâlihazırda ayakta olan yansıtmayı kesmez.

## Bir otomasyon uygulamasında

Çoğu otomasyon uygulaması aynı parçaları kendi adlandırmasıyla sunar — genellikle şu
alanlara benzer bir "intent gönder" eylemiyle:

| Alan | Değer |
|---|---|
| Action | yukarıdaki üç eylemden biri |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (veya yayın için `…MirrorControlReceiver`) |
| Target | Activity (veya Broadcast) |

Aksi için bir nedeniniz yoksa Activity'yi kullanın — sonraki iki bölüm farkı ve yayının neden
yansıtmayı *başlatmak* için güvenilir olmadığını anlatıyor. Her durumda **Class** alanı
isteğe bağlı değildir: boş bırakılırsa yayın hiç ulaşmaz.

Bir şey çalışmıyorsa önce aşağıdaki ilgili ADB komutunu deneyin. Sorunun intent'te mi yoksa
onu gönderen uygulamada mı olduğunu söyler.

## Bir activity başlatma (önerilen)

Eylemi `idv.lzn.screenonauto/.MirrorControlActivity` adresine **activity** olarak gönderin:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Ekranda ScreenOnAuto'dan hiçbir şey görünmez ve Son Kullanılanlar'da iz kalmaz. Başlatmayı
arabaya varmadan *önce* de gönderebilirsiniz — yansıtma bekler ve araç ekranı hazır olur
olmaz kendiliğinden devralır.

> **ℹ️ Not**
> Yansıtma başlarken Android ekran kaydı iznini istemeye devam eder. Bunu gerçekten elle
> uğraşmadan çalıştırmak için izni ADB ile bir kez önceden verin — bkz.
> [ADB ile Yansıtma İzni Verme](/docs/tr/grant-mirror-permission-via-adb/).

## Yayın gönderme

Aynı üç eylem **yayın** olarak da çalışır; bu kez
`idv.lzn.screenonauto/.MirrorControlReceiver` adresine gönderilir:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Bu yolla gönderilen bir **durdurma** tümüyle sessizdir — pencere yok, titreme yok.

Bileşeni belirtmek isteğe bağlı değildir. Günümüz Android'i, gönderen hangi bileşen için
olduğunu söylemedikçe bir yayını uygulamaya iletmez; yalnızca eylemi taşıyan bir yayın
düşürülür ve hiçbir yerde hata çıkmadan hiçbir şey olmaz.

> **⚠️ Uyarı**
> Yayın olarak gönderilen bir **başlatma** güvenilir değildir ve başarısız olduğunda sessizce
> başarısız olur. Önce iki şeye izin verilmesi gerekir ve ikisi de birçok telefonda
> varsayılan olarak kapalıdır:
>
> - **Otomatik başlatma.** Birçok telefonda, bir uygulamanın yayınla uyandırılmasını tümüyle
>   engelleyen bir güç yönetimi bulunur. Pil veya telefon yöneticisi ayarlarında bir otomatik
>   başlatma yöneticisi arayın ve ScreenOnAuto'ya orada izin verin. Telefon sizi bundan
>   caydırmaya çalışabilir.
> - **Diğer uygulamaların üzerinde gösterme.** Bunu Android'in uygulama ayarlarından
>   ScreenOnAuto'ya verin.
>
> Yalnızca başlatmaya ihtiyacınız varsa yukarıdaki activity'yi kullanın — ikisine de gerek
> duymaz.

## Sorun giderme

- **Hiçbir şey olmuyor** — bileşenin belirtildiğini denetleyin. Bileşensiz bir yayın,
  ScreenOnAuto işin içine girmeden çok önce düşürülür.
- **Durdurma çalışıyor ama başlatma bir şey yapmıyor** — yayın gönderiyorsunuz ve yukarıdaki
  uyarıdaki iki izinden biri eksik. Bunun yerine activity'ye gönderin.
- **İzin penceresi her seferinde çıkıyor** — beklenen durum; izni
  [ADB](/docs/tr/grant-mirror-permission-via-adb/) ile önceden vermediyseniz böyle olur.
- **Yansıtma çalışırken başlatma bir şey yapmıyor** — bu da beklenen durum; yukarıya bakın.
