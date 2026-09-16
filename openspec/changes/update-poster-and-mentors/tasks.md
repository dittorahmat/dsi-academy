## 1. Optimasi & Konversi Aset Gambar

- [x] 1.1 Resize dan kompresi `public/Ads_TrainingIT_ver2.png` ke `public/Ads_TrainingIT_ver2.webp` serta verifikasi ukuran berkurang drastis dengan visual tetap tajam.
- [x] 1.2 Proses foto mentor `public/Ditto Asnar.jpg` dan `public/Hendra Wahyudi.jpeg` menjadi format WebP di `public/mentors/` dan verifikasi file berhasil dimuat.
- [x] 1.3 Konversi dan optimasi seluruh logo sertifikasi dan tools workshop (`sas`, `scrum`, `ms sql dwh`, `ms sql query`, `mcp`, `python`, `azure`, `airflow`, `opencode`) ke format WebP di `public/badges/`.

## 2. Pembaruan Data Mentor

- [x] 2.1 Perbarui struktur dan data mentor di `src/data.ts` dengan ringkasan CV riil (Ditto R. K. Asnar dan Hendra Wahyudi) dan verifikasi tidak ada error TypeScript.
- [x] 2.2 Tambahkan data sertifikasi resmi dan tools workshop ke dalam data mentor di `src/data.ts`.

## 3. Integrasi Tampilan di Landing Page

- [x] 3.1 Perbarui komponen `<HeroPosterShowcase />` di `src/App.tsx` agar menggunakan `Ads_TrainingIT_ver2.webp` dan rasio yang proporsional.
- [x] 3.2 Buat section profil mentor di `src/App.tsx` yang ditempatkan tepat sebelum komponen `<Keunggulan />` (sebelum "Kenapa belajar di Integra Academy") dan verifikasi navigasi header/anchor.
- [x] 3.3 Tampilkan deretan logo sertifikasi terverifikasi dan tools workshop di bawah track record mentor pada `src/App.tsx` dengan desain bersih dan rapi.

## 4. Build & Verifikasi Akhir

- [x] 4.1 Jalankan `npm run build` dan verifikasi tidak ada error typecheck atau bundling.
