---
title: "ADB로 미러링 권한 부여"
description: "ADB로 ScreenOnAuto의 화면 캡처 권한을 미리 부여해, 미러링을 시작할 때마다 대화상자가 나타나지 않도록 합니다."
lang: ko
slug: grant-mirror-permission-via-adb
permalink: /docs/ko/grant-mirror-permission-via-adb/
date: 2026-08-14
last_modified_at: 2026-08-14
---

# ADB로 미러링 권한 부여


기본적으로 Android는 ScreenOnAuto가 화면 미러링을 시작할 때마다 권한 대화상자를 표시합니다.
ADB로 **화면 캡처 (MediaProjection)** 권한을 미리 부여해 두면 이 대화상자가 다시는 나타나지 않습니다.

## 사전 준비

- 컴퓨터에 [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) 설치
- 휴대전화에서 USB 디버깅 활성화 (**설정 → 개발자 옵션 → USB 디버깅**)
- USB로 연결된 휴대전화 (또는 Wi-Fi를 통한 ADB)

## 단계

1. 터미널을 엽니다 (Windows에서는 명령 프롬프트 또는 PowerShell).

2. ADB가 기기를 인식하는지 확인합니다:

   ```
   adb devices
   ```

   기기가 `unauthorized`가 아니라 `device`로 표시되어야 합니다.

3. 권한을 부여합니다:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. ScreenOnAuto를 실행하고 미러링을 시작하세요 — 권한 대화상자가 더 이상 나타나지 않습니다.

## 권한 해제

기본 동작(매번 대화상자 표시)으로 되돌리려면:

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## 문제 해결

- **`error: device unauthorized`** — 휴대전화에 "USB 디버깅을 허용하시겠습니까?" 대화상자가 떠 있는지 확인하고 **허용**을 누르세요.
- **대화상자가 계속 나타남** — ScreenOnAuto를 강제 종료한 뒤 다시 실행하세요. 그래도 계속된다면 위 명령으로 권한을 해제했다가 다시 부여하세요.
- **앱을 재설치했거나 Play와 사이드로드 채널을 바꿈** — 앱을 제거하면 부여된 권한도 함께 사라집니다. 다시 설치한 뒤 권한 부여 명령을 다시 실행하세요.
- **재부팅하면 권한이 초기화됨** — 일부 ROM(예: MIUI/HyperOS)에서는 `appops` 권한이 재부팅 후에도 유지되지 않습니다. 재시작할 때마다 명령을 다시 실행하거나 Wi-Fi를 통한 ADB를 사용하세요.
