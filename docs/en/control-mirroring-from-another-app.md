---
title: "Control Mirroring from Another App"
description: "Start, stop or toggle the mirror with an intent, from an automation app, a shortcut or ADB."
lang: en
slug: control-mirroring-from-another-app
permalink: /docs/en/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Control Mirroring from Another App


Since **v1.8.4**, ScreenOnAuto accepts three intents that start, stop or toggle the
mirror. Anything that can send an intent — an automation app, a home-screen shortcut, a
script over ADB, an app of your own — can drive the mirror with them, so it can come on
with the rest of your driving setup instead of by hand.

## The three actions

| Action | What it does |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Starts mirroring. Does nothing if it is already running. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Stops mirroring. Does nothing if it is not running. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Stops it if running, starts it if not. |

Repeating an action is always safe. A start sent to an already-running mirror is ignored
rather than tearing the session down and building it again, so something that fires on
every Bluetooth connection will not interrupt a mirror that is already up.

## In an automation app

Most automation apps expose the same pieces under their own labels — typically a
"send intent" action with fields along these lines:

| Field | Value |
|---|---|
| Action | one of the three actions above |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (or `…MirrorControlReceiver` for a broadcast) |
| Target | Activity (or Broadcast) |

Activity is the one to use unless you have a reason not to — the next two sections
explain the difference, and why a broadcast cannot be relied on to *start* the mirror.
Either way the **Class** field is not optional: leave it blank and a broadcast will not
arrive at all.

If something is not working, try the matching ADB command below first. It tells you
whether the problem is the intent or the app sending it.

## Starting an activity (recommended)

Send the action to `idv.lzn.screenonauto/.MirrorControlActivity` as an **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Nothing of ScreenOnAuto appears on screen, and it leaves nothing behind in Recents. You
can also send the start *before* you reach the car — the mirror waits, and picks up by
itself once the car screen is there.

> **ℹ️ Note**
> Android still asks for screen-capture permission when mirroring starts. To make this
> properly hands-free, pre-grant it once via ADB — see
> [Grant Mirror Permission via ADB](/docs/en/grant-mirror-permission-via-adb/).

## Sending a broadcast

The same three actions also work as a **broadcast**, sent to
`idv.lzn.screenonauto/.MirrorControlReceiver` instead:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

A **stop** sent this way is completely silent — no window, no flicker.

Naming the component is not optional. Modern Android does not deliver a broadcast to an
app unless the sender says which component it is for, so a broadcast carrying only the
action is dropped and nothing happens at all, with no error anywhere.

> **⚠️ Warning**
> A **start** sent as a broadcast is unreliable, and when it fails it fails silently.
> Two things have to be allowed first, and both are off by default on many phones:
>
> - **Auto-start.** Many phones ship with power management that stops an app being
>   woken by a broadcast at all. Look for an auto-start manager in the battery or
>   phone-manager settings and allow ScreenOnAuto there. The phone may warn you
>   against it.
> - **Display over other apps.** Grant this to ScreenOnAuto in Android's app settings.
>
> If you only need start, use the activity above — it needs neither of these.

## Troubleshooting

- **Nothing happens at all** — check the component is named. A broadcast without it is
  dropped before ScreenOnAuto is ever involved.
- **Stop works but start does nothing** — you are sending a broadcast, and one of the two
  permissions in the warning above is missing. Send it to the activity instead.
- **The permission dialog appears every time** — expected, unless you pre-grant it with
  [ADB](/docs/en/grant-mirror-permission-via-adb/).
- **Start does nothing while the mirror is already running** — also expected; see above.
