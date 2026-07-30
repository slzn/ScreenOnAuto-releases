---
title: "ADB ile Yansıtma İzni Verme"
description: "Ekran kaydı iznini ADB ile önceden verin; yansıtmayı her başlattığınızda izin penceresi bir daha görünmesin."
lang: tr
slug: grant-mirror-permission-via-adb
permalink: /docs/tr/grant-mirror-permission-via-adb/
date: 2026-07-20
last_modified_at: 2026-07-20
---

# ADB ile Yansıtma İzni Verme


Android, varsayılan olarak ScreenOnAuto ekran yansıtmayı her başlattığında bir izin penceresi gösterir.
**Ekran Kaydı (MediaProjection)** iznini ADB ile önceden vererek pencerenin bir daha hiç görünmemesini sağlayabilirsiniz.

## Ön Koşullar

- Bilgisayarınızda [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) kurulu
- Telefonda USB hata ayıklama etkin (**Ayarlar → Geliştirici seçenekleri → USB hata ayıklama**)
- Telefon USB ile bağlı (veya Wi-Fi üzerinden ADB)

## Adımlar

1. Bir terminal açın (Windows'ta Komut İstemi / PowerShell).

2. ADB'nin cihazınızı gördüğünü doğrulayın:

   ```
   adb devices
   ```

   Cihazınız `device` olarak görünmelidir (`unauthorized` değil).

3. İzni verin:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. ScreenOnAuto'yu başlatın ve yansıtmayı başlatın — izin penceresi artık görünmemelidir.

## İzni Geri Alma

Varsayılan davranışa (her seferinde pencere gösterilmesine) dönmek için:

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Sorun Giderme

- **`error: device unauthorized`** — Telefonunuzda "USB hata ayıklamaya izin verilsin mi?" penceresini bulun ve **İzin ver**'e dokunun.
- **Pencere hâlâ görünüyor** — ScreenOnAuto'yu zorla durdurun ve yeniden başlatın. Sorun sürerse yukarıdaki komutlarla izni geri alıp yeniden verin.
- **Uygulamayı yeniden yüklediniz (veya Play ile elle yükleme kanalları arasında geçiş yaptınız)** — kaldırma işlemi izni siler; yeniden yükledikten sonra izin komutunu tekrar çalıştırın.
- **İzin yeniden başlatmada sıfırlanıyor** — Bazı ROM'larda (ör. MIUI/HyperOS) `appops` izinleri yeniden başlatmayı atlatamaz. Her yeniden başlatmadan sonra komutu tekrar çalıştırın veya Wi-Fi üzerinden ADB kullanın.
