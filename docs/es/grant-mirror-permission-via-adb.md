---
title: "Conceder Permiso de Duplicación por ADB"
description: "Concede el permiso de captura de pantalla de ScreenOnAuto por ADB para que el diálogo no aparezca en cada inicio de la duplicación."
lang: es
slug: grant-mirror-permission-via-adb
permalink: /docs/es/grant-mirror-permission-via-adb/
date: 2026-07-16
last_modified_at: 2026-07-16
---

# Conceder Permiso de Duplicación por ADB


Por defecto, Android muestra un diálogo de permiso cada vez que ScreenOnAuto inicia la
duplicación de pantalla. Puedes conceder por adelantado el permiso de **Captura de
pantalla (MediaProjection)** vía ADB para que el diálogo no vuelva a aparecer.

## Requisitos previos

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) instalado en el ordenador
- Depuración USB activada en el teléfono (**Ajustes → Opciones de desarrollador → Depuración USB**)
- Teléfono conectado por USB (o ADB por Wi-Fi)

## Pasos

1. Abre una terminal (Símbolo del sistema / PowerShell en Windows).

2. Comprueba que ADB detecta el dispositivo:

   ```
   adb devices
   ```

   El dispositivo debe aparecer como `device` (no `unauthorized`).

3. Concede el permiso:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Abre ScreenOnAuto e inicia la duplicación — el diálogo de permiso ya no debería aparecer.

## Revocar el permiso

Para restaurar el comportamiento predeterminado (diálogo en cada inicio):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Solución de problemas

- **`error: device unauthorized`** — Busca el diálogo "¿Permitir depuración USB?" en el teléfono y pulsa **Permitir**.
- **El diálogo sigue apareciendo** — Fuerza el cierre de ScreenOnAuto y vuelve a abrirla. Si persiste, revoca y vuelve a conceder con los comandos de arriba.
- **Reinstalaste la app (o cambiaste entre los canales Play y sideload)** — desinstalar borra la concesión; vuelve a ejecutar el comando tras reinstalar.
- **El permiso se pierde al reiniciar** — En algunas ROMs (p. ej. MIUI/HyperOS), las concesiones de `appops` no sobreviven al reinicio. Vuelve a ejecutar el comando tras cada reinicio, o usa ADB por Wi-Fi.
