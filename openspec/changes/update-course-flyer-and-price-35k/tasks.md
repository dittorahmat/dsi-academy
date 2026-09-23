## 1. Persiapan & Optimasi Aset Gambar

- [x] 1.1 Kompres dan konversi `public/Flyer IT course.png` menjadi format WebP teroptimasi (`public/flyer-it-course.webp`) dan PNG teroptimasi (`public/flyer-it-course.png`), lalu verifikasi file terbentuk dengan ukuran ringan (< 400KB).

## 2. Pembaruan Data & Kontak

- [x] 2.1 Update data di `src/data.ts`: perbarui `WA_NUMBER` menjadi `6281385808284`, perbarui `umkmTraining` harga coret `Rp 350.000` dan harga aktif `Rp 35.000`, perbarui `waMessage` menyertakan nama Mas Hendra dan harga Rp 35.000, serta tambahkan path gambar poster baru. Verifikasi via pemeriksaan file.

## 3. Pembaruan Komponen UI Landing Page

- [x] 3.1 Refactor Hero Section di `src/App.tsx`: ganti carousel slider multi-slide menjadi poster showcase tunggal berformat WebP dengan fallback PNG dan tombol "Buka Full".
- [x] 3.2 Update label harga Rp 35.000 dan kontak WhatsApp Mas Hendra (0813-8580-8284) di header navigasi mobile, tombol CTA pendaftaran, keterangan pendaftaran resmi, dropdown select pendaftaran, dan footer di `src/App.tsx`.
- [x] 3.3 Jalankan TypeScript check dan Vite build (`npm run build`) untuk memverifikasi tidak ada error sintaks, typing, atau styling.
