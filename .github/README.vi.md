# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [Trang web chính thức](https://screenonauto.lzn.idv.tw/vi/)*

> Phản chiếu màn hình điện thoại Android lên màn hình Android Auto, hỗ trợ điều khiển bằng các nút đa phương tiện.
>
> **Miễn phí. Không có tính năng nào yêu cầu trả thêm tiền.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Màn hình điện thoại được phản chiếu lên màn hình Android Auto, bên cạnh bản đồ"></p>

> [!IMPORTANT]
> **Cách cài đặt tùy thuộc vào phiên bản Android của bạn:**
> - **Android 14 trở lên** — chỉ cài đặt được **qua Google Play**: đăng ký vào một lượt (mở mỗi nửa giờ), rồi cài đặt trong vòng 25 phút (ứng dụng **không tìm thấy được** bằng tìm kiếm trên Cửa hàng Play). [Đăng ký →](https://screenonauto.lzn.idv.tw/join/?lang=vi)
> - **Android 13 trở xuống** — cài APK bằng KingInstaller ([các bước bên dưới](#cài-đặt)), hoặc cài qua Google Play.
> - **Cài qua Play không được và bạn có bộ chuyển AAWireless?** — hãy cài APK trực tiếp ([các bước thay thế](#cách-khác--dùng-bộ-chuyển-aawireless)).

## Tính năng

- **Phản chiếu màn hình** — Ghi lại và phản chiếu màn hình điện thoại lên màn hình xe Android Auto theo thời gian thực
- **Proxy phiên đa phương tiện** — Điều khiển bất kỳ ứng dụng đa phương tiện nào trên điện thoại từ giao diện đa phương tiện gốc của Android Auto
- **Tự động làm tối** — Tự động giảm độ sáng màn hình điện thoại khi không hoạt động trong lúc phản chiếu (sau 15/30/60/120 giây)
- **Làm tối ban đêm** — Làm tối hình phản chiếu trên màn hình xe vào ban đêm, theo chế độ ngày/đêm của xe (hoặc luôn luôn), có thể chỉnh mức độ và tùy chọn nút bật/tắt trên màn hình. Bật trong cài đặt Nâng cao; với phản chiếu “ScreenOnAuto”, màn hình điện thoại cũng tối theo, trừ khi đã bật tự vẽ hình phản chiếu
- **Tự động bắt đầu** — Tự động bắt đầu phản chiếu khi bạn mở ScreenOnAuto hoặc ScreenOnAuto (Legacy) trên màn hình xe
- **Điều khiển từ bên ngoài** — Bắt đầu, dừng hoặc bật/tắt phản chiếu bằng một intent, từ ứng dụng tự động hóa, lối tắt trên màn hình chính hoặc ADB — xem [Điều khiển phản chiếu từ ứng dụng khác](https://github.com/slzn/ScreenOnAuto-releases/wiki/Điều-khiển-phản-chiếu-từ-ứng-dụng-khác)
- **Ngăn màn hình tắt** — Ngăn màn hình điện thoại vào chế độ ngủ trong khi phản chiếu
- **Dừng khi ngắt kết nối** — Tự động dừng phản chiếu khi Android Auto ngắt kết nối
- **Tự động mở ứng dụng** — Tự động mở một ứng dụng đã chọn trên điện thoại khi phản chiếu bắt đầu và Android Auto đang kết nối
- **Chỉ phản chiếu ứng dụng này** *(Android 15+)* — Chỉ gửi lên xe ứng dụng tự động mở thay vì toàn bộ màn hình, phần còn lại của điện thoại vẫn được giữ riêng tư. Cần quyền Ghi màn hình được [cấp trước qua ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cấp-quyền-phản-chiếu-qua-ADB); màn hình xe sẽ trống khi bạn rời khỏi ứng dụng đó
- **Buộc xoay ngang** — Buộc điện thoại xoay ngang trong khi phản chiếu; tự động bật khi kết nối, kèm nút bật/tắt trên màn hình
- **Lối tắt khởi chạy** — Thêm tối đa 4 nút mở nhanh ứng dụng vào màn hình phản chiếu Android Auto
- **Nút trên màn hình** — Hiện hoặc ẩn từng nút trên màn hình phản chiếu ở trang Nút trên màn hình: Buộc xoay ngang, Tự động làm tối, Làm tối ban đêm, và Quay lại / Màn hình chính / Ứng dụng gần đây của điện thoại (tối đa 4 nút cùng lúc)
- **Vị trí nút** — Trên phản chiếu Legacy, căn các nút trên màn hình sang trái hoặc tự động tránh thanh điều hướng của điện thoại
- **Điều chỉnh phản chiếu** — Cắt bớt chiều rộng/chiều cao phản chiếu trong cài đặt Nâng cao cho những màn hình xe bị cắt mép; tùy chọn thử nghiệm **Tự vẽ hình phản chiếu** ở đó còn giúp tránh méo hình khi chia đôi màn hình
- **Chuyển tiếp cảm ứng** *(Thử nghiệm)* — Chạm, cuộn, vuốt nhanh và chụm để thu phóng trên màn hình Android Auto để điều khiển điện thoại

## Tính năng đặc quyền

Tùy chọn — cần [Shizuku](https://shizuku.rikka.app/) hoặc Root. Nếu không có, mọi tính năng khác vẫn hoạt động y như cũ.

| Tính năng | Công dụng |
|---|---|
| **Tắt màn hình điện thoại** | Tắt hẳn màn hình điện thoại khi Tự động làm tối kích hoạt, trong khi xe vẫn hiển thị hình phản chiếu — tiết kiệm pin và không để điện thoại chiếu sáng trong xe vào ban đêm |
| **Chèn chạm thật** | Chuyển tiếp chuyển động ngón tay thật của bạn thay vì cử chỉ tổng hợp, nhờ đó **nhấn giữ, kéo và đa điểm chạm** hoạt động trên phản chiếu Legacy |
| **Nút điều hướng của điện thoại** | Quay lại / Màn hình chính / Ứng dụng gần đây hoạt động mà **không cần bật Dịch vụ hỗ trợ tiếp cận**. Bật các nút trong **Nút trên màn hình → Nút chức năng** |
| **Khớp màn hình điện thoại với xe** | Đổi màn hình điện thoại sang cùng tỉ lệ khung hình với màn hình xe trong khi phản chiếu, nên viền đen và hiện tượng méo hình khi chia đôi màn hình được loại bỏ từ gốc — màn hình xe được đo tự động |

Shizuku dừng lại khi bạn cắm cáp vào xe, hoặc màn hình không sáng lại? Xem [Khắc phục sự cố](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cách-sử-dụng#tính-năng-đặc-quyền-shizuku--root).

## Yêu cầu

- Android 7.0 (API 24) trở lên
- Đã cài Android Auto trên điện thoại
- Xe hỗ trợ Android Auto
- *(Tùy chọn)* [Shizuku](https://shizuku.rikka.app/) hoặc Root — cho các [Tính năng đặc quyền](#tính-năng-đặc-quyền)

## Cài đặt

### Android 14 trở lên — cài qua Google Play

Android Auto chỉ chạy những ứng dụng được cài từ Cửa hàng Play, và Android 14+ chặn cách cài vòng qua KingInstaller — vì vậy hãy cài qua chương trình thử nghiệm nội bộ của Google Play. Đây vẫn là ứng dụng đầy đủ giống như trên GitHub, nhưng không tìm thấy được bằng tìm kiếm trên Cửa hàng Play: [**đăng ký trên trang cài đặt**](https://screenonauto.lzn.idv.tw/join/?lang=vi). Cứ 30 phút lại mở một lượt mới, và liên kết cài đặt của bạn xuất hiện vài phút sau khi lượt của bạn đóng đăng ký. Các bước chi tiết: [**Cài đặt qua chương trình thử nghiệm Google Play**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cài-đặt-qua-chương-trình-thử-nghiệm-Google-Play).

### Android 13 trở xuống — cài bằng KingInstaller

> **Vì sao cần KingInstaller?**  
> Android Auto yêu cầu ứng dụng phải được cài từ Cửa hàng Google Play.
> Cài APK trực tiếp sẽ ghi nguồn cài đặt là trình duyệt hoặc trình quản lý tệp,
> và Android Auto sẽ từ chối ứng dụng đó. KingInstaller cài APK nhưng báo nguồn cài đặt
> là Cửa hàng Google Play.

#### Bước 1 — Cài KingInstaller

1. Vào [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) và tải về `KingInstaller.apk` mới nhất
2. Cho phép trình duyệt hoặc trình quản lý tệp **cài ứng dụng không rõ nguồn gốc** — Android sẽ hỏi ở lần đầu bạn mở một tệp APK
3. Mở `KingInstaller.apk` và nhấn **Cài đặt**

#### Bước 2 — Cài ScreenOnAuto bằng KingInstaller

1. Tải `ScreenOnAuto-*.apk` mới nhất từ [bản phát hành mới nhất](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Mở **KingInstaller**, nhấn **biểu tượng thư mục** và chọn tệp APK vừa tải
3. Nhấn **Install** — KingInstaller sẽ cài ứng dụng như thể nó đến từ Cửa hàng Google Play

### Cách khác — dùng bộ chuyển AAWireless

> **Khi nào dùng cách này:** cài qua Google Play không thành công — ví dụ trên GrapheneOS với Google Play chạy trong sandbox — và bạn có bộ chuyển AAWireless. Developer Mode của nó cho phép Android Auto hiển thị cả ứng dụng không cài từ Cửa hàng Play, nên có thể cài APK trực tiếp.

1. Tải `ScreenOnAuto-*.apk` mới nhất từ [bản phát hành mới nhất](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) rồi cài đặt — nếu Android hỏi, hãy cho phép trình duyệt hoặc trình quản lý tệp **cài ứng dụng không rõ nguồn gốc**
2. Kết nối điện thoại với xe qua bộ chuyển. Trong ứng dụng **AAWireless**, tắt **Passthrough mode** và bật **Developer Mode**
3. Trong phần cài đặt Android Auto trên điện thoại, mở **Cài đặt cho nhà phát triển**, đặt **Chế độ ứng dụng** thành **Nhà phát triển** và bật **Nguồn không xác định**
   - Không thấy Cài đặt cho nhà phát triển? Nhấn **Thông tin về phiên bản và quyền** 10 lần, rồi mở menu ⋮
4. Khởi động lại điện thoại

## Kiểm tra trong Android Auto

Bước này áp dụng **dù bạn cài bằng cách nào** — KingInstaller, Google Play *hay* cách dùng AAWireless.

Trên điện thoại, vào **Cài đặt → Thiết bị đã kết nối → Android Auto → Tùy chỉnh trình chạy**.
Bạn sẽ thấy **hai** mục ScreenOnAuto sau:

| Biểu tượng | Tên | Chức năng |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Phản chiếu toàn màn hình điện thoại — thay thế vùng bản đồ để hiển thị toàn màn hình |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Phản chiếu màn hình điện thoại theo cách chiếu Legacy — có thể hiển thị bên cạnh bản đồ |

Android Auto phiên bản cũ còn có mục thứ ba, **Trình điều khiển đa phương tiện ScreenOnAuto**. Không thấy mục này là bình thường — điều khiển đa phương tiện vẫn hoạt động.
Nếu thiếu một trong **hai** mục ở trên, hãy cài lại — bằng KingInstaller nếu cài APK, hoặc đợi Google Play cài xong — rồi mở lại Android Auto. Nếu dùng cách AAWireless, hãy kiểm tra Developer Mode và Nguồn không xác định vẫn đang bật.

Sẵn sàng rồi? Xem **[Cách sử dụng](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cách-sử-dụng)** để bắt đầu phản chiếu trên xe.

## Quyền

| Quyền | Cần cho |
|---|---|
| Ghi màn hình (MediaProjection) | Phản chiếu màn hình |
| Quyền truy cập thông báo | Proxy phiên đa phương tiện |
| Hiển thị trên các ứng dụng khác | Tự động làm tối, Buộc xoay ngang & Làm tối ban đêm |
| Dịch vụ hỗ trợ tiếp cận | Chuyển tiếp cảm ứng & các nút Quay lại / Màn hình chính / Ứng dụng gần đây (không cần khi dùng tính năng đặc quyền) |

> **Mẹo:** Để hộp thoại xin quyền Ghi màn hình không hiện ra mỗi lần mở, bạn có thể cấp trước quyền này qua ADB — xem [Cấp quyền phản chiếu qua ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cấp-quyền-phản-chiếu-qua-ADB). Đây cũng là điều kiện để dùng **Chỉ phản chiếu ứng dụng này**.

## Hạn chế đã biết

- **Màn hình điện thoại phải luôn bật trong khi phản chiếu** — hình phản chiếu chính là những gì đang hiện trên màn hình điện thoại. Dùng **Ngăn màn hình tắt** để giữ màn hình sáng và **Tự động làm tối** để tiết kiệm pin; với Shizuku hoặc Root, Tắt màn hình điện thoại sẽ gỡ bỏ hạn chế này.
- **Không thể phản chiếu nội dung được bảo vệ bằng DRM** — các ứng dụng như Netflix hay Disney+ sẽ hiện màn hình đen trong hình phản chiếu. Đây là giới hạn của nền tảng Android mà ứng dụng không thể vượt qua.
- **Google Maps của Android Auto có thể bị đen khi đang phản chiếu (Android 15+)** — trong lúc có ứng dụng ghi màn hình, Android sẽ ẩn những ứng dụng mà nó cho là nhạy cảm, và Google Maps có thể nằm trong danh sách đó. Để khắc phục, hãy bật **Tùy chọn cho nhà phát triển → Tắt tính năng bảo vệ khi chia sẻ màn hình**; khi đó Android cũng sẽ không ẩn các thông báo chứa mã dùng một lần trong lúc bạn chia sẻ màn hình nữa. Cài đặt có hiệu lực từ lần bắt đầu phản chiếu tiếp theo; xem [Cách sử dụng](https://github.com/slzn/ScreenOnAuto-releases/wiki/Cách-sử-dụng#google-maps-của-android-auto-bị-đen-khi-đang-phản-chiếu) để biết đầy đủ các bước.
- **Thanh điều hướng Android Auto** trên màn hình xe do chính Android Auto vẽ ra và không thể ẩn đi.

## Tuyên bố miễn trừ

Luôn tập trung nhìn đường — không thao tác ứng dụng này khi đang lái xe.

Dự án này không liên kết với, không được Google xác nhận hay tài trợ. Android Auto là nhãn hiệu của Google LLC.

## Lời cảm ơn đặc biệt

- **Jurek Harla** — thiết kế lại biểu tượng ScreenOnAuto, ScreenOnAuto (Legacy) và Trình điều khiển đa phương tiện để vừa với hình dạng biểu tượng tròn của Android (v1.9.2).

## Ủng hộ

Nếu thấy ứng dụng hữu ích, bạn có thể ủng hộ hoặc mời tôi một ly trà sữa 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
