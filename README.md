# AirCool Pro

Landing page dan form booking untuk jasa servis AC panggilan. Proyek ini dibuat dengan React + Vite dan fokus pada pengalaman pengguna yang sederhana, cepat, dan mudah diproses dari ponsel.

## Fitur utama

- Hero section yang menjual jasa secara jelas dan modern
- Daftar layanan dengan estimasi biaya mulai
- Form booking yang bisa diisi untuk jadwal teknisi
- Validasi dasar form pada browser dan tombol WhatsApp konfirmasi
- Bagian keunggulan, testimoni, serta FAQ untuk membangun trust pelanggan
- Navigasi dengan tombol menu dan CTA ke WhatsApp

## Teknologi yang digunakan

- React 19
- Vite 8
- Lucide React untuk ikon
- CSS murni untuk styling custom

## Cara menjalankan

1. Install dependency:
   ```bash
   npm install
   ```
2. Jalankan aplikasi di mode development:
   ```bash
   npm run dev
   ```
3. Build untuk production:
   ```bash
   npm run build
   ```
4. Preview hasil build:
   ```bash
   npm run preview
   ```

## Struktur proyek

```bash
src/
  App.jsx
  App.css
  main.jsx
  components/
    Home.jsx
    Booking.jsx
    Navbar.jsx
    Footer.jsx
```

## Catatan

- Nomor WhatsApp di landing page masih berupa contoh default untuk kebutuhan demo.
- Anda dapat mengganti teks, harga, dan kontak sesuai kebutuhan bisnis nyata.
- Form booking saat ini fokus pada UX frontend, belum terhubung ke backend atau database.

## Pengembangan selanjutnya

- Integrasi backend untuk menyimpan booking ke database
- Kirim data form ke WhatsApp atau email secara otomatis
- Tambahkan CMS sederhana untuk mengelola layanan dan promo
- Upgrade ke TypeScript untuk skalabilitas proyek
