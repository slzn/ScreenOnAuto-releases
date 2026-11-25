---
title: "Giải thích các cài đặt"
description: "Mỗi cài đặt của ScreenOnAuto dùng để làm gì và giới hạn ở đâu: màn hình chính, nút trên màn hình, Nâng cao và Tính năng đặc quyền, kèm bản sao màn hình cài đặt có thể thao tác."
lang: vi
slug: settings
permalink: /docs/vi/settings/
settings_phone: true
date: 2026-11-25
last_modified_at: 2026-11-25
---

<div class="sp-intro" markdown="1">

# Giải thích các cài đặt

Trang này đi theo màn hình cài đặt của ứng dụng từ trên xuống dưới: mỗi cài đặt làm gì, khi nào nên bật, và những giới hạn mà dòng tóm tắt ngắn gọn không nhắc tới. Mới dùng ứng dụng? Hãy bắt đầu với [Cách sử dụng](/docs/vi/how-to-use/).

</div>

<aside class="sp-aside" aria-label="Màn hình cài đặt ScreenOnAuto">
<div id="settings-phone" data-show="Xem mục"></div>
<p class="sp-hint">Đây là màn hình cài đặt của ứng dụng. Nhấn vào dòng bất kỳ để chuyển tới phần giải thích của nó. Các công tắc bật tắt được, nhưng chỉ trên trang này — không có gì trên điện thoại của bạn bị thay đổi.</p>
</aside>

<div class="sp-doc" markdown="1">

## Màn hình chính {#main}

### Bảng trạng thái {#mirror}

Bảng màu tối ở trên cùng. Dòng đầu tiên cho biết Android Auto đã kết nối hay chưa, và khi đã kết nối thì kèm theo kích thước màn hình xe đo được. Bên dưới là trạng thái hiện tại và nút <span class="sp-ui-go">Bắt đầu phản chiếu</span> / <span class="sp-ui-go stop"><svg viewBox="0 0 12 12" aria-hidden="true"><rect width="12" height="12" rx="2"/></svg>Dừng phản chiếu</span>. **Bắt đầu phản chiếu** mở hộp thoại ghi màn hình của Android trên điện thoại; phản chiếu bắt đầu khi bạn nhấn **Bắt đầu ngay**.

