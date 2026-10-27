---
title: "Cách sử dụng"
description: "Bắt đầu phản chiếu ScreenOnAuto khi điện thoại đã kết nối: hai mục phản chiếu và sự khác nhau giữa chúng, cùng quy trình khởi động từng bước."
lang: vi
slug: how-to-use
permalink: /docs/vi/how-to-use/
date: 2026-10-15
last_modified_at: 2026-10-27
---

# Cách sử dụng

> **ℹ️ Lưu ý**
> **Trước khi bắt đầu**, hãy chắc chắn rằng:
> - ScreenOnAuto đã được cài và các mục của nó xuất hiện trong trình chạy Android Auto.
> - Bạn đã mở ứng dụng một lần trên điện thoại và cấp các quyền mà ứng dụng yêu cầu.

## Hai mục phản chiếu

Trình chạy ứng dụng của Android Auto hiển thị **hai** mục phản chiếu. Cả hai đều phản chiếu
cùng một màn hình điện thoại — chúng chỉ khác nhau ở *cách* hiển thị hình phản chiếu trên màn hình xe:

![Trình chạy Android Auto hiển thị các mục ScreenOnAuto](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="Phản chiếu toàn màn hình ScreenOnAuto"></p>
Toàn màn hình — chiếm chỗ vùng bản đồ
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) bên cạnh bản đồ"></p>
Trên <b>màn hình xe đủ lớn</b>, mục này có thể nằm <b>bên cạnh bản đồ</b> ở chế độ chia đôi màn hình; trên màn hình nhỏ hơn, bản đồ chỉ chuyển xuống chạy nền và chỉ còn hình phản chiếu được hiển thị (nó <b>không</b> thay thế bản đồ)
</td>
</tr>
</table>

Hãy thử cả hai và dùng mục nào hoạt động tốt hơn trên màn hình xe của bạn. Cả hai đều hiện cùng
một hình phản chiếu, và bạn có thể chuyển qua lại bất cứ lúc nào — khi đang phản chiếu, mở
mục còn lại sẽ hiện hình ngay mà không cần xin lại quyền.

> **💡 Mẹo**
> Nếu trước đây bạn đã mở **ScreenOnAuto** (mục toàn màn hình) và giờ muốn dùng
> **ScreenOnAuto (Legacy)**, hãy mở ứng dụng bản đồ (ví dụ Google Maps) trên màn hình xe
> trước, rồi mới bắt đầu phản chiếu Legacy. Việc này đặt lại ứng dụng bản đồ làm bản đồ
> mặc định của màn hình xe, để các chức năng liên quan đến bản đồ không bị phản chiếu toàn màn hình chiếm mất.

## Bắt đầu phản chiếu

### Khi bật Tự động bắt đầu phản chiếu (khuyên dùng)

1. Trong ứng dụng trên điện thoại, bật **Tự động bắt đầu phản chiếu** (chỉ cần thiết lập một lần).
2. Kết nối điện thoại với xe và nhấn vào một mục ScreenOnAuto
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="Biểu tượng ScreenOnAuto"> hoặc
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="Biểu tượng ScreenOnAuto (Legacy)">) trong trình chạy
   Android Auto.
3. Điện thoại sẽ tự hiện hộp thoại xin quyền ghi màn hình — hãy cầm điện thoại lên
   và nhấn **Bắt đầu ngay**:

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Hộp thoại xin quyền ghi màn hình trên điện thoại">

   Nếu điện thoại đang ngủ, màn hình sẽ tự sáng lên. Nếu điện thoại khóa bằng mã PIN, hình mở khóa hoặc vân tay, hãy mở khóa trước; sau đó hộp thoại sẽ hiện ra. Nếu bạn đã cấp quyền trước bằng ADB, sẽ không có hộp thoại: phản chiếu bắt đầu ngay, và xe sẽ hiển thị màn hình khóa cho đến khi bạn mở khóa điện thoại.

4. Màn hình điện thoại của bạn xuất hiện trên màn hình xe:

   ![Màn hình điện thoại được phản chiếu lên màn hình xe](/images/how-to-use/mirror-active.png)

> **ℹ️ Lưu ý**
> Hộp thoại xin quyền là yêu cầu của Android — nó xuất hiện một lần mỗi khi bắt đầu
> phản chiếu, không phải mỗi lần đổi màn hình. Khi tắt *Tự động bắt đầu phản chiếu*, nhấn vào mục
> chỉ mở màn hình phản chiếu; không có gì được ghi lại cho đến khi bạn tự bắt đầu.

### Bắt đầu thủ công

Nếu bạn muốn để **Tự động bắt đầu phản chiếu** ở trạng thái tắt:

1. Mở ScreenOnAuto trên điện thoại và bật công tắc **Phản chiếu màn hình**, rồi nhấn
   **Bắt đầu ngay** trong hộp thoại xin quyền.
2. Trên màn hình xe, mở một trong các mục ScreenOnAuto — hình phản chiếu đã chạy sẵn
   và hiện ra ngay.

(Thứ tự không quan trọng — bạn cũng có thể mở mục trước rồi mới bật công tắc **Phản chiếu màn hình**.)

### Bỏ qua hộp thoại xin quyền

Không muốn hộp thoại hiện ra mỗi lần? Bạn có thể cấp trước quyền này một lần qua
ADB — xem [Cấp quyền phản chiếu qua ADB](/docs/vi/grant-mirror-permission-via-adb/).

