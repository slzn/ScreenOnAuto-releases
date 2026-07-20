---
title: "منح إذن النسخ المطابق عبر ADB"
description: "امنح إذن تسجيل الشاشة مسبقًا عبر ADB فلا تظهر نافذة الإذن عند كل بدء للنسخ المطابق."
lang: ar
slug: grant-mirror-permission-via-adb
permalink: /docs/ar/grant-mirror-permission-via-adb/
---

# منح إذن النسخ المطابق عبر ADB


يعرض Android افتراضيًا نافذة إذن في كل مرة يبدأ فيها ScreenOnAuto النسخ المطابق للشاشة.
يمكنك منح إذن **تسجيل الشاشة (MediaProjection)** مسبقًا عبر ADB فلا تظهر النافذة مجددًا.

## المتطلبات المسبقة

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) مثبَّت على حاسوبك
- تصحيح أخطاء USB مفعَّل على هاتفك (**الإعدادات ← خيارات المطوّرين ← تصحيح أخطاء USB**)
- الهاتف موصول عبر USB (أو ADB عبر Wi-Fi)

## الخطوات

1. افتح طرفية (موجّه الأوامر / PowerShell على Windows).

2. تأكد من أن ADB يرى جهازك:

   ```
   adb devices
   ```

   ينبغي أن يظهر جهازك بالحالة `device` (لا `unauthorized`).

3. امنح الإذن:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. شغِّل ScreenOnAuto وابدأ النسخ المطابق — ينبغي ألا تظهر نافذة الإذن بعد الآن.

## إلغاء الإذن

لاستعادة السلوك الافتراضي (ظهور النافذة كل مرة):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## استكشاف الأخطاء

- **`error: device unauthorized`** — ابحث عن نافذة «السماح بتصحيح أخطاء USB؟» على هاتفك وانقر **سماح**.
- **النافذة ما زالت تظهر** — أوقف ScreenOnAuto قسريًا وأعد تشغيله. إن استمرت المشكلة فألغِ الإذن وامنحه مجددًا بالأمرين أعلاه.
- **أعدت تثبيت التطبيق (أو بدّلت بين قناتَي Play والتثبيت اليدوي)** — الحذف يمسح الإذن؛ أعد تنفيذ أمر المنح بعد إعادة التثبيت.
- **الإذن يُعاد ضبطه بعد إعادة التشغيل** — على بعض الأنظمة (مثل MIUI/HyperOS) لا تبقى أذونات `appops` بعد إعادة التشغيل. أعد تنفيذ الأمر بعد كل إعادة تشغيل، أو استخدم ADB عبر Wi-Fi.
