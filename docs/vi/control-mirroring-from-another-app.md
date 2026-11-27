---
title: "Điều khiển phản chiếu từ ứng dụng khác"
description: "Bắt đầu, dừng hoặc bật/tắt phản chiếu bằng một intent, từ ứng dụng tự động hóa, lối tắt hoặc ADB."
lang: vi
slug: control-mirroring-from-another-app
permalink: /docs/vi/control-mirroring-from-another-app/
date: 2026-10-15
last_modified_at: 2026-10-15
---

# Điều khiển phản chiếu từ ứng dụng khác

ScreenOnAuto nhận ba intent để bắt đầu, dừng hoặc bật/tắt
phản chiếu. Bất cứ thứ gì gửi được intent — ứng dụng tự động hóa, lối tắt trên màn hình chính,
một đoạn script qua ADB, hay ứng dụng do chính bạn viết — đều có thể điều khiển phản chiếu bằng chúng, để
phản chiếu bật lên cùng với các thiết lập lái xe khác thay vì phải bật bằng tay.

## Ba hành động

| Hành động | Công dụng |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Bắt đầu phản chiếu. Không làm gì nếu đang phản chiếu. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Dừng phản chiếu. Không làm gì nếu chưa phản chiếu. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Dừng nếu đang phản chiếu, bắt đầu nếu chưa. |

Gửi lặp lại một hành động luôn an toàn. Lệnh bắt đầu gửi tới một phản chiếu đang chạy sẽ bị bỏ qua
thay vì hủy phiên rồi dựng lại từ đầu, nên một tác vụ chạy mỗi lần
kết nối Bluetooth sẽ không làm gián đoạn phản chiếu đang chạy.

## Trong ứng dụng tự động hóa

Hầu hết các ứng dụng tự động hóa đều có cùng các thành phần này dưới tên gọi riêng — thường là
hành động "gửi intent" với các trường tương tự như sau:

| Trường | Giá trị |
|---|---|
| Action | một trong ba hành động ở trên |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (hoặc `…MirrorControlReceiver` khi gửi broadcast) |
| Target | Activity (hoặc Broadcast) |

Hãy dùng Activity trừ khi bạn có lý do khác — hai phần tiếp theo
giải thích sự khác biệt, và vì sao không thể trông cậy vào broadcast để *bắt đầu* phản chiếu.
Dù dùng cách nào, trường **Class** cũng không được bỏ trống: nếu để trống, broadcast sẽ hoàn toàn
không tới được ứng dụng.

Nếu có gì không hoạt động, trước tiên hãy thử lệnh ADB tương ứng bên dưới. Nó cho bạn biết
vấn đề nằm ở intent hay ở ứng dụng gửi intent.

## Khởi chạy một activity (khuyên dùng)

Gửi hành động tới `idv.lzn.screenonauto/.MirrorControlActivity` dưới dạng **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Không có gì của ScreenOnAuto hiện lên màn hình, và nó cũng không để lại gì trong Ứng dụng gần đây. Bạn
còn có thể gửi lệnh bắt đầu *trước khi* tới xe — phản chiếu sẽ chờ, và tự
tiếp tục khi màn hình xe sẵn sàng.

> **ℹ️ Lưu ý**
> Android vẫn xin quyền ghi màn hình khi bắt đầu phản chiếu. Để thực sự
> rảnh tay, hãy cấp trước quyền này một lần qua ADB — xem
> [Cấp quyền phản chiếu qua ADB](/docs/vi/grant-mirror-permission-via-adb/).

## Gửi broadcast

Ba hành động này cũng hoạt động dưới dạng **broadcast**, khi đó gửi tới
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Lệnh **dừng** gửi theo cách này hoàn toàn không gây chú ý — không có cửa sổ, không chớp màn hình.

Bắt buộc phải ghi rõ thành phần nhận. Android hiện đại không chuyển broadcast tới một
ứng dụng nếu bên gửi không nói rõ broadcast dành cho thành phần nào, nên broadcast chỉ mang
hành động sẽ bị bỏ đi và không có gì xảy ra cả, cũng không có lỗi nào ở đâu.

> **⚠️ Cảnh báo**
> Lệnh **bắt đầu** gửi dưới dạng broadcast không đáng tin cậy, và khi thất bại thì thất bại trong im lặng.
> Phải cho phép hai thứ trước, và cả hai đều tắt theo mặc định trên nhiều điện thoại:
>
> - **Tự khởi động.** Nhiều điện thoại có sẵn cơ chế quản lý pin chặn hoàn toàn việc một ứng dụng
>   được đánh thức bằng broadcast. Hãy tìm trình quản lý tự khởi động trong phần cài đặt pin hoặc
>   trình quản lý điện thoại và cho phép ScreenOnAuto ở đó. Điện thoại có thể cảnh báo
>   bạn không nên làm vậy.
> - **Hiển thị trên các ứng dụng khác.** Cấp quyền này cho ScreenOnAuto trong phần cài đặt ứng dụng của Android.
>
> Nếu bạn chỉ cần bắt đầu, hãy dùng activity ở trên — cách đó không cần hai thứ này.

## Khắc phục sự cố

- **Hoàn toàn không có gì xảy ra** — hãy kiểm tra đã ghi rõ thành phần nhận chưa. Broadcast thiếu nó
  sẽ bị bỏ đi trước khi tới được ScreenOnAuto.
- **Dừng được nhưng bắt đầu thì không** — bạn đang gửi broadcast, và thiếu một trong hai
  quyền trong phần cảnh báo ở trên. Hãy gửi tới activity thay vào đó.
- **Hộp thoại xin quyền hiện ra mỗi lần** — đây là điều bình thường, trừ khi bạn cấp trước quyền bằng
  [ADB](/docs/vi/grant-mirror-permission-via-adb/).
- **Bắt đầu không có tác dụng khi phản chiếu đang chạy** — cũng là điều bình thường; xem ở trên.
