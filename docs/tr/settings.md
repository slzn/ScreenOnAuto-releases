---
title: "Ayarlar Rehberi"
description: "ScreenOnAuto'nun her ayarı ne işe yarar ve sınırları nerededir: ana ekran, ekran düğmeleri, Gelişmiş ve Ayrıcalıklı özellikler; ayarlar ekranının çalışan bir kopyasıyla birlikte."
lang: tr
slug: settings
permalink: /docs/tr/settings/
settings_phone: true
date: 2026-11-25
last_modified_at: 2026-11-25
---

<div class="sp-intro" markdown="1">

# Ayarlar Rehberi

Bu sayfa uygulamanın ayarlar ekranını yukarıdan aşağıya izler: her ayarın ne yaptığı, ne zaman açılması gerektiği ve tek satırlık açıklamasının söylemediği sınırlar. Uygulamada yeni misiniz? [Nasıl Kullanılır](/docs/tr/how-to-use/) sayfasından başlayın.

</div>

<aside class="sp-aside" aria-label="ScreenOnAuto ayarlar ekranı">
<div id="settings-phone" data-show="Ayarı göster"></div>
<p class="sp-hint">Bu, uygulamanın ayarlar ekranıdır. Açıklamasına gitmek için herhangi bir satıra dokunun. Anahtarlar çalışır ama yalnızca bu sayfada — telefonunuzda hiçbir şey değişmez.</p>
</aside>

<div class="sp-doc" markdown="1">

## Ana ekran {#main}

### Durum paneli {#mirror}

En üstteki koyu renkli panel. İlk satırı Android Auto'nun bağlı olup olmadığını ve bağlıysa ölçtüğü araç ekranı boyutunu gösterir. Altında mevcut durum ve <span class="sp-ui-go">Yansıtmayı başlat</span> / <span class="sp-ui-go stop"><svg viewBox="0 0 12 12" aria-hidden="true"><rect width="12" height="12" rx="2"/></svg>Yansıtmayı durdur</span> düğmesi bulunur. **Yansıtmayı başlat**, telefonda Android'in ekran kaydı penceresini açar; **Şimdi başlat**'a dokunduğunuzda yansıtma başlar.

