---
title: "Guía de ajustes"
description: "Qué hace cada ajuste de ScreenOnAuto y dónde están sus límites: la pantalla principal, los botones en pantalla, Avanzado y Funciones con privilegios, con una réplica funcional de la pantalla de ajustes."
lang: es
slug: settings
permalink: /docs/es/settings/
settings_phone: true
date: 2026-11-25
last_modified_at: 2026-11-26
---

<div class="sp-intro" markdown="1">

# Guía de ajustes

Esta página recorre la pantalla de ajustes de la app de arriba abajo: qué hace cada ajuste, cuándo activarlo y los límites que su resumen de una línea no cuenta. ¿Es tu primera vez con la app? Empieza por [Cómo Usar](/docs/es/how-to-use/).

</div>

<aside class="sp-aside" aria-label="Pantalla de ajustes de ScreenOnAuto">
<div id="settings-phone" data-show="Mostrar ajuste"></div>
<p class="sp-hint">Esta es la pantalla de ajustes de la app. Pulsa cualquier fila para saltar a su explicación. Los interruptores funcionan, pero solo en esta página: en tu teléfono no cambia nada.</p>
</aside>

<div class="sp-doc" markdown="1">

## Pantalla principal {#main}

### Panel de estado {#mirror}

El panel oscuro de arriba. Su primera línea dice si Android Auto está conectado y, cuando lo está, el tamaño de la pantalla del coche que ha medido. Debajo están el estado actual y el botón <span class="sp-ui-go">Iniciar duplicación</span> / <span class="sp-ui-go stop"><svg viewBox="0 0 12 12" aria-hidden="true"><rect width="12" height="12" rx="2"/></svg>Detener duplicación</span>. **Iniciar duplicación** abre en el teléfono el diálogo de captura de pantalla de Android; la duplicación empieza cuando pulsas **Empezar ahora** (Start now).

