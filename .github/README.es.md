# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md)

*🌐 [Sitio web oficial](https://screenonauto.lzn.idv.tw/es/)*

> Duplica la pantalla de tu teléfono Android en la pantalla de Android Auto, con soporte para controles de medios.
>
> **Gratuito. Ninguna función requiere pago adicional.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Pantalla del teléfono duplicada en la pantalla de Android Auto, junto al mapa"></p>

> [!IMPORTANT]
> **Cómo instalar depende de tu versión de Android:**
> - **Android 14 o superior** — instala **solo desde Google Play**: inscríbete en una ronda cada media hora e instala en un plazo de 25 minutos (la app **no aparece en las búsquedas** de Play Store). [Inscribirse →](https://screenonauto.lzn.idv.tw/join/?lang=es)
> - **Android 13 o inferior** — instala el APK con KingInstaller ([pasos abajo](#instalación)) o desde Google Play.

## Funciones

- **Duplicación de pantalla** — Captura y duplica la pantalla del teléfono en la unidad principal de Android Auto en tiempo real
- **Proxy de sesión de medios** — Controla cualquier app de medios del teléfono desde la interfaz de medios nativa de Android Auto
- **Atenuación automática** — Atenúa automáticamente el brillo del teléfono durante la duplicación inactiva (retardo de 15/30/60/120 s)
- **Inicio automático** — Comienza a duplicar automáticamente cuando Android Auto se conecta
- **Control Externo** — Inicia, detén o alterna la duplicación con un intent, desde una app de automatización, un acceso directo o ADB — [Controlar la Duplicación desde Otra App](https://github.com/slzn/ScreenOnAuto-releases/wiki/Controlar-la-Duplicación-desde-Otra-App)
- **Evitar suspensión** — Evita que la pantalla del teléfono se apague durante la duplicación
- **Detener al desconectar** — Detiene la duplicación automáticamente cuando Android Auto se desconecta
- **Lanzar app automáticamente** — Abre automáticamente una app elegida en el teléfono cuando empieza la duplicación con Android Auto conectado
- **Duplicar solo esta app** *(Android 15+)* — Envía al coche solo la app de inicio automático en lugar de toda la pantalla, manteniendo privado el resto del teléfono. Necesita el permiso de Captura de pantalla [concedido previamente por ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permiso-de-Duplicación-por-ADB); la pantalla del coche queda en blanco mientras estás fuera de esa app
- **Forzar horizontal** — Fuerza el teléfono a modo horizontal durante la duplicación; se activa al conectar, con botón en pantalla
- **Atajos de apps** — Añade hasta 4 botones de acceso rápido a apps en la pantalla de duplicación de Android Auto
- **Botones en pantalla** — Muestra u oculta individualmente los botones de la pantalla de duplicación en la página Botones en pantalla: Forzar horizontal, Atenuación automática y Atrás / Inicio / Apps recientes del teléfono (hasta 4 a la vez)
- **Posición de los botones** — En la duplicación Legacy, alinea los botones a la izquierda o esquiva automáticamente la barra de navegación del teléfono
- **Ajuste de la duplicación** — Recorta el ancho/alto de la duplicación en los ajustes avanzados para unidades que cortan los bordes; allí, la **Duplicación dibujada por la app** (experimental) también evita la distorsión en la vista dividida
- **Reenvío táctil** *(experimental)* — Toca, desplaza, desliza y pellizca para hacer zoom en la pantalla de Android Auto para controlar el teléfono

## Funciones con privilegios

Opcional — requiere [Shizuku](https://shizuku.rikka.app/) o root. Sin ellos, todo lo demás funciona exactamente igual.

| Función | Qué hace |
|---|---|
| **Apagar la pantalla del teléfono** | Apaga el panel del teléfono cuando se activa la Atenuación automática, mientras el coche sigue mostrando la duplicación — ahorra batería y evita que el teléfono ilumine el habitáculo de noche |
| **Inyección táctil real** | Reenvía los movimientos reales de tu dedo en lugar de gestos sintetizados, así que **mantener pulsado, arrastrar y multitáctil** funcionan en la duplicación Legacy |
| **Botones de navegación del teléfono** | Atrás / Inicio / Apps recientes funcionan **sin ningún Servicio de accesibilidad activado**. Activa los botones en **Botones en pantalla → Botones de función** |
| **Ajustar la pantalla del teléfono a la del coche** | Remodela la pantalla del teléfono a la relación de aspecto de la unidad del coche durante la duplicación, eliminando de raíz las barras negras y la distorsión en pantalla dividida — la pantalla del coche se mide automáticamente |

¿Shizuku se detuvo al conectar el coche, o la pantalla no se despierta? Consulta [Solución de problemas](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cómo-Usar#solución-de-problemas).

## Requisitos

- Android 7.0 (API 24) o superior
- Android Auto instalado en el teléfono
- Un vehículo compatible con Android Auto
- *(Opcional)* [Shizuku](https://shizuku.rikka.app/) o root — para las [Funciones con privilegios](#funciones-con-privilegios)

## Instalación

### Android 14 o superior — instalar desde Google Play

Android Auto solo ejecuta apps instaladas desde Play Store, y Android 14+ bloquea el método de KingInstaller — así que instala mediante las pruebas internas de Google Play. Es la misma app completa que en GitHub, pero no aparece en las búsquedas de Play Store: [**inscríbete en la página de instalación**](https://screenonauto.lzn.idv.tw/join/?lang=es). Cada 30 minutos se abre una nueva ronda y tu enlace de instalación aparece cuando empieza la ronda. Pasos completos: [**Unirse a la Beta**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Unirse-a-la-Beta).

### Android 13 o inferior — sideload con KingInstaller

> **¿Por qué KingInstaller?**  
> Android Auto exige que las apps se instalen desde Google Play Store.
> Instalar el APK directamente registra tu navegador o gestor de archivos como origen
> de la instalación, y Android Auto lo rechaza. KingInstaller instala APKs indicando
> Google Play Store como origen de la instalación.

#### Paso 1 — Instala KingInstaller

1. Ve a [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) y descarga el `KingInstaller.apk` más reciente
2. Permite que el navegador o el gestor de archivos **instale apps desconocidas** — Android lo pregunta la primera vez que abres un APK
3. Abre `KingInstaller.apk` y pulsa **Instalar**

#### Paso 2 — Instala ScreenOnAuto con KingInstaller

1. Descarga el `ScreenOnAuto-*.apk` más reciente desde la [última versión](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Abre **KingInstaller**, pulsa el **icono de carpeta** y selecciona el APK descargado
3. Pulsa **Instalar** — KingInstaller lo instalará como si viniera de Google Play Store

#### Paso 3 — Concede los permisos

Abre **ScreenOnAuto** y sigue las indicaciones de la app para conceder los permisos necesarios.

## Verificar en Android Auto

Esto aplica **sin importar cómo instalaste** — sideload con KingInstaller *o* Google Play.

En el teléfono, ve a **Ajustes → Dispositivos conectados → Android Auto → Personalizar menú de aplicaciones**.
Deberías ver estas **dos** entradas de ScreenOnAuto:

| Icono | Nombre | Función |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Duplica la pantalla del teléfono a pantalla completa — sustituye el área del mapa |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Duplica la pantalla del teléfono por la vía de proyección Legacy — puede mostrarse junto al mapa |

Las versiones anteriores de Android Auto también muestran una tercera entrada, **ScreenOnAuto Media Controller**. Si no la ves, es normal — el control multimedia funciona igual.
Si falta cualquiera de las **dos** entradas anteriores, reinstala — con KingInstaller si fue sideload, o deja que termine la instalación de Play — y vuelve a abrir Android Auto.

¿Todo listo? Consulta **[Cómo Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cómo-Usar)** para iniciar la duplicación en el coche.

## Permisos

| Permiso | Necesario para |
|---|---|
| Captura de pantalla (MediaProjection) | Duplicación de pantalla |
| Acceso a notificaciones | Proxy de sesión de medios |
| Mostrar sobre otras apps | Atenuación automática y Forzar horizontal |
| Servicio de accesibilidad | Reenvío táctil y botones Atrás / Inicio / Recientes (no hace falta con las funciones privilegiadas) |

> **Consejo:** para evitar el diálogo de permiso de captura de pantalla en cada inicio, puedes concederlo una sola vez vía ADB — consulta [Conceder Permiso de Duplicación por ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permiso-de-Duplicación-por-ADB). Esto es también lo que habilita **Duplicar solo esta app**.

## Limitaciones conocidas

- **La pantalla del teléfono debe permanecer encendida durante la duplicación** — la duplicación muestra lo que hay en la pantalla del teléfono. Usa **Evitar suspensión** para mantenerla activa y **Atenuación automática** para ahorrar batería; con Shizuku o root, Apagar la pantalla del teléfono elimina esta limitación.
- **El contenido protegido por DRM no se puede duplicar** — apps como Netflix o Disney+ muestran una pantalla negra en la duplicación. Es una restricción de la plataforma Android que la app no puede evitar.
- La **barra de navegación de Android Auto** en la pantalla del coche la dibuja el propio Android Auto y no se puede ocultar.

## Aviso legal

Mantén siempre la vista en la carretera — no uses esta app mientras conduces.

Este proyecto no está afiliado, respaldado ni patrocinado por Google. Android Auto es una marca de Google LLC.

## Agradecimientos especiales

- **Jurek Harla** — rediseñó los iconos de ScreenOnAuto, ScreenOnAuto (Legacy) y Media Controller para que encajen en la forma redonda de los iconos de Android (v1.9.2).

## Apoya el proyecto

Si esta app te resulta útil, puedes hacer una donación o invitarme a un bubble tea 🧋

[![Donar vía PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Invítame a un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
