# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Deutsch](README.de.md)

> Duplica la pantalla de tu teléfono Android en la pantalla de Android Auto, con soporte para controles de medios.
>
> **Gratuito. Ninguna función requiere pago adicional.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Pantalla del teléfono duplicada en la pantalla de Android Auto, junto al mapa"></p>

> [!IMPORTANT]
> **Cómo instalar depende de tu versión de Android:**
> - **Android 14 o superior** — instala **solo desde Google Play** (por invitación — la app **no aparece en las búsquedas** de Play Store). [Unirse a la lista de probadores →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Unirse-a-la-Beta)
> - **Android 13 o inferior** — instala el APK con KingInstaller ([pasos abajo](#instalación)) o desde Google Play.

## Funciones

- **Duplicación de pantalla** — Captura y duplica la pantalla del teléfono en la unidad principal de Android Auto en tiempo real
- **Proxy de sesión de medios** — Controla cualquier app de medios del teléfono desde la interfaz de medios nativa de Android Auto
- **Atenuación automática** — Atenúa automáticamente el brillo del teléfono durante la duplicación inactiva (retardo de 15/30/60/120 s)
- **Inicio automático** — Comienza a duplicar automáticamente cuando Android Auto se conecta
- **Evitar suspensión** — Evita que la pantalla del teléfono se apague durante la duplicación
- **Detener al desconectar** — Detiene la duplicación automáticamente cuando Android Auto se desconecta
- **Lanzar app automáticamente** — Abre automáticamente una app elegida en el teléfono cuando empieza la duplicación con Android Auto conectado
- **Forzar horizontal** — Fuerza el teléfono a modo horizontal durante la duplicación; se activa al conectar, con botón en pantalla
- **Atajos de apps** — Añade hasta 4 botones de acceso rápido a apps en la pantalla de duplicación de Android Auto
- **Botones en pantalla** — Muestra u oculta individualmente los botones de la pantalla de duplicación en los ajustes avanzados: Forzar horizontal, Atenuación automática y Atrás / Inicio / Apps recientes del teléfono (hasta 4 a la vez)
- **Posición de los botones** — En la duplicación Legacy, alinea los botones a la izquierda o esquiva automáticamente la barra de navegación del teléfono
- **Ajuste de la duplicación** — Recorta el ancho/alto de la duplicación en los ajustes avanzados para unidades que cortan los bordes
- **Reenvío táctil** *(experimental)* — Toca/desplaza/desliza en la pantalla de Android Auto para controlar el teléfono

## Requisitos

- Android 7.0 (API 24) o superior
- Android Auto instalado en el teléfono
- Un vehículo compatible con Android Auto

## Instalación

### Android 14 o superior — instalar desde Google Play

> **¿Por qué Google Play?**  
> Android Auto solo ejecuta apps instaladas desde Play Store, y Android 14+ bloquea
> el método alternativo con KingInstaller descrito abajo — así que Play es la única
> forma de obtener una versión que Android Auto acepte. Lo que instalas sigue siendo
> la **app completa** — la misma versión que el APK de GitHub, solo que distribuida
> por el canal de pruebas internas de Play.

La app **no aparece en las búsquedas de Play Store** — la instalación es **por invitación**.
Consulta **[Unirse a la Beta](https://github.com/slzn/ScreenOnAuto-releases/wiki/Unirse-a-la-Beta)**
para el formulario de inscripción y las instrucciones paso a paso. Tras instalar, abre la app y
concede los permisos solicitados normalmente.

### Android 13 o inferior — sideload con KingInstaller

> **¿Por qué KingInstaller?**  
> Android Auto exige que las apps se instalen desde Google Play Store.
> Instalar el APK directamente registra tu navegador o gestor de archivos como origen
> de la instalación, y Android Auto lo rechaza. KingInstaller instala APKs indicando
> Google Play Store como origen de la instalación.

#### Paso 1 — Instala KingInstaller

1. Ve a [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) y descarga el `KingInstaller.apk` más reciente
2. En el teléfono: **Ajustes → Seguridad → Activa "Instalar apps desconocidas"** para tu navegador o gestor de archivos
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
Deberías ver **tres** entradas de ScreenOnAuto:

| Icono | Nombre | Función |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Duplica la pantalla del teléfono a pantalla completa — sustituye el área del mapa |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Duplica la pantalla del teléfono por la vía de proyección Legacy — puede mostrarse junto al mapa |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Controla cualquier app de medios del teléfono desde la interfaz de medios nativa de Android Auto |

Si aparecen las tres entradas, la instalación fue correcta.
Si falta alguna: en una instalación por sideload, reinstala con KingInstaller y asegúrate de que registre Google Play Store como origen; en una instalación por Google Play, espera a que termine la instalación y vuelve a abrir Android Auto.

¿Todo listo? Consulta **[Cómo Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cómo-Usar)** para iniciar la duplicación en el coche.

## Permisos

| Permiso | Necesario para |
|---|---|
| Captura de pantalla (MediaProjection) | Duplicación de pantalla |
| Acceso a notificaciones | Proxy de sesión de medios |
| Mostrar sobre otras apps | Atenuación automática y Forzar horizontal |
| Servicio de accesibilidad | Reenvío táctil *(experimental)* y los botones Atrás / Inicio / Apps recientes |

> **Consejo:** para evitar el diálogo de permiso de captura de pantalla en cada inicio, puedes concederlo una sola vez vía ADB — consulta [Conceder Permiso de Duplicación por ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permiso-de-Duplicación-por-ADB).

## Limitaciones conocidas

- **La pantalla del teléfono debe permanecer encendida durante la duplicación** — la duplicación muestra exactamente lo que hay en la pantalla del teléfono, así que no puede continuar con la pantalla apagada o bloqueada. Usa **Evitar suspensión** para mantener la pantalla activa y **Atenuación automática** para oscurecerla y ahorrar batería en lugar de apagarla.
- **El contenido protegido por DRM no se puede duplicar** — apps como Netflix o Disney+ muestran una pantalla negra en la duplicación. Es una restricción de la plataforma Android que la app no puede evitar.
- La **barra de navegación de Android Auto** en la pantalla del coche la dibuja el propio Android Auto y no se puede ocultar.

## Aviso legal

Mantén siempre la vista en la carretera — no uses esta app mientras conduces.

Este proyecto no está afiliado, respaldado ni patrocinado por Google. Android Auto es una marca de Google LLC.

## Apoya el proyecto

Si esta app te resulta útil, puedes hacer una donación o invitarme a un bubble tea 🧋

[![Donar vía PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Invítame a un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
