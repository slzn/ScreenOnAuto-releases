---
title: "Cómo Usar"
description: "Cómo iniciar la duplicación de ScreenOnAuto con el teléfono conectado: las dos entradas y sus diferencias, y el flujo de inicio paso a paso."
lang: es
slug: how-to-use
permalink: /docs/es/how-to-use/
date: 2026-07-16
last_modified_at: 2026-10-27
---

# Cómo Usar


> **ℹ️ Nota**
> **Antes de empezar**, asegúrate de que:
> - ScreenOnAuto está instalado y sus entradas aparecen en el lanzador de Android Auto.
> - Ya abriste la app una vez en el teléfono y concediste los permisos solicitados.

## Las dos entradas de duplicación

El lanzador de apps de Android Auto muestra **dos** entradas de duplicación. Ambas
duplican la misma pantalla del teléfono — la diferencia es *cómo* se muestra la
duplicación en la pantalla del coche:

![Lanzador de Android Auto con las entradas de ScreenOnAuto](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="Duplicación de ScreenOnAuto a pantalla completa"></p>
Pantalla completa — ocupa el área del mapa
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) junto al mapa"></p>
En una <b>pantalla de coche lo bastante grande</b> puede ir <b>junto al mapa</b> en vista dividida; en pantallas pequeñas el mapa pasa al fondo y solo se muestra la duplicación (<b>no</b> sustituye al mapa)
</td>
</tr>
</table>

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
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="Icono de ScreenOnAuto"> o
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="Icono de ScreenOnAuto (Legacy)">) en el lanzador de
   Android Auto.
3. El teléfono muestra automáticamente el diálogo de permiso de captura de pantalla —
   coge el teléfono y pulsa **Empezar ahora** (Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Diálogo de permiso de captura de pantalla en el teléfono">

   Si el teléfono estaba en reposo, la pantalla se enciende sola. Si está bloqueado con PIN, patrón o huella, desbloquéalo primero; después aparece el diálogo. Si concediste el permiso antes con ADB, no hay diálogo: la duplicación empieza directamente y el coche muestra la pantalla de bloqueo hasta que desbloquees el teléfono.

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

### Duplicación e imagen

#### La entrada se abre pero queda en blanco

La duplicación aún no ha empezado; mira si hay un diálogo de permiso en el teléfono, o
iníciala con el interruptor **Duplicar pantalla**.

#### Barras negras alrededor de la imagen

Las pantallas del teléfono y del coche tienen proporciones distintas. Usa el botón
**Bloquear orientación** en la pantalla de duplicación (o **Bloquear la orientación
automáticamente** en los ajustes). Para ajustarse exactamente al área útil del coche,
activa **Ajustar la pantalla del teléfono a la del coche** en Funciones con privilegios
(Shizuku o root).

#### La imagen se ve estirada o distorsionada tras cambiar la disposición

Ocurre cuando el área visible crece o se reduce en la vista dividida. Girar el teléfono
para que la pantalla cambie entre vertical y horizontal lo devuelve a la normalidad (si **Bloquear orientación** está activo, desactívalo antes con su botón en pantalla). Dos
ajustes también pueden solucionarlo:

- Activa **Ajustes → Avanzado → Tamaño fijo de la duplicación**. La duplicación mantiene
  su tamaño en lugar de distorsionarse (parte puede quedar oculta). Aplica a la entrada
  de pantalla completa **ScreenOnAuto**.
- Activa **Ajustes → Avanzado → Duplicación dibujada por la app (experimental)**. La app
  dibuja entonces la imagen de la duplicación en lugar de dejar que el sistema la
  escale, así que ya no se distorsiona en la vista dividida.
  Consume algo más de batería y se aplica la próxima vez que empiece la duplicación. **Ajustar la pantalla del teléfono a la del coche** (Funciones con privilegios) resuelve el mismo problema de otra forma, y ambas pueden estar activadas a la vez.

#### El Google Maps de Android Auto se pone negro durante la duplicación

En Android 15 y posteriores, mientras alguna app captura la pantalla (como debe hacer toda app de duplicación), Android oculta las apps que considera sensibles, y Google Maps puede entrar en esa lista. El mapa de Android Auto se queda entonces en negro hasta que se detiene la duplicación, y lo mismo ocurre con otras apps de duplicación y de mapas. Para solucionarlo, activa **Ajustes → Opciones de desarrollador → Inhabilitar protecciones de pantalla compartida**. Si no aparecen las Opciones de desarrollador, busca **Número de compilación** en Ajustes y tócalo 7 veces. Así Android tampoco ocultará las notificaciones con códigos de un solo uso mientras compartes la pantalla; si eso te importa, déjalo desactivado. Después de activarlo, detén la duplicación y vuelve a iniciarla: el ajuste solo se aplica al iniciar la duplicación.

#### La barra de navegación de Android Auto sigue en pantalla

La **barra de navegación de Android Auto** en la pantalla del coche la dibuja el propio
Android Auto y la app no puede ocultarla.

### Funciones con privilegios (Shizuku / root)

#### Un servidor Shizuku iniciado por ADB se apaga al conectar al coche

La conexión USB pone el teléfono en modo accesorio, lo que reinicia ADB y se lleva a
Shizuku por delante — la depuración inalámbrica usa el mismo ADB, así que no ayuda.
Inicia Shizuku otra vez y ScreenOnAuto se reconecta solo; mejor aún, usa el [fork
Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next), cuyo servicio watchdog lo
reinicia por ti. Los usuarios con root y las conexiones inalámbricas de Android Auto no
se ven afectados.

#### Cómo volver a encender la pantalla tras apagarla

La pantalla táctil se apaga junto con el panel, así que tocar el teléfono no hace nada.
Pulsa el botón **Atenuación automática** en la pantalla del coche — alternar la
atenuación automática enciende la pantalla (antes tienes que activar el botón en
**Botones en pantalla → Botones de función**; viene desactivado). O pulsa el botón de
encendido del teléfono **dos veces**, ya que la primera pulsación es la que pone el
sistema en reposo. Detener la duplicación o desconectar Android Auto también vuelve a
encender la pantalla.
