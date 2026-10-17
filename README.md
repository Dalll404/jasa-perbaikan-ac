# AirCool Pro

Landing page dan alur permintaan jadwal untuk layanan servis AC panggilan. Dibangun dengan React 19, Vite, Tailwind CSS 4, Framer Motion, dan Lucide React.

## Fitur

- Landing page responsif dengan informasi layanan, manfaat, proses kerja, ulasan, FAQ interaktif, dan CTA.
- Navigasi desktop dan menu navigasi mobile yang dapat diakses.
- Halaman booking dengan URL hash `#booking`, sehingga bisa dibuka langsung dan navigasi browser tetap bekerja.
- Katalog layanan terpusat. Layanan yang dipilih dari beranda otomatis dibawa ke form booking.
- Validasi kolom wajib, validasi dasar nomor telepon, serta tanggal kunjungan minimal hari ini.
- Ringkasan permintaan dan tautan WhatsApp yang menyertakan semua informasi booking.
- Metadata Bahasa Indonesia dan fokus keyboard yang terlihat.
- Tata letak responsif untuk ponsel, tablet, dan desktop dengan area sentuh yang nyaman serta form yang mudah dibaca.
- Animasi ringan pada hero, formulir booking, dan bagian informasi; mengikuti preferensi `prefers-reduced-motion`.

## Teknologi

- React 19 dan React DOM
- Vite 8
- Tailwind CSS 4 melalui plugin Vite
- Framer Motion untuk transisi dan animasi berbasis viewport
- Lucide React
- CSS untuk font dan sentuhan global

## Menjalankan aplikasi

Persyaratan: Node.js yang kompatibel dengan Vite 8 dan npm.

```bash
npm install
npm run dev
```

Perintah lain:

```bash
npm run lint     # pemeriksaan ESLint
npm run build    # build production ke dist/
npm run preview  # preview build production secara lokal
```

## Struktur proyek

```text
src/
  App.jsx                    # navigasi aplikasi dan state layanan terpilih
  index.css                  # style global, impor font, dan preferensi reduced motion
  main.jsx                   # entry point React
  data/
    services.js              # katalog layanan dan konfigurasi WhatsApp
  components/
    Booking.jsx              # formulir booking, validasi, ringkasan
    Footer.jsx
    Home.jsx
    Navbar.jsx
public/
docs/
  booking-flow.md            # detail alur booking dan batasan
```

## Konfigurasi sebelum rilis

1. Ganti `WHATSAPP_NUMBER` dalam `src/data/services.js` dengan nomor bisnis berformat internasional tanpa tanda `+`, spasi, atau tanda baca. Nilai demo saat ini bukan nomor operasional yang dijamin.
2. Verifikasi harga, cakupan layanan, jam operasional, area, garansi, ulasan, serta materi promosi terhadap informasi bisnis yang sebenarnya.
3. Font DM Sans dimuat dari Google Fonts; siapkan fallback atau font yang di-host sendiri jika aplikasi harus berjalan tanpa koneksi eksternal.

## Cara kerja dan batasan booking

Form saat ini berjalan di sisi browser saja. Pengiriman menampilkan permintaan lokal lalu menyediakan tautan untuk pelanggan membuka WhatsApp dan mengirim ringkasan. Tidak ada penyimpanan database, notifikasi otomatis, pengecekan ketersediaan jadwal, maupun konfirmasi jadwal dari server. Jadwal belum terkonfirmasi sampai tim membalas pelanggan.

Untuk detail validasi, alur, batasan, dan rekomendasi integrasi backend, baca [docs/booking-flow.md](docs/booking-flow.md).

## Antarmuka responsif dan animasi

Tailwind CSS 4 digunakan melalui plugin resmi Vite (`@tailwindcss/vite`). Sebagian besar tata letak dan tampilan komponen ditulis dengan utility class Tailwind. Framer Motion menangani animasi masuk pada hero/formulir, animasi hover/tap tombol, dan reveal bagian saat masuk viewport. Tidak diperlukan konfigurasi Tailwind tambahan di `vite.config.js` selain plugin yang sudah terpasang.

Untuk aksesibilitas, animasi CSS global dikurangi saat sistem pengguna mengaktifkan `prefers-reduced-motion`. Pastikan animasi baru tetap dekoratif dan tidak menjadi satu-satunya cara menyampaikan informasi. Periksa tampilan setidaknya pada lebar ponsel 320–390 px, tablet, dan desktop setelah mengubah komponen.
