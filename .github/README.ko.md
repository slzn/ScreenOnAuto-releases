# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [공식 웹사이트](https://screenonauto.lzn.idv.tw/ko/)*

> Android 휴대전화 화면을 Android Auto 디스플레이에 미러링하고, 미디어 버튼 제어도 지원합니다.
>
> **무료로 사용할 수 있으며, 추가 결제가 필요한 기능은 없습니다.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Android Auto 디스플레이에 지도와 나란히 미러링된 휴대전화 화면"></p>

> [!IMPORTANT]
> **설치 방법:**
> - **권장 — Google Play**, 모든 Android 버전: 30분마다 열리는 회차에 신청하고 25분 안에 설치하세요(앱은 Play 스토어에서 **검색되지 않습니다**). Android Auto가 별도 설정 없이 바로 인식합니다. [신청하기 →](https://screenonauto.lzn.idv.tw/join/?lang=ko)
> - **Android 13 이하** — KingInstaller로 APK를 사이드로드할 수도 있습니다([아래 단계](#대안--android-13-이하-kinginstaller로-사이드로드)).
> - **AAWireless 동글이 있다면?** — Android 버전과 관계없이 APK를 직접 설치할 수도 있습니다([아래 단계](#대안--aawireless-동글-사용)).

## 기능

- **화면 미러링** — 휴대전화 화면을 실시간으로 캡처해 Android Auto 헤드유닛에 미러링합니다
- **미디어 세션 프록시** — Android Auto의 기본 미디어 화면에서 휴대전화의 모든 미디어 앱을 제어합니다
- **자동 화면 어둡게** — 미러링 중 조작이 없으면 휴대전화 밝기를 자동으로 낮춥니다 (15/30/60/120초 지연)
- **야간 어둡게** — 밤에 차량 화면의 미러링을 어둡게 합니다. 차량의 주간/야간 모드를 따르며(항상도 가능), 강도를 조절할 수 있고 화면 전환 버튼도 표시할 수 있습니다. 고급 설정에서 켭니다. ‘ScreenOnAuto’ 미러링에서는 직접 그리기 미러링을 켜지 않은 한 휴대전화 화면도 함께 어두워집니다
- **자동 미러링 시작** — 차량 화면에서 ScreenOnAuto 또는 ScreenOnAuto (Legacy)를 열면 자동으로 미러링을 시작합니다
- **외부 제어** — 자동화 앱, 바로가기 또는 ADB에서 인텐트로 미러링을 시작·중지·전환합니다 — [다른 앱에서 미러링 제어](https://github.com/slzn/ScreenOnAuto-releases/wiki/다른-앱에서-미러링-제어)
- **절전 방지** — 미러링 중 휴대전화 화면이 꺼지지 않도록 합니다
- **연결 해제 시 중지** — Android Auto 연결이 끊기면 미러링을 자동으로 중지합니다
- **앱 자동 실행** — 미러링이 시작되고 Android Auto가 연결되어 있으면 지정한 앱을 휴대전화에서 자동으로 실행합니다
- **이 앱만 미러링** *(Android 15+)* — 전체 화면 대신 자동 실행 앱만 차량으로 보내므로 휴대전화의 나머지 부분은 차량에 나타나지 않습니다. 화면 캡처 권한을 [ADB로 미리 부여](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB로-미러링-권한-부여)해야 하며, 해당 앱에서 벗어나 있는 동안에는 차량 화면이 비어 있습니다
- **화면 방향 고정** — 미러링 중 휴대전화를 가로(양방향) 또는 세로로 고정하거나 차량 화면 모양에 맞춥니다. 연결 시 자동으로 적용되며 화면 버튼으로 전환할 수 있습니다
- **실행 바로가기** — Android Auto 미러링 화면에 최대 4개의 앱 실행 버튼을 추가합니다. 길게 누르면 차량 화면에 표시할 텍스트를 바꿀 수 있습니다
- **화면 버튼** — 화면 버튼 페이지에서 미러링 화면의 버튼을 개별적으로 표시하거나 숨깁니다: 화면 방향 고정, 자동 화면 어둡게, 야간 어둡게, 그리고 휴대전화의 뒤로 / 홈 / 최근 앱 (동시에 최대 4개)
- **버튼 위치** — Legacy 미러링에서 버튼을 왼쪽으로 정렬하거나, 휴대전화 내비게이션 바를 피하게 하거나, 차량 자체 조작 버튼을 가리지 않도록 버튼(바로가기 바 포함)과 가장자리 사이 간격을 설정합니다
- **미러링 화면 조정** — 가장자리가 잘리는 헤드유닛을 위해 고급 설정에서 미러링 너비와 높이를 조정합니다. 같은 곳의 실험적 기능인 **직접 그리기 미러링**은 분할 화면에서의 왜곡도 막아 줍니다
- **터치 전달** *(실험적)* — Android Auto 화면에서 탭, 스크롤, 플링, 핀치 줌으로 휴대전화를 조작합니다

## 특권 기능

선택 사항 — [Shizuku](https://shizuku.rikka.app/) 또는 루트가 필요합니다. 둘 다 없어도 나머지 기능은 그대로 작동합니다.

| 기능 | 하는 일 |
|---|---|
| **휴대전화 화면 끄기** | 자동 화면 어둡게가 작동할 때 휴대전화 패널을 끄고, 차량 화면에는 미러링이 계속 표시됩니다 — 배터리를 아끼고, 밤에 휴대전화가 실내를 밝히는 것을 막아 줍니다 |
| **실제 터치 입력 주입** | 합성된 제스처 대신 실제 손가락 움직임을 전달하므로 Legacy 미러링에서 **길게 누르기, 드래그, 멀티터치**가 동작합니다 |
| **휴대전화 화면을 차량 화면 비율에 맞추기** | 미러링 중 휴대전화 화면을 차량 디스플레이의 화면 비율로 바꿔 검은 여백과 분할 화면의 왜곡을 원인 단계에서 없앱니다 — 차량 화면은 자동으로 측정됩니다 |

Shizuku 또는 루트로 쓸 수 있는 기능이 더 있습니다:

- **휴대전화 내비게이션 버튼** — 접근성 서비스를 켜지 않고도 뒤로 / 홈 / 최근 앱을 사용합니다. **화면 버튼 → 기능 버튼**에서 켜세요
- **휴대전화 다크 모드를 차량 주야간에 맞추기** *(Android 10 이상)* — 미러링 중 Android Auto의 주야간 모드에 맞춰 휴대전화를 라이트/다크 테마로 전환합니다
- **미러링 중 글꼴 크기** — 미러링 중에만 휴대전화 글꼴 크기를 다르게 설정합니다
- **미러링 중 탐색 모드** *(Android 10 이상)* — 미러링 중에만 휴대전화를 동작 탐색, 버튼 2개 탐색 또는 버튼 3개 탐색으로 전환합니다

미러링이 끝나면 휴대전화의 원래 테마, 글꼴 크기, 탐색 모드로 돌아갑니다.

차량에 연결하자 Shizuku가 멈췄거나 화면이 다시 켜지지 않나요? [문제 해결](https://github.com/slzn/ScreenOnAuto-releases/wiki/사용-방법#특권-기능-shizuku--루트)을 참고하세요.

## 요구 사항

- Android 7.0 (API 24) 이상
- 휴대전화에 Android Auto 설치
- Android Auto를 지원하는 차량
- *(선택 사항)* [Shizuku](https://shizuku.rikka.app/) 또는 루트 — [특권 기능](#특권-기능)을 사용하려면 필요합니다

## 설치

### Google Play로 설치(권장)

모든 Android 버전에서 사용할 수 있고, Android Auto가 별도 설정 없이 바로 인식합니다(Android Auto는 Play 스토어에서 설치한 앱만 실행하며, Android 14 이상에서는 KingInstaller 우회 방법이 차단됩니다). Google Play 내부 테스트로 배포되며, GitHub 버전과 같은 전체 앱이지만 Play 스토어에서 검색되지는 않습니다. [**설치 페이지에서 신청**](https://screenonauto.lzn.idv.tw/join/?lang=ko)하세요. 30분마다 새 회차가 열리며, 신청한 회차가 마감되고 몇 분 뒤에 설치 링크가 나타납니다. 전체 단계: [**Google Play 테스트 프로그램으로 설치**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Google-Play-테스트-프로그램으로-설치).

### 대안 — Android 13 이하: KingInstaller로 사이드로드

> **왜 KingInstaller인가요?**  
> Android Auto는 Google Play 스토어를 통해 설치된 앱을 요구합니다.
> APK를 직접 설치하면 설치 출처가 브라우저나 파일 관리자로 기록되어 Android Auto가
> 거부합니다. KingInstaller는 설치 출처를 Google Play 스토어로 보고하면서 APK를
> 설치합니다.

#### 1단계 — KingInstaller 설치

1. [KingInstaller 릴리스](https://github.com/fcaronte/KingInstaller/releases)에서 최신 `KingInstaller.apk`를 내려받습니다
2. 브라우저나 파일 관리자에서 **알 수 없는 앱 설치**를 허용하세요 — APK를 처음 열 때 Android가 물어봅니다
3. `KingInstaller.apk`를 열고 **설치**를 누릅니다

#### 2단계 — KingInstaller로 ScreenOnAuto 설치

1. [최신 릴리스](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)에서 최신 `ScreenOnAuto-*.apk`를 내려받습니다
2. **KingInstaller**를 열고 **폴더 아이콘**을 눌러 내려받은 APK를 선택합니다
3. **설치**를 누릅니다 — KingInstaller가 Google Play 스토어에서 온 것처럼 설치해 줍니다

### 대안 — AAWireless 동글 사용

> **이럴 때 사용하세요:** AAWireless 동글이 있고 Google Play를 거치지 않고 APK를 직접 설치하고 싶은 경우입니다. Play로 설치할 수 없는 환경(예: 샌드박스 Google Play를 쓰는 GrapheneOS)에서도 쓸 수 있습니다. 실제 차량에서는 Android Auto가 자체 **알 수 없는 출처** 설정을 무시합니다. 동글의 Developer Mode가 있어야 이 설정이 적용되므로 **동글 없이는 이 방법을 쓸 수 없습니다**.

1. [최신 릴리스](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)에서 최신 `ScreenOnAuto-*.apk`를 내려받아 설치합니다 — Android가 물어보면 브라우저나 파일 관리자에서 **알 수 없는 앱 설치**를 허용하세요
2. 동글을 통해 휴대전화를 차량에 연결합니다. **AAWireless** 앱에서 **Passthrough mode**를 끄고 **Developer Mode**를 켭니다
3. 휴대전화의 Android Auto 설정에서 **개발자 설정**을 열고, **애플리케이션 모드**를 **개발자**로 설정한 뒤 **알 수 없는 출처**를 켭니다
   - 개발자 설정이 보이지 않나요? **버전 및 권한 정보**를 10번 누른 다음 ⋮ 메뉴를 여세요
4. 휴대전화를 재부팅합니다

## Android Auto에서 확인

**설치 방법과 관계없이** 동일합니다 — KingInstaller 사이드로드든 Google Play든 AAWireless 방식이든 마찬가지입니다.

휴대전화에서 **설정 → 연결된 기기 → Android Auto → 런처 맞춤설정**으로 이동하세요.
ScreenOnAuto 항목 **두 개**가 보여야 합니다:

| 아이콘 | 이름 | 기능 |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | 휴대전화 화면을 전체 화면으로 미러링합니다 — 지도 영역을 대체해 전체 화면으로 표시합니다 |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Legacy 프로젝션 경로로 휴대전화 화면을 미러링합니다 — 지도와 나란히 표시할 수 있습니다 |

이전 버전의 Android Auto에서는 세 번째 항목인 **ScreenOnAuto 미디어 컨트롤러**도 표시됩니다. 보이지 않아도 정상이며, 미디어 제어는 그대로 작동합니다.
위의 **두** 항목 중 하나라도 없다면, 사이드로드는 KingInstaller로 다시 설치하고 Play 설치는 설치가 끝났는지 확인한 뒤 Android Auto를 다시 여세요. AAWireless 방식이라면 Developer Mode와 알 수 없는 출처가 여전히 켜져 있는지 확인하세요.

준비되셨나요? 차량에서 미러링을 시작하는 방법은 **[사용 방법](https://github.com/slzn/ScreenOnAuto-releases/wiki/사용-방법)** 을 참고하세요.

## 권한

| 권한 | 필요한 기능 |
|---|---|
| 화면 캡처 (MediaProjection) | 화면 미러링 |
| 알림 접근 권한 | 미디어 세션 프록시 |
| 다른 앱 위에 표시 | 자동 화면 어둡게, 화면 방향 고정 및 야간 어둡게 |
| 접근성 서비스 | 터치 전달 및 뒤로 / 홈 / 최근 앱 버튼 (특권 기능 사용 시 불필요) |

> **팁:** 실행할 때마다 나오는 화면 캡처 권한 대화상자를 피하려면 ADB로 미리 권한을 부여할 수 있습니다 — [ADB로 미러링 권한 부여](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB로-미러링-권한-부여)를 참고하세요. 이것으로 **이 앱만 미러링**도 사용할 수 있게 됩니다.

## 알려진 제한 사항

- **미러링 중에는 휴대전화 화면이 켜져 있어야 합니다** — 미러링은 휴대전화 화면에 보이는 내용을 보여 줍니다. **절전 방지**로 화면을 켜 두고 **자동 화면 어둡게**로 배터리를 아끼세요. Shizuku 또는 루트가 있으면 휴대전화 화면 끄기로 이 제한을 없앨 수 있습니다.
- **DRM으로 보호된 콘텐츠는 미러링할 수 없습니다** — Netflix나 Disney+ 같은 앱은 미러링 화면에 검은 화면으로 표시됩니다. 이는 앱이 우회할 수 없는 Android 플랫폼의 제약입니다.
- **미러링 중 Android Auto의 Google 지도가 검게 변할 수 있습니다(Android 15 이상)** — 앱이 화면을 캡처하는 동안 Android는 민감하다고 판단한 앱을 숨기는데, Google 지도가 그 목록에 들어갈 수 있습니다. **개발자 옵션 → 화면 공유 보호 기능 사용 안함**을 켜면 해결됩니다. 이 설정을 켜면 화면을 공유하는 동안 일회용 코드가 담긴 알림도 숨겨지지 않습니다. 이 설정은 다음에 미러링을 시작할 때부터 적용됩니다. 전체 단계는 [사용 방법](https://github.com/slzn/ScreenOnAuto-releases/wiki/사용-방법#미러링-중-android-auto의-google-지도가-검게-변함)을 참고하세요.
- 차량 화면의 **Android Auto 내비게이션 바**는 Android Auto가 직접 그리는 것이라 숨길 수 없습니다.

## 면책 조항

항상 전방을 주시하세요 — 운전 중에는 이 앱을 조작하지 마세요.

이 프로젝트는 Google과 제휴, 보증 또는 후원 관계가 없습니다. Android Auto는 Google LLC의 상표입니다.

## 특별 감사

- **Jurek Harla** — Android의 둥근 아이콘 모양에 맞도록 ScreenOnAuto, ScreenOnAuto (Legacy), 미디어 컨트롤러 아이콘을 새로 디자인해 주셨습니다 (v1.9.2).

## 후원

이 앱이 유용하다면 후원하거나 버블티 한 잔 사 주세요 🧋

[![PayPal로 후원](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![버블티 한 잔 사주기](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