Khi còn thiếu quyền, một dòng màu hổ phách ở cuối bảng sẽ báo cho bạn; nhấn vào dòng đó để cuộn tới [Quyền](#category_permissions).

### Tự động bắt đầu phản chiếu {#auto_start_mirror}

Khi bật, bạn có thể bắt đầu phản chiếu từ xe. Diễn biến như sau (các bước có dấu “Bạn” là việc của bạn; các bước còn lại tự diễn ra):

1. <span class="sp-who you">Bạn</span> Nhấn vào một trong hai mục ScreenOnAuto (<img class="sp-entry" src="/images/icon_launcher.png" alt="Biểu tượng ScreenOnAuto"> hoặc <img class="sp-entry" src="/images/icon_legacy.png" alt="Biểu tượng ScreenOnAuto (Legacy)">) trên màn hình xe.
2. Nếu điện thoại đang ngủ, màn hình sẽ tự sáng lên.
3. Màn hình cài đặt của ScreenOnAuto mở ra trên điện thoại và tự nhấn <span class="sp-ui-go">Bắt đầu phản chiếu</span> giúp bạn.
4. <span class="sp-who you">Bạn</span> Android hiện hộp thoại ghi màn hình: cho phép bằng **Bắt đầu ngay**. Nếu điện thoại khóa bằng mã PIN, hình mở khóa hoặc vân tay, hãy mở khóa trước, rồi hộp thoại sẽ hiện ra.
5. Phản chiếu bắt đầu và màn hình điện thoại xuất hiện trên xe.

> **💡 Mẹo**
> - **Không muốn lần nào cũng phải cho phép?** [Cấp quyền phản chiếu qua ADB](/docs/vi/grant-mirror-permission-via-adb/) một lần là hộp thoại không hiện nữa, bỏ được bước 4 (cho đến khi bạn mở khóa điện thoại, xe sẽ hiển thị màn hình khóa).
> - **Không muốn màn hình cài đặt hiện lên?** Bật [Bắt đầu phản chiếu ở chế độ nền](#silent_car_start) trong Nâng cao: ở bước 3, điện thoại đi thẳng tới hộp thoại ghi màn hình mà không mở ScreenOnAuto. Bật cả hai thì bạn chỉ cần làm bước 1, và trên điện thoại không hiện gì cả.

Khi tắt, bước 3 là việc của bạn: nhấn vào một mục trên xe chỉ hiện màn hình chờ “Bắt đầu phản chiếu trên điện thoại”, và bạn tự mở ScreenOnAuto trên điện thoại rồi nhấn <span class="sp-ui-go">Bắt đầu phản chiếu</span>, sau đó là bước 4 như trên.

### Ngăn màn hình tắt {#keep_awake}

Giữ cho màn hình điện thoại không tắt trong khi phản chiếu. Hình phản chiếu *chính là* màn hình điện thoại, nên khi màn hình tắt thì hình trên xe cũng dừng. Tùy chọn này chỉ giữ màn hình bật — không tăng độ sáng — nên rất hợp khi dùng cùng [Tự động làm tối màn hình](#auto_dim): màn hình vẫn bật, và tối đi khi không dùng.

### Dừng khi ngắt kết nối {#stop_on_disconnect}

Dừng phản chiếu khi Android Auto ngắt kết nối (bật theo mặc định). Khi tắt, phản chiếu vẫn tiếp tục chạy ở chế độ nền sau khi bạn rời xe, cho đến khi bạn tự dừng.

### Tự động làm tối màn hình {#auto_dim}

Trong khi phản chiếu, giảm độ sáng điện thoại xuống mức thấp nhất khi một lúc không ai chạm vào — tiết kiệm pin và đỡ chói. Chỉ đèn nền điện thoại tối đi; hình trên xe vẫn sáng như cũ. Chạm vào điện thoại là độ sáng trở lại.

- Cần quyền [Hiển thị trên các ứng dụng khác](#overlay_access).
- Thao tác trên màn hình xe ([chuyển tiếp cảm ứng](#accessibility_access)) không được tính là chạm vào điện thoại, nên không làm điện thoại sáng lại.
- Không có gì bị làm tối khi điện thoại đang ở màn hình khóa; việc đếm ngược bắt đầu khi bạn mở khóa hoặc chạm vào điện thoại.
- Với Shizuku hoặc root, có thể tắt hẳn màn hình điện thoại thay vì làm tối: xem [Tắt màn hình điện thoại](#root_screen_off).

### Làm tối sau {#auto_dim_delay}

Điện thoại phải không được dùng trong bao lâu thì mới tối đi: 15, 30 (mặc định), 60 hoặc 120 giây. Cần bật [Tự động làm tối màn hình](#auto_dim).

### Tự động mở ứng dụng {#auto_launch_package}

Mở một ứng dụng trên điện thoại — chẳng hạn bản đồ hay trình phát nhạc — ngay khi phản chiếu và Android Auto cùng hoạt động. **Màn hình chính mặc định**, ở đầu danh sách, mở ứng dụng màn hình chính mà bạn đang dùng, nên vẫn hoạt động nếu bạn đổi trình chạy.

### Chỉ phản chiếu ứng dụng này {#single_app_mirror}

Chỉ gửi ứng dụng đã chọn ở [Tự động mở ứng dụng](#auto_launch_package) phía trên lên xe, thay vì toàn bộ màn hình điện thoại. Chuyển sang ứng dụng khác trên điện thoại thì màn hình xe để trống cho đến khi bạn quay lại — hữu ích khi không muốn hành khách hay thông báo hiện lên xe.

Mục này chỉ xuất hiện trên **Android 15 trở lên**, sau khi bạn đã [cấp quyền phản chiếu qua ADB](/docs/vi/grant-mirror-permission-via-adb/). Mục bị làm mờ cho đến khi chọn một ứng dụng ở Tự động mở ứng dụng.

**Khi nào bạn cần đến:**

- **Không cấp quyền qua ADB thì không cần.** Từ Android 14, hộp thoại ghi màn hình hiện ra mỗi lần bắt đầu phản chiếu đã cho bạn chọn giữa chia sẻ toàn bộ màn hình và chia sẻ một ứng dụng; chọn một ứng dụng ở đó thì chỉ ứng dụng đó được phản chiếu. Trên Android 13 trở xuống, hộp thoại không có lựa chọn này và luôn phản chiếu toàn bộ màn hình.
- **Đã cấp quyền qua ADB thì cần.** Sau khi cấp quyền, hộp thoại không còn xuất hiện, nên không có chỗ nào để chọn ứng dụng và phản chiếu luôn là toàn bộ màn hình. Để vừa bỏ qua hộp thoại *vừa* chỉ phản chiếu một ứng dụng, hãy dùng công tắc này: cùng với [Tự động mở ứng dụng](#auto_launch_package) ở trên, nó chỉ gửi ứng dụng đó lên xe.
- [Chỉ chia sẻ toàn bộ màn hình](#full_screen_share_only) trong Nâng cao bỏ lựa chọn một ứng dụng khỏi hộp thoại; nó không cản trở công tắc này.

### Trang con {#subpages}

**Nút trên màn hình**, **Nâng cao** và **Tính năng đặc quyền** mỗi mục mở một trang riêng, được giải thích ở các chương bên dưới: [Nút trên màn hình](#screen_buttons), [Nâng cao](#advanced), [Tính năng đặc quyền](#root_features).

### Quyền {#category_permissions}

Mỗi dòng mở trang cài đặt hệ thống tương ứng; nhãn bên phải cho biết quyền đã được cấp hay chưa.

#### Quyền truy cập thông báo {#notification_access}

Cho phép “Trình điều khiển đa phương tiện ScreenOnAuto” <img class="sp-entry" src="/images/icon_media.png" alt="Biểu tượng Trình điều khiển đa phương tiện ScreenOnAuto"> tiếp quản nội dung đang phát trên điện thoại. Khi đó **các nút đa phương tiện trên vô lăng** và màn hình đa phương tiện của Android Auto có thể điều khiển **những trình phát không tự hỗ trợ Android Auto**, như YouTube: bài trước / bài tiếp và phát / tạm dừng đều hoạt động.

- Nó chỉ đọc nội dung đang phát (phiên đa phương tiện), không bao giờ đọc nội dung thông báo của bạn.
- Các ứng dụng nhạc có hỗ trợ Android Auto riêng (YouTube Music, Spotify và những ứng dụng tương tự) kết nối thẳng với Android Auto và không bị can thiệp.
- Không có quyền này, các nút sẽ đi tới trình phát mà hệ thống coi là đang hoạt động — khi mở nhiều trình phát, đó có thể là trình phát không mong muốn.
- Các phiên bản Android Auto cũ hiển thị một mục “Trình điều khiển đa phương tiện ScreenOnAuto” riêng trong trình chạy ứng dụng; các phiên bản mới thì không, điều này là bình thường — điều khiển đa phương tiện vẫn hoạt động trong cả hai trường hợp.

#### Hiển thị trên các ứng dụng khác {#overlay_access}

Cần cho [Tự động làm tối màn hình](#auto_dim), Khóa hướng xoay ([Tự động khóa hướng xoay](#force_landscape) và [nút trên xe](#map_action_force_landscape) của nó) và [Làm tối ban đêm](#night_dim).

#### Sửa đổi các tùy chọn cài đặt hệ thống {#write_settings_access}

Chỉ hiển thị trên **Android 16 trở lên**. Khi điện thoại ở chế độ máy tính bảng (cạnh ngắn nhất từ 600dp trở lên — màn hình trong của điện thoại gập, hoặc sau khi giảm [Mật độ màn hình điện thoại](#phone_density)), Android 16 bỏ qua hướng màn hình mà ứng dụng yêu cầu, nên Khóa hướng xoay chuyển sang dùng khóa xoay của hệ thống, vốn cần quyền này. Cài đặt tự động xoay của bạn được khôi phục khi hết khóa.

#### Chuyển tiếp cảm ứng {#accessibility_access}

Chuyển các thao tác nhấn, vuốt và chụm trên màn hình xe sang điện thoại, thông qua một dịch vụ hỗ trợ tiếp cận của Android. Ở đây cả hai kiểu phản chiếu hỗ trợ cùng các cử chỉ: nhấn, cuộn (vuốt qua danh sách), vuốt nhanh và chụm để thu phóng.

Với Shizuku hoặc root, bạn có thể dùng [Chèn chạm thật](#root_touch_injection) thay thế: thao tác chạm trên màn hình xe đến điện thoại như cử động ngón tay thật, nên cảm giác như đang dùng trực tiếp điện thoại. **Nhấn giữ**, **nhấn và kéo** (chẳng hạn di chuyển một biểu tượng trên màn hình chính) và **cử chỉ nhiều ngón**, những thứ dịch vụ hỗ trợ tiếp cận không làm được, cũng hoạt động — nhưng chỉ trong <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>.

### Giới thiệu {#about}

Phiên bản (nhấn để sao chép), liên kết GitHub và ủng hộ, Chính sách quyền riêng tư, Điều khoản sử dụng và giấy phép của bên thứ ba.

## Nút trên màn hình {#screen_buttons}

Mọi thứ có thể xuất hiện dưới dạng nút trên màn hình xe đều được thiết lập ở trang này.

### Lối tắt khởi chạy {#category_shortcuts}

Tối đa 4 lối tắt ứng dụng trên màn hình xe. Nhấn vào một lối tắt là ứng dụng mở ra trên điện thoại — và do đó cũng trên xe.

- Nhấn vào một dòng để chọn ứng dụng; công tắc bên phải hiện hoặc ẩn lối tắt đó trên xe. **Màn hình chính mặc định** cũng dùng được ở đây, làm nút “về màn hình chính”.
- **Nhấn giữ** một lối tắt đã đặt để đổi chữ hiển thị trên xe (tối đa 30 ký tự). Xóa trống thì <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span> chỉ hiện biểu tượng ứng dụng.
- Lối tắt nằm dọc **phía trên** hình phản chiếu; ở bên nào thì tùy kiểu phản chiếu:
  - <span class="sp-mirror nav">Phản chiếu “ScreenOnAuto”</span>: dùng mẫu màn hình bản đồ của Android Auto, nên lối tắt là các nút chữ do chính Android Auto vẽ (không có biểu tượng), và Android Auto quyết định vị trí — ứng dụng không thể di chuyển chúng. Chúng có thể đổi bên theo cài đặt vị trí người lái của Android Auto, nhưng điều đó không được bảo đảm.
  - <span class="sp-mirror legacy">Phản chiếu “ScreenOnAuto (Legacy)”</span>: ứng dụng tự vẽ chúng thành các nút có biểu tượng, mặc định ở **góc trên bên phải**; [Căn nút sang trái](#legacy_buttons_left) chuyển chúng sang góc trên bên trái, và [các khoảng cách](#legacy_gaps) tinh chỉnh khoảng cách của chúng tới các cạnh.
- Lối tắt không luôn hiện trên màn hình: trong <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>, chúng ẩn cùng [các nút chức năng](#category_control_buttons) sau 5 giây không thao tác và hiện lại khi bạn chạm vào màn hình xe; trong <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>, Android Auto quyết định khi nào chúng ẩn.

### Nút chức năng {#category_control_buttons}

Các nút tròn nằm trên hình phản chiếu, tối đa 4 nút cùng lúc ở cả hai kiểu phản chiếu.

- Vị trí của chúng tùy kiểu phản chiếu:
  - <span class="sp-mirror nav">Phản chiếu “ScreenOnAuto”</span>: chúng là dải nút của mẫu màn hình bản đồ Android Auto, do Android Auto vẽ ở **góc dưới bên phải hoặc góc dưới bên trái**. Android Auto quyết định bên nào — ứng dụng không thể di chuyển; giống như [Lối tắt khởi chạy](#category_shortcuts), dải nút có thể đổi bên theo cài đặt vị trí người lái, nhưng điều đó không được bảo đảm.
  - <span class="sp-mirror legacy">Phản chiếu “ScreenOnAuto (Legacy)”</span>: một cột do ứng dụng tự vẽ, mặc định ở **góc dưới bên phải**; [Căn nút sang trái](#legacy_buttons_left) chuyển nó sang góc dưới bên trái, và [các khoảng cách](#legacy_gaps) tinh chỉnh khoảng cách của nó tới các cạnh.
- Tự động ẩn: trong <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>, các nút chức năng ẩn cùng lối tắt sau 5 giây không thao tác và hiện lại khi bạn chạm vào màn hình xe; trong <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>, Android Auto quyết định khi nào chúng ẩn.

#### Nút Khóa hướng xoay {#map_action_force_landscape}

Bật hoặc tắt Khóa hướng xoay trong lúc này mà không thay đổi cài đặt [Tự động khóa hướng xoay](#force_landscape); lần kết nối sau lại làm theo cài đặt. Bật theo mặc định.

#### Nút Tự động làm tối {#map_action_auto_dim}

Bật hoặc tắt [Tự động làm tối màn hình](#auto_dim) — cùng một công tắc như trong cài đặt. Khi màn hình điện thoại đã bị [tắt](#root_screen_off), đây là cách nhanh nhất để bật lại.

#### Nút Làm tối ban đêm {#map_action_night_dim}

Tạm thời bật hoặc tắt [Làm tối ban đêm](#night_dim) — chẳng hạn khi vào đường hầm. Trạng thái này giữ đến lần tới xe chuyển giữa ngày và đêm; nếu [Khi nào làm tối](#night_dim_trigger) đặt là Luôn luôn, thì giữ đến khi Android Auto ngắt kết nối. Mức tối theo cài đặt [Mức độ](#night_dim_strength).

#### Nút Quay lại, Màn hình chính và Ứng dụng gần đây {#map_action_nav}

Ba phím điều hướng của điện thoại, hoạt động dù điện thoại dùng cử chỉ hay nút. Khi đã kết nối Shizuku hoặc root, chúng gửi lệnh nhấn phím thật; nếu không, chúng cần [Chuyển tiếp cảm ứng](#accessibility_access).

### Vị trí nút {#category_button_placement}

Phần này chỉ ảnh hưởng đến <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>. Các nút của <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span> do Android Auto vẽ và không thể di chuyển.

#### Căn nút sang trái {#legacy_buttons_left}

Chuyển [các nút chức năng](#category_control_buttons) và [lối tắt](#category_shortcuts) sang bên trái — cho xe tay lái bên phải, hoặc khi các nút điều khiển riêng của đầu xe che mất bên phải.

#### Tránh thanh điều hướng của điện thoại {#legacy_buttons_dodge_nav}

Khi thanh điều hướng của điện thoại hiện trong hình phản chiếu, dời các nút ra khỏi thanh đó để hai bộ nút không chồng lên nhau. Cần Android 11 trở lên (điện thoại cũ hơn không hiện mục này). Khi bật, bốn khoảng cách bên dưới bị làm mờ — chỉ dùng được một trong hai cách đặt vị trí.

#### Khoảng cách của nút và lối tắt {#legacy_gaps}

Bốn khoảng cách tính bằng dp (0–400, mặc định 16): khoảng cách từ các nút chức năng tới cạnh bên và cạnh dưới, và từ lối tắt tới cạnh bên và cạnh trên. Dùng chúng để dời các nút của ScreenOnAuto ra khỏi chỗ bị các nút riêng của đầu xe che. Nếu giá trị quá lớn, các nút vẫn nằm trong màn hình chứ không biến mất ra ngoài.

## Nâng cao {#advanced}

### Hướng màn hình {#category_orientation}

#### Tự động khóa hướng xoay {#force_landscape}

Khóa điện thoại ở một hướng khi Android Auto kết nối, để hình phản chiếu không bị lật khi điện thoại xoay, và điện thoại nằm ngang sẽ lấp đầy màn hình xe rộng. Nó chỉ tác động một lần, đúng lúc kết nối; sau đó [Nút Khóa hướng xoay](#map_action_force_landscape) trên xe sẽ nhả hoặc áp dụng lại. Cần quyền [Hiển thị trên các ứng dụng khác](#overlay_access).

#### Hướng {#force_orientation_mode}

Khóa theo hướng nào: **Ngang** (mặc định), **Dọc** hoặc **Tự phát hiện theo màn hình xe** — ngang khi vùng mà hình phản chiếu thực sự nhận được trên xe rộng hơn cao, dọc khi vùng đó cao hơn rộng. Nó theo cả chế độ chia đôi màn hình khi hình dạng đó thay đổi.

#### Xoay ngang đảo ngược {#force_landscape_reverse}

Xoay điện thoại nằm ngang theo chiều ngược lại — cho giá đỡ giữ điện thoại lộn ngược. Bị làm mờ khi ở hướng dọc.

### Điều chỉnh hiển thị {#category_display_adjust}

#### Tự vẽ hình phản chiếu {#self_draw}

Ứng dụng tự vẽ hình của điện thoại lên xe thay vì để hệ thống co giãn. Khi đó chế độ chia đôi màn hình không còn làm méo hình, và các điều chỉnh chiều rộng/chiều cao bên dưới hoạt động như nhau dù bạn đặt trước hay trong khi kết nối. Tốn pin hơn một chút.

Thay đổi có hiệu lực từ **lần bắt đầu phản chiếu tiếp theo** — cố ý không chuyển đổi giữa chừng.

#### Độ trễ hình ảnh {#video_delay}

Khi hình chạy trước tiếng (ví dụ trên đầu xe Android phát Android Auto qua một ứng dụng nhận, khiến âm thanh bị trễ), giữ hình lại 0–2000 mili giây để hai bên khớp nhau. Cần [Tự vẽ hình phản chiếu](#self_draw); thay đổi có hiệu lực ngay.

- Việc giữ lại khung hình tốn thêm bộ nhớ và GPU. Nếu âm thanh và hình ảnh lệch nhau vì điện thoại hoặc đầu xe vốn đã quá tải, nó có thể khiến tình trạng tệ hơn.
- Thao tác chạm vẫn tác động lên màn hình điện thoại **hiện tại**, không phải lên hình bị trễ.

#### Cố định kích thước phản chiếu {#nav_fixed_size}

Chỉ dành cho <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>. Hình phản chiếu giữ nguyên kích thước khi xe chuyển sang chia đôi màn hình, nên không bị méo — nhưng một phần có thể bị cắt mất. Tốt nhất nên đặt trước khi kết nối.

#### Giữ yên phản chiếu khi nút hiện ra {#nav_ignore_strip}

Chỉ dành cho <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>, bật theo mặc định. Dải nút của Android Auto tự hiện và ẩn, và mỗi lần hiện lại chiếm một chút chỗ. Khi bật, dải nút hiện ra sẽ không khiến hình phản chiếu đổi kích thước và giật; các thay đổi bố cục thật như chia đôi màn hình vẫn được áp dụng. Bị làm mờ khi [Cố định kích thước phản chiếu](#nav_fixed_size) đang bật.

#### Điều chỉnh chiều rộng phản chiếu, Điều chỉnh chiều cao phản chiếu {#vd_gap}

Vùng mà xe dành cho hình phản chiếu (khung xanh lá nét đứt trong các hình bên dưới) hiếm khi có cùng hình dạng với màn hình điện thoại. Hình của điện thoại được co giãn đều để vừa bên trong vùng đó, nên phía không khớp sẽ còn dải đen: khi hình **rộng hơn** vùng (chẳng hạn chế độ chia đôi đã làm vùng hẹp lại), dải đen nằm **phía trên và phía dưới**; khi hình **hẹp hơn**, dải đen nằm **bên trái và bên phải**.

Hai cài đặt này phóng to hoặc thu nhỏ khung mà hình phản chiếu được đặt vừa vào, tính bằng pixel. Giá trị **âm** làm khung to ra: hình lớn lên và dải đen nhỏ lại, đổi lại một phần hình tràn ra ngoài vùng sử dụng được và bị cắt mất (phần gạch chéo trong hình).

<div class="sp-figs">
<figure><img src="/images/settings/gap-tb-before.svg" alt="Hình rộng hơn vùng, để lại dải đen phía trên và phía dưới"><figcaption>Dải đen phía trên và phía dưới</figcaption></figure>
<figure><img src="/images/settings/gap-tb-after.svg" alt="Với điều chỉnh chiều rộng âm, hình lớn lên lấp đầy phía trên và phía dưới, tràn qua cạnh phải"><figcaption><b>Chiều rộng</b> âm: hết dải đen trên dưới, phía bên phải tràn ra ngoài</figcaption></figure>
<figure><img src="/images/settings/gap-lr-before.svg" alt="Hình hẹp hơn vùng, để lại dải đen bên trái và bên phải"><figcaption>Dải đen bên trái và bên phải</figcaption></figure>
<figure><img src="/images/settings/gap-lr-after.svg" alt="Với điều chỉnh chiều cao âm, hình lớn lên lấp đầy bên trái và bên phải, tràn qua cạnh dưới"><figcaption><b>Chiều cao</b> âm: hết dải đen trái phải, phía dưới tràn ra ngoài</figcaption></figure>
</div>

- **Dải đen phía trên và phía dưới → đặt *chiều rộng* âm.** Khung rộng hơn cho phép hình lớn lên, và vì thế cao lên, lấp đầy dải đen.
- **Dải đen bên trái và bên phải → đặt *chiều cao* âm.** Khung cao hơn cho phép hình lớn lên, và vì thế rộng ra, lấp đầy dải đen.
- Hình phản chiếu được neo ở **góc trên bên trái** của vùng, nên phần tràn ra sẽ vượt qua cạnh **phải** (chiều rộng) hoặc cạnh **dưới** (chiều cao) — không chia đều cho hai bên. Mọi thứ bị cắt ở đó, kể cả các nút, đều không nhấn được, nên hãy dừng ở giá trị mà dải đen vừa biến mất.
- Giá trị **dương** làm điều ngược lại: thu nhỏ khung, dành cho đầu xe cắt mất các cạnh của hình, giúp cạnh bị cắt hiện trở lại (kèm một dải đen nhỏ).
- Chính xác nhất khi bật [Tự vẽ hình phản chiếu](#self_draw). Nếu không bật, hãy điều chỉnh giá trị **trong khi đang kết nối**: trong <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>, một giá trị âm đã đặt sẵn khi bắt đầu phản chiếu có thể làm hình bị bẹp thay vì phóng to.

Nhấn vào phần chữ để nhập giá trị (lưu một giá trị khác 0 sẽ bật công tắc); công tắc ở bên kia đường phân cách tạm tắt điều chỉnh nhưng vẫn giữ giá trị, để bạn so sánh.

> **💡 Để không còn dải đen nào**
>
> Với Shizuku hoặc root, hãy bật [Khớp màn hình điện thoại với xe](#root_display_override). Tính năng này đổi màn hình điện thoại sang đúng tỉ lệ của vùng, nên hình phản chiếu lấp đầy vừa khít — không dải đen, không bị cắt. Trong khi nó bật, hai điều chỉnh này tạm ngưng.

<div class="sp-figs one">
<figure><img src="/images/settings/gap-match.svg" alt="Khi màn hình điện thoại khớp với xe, hình lấp đầy vừa khít vùng sử dụng được"><figcaption>Khớp màn hình điện thoại với xe: vừa khít</figcaption></figure>
</div>

### Làm tối ban đêm {#category_night_dim}

#### Làm tối màn hình xe {#night_dim}

Làm tối hình phản chiếu trên xe vào ban đêm, để ứng dụng điện thoại màu trắng sáng không gây chói trong bóng tối.

- Trong <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>, hoặc khi bật [Tự vẽ hình phản chiếu](#self_draw), chỉ hình trên xe tối đi.
- Trong <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span> khi không bật Tự vẽ hình phản chiếu, việc làm tối là một lớp tối phủ lên màn hình điện thoại, nên **điện thoại cũng tối đi**. Cách này cần quyền [Hiển thị trên các ứng dụng khác](#overlay_access).
- Để tạm tắt hoặc bật, hãy dùng [Nút Làm tối ban đêm](#map_action_night_dim) trên xe.

#### Khi nào làm tối {#night_dim_trigger}

**Khi xe chuyển sang chế độ ban đêm** (mặc định): làm tối vào ban đêm, trở lại bình thường vào ban ngày. **Luôn luôn**: làm tối suốt thời gian Android Auto kết nối.

#### Mức độ {#night_dim_strength}

Tối đến mức nào: 10%–80% (mặc định 50%). [Nút Làm tối ban đêm](#map_action_night_dim) cũng dùng giá trị này.

### Khởi động từ xe {#category_car_start}

#### Bắt đầu phản chiếu ở chế độ nền {#silent_car_start}

Khi phản chiếu [bắt đầu từ xe](#auto_start_mirror), màn hình cài đặt của ScreenOnAuto không hiện lên phía trước trên điện thoại và không nằm lại trong Ứng dụng gần đây. Hộp thoại ghi màn hình vẫn xuất hiện.

> **💡 Mẹo**
>
> Thêm [quyền phản chiếu cấp qua ADB](/docs/vi/grant-mirror-permission-via-adb/) thì hộp thoại ghi màn hình cũng không còn: nhấn vào một mục trên xe và trên điện thoại không hiện gì cả — phản chiếu cứ thế bắt đầu, không cần chạm vào điện thoại. Cho đến khi bạn mở khóa điện thoại, xe sẽ hiển thị màn hình khóa.

#### Chỉ chia sẻ toàn bộ màn hình {#full_screen_share_only}

Từ Android 14, hộp thoại ghi màn hình trước tiên hỏi chia sẻ một ứng dụng hay toàn bộ màn hình, và lần nào bạn cũng phải mở menu đó. Khi bật tùy chọn này, hộp thoại chỉ đưa ra lựa chọn toàn bộ màn hình. Hiển thị trên Android 14 trở lên. Nếu bạn phản chiếu một ứng dụng bằng cách chọn nó trong hộp thoại đó (cách làm khi không cấp quyền qua ADB), hãy để tắt; nếu đã cấp quyền qua ADB, hãy dùng [Chỉ phản chiếu ứng dụng này](#single_app_mirror).

Vẫn thấy cả hai lựa chọn? Android 16 có một tùy chọn ghi đè tương thích trong Tùy chọn cho nhà phát triển (`OVERRIDE_DISABLE_MEDIA_PROJECTION_SINGLE_APP_OPTION`) làm chúng xuất hiện lại; hãy kiểm tra để chắc rằng nó không bị bật.

## Tính năng đặc quyền {#root_features}

Các tính năng trong trang này cần [Shizuku](https://shizuku.rikka.app/) hoặc root, vì chúng thay đổi những cài đặt hệ thống mà ứng dụng thông thường không thể đụng tới. Mỗi tính năng đều trả cài đặt của điện thoại về như cũ khi kết thúc phản chiếu.

### Kết nối {#root_status}

Ô ở trên cùng cho biết Shizuku hoặc root đã kết nối hay chưa; nút của ô này dùng để **Cấp quyền truy cập**, **Kết nối** hoặc **Ngắt kết nối**. Kết nối bị rớt (chẳng hạn khi Shizuku khởi động lại) sẽ tự kết nối lại.

Máy chủ Shizuku khởi động qua ADB sẽ bị tắt khi điện thoại được cắm vào xe bằng USB — xem [Khắc phục sự cố](/docs/vi/how-to-use/#tính-năng-đặc-quyền-shizuku--root).

### Không phát hiện được Root? {#root_force}

Nếu trình quản lý root bị ẩn hoặc đổi tên, ứng dụng không thấy được root, và ô kết nối sẽ không bao giờ đưa ra lựa chọn root. Nhấn vào dòng này sẽ xin quyền root trực tiếp từ su. Dòng này chỉ hiện khi chưa phát hiện được root và chưa có kết nối nào.

### Tính năng {#category_root_features}

#### Tắt màn hình điện thoại {#root_screen_off}

Khi [Tự động làm tối màn hình](#auto_dim) kích hoạt, tắt đèn nền điện thoại thay vì làm tối. Cần bật Tự động làm tối màn hình.

Chỉ màn hình tắt — **điện thoại không vào chế độ ngủ**: ứng dụng và hệ thống vẫn chạy, hình phản chiếu vẫn hiện trên xe, và vẫn điều khiển điện thoại từ xe được. Tuy nhiên màn hình cảm ứng cũng tắt theo màn hình, nên **chạm vào màn hình điện thoại không có tác dụng** và không làm nó sáng lại.

Để bật lại màn hình: nhấn [Nút Tự động làm tối](#map_action_auto_dim) trên xe, dừng phản chiếu hoặc ngắt kết nối Android Auto, hoặc nhấn nút nguồn **hai lần** (lần nhấn đầu tiên là để đưa hệ thống vào chế độ ngủ).

#### Chèn chạm thật {#root_touch_injection}

Gửi thao tác chạm trên màn hình xe đến điện thoại như cử động ngón tay thật, nên nhấn giữ, kéo và cử chỉ nhiều ngón đều hoạt động — và không cần đến dịch vụ hỗ trợ tiếp cận của [Chuyển tiếp cảm ứng](#accessibility_access). Hiệu quả đầy đủ chỉ có trong <span class="sp-mirror legacy">phản chiếu “ScreenOnAuto (Legacy)”</span>: từ Android Auto, <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span> chỉ nhận được nhấn, cuộn, vuốt nhanh và chụm — đây là giới hạn của Android Auto.

#### Màn hình cảm ứng ảo {#root_virtual_touch}

Chuyển các thao tác chạm đó qua một thiết bị màn hình cảm ứng ảo, nên các ứng dụng cử chỉ đọc trực tiếp màn hình cảm ứng (như GMD Gestures) cũng nhận được. Cần bật [Chèn chạm thật](#root_touch_injection).

#### Theo chế độ ngày/đêm của xe {#root_follow_car_night}

Trong khi phản chiếu, giao diện sáng/tối của điện thoại chuyển theo chế độ ngày/đêm của Android Auto, và trở lại cài đặt riêng của điện thoại sau đó. Android 10 trở lên.

#### Đọc chế độ từ Android Auto {#root_car_night_from_aa}

Xuất hiện khi công tắc phía trên đã bật, và áp dụng cho <span class="sp-mirror nav">phản chiếu “ScreenOnAuto”</span>. Trên một số điện thoại (chẳng hạn một số mẫu Samsung), chế độ ngày/đêm báo cho ứng dụng bị sai, nên điện thoại không bao giờ đổi theo xe; tùy chọn này đọc trạng thái ngày/đêm của chính Android Auto. Hãy để tắt nếu điện thoại đã đổi theo xe.

#### Cỡ chữ khi phản chiếu {#root_mirror_font_scale}

Dùng cỡ chữ khác trong khi phản chiếu — chẳng hạn chữ to hơn trên xe — và trả lại cỡ chữ của điện thoại sau đó. Các lựa chọn là các mức có trong Cài đặt của điện thoại.

#### Chế độ điều hướng khi phản chiếu {#root_mirror_nav_mode}

Chuyển sang điều hướng bằng cử chỉ, bằng 2 nút hoặc bằng 3 nút trong khi phản chiếu, rồi trả lại sau đó (Android 10 trở lên). Ví dụ, trên màn hình chia đôi của đầu xe đặt dọc, điều hướng bằng cử chỉ chừa nhiều chỗ hơn cho ứng dụng. Các chế độ mà điện thoại không có sẽ được đánh dấu là không có sẵn.

#### Màn hình chính khi phản chiếu {#root_mirror_home}

Đặt một trình chạy khác làm màn hình chính mặc định của điện thoại trong khi phản chiếu, và trả lại trình chạy của bạn sau đó. Dành cho màn hình chính được bố trí riêng cho xe, hoặc cho những điện thoại có trình chạy gốc tự sắp xếp lại biểu tượng khi [hình dạng màn hình](#category_root_display) thay đổi (một số mẫu Xiaomi HyperOS).

### Hình dạng màn hình {#category_root_display}

#### Khớp màn hình điện thoại với xe {#root_display_override}

Trong khi phản chiếu, đổi màn hình điện thoại sang tỉ lệ khung hình của xe, để hình phản chiếu lấp đầy màn hình xe mà không có dải đen và không bị méo khi chia đôi màn hình. Áp dụng ngay, không cần kết nối lại.

<div class="sp-figs">
<figure><img src="/images/settings/override-before.svg" alt="Trước: hình lấp đầy điện thoại, nhưng trên màn hình xe rộng hơn lại để lại dải đen bên trái và bên phải"><figcaption>Trước: hình dạng điện thoại khác với xe, để lại dải đen trên xe</figcaption></figure>
<figure><img src="/images/settings/override-after.svg" alt="Sau: màn hình điện thoại mang hình dạng của xe, có dải đen mỏng trên điện thoại và vừa khít trên xe"><figcaption>Sau: điện thoại mang hình dạng của xe, và màn hình xe được lấp đầy vừa khít</figcaption></figure>
<figure><img src="/images/settings/override-narrow-before.svg" alt="Trước: vùng sử dụng được trên xe hẹp hơn hình của điện thoại, để lại dải đen phía trên và phía dưới"><figcaption>Trước: vùng trên xe hẹp hơn (chẳng hạn khi chia đôi màn hình) để lại dải đen phía trên và phía dưới</figcaption></figure>
<figure><img src="/images/settings/override-narrow-after.svg" alt="Sau: màn hình điện thoại mang hình dạng của xe, có dải đen bên trái và bên phải trên điện thoại và vừa khít trên xe"><figcaption>Sau: điện thoại mang hình dạng của xe, và màn hình xe được lấp đầy vừa khít</figcaption></figure>
<figure><img src="/images/settings/override-portrait-before.svg" alt="Trước: trên đầu xe dọc cỡ lớn, hình của điện thoại dựng đứng hẹp hơn vùng, để lại dải đen bên trái và bên phải"><figcaption>Trước: đầu xe dọc cỡ lớn, điện thoại dựng đứng, dải đen bên trái và bên phải trên xe</figcaption></figure>
<figure><img src="/images/settings/override-portrait-after.svg" alt="Sau: màn hình điện thoại mang hình dạng dọc của xe, có dải đen phía trên và phía dưới trên điện thoại và vừa khít trên xe"><figcaption>Sau: điện thoại mang hình dạng dọc của xe, và màn hình xe được lấp đầy vừa khít</figcaption></figure>
</div>

Tính năng hoạt động dù xe hiện dải đen bên trái và bên phải (cặp hình đầu tiên) hay phía trên và phía dưới (cặp thứ hai), và cả trên đầu xe dọc cỡ lớn (cặp thứ ba — điện thoại dựng đứng; khi [Hướng](#force_orientation_mode) đặt là tự phát hiện, nó tự khóa sang dọc). Màn hình vật lý của điện thoại vẫn giữ nguyên hình dạng, nên khi bật tính năng này, **chính điện thoại** sẽ hiện dải đen theo chiều ngược lại (phía trên và phía dưới khi xe có dải đen bên trái và bên phải, và ngược lại) — đó là điều bình thường; hình phản chiếu trên xe vẫn lấp đầy vừa khít.

- Đây là thay đổi ở cấp hệ thống và **vẫn giữ nguyên sau khi khởi động lại** cho đến khi được hoàn tác. Bình thường, dừng phản chiếu hoặc ngắt kết nối sẽ tự động hoàn tác.
- Trong khi màn hình điện thoại đang bị đổi hình dạng, một thông báo màu hổ phách có nút **Khôi phục** xuất hiện ở đầu mục này.
- Nếu màn hình điện thoại bị kẹt ở hình dạng sai và bạn không mở được ứng dụng, hãy chạy `adb shell wm size reset` và `adb shell wm density reset` từ máy tính.

#### Thêm lối tắt khôi phục vào màn hình chính {#root_display_shortcut}

Đặt lối tắt “Khôi phục màn hình” lên màn hình chính, để chỉ một lần chạm là trả màn hình điện thoại về như cũ mà không cần mở ứng dụng.

#### Giá trị sẽ được áp dụng {#root_display_derived}

Kích thước mà màn hình điện thoại sẽ được đổi sang, tính từ kích thước của xe, và giá trị mà hệ thống thực sự chấp nhận. Khi xe chưa được đo, mục này chờ đến lần tới hình phản chiếu mở trong Android Auto.

#### Kích thước màn hình xe {#car_size}

Mỗi kiểu phản chiếu có một giá trị riêng (xe dành cho hai kiểu phản chiếu những vùng có kích thước khác nhau). Mặc định là kích thước phát hiện được, đánh dấu **Tự động**. Chỉ đổi khi phát hiện sai: chiều rộng và chiều cao nằm chung một hộp thoại, và ô để trống sẽ dùng giá trị phát hiện được (160–8192).

#### Mật độ màn hình điện thoại {#phone_density}

Không bắt buộc, mỗi kiểu phản chiếu có một giá trị riêng (72–640 dpi). Số cao hơn làm chữ và nút trên màn hình xe to hơn; số thấp hơn hiển thị được nhiều nội dung hơn cùng lúc. Nếu đặt thấp đến mức cạnh ngắn nhất của điện thoại vượt quá 600dp, hầu hết ứng dụng và hệ thống sẽ chuyển sang bố cục máy tính bảng (hai cột, điều hướng bên cạnh) — hộp thoại cho bạn biết ngay khi gõ liệu điều đó có xảy ra không. Để trống để giữ nguyên.

</div>
