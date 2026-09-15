## 1. Data & Theme Configuration

- [x] 1.1 Tambahkan struktur data `umkmTraining` di `src/data.ts` (mencakup judul, tagline, jadwal 4 pertemuan, biaya Rp 350.000, benefit, bonus 3 aplikasi, dan link pendaftaran WhatsApp khusus), lalu verifikasi bahwa type data lolos pemeriksaan TypeScript (`npx tsc --noEmit`).
- [x] 1.2 Perbarui file `src/index.css` untuk menerapkan tema putih-biru (background `#ffffff`, section alternate `#f0f2f5`, warna teks slate `#1c1e21`, border `#e4e6eb`, dan aksen biru `#1877f2`), serta bersihkan efek glassmorphism/neon gelap, lalu verifikasi build CSS tidak error.

## 2. Implementasi Komponen Pelatihan UMKM & Hero Dual-Track

- [x] 2.1 Bangun kartu native `UmkmCard` di `src/App.tsx` yang menampilkan badge harga Rp 350.000, 4 jadwal tanggal & jam, 3 bonus aplikasi bisnis, dan tombol WhatsApp prefilled, lalu verifikasi komponen ter-render dengan rapi.
- [x] 2.2 Modifikasi Hero Section di `src/App.tsx` menjadi layout Dual-Track (Kiri: Jalur Profesional Data Engineer, Kanan: Jalur Digitalisasi UMKM), lalu verifikasi kedua track tampak sejajar di desktop dan responsif di mobile.

## 3. Konversi Seluruh Halaman ke Clean White-Blue Theme

- [x] 3.1 Refaktor Header, Navigation, dan Section Keunggulan di `src/App.tsx` agar menggunakan styling putih-biru yang kontras, bersih, dan bebas dark/cyber glow.
- [x] 3.2 Refaktor Section Kurikulum Kelas, Testimoni, FAQ, dan Footer di `src/App.tsx` agar selaras dengan tema terang Facebook-style, lalu verifikasi seluruh teks mudah dibaca dan tidak ada elemen kontras rendah.

## 4. Verifikasi & Build

- [x] 4.1 Jalankan `npm run build` untuk memverifikasi tidak ada error TypeScript maupun bundle build issue.
- [x] 4.2 Lakukan inspeksi visual menyeluruh terhadap tata letak hero above-the-fold, tautan CTA WhatsApp, dan keselarasan palet warna putih-biru.
