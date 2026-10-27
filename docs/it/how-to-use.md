---
title: "Come si usa"
description: "Avviare il mirroring di ScreenOnAuto una volta collegato il telefono: le due voci di mirroring e le loro differenze, e la procedura di avvio passo passo."
lang: it
slug: how-to-use
permalink: /docs/it/how-to-use/
date: 2026-07-17
last_modified_at: 2026-10-27
---

# Come si usa


> **ℹ️ Nota**
> **Prima di iniziare**, assicurati che:
> - ScreenOnAuto sia installato e le sue voci compaiano nel launcher di Android Auto.
> - Tu abbia aperto l'app una volta sul telefono e concesso le autorizzazioni richieste.

## Le due voci di mirroring

Il launcher delle app di Android Auto mostra **due** voci di mirroring. Entrambe
duplicano lo stesso schermo del telefono — cambia il *modo* in cui il mirroring viene
mostrato sullo schermo dell'auto:

![Launcher di Android Auto con le voci ScreenOnAuto](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="Mirroring ScreenOnAuto a schermo intero"></p>
Schermo intero — occupa l'area della mappa
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) affiancato alla mappa"></p>
Su uno <b>schermo dell'auto abbastanza grande</b> può stare <b>affiancato alla mappa</b> in vista divisa; su uno schermo più piccolo la mappa passa semplicemente in secondo piano e viene mostrato solo il mirroring (non <b>sostituisce</b> la mappa)
</td>
</tr>
</table>

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
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="Icona ScreenOnAuto"> oppure
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="Icona ScreenOnAuto (Legacy)">) nel launcher di
   Android Auto.
3. Il telefono mostra automaticamente la finestra di autorizzazione alla cattura dello
   schermo — prendi il telefono e tocca **Avvia adesso**:

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Finestra di autorizzazione alla cattura dello schermo sul telefono">

   Se il telefono era in standby, lo schermo si accende da solo. Se è bloccato con PIN, sequenza o impronta, sbloccalo prima: la finestra compare subito dopo. Se hai concesso il permesso in anticipo con ADB, non compare nessuna finestra: il mirroring parte subito e l'auto mostra la schermata di blocco finché non sblocchi il telefono.

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

### Mirroring e immagine

#### La voce si apre ma resta vuota

Il mirroring non è ancora partito; controlla la finestra di autorizzazione sul telefono,
oppure avvialo con l'interruttore del **mirroring**.

#### Bande nere attorno all'immagine

Telefono e schermo dell'auto hanno proporzioni diverse. Usa il pulsante **Blocca
orientamento** sulla schermata di mirroring (o **Blocca automaticamente l'orientamento**
nelle impostazioni). Per riempire esattamente l'area utile dell'auto, attiva **Adattare
lo schermo del telefono a quello dell'auto** nelle Funzioni privilegiate (Shizuku o
root).

#### Immagine allungata o distorta dopo un cambio di layout

Succede quando l'area visibile cresce o si riduce in vista divisa. Ruotare il telefono in
modo che lo schermo passi da verticale a orizzontale fa tornare l'immagine a posto (se **Blocca orientamento** è attivo, sbloccalo prima con il suo pulsante sullo schermo). Due
impostazioni possono anche risolverlo:

- Attiva **Impostazioni → Avanzate → Dimensione fissa del mirroring**. Il mirroring
  mantiene così le sue dimensioni invece di distorcersi (una parte può restare
  nascosta). Si applica alla voce a schermo intero **ScreenOnAuto**.
- Attiva **Impostazioni → Avanzate → Immagine del mirroring disegnata dall'app
  (sperimentale)**. L'app disegna allora da sé l'immagine del mirroring invece di
  lasciarne il ridimensionamento al sistema, così non si distorce più nella vista divisa. Consuma un po' più di batteria e ha effetto al
  prossimo avvio del mirroring. **Adattare lo schermo del telefono a quello dell'auto** (Funzioni privilegiate) risolve lo stesso problema in un altro modo, e le due funzioni possono essere attive insieme.

#### Google Maps di Android Auto diventa nero durante il mirroring

Da Android 15 in poi, mentre un'app cattura lo schermo (come deve fare ogni app di mirroring), Android nasconde le app che considera sensibili, e Google Maps può finire in quell'elenco. La mappa di Android Auto resta quindi nera finché il mirroring non si ferma, e lo stesso succede con altre app di mirroring e di mappe. Per risolvere, attiva **Impostazioni → Opzioni sviluppatore → Disattiva protezioni condivisione schermo**. Se le Opzioni sviluppatore non compaiono, cerca **Numero build** nelle Impostazioni e toccalo 7 volte. Così Android smette anche di nascondere le notifiche con codici monouso mentre condividi lo schermo; se per te è importante, lascia l'opzione disattivata. Dopo averla attivata, interrompi il mirroring e riavvialo: l'impostazione ha effetto solo all'avvio del mirroring.

#### La barra di navigazione di Android Auto resta visibile

La **barra di navigazione di Android Auto** sullo schermo dell'auto è disegnata da
Android Auto stesso e l'app non può nasconderla.

### Funzioni privilegiate (Shizuku / root)

#### Un server Shizuku avviato via ADB si spegne quando colleghi il telefono all'auto

la connessione USB mette il telefono in modalità accessorio, il che riavvia ADB e si
porta via Shizuku — il debug wireless passa dallo stesso ADB, quindi non aiuta. Riavvia
Shizuku e ScreenOnAuto si riconnette da solo; meglio ancora, usa il [fork
Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next), il cui servizio watchdog lo
riavvia al posto tuo. Gli utenti root e le connessioni Android Auto wireless non sono
interessati.

#### Come riaccendere lo schermo dopo lo spegnimento

Il touchscreen si spegne insieme al pannello, quindi toccare il telefono non produce
alcun effetto. Tocca il pulsante **Oscuramento automatico** sullo schermo dell'auto:
attivare o disattivare l'oscuramento automatico riaccende lo schermo (prima attiva il
pulsante in **Pulsanti sullo schermo → Pulsanti funzione**; è disattivato per
impostazione predefinita). Oppure premi **due volte** il tasto di accensione del
telefono, perché la prima pressione è quella che mette il sistema in sospensione. Anche
interrompere il mirroring o scollegare Android Auto riaccende lo schermo.
