---
title: "Controlar la Duplicación desde Otra App"
description: "Inicia, detén o alterna la duplicación con un intent, desde una app de automatización, un acceso directo o ADB."
lang: es
slug: control-mirroring-from-another-app
permalink: /docs/es/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Controlar la Duplicación desde Otra App


Desde la **v1.8.4**, ScreenOnAuto acepta tres intents que inician, detienen o alternan la
duplicación. Cualquier cosa capaz de enviar un intent — una app de automatización, un acceso
directo en la pantalla de inicio, un script por ADB, una app propia — puede controlar la
duplicación con ellos, de modo que se active junto con el resto de tu configuración al
conducir en lugar de a mano.

## Las tres acciones

| Acción | Qué hace |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Inicia la duplicación. No hace nada si ya está en marcha. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Detiene la duplicación. No hace nada si no está en marcha. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | La detiene si está en marcha, la inicia si no lo está. |

Repetir una acción siempre es seguro. Un inicio enviado a una duplicación que ya está en
marcha se ignora en vez de desmontar la sesión y volver a levantarla, así que algo que se
dispare en cada conexión Bluetooth no interrumpirá una duplicación que ya esté activa.

## En una app de automatización

La mayoría de las apps de automatización exponen las mismas piezas con sus propios nombres,
normalmente una acción de "enviar intent" con campos parecidos a estos:

| Campo | Valor |
|---|---|
| Action | una de las tres acciones de arriba |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (o `…MirrorControlReceiver` para un broadcast) |
| Target | Activity (o Broadcast) |

Usa Activity salvo que tengas un motivo para no hacerlo: las dos secciones siguientes explican
la diferencia y por qué no se puede confiar en un broadcast para *iniciar* la duplicación. En
cualquier caso, el campo **Class** no es opcional: si lo dejas vacío, el broadcast no llega.

Si algo no funciona, prueba primero el comando ADB correspondiente que aparece más abajo. Te
dirá si el problema está en el intent o en la app que lo envía.

## Iniciar una activity (recomendado)

Envía la acción a `idv.lzn.screenonauto/.MirrorControlActivity` como **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

No aparece nada de ScreenOnAuto en pantalla, y no deja rastro en Recientes. También puedes
enviar el inicio *antes* de llegar al coche: la duplicación espera y se engancha sola en
cuanto la pantalla del coche está disponible.

> **ℹ️ Nota**
> Android sigue pidiendo el permiso de captura de pantalla cuando arranca la duplicación.
> Para que sea realmente automático, concédelo una vez por adelantado con ADB — consulta
> [Conceder Permiso de Duplicación por ADB](/docs/es/grant-mirror-permission-via-adb/).

## Enviar un broadcast

Las mismas tres acciones también funcionan como **broadcast**, enviadas a
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Una **parada** enviada así es completamente silenciosa: sin ventana y sin parpadeo.

Nombrar el componente no es opcional. Android ya no entrega un broadcast a una app si el
remitente no indica a qué componente va dirigido, así que un broadcast que solo lleva la
acción se descarta y no ocurre nada, sin ningún error por ninguna parte.

> **⚠️ Advertencia**
> Un **inicio** enviado como broadcast no es fiable, y cuando falla, falla en silencio.
> Hay que permitir dos cosas antes, y en muchos teléfonos las dos vienen desactivadas:
>
> - **Inicio automático.** Muchos teléfonos incluyen una gestión de energía que impide por
>   completo que un broadcast despierte a la app. Busca un gestor de inicio automático en los
>   ajustes de batería o del administrador del teléfono y permite ahí ScreenOnAuto. Es posible
>   que el teléfono intente disuadirte.
> - **Mostrar sobre otras apps.** Concédeselo a ScreenOnAuto en los ajustes de Android.
>
> Si solo necesitas el inicio, usa la activity de arriba: no necesita ninguna de las dos.

## Solución de problemas

- **No pasa absolutamente nada** — comprueba que has indicado el componente. Un broadcast sin
  él se descarta antes de que ScreenOnAuto llegue a enterarse.
- **Detener funciona, pero iniciar no hace nada** — estás enviando un broadcast y falta uno de
  los dos permisos del aviso anterior. Envíalo a la activity.
- **El diálogo de permiso aparece cada vez** — es lo esperado, salvo que lo concedas por
  adelantado con [ADB](/docs/es/grant-mirror-permission-via-adb/).
- **Iniciar no hace nada con la duplicación ya en marcha** — también es lo esperado; mira arriba.
