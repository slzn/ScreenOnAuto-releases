---
title: "Política de privacidad"
description: "Qué hace y qué no hace ScreenOnAuto con tus datos: la app no tiene permiso de acceso a internet, no recopila nada y no comparte nada."
lang: es
slug: privacy-policy
permalink: /docs/es/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-19
---

# Política de privacidad

ScreenOnAuto es una app de Android, desarrollada por Chih-En Liu, que duplica la pantalla del teléfono en una unidad principal con Android Auto. Esta política cubre la app y su sitio web, screenonauto.lzn.idv.tw, incluida la página de instalación en `/join/`.

**En resumen: la app no recopila datos personales, no los guarda en ningún servidor y no los comparte con nadie.**

## La app

### Sin acceso a internet

ScreenOnAuto no solicita el permiso de internet de Android, así que no puede enviar datos fuera de tu teléfono. No incluye bibliotecas de anuncios, analíticas, informes de fallos ni seguimiento, y no necesita cuenta.

### Para qué se usan los permisos

Todo lo siguiente ocurre en tu teléfono. Lo que sale de él va solo a tu coche, a través de la conexión de Android Auto.

| Permiso | Para qué se usa |
|---|---|
| Captura de pantalla (MediaProjection) | Capturar la pantalla del teléfono, o una sola app, y mostrarla en la pantalla del coche. No se graba ni se guarda nada. |
| Acceso a notificaciones | Leer las sesiones multimedia activas (qué se está reproduciendo, reproducir/pausar, saltar) para los controles multimedia. El contenido de las notificaciones no se lee ni se guarda. |
| Servicio de accesibilidad | Convertir los toques en la pantalla del coche en toques en el teléfono, y los botones Atrás / Inicio / Recientes. No lee el contenido de la pantalla ni usa los eventos de accesibilidad que recibe. |
| Mostrar sobre otras apps | Las superposiciones de Atenuación automática, Bloquear orientación y Atenuación nocturna. |
| Modificar ajustes del sistema | Bloquear la rotación de la pantalla durante la duplicación, en Android 16 y posteriores en modo tablet. |
| Shizuku o root (opcional) | Las funciones privilegiadas: apagar la pantalla del teléfono, la inyección táctil, los botones de navegación del teléfono y cambiar el tamaño de pantalla, la densidad, el tema, el tamaño de fuente, el modo de navegación y el launcher predeterminado (aplicación de pantalla de inicio) del teléfono durante la duplicación. Los valores propios del teléfono se restauran al terminar la duplicación. |

### Qué se guarda

Tus ajustes, y los valores originales del teléfono que la app restaura después de duplicar (como el tamaño de pantalla, el tema o el launcher predeterminado), se guardan en el almacenamiento propio de la app en tu teléfono. Al desinstalar la app se borran. Si tienes activada la copia de seguridad de Android, Android puede incluir estos ajustes en la copia de tu propia cuenta de Google, o copiarlos a un teléfono nuevo cuando transfieres tus datos, como hace con la mayoría de las apps.

### Google Play

Si instalas ScreenOnAuto desde Google Play, Google puede recopilar estadísticas de fallos y rendimiento según los ajustes de tu dispositivo y compartirlas de forma agregada con el desarrollador (Android vitals). Google lo gestiona conforme a la [Política de privacidad de Google](https://policies.google.com/privacy?hl=es).

## El sitio web

### Página de instalación (`/join/`)

Para ser tester, inicias sesión con Google en la página de instalación. Solo se usa la dirección de correo de tu cuenta, para añadirte a la lista de testers de Google Play de esa ronda. Nunca se te envían correos, y la lista se borra cuando termina la ventana de instalación de la ronda.

El inicio de sesión lo gestiona Google: la página carga el script de inicio de sesión de Google, que puede establecer cookies de Google y recibe tu dirección IP, conforme a la [Política de privacidad de Google](https://policies.google.com/privacy?hl=es). Tras iniciar sesión, el token que devuelve Google, que contiene datos de tu cuenta de Google como la dirección de correo, se guarda en el almacenamiento de sesión del navegador hasta que cierras la pestaña. La página lo envía al servidor de instalación (api.screenonauto.lzn.idv.tw), que recibe tu dirección IP en cada solicitud, pero no registra ni tu dirección IP ni tu correo.

### Todo lo demás

Aparte del inicio de sesión en la página de instalación, el sitio no usa analíticas, seguimiento ni cookies. Tu elección de tema claro/oscuro se guarda en el almacenamiento local del navegador. El sitio está alojado en GitHub Pages y carga sus fuentes desde Google Fonts, así que GitHub y Google reciben tu dirección IP al servir las páginas, conforme a sus propias políticas de privacidad.

## Informes de errores que envías

Si decides enviar un informe de errores o un registro, por ejemplo mediante un enlace de Google Drive en una issue de GitHub, puede contener información sobre tu dispositivo y las apps que tiene. Se usa solo para investigar tu problema y se borra cuando termina la investigación. Las issues de GitHub son públicas, así que no publiques información personal en ellas.

## Menores

ScreenOnAuto no está dirigida a menores de 13 años y no recopila datos de nadie de forma consciente.

## Cambios

Si esta política cambia, la nueva versión se publicará en esta página y cambiará la fecha de «Última actualización» que aparece abajo.

## Contacto

Abre una issue en [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) o escribe a screenonauto@gmail.com.
