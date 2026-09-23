---
title: "Controllare il mirroring da altre app"
description: "Avvia, ferma o commuta il mirroring con un intent, da un'app di automazione, una scorciatoia o ADB."
lang: it
slug: control-mirroring-from-another-app
permalink: /docs/it/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Controllare il mirroring da altre app


Dalla **v1.8.4** ScreenOnAuto accetta tre intent che avviano, fermano o commutano il
mirroring. Tutto ciò che sa inviare un intent — un'app di automazione, una scorciatoia sulla
schermata iniziale, uno script via ADB, un'app scritta da te — può pilotare il mirroring con
questi, così da farlo partire insieme al resto della tua configurazione di guida invece che a
mano.

## Le tre azioni

| Azione | Cosa fa |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Avvia il mirroring. Non fa nulla se è già in corso. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Ferma il mirroring. Non fa nulla se non è in corso. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Lo ferma se è in corso, lo avvia se non lo è. |

Ripetere un'azione è sempre sicuro. Un avvio inviato a un mirroring già attivo viene ignorato
anziché smontare la sessione e ricostruirla, quindi qualcosa che scatta a ogni connessione
Bluetooth non interromperà un mirroring già in piedi.

## In un'app di automazione

La maggior parte delle app di automazione espone gli stessi elementi con nomi propri, di
solito un'azione "invia intent" con campi più o meno così:

| Campo | Valore |
|---|---|
| Action | una delle tre azioni qui sopra |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (oppure `…MirrorControlReceiver` per un broadcast) |
| Target | Activity (oppure Broadcast) |

Usa Activity, salvo motivi contrari: le due sezioni seguenti spiegano la differenza e perché
non ci si può affidare a un broadcast per *avviare* il mirroring. In ogni caso il campo
**Class** non è facoltativo: lasciandolo vuoto il broadcast non arriva affatto.

Se qualcosa non funziona, prova prima il comando ADB corrispondente qui sotto. Ti dice se il
problema è nell'intent o nell'app che lo invia.

## Avviare un'activity (consigliato)

Invia l'azione a `idv.lzn.screenonauto/.MirrorControlActivity` come **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Di ScreenOnAuto non compare nulla sullo schermo e non resta nulla nelle app recenti. Puoi
anche inviare l'avvio *prima* di arrivare all'auto: il mirroring aspetta e si aggancia da solo
non appena lo schermo dell'auto è disponibile.

> **ℹ️ Nota**
> Android continua a chiedere l'autorizzazione di cattura schermo quando il mirroring parte.
> Per renderlo davvero a mani libere, concedila una volta in anticipo via ADB — vedi
> [Concedere il permesso di mirroring via ADB](/docs/it/grant-mirror-permission-via-adb/).

## Inviare un broadcast

Le stesse tre azioni funzionano anche come **broadcast**, inviate a
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Uno **stop** inviato così è completamente silenzioso: nessuna finestra, nessuno sfarfallio.

Nominare il componente non è facoltativo. Android oggi non consegna un broadcast a un'app se
il mittente non dice a quale componente è destinato, perciò un broadcast che porta solo
l'azione viene scartato e non succede assolutamente nulla, senza alcun errore da nessuna parte.

> **⚠️ Attenzione**
> Un **avvio** inviato come broadcast non è affidabile e, quando fallisce, fallisce in
> silenzio. Due cose vanno consentite prima, ed entrambe su molti telefoni sono disattivate
> di serie:
>
> - **Avvio automatico.** Molti telefoni includono una gestione dell'energia che impedisce
>   del tutto a un'app di essere risvegliata da un broadcast. Cerca una gestione dell'avvio
>   automatico nelle impostazioni della batteria o del gestore del telefono e consenti lì
>   ScreenOnAuto. Il telefono potrebbe cercare di dissuaderti.
> - **Visualizzazione sopra altre app.** Concedila a ScreenOnAuto nelle impostazioni Android.
>
> Se ti serve solo l'avvio, usa l'activity qui sopra: non richiede nessuna delle due.

## Risoluzione dei problemi

- **Non succede assolutamente nulla** — controlla di aver indicato il componente. Un broadcast
  che ne è privo viene scartato prima ancora che ScreenOnAuto entri in gioco.
- **Lo stop funziona ma l'avvio non fa nulla** — stai inviando un broadcast e manca una delle
  due autorizzazioni dell'avviso qui sopra. Invia invece all'activity.
- **La finestra del permesso compare ogni volta** — è previsto, a meno che tu non la conceda in
  anticipo con [ADB](/docs/it/grant-mirror-permission-via-adb/).
- **L'avvio non fa nulla mentre il mirroring è già attivo** — anche questo è previsto, vedi sopra.
