---
title: "Chính sách quyền riêng tư"
description: "ScreenOnAuto làm gì và không làm gì với dữ liệu của bạn: ứng dụng không có quyền truy cập Internet, không thu thập và không chia sẻ gì cả."
lang: vi
slug: privacy-policy
permalink: /docs/vi/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-19
---

# Chính sách quyền riêng tư

ScreenOnAuto là ứng dụng Android do Chih-En Liu phát triển, giúp phản chiếu màn hình điện thoại lên màn hình xe chạy Android Auto. Chính sách này áp dụng cho ứng dụng và trang web screenonauto.lzn.idv.tw, bao gồm trang cài đặt `/join/`.

**Tóm lại: ứng dụng không thu thập dữ liệu cá nhân, không lưu trên bất kỳ máy chủ nào và không chia sẻ với ai.**

## Ứng dụng

### Không truy cập Internet

ScreenOnAuto không yêu cầu quyền Internet của Android, nên không thể gửi dữ liệu ra khỏi điện thoại của bạn. Ứng dụng không chứa thư viện quảng cáo, phân tích, báo cáo sự cố hay theo dõi, và không cần tài khoản.

### Các quyền được dùng để làm gì

Mọi xử lý dưới đây đều diễn ra trên điện thoại của bạn. Những gì rời khỏi điện thoại chỉ đi tới xe của bạn, qua kết nối Android Auto.

| Quyền | Dùng để làm gì |
|---|---|
| Ghi màn hình (MediaProjection) | Ghi lại màn hình điện thoại, hoặc một ứng dụng, và hiển thị lên màn hình xe. Không có gì được quay lại hay lưu trữ. |
| Quyền truy cập thông báo | Đọc các phiên đa phương tiện đang hoạt động (nội dung đang phát, phát/tạm dừng, chuyển bài) cho phần điều khiển đa phương tiện. Nội dung thông báo không được đọc hay lưu trữ. |
| Dịch vụ hỗ trợ tiếp cận | Chuyển thao tác chạm trên màn hình xe thành thao tác chạm trên điện thoại, cùng các nút Quay lại / Màn hình chính / Ứng dụng gần đây. Dịch vụ này không đọc nội dung màn hình và không dùng các sự kiện hỗ trợ tiếp cận mà nó nhận được. |
| Hiển thị trên các ứng dụng khác | Lớp phủ cho Tự động làm tối, Khóa hướng xoay và Làm tối ban đêm. |
| Sửa đổi các tùy chọn cài đặt hệ thống | Khóa xoay màn hình trong khi phản chiếu, trên Android 16 trở lên ở chế độ máy tính bảng. |
| Shizuku hoặc root (không bắt buộc) | Các tính năng đặc quyền: tắt màn hình điện thoại, chèn chạm, các nút điều hướng của điện thoại, và thay đổi kích thước màn hình, mật độ, giao diện, cỡ chữ, chế độ điều hướng và trình chạy mặc định (ứng dụng màn hình chính) của điện thoại trong khi phản chiếu. Các giá trị gốc của điện thoại được khôi phục khi kết thúc phản chiếu. |

### Dữ liệu được lưu

Các tùy chọn của bạn, cùng các giá trị gốc của điện thoại mà ứng dụng khôi phục sau khi phản chiếu (như kích thước màn hình, giao diện hoặc trình chạy mặc định), được lưu trong bộ nhớ riêng của ứng dụng trên điện thoại. Gỡ cài đặt ứng dụng sẽ xóa chúng. Nếu bạn bật sao lưu Android, Android có thể đưa các tùy chọn này vào bản sao lưu trên chính Tài khoản Google của bạn, hoặc sao chép chúng sang điện thoại mới khi bạn chuyển dữ liệu, như với hầu hết ứng dụng khác.

### Google Play

Nếu bạn cài ScreenOnAuto từ Google Play, Google có thể thu thập số liệu thống kê về sự cố và hiệu suất theo cài đặt thiết bị của bạn, rồi chia sẻ với nhà phát triển ở dạng tổng hợp (Android vitals). Việc này do Google xử lý theo [Chính sách quyền riêng tư của Google](https://policies.google.com/privacy?hl=vi).

## Trang web

### Trang cài đặt (`/join/`)

Để trở thành người thử nghiệm, bạn đăng nhập bằng Google trên trang cài đặt. Chỉ địa chỉ email của tài khoản được dùng, để thêm bạn vào danh sách người thử nghiệm Google Play của lượt đó. Bạn sẽ không bao giờ nhận được email, và danh sách bị xóa khi khung giờ cài đặt của lượt kết thúc.

Việc đăng nhập do Google xử lý: trang tải tập lệnh đăng nhập của Google, tập lệnh này có thể đặt cookie của Google và nhận địa chỉ IP của bạn, theo [Chính sách quyền riêng tư của Google](https://policies.google.com/privacy?hl=vi). Sau khi bạn đăng nhập, mã đăng nhập do Google trả về, chứa thông tin Tài khoản Google như địa chỉ email, được giữ trong bộ nhớ phiên của trình duyệt cho đến khi bạn đóng thẻ. Trang gửi mã này tới máy chủ cài đặt (api.screenonauto.lzn.idv.tw); máy chủ nhận địa chỉ IP của bạn trong mỗi yêu cầu nhưng không ghi lại địa chỉ IP hay địa chỉ email của bạn.

### Mọi phần còn lại

Ngoài việc đăng nhập trên trang cài đặt, trang web không dùng công cụ phân tích, theo dõi hay cookie. Lựa chọn giao diện sáng/tối của bạn được lưu trong bộ nhớ cục bộ của trình duyệt. Trang web được lưu trữ trên GitHub Pages và tải phông chữ từ Google Fonts, nên GitHub và Google nhận địa chỉ IP của bạn khi phục vụ trang, theo chính sách quyền riêng tư của riêng họ.

## Báo cáo lỗi bạn gửi

Nếu bạn chọn gửi báo cáo lỗi hoặc nhật ký, chẳng hạn qua đường liên kết Google Drive trong một issue trên GitHub, báo cáo có thể chứa thông tin về thiết bị và các ứng dụng trên thiết bị của bạn. Báo cáo chỉ được dùng để điều tra vấn đề của bạn và sẽ bị xóa khi điều tra xong. Issue trên GitHub là công khai, vì vậy đừng đăng thông tin cá nhân ở đó.

## Trẻ em

ScreenOnAuto không hướng tới trẻ em dưới 13 tuổi và không cố ý thu thập dữ liệu của bất kỳ ai.

## Thay đổi

Nếu chính sách này thay đổi, phiên bản mới sẽ được đăng trên trang này và ngày “Cập nhật lần cuối” bên dưới sẽ thay đổi.

## Liên hệ

Mở một issue trên [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) hoặc gửi email tới screenonauto@gmail.com.
