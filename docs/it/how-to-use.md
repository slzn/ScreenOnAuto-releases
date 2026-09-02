---
title: "Come si usa"
description: "Avviare il mirroring di ScreenOnAuto una volta collegato il telefono: le due voci di mirroring e le loro differenze, e la procedura di avvio passo passo."
lang: it
slug: how-to-use
permalink: /docs/it/how-to-use/
date: 2026-07-17
last_modified_at: 2026-09-02
---

# Come si usa


Questa guida spiega **come avviare il mirroring una volta collegato il telefono
all'auto** — le due voci di mirroring e le loro differenze, e la procedura di avvio
passo passo.

> **ℹ️ Nota**
> **Prima di iniziare**, assicurati che:
> - ScreenOnAuto sia installato e le sue voci compaiano nel launcher di Android Auto.
> - Tu abbia aperto l'app una volta sul telefono e concesso le autorizzazioni richieste.

## Le due voci di mirroring

Il launcher delle app di Android Auto mostra **due** voci di mirroring. Entrambe
duplicano lo stesso schermo del telefono — cambia il *modo* in cui il mirroring viene
mostrato sullo schermo dell'auto:

![Launcher di Android Auto con le voci ScreenOnAuto](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48" alt=""><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48" alt=""><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Visualizzazione | Schermo intero — occupa l'area della mappa | Su uno **schermo dell'auto abbastanza grande** può stare **affiancato alla mappa** in vista divisa; su uno schermo più piccolo la mappa passa semplicemente in secondo piano e viene mostrato solo il mirroring (non **sostituisce** la mappa) |

**ScreenOnAuto** — schermo intero, occupa l'area della mappa:

![Mirroring ScreenOnAuto a schermo intero](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — affiancato alla mappa:

![ScreenOnAuto (Legacy) affiancato alla mappa](/images/how-to-use/legacy-split.png)

Provale entrambe e usa quella che funziona meglio sulla tua unità. Mostrano lo stesso
mirroring e puoi passare dall'una all'altra in qualsiasi momento — quando il mirroring è
attivo, aprire l'altra voce lo mostra subito senza richiedere di nuovo l'autorizzazione.

> **💡 Suggerimento**
> Se hai già aperto **ScreenOnAuto** (la voce a schermo intero) e ora vuoi usare
> **ScreenOnAuto (Legacy)**, apri prima la tua app di mappe (per es. Google Maps) sullo
> schermo dell'auto, poi avvia il mirroring Legacy. In questo modo l'app di mappe torna
> a essere la mappa predefinita dello schermo dell'auto, e le funzioni legate alla mappa
> non restano occupate dal mirroring a schermo intero.

## Avviare il mirroring

### Con l'avvio automatico attivo (consigliato)

1. Nell'app sul telefono, attiva l'**Avvio automatico** (impostazione una tantum).
2. Collega il telefono all'auto e tocca una voce ScreenOnAuto
   (<img src="/images/icon_launcher.png" width="24" align="center" alt="Icona ScreenOnAuto"> oppure
   <img src="/images/icon_legacy.png" width="24" align="center" alt="Icona ScreenOnAuto (Legacy)">) nel launcher di
   Android Auto.
3. Il telefono mostra automaticamente la finestra di autorizzazione alla cattura dello
   schermo — prendi il telefono e tocca **Avvia adesso**:

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Finestra di autorizzazione alla cattura dello schermo sul telefono">

4. Lo schermo del telefono compare sull'unità:

   ![Schermo del telefono in mirroring sull'unità](/images/how-to-use/mirror-active.png)

> **ℹ️ Nota**
> La finestra di autorizzazione è un requisito di Android — compare una volta a ogni
> avvio del mirroring, non a ogni cambio di schermata. Con l'*avvio automatico*
> disattivato, toccare la voce apre solo la schermata di mirroring; nulla viene
> catturato finché non lo avvii tu.

### Avvio manuale

Se preferisci tenere l'**avvio automatico** disattivato:

1. Apri ScreenOnAuto sul telefono, attiva l'interruttore del **mirroring** e tocca
   **Avvia adesso** nella finestra di autorizzazione.
2. Sullo schermo dell'auto, apri una delle voci ScreenOnAuto — il mirroring è già in
   corso e compare subito.

(L'ordine non conta — puoi anche aprire prima la voce e attivare l'interruttore dopo.)

### Saltare la finestra di autorizzazione

Stanco della finestra a ogni avvio? Puoi pre-concedere l'autorizzazione una volta via
ADB — vedi [Concedere il permesso di mirroring via ADB](/docs/it/grant-mirror-permission-via-adb/).

## Interrompere il mirroring

Uno qualsiasi di questi metodi:

- **Scollega il telefono dall'auto** — il mirroring si interrompe automaticamente
  (impostazione predefinita *Interrompi alla disconnessione*).
- Tocca **Interrompi mirroring** nella notifica persistente del telefono.
- Disattiva l'interruttore del **mirroring** nell'app.

## Risoluzione dei problemi

- **La voce si apre ma resta vuota** — il mirroring non è ancora partito; controlla la
  finestra di autorizzazione sul telefono, oppure avvialo con l'interruttore del
  **mirroring**.
- **Bande nere attorno all'immagine** — telefono e schermo dell'auto hanno proporzioni
  diverse; il pulsante **Forza orizzontale** sulla schermata di mirroring (o la
  **Forzatura orizzontale automatica** nelle impostazioni dell'app) di solito riempie
  molto meglio lo schermo. Se restano sottili spazi o bordi tagliati, rifinisci con
  **Impostazioni → Avanzate → Regola larghezza / altezza del mirroring** (pixel positivi
  per recuperare un bordo tagliato, negativi per riempire una banda nera).
- **Immagine allungata o distorta dopo un cambio di layout** (per es. l'area visibile
  cresce o si riduce in vista divisa) — attiva **Impostazioni → Avanzate → Dimensione
  fissa del mirroring**. Il mirroring mantiene così le sue dimensioni invece di
  distorcersi (una parte può restare nascosta). Si applica alla voce a schermo intero
  **ScreenOnAuto**.
- La **barra di navigazione di Android Auto** sullo schermo dell'auto è disegnata da
  Android Auto stesso e l'app non può nasconderla.
