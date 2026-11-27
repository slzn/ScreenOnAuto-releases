---
title: "Kontrol Pencerminan dari Aplikasi Lain"
description: "Mulai, hentikan, atau alihkan pencerminan dengan intent, dari aplikasi otomatisasi, pintasan, atau ADB."
lang: id
slug: control-mirroring-from-another-app
permalink: /docs/id/control-mirroring-from-another-app/
date: 2026-10-15
last_modified_at: 2026-10-15
---

# Kontrol Pencerminan dari Aplikasi Lain

ScreenOnAuto menerima tiga intent yang memulai, menghentikan, atau
mengalihkan pencerminan. Apa pun yang bisa mengirim intent — aplikasi otomatisasi, pintasan di
layar utama, skrip lewat ADB, aplikasi buatan Anda sendiri — bisa mengendalikan pencerminan
dengannya, sehingga pencerminan bisa menyala bersama rutinitas berkendara Anda yang lain alih-alih
dinyalakan secara manual.

## Tiga aksi

| Aksi | Fungsinya |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Memulai pencerminan. Tidak melakukan apa pun jika sudah berjalan. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Menghentikan pencerminan. Tidak melakukan apa pun jika tidak sedang berjalan. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Menghentikannya jika sedang berjalan, memulainya jika tidak. |

Mengulang sebuah aksi selalu aman. Perintah mulai yang dikirim ke pencerminan yang sudah berjalan
diabaikan, bukan membongkar sesi lalu membangunnya lagi, sehingga sesuatu yang terpicu setiap kali
Bluetooth tersambung tidak akan mengganggu pencerminan yang sudah aktif.

## Di aplikasi otomatisasi

Kebanyakan aplikasi otomatisasi menyediakan bagian-bagian yang sama dengan label masing-masing —
biasanya berupa aksi "kirim intent" dengan kolom kurang lebih seperti ini:

| Kolom | Nilai |
|---|---|
| Action | salah satu dari tiga aksi di atas |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (atau `…MirrorControlReceiver` untuk broadcast) |
| Target | Activity (atau Broadcast) |

Pakailah Activity kecuali Anda punya alasan untuk tidak memakainya — dua bagian berikut
menjelaskan perbedaannya, dan mengapa broadcast tidak bisa diandalkan untuk *memulai*
pencerminan. Apa pun pilihannya, kolom **Class** tidak opsional: jika dikosongkan, broadcast sama
sekali tidak akan sampai.

Jika ada yang tidak berfungsi, coba dulu perintah ADB yang sesuai di bawah. Dari situ Anda tahu
apakah masalahnya ada pada intent atau pada aplikasi yang mengirimnya.

## Memulai activity (disarankan)

Kirim aksinya ke `idv.lzn.screenonauto/.MirrorControlActivity` sebagai **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Tidak ada bagian ScreenOnAuto yang muncul di layar, dan tidak ada yang tertinggal di Aplikasi
terbaru. Anda juga bisa mengirim perintah mulai *sebelum* sampai di mobil — pencerminan akan
menunggu, lalu berjalan sendiri begitu layar mobil tersedia.

> **ℹ️ Catatan**
> Android tetap meminta izin perekaman layar saat pencerminan dimulai. Agar benar-benar tanpa
> sentuhan tangan, berikan izin itu sekali lewat ADB — lihat
> [Berikan Izin Pencerminan melalui ADB](/docs/id/grant-mirror-permission-via-adb/).

## Mengirim broadcast

Ketiga aksi yang sama juga berfungsi sebagai **broadcast**, yang dikirim ke
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Perintah **berhenti** yang dikirim dengan cara ini sepenuhnya senyap — tanpa jendela, tanpa
kedipan.

Menyebutkan komponen tidak opsional. Android modern tidak mengirimkan broadcast ke sebuah aplikasi
kecuali pengirimnya menyebutkan untuk komponen mana broadcast itu, sehingga broadcast yang hanya
membawa aksi akan dibuang dan tidak terjadi apa pun, tanpa pesan error di mana pun.

> **⚠️ Peringatan**
> Perintah **mulai** yang dikirim sebagai broadcast tidak bisa diandalkan, dan saat gagal, ia
> gagal tanpa pemberitahuan. Ada dua hal yang harus diizinkan lebih dulu, dan keduanya nonaktif
> secara default di banyak ponsel:
>
> - **Mulai otomatis.** Banyak ponsel dilengkapi manajemen daya yang sama sekali mencegah
>   aplikasi dibangunkan oleh broadcast. Cari pengelola mulai otomatis di setelan baterai atau
>   pengelola ponsel, lalu izinkan ScreenOnAuto di sana. Ponsel mungkin memperingatkan Anda
>   agar tidak melakukannya.
> - **Tampilkan di atas aplikasi lain.** Berikan izin ini untuk ScreenOnAuto di setelan aplikasi
>   Android.
>
> Jika Anda hanya perlu memulai, pakai activity di atas — cara itu tidak membutuhkan keduanya.

## Pemecahan masalah

- **Sama sekali tidak terjadi apa-apa** — pastikan komponennya disebutkan. Broadcast tanpa
  komponen dibuang sebelum ScreenOnAuto sempat terlibat.
- **Berhenti berfungsi tetapi mulai tidak melakukan apa pun** — Anda mengirim broadcast, dan salah
  satu dari dua izin di peringatan di atas belum ada. Kirim ke activity saja.
- **Dialog izin muncul setiap kali** — memang begitu, kecuali Anda memberikan izinnya lebih dulu
  lewat [ADB](/docs/id/grant-mirror-permission-via-adb/).
- **Mulai tidak melakukan apa pun saat pencerminan sudah berjalan** — ini juga memang begitu; lihat
  di atas.
