---
title: "Nasıl Kullanılır"
description: "Telefon bağlıyken yansıtmayı başlatma: iki yansıtma girişi ve farkları, adım adım başlatma akışı."
lang: tr
slug: how-to-use
permalink: /docs/tr/how-to-use/
---

# Nasıl Kullanılır


Bu kılavuz, **telefonunuz arabaya bağlıyken yansıtmayı başlatmayı** anlatır — iki
yansıtma girişi ve farkları ile adım adım başlatma akışı.

> **ℹ️ Not**
> **Başlamadan önce** şunlardan emin olun:
> - ScreenOnAuto yüklü ve üç giriş Android Auto başlatıcısında görünüyor.
> - Uygulamayı telefonda bir kez açıp istediği izinleri verdiniz.

## İki yansıtma girişi

Android Auto'nun uygulama başlatıcısında **iki** yansıtma girişi görünür. İkisi de
aynı telefon ekranını yansıtır — fark, yansıtmanın araç ekranında *nasıl*
gösterildiğidir:

![ScreenOnAuto girişlerini gösteren Android Auto başlatıcısı](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Görünüm | Tam ekran — harita alanının yerini alır | **Yeterince büyük bir araç ekranında** bölünmüş görünümde **haritayla yan yana** durabilir; daha küçük ekranlarda harita arka plana geçer ve yalnızca yansıtma gösterilir (haritanın yerini **almaz**) |

**ScreenOnAuto** — tam ekran, harita alanının yerini alır:

![ScreenOnAuto tam ekran yansıtma](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — haritayla yan yana:

![Haritayla yan yana ScreenOnAuto (Legacy)](/images/how-to-use/legacy-split.png)

İkisini de deneyin ve araç ekranınızda hangisi daha iyi çalışıyorsa onu kullanın.
İkisi de aynı yansıtmayı gösterir ve aralarında istediğiniz an geçiş yapabilirsiniz —
yansıtma çalışırken diğer girişi açmak, yeniden izin istemeden yansıtmayı hemen
gösterir.

> **💡 İpucu**
> Daha önce **ScreenOnAuto**'yu (tam ekran girişini) açtıysanız ve şimdi
> **ScreenOnAuto (Legacy)**'yi kullanmak istiyorsanız, önce araç ekranında harita
> uygulamanızı (ör. Google Haritalar) açın, sonra Legacy yansıtmayı başlatın. Böylece
> harita uygulaması araç ekranının varsayılan haritası olarak geri ayarlanır ve
> haritayla ilgili işlevler tam ekran yansıtma tarafından devralınmaz.

## Yansıtmayı başlatma

### Yansıtmayı otomatik başlat AÇIK (önerilir)

1. Telefondaki uygulamada **Yansıtmayı otomatik başlat**'ı açın (tek seferlik ayar).
2. Telefonu arabaya bağlayın ve Android Auto başlatıcısında bir ScreenOnAuto
   girişine (<img src="/images/icon_launcher.png" width="24" align="center"> veya
   <img src="/images/icon_legacy.png" width="24" align="center">) dokunun.
3. Telefon, ekran kaydı izin penceresini otomatik olarak açar — telefonu elinize
   alın ve **Şimdi başlat**'a dokunun:

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Telefondaki ekran kaydı izin penceresi">

4. Telefon ekranınız araç ekranında görünür:

   ![Araç ekranına yansıtılan telefon ekranı](/images/how-to-use/mirror-active.png)

> **ℹ️ Not**
> İzin penceresi bir Android gerekliliğidir — her ekran değişiminde değil, yansıtma
> her başladığında bir kez görünür. *Yansıtmayı otomatik başlat* kapalıyken girişe
> dokunmak yalnızca yansıtma ekranını açar; siz başlatana kadar hiçbir şey
> kaydedilmez.

### Elle başlatma

**Yansıtmayı otomatik başlat**'ı kapalı tutmayı tercih ediyorsanız:

1. Telefonda ScreenOnAuto'yu açın ve **Ekran yansıtma** anahtarını açın, ardından
   izin penceresinde **Şimdi başlat**'a dokunun.
2. Araç ekranında ScreenOnAuto girişlerinden birini açın — yansıtma zaten çalışıyordur
   ve hemen görünür.

(Sıra önemli değildir — önce girişi açıp **Ekran yansıtma** anahtarını sonra da
açabilirsiniz.)

### İzin penceresini atlama

Pencerenin her seferinde çıkmasından sıkıldınız mı? İzni ADB ile bir kez önceden
verebilirsiniz — bkz. [ADB ile Yansıtma İzni Verme](/docs/tr/grant-mirror-permission-via-adb/).

## Yansıtmayı durdurma

Şunlardan herhangi biri işe yarar:

- **Arabayla bağlantıyı kesin** — yansıtma otomatik olarak durur (varsayılan
  *Bağlantı kesilince durdur* ayarı).
- Telefondaki kalıcı bildirimde **Yansıtmayı durdur**'a dokunun.
- Uygulamadaki **Ekran yansıtma** anahtarını kapatın.

## Sorun Giderme

- **Giriş açılıyor ama boş kalıyor** — yansıtma henüz başlamamıştır; telefonda izin
  penceresini kontrol edin veya **Ekran yansıtma** anahtarıyla başlatın.
- **Görüntünün etrafında siyah bantlar var** — telefon ve araç ekranlarının en-boy
  oranları farklıdır; yansıtma ekranındaki **Yatay modu zorla** düğmesi (veya
  uygulama ayarlarındaki **Yatay modu otomatik zorla**) genellikle ekranı çok daha
  iyi doldurur. İnce boşluklar veya kesilen kenarlar kalırsa **Ayarlar → Gelişmiş →
  Yansıtma genişliğini ayarla / Yansıtma yüksekliğini ayarla** ile ince ayar yapın
  (pozitif pikseller kesilen kenarı içeri çeker, negatif pikseller siyah bandı
  doldurmak için dışarı genişletir).
- **Düzen değiştikten sonra görüntü gerilmiş veya bozulmuş görünüyor** (ör. bölünmüş
  görünümde görünür alan büyüyüp küçüldüğünde) — **Ayarlar → Gelişmiş → Sabit
  yansıtma boyutu**'nu açın. Yansıtma bozulmak yerine boyutunu korur (bir kısmı
  gizlenebilir). Tam ekran **ScreenOnAuto** girişi için geçerlidir.
- Araç ekranındaki **Android Auto gezinme çubuğu** Android Auto'nun kendisi
  tarafından çizilir ve uygulama tarafından gizlenemez.