Si falta algún permiso, una línea ámbar en la parte inferior del panel lo indica; púlsala para desplazarte hasta [Permisos](#category_permissions).

### Inicio automático {#auto_start_mirror}

Con esta opción activada, la duplicación se puede iniciar desde el coche. Esto es lo que ocurre (los pasos marcados con «Tú» los haces tú; el resto ocurre solo):

1. <span class="sp-who you">Tú</span> Pulsa cualquiera de las entradas de ScreenOnAuto (<img class="sp-entry" src="/images/icon_launcher.png" alt="Icono de ScreenOnAuto"> o <img class="sp-entry" src="/images/icon_legacy.png" alt="Icono de ScreenOnAuto (Legacy)">) en la pantalla del coche.
2. Si el teléfono está en reposo, enciende la pantalla.
3. La pantalla de ajustes de ScreenOnAuto se abre en el teléfono y pulsa <span class="sp-ui-go">Iniciar duplicación</span> por ti.
4. <span class="sp-who you">Tú</span> Android muestra su diálogo de captura de pantalla: permítelo con **Empezar ahora**. Si el teléfono está bloqueado con PIN, patrón o huella, desbloquéalo primero y aparecerá el diálogo.
5. La duplicación empieza y la pantalla del teléfono aparece en el coche.

> **💡 Consejo**
> - **¿No quieres permitirlo cada vez?** [Concede el permiso de duplicación por ADB](/docs/es/grant-mirror-permission-via-adb/) una vez y el diálogo deja de aparecer, con lo que desaparece el paso 4 (hasta que desbloquees el teléfono, el coche muestra su pantalla de bloqueo).
> - **¿No quieres que aparezca la pantalla de ajustes?** Activa [Iniciar la duplicación en segundo plano](#silent_car_start) en Avanzado: en el paso 3 el teléfono va directo al diálogo de captura sin abrir ScreenOnAuto. Con ambas cosas, solo tienes que hacer el paso 1 y en el teléfono no aparece nada.

Con la opción desactivada, el paso 3 te toca a ti: al pulsar una entrada en el coche solo se muestra la pantalla de espera «Inicia la duplicación en el teléfono», y tú abres ScreenOnAuto en el teléfono y pulsas <span class="sp-ui-go">Iniciar duplicación</span>; después viene el paso 4, como arriba.

### Evitar suspensión {#keep_awake}

Impide que la pantalla del teléfono se suspenda durante la duplicación. La duplicación *es* la pantalla del teléfono, así que cuando la pantalla se apaga, la imagen del coche también se detiene. Solo mantiene la pantalla encendida —no sube el brillo—, por eso combina con [Atenuar pantalla automáticamente](#auto_dim): la pantalla sigue encendida y se atenúa cuando no se usa.

### Detener al desconectar {#stop_on_disconnect}

Detiene la duplicación cuando Android Auto se desconecta (activado de forma predeterminada). Si lo desactivas, la duplicación sigue en segundo plano después de salir del coche hasta que la detengas.

### Atenuar pantalla automáticamente {#auto_dim}

Durante la duplicación, baja el brillo del teléfono al mínimo cuando nadie lo ha tocado durante un rato: ahorra batería y evita deslumbramientos. Solo se atenúa la retroiluminación del teléfono; la imagen del coche sigue igual de brillante. Toca el teléfono y el brillo vuelve.

- Necesita el permiso [Mostrar sobre otras apps](#overlay_access).
- Usar la pantalla del coche ([Reenvío táctil](#accessibility_access)) no cuenta como tocar el teléfono, así que no lo reactiva.
- No se atenúa nada mientras el teléfono está en la pantalla de bloqueo; la cuenta atrás empieza cuando lo desbloqueas o lo tocas.
- Con Shizuku o root, la pantalla del teléfono se puede apagar en lugar de atenuarse: consulta [Apagar la pantalla del teléfono](#root_screen_off).

### Atenuar después de {#auto_dim_delay}

Cuánto tiempo debe estar inactivo el teléfono antes de atenuarse: 15, 30 (predeterminado), 60 o 120 segundos. Necesita [Atenuar pantalla automáticamente](#auto_dim) activado.

### Lanzar app automáticamente {#auto_launch_package}

Abre una app en el teléfono —por ejemplo, un mapa o un reproductor de música— en cuanto la duplicación y Android Auto están activos. **Pantalla de inicio predeterminada**, arriba de la lista, abre la app de pantalla de inicio que uses, así que sigue funcionando si cambias de launcher.

### Duplicar solo esta app {#single_app_mirror}

Envía al coche solo la app de [Lanzar app automáticamente](#auto_launch_package), arriba, en lugar de toda la pantalla del teléfono. Si cambias a otra app en el teléfono, la pantalla del coche se queda en blanco hasta que vuelvas: útil cuando los pasajeros o las notificaciones no deben verse en el coche.

La fila solo aparece en **Android 15 y posteriores**, después de haber [concedido el permiso de duplicación por ADB](/docs/es/grant-mirror-permission-via-adb/). Está atenuada hasta que se elige una app en Lanzar app automáticamente.

**Cuándo la necesitas:**

- **Sin el permiso por ADB, no la necesitas.** Desde Android 14, el diálogo de captura que aparece cada vez que empieza la duplicación ya permite elegir entre compartir toda la pantalla o una sola app; elige ahí una app y solo esa se duplica. En Android 13 y anteriores, el diálogo no ofrece esa opción y siempre duplica toda la pantalla.
- **Con el permiso por ADB, sí.** Una vez concedido, el diálogo ya no aparece, así que no hay dónde elegir una app y la duplicación es siempre de toda la pantalla. Para saltarte el diálogo *y* duplicar una sola app, usa este interruptor: junto con [Lanzar app automáticamente](#auto_launch_package), arriba, envía solo esa app al coche.
- [Compartir solo la pantalla completa](#full_screen_share_only), en Avanzado, quita del diálogo la opción de una sola app; no interfiere con este interruptor.

### Subpáginas {#subpages}

**Botones en pantalla**, **Avanzado** y **Funciones con privilegios** abren cada uno su propia página, que se explica en los capítulos siguientes: [Botones en pantalla](#screen_buttons), [Avanzado](#advanced), [Funciones con privilegios](#root_features).

### Permisos {#category_permissions}

Cada fila abre la página correspondiente de los ajustes del sistema; la etiqueta de la derecha indica si está concedido.

#### Acceso a notificaciones {#notification_access}

Permite que «ScreenOnAuto Controlador multimedia» <img class="sp-entry" src="/images/icon_media.png" alt="Icono de ScreenOnAuto Controlador multimedia"> tome el control de lo que suena en el teléfono. **Los botones multimedia del volante** y la pantalla multimedia de Android Auto pueden entonces controlar **reproductores que no son compatibles con Android Auto por sí mismos**, como YouTube: anterior / siguiente y reproducir / pausar funcionan.

- Solo lee lo que está sonando (sesiones multimedia), nunca el contenido de tus notificaciones.
- Las apps de música con soporte propio para Android Auto (YouTube Music, Spotify y similares) se conectan directamente a Android Auto y no se tocan.
- Sin el permiso, los botones van al reproductor que el sistema considera activo; con varios reproductores abiertos, puede ser el equivocado.
- Las versiones antiguas de Android Auto muestran una entrada aparte «ScreenOnAuto Controlador multimedia» en el launcher de apps; las nuevas no, y es normal: el control multimedia funciona igual.

#### Mostrar sobre otras apps {#overlay_access}

Lo necesitan [Atenuar pantalla automáticamente](#auto_dim), Bloquear orientación ([Bloquear la orientación al conectar](#force_landscape) y su [botón en el coche](#map_action_force_landscape)) y la [Atenuación nocturna](#night_dim).

#### Modificar ajustes del sistema {#write_settings_access}

Solo aparece en **Android 16 y posteriores**. Cuando el teléfono está en modo tableta (lado más corto de 600dp o más: la pantalla interior de un plegable, o tras bajar la [Densidad del teléfono](#phone_density)), Android 16 ignora la orientación de pantalla que piden las apps, así que Bloquear orientación pasa a usar el bloqueo de rotación del sistema, que necesita este permiso. Tu propio ajuste de giro automático vuelve cuando termina el bloqueo.

#### Reenvío táctil {#accessibility_access}

Pasa al teléfono los toques, deslizamientos y pellizcos en la pantalla del coche, mediante un servicio de accesibilidad de Android. Las dos duplicaciones admiten aquí los mismos gestos: tocar, desplazar (deslizar por una lista), deslizar rápido y pellizcar para hacer zoom.

Con Shizuku o root puedes usar [Inyección táctil real](#root_touch_injection) en su lugar: los toques en la pantalla del coche llegan al teléfono como movimientos reales del dedo, así que se siente como usar el teléfono directamente. **Mantener pulsado**, **pulsar y arrastrar** (mover un icono de la pantalla de inicio, por ejemplo) y los **gestos con varios dedos**, que el servicio de accesibilidad no puede hacer, también funcionan, pero solo en la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span>.

### Acerca de {#about}

La versión (púlsala para copiarla), los enlaces de GitHub y de donación, la Política de privacidad, las Condiciones de uso y las licencias de terceros.

## Botones en pantalla {#screen_buttons}

Todo lo que puede aparecer como botón en la pantalla del coche se configura en esta página.

### Accesos directos {#category_shortcuts}

Hasta 4 accesos directos a apps en la pantalla del coche. Pulsa uno y la app se abre en el teléfono y, por tanto, en el coche.

- Pulsa una fila para elegir la app; el interruptor de la derecha la muestra u oculta en el coche. **Pantalla de inicio predeterminada** también funciona aquí, como botón para «ir al inicio».
- **Mantén pulsado** un acceso directo configurado para cambiar el texto que se ve en el coche (hasta 30 caracteres). Si lo dejas vacío, la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span> muestra solo el icono de la app.
- Los accesos directos aparecen en la parte **superior** de la duplicación; el lado depende de la duplicación:
  - <span class="sp-mirror nav">Duplicación «ScreenOnAuto»</span>: usa la plantilla de pantalla de mapa de Android Auto, así que los accesos directos son botones de texto que dibuja el propio Android Auto (sin iconos), y es Android Auto quien decide dónde van: la app no puede moverlos. Pueden cambiar de lado según el ajuste de posición del conductor de Android Auto, pero no está garantizado.
  - <span class="sp-mirror legacy">Duplicación «ScreenOnAuto (Legacy)»</span>: la propia app los dibuja como botones con iconos, en la **esquina superior derecha** de forma predeterminada; [Alinear los botones a la izquierda](#legacy_buttons_left) los lleva a la esquina superior izquierda, y [las separaciones](#legacy_gaps) ajustan su distancia a los bordes.
- Los accesos directos no se quedan en pantalla: en la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span> se ocultan junto con los [botones de función](#category_control_buttons) tras 5 segundos de inactividad y vuelven cuando tocas la pantalla del coche; en la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>, Android Auto decide cuándo se ocultan.

### Botones de función {#category_control_buttons}

Botones redondos sobre la duplicación, hasta 4 a la vez en cualquiera de las dos duplicaciones.

- Su posición depende de la duplicación:
  - <span class="sp-mirror nav">Duplicación «ScreenOnAuto»</span>: son la franja de botones de la plantilla de pantalla de mapa de Android Auto, que Android Auto dibuja en la **esquina inferior derecha o inferior izquierda**. Android Auto decide el lado y la app no puede moverlo; como con los [Accesos directos](#category_shortcuts), puede cambiar de lado según el ajuste de posición del conductor, pero no está garantizado.
  - <span class="sp-mirror legacy">Duplicación «ScreenOnAuto (Legacy)»</span>: una columna que dibuja la propia app, en la **esquina inferior derecha** de forma predeterminada; [Alinear los botones a la izquierda](#legacy_buttons_left) la lleva a la esquina inferior izquierda, y [las separaciones](#legacy_gaps) ajustan su distancia a los bordes.
- Ocultación automática: en la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span>, los botones de función se ocultan junto con los accesos directos tras 5 segundos de inactividad y vuelven cuando tocas la pantalla del coche; en la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>, Android Auto decide cuándo se ocultan.

#### Botón Bloquear orientación {#map_action_force_landscape}

Activa o desactiva Bloquear orientación de momento, sin cambiar el ajuste [Bloquear la orientación al conectar](#force_landscape); la siguiente conexión vuelve a seguir el ajuste. Activado de forma predeterminada.

#### Botón Atenuación automática {#map_action_auto_dim}

Activa o desactiva [Atenuar pantalla automáticamente](#auto_dim): el mismo interruptor que en los ajustes. Cuando la pantalla del teléfono se ha [apagado](#root_screen_off), es la forma más rápida de recuperarla.

#### Botón Atenuación nocturna {#map_action_night_dim}

Activa o desactiva la [Atenuación nocturna](#night_dim) de momento, por ejemplo al entrar en un túnel. Se mantiene hasta que el coche vuelva a cambiar entre día y noche; con [Cuándo atenuar](#night_dim_trigger) en Siempre, hasta que Android Auto se desconecte. Atenúa según el ajuste de [Intensidad](#night_dim_strength).

#### Botones Atrás, Inicio y Apps recientes {#map_action_nav}

Las tres teclas de navegación del teléfono, que funcionan tanto si el teléfono usa gestos como botones. Con Shizuku o root conectado envían pulsaciones de tecla reales; si no, necesitan [Reenvío táctil](#accessibility_access).

### Posición de los botones {#category_button_placement}

Esta sección afecta solo a la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span>. Los botones de la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span> los dibuja Android Auto y no se pueden mover.

#### Alinear los botones a la izquierda {#legacy_buttons_left}

Lleva los [botones de función](#category_control_buttons) y los [accesos directos](#category_shortcuts) a la izquierda: para coches con el volante a la derecha, o cuando los controles propios de la unidad principal tapan el lado derecho.

#### Evitar la barra de navegación del teléfono {#legacy_buttons_dodge_nav}

Cuando la barra de navegación del teléfono se ve en la duplicación, aparta los botones de ella para que no se solapen. Necesita Android 11 o posterior (los teléfonos más antiguos no muestran la fila). Mientras está activado, las cuatro separaciones de abajo están atenuadas: es una colocación o la otra.

#### Separaciones de botones y accesos directos {#legacy_gaps}

Cuatro distancias en dp (0–400, predeterminado 16): los botones de función respecto al lateral y al borde inferior, y los accesos directos respecto al lateral y al borde superior. Úsalas para sacar los botones de ScreenOnAuto de debajo de los de la propia unidad principal. Si un valor es demasiado grande, los botones se quedan dentro de la pantalla en lugar de salirse de ella.

## Avanzado {#advanced}

### Orientación de la pantalla {#category_orientation}

#### Bloquear la orientación al conectar {#force_landscape}

Bloquea el teléfono en una orientación cuando se conecta Android Auto, para que la duplicación no gire cuando gira el teléfono y para que un teléfono en horizontal llene una pantalla ancha del coche. Actúa una sola vez, en el momento de conectar; después, el [Botón Bloquear orientación](#map_action_force_landscape) del coche lo libera o lo vuelve a aplicar. Necesita el permiso [Mostrar sobre otras apps](#overlay_access).

#### Orientación {#force_orientation_mode}

Hacia dónde bloquear: **Horizontal** (predeterminado), **Vertical** o **Detectar según la pantalla del coche**: horizontal cuando el área que la duplicación recibe realmente en el coche es más ancha que alta, vertical cuando es más alta. Sigue a una pantalla dividida que cambie esa forma.

#### Modo horizontal invertido {#force_landscape_reverse}

Gira un teléfono en horizontal hacia el otro lado, para un soporte que lo sujeta al revés. Atenuado en vertical.

### Ajuste de pantalla {#category_display_adjust}

#### Duplicación dibujada por la app {#self_draw}

La app dibuja ella misma la imagen del teléfono en el coche, en lugar de dejar que el sistema la escale. Así la pantalla dividida ya no deforma la imagen, y los ajustes de ancho/alto de abajo funcionan igual tanto si los configuras antes como durante una conexión. Gasta un poco más de batería.

Un cambio se aplica la **próxima vez que empiece la duplicación**: a propósito, no cambia en mitad de una sesión.

#### Retraso de vídeo {#video_delay}

Cuando la imagen va por delante del sonido (por ejemplo, en una unidad principal Android que reproduce Android Auto mediante una app receptora, donde el sonido llega tarde), retiene la imagen entre 0–2000 milisegundos para que ambos coincidan. Necesita [Duplicación dibujada por la app](#self_draw); los cambios se aplican al instante.

- Retener fotogramas usa memoria y GPU adicionales. Si el audio y el vídeo se desfasan porque el teléfono o la unidad principal ya van justos de recursos, puede empeorar las cosas.
- Los toques siguen actuando sobre la pantalla del teléfono tal como está **ahora**, no sobre la imagen retrasada.

#### Tamaño fijo de la duplicación {#nav_fixed_size}

Solo en la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>. La duplicación mantiene su tamaño cuando el coche pasa a pantalla dividida, así que no se deforma, aunque parte de ella puede quedar recortada. Lo mejor es configurarlo antes de conectar.

#### Mantener la duplicación al mostrar botones {#nav_ignore_strip}

Solo en la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>, activado de forma predeterminada. La franja de botones de Android Auto aparece y se oculta por sí sola, y cada vez ocupa un poco de espacio. Con esta opción activada, la aparición de la franja no hace que la duplicación cambie de tamaño y salte; los cambios reales de diseño, como la pantalla dividida, se siguen aplicando. Atenuado mientras [Tamaño fijo de la duplicación](#nav_fixed_size) está activado.

#### Ajustar ancho de la duplicación, Ajustar alto de la duplicación {#vd_gap}

El área que el coche da a la duplicación (el marco verde discontinuo de abajo) rara vez tiene la misma forma que la pantalla del teléfono. La imagen del teléfono se escala de forma uniforme para caber dentro, así que el lado que no coincide queda con franjas negras: cuando la imagen es **más ancha** que el área (por ejemplo, porque la pantalla dividida la ha estrechado), las franjas quedan **arriba y abajo**; cuando es **más estrecha**, quedan **a izquierda y derecha**.

Estos dos ajustes agrandan o reducen el marco en el que se encaja la duplicación, en píxeles. Un valor **negativo** lo agranda: la imagen crece y las franjas se reducen, a costa de que parte de la imagen sobresalga del área útil y quede recortada (rayado en las figuras).

<div class="sp-figs">
<figure><img src="/images/settings/gap-tb-before.svg" alt="La imagen es más ancha que el área y deja franjas arriba y abajo"><figcaption>Franjas arriba y abajo</figcaption></figure>
<figure><img src="/images/settings/gap-tb-after.svg" alt="Con un ajuste de ancho negativo, la imagen crece hasta llenar arriba y abajo y sobresale por el borde derecho"><figcaption><b>Ancho</b> negativo: sin franjas arriba y abajo, el lado derecho sobresale</figcaption></figure>
<figure><img src="/images/settings/gap-lr-before.svg" alt="La imagen es más estrecha que el área y deja franjas a izquierda y derecha"><figcaption>Franjas a izquierda y derecha</figcaption></figure>
<figure><img src="/images/settings/gap-lr-after.svg" alt="Con un ajuste de alto negativo, la imagen crece hasta llenar izquierda y derecha y sobresale por el borde inferior"><figcaption><b>Alto</b> negativo: sin franjas a izquierda y derecha, la parte inferior sobresale</figcaption></figure>
</div>

- **Franjas arriba y abajo → pon el *ancho* en negativo.** Un marco más ancho deja crecer la imagen, también en altura, y rellena las franjas.
- **Franjas a izquierda y derecha → pon el *alto* en negativo.** Un marco más alto deja crecer la imagen, también en anchura, y rellena las franjas.
- La duplicación está anclada en la **esquina superior izquierda** del área, así que lo que sobresale pasa del borde **derecho** (ancho) o del **inferior** (alto); no se reparte entre ambos lados. Lo que queda recortado ahí, botones incluidos, no se puede pulsar, así que detente en el valor en que las franjas justo desaparecen.
- Un valor **positivo** hace lo contrario: reduce el marco, para unidades principales que recortan los bordes de la imagen, y devuelve a la vista un borde recortado (con una pequeña franja negra).
- Es más preciso con [Duplicación dibujada por la app](#self_draw) activada. Sin ella, ajusta los valores **con el coche conectado**: en la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>, un valor negativo ya configurado al empezar la duplicación puede aplastar la imagen en lugar de agrandarla.

Pulsa el texto para introducir un valor (guardar un valor distinto de cero activa el interruptor); el interruptor tras el separador lo desactiva un momento sin perder el valor, para que puedas comparar.

> **💡 Para no tener ninguna franja negra**
>
> Con Shizuku o root, activa [Ajustar la pantalla del teléfono a la del coche](#root_display_override). Da a la pantalla del teléfono las mismas proporciones que el área, así que la duplicación la llena exactamente: sin franjas y sin nada recortado. Mientras está activado, estos dos ajustes quedan en pausa.

<div class="sp-figs one">
<figure><img src="/images/settings/gap-match.svg" alt="Con la pantalla del teléfono ajustada a la del coche, la imagen llena exactamente el área útil"><figcaption>Ajustar la pantalla del teléfono a la del coche: encaje exacto</figcaption></figure>
</div>

### Atenuación nocturna {#category_night_dim}

#### Atenuar la pantalla del coche {#night_dim}

Oscurece la duplicación en el coche por la noche, para que una app del teléfono muy blanca no deslumbre en la oscuridad.

- En la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span>, o con [Duplicación dibujada por la app](#self_draw) activada, solo se oscurece la imagen del coche.
- En la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span> sin Duplicación dibujada por la app, la atenuación es una capa oscura sobre la pantalla del teléfono, así que **el teléfono también se oscurece**. Para eso necesita el permiso [Mostrar sobre otras apps](#overlay_access).
- Para desactivarla o activarla un momento, usa el [Botón Atenuación nocturna](#map_action_night_dim) en el coche.

#### Cuándo atenuar {#night_dim_trigger}

**Cuando el coche pasa al modo nocturno** (predeterminado): atenúa de noche y vuelve a la normalidad de día. **Siempre**: atenúa mientras Android Auto esté conectado.

#### Intensidad {#night_dim_strength}

Cuánto oscurece: 10%–80% (predeterminado 50%). El [Botón Atenuación nocturna](#map_action_night_dim) también lo usa.

### Inicio desde el coche {#category_car_start}

#### Iniciar la duplicación en segundo plano {#silent_car_start}

Cuando la duplicación [empieza desde el coche](#auto_start_mirror), la pantalla de ajustes de ScreenOnAuto no pasa al primer plano del teléfono ni se queda en Apps recientes. El diálogo de captura sigue apareciendo.

> **💡 Consejo**
>
> Añade el [permiso de duplicación concedido por ADB](/docs/es/grant-mirror-permission-via-adb/) y el diálogo de captura también desaparece: pulsa una entrada en el coche y en el teléfono no aparece nada; la duplicación simplemente empieza, sin tocar el teléfono. Hasta que desbloquees el teléfono, el coche muestra su pantalla de bloqueo.

#### Compartir solo la pantalla completa {#full_screen_share_only}

Desde Android 14, el diálogo de captura pregunta primero si compartir una app o toda la pantalla, y tienes que abrir ese menú cada vez. Con esta opción activada, el diálogo ofrece solo la pantalla completa. Aparece en Android 14 y posteriores. Si duplicas una sola app eligiéndola en ese diálogo (la forma de hacerlo sin el permiso por ADB), déjala desactivada; con el permiso por ADB, usa [Duplicar solo esta app](#single_app_mirror).

¿Sigues viendo las dos opciones? Android 16 tiene una anulación de compatibilidad en las Opciones de desarrollador (`OVERRIDE_DISABLE_MEDIA_PROJECTION_SINGLE_APP_OPTION`) que las recupera; comprueba que no esté activada.

## Funciones con privilegios {#root_features}

Las funciones de esta página necesitan [Shizuku](https://shizuku.rikka.app/) o root, porque cambian ajustes del sistema que una app normal no puede tocar. Cada una restablece el ajuste original del teléfono cuando termina la duplicación.

### Conexión {#root_status}

El recuadro de arriba indica si Shizuku o root está conectado; su botón sirve para **Conceder acceso**, **Conectar** o **Desconectar**. Si la conexión se pierde (porque Shizuku se reinicia, por ejemplo), se vuelve a conectar sola.

Un servidor Shizuku iniciado por ADB se apaga tanto al conectar el teléfono al coche por USB como al desconectarlo: el teléfono entra y sale del modo accesorio, lo que reinicia ADB y se lleva a Shizuku por delante. La depuración inalámbrica usa el mismo ADB, así que no ayuda. El root y las conexiones inalámbricas de Android Auto no se ven afectados.

Basta con iniciar Shizuku otra vez: ScreenOnAuto se reconecta solo. Para ahorrarte incluso eso, usa [Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next) (un fork que continúa el desarrollo de Shizuku; Shizuku no recibe actualizaciones desde mayo de 2025) y activa su watchdog y el modo TCP: tras un reinicio de ADB, el watchdog vuelve a iniciar el servidor mediante el modo TCP en pocos segundos y ScreenOnAuto se reconecta solo. El modo TCP hay que activarlo una vez después de cada reinicio del teléfono, desde un ordenador o por depuración inalámbrica; mientras está activo, los dispositivos de la misma red pueden intentar conectarse (el teléfono te pide permiso).

### ¿No se detecta Root? {#root_force}

Si el gestor de root está oculto o renombrado, la app no ve el root y el recuadro de conexión nunca lo ofrece. Al pulsar esta fila se pide root directamente a su. Solo aparece mientras no se detecta root y no hay nada conectado.

### Funciones {#category_root_features}

#### Apagar la pantalla del teléfono {#root_screen_off}

Cuando actúa [Atenuar pantalla automáticamente](#auto_dim), apaga la retroiluminación del teléfono en lugar de atenuarla. Necesita Atenuar pantalla automáticamente activado.

Solo se apaga la pantalla: **el teléfono no se suspende**. Las apps y el sistema siguen funcionando, la duplicación sigue en el coche y puedes seguir usando el teléfono desde el coche. Pero la pantalla táctil se apaga con la pantalla, así que **tocar la pantalla del teléfono no hace nada** y no la vuelve a encender.

Para recuperar la pantalla: pulsa el [Botón Atenuación automática](#map_action_auto_dim) en el coche, detén la duplicación o desconecta Android Auto, o pulsa el botón de encendido **dos veces** (la primera pulsación es la que suspende el sistema).

#### Inyección táctil real {#root_touch_injection}

Envía los toques en la pantalla del coche al teléfono como movimientos reales del dedo, así que mantener pulsado, arrastrar y los gestos con varios dedos funcionan, y el servicio de accesibilidad del [Reenvío táctil](#accessibility_access) deja de ser necesario. El efecto completo se da en la <span class="sp-mirror legacy">duplicación «ScreenOnAuto (Legacy)»</span>: desde Android Auto, la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span> solo recibe toques, desplazamientos, deslizamientos rápidos y pellizcos, un límite de Android Auto.

#### Pantalla táctil virtual {#root_virtual_touch}

Entrega esos toques a través de un dispositivo de pantalla táctil virtual, para que las apps de gestos que leen la pantalla táctil directamente (como GMD Gestures) también los reciban. Necesita [Inyección táctil real](#root_touch_injection) activada.

#### Seguir el modo día/noche del coche {#root_follow_car_night}

Durante la duplicación, el tema claro u oscuro del teléfono cambia con el modo día/noche de Android Auto y después vuelve al ajuste propio del teléfono. Android 10 y posteriores.

#### Leer el modo desde Android Auto {#root_car_night_from_aa}

Aparece cuando el interruptor anterior está activado y se aplica a la <span class="sp-mirror nav">duplicación «ScreenOnAuto»</span>. En algunos teléfonos (algunos modelos de Samsung, por ejemplo) el modo día/noche que recibe la app es incorrecto, así que el teléfono nunca cambia con el coche; esta opción lee en su lugar el estado día/noche del propio Android Auto. Déjala desactivada si el teléfono ya sigue al coche.

#### Tamaño de fuente durante la duplicación {#root_mirror_font_scale}

Usa otro tamaño de fuente durante la duplicación —texto más grande en el coche, por ejemplo— y después restablece el del teléfono. Las opciones son los mismos pasos que en los Ajustes del propio teléfono.

#### Modo de navegación durante la duplicación {#root_mirror_nav_mode}

Cambia a navegación por gestos, con 2 botones o con 3 botones durante la duplicación y vuelve después (Android 10 y posteriores). En la pantalla dividida de una unidad principal vertical, por ejemplo, los gestos dejan más espacio a las apps. Los modos que el teléfono no tiene aparecen como no disponibles.

#### Pantalla de inicio durante la duplicación {#root_mirror_home}

Convierte otro launcher en la pantalla de inicio predeterminada del teléfono durante la duplicación y restablece la tuya después. Sirve para tener una pantalla de inicio organizada para el coche, o para teléfonos cuyo launcher de fábrica reordena los iconos cuando cambia la [forma de la pantalla](#category_root_display) (algunos modelos Xiaomi con HyperOS).

### Forma de la pantalla {#category_root_display}

#### Ajustar la pantalla del teléfono a la del coche {#root_display_override}

Durante la duplicación, da a la pantalla del teléfono la relación de aspecto del coche, para que la duplicación llene el coche sin franjas negras y no se deforme en pantalla dividida. Se aplica en directo, sin reconectar.

<div class="sp-figs">
<figure><img src="/images/settings/override-before.svg" alt="Antes: la imagen llena el teléfono, pero en la pantalla más ancha del coche deja franjas a izquierda y derecha"><figcaption>Antes: la forma del teléfono difiere de la del coche y deja franjas en el coche</figcaption></figure>
<figure><img src="/images/settings/override-after.svg" alt="Después: la pantalla del teléfono adopta la forma del coche, con franjas finas en el teléfono y un encaje exacto en el coche"><figcaption>Después: el teléfono adopta la forma del coche, y el coche queda lleno exactamente</figcaption></figure>
<figure><img src="/images/settings/override-narrow-before.svg" alt="Antes: el área útil del coche es más estrecha que la imagen del teléfono y deja franjas arriba y abajo"><figcaption>Antes: un área más estrecha en el coche (pantalla dividida, por ejemplo) deja franjas arriba y abajo</figcaption></figure>
<figure><img src="/images/settings/override-narrow-after.svg" alt="Después: la pantalla del teléfono adopta la forma del coche, con franjas a izquierda y derecha en el teléfono y un encaje exacto en el coche"><figcaption>Después: el teléfono adopta la forma del coche, y el coche queda lleno exactamente</figcaption></figure>
<figure><img src="/images/settings/override-portrait-before.svg" alt="Antes: en una unidad principal vertical grande, la imagen del teléfono en vertical es más estrecha que el área y deja franjas a izquierda y derecha"><figcaption>Antes: una unidad principal vertical grande, teléfono en vertical, franjas a izquierda y derecha en el coche</figcaption></figure>
<figure><img src="/images/settings/override-portrait-after.svg" alt="Después: la pantalla del teléfono adopta la forma vertical del coche, con franjas arriba y abajo en el teléfono y un encaje exacto en el coche"><figcaption>Después: el teléfono adopta la forma vertical del coche, y el coche queda lleno exactamente</figcaption></figure>
</div>

Funciona tanto si el coche muestra franjas a izquierda y derecha (primer par) como arriba y abajo (segundo par), y también en una unidad principal vertical grande (tercer par: el teléfono queda en vertical; con [Orientación](#force_orientation_mode) en detectar según la pantalla del coche, se bloquea en vertical solo). La pantalla física del teléfono conserva su forma, así que con esta opción activada **el propio teléfono** muestra franjas en el sentido contrario (arriba y abajo cuando el coche las tenía a izquierda y derecha, y al revés): es lo esperado; la duplicación en el coche lo llena exactamente.

- Es un cambio a nivel de sistema que **se mantiene tras reiniciar** hasta que se deshace. Normalmente, detener la duplicación o desconectar lo deshace automáticamente.
- Mientras la pantalla del teléfono tiene la forma cambiada, aparece arriba en esta sección un aviso ámbar con un botón **Restaurar**.
- Si la pantalla del teléfono se queda alguna vez con una forma incorrecta y no puedes abrir la app, ejecuta `adb shell wm size reset` y `adb shell wm density reset` desde un ordenador.

#### Añadir un acceso directo de restauración a la pantalla de inicio {#root_display_shortcut}

Pone un acceso directo «Restaurar pantalla» en la pantalla de inicio, para que un toque restaure la pantalla del teléfono sin abrir la app.

#### Lo que se aplicará {#root_display_derived}

El tamaño al que se cambiará la pantalla del teléfono, calculado a partir del tamaño del coche, y lo que el sistema ha aceptado realmente. Mientras no se haya medido el coche, espera a la próxima vez que se abra la duplicación en Android Auto.

#### Tamaño de la pantalla del coche {#car_size}

Uno por duplicación (el coche da a las dos duplicaciones áreas de distinto tamaño). De forma predeterminada es el tamaño detectado, marcado como **Automático**. Cámbialo solo si la detección es incorrecta: ancho y alto comparten un mismo diálogo, y un campo vacío usa el valor detectado (160–8192).

#### Densidad del teléfono {#phone_density}

Opcional, una por duplicación (72–640 dpi). Los números más altos agrandan el texto y los botones en la pantalla del coche; los más bajos hacen que quepa más a la vez. Si la bajas tanto que el lado más corto del teléfono supera los 600dp, la mayoría de las apps y el sistema pasan a diseños de tableta (dos columnas, navegación lateral); el diálogo te avisa mientras escribes si eso va a ocurrir. Déjalo vacío para no cambiarla.

</div>
