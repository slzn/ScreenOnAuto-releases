# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [Sito ufficiale](https://screenonauto.lzn.idv.tw/it/)*

> Esegui il mirroring dello schermo del tuo telefono Android sul display Android Auto, con supporto per i comandi multimediali.
>
> **Gratuita. Nessuna funzionalità richiede pagamenti aggiuntivi.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Schermo del telefono in mirroring sul display Android Auto, affiancato alla mappa"></p>

> [!IMPORTANT]
> **Come installare:**
> - **Consigliato — Google Play**, su qualsiasi versione di Android: iscriviti a un turno ogni mezz'ora, poi installa entro 25 minuti (l'app **non è ricercabile** sul Play Store). Android Auto la accetta senza alcuna configurazione aggiuntiva. [Iscriviti →](https://screenonauto.lzn.idv.tw/join/?lang=it)
> - **Android 13 e precedenti** — puoi anche installare l'APK con KingInstaller ([passaggi qui sotto](#alternativa--android-13-e-precedenti-installazione-con-kinginstaller)).
> - **Hai un dongle AAWireless?** — puoi anche installare l'APK direttamente, su qualsiasi versione di Android ([passaggi qui sotto](#alternativa--con-un-dongle-aawireless)).

## Funzionalità

- **Mirroring schermo** — Cattura e duplica lo schermo del telefono sull'unità Android Auto in tempo reale
- **Proxy sessione multimediale** — Controlla qualsiasi app multimediale del telefono dall'interfaccia multimediale nativa di Android Auto
- **Oscuramento automatico** — Riduce automaticamente la luminosità del telefono durante il mirroring inattivo (ritardo di 15/30/60/120 s)
- **Oscuramento notturno** — Scurisce il mirroring sullo schermo dell'auto di notte, seguendo la modalità giorno/notte dell'auto (o sempre), con intensità regolabile e un pulsante opzionale sullo schermo. Si attiva nelle impostazioni avanzate; con il mirroring «ScreenOnAuto» si scurisce anche lo schermo del telefono, a meno che l'immagine del mirroring disegnata dall'app sia attiva
- **Avvio automatico** — Avvia il mirroring automaticamente quando apri ScreenOnAuto o ScreenOnAuto (Legacy) sullo schermo dell'auto
- **Controllo esterno** — Avvia, ferma o commuta il mirroring con un intent, da un'app di automazione, una scorciatoia o ADB — [Controllare il mirroring da altre app](https://github.com/slzn/ScreenOnAuto-releases/wiki/Controllare-il-mirroring-da-altre-app)
- **Impedisci sospensione** — Impedisce allo schermo del telefono di sospendersi durante il mirroring
- **Interrompi alla disconnessione** — Interrompe automaticamente il mirroring alla disconnessione di Android Auto
- **Avvia app automaticamente** — Apre automaticamente un'app scelta sul telefono quando il mirroring parte e Android Auto è connesso
- **Esegui il mirroring solo di questa app** *(Android 15+)* — Invia all'auto solo l'app ad avvio automatico invece dell'intero schermo, lasciando privato il resto del telefono. Richiede l'autorizzazione di Cattura schermo [concessa in anticipo via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Concedere-il-permesso-di-mirroring-via-ADB); lo schermo dell'auto resta vuoto mentre sei fuori da quell'app
- **Blocca orientamento** — Blocca il telefono in orizzontale (in entrambi i versi) o in verticale durante il mirroring, oppure lo adatta alla forma dello schermo dell'auto; si attiva alla connessione, con un pulsante sullo schermo
- **Scorciatoie di avvio** — Aggiungi fino a 4 pulsanti di avvio rapido delle app sulla schermata di mirroring di Android Auto; tieni premuto un pulsante per cambiare il testo mostrato in auto
- **Pulsanti sullo schermo** — Mostra o nascondi singolarmente i pulsanti della schermata di mirroring nella pagina Pulsanti sullo schermo: Blocca orientamento, Oscura, Oscuramento notturno, e Indietro / Home / App recenti del telefono (massimo 4 alla volta)
- **Posizione dei pulsanti** — Nel mirroring Legacy, allinea i pulsanti a sinistra, tienili lontani dalla barra di navigazione del telefono o imposta la loro distanza dai bordi (anche per la barra delle scorciatoie) per lasciare liberi i comandi propri dell'unità dell'auto
- **Regolazione del mirroring** — Ritaglia larghezza/altezza dell'immagine nelle impostazioni avanzate per le unità che tagliano i bordi; lì, l'**Immagine del mirroring disegnata dall'app** (sperimentale) evita anche la distorsione nella vista divisa
- **Inoltro tocco** *(sperimentale)* — Tocca, scorri, fai swipe e pizzica per lo zoom sul display Android Auto per controllare il telefono

## Funzioni privilegiate

Facoltativo — richiede [Shizuku](https://shizuku.rikka.app/) o root. Senza, tutto il resto funziona esattamente come prima.

| Funzione | Cosa fa |
|---|---|
| **Spegni lo schermo del telefono** | Spegne il pannello del telefono quando entra in azione l'Oscuramento automatico, mentre l'auto continua a mostrare il mirroring — risparmia batteria ed evita che il telefono illumini l'abitacolo di notte |
| **Iniezione tocco reale** | Inoltra i movimenti reali del dito invece di gesti sintetizzati, quindi **pressione prolungata, trascinamento e multi-touch** funzionano sul mirroring Legacy |
| **Adattare lo schermo del telefono a quello dell'auto** | Rimodella lo schermo del telefono sulle proporzioni dell'unità dell'auto durante il mirroring, eliminando all'origine le bande nere e la distorsione a schermo diviso — lo schermo dell'auto viene misurato automaticamente |

Inoltre, con Shizuku o root:

- **Pulsanti di navigazione del telefono** — Indietro / Home / App recenti senza alcun Servizio di accessibilità attivo; attivali in **Pulsanti sullo schermo → Pulsanti funzione**
- **Segui la modalità giorno/notte dell'auto** *(Android 10+)* — Durante il mirroring, il telefono passa dal tema chiaro a quello scuro insieme ad Android Auto
- **Dimensione carattere durante il mirroring** — Usa una diversa dimensione del carattere sul telefono durante il mirroring

Il tema e la dimensione del carattere del telefono vengono ripristinati al termine del mirroring.

Shizuku si è fermato collegando l'auto, o lo schermo non si riattiva? Vedi [Risoluzione dei problemi](https://github.com/slzn/ScreenOnAuto-releases/wiki/Come-si-usa#funzioni-privilegiate-shizuku--root).

## Requisiti

- Android 7.0 (API 24) o successivo
- Android Auto installato sul telefono
- Un veicolo compatibile con Android Auto
- *(Opzionale)* [Shizuku](https://shizuku.rikka.app/) o root — per le [Funzioni privilegiate](#funzioni-privilegiate)

## Installazione

### Google Play (consigliato)

Funziona su qualsiasi versione di Android, e Android Auto la accetta senza alcuna configurazione aggiuntiva (Android Auto esegue solo le app installate dal Play Store, e Android 14+ blocca il metodo KingInstaller). È il test interno di Google Play: la stessa app completa di GitHub, ma non è ricercabile sul Play Store: [**iscriviti nella pagina di installazione**](https://screenonauto.lzn.idv.tw/join/?lang=it). Ogni 30 minuti si apre un nuovo turno e il link di installazione compare pochi minuti dopo la chiusura delle iscrizioni del tuo turno. Tutti i passaggi: [**Installare tramite il programma di test di Google Play**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Installare-tramite-il-programma-di-test-di-Google-Play).

### Alternativa — Android 13 e precedenti: installazione con KingInstaller

> **Perché KingInstaller?**  
> Android Auto richiede che le app siano installate tramite il Google Play Store.
> Installare l'APK direttamente registra il browser o il file manager come origine
> dell'installazione, che Android Auto rifiuta. KingInstaller installa gli APK
> dichiarando Google Play Store come origine.

#### Passaggio 1 — Installa KingInstaller

1. Vai su [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) e scarica l'ultimo `KingInstaller.apk`
2. Consenti al browser o al file manager di **installare app sconosciute** — Android lo chiede la prima volta che apri un APK
3. Apri `KingInstaller.apk` e tocca **Installa**

#### Passaggio 2 — Installa ScreenOnAuto tramite KingInstaller

1. Scarica l'ultimo `ScreenOnAuto-*.apk` dalla [release più recente](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Apri **KingInstaller**, tocca l'**icona della cartella** e seleziona l'APK scaricato
3. Tocca **Installa** — KingInstaller lo installerà come se provenisse dal Google Play Store

### Alternativa — con un dongle AAWireless

> **Quando usarla:** hai un dongle AAWireless e preferisci installare l'APK direttamente invece di passare da Google Play — funziona anche dove Play non riesce a installare, ad esempio su GrapheneOS con Google Play in sandbox. In un'auto vera, Android Auto ignora la propria impostazione **Origini sconosciute**; è la Developer Mode del dongle a renderla effettiva, quindi **senza il dongle questo metodo non funziona**.

1. Scarica l'ultimo `ScreenOnAuto-*.apk` dalla [release più recente](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) e installalo — se Android lo chiede, consenti al browser o al file manager di **installare app sconosciute**
2. Collega il telefono all'auto tramite il dongle. Nell'app **AAWireless**, disattiva **Passthrough mode** e attiva **Developer Mode**
3. Nelle impostazioni di Android Auto sul telefono, apri **Impostazioni sviluppatore**, imposta **Modalità applicazione** su **Sviluppatore** e attiva **Origini sconosciute**
   - Non vedi le Impostazioni sviluppatore? Tocca 10 volte **Informazioni su versione e autorizzazioni**, poi apri il menu ⋮
4. Riavvia il telefono

## Verifica in Android Auto

Funziona **con qualsiasi metodo di installazione** — KingInstaller, Google Play *o* il metodo AAWireless.

Sul telefono, vai in **Impostazioni → Dispositivi connessi → Android Auto → Personalizza avvio applicazioni**.
Dovresti vedere queste **due** voci ScreenOnAuto:

| Icona | Nome | Funzione |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Mirroring dello schermo a schermo intero — sostituisce l'area della mappa |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Mirroring tramite il percorso di proiezione Legacy — può essere affiancato alla mappa |

Le versioni meno recenti di Android Auto mostrano anche una terza voce, **ScreenOnAuto Media Controller**. Se non la vedi è normale — il controllo multimediale funziona comunque.
Se manca una delle **due** voci sopra, reinstalla — con KingInstaller per il sideload, oppure lascia completare l'installazione da Play — e riapri Android Auto. Con il metodo AAWireless, controlla che Developer Mode e Origini sconosciute siano ancora attivi.

Pronto? Consulta **[Come si usa](https://github.com/slzn/ScreenOnAuto-releases/wiki/Come-si-usa)** per avviare il mirroring in auto.

## Autorizzazioni

| Autorizzazione | Necessaria per |
|---|---|
| Cattura schermo (MediaProjection) | Mirroring schermo |
| Accesso alle notifiche | Proxy sessione multimediale |
| Mostra sopra le altre app | Oscuramento automatico, Blocca orientamento e Oscuramento notturno |
| Servizio di accessibilità | Inoltro tocco e pulsanti Indietro / Home / Recenti (non serve con le funzioni privilegiate) |

> **Suggerimento:** per evitare la finestra di richiesta di cattura schermo a ogni avvio, puoi pre-concedere l'autorizzazione via ADB — vedi [Concedere il permesso di mirroring via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Concedere-il-permesso-di-mirroring-via-ADB). È anche ciò che sblocca **Esegui il mirroring solo di questa app**.

## Limitazioni note

- **Lo schermo del telefono deve restare acceso durante il mirroring** — il mirroring mostra ciò che è sullo schermo del telefono. Usa **Impedisci sospensione** per tenerlo attivo e **Oscuramento automatico** per risparmiare batteria; con Shizuku o root, Spegni lo schermo del telefono rimuove questo limite.
- **I contenuti protetti da DRM non possono essere trasmessi in mirroring** — app come Netflix o Disney+ mostrano una schermata nera. È una restrizione della piattaforma Android che l'app non può aggirare.
- **Google Maps di Android Auto può diventare nero durante il mirroring (Android 15+)** — mentre un'app cattura lo schermo, Android nasconde le app che considera sensibili, e Google Maps può finire in quell'elenco. Per risolvere, attiva **Opzioni sviluppatore → Disattiva protezioni condivisione schermo**; così Android smette anche di nascondere le notifiche con codici monouso mentre condividi lo schermo. L'impostazione ha effetto dal prossimo avvio del mirroring; consulta [Come si usa](https://github.com/slzn/ScreenOnAuto-releases/wiki/Come-si-usa#google-maps-di-android-auto-diventa-nero-durante-il-mirroring) per tutti i passaggi.
- La **barra di navigazione di Android Auto** sullo schermo dell'auto è disegnata da Android Auto stesso e non può essere nascosta.

## Avvertenza

Tieni sempre gli occhi sulla strada — non usare questa app mentre guidi.

Questo progetto non è affiliato, approvato o sponsorizzato da Google. Android Auto è un marchio di Google LLC.

## Ringraziamenti speciali

- **Jurek Harla** — ha ridisegnato le icone di ScreenOnAuto, ScreenOnAuto (Legacy) e Media Controller perché rientrino nella forma rotonda delle icone di Android (v1.9.2).

## Sostieni il progetto

Se questa app ti è utile, puoi fare una donazione oppure offrirmi un bubble tea 🧋

[![Dona via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Offrimi un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
