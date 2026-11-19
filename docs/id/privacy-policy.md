---
title: "Kebijakan Privasi"
description: "Apa yang dilakukan dan tidak dilakukan ScreenOnAuto dengan data Anda: aplikasi ini tidak memiliki izin internet, tidak mengumpulkan apa pun, dan tidak membagikan apa pun."
lang: id
slug: privacy-policy
permalink: /docs/id/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Kebijakan Privasi

ScreenOnAuto adalah aplikasi Android yang dikembangkan oleh Chih-En Liu untuk mencerminkan layar ponsel ke head unit Android Auto. Kebijakan ini mencakup aplikasi dan situsnya, screenonauto.lzn.idv.tw, termasuk halaman instal di `/join/`.

**Singkatnya: aplikasi ini tidak mengumpulkan data pribadi, tidak menyimpannya di server mana pun, dan tidak membagikannya kepada siapa pun.**

## Aplikasi

### Tanpa akses internet

ScreenOnAuto tidak meminta izin internet Android, jadi tidak bisa mengirim data ke luar ponsel Anda. Aplikasi ini tidak berisi library iklan, analitik, pelaporan error, atau pelacakan, dan tidak memerlukan akun.

### Untuk apa izin-izin digunakan

Semua hal di bawah ini terjadi di ponsel Anda. Apa pun yang keluar dari ponsel hanya menuju mobil Anda, melalui koneksi Android Auto.

| Izin | Digunakan untuk |
|---|---|
| Perekaman layar (MediaProjection) | Merekam layar ponsel, atau satu aplikasi, dan menampilkannya di layar mobil. Tidak ada yang direkam ke file atau disimpan. |
| Akses notifikasi | Membaca sesi media yang aktif (apa yang sedang diputar, putar/jeda, lewati) untuk kontrol media. Isi notifikasi tidak dibaca maupun disimpan. |
| Layanan Aksesibilitas | Mengubah sentuhan di layar mobil menjadi sentuhan di ponsel, serta tombol Kembali / Beranda / Aplikasi terbaru. Layanan ini tidak membaca isi layar dan tidak menggunakan peristiwa aksesibilitas yang diterimanya. |
| Tampilkan di atas aplikasi lain | Overlay untuk Peredupan otomatis, Kunci orientasi, dan Peredupan malam. |
| Ubah setelan sistem | Mengunci rotasi layar selama pencerminan, di Android 16 dan yang lebih baru dalam mode tablet. |
| Shizuku atau root (opsional) | Fitur istimewa: mematikan layar ponsel, injeksi sentuh, tombol navigasi ponsel, serta mengubah ukuran layar, kepadatan, tema, ukuran font, mode navigasi, dan peluncur default (aplikasi layar utama) ponsel selama pencerminan. Nilai asli ponsel dikembalikan saat pencerminan berakhir. |

### Apa yang disimpan

Pengaturan Anda, beserta nilai asli ponsel yang dikembalikan aplikasi setelah pencerminan (seperti ukuran layar, tema, atau peluncur default), disimpan di penyimpanan milik aplikasi di ponsel Anda. Menghapus aplikasi juga menghapusnya. Jika pencadangan Android aktif, Android dapat menyertakan pengaturan ini dalam cadangan Akun Google Anda sendiri, atau menyalinnya ke ponsel baru saat Anda memindahkan data, seperti pada kebanyakan aplikasi.

### Google Play

Jika Anda menginstal ScreenOnAuto dari Google Play, Google dapat mengumpulkan statistik error dan performa sesuai setelan perangkat Anda, lalu membagikannya kepada developer dalam bentuk gabungan (Android vitals). Hal ini ditangani Google berdasarkan [Kebijakan Privasi Google](https://policies.google.com/privacy?hl=id).

## Situs

### Halaman instal (`/join/`)

Untuk menjadi penguji, Anda login dengan Google di halaman instal. Hanya alamat email akun Anda yang digunakan, untuk menambahkan Anda ke daftar penguji Google Play pada putaran tersebut. Anda tidak akan pernah dikirimi email, dan daftar itu dihapus begitu jendela instal putaran berakhir.

Proses login ditangani Google: halaman memuat skrip login Google, yang dapat memasang cookie Google dan menerima alamat IP Anda, berdasarkan [Kebijakan Privasi Google](https://policies.google.com/privacy?hl=id). Setelah Anda login, token login yang dikembalikan Google, yang berisi detail Akun Google seperti alamat email, disimpan di penyimpanan sesi browser sampai Anda menutup tab. Halaman mengirim token itu ke server instal (api.screenonauto.lzn.idv.tw), yang menerima alamat IP Anda pada setiap permintaan, tetapi tidak mencatat alamat IP maupun alamat email Anda.

### Selebihnya

Selain login di halaman instal, situs ini tidak menggunakan analitik, pelacakan, atau cookie. Pilihan tema terang/gelap Anda disimpan di penyimpanan lokal browser. Situs ini di-hosting di GitHub Pages dan memuat font dari Google Fonts, sehingga GitHub dan Google menerima alamat IP Anda saat menyajikan halaman, sesuai kebijakan privasi masing-masing.

## Laporan bug yang Anda kirim

Jika Anda memilih mengirim laporan bug atau log, misalnya melalui link Google Drive di issue GitHub, laporan tersebut bisa berisi informasi tentang perangkat Anda dan aplikasi di dalamnya. Laporan hanya digunakan untuk menyelidiki masalah Anda dan dihapus setelah penyelidikan selesai. Issue GitHub bersifat publik, jadi jangan memposting informasi pribadi di sana.

## Anak-anak

ScreenOnAuto tidak ditujukan untuk anak di bawah 13 tahun dan tidak dengan sengaja mengumpulkan data siapa pun.

## Perubahan

Jika kebijakan ini berubah, versi barunya akan diterbitkan di halaman ini, dan tanggal “Terakhir diperbarui” di bawah akan berubah.

## Kontak

Buka issue di [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) atau kirim email ke screenonauto@gmail.com.