Bir izin eksikse panelin altındaki sarı bir satır bunu belirtir; [İzinler](#category_permissions) bölümüne gitmek için ona dokunun.

### Yansıtmayı otomatik başlat {#auto_start_mirror}

Bu açıkken yansıtma araçtan başlatılabilir. Olanlar şöyledir (“Siz” ile işaretli adımları siz yaparsınız; gerisi kendiliğinden olur):

1. <span class="sp-who you">Siz</span> Araç ekranında ScreenOnAuto girişlerinden birine (<img class="sp-entry" src="/images/icon_launcher.png" alt="ScreenOnAuto simgesi"> veya <img class="sp-entry" src="/images/icon_legacy.png" alt="ScreenOnAuto (Legacy) simgesi">) dokunun.
2. Uykudaki telefonun ekranı açılır.
3. Telefonda ScreenOnAuto'nun ayarlar ekranı açılır ve sizin yerinize <span class="sp-ui-go">Yansıtmayı başlat</span>'a dokunur.
4. <span class="sp-who you">Siz</span> Android ekran kaydı penceresini gösterir: **Şimdi başlat** ile izin verin. Telefon PIN, desen veya parmak iziyle kilitliyse önce kilidi açın, ardından pencere görünür.
5. Yansıtma başlar ve telefonun ekranı araçta görünür.

> **💡 İpucu**
> - **Her seferinde izin vermek istemiyor musunuz?** [Yansıtma iznini bir kez ADB ile verin](/docs/tr/grant-mirror-permission-via-adb/); pencere artık çıkmaz ve 4. adım ortadan kalkar (telefonun kilidini açana kadar araçta kilit ekranı görünür).
> - **Ayarlar ekranının açılmasını istemiyor musunuz?** Gelişmiş altındaki [Yansıtmayı arka planda başlat](#silent_car_start) seçeneğini açın: 3. adımda telefon, ScreenOnAuto'yu açmadan doğrudan kayıt penceresine geçer. İkisi birlikteyken yapmanız gereken tek şey 1. adımdır ve telefonda hiçbir şey görünmez.

Kapalıyken 3. adım size kalır: araçta bir girişe dokunmak yalnızca “Yansıtmayı telefonda başlatın” bekleme ekranını gösterir; telefonda ScreenOnAuto'yu açıp <span class="sp-ui-go">Yansıtmayı başlat</span>'a kendiniz dokunursunuz, ardından 4. adım yukarıdaki gibidir.

### Uykuyu engelle {#keep_awake}

Yansıtma sırasında telefon ekranının uykuya geçmesini engeller. Yansıtma telefonun ekranının *ta kendisidir*; ekran kapanınca araçtaki görüntü de durur. Bu seçenek yalnızca ekranı açık tutar, parlaklığı artırmaz; bu yüzden [Ekranı otomatik karart](#auto_dim) ile iyi eşleşir: ekran açık kalır ve boşta kalınca kararır.

### Bağlantı kesilince durdur {#stop_on_disconnect}

Android Auto'nun bağlantısı kesilince yansıtmayı durdurur (varsayılan olarak açık). Kapalıyken yansıtma, siz araçtan indikten sonra da siz durdurana kadar arka planda çalışmaya devam eder.

### Ekranı otomatik karart {#auto_dim}

Yansıtma sırasında telefona bir süre dokunulmadığında parlaklığı en aza indirir — pilden tasarruf sağlar ve göz kamaştırmaz. Yalnızca telefonun arka ışığı kararır; araçtaki görüntü eskisi kadar parlak kalır. Telefona dokunduğunuzda parlaklık geri gelir.

- [Diğer uygulamaların üzerinde göster](#overlay_access) iznini gerektirir.
- Araç ekranını kullanmak ([dokunma aktarımı](#accessibility_access)) telefona dokunmak sayılmaz, bu yüzden telefonu uyandırmaz.
- Telefon kilit ekranındayken hiçbir şey kararmaz; geri sayım, kilidi açtığınızda veya telefona dokunduğunuzda başlar.
- Shizuku veya root ile telefon ekranı karartılmak yerine tamamen kapatılabilir: bkz. [Telefon ekranını kapat](#root_screen_off).

### Şu süre sonra karart {#auto_dim_delay}

Telefonun kararmadan önce ne kadar süre boşta kalması gerektiği: 15, 30 (varsayılan), 60 veya 120 saniye. [Ekranı otomatik karart](#auto_dim) açık olmalıdır.

### Uygulamayı otomatik başlat {#auto_launch_package}

Yansıtma ve Android Auto birlikte etkin olur olmaz telefonda bir uygulama açar — örneğin bir harita ya da müzik çalar. Listenin en üstündeki **Varsayılan ana ekran**, kullandığınız ana ekran uygulamasını açar; böylece başlatıcı değiştirseniz de çalışmaya devam eder.

### Yalnızca bu uygulamayı yansıt {#single_app_mirror}

Telefon ekranının tamamı yerine araca yalnızca yukarıdaki [Uygulamayı otomatik başlat](#auto_launch_package) ile seçilen uygulamayı gönderir. Telefonda başka bir uygulamaya geçerseniz siz geri dönene kadar araç ekranı boş kalır — yolcuların veya bildirimlerin araçta görünmemesi gerektiğinde işe yarar.

Bu satır yalnızca **Android 15 ve üzerinde**, [yansıtma iznini ADB ile verdikten](/docs/tr/grant-mirror-permission-via-adb/) sonra görünür. Uygulamayı otomatik başlat için bir uygulama seçilene kadar soluk kalır.

**Ne zaman gerekir:**

- **ADB izni yoksa gerekmez.** Android 14'ten itibaren yansıtma her başladığında çıkan kayıt penceresi zaten ekranın tamamını mı yoksa tek bir uygulamayı mı paylaşacağınızı seçmenize izin verir; orada bir uygulama seçerseniz yalnızca o uygulama yansıtılır. Android 13 ve altında pencerede böyle bir seçenek yoktur ve her zaman ekranın tamamı yansıtılır.
- **ADB izni varsa gerekir.** İzin verildikten sonra pencere artık çıkmaz; yani uygulama seçebileceğiniz bir yer kalmaz ve her zaman ekranın tamamı yansıtılır. Pencereyi atlayıp *hem de* tek bir uygulamayı yansıtmak için bu anahtarı kullanın: yukarıdaki [Uygulamayı otomatik başlat](#auto_launch_package) ile birlikte araca yalnızca o uygulamayı gönderir.
- Gelişmiş altındaki [Yalnızca tüm ekranı paylaş](#full_screen_share_only), tek uygulama seçeneğini pencereden kaldırır; bu anahtarın çalışmasını engellemez.

### Alt sayfalar {#subpages}

**Ekran düğmeleri**, **Gelişmiş** ve **Ayrıcalıklı özellikler** her biri kendi sayfasını açar; bunlar aşağıdaki bölümlerde anlatılır: [Ekran düğmeleri](#screen_buttons), [Gelişmiş](#advanced), [Ayrıcalıklı özellikler](#root_features).

### İzinler {#category_permissions}

Her satır ilgili sistem ayarları sayfasını açar; sağdaki etiket iznin verilip verilmediğini gösterir.

#### Bildirim erişimi {#notification_access}

“ScreenOnAuto Medya Denetleyicisi” <img class="sp-entry" src="/images/icon_media.png" alt="ScreenOnAuto Medya Denetleyicisi simgesi"> uygulamasının telefonda çalan içeriği devralmasını sağlar. Böylece **direksiyondaki medya tuşları** ve Android Auto'nun medya ekranı, YouTube gibi **Android Auto'yu kendisi desteklemeyen oynatıcıları** da kontrol edebilir: önceki / sonraki ve oynat / duraklat çalışır.

- Yalnızca çalan içeriği (medya oturumlarını) okur, bildirimlerinizin içeriğini asla okumaz.
- Kendi Android Auto desteği olan müzik uygulamaları (YouTube Music, Spotify ve benzerleri) Android Auto'ya doğrudan bağlanır ve bunlara dokunulmaz.
- İzin yoksa tuşlar, sistemin etkin saydığı oynatıcıya gider — birden fazla oynatıcı açıksa bu yanlış oynatıcı olabilir.
- Android Auto'nun eski sürümleri uygulama başlatıcısında ayrı bir “ScreenOnAuto Medya Denetleyicisi” girişi gösterir; yenileri göstermez ve bu normaldir — medya kontrolü her iki durumda da çalışır.

#### Diğer uygulamaların üzerinde göster {#overlay_access}

[Ekranı otomatik karart](#auto_dim), yön kilidi ([Bağlanınca yönü kilitle](#force_landscape) ve onun [araçtaki düğmesi](#map_action_force_landscape)) ve [Gece karartması](#night_dim) için gereklidir.

#### Sistem ayarlarını değiştirme {#write_settings_access}

Yalnızca **Android 16 ve üzerinde** gösterilir. Telefon tablet modundayken (en kısa kenar 600dp veya daha fazla — katlanabilir bir telefonun iç ekranı ya da [Telefon ekran yoğunluğu](#phone_density) düşürüldükten sonra), Android 16 uygulamaların istediği ekran yönünü yok sayar; bu yüzden yön kilidi bunun yerine sistemin döndürme kilidini kullanır ve bunun için bu izin gerekir. Kilit bittiğinde kendi otomatik döndürme ayarınız geri gelir.

#### Dokunma Aktarımı {#accessibility_access}

Araç ekranındaki dokunma, kaydırma ve sıkıştırma hareketlerini bir Android erişilebilirlik hizmeti aracılığıyla telefona aktarır. Burada iki yansıtma da aynı hareketleri destekler: dokunma, kaydırma (bir listede ilerlemek), hızlı kaydırma ve iki parmakla yakınlaştırma.

Shizuku veya root ile bunun yerine [Gerçek dokunma enjeksiyonu](#root_touch_injection) kullanabilirsiniz: araç ekranındaki dokunuşlar telefona gerçek parmak hareketleri olarak ulaşır, böylece telefonu doğrudan kullanıyormuş gibi hissedersiniz. Erişilebilirlik hizmetinin yapamadığı **uzun basma**, **basılı tutup sürükleme** (örneğin bir ana ekran simgesini taşımak) ve **çok parmaklı hareketler** de çalışır — ancak yalnızca <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasında</span>.

### Hakkında {#about}

Sürüm (kopyalamak için dokunun), GitHub ve bağış bağlantıları, Gizlilik Politikası, Kullanım Koşulları ve üçüncü taraf lisansları.

## Ekran düğmeleri {#screen_buttons}

Araç ekranında düğme olarak görünebilecek her şey bu sayfada ayarlanır.

### Başlatma kısayolları {#category_shortcuts}

Araç ekranında en fazla 4 uygulama kısayolu. Birine dokunduğunuzda uygulama telefonda — dolayısıyla araçta — açılır.

- Uygulamayı seçmek için bir satıra dokunun; sağdaki anahtar kısayolu araçta gösterir veya gizler. **Varsayılan ana ekran** burada da “ana ekrana dön” düğmesi olarak çalışır.
- Araçta görünen metni değiştirmek için ayarlanmış bir kısayola **uzun basın** (en fazla 30 karakter). Metni silerseniz <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtması</span> yalnızca uygulama simgesini gösterir.
- Kısayollar yansıtmanın **üst** kenarı boyunca görünür; hangi tarafta olacağı yansıtmaya bağlıdır:
  - <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span>: Android Auto'nun harita ekranı şablonunu kullanır; bu yüzden kısayollar Android Auto'nun kendisinin çizdiği metin düğmeleridir (simgesiz) ve nereye yerleşeceklerine Android Auto karar verir — uygulama onları taşıyamaz. Android Auto'nun sürücü konumu ayarıyla taraf değiştirebilirler, ancak bu garanti değildir.
  - <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtması</span>: uygulama onları simgeli düğmeler olarak kendisi çizer, varsayılan olarak **sağ üstte**; [Düğmeleri sola hizala](#legacy_buttons_left) onları sol üste taşır, [uzaklık ayarları](#legacy_gaps) da kenarlara olan mesafelerini ince ayarlar.
- Kısayollar ekranda kalıcı değildir: <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasında</span> 5 saniye işlem yapılmayınca [işlev düğmeleriyle](#category_control_buttons) birlikte gizlenir ve araç ekranına dokunduğunuzda geri gelir; <span class="sp-mirror nav">“ScreenOnAuto” yansıtmasında</span> ne zaman gizleneceklerine Android Auto karar verir.

### İşlev düğmeleri {#category_control_buttons}

Yansıtmanın üzerinde yuvarlak düğmeler; iki yansıtmada da aynı anda en fazla 4 tane.

- Konumları yansıtmaya bağlıdır:
  - <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span>: bunlar Android Auto'nun harita ekranı şablonundaki düğme şerididir ve Android Auto tarafından **sağ altta veya sol altta** çizilir. Hangi tarafta olacağına Android Auto karar verir — uygulama bunu değiştiremez; [Başlatma kısayolları](#category_shortcuts) gibi sürücü konumu ayarıyla taraf değiştirebilirler, ancak bu garanti değildir.
  - <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtması</span>: uygulamanın kendisinin çizdiği bir sütun, varsayılan olarak **sağ altta**; [Düğmeleri sola hizala](#legacy_buttons_left) onu sol alta taşır, [uzaklık ayarları](#legacy_gaps) da kenarlara olan mesafesini ince ayarlar.
- Otomatik gizleme: <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasında</span> işlev düğmeleri 5 saniye işlem yapılmayınca kısayollarla birlikte gizlenir ve araç ekranına dokunduğunuzda geri gelir; <span class="sp-mirror nav">“ScreenOnAuto” yansıtmasında</span> ne zaman gizleneceklerine Android Auto karar verir.

#### Yön kilidi düğmesi {#map_action_force_landscape}

[Bağlanınca yönü kilitle](#force_landscape) ayarını değiştirmeden yön kilidini o an için açar veya kapatır; sonraki bağlantı yine ayara uyar. Varsayılan olarak açık.

#### Otomatik karartma düğmesi {#map_action_auto_dim}

[Ekranı otomatik karart](#auto_dim) seçeneğini açar veya kapatır — ayarlardaki anahtarın aynısıdır. Telefon ekranı [kapatıldığında](#root_screen_off) onu geri getirmenin en hızlı yoludur.

#### Gece karartması düğmesi {#map_action_night_dim}

[Gece karartması](#night_dim) özelliğini o an için açar veya kapatır — örneğin bir tünele girerken. Bu durum, araç bir sonraki sefer gündüz ile gece arasında geçiş yapana kadar sürer; [Ne zaman karartılsın](#night_dim_trigger) Her zaman olarak ayarlıysa Android Auto'nun bağlantısı kesilene kadar. [Güç](#night_dim_strength) ayarındaki düzeye kadar karartır.

#### Geri, Ana ekran ve Son uygulamalar düğmeleri {#map_action_nav}

Telefonun üç gezinme tuşu; telefon hareketle gezinme de kullansa düğmeler de kullansa çalışır. Shizuku veya root bağlıyken gerçek tuş basışları gönderir; aksi hâlde [Dokunma Aktarımı](#accessibility_access) gerekir.

### Düğme konumu {#category_button_placement}

Bu bölüm yalnızca <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasını</span> etkiler. <span class="sp-mirror nav">“ScreenOnAuto” yansıtmasının</span> düğmeleri Android Auto tarafından çizilir ve taşınamaz.

#### Düğmeleri sola hizala {#legacy_buttons_left}

[İşlev düğmelerini](#category_control_buttons) ve [kısayolları](#category_shortcuts) sola taşır — sağdan direksiyonlu araçlar için ya da multimedya ünitesinin kendi kontrolleri sağ tarafı kapattığında.

#### Telefonun gezinme çubuğundan kaçın {#legacy_buttons_dodge_nav}

Telefonun gezinme çubuğu yansıtmada göründüğünde, iki takım üst üste binmesin diye düğmeleri onun üzerinden çeker. Android 11 veya üzeri gerekir (eski telefonlarda bu satır görünmez). Açıkken aşağıdaki dört uzaklık ayarı soluk görünür — ya biri ya diğeri geçerlidir.

#### Düğme ve kısayol uzaklıkları {#legacy_gaps}

dp cinsinden dört mesafe (0–400, varsayılan 16): işlev düğmelerinin yan kenara ve alt kenara, kısayolların yan kenara ve üst kenara uzaklığı. ScreenOnAuto'nun düğmelerini multimedya ünitesinin kendi düğmelerinin altından çıkarmak için kullanın. Bir değer sığmayacak kadar büyükse düğmeler ekrandan taşıp kaybolmak yerine ekranın içinde kalır.

## Gelişmiş {#advanced}

### Ekran yönü {#category_orientation}

#### Bağlanınca yönü kilitle {#force_landscape}

Android Auto bağlandığında telefonu tek bir yönde kilitler; böylece telefon döndüğünde yansıtma dönmez ve yatay tutulan bir telefon geniş bir araç ekranını doldurur. Bağlantı anında bir kez devreye girer; sonrasında araçtaki [Yön kilidi düğmesi](#map_action_force_landscape) kilidi açar veya yeniden uygular. [Diğer uygulamaların üzerinde göster](#overlay_access) iznini gerektirir.

#### Yön {#force_orientation_mode}

Hangi yöne kilitleneceği: **Yatay** (varsayılan), **Dikey** veya **Araç ekranına göre otomatik algıla** — yansıtmanın araçta gerçekten aldığı alan yatayda genişse yatay, dikeyde uzunsa dikey. Bölünmüş ekran bu şekli değiştirirse ona uyar.

#### Ters yatay mod {#force_landscape_reverse}

Yatay telefonu ters yöne çevirir — telefonu baş aşağı tutan bir tutucu için. Dikey modda soluk görünür.

### Görüntü ayarı {#category_display_adjust}

#### Uygulamanın çizdiği yansıtma {#self_draw}

Görüntüyü ölçeklendirmeyi sisteme bırakmak yerine telefonun görüntüsünü araca uygulama kendisi çizer. Böylece bölünmüş görünüm artık görüntüyü bozmaz ve aşağıdaki genişlik/yükseklik ayarları bağlantıdan önce de sırasında da ayarlasanız aynı şekilde çalışır. Biraz daha fazla pil kullanır.

Değişiklik, **yansıtmanın bir sonraki başlatılışında** geçerli olur — oturumun ortasında bilerek değiştirilmez.

#### Görüntü gecikmesi {#video_delay}

Görüntü sesin önüne geçtiğinde (örneğin Android Auto'yu bir alıcı uygulama üzerinden oynatan ve sesin geciktiği bir Android multimedya ünitesinde), ikisi eşleşsin diye görüntüyü 0–2000 milisaniye geciktirir. [Uygulamanın çizdiği yansıtma](#self_draw) gerekir; değişiklik hemen uygulanır.

- Kareleri bekletmek ek bellek ve GPU işi gerektirir. Ses ve görüntü, telefon veya multimedya ünitesi zaten zorlandığı için kayıyorsa durumu daha da kötüleştirebilir.
- Dokunuşlar yine gecikmeli görüntüye değil, telefon ekranının **şu anki** hâline etki eder.

#### Sabit yansıtma boyutu {#nav_fixed_size}

Yalnızca <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span>. Araç bölünmüş görünüme geçtiğinde yansıtma boyutunu korur, bu yüzden bozulmaz — ancak bir kısmı kesilebilir. En iyisi bağlanmadan önce ayarlamaktır.

#### Düğmeler görününce yansıtmayı sabit tut {#nav_ignore_strip}

Yalnızca <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span>, varsayılan olarak açık. Android Auto'nun düğme şeridi kendiliğinden görünüp gizlenir ve her seferinde biraz yer kaplar. Bu açıkken şeridin görünmesi yansıtmanın yeniden boyutlanıp zıplamasına yol açmaz; bölünmüş görünüm gibi gerçek düzen değişiklikleri yine uygulanır. [Sabit yansıtma boyutu](#nav_fixed_size) açıkken soluk görünür.

#### Yansıtma genişliğini ayarla, Yansıtma yüksekliğini ayarla {#vd_gap}

Aracın yansıtmaya ayırdığı alan (aşağıdaki kesikli yeşil çerçeve) nadiren telefon ekranıyla aynı şekle sahiptir. Telefonun görüntüsü bu alanın içine sığacak şekilde orantılı olarak ölçeklenir, bu yüzden uyuşmayan tarafta siyah şeritler kalır: görüntü alandan **genişse** (örneğin bölünmüş görünüm alanı daraltmışsa) şeritler **üstte ve altta**; **darsa** **solda ve sağda** olur.

Bu iki ayar, yansıtmanın içine sığdırıldığı çerçeveyi piksel cinsinden büyütür veya küçültür. **Negatif** bir değer çerçeveyi büyütür: görüntü büyür ve şeritler küçülür; bunun bedeli, görüntünün bir kısmının kullanılabilir alanın dışına taşıp kesilmesidir (resimlerde taralı).

<div class="sp-figs">
<figure><img src="/images/settings/gap-tb-before.svg" alt="Görüntü alandan geniş, üstte ve altta şeritler kalıyor"><figcaption>Üstte ve altta şeritler</figcaption></figure>
<figure><img src="/images/settings/gap-tb-after.svg" alt="Negatif genişlik ayarıyla görüntü büyüyüp üstü ve altı dolduruyor, sağ kenarın dışına taşıyor"><figcaption>Negatif <b>genişlik</b>: üstte ve altta şerit yok, sağ taraf taşıyor</figcaption></figure>
<figure><img src="/images/settings/gap-lr-before.svg" alt="Görüntü alandan dar, solda ve sağda şeritler kalıyor"><figcaption>Solda ve sağda şeritler</figcaption></figure>
<figure><img src="/images/settings/gap-lr-after.svg" alt="Negatif yükseklik ayarıyla görüntü büyüyüp solu ve sağı dolduruyor, alt kenarın dışına taşıyor"><figcaption>Negatif <b>yükseklik</b>: solda ve sağda şerit yok, alt taraf taşıyor</figcaption></figure>
</div>

- **Üstte ve altta şerit → *genişliği* negatif yapın.** Daha geniş bir çerçeve görüntünün büyümesine, dolayısıyla uzamasına izin verir ve şeritler dolar.
- **Solda ve sağda şerit → *yüksekliği* negatif yapın.** Daha uzun bir çerçeve görüntünün büyümesine, dolayısıyla genişlemesine izin verir ve şeritler dolar.
- Yansıtma alanın **sol üst köşesine** sabitlenmiştir; bu yüzden taşan kısım **sağ** kenarın (genişlik) veya **alt** kenarın (yükseklik) dışına çıkar — iki tarafa paylaştırılmaz. Orada kesilen hiçbir şeye, düğmeler dahil, dokunulamaz; bu yüzden şeritlerin tam kaybolduğu değerde durun.
- **Pozitif** bir değer tersini yapar: çerçeveyi küçültür; görüntünün kenarlarını kırpan multimedya üniteleri için kırpılan kenarı yeniden görünür hâle getirir (ince bir siyah şeritle).
- En doğru sonucu [Uygulamanın çizdiği yansıtma](#self_draw) açıkken verir. Kapalıyken değerleri **bağlıyken** ayarlayın: <span class="sp-mirror nav">“ScreenOnAuto” yansıtmasında</span>, yansıtma başlarken zaten ayarlı olan negatif bir değer görüntüyü büyütmek yerine ezebilir.

Değer girmek için metne dokunun (sıfır olmayan bir değeri kaydetmek anahtarı açar); ayırıcının ötesindeki anahtar, değeri koruyarak ayarı geçici olarak kapatır, böylece karşılaştırma yapabilirsiniz.

> **💡 Hiç siyah şerit olmaması için**
>
> Shizuku veya root ile [Telefon ekranını araca uydur](#root_display_override) seçeneğini açın. Telefonun ekranını alanın kendi oranlarına getirir, böylece yansıtma alanı tam olarak doldurur — şerit yok, kesilen bir şey yok. Bu açıkken bu iki ayar devre dışı kalır.

<div class="sp-figs one">
<figure><img src="/images/settings/gap-match.svg" alt="Telefon ekranı araca uydurulduğunda görüntü kullanılabilir alanı tam olarak dolduruyor"><figcaption>Telefon ekranını araca uydur: tam oturur</figcaption></figure>
</div>

### Gece karartması {#category_night_dim}

#### Araç ekranını karart {#night_dim}

Geceleri araçtaki yansıtmayı karartır; böylece telefondaki parlak beyaz bir uygulama karanlıkta gözünüzü kamaştırmaz.

- <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasında</span> veya [Uygulamanın çizdiği yansıtma](#self_draw) açıkken yalnızca araçtaki görüntü kararır.
- Uygulamanın çizdiği yansıtma kapalıyken <span class="sp-mirror nav">“ScreenOnAuto” yansıtmasında</span> karartma, telefon ekranının üzerine konan koyu bir katmandır; bu yüzden **telefon da kararır**. Bunun için [Diğer uygulamaların üzerinde göster](#overlay_access) izni gerekir.
- Geçici olarak kapatıp açmak için araçtaki [Gece karartması düğmesini](#map_action_night_dim) kullanın.

#### Ne zaman karartılsın {#night_dim_trigger}

**Araç gece moduna geçtiğinde** (varsayılan): geceleri karartır, gündüz normale döner. **Her zaman**: Android Auto bağlı olduğu sürece karartır.

#### Güç {#night_dim_strength}

Ne kadar koyu: %10–%80 (varsayılan %50). [Gece karartması düğmesi](#map_action_night_dim) de bunu kullanır.

### Araçtan başlatma {#category_car_start}

#### Yansıtmayı arka planda başlat {#silent_car_start}

Yansıtma [araçtan başlatıldığında](#auto_start_mirror) ScreenOnAuto'nun ayarlar ekranı telefonda öne gelmez ve Son uygulamalar'da kalmaz. Kayıt penceresi yine de görünür.

> **💡 İpucu**
>
> Buna [ADB ile verilen yansıtma iznini](/docs/tr/grant-mirror-permission-via-adb/) eklerseniz kayıt penceresi de ortadan kalkar: araçta bir girişe dokunun, telefonda hiçbir şey açılmaz — yansıtma telefona dokunmadan başlar. Telefonun kilidini açana kadar araçta kilit ekranı görünür.

#### Yalnızca tüm ekranı paylaş {#full_screen_share_only}

Android 14'ten itibaren kayıt penceresi önce tek bir uygulamayı mı yoksa tüm ekranı mı paylaşacağınızı sorar ve bu menüyü her seferinde açmanız gerekir. Bu açıkken pencere yalnızca tüm ekranı sunar. Android 14 ve üzerinde gösterilir. Tek bir uygulamayı o pencerede seçerek yansıtıyorsanız (ADB izni olmadan bunun yolu budur) bunu kapalı bırakın; ADB izni varsa bunun yerine [Yalnızca bu uygulamayı yansıt](#single_app_mirror) seçeneğini kullanın.

Hâlâ iki seçeneği de mi görüyorsunuz? Android 16'da Geliştirici seçenekleri içinde onları geri getiren bir uyumluluk geçersiz kılması (`OVERRIDE_DISABLE_MEDIA_PROJECTION_SINGLE_APP_OPTION`) vardır; açık olmadığından emin olun.

## Ayrıcalıklı özellikler {#root_features}

Bu sayfadaki özellikler [Shizuku](https://shizuku.rikka.app/) veya root gerektirir, çünkü sıradan bir uygulamanın dokunamayacağı sistem ayarlarını değiştirirler. Her biri yansıtma bittiğinde telefonun kendi ayarını geri yükler.

### Bağlantı {#root_status}

Üstteki kutu Shizuku'nun veya root'un bağlı olup olmadığını gösterir; düğmesinde duruma göre **Erişim izni ver**, **Bağlan** veya **Bağlantıyı kes** yazar. Kopan bir bağlantı (örneğin Shizuku yeniden başladığında) kendiliğinden yeniden bağlanır.

ADB ile başlatılan bir Shizuku sunucusu, telefon araca USB ile takıldığında kapanır — bkz. [Sorun giderme](/docs/tr/how-to-use/#ayrıcalıklı-özellikler-shizuku--root).

### Root algılanmadı mı? {#root_force}

Root yöneticisi gizlenmiş veya yeniden adlandırılmışsa uygulama root'u göremez ve bağlantı kutusu onu hiç sunmaz. Bu satıra dokunmak root'u doğrudan su üzerinden ister. Yalnızca root algılanmamışken ve hiçbir şey bağlı değilken görünür.

### Özellikler {#category_root_features}

#### Telefon ekranını kapat {#root_screen_off}

[Ekranı otomatik karart](#auto_dim) devreye girdiğinde telefonun arka ışığını karartmak yerine kapatır. Ekranı otomatik karart açık olmalıdır.

Yalnızca ekran kapanır — **telefon uykuya geçmez**: uygulamalar ve sistem çalışmaya devam eder, yansıtma araçta kalır ve telefonu araçtan kullanmak yine çalışır. Ancak dokunmatik ekran da ekranla birlikte kapanır; bu yüzden **telefonun ekranına dokunmak hiçbir şey yapmaz** ve ekranı yeniden açmaz.

Ekranı geri getirmek için: araçtaki [Otomatik karartma düğmesine](#map_action_auto_dim) dokunun, yansıtmayı durdurun veya Android Auto bağlantısını kesin ya da güç düğmesine **iki kez** basın (ilk basış sistemi uykuya geçirir).

#### Gerçek dokunma enjeksiyonu {#root_touch_injection}

Araç ekranındaki dokunuşları telefona gerçek parmak hareketleri olarak gönderir; böylece uzun basma, sürükleme ve çok parmaklı hareketler çalışır — ve [Dokunma Aktarımı](#accessibility_access) erişilebilirlik hizmetine gerek kalmaz. Tam etkisi <span class="sp-mirror legacy">“ScreenOnAuto (Legacy)” yansıtmasındadır</span>: <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span> Android Auto'dan yalnızca dokunma, kaydırma, hızlı kaydırma ve sıkıştırma alır; bu bir Android Auto sınırıdır.

#### Sanal dokunmatik ekran {#root_virtual_touch}

Bu dokunuşları sanal bir dokunmatik ekran aygıtı üzerinden iletir; böylece dokunmatik ekranı doğrudan okuyan hareket uygulamaları (GMD Gestures gibi) da onları görür. [Gerçek dokunma enjeksiyonu](#root_touch_injection) açık olmalıdır.

#### Aracın gündüz/gece modunu izle {#root_follow_car_night}

Yansıtma sırasında telefonun açık/koyu teması Android Auto'nun gündüz/gece moduyla birlikte değişir ve sonrasında telefonun kendi ayarına döner. Android 10 ve üzeri.

#### Modu Android Auto'dan oku {#root_car_night_from_aa}

Önceki anahtar açılınca görünür ve <span class="sp-mirror nav">“ScreenOnAuto” yansıtması</span> için geçerlidir. Bazı telefonlarda (örneğin bazı Samsung modellerinde) uygulamaya bildirilen gündüz/gece modu yanlıştır, bu yüzden telefon hiçbir zaman araçla birlikte geçiş yapmaz; bu seçenek bunun yerine Android Auto'nun kendi gündüz/gece durumunu okur. Telefon araca zaten uyuyorsa kapalı bırakın.

#### Yansıtma sırasında yazı tipi boyutu {#root_mirror_font_scale}

Yansıtma sırasında başka bir yazı tipi boyutu kullanır — örneğin araçta daha büyük metin — ve sonrasında telefonun kendi boyutunu geri yükler. Seçenekler, telefonun kendi Ayarlar uygulamasındaki adımlardır.

#### Yansıtma sırasında gezinme modu {#root_mirror_nav_mode}

Yansıtma sırasında hareketle gezinmeye, 2 düğmeli veya 3 düğmeli gezinmeye geçer ve sonrasında geri döner (Android 10 ve üzeri). Örneğin dikey bir multimedya ünitesinin bölünmüş ekranında hareketle gezinme uygulamalara daha fazla yer bırakır. Telefonda bulunmayan modlar kullanılamaz olarak işaretlenir.

#### Yansıtma sırasında ana ekran {#root_mirror_home}

Yansıtma sırasında başka bir başlatıcıyı telefonun varsayılan ana ekranı yapar ve sonrasında sizinkini geri getirir. Araç için düzenlenmiş bir ana ekran için ya da [ekran biçimi](#category_root_display) değiştiğinde simgelerini yeniden düzenleyen hazır başlatıcıya sahip telefonlar (bazı Xiaomi HyperOS modelleri) için.

### Ekran biçimi {#category_root_display}

#### Telefon ekranını araca uydur {#root_display_override}

Yansıtma sırasında telefonun ekranını aracın en-boy oranına getirir; böylece yansıtma aracı siyah şerit olmadan doldurur ve bölünmüş görünümde bozulmaz. Yeniden bağlanmaya gerek kalmadan anında uygulanır.

<div class="sp-figs">
<figure><img src="/images/settings/override-before.svg" alt="Önce: görüntü telefonu dolduruyor ama daha geniş araç ekranında solda ve sağda şeritler bırakıyor"><figcaption>Önce: telefonun şekli araçtan farklı, araçta şeritler kalıyor</figcaption></figure>
<figure><img src="/images/settings/override-after.svg" alt="Sonra: telefon ekranı aracın şeklini alıyor, telefonda ince şeritler var ve araçta tam oturuyor"><figcaption>Sonra: telefon aracın şeklini alıyor, araç tam olarak doluyor</figcaption></figure>
<figure><img src="/images/settings/override-narrow-before.svg" alt="Önce: araçtaki kullanılabilir alan telefonun görüntüsünden dar, üstte ve altta şeritler kalıyor"><figcaption>Önce: araçtaki daha dar bir alan (örneğin bölünmüş görünüm) üstte ve altta şeritler bırakıyor</figcaption></figure>
<figure><img src="/images/settings/override-narrow-after.svg" alt="Sonra: telefon ekranı aracın şeklini alıyor, telefonda solda ve sağda şeritler var ve araçta tam oturuyor"><figcaption>Sonra: telefon aracın şeklini alıyor, araç tam olarak doluyor</figcaption></figure>
<figure><img src="/images/settings/override-portrait-before.svg" alt="Önce: büyük dikey bir multimedya ünitesinde dik duran telefonun görüntüsü alandan ince, solda ve sağda şeritler kalıyor"><figcaption>Önce: büyük dikey multimedya ünitesi, telefon dik, araçta solda ve sağda şeritler</figcaption></figure>
<figure><img src="/images/settings/override-portrait-after.svg" alt="Sonra: telefon ekranı aracın dikey şeklini alıyor, telefonda üstte ve altta şeritler var ve araçta tam oturuyor"><figcaption>Sonra: telefon aracın dikey şeklini alıyor, araç tam olarak doluyor</figcaption></figure>
</div>

Araç solda ve sağda (ilk çift) ya da üstte ve altta (ikinci çift) şerit gösterse de çalışır, büyük dikey bir multimedya ünitesinde de çalışır (üçüncü çift — telefon dik durur; [Yön](#force_orientation_mode) otomatik algılamaya ayarlıysa kendiliğinden dikeye kilitlenir). Telefonun fiziksel ekranı şeklini korur; bu yüzden bu açıldığında **telefonun kendisi** şeritleri ters yönde gösterir (araçta solda ve sağdaysa üstte ve altta, ya da tersi) — bu beklenen bir durumdur; araçtaki yansıtma alanı tam olarak doldurur.

- Bu, geri alınana kadar **yeniden başlatmadan sonra da kalan** sistem düzeyinde bir değişikliktir. Normalde yansıtmayı durdurmak veya bağlantıyı kesmek onu otomatik olarak geri alır.
- Telefonun ekranı yeniden şekillendirilmişken bu bölümün üstünde **Geri yükle** düğmeli sarı bir uyarı görünür.
- Telefonun ekranı bir şekilde yanlış şekilde takılı kalırsa ve uygulamayı açamıyorsanız, bir bilgisayardan `adb shell wm size reset` ve `adb shell wm density reset` komutlarını çalıştırın.

#### Ana ekrana geri yükleme kısayolu ekle {#root_display_shortcut}

Ana ekrana bir “Ekranı geri yükle” kısayolu koyar; böylece tek dokunuşla, uygulamayı açmadan telefonun ekranı eski hâline döner.

#### Uygulanacak değer {#root_display_derived}

Telefon ekranının aracın boyutundan hesaplanarak değiştirileceği boyut ve sistemin gerçekte kabul ettiği değer. Araç henüz ölçülmediyse, yansıtmanın Android Auto'da bir sonraki açılışını bekler.

#### Araç ekranı boyutu {#car_size}

Her yansıtma için ayrı (araç iki yansıtmaya farklı boyutta alanlar verir). Varsayılan olarak algılanan boyuttur ve **Otomatik** olarak işaretlenir. Yalnızca algılama yanlışsa değiştirin: genişlik ve yükseklik aynı pencereyi paylaşır ve boş bırakılan bir alan algılanan değeri kullanır (160–8192).

#### Telefon ekran yoğunluğu {#phone_density}

İsteğe bağlı, her yansıtma için ayrı (72–640 dpi). Yüksek değerler araç ekranında metni ve düğmeleri büyütür; düşük değerler aynı anda daha fazlasını sığdırır. Telefonun en kısa kenarı 600dp'yi geçecek kadar düşük ayarlarsanız çoğu uygulama ve sistem tablet düzenlerine (iki sütun, yan gezinme) geçer — pencere, siz yazarken bunun olup olmayacağını söyler. Değiştirmeden bırakmak için boş bırakın.

</div>
