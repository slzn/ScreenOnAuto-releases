---
title: "Cómo Usar"
description: "Cómo iniciar la duplicación de ScreenOnAuto con el teléfono conectado: las dos entradas y sus diferencias, y el flujo de inicio paso a paso."
lang: es
slug: how-to-use
permalink: /docs/es/how-to-use/
date: 2026-07-16
last_modified_at: 2026-07-16
---

# Cómo Usar


Esta guía explica **cómo iniciar la duplicación una vez que el teléfono está conectado
al coche** — las dos entradas de duplicación y sus diferencias, y el flujo de inicio
paso a paso.

> **ℹ️ Nota**
> **Antes de empezar**, asegúrate de que:
> - ScreenOnAuto está instalado y las tres entradas aparecen en el lanzador de Android Auto.
> - Ya abriste la app una vez en el teléfono y concediste los permisos solicitados.

## Las dos entradas de duplicación

El lanzador de apps de Android Auto muestra **dos** entradas de duplicación. Ambas
duplican la misma pantalla del teléfono — la diferencia es *cómo* se muestra la
duplicación en la pantalla del coche:

![Lanzador de Android Auto con las entradas de ScreenOnAuto](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Presentación | Pantalla completa — ocupa el área del mapa | En una **pantalla de coche lo bastante grande** puede ir **junto al mapa** en vista dividida; en pantallas pequeñas el mapa pasa al fondo y solo se muestra la duplicación (**no** sustituye al mapa) |

**ScreenOnAuto** — pantalla completa, ocupando el área del mapa:

![Duplicación de ScreenOnAuto a pantalla completa](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — junto al mapa:

![ScreenOnAuto (Legacy) junto al mapa](/images/how-to-use/legacy-split.png)

Prueba ambas y usa la que mejor funcione en tu unidad. Las dos muestran la misma
duplicación y puedes cambiar en cualquier momento — con la duplicación en marcha, abrir
la otra entrada la muestra al instante sin volver a pedir permiso.

> **💡 Consejo**
> Si ya abriste **ScreenOnAuto** (la entrada de pantalla completa) y ahora quieres usar
> **ScreenOnAuto (Legacy)**, abre primero tu app de mapas (p. ej. Google Maps) en la
> pantalla del coche y luego inicia la duplicación Legacy. Así el coche vuelve a tener
> la app de mapas como mapa predeterminado y las funciones de mapa no quedan ocupadas
> por la duplicación a pantalla completa.

## Iniciar la duplicación

### Con Inicio automático ACTIVADO (recomendado)

1. En la app del teléfono, activa **Inicio automático** (configuración única).
2. Conecta el teléfono al coche y toca una entrada de ScreenOnAuto
   (<img src="/images/icon_launcher.png" width="24" align="center"> o
   <img src="/images/icon_legacy.png" width="24" align="center">) en el lanzador de
   Android Auto.
3. El teléfono muestra automáticamente el diálogo de permiso de captura de pantalla —
   coge el teléfono y pulsa **Empezar ahora** (Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Diálogo de permiso de captura de pantalla en el teléfono">

4. La pantalla de tu teléfono aparece en la unidad:

   ![Pantalla del teléfono duplicada en la unidad](/images/how-to-use/mirror-active.png)

> **ℹ️ Nota**
> El diálogo de permiso es un requisito de Android — aparece una vez cada vez que
> empieza la duplicación, no con cada cambio de pantalla. Con *Inicio automático*
> desactivado, tocar la entrada solo abre la pantalla de duplicación; no se captura
> nada hasta que tú lo inicies.

### Iniciar manualmente

Si prefieres mantener **Inicio automático** desactivado:

1. Abre ScreenOnAuto en el teléfono, activa el interruptor **Duplicar pantalla** y
   pulsa **Empezar ahora** (Start now) en el diálogo de permiso.
2. En la pantalla del coche, abre una de las entradas de ScreenOnAuto — la duplicación
   ya está en marcha y se muestra de inmediato.

(El orden no importa — también puedes abrir la entrada primero y activar el
interruptor **Duplicar pantalla** después.)

### Omitir el diálogo de permiso

¿Cansado de que el diálogo aparezca cada vez? Puedes conceder el permiso una sola vez
vía ADB — consulta [Conceder Permiso de Duplicación por ADB](/docs/es/grant-mirror-permission-via-adb/).

## Detener la duplicación

Cualquiera de estas opciones funciona:

- **Desconectar del coche** — la duplicación se detiene automáticamente (ajuste
  predeterminado *Detener al desconectar*).
- Pulsar **Detener duplicación** en la notificación persistente del teléfono.
- Desactivar el interruptor **Duplicar pantalla** en la app.

## Solución de problemas

- **La entrada se abre pero queda en blanco** — la duplicación aún no ha empezado;
  mira si hay un diálogo de permiso en el teléfono, o iníciala con el interruptor
  **Duplicar pantalla**.
- **Barras negras alrededor de la imagen** — las pantallas del teléfono y del coche
  tienen proporciones distintas; el botón **Forzar horizontal** en la pantalla de
  duplicación (o **Forzar horizontal automáticamente** en los ajustes de la app) suele
  llenar la pantalla mucho mejor. Si quedan huecos finos o bordes cortados, afínalo en
  **Ajustes → Avanzado → Ajustar ancho de la duplicación / Ajustar alto de la
  duplicación** (píxeles positivos recogen un borde cortado, negativos empujan para
  rellenar una barra negra).
- **La imagen se ve estirada o distorsionada tras cambiar la disposición** (p. ej. el
  área visible crece o se reduce en la vista dividida) — activa **Ajustes → Avanzado →
  Tamaño fijo de la duplicación**. La duplicación mantiene su tamaño en lugar de
  distorsionarse (parte puede quedar oculta). Aplica a la entrada de pantalla completa
  **ScreenOnAuto**.
- La **barra de navegación de Android Auto** en la pantalla del coche la dibuja el
  propio Android Auto y la app no puede ocultarla.
