## Context

Lihat `proposal.md` untuk latar belakang dan motivasi pembaruan. Saat ini hero section menggunakan sistem carousel 3 slide flyer lama dengan harga Rp 99.000 (coret Rp 1.000.000) dan kontak WhatsApp admin lama. Pengguna meminta mengganti tampilan carousel menjadi showcase poster tunggal resmi dari `Flyer IT course.png`, mengompres aset gambar, memperbarui harga ke Rp 35.000 (coret Rp 350.000), serta mengubah kontak admin ke Mas Hendra (+62 813-8580-8284).

## Goals / Non-Goals

**Goals:**
- Mengompres `public/Flyer IT course.png` ke format WebP (~1200x1200px) untuk kinerja rendering cepat dan ukuran file optimal (< 350KB), sekaligus menyediakan fallback file PNG.
- Menyederhanakan komponen Hero di `src/App.tsx` dari carousel multi-slide menjadi showcase poster tunggal yang fokus, responsif, elegan, dan memiliki aksi "Buka Full".
- Memperbarui konstanta nomor WhatsApp `WA_NUMBER`, template pesan WA pendaftaran, dan nama admin menjadi Mas Hendra di `src/data.ts` dan `src/App.tsx`.
- Memperbarui nominal harga ke Rp 35.000 dan coret Rp 350.000 di semua elemen UI terkait.
- Memastikan link pendaftaran tetap langsung mengarah ke Lynk.id resmi.

**Non-Goals:**
- Mengubah struktur integrasi eksternal Lynk.id atau flow pembayaran luar.
- Mengubah silabus paket kelas bootcamp Data Engineering lainnya di luar program Coding with AI.

## Decisions

1. **Aset Poster WebP & PNG Teroptimasi**:
   - *Pilihan*: Menggunakan Node.js/PowerShell dengan sharp/canvas atau script image processing standar untuk resize & encode `Flyer IT course.png` menjadi `public/flyer-it-course.webp` dan `public/flyer-it-course.png`.
   - *Alternatif*: Menyimpan file mentah 2.1MB langsung. Ditolak karena memperlambat First Contentful Paint (FCP) di koneksi mobile.

2. **Refactor Komponen Hero dari Carousel ke Poster Showcase**:
   - *Pilihan*: Mengubah `HeroPosterCarousel` menjadi `HeroPosterShowcase` yang menampilkan poster tunggal dengan tag `<picture>` (WebP + fallback PNG), badge jaminan kualitas di bawahnya, dan tombol "Buka Full".
   - *Alternatif*: Mempertahankan slider dengan 1 slide saja. Ditolak karena panah slider dan dot pagination menjadi redundant jika hanya 1 poster.

3. **Sentralisasi Kontak WhatsApp**:
   - *Pilihan*: Memperbarui `WA_NUMBER = "6281385808284"` di `src/data.ts`, memperbarui teks `waMessage`, serta memastikan nomor teks yang tampil di UI merujuk ke kontak Mas Hendra (`0813-8580-8284`).

## Risks / Trade-offs

- [Keterbacaan teks poster pada layar HP sempit] → Sediakan tombol "Buka Full" yang membuka poster resolusi penuh di tab baru secara cepat.
- [Cache browser pada aset gambar lama] → Gunakan nama file baru yang spesifik (`flyer-it-course.webp` & `flyer-it-course.png`) untuk menghindari stale browser cache.
