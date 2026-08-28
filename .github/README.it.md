# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md)

*🌐 [Sito ufficiale](https://screenonauto.lzn.idv.tw/it/)*

> Esegui il mirroring dello schermo del tuo telefono Android sul display Android Auto, con supporto per i comandi multimediali.
>
> **Gratuita. Nessuna funzionalità richiede pagamenti aggiuntivi.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Schermo del telefono in mirroring sul display Android Auto, affiancato alla mappa"></p>

> [!IMPORTANT]
> **Il metodo di installazione dipende dalla versione di Android:**
> - **Android 14 e successivi** — installazione **solo tramite Google Play** (su invito — l'app **non è ricercabile** sul Play Store). [Unisciti alla lista dei tester →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Partecipare-al-beta-test)
> - **Android 13 e precedenti** — installa l'APK con KingInstaller ([passaggi qui sotto](#installazione)), oppure tramite Google Play.

## Funzionalità

- **Mirroring schermo** — Cattura e duplica lo schermo del telefono sull'unità Android Auto in tempo reale
- **Proxy sessione multimediale** — Controlla qualsiasi app multimediale del telefono dall'interfaccia multimediale nativa di Android Auto
- **Oscuramento automatico** — Riduce automaticamente la luminosità del telefono durante il mirroring inattivo (ritardo di 15/30/60/120 s)
- **Avvio automatico** — Avvia il mirroring automaticamente alla connessione di Android Auto
- **Impedisci sospensione** — Impedisce allo schermo del telefono di sospendersi durante il mirroring
- **Interrompi alla disconnessione** — Interrompe automaticamente il mirroring alla disconnessione di Android Auto
- **Avvia app automaticamente** — Apre automaticamente un'app scelta sul telefono quando il mirroring parte e Android Auto è connesso
- **Forzatura orizzontale** — Forza il telefono in orizzontale durante il mirroring; si attiva alla connessione, con un pulsante sullo schermo
- **Scorciatoie di avvio** — Aggiungi fino a 4 pulsanti di avvio rapido delle app sulla schermata di mirroring di Android Auto
- **Pulsanti sullo schermo** — Mostra o nascondi singolarmente i pulsanti della schermata di mirroring nelle impostazioni avanzate: Forza orizzontale, Oscura, e Indietro / Home / App recenti del telefono (massimo 4 alla volta)
- **Posizione dei pulsanti** — Nel mirroring Legacy, allinea i pulsanti a sinistra o evita automaticamente la barra di navigazione del telefono
- **Regolazione del mirroring** — Ritaglia larghezza/altezza dell'immagine nelle impostazioni avanzate per le unità che tagliano i bordi
- **Inoltro tocco** *(Sperimentale)* — Tocca, scorri, fai swipe e pizzica per lo zoom sul display Android Auto per controllare il telefono

## Funzioni privilegiate

Sbloccano ciò che le normali API di Android non possono fare. Richiedono **[Shizuku](https://shizuku.rikka.app/) o root** e sono del tutto opzionali: se il telefono non ha né l'uno né l'altro, **non cambia nulla** — la sezione resta nascosta e tutte le altre funzioni si comportano esattamente come prima.

| Funzione | Cosa fa |
|---|---|
| **Spegni lo schermo del telefono** | Spegne il pannello del telefono quando entra in azione l'Oscuramento automatico, mentre l'auto continua a mostrare il mirroring — risparmia batteria ed evita che il telefono illumini l'abitacolo di notte |
| **Iniezione tocco reale** | Inoltra i movimenti reali del dito invece di gesti sintetizzati, quindi **pressione prolungata, trascinamento e multi-touch** funzionano sul mirroring Legacy |
| **Pulsanti di navigazione del telefono** | Indietro / Home / App recenti funzionano **senza alcun Servizio di accessibilità attivo**. Attiva i pulsanti in **Avanzate → Pulsanti schermata Android Auto** |

> [!IMPORTANT]
> **Un server Shizuku avviato via ADB si spegne quando colleghi via USB.** Una connessione USB ad Android Auto mette il telefono in modalità accessorio, il che riavvia ADB e si porta dietro il server Shizuku. Il debug wireless non lo evita: entrambi passano dallo stesso ADB. Se le funzioni privilegiate smettono di funzionare subito dopo il collegamento, riavvia Shizuku — da lì ScreenOnAuto si riconnette da solo. Collegare Android Auto **prima** e avviare Shizuku **dopo** ti risparmia il viaggio di andata e ritorno. Chi usa root non è interessato, così come le connessioni Android Auto wireless (non si collega nulla, quindi ADB resta intatto).

> **Come riaccendere lo schermo dopo lo spegnimento:** il touchscreen si spegne insieme al pannello, quindi toccare il telefono non produce alcun effetto. Interrompi il mirroring o scollega Android Auto, oppure premi **due volte** il tasto di accensione del telefono (la prima pressione è quella che lo mette davvero in sospensione, dato che Android non ha mai saputo che il pannello era spento). Anche il pulsante **Oscuramento automatico** sullo schermo dell'auto va bene, ma solo se lo hai attivato in **Avanzate → Pulsanti schermata Android Auto**: è disattivato per impostazione predefinita.

## Requisiti

- Android 7.0 (API 24) o successivo
- Android Auto installato sul telefono
- Un veicolo compatibile con Android Auto
- *(Opzionale)* [Shizuku](https://shizuku.rikka.app/) o root — per le [Funzioni privilegiate](#funzioni-privilegiate)

## Installazione

### Android 14 e successivi — installazione tramite Google Play

> **Perché Google Play?**  
> Android Auto esegue solo le app installate dal Play Store, e Android 14+ blocca
> il workaround KingInstaller descritto sotto — quindi Play è l'unico modo per
> ottenere una build accettata da Android Auto. Quella che installi è comunque
> l'**app completa** — la stessa release dell'APK su GitHub, semplicemente
> distribuita tramite il canale di test interno di Play.

L'app **non è ricercabile sul Play Store** — l'installazione avviene **su invito**.
Consulta **[Partecipare al beta test](https://github.com/slzn/ScreenOnAuto-releases/wiki/Partecipare-al-beta-test)**
per il modulo di iscrizione e le istruzioni passo passo. Dopo l'installazione, avvia l'app e
concedi le autorizzazioni richieste allo stesso modo.

### Android 13 e precedenti — installazione con KingInstaller

> **Perché KingInstaller?**  
> Android Auto richiede che le app siano installate tramite il Google Play Store.
> Installare l'APK direttamente registra il browser o il file manager come origine
> dell'installazione, che Android Auto rifiuta. KingInstaller installa gli APK
> dichiarando Google Play Store come origine.

#### Passaggio 1 — Installa KingInstaller

1. Vai su [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) e scarica l'ultimo `KingInstaller.apk`
2. Sul telefono: **Impostazioni → Sicurezza → attiva «Installa app sconosciute»** per il tuo browser o file manager
3. Apri `KingInstaller.apk` e tocca **Installa**

#### Passaggio 2 — Installa ScreenOnAuto tramite KingInstaller

1. Scarica l'ultimo `ScreenOnAuto-*.apk` dalla [release più recente](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Apri **KingInstaller**, tocca l'**icona della cartella** e seleziona l'APK scaricato
3. Tocca **Installa** — KingInstaller lo installerà come se provenisse dal Google Play Store

#### Passaggio 3 — Concedi le autorizzazioni

Avvia **ScreenOnAuto** e segui le richieste dell'app per concedere le autorizzazioni necessarie.

## Verifica in Android Auto

Funziona **con qualsiasi metodo di installazione** — KingInstaller *o* Google Play.

Sul telefono, vai in **Impostazioni → Dispositivi connessi → Android Auto → Personalizza avvio applicazioni**.
Dovresti vedere queste **due** voci ScreenOnAuto:

| Icona | Nome | Funzione |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Mirroring dello schermo a schermo intero — sostituisce l'area della mappa |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Mirroring tramite il percorso di proiezione Legacy — può essere affiancato alla mappa |

A seconda della tua **versione di Android Auto** potresti vedere anche una terza voce,
<img src="../images/icon_media.png" width="20"> **ScreenOnAuto Media Controller** — oppure no. **Entrambi i casi sono normali:**

- **Android Auto meno recente** — la voce compare, con la sua icona.
- **Android Auto più recente** — nessuna voce. Il Media Controller non ha mai avuto un'interfaccia propria: pilota il pannello multimediale integrato di Android Auto, e le versioni più recenti lo integrano direttamente, quindi non serve un'icona separata. **Il controllo multimediale continua a funzionare.**

Se manca una delle **due** voci sopra, allora c'è davvero un problema: per un'installazione KingInstaller, reinstalla verificando che Google Play Store risulti come origine; per un'installazione Google Play, attendi che l'installazione sia completata e riapri Android Auto.
**Non reinstallare solo perché manca la voce Media Controller**: è previsto sulle versioni più recenti di Android Auto.

Pronto? Consulta **[Come si usa](https://github.com/slzn/ScreenOnAuto-releases/wiki/Come-si-usa)** per avviare il mirroring in auto.

## Autorizzazioni

| Autorizzazione | Necessaria per |
|---|---|
| Cattura schermo (MediaProjection) | Mirroring schermo |
| Accesso alle notifiche | Proxy sessione multimediale |
| Mostra sopra le altre app | Oscuramento automatico e Forzatura orizzontale |
| Servizio di accessibilità | Inoltro tocco *(Sperimentale)* e pulsanti Indietro / Home / App recenti — con le [Funzioni privilegiate](#funzioni-privilegiate) nessuno dei due ne ha bisogno: i pulsanti funzionano appena un backend è connesso, l'inoltro tocco quando **Iniezione tocco reale** è attiva |

> **Suggerimento:** per evitare la finestra di richiesta di cattura schermo a ogni avvio, puoi pre-concedere l'autorizzazione via ADB — vedi [Concedere il permesso di mirroring via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Concedere-il-permesso-di-mirroring-via-ADB).

## Limitazioni note

- **Lo schermo del telefono deve restare acceso durante il mirroring** — il mirroring mostra esattamente ciò che è sullo schermo del telefono, quindi non può continuare a schermo spento o bloccato. Usa **Impedisci sospensione** per tenere lo schermo attivo e **Oscuramento automatico** per oscurarlo e risparmiare batteria invece di spegnerlo. *(Con Shizuku o root e l'Oscuramento automatico attivo, [Spegni lo schermo del telefono](#funzioni-privilegiate) rimuove questo limite: spegne il pannello mentre il mirroring continua.)*
- **I contenuti protetti da DRM non possono essere trasmessi in mirroring** — app come Netflix o Disney+ mostrano una schermata nera. È una restrizione della piattaforma Android che l'app non può aggirare.
- La **barra di navigazione di Android Auto** sullo schermo dell'auto è disegnata da Android Auto stesso e non può essere nascosta.

## Avvertenza

Tieni sempre gli occhi sulla strada — non usare questa app mentre guidi.

Questo progetto non è affiliato, approvato o sponsorizzato da Google. Android Auto è un marchio di Google LLC.

## Sostieni il progetto

Se questa app ti è utile, puoi fare una donazione oppure offrirmi un bubble tea 🧋

[![Dona via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Offrimi un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