## Dừng phản chiếu

Có thể dùng bất kỳ cách nào sau:

- **Ngắt kết nối với xe** — phản chiếu tự động dừng (cài đặt mặc định *Dừng khi
  ngắt kết nối*).
- Nhấn **Dừng phản chiếu** trên thông báo thường trực của điện thoại.
- Tắt công tắc **Phản chiếu màn hình** trong ứng dụng.

## Khắc phục sự cố

### Phản chiếu và hiển thị

#### Mục mở ra nhưng màn hình vẫn trống

Phản chiếu chưa bắt đầu; hãy xem điện thoại có hiện hộp thoại xin quyền không, hoặc bắt đầu bằng
công tắc **Phản chiếu màn hình**.

#### Có viền đen quanh hình

Màn hình điện thoại và màn hình xe có tỉ lệ khung hình khác nhau. Hãy dùng nút **Khóa hướng xoay**
trên màn hình phản chiếu (hoặc **Tự động khóa hướng xoay** trong cài đặt). Để vừa khít vùng màn hình
xe có thể dùng, hãy bật **Khớp màn hình điện thoại với xe** trong Tính năng đặc quyền (Shizuku hoặc root).

#### Hình bị kéo giãn hoặc méo sau khi bố cục thay đổi

Hiện tượng này xảy ra khi vùng hiển thị to ra hoặc nhỏ lại ở chế độ chia đôi màn hình. Xoay điện thoại
để màn hình chuyển giữa dọc và ngang sẽ đưa hình trở lại bình thường (nếu đang bật **Khóa hướng xoay**, hãy tắt nó trước bằng nút trên màn hình). Cũng có hai cài đặt
có thể khắc phục:

- Bật **Cài đặt → Nâng cao → Cố định kích thước phản chiếu**. Hình phản chiếu sẽ giữ nguyên kích thước
  thay vì bị méo (một phần có thể bị che khuất). Áp dụng cho mục toàn màn hình
  **ScreenOnAuto**.
- Bật **Cài đặt → Nâng cao → Tự vẽ hình phản chiếu (thử nghiệm)**. Ứng dụng sẽ tự vẽ
  hình phản chiếu thay vì để hệ thống co giãn, nên hình không còn bị méo khi chia đôi màn hình. Tính năng này tốn pin hơn một chút và có hiệu lực
  vào lần bắt đầu phản chiếu tiếp theo. **Khớp màn hình điện thoại với xe** (Tính năng đặc quyền) khắc phục cùng vấn đề này theo cách khác, và có thể bật cả hai cùng lúc.

#### Google Maps của Android Auto bị đen khi đang phản chiếu

Trên Android 15 trở lên, trong lúc có ứng dụng ghi màn hình (mọi ứng dụng phản chiếu đều phải làm vậy), Android sẽ ẩn những ứng dụng mà nó cho là nhạy cảm, và Google Maps có thể nằm trong danh sách đó. Khi đó bản đồ của Android Auto sẽ đen cho đến khi dừng phản chiếu, và các ứng dụng phản chiếu hay bản đồ khác cũng bị như vậy. Để khắc phục, hãy bật **Cài đặt → Tùy chọn cho nhà phát triển → Tắt tính năng bảo vệ khi chia sẻ màn hình**. Nếu không thấy Tùy chọn cho nhà phát triển, hãy tìm **Số bản dựng** trong Cài đặt và nhấn vào đó 7 lần. Khi bật tùy chọn này, Android cũng sẽ không ẩn các thông báo chứa mã dùng một lần trong lúc bạn chia sẻ màn hình nữa; nếu điều đó quan trọng với bạn, hãy để tắt. Sau khi bật, hãy dừng phản chiếu rồi bắt đầu lại: cài đặt này chỉ có hiệu lực khi bắt đầu phản chiếu.

#### Thanh điều hướng Android Auto luôn hiện trên màn hình

**Thanh điều hướng Android Auto** trên màn hình xe do chính Android Auto vẽ ra
và ứng dụng không thể ẩn đi.

### Tính năng đặc quyền (Shizuku / root)

#### Máy chủ Shizuku khởi động qua ADB bị tắt khi bạn cắm cáp vào xe

Kết nối USB chuyển điện thoại sang chế độ phụ kiện, khiến ADB khởi động lại và kéo
theo cả Shizuku — gỡ lỗi không dây cũng đi qua cùng ADB đó, nên không giúp được gì.
Hãy khởi động lại Shizuku và ScreenOnAuto sẽ tự kết nối lại; tốt hơn nữa, hãy dùng
[bản fork Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next), có dịch vụ giám sát
tự khởi động lại Shizuku cho bạn. Người dùng Root và kết nối Android Auto không dây
không bị ảnh hưởng.

#### Làm sáng lại màn hình

Màn hình cảm ứng tắt cùng với màn hình hiển thị, nên chạm vào điện thoại không có tác dụng gì. Hãy nhấn
nút **Tự động làm tối** trên màn hình xe — bật/tắt Tự động làm tối sẽ đánh thức màn hình (trước tiên hãy bật
nút này trong **Nút trên màn hình → Nút chức năng**; mặc định nút này tắt). Hoặc
nhấn nút nguồn của điện thoại **hai lần**, vì lần nhấn đầu tiên mới là lần đưa hệ thống
vào chế độ ngủ. Dừng phản chiếu hoặc ngắt kết nối Android Auto cũng làm màn hình sáng lại.
