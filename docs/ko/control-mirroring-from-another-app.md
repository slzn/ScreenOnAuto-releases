---
title: "다른 앱에서 미러링 제어"
description: "인텐트로 미러링을 시작·중지·전환합니다. 자동화 앱, 바로가기 또는 ADB에서 사용할 수 있습니다."
lang: ko
slug: control-mirroring-from-another-app
permalink: /docs/ko/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# 다른 앱에서 미러링 제어


**v1.8.4**부터 ScreenOnAuto는 미러링을 시작·중지·전환하는 인텐트 세 가지를 받습니다.
인텐트를 보낼 수 있는 것이라면 무엇이든 — 자동화 앱, 홈 화면 바로가기, ADB 스크립트,
직접 만든 앱 — 이것으로 미러링을 제어할 수 있어, 손으로 켜는 대신 주행 설정의 나머지와
함께 켜지게 할 수 있습니다.

## 세 가지 액션

| 액션 | 동작 |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | 미러링을 시작합니다. 이미 실행 중이면 아무것도 하지 않습니다. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | 미러링을 중지합니다. 실행 중이 아니면 아무것도 하지 않습니다. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | 실행 중이면 중지하고, 아니면 시작합니다. |

같은 액션을 반복해도 언제나 안전합니다. 이미 실행 중인 미러링에 시작을 보내면 세션을
허물고 다시 세우는 대신 무시하므로, 블루투스가 연결될 때마다 실행되는 작업이 이미 올라와
있는 미러링을 끊지 않습니다.

## 자동화 앱에서 설정하기

대부분의 자동화 앱은 같은 요소를 저마다의 이름으로 제공합니다. 보통 "인텐트 보내기"
동작이며, 대략 다음과 같은 필드를 가집니다:

| 필드 | 값 |
|---|---|
| Action | 위 세 액션 중 하나 |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (브로드캐스트는 `…MirrorControlReceiver`) |
| Target | Activity (또는 Broadcast) |

특별한 이유가 없다면 액티비티를 쓰십시오. 다음 두 절에서 차이와, 브로드캐스트로는 미러링을
*시작*하는 것을 믿을 수 없는 이유를 설명합니다. 어느 쪽이든 **Class** 필드는 선택이
아닙니다. 비워 두면 브로드캐스트는 아예 도착하지 않습니다.

무언가 동작하지 않으면 아래의 해당 ADB 명령을 먼저 실행해 보십시오. 문제가 인텐트에 있는지,
그것을 보내는 앱에 있는지 알려 줍니다.

## 액티비티 시작하기 (권장)

액션을 `idv.lzn.screenonauto/.MirrorControlActivity`에 **액티비티**로 보냅니다:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

화면에는 ScreenOnAuto가 전혀 나타나지 않고, 최근 사용 앱에도 아무것도 남지 않습니다.
차에 도착하기 *전에* 시작을 보내도 됩니다. 미러링은 기다리고 있다가 차량 화면이 준비되면
스스로 이어받습니다.

> **ℹ️ 참고**
> 미러링이 시작될 때 Android는 여전히 화면 캡처 권한을 요청합니다. 완전히 손대지 않게
> 하려면 ADB로 한 번 미리 부여하십시오 —
> [ADB로 미러링 권한 부여](/docs/ko/grant-mirror-permission-via-adb/) 참조.

## 브로드캐스트 보내기

같은 세 액션은 **브로드캐스트**로도 동작하며, 이때는
`idv.lzn.screenonauto/.MirrorControlReceiver`로 보냅니다:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

이 방식으로 보낸 **중지**는 완전히 조용합니다. 창도 없고 깜빡임도 없습니다.

컴포넌트를 지정하는 것은 선택이 아닙니다. 요즘 Android는 보내는 쪽이 어느 컴포넌트를 향한
것인지 밝히지 않으면 브로드캐스트를 앱에 전달하지 않습니다. 액션만 담긴 브로드캐스트는
버려지고, 어디에도 오류 없이 아무 일도 일어나지 않습니다.

> **⚠️ 경고**
> 브로드캐스트로 보낸 **시작**은 신뢰할 수 없고, 실패해도 조용히 실패합니다. 먼저 두 가지를
> 허용해야 하는데, 많은 휴대전화에서 둘 다 기본으로 꺼져 있습니다:
>
> - **자동 실행.** 많은 휴대전화의 전원 관리 기능이 브로드캐스트로 앱을 깨우는 것 자체를
>   막습니다. 배터리 또는 휴대전화 관리자 설정에서 자동 실행 관리 항목을 찾아 ScreenOnAuto를
>   허용하십시오. 휴대전화가 만류할 수도 있습니다.
> - **다른 앱 위에 표시.** Android 앱 설정에서 ScreenOnAuto에 부여하십시오.
>
> 시작만 필요하다면 위의 액티비티를 쓰십시오. 둘 다 필요 없습니다.

## 문제 해결

- **아무 일도 일어나지 않음** — 컴포넌트를 지정했는지 확인하십시오. 지정하지 않은
  브로드캐스트는 ScreenOnAuto가 관여하기도 전에 버려집니다.
- **중지는 되는데 시작이 안 됨** — 브로드캐스트를 보내고 있고, 위 경고의 두 권한 중 하나가
  없습니다. 액티비티로 보내십시오.
- **권한 대화상자가 매번 나타남** — [ADB](/docs/ko/grant-mirror-permission-via-adb/)로 미리 부여하지 않았다면
  정상입니다.
- **미러링이 이미 실행 중일 때 시작이 안 됨** — 이것도 정상입니다. 위를 참조하십시오.
