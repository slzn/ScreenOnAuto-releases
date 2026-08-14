# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md)

*🌐 [공식 웹사이트](https://screenonauto.lzn.idv.tw/ko/)*

> Android 휴대전화 화면을 Android Auto 디스플레이에 미러링하고, 미디어 버튼 제어도 지원합니다.
>
> **무료로 사용할 수 있으며, 추가 결제가 필요한 기능은 없습니다.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Android Auto 디스플레이에 지도와 나란히 미러링된 휴대전화 화면"></p>

> [!IMPORTANT]
> **설치 방법은 Android 버전에 따라 다릅니다:**
> - **Android 14 이상** — **Google Play로만** 설치합니다(초대 기반 — 앱은 Play 스토어에서 **검색되지 않습니다**). [테스터 목록 참여하기 →](https://github.com/slzn/ScreenOnAuto-releases/wiki/베타-테스트-참여)
> - **Android 13 이하** — KingInstaller로 APK를 사이드로드하거나([아래 단계](#설치)), Google Play로 설치합니다.

## 기능

- **화면 미러링** — 휴대전화 화면을 실시간으로 캡처해 Android Auto 헤드유닛에 미러링합니다
- **미디어 세션 프록시** — Android Auto의 기본 미디어 화면에서 휴대전화의 모든 미디어 앱을 제어합니다
- **자동 화면 어둡게** — 미러링 중 조작이 없으면 휴대전화 밝기를 자동으로 낮춥니다 (15/30/60/120초 지연)
- **자동 미러링 시작** — Android Auto가 연결되면 자동으로 미러링을 시작합니다
- **절전 방지** — 미러링 중 휴대전화 화면이 꺼지지 않도록 합니다
- **연결 해제 시 중지** — Android Auto 연결이 끊기면 미러링을 자동으로 중지합니다
- **앱 자동 실행** — 미러링이 시작되고 Android Auto가 연결되어 있으면 지정한 앱을 휴대전화에서 자동으로 실행합니다
- **가로 모드 강제** — 미러링 중 휴대전화를 가로 모드로 고정합니다. 연결 시 자동으로 적용되며 화면 버튼으로 전환할 수 있습니다
- **실행 바로가기** — Android Auto 미러링 화면에 최대 4개의 앱 실행 버튼을 추가합니다
- **화면 버튼** — 고급 설정에서 미러링 화면의 버튼을 개별적으로 표시하거나 숨깁니다: 가로 모드 강제, 자동 화면 어둡게, 그리고 휴대전화의 뒤로 / 홈 / 최근 앱 (동시에 최대 4개)
- **버튼 위치** — Legacy 미러링에서 화면 버튼을 왼쪽으로 정렬하거나, 휴대전화 내비게이션 바를 자동으로 피하게 합니다
- **미러링 화면 조정** — 가장자리가 잘리는 헤드유닛을 위해 고급 설정에서 미러링 너비와 높이를 조정합니다
- **터치 전달** *(실험적)* — Android Auto 화면에서 탭, 스크롤, 플링, 핀치 줌으로 휴대전화를 조작합니다

## 특권 기능

일반적인 Android API로는 할 수 없는 일을 가능하게 합니다. **[Shizuku](https://shizuku.rikka.app/) 또는 루트**가 필요하며, 전적으로 선택 사항입니다. 둘 다 없는 휴대전화에서는 **달라지는 것이 없습니다** — 이 섹션은 숨겨지고 나머지 기능은 지금까지와 똑같이 동작합니다.

| 기능 | 하는 일 |
|---|---|
| **휴대전화 화면 끄기** | 자동 화면 어둡게가 작동할 때 휴대전화 패널을 끄고, 차량 화면에는 미러링이 계속 표시됩니다 — 배터리를 아끼고, 밤에 휴대전화가 실내를 밝히는 것을 막아 줍니다 |
| **실제 터치 입력 주입** | 합성된 제스처 대신 실제 손가락 움직임을 전달하므로 Legacy 미러링에서 **길게 누르기, 드래그, 멀티터치**가 동작합니다 |
| **휴대전화 내비게이션 버튼** | **접근성 서비스를 전혀 켜지 않아도** 뒤로 / 홈 / 최근 앱이 동작합니다. **고급 → Android Auto 화면 버튼**에서 켜세요 |

> [!IMPORTANT]
> **ADB로 시작한 Shizuku 서버는 USB로 연결하면 종료됩니다.** Android Auto에 USB로 연결하면
> 휴대전화가 액세서리 모드로 전환되는데, 이때 ADB가 다시 시작되면서 Shizuku 서버도 함께
> 종료됩니다. 무선 디버깅으로도 피할 수 없습니다 — 둘 다 같은 ADB를 사용하기 때문입니다.
> 연결한 직후 특권 기능이 멈춘다면 Shizuku를 다시 시작하세요 — 그 뒤로는 ScreenOnAuto가
> 스스로 다시 연결합니다. Android Auto를 **먼저** 연결하고 Shizuku를 **나중에** 시작하면
> 이 과정을 한 번에 끝낼 수 있습니다. 루트 사용자와 무선 Android Auto 연결은 영향을 받지
> 않습니다(연결하는 것이 없으므로 ADB도 그대로입니다).

> **화면을 다시 켜려면:** 터치스크린도 패널과 함께 꺼지므로 휴대전화를 만져도 반응하지
> 않습니다. 미러링을 중지하거나 Android Auto 연결을 해제하세요. 또는 휴대전화의 전원
> 버튼을 **두 번** 누르세요(Android는 패널이 꺼진 것을 몰랐으므로, 첫 번째 누름이 실제로
> 기기를 절전 상태로 보냅니다). 차량 화면의 **자동 화면 어둡게** 버튼도 쓸 수 있지만,
> **고급 → Android Auto 화면 버튼**에서 켜 두었을 때만 해당합니다 — 기본값은 꺼짐입니다.

## 요구 사항

- Android 7.0 (API 24) 이상
- 휴대전화에 Android Auto 설치
- Android Auto를 지원하는 차량
- *(선택 사항)* [Shizuku](https://shizuku.rikka.app/) 또는 루트 — [특권 기능](#특권-기능)을 사용하려면 필요합니다

## 설치

### Android 14 이상 — Google Play로 설치

> **왜 Google Play인가요?**  
> Android Auto는 Play 스토어에서 설치한 앱만 실행하며, Android 14 이상에서는 아래의
> KingInstaller 우회 방법이 차단됩니다 — 따라서 Android Auto가 받아들이는 빌드를 얻는
> 방법은 Play뿐입니다. 설치되는 것은 여전히 **완전한 앱**이며, GitHub의 APK와 같은
> 릴리스가 Play의 내부 테스트 트랙을 통해 전달될 뿐입니다.

이 앱은 **Play 스토어에서 검색되지 않으며**, 설치는 **초대 기반**입니다.
신청 양식과 단계별 안내는 **[베타 테스트 참여](https://github.com/slzn/ScreenOnAuto-releases/wiki/베타-테스트-참여)**
를 참고하세요. 설치한 뒤에는 앱을 실행하고 같은 방식으로 앱 내 권한을 부여하면 됩니다.

### Android 13 이하 — KingInstaller로 사이드로드

> **왜 KingInstaller인가요?**  
> Android Auto는 Google Play 스토어를 통해 설치된 앱을 요구합니다.
> APK를 직접 설치하면 설치 출처가 브라우저나 파일 관리자로 기록되어 Android Auto가
> 거부합니다. KingInstaller는 설치 출처를 Google Play 스토어로 보고하면서 APK를
> 설치합니다.

#### 1단계 — KingInstaller 설치

1. [KingInstaller 릴리스](https://github.com/fcaronte/KingInstaller/releases)에서 최신 `KingInstaller.apk`를 내려받습니다
2. 휴대전화에서 **설정 → 보안 → 브라우저나 파일 관리자에 "출처를 알 수 없는 앱 설치" 허용**
3. `KingInstaller.apk`를 열고 **설치**를 누릅니다

#### 2단계 — KingInstaller로 ScreenOnAuto 설치

1. [최신 릴리스](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)에서 최신 `ScreenOnAuto-*.apk`를 내려받습니다
2. **KingInstaller**를 열고 **폴더 아이콘**을 눌러 내려받은 APK를 선택합니다
3. **설치**를 누릅니다 — KingInstaller가 Google Play 스토어에서 온 것처럼 설치해 줍니다

#### 3단계 — 권한 부여

**ScreenOnAuto**를 실행하고 앱 안내에 따라 필요한 권한을 부여하세요.

## Android Auto에서 확인

**설치 방법과 관계없이** 동일합니다 — KingInstaller 사이드로드든 Google Play든 마찬가지입니다.

휴대전화에서 **설정 → 연결된 기기 → Android Auto → 런처 맞춤설정**으로 이동하세요.
ScreenOnAuto 항목 **세 개**가 보여야 합니다:

| 아이콘 | 이름 | 기능 |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | 휴대전화 화면을 전체 화면으로 미러링합니다 — 지도 영역을 대체해 전체 화면으로 표시합니다 |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Legacy 프로젝션 경로로 휴대전화 화면을 미러링합니다 — 지도와 나란히 표시할 수 있습니다 |
| <img src="../images/icon_media.png" width="48"> | **ScreenOnAuto 미디어 컨트롤러** | Android Auto의 기본 미디어 화면에서 휴대전화의 모든 미디어 앱을 제어합니다 |

세 항목이 모두 보이면 설치가 정상적으로 끝난 것입니다.
하나라도 보이지 않는다면: 사이드로드로 설치한 경우 KingInstaller로 다시 설치해 설치 출처가 Google Play 스토어로 보고되는지 확인하고, Google Play로 설치한 경우 Play 빌드의 설치가 끝났는지 확인한 뒤 Android Auto를 다시 여세요.

준비되셨나요? 차량에서 미러링을 시작하는 방법은 **[사용 방법](https://github.com/slzn/ScreenOnAuto-releases/wiki/사용-방법)** 을 참고하세요.

## 권한

| 권한 | 필요한 기능 |
|---|---|
| 화면 캡처 (MediaProjection) | 화면 미러링 |
| 알림 접근 권한 | 미디어 세션 프록시 |
| 다른 앱 위에 표시 | 자동 화면 어둡게 및 가로 모드 강제 |
| 접근성 서비스 | 터치 전달 *(실험적)* 및 뒤로 / 홈 / 최근 앱 버튼 — [특권 기능](#특권-기능)을 사용하면 둘 다 필요하지 않습니다: 버튼은 백엔드가 연결되는 즉시, 터치 전달은 **실제 터치 입력 주입**을 켜면 동작합니다 |

> **팁:** 실행할 때마다 나오는 화면 캡처 권한 대화상자를 피하려면 ADB로 미리 권한을 부여할 수 있습니다 — [ADB로 미러링 권한 부여](https://github.com/slzn/ScreenOnAuto-releases/wiki/ADB로-미러링-권한-부여)를 참고하세요.

## 알려진 제한 사항

- **미러링 중에는 휴대전화 화면이 켜져 있어야 합니다** — 미러링은 휴대전화 화면에 보이는 내용을 그대로 보여 주므로, 화면이 꺼지거나 잠긴 상태에서는 계속할 수 없습니다. 화면을 켜 두려면 **절전 방지**를, 화면을 끄는 대신 어둡게 해 배터리를 아끼려면 **자동 화면 어둡게**를 사용하세요. *(Shizuku 또는 루트가 있고 **자동 화면 어둡게가 켜져 있다면** [휴대전화 화면 끄기](#특권-기능)가 이 제한을 없애 줍니다 — 미러링은 계속되면서 패널만 꺼집니다.)*
- **DRM으로 보호된 콘텐츠는 미러링할 수 없습니다** — Netflix나 Disney+ 같은 앱은 미러링 화면에 검은 화면으로 표시됩니다. 이는 앱이 우회할 수 없는 Android 플랫폼의 제약입니다.
- 차량 화면의 **Android Auto 내비게이션 바**는 Android Auto가 직접 그리는 것이라 숨길 수 없습니다.

## 면책 조항

항상 전방을 주시하세요 — 운전 중에는 이 앱을 조작하지 마세요.

이 프로젝트는 Google과 제휴, 보증 또는 후원 관계가 없습니다. Android Auto는 Google LLC의 상표입니다.

## 후원

이 앱이 유용하다면 후원하거나 버블티 한 잔 사 주세요 🧋

[![PayPal로 후원](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![버블티 한 잔 사주기](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
