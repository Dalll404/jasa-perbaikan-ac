# Alur booking AirCool Pro

Dokumen ini menjelaskan cara kerja form permintaan servis pada antarmuka saat ini.

## Alur pelanggan

1. Pelanggan memilih layanan dari beranda atau membuka menu **Cara pesan**.
2. Pilihan layanan dari kartu beranda diteruskan dan dipilih otomatis pada formulir.
3. Pelanggan mengisi identitas, nomor WhatsApp, alamat, jumlah unit, tanggal, waktu, serta catatan opsional.
4. Browser memvalidasi kolom wajib, format dasar nomor telepon (9–15 digit), dan mencegah pemilihan tanggal yang sudah lewat.
5. Setelah dikirim, aplikasi menampilkan ringkasan permintaan dan tautan WhatsApp berisi seluruh detail.
6. Pelanggan membuka WhatsApp untuk mengirim permintaan. Jadwal baru terkonfirmasi setelah tim membalas.

## Batasan saat ini

- Form tidak mengirim data ke server, tidak menyimpan booking, dan tidak memeriksa ketersediaan teknisi.
- Konfirmasi WhatsApp dilakukan oleh pelanggan dengan menekan tautan. Aplikasi tidak mengirim pesan otomatis.
- Harga yang ditampilkan merupakan estimasi mulai; biaya final harus dikonfirmasi setelah pemeriksaan.
- Nomor WhatsApp contoh disimpan sebagai `WHATSAPP_NUMBER` di `src/data/services.js` dan harus diganti sebelum rilis.
- Format nomor diperiksa secara dasar saja. Nomor lokal maupun internasional diterima selama berisi 9–15 digit.

## Mengubah daftar layanan

Daftar terpusat berada di `src/data/services.js`. Pertahankan `id` unik untuk setiap layanan serta `label` yang menjadi nilai pilihan di formulir. Beranda dan formulir booking membaca katalog yang sama.

## Perilaku antarmuka

- Form booking menggunakan tata letak satu kolom di ponsel dan dua kolom untuk kelompok field terkait pada layar yang lebih lebar.
- Field dan tombol utama memiliki tinggi minimum yang memadai untuk interaksi sentuh.
- Transisi tampilan dibuat dengan Framer Motion; animasi tidak mengubah validasi atau pengiriman data.
- Preferensi sistem `prefers-reduced-motion` dihormati untuk mengurangi animasi CSS. Saat mengembangkan animasi tambahan, hindari menyembunyikan informasi penting di balik animasi.
- Styling memakai utility Tailwind CSS 4 dan plugin Vite resmi.

## Pengembangan integrasi backend

Untuk booking yang tersimpan, tambahkan endpoint backend dengan validasi server-side, kebijakan privasi/retensi data, proteksi spam, dan penanganan kegagalan jaringan. Jangan menganggap tampilan sukses lokal sebagai konfirmasi jadwal. Integrasi kalender dan notifikasi juga perlu berada di server.
