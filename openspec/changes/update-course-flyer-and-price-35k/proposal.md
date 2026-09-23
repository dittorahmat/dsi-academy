## Why

Untuk meningkatkan conversion rate dan menurunkan hambatan pendaftaran secara signifikan, program pelatihan Coding with AI kini ditawarkan dengan promo terjangkau Rp 35.000 (harga coret Rp 350.000). Visual utama pada landing page diperbarui menggunakan poster resmi tunggal terbaru (`Flyer IT course.png`) menggantikan carousel, serta kontak narahubung admin WhatsApp diselaraskan ke nomor Mas Hendra (+62 813-8580-8284).

## What Changes

- **Pembaruan Harga Promo**: Mengubah harga pelatihan Coding with AI menjadi Rp 35.000 (dengan harga coret Rp 350.000) di seluruh halaman web, tombol CTA, navigasi mobile, template pesan WhatsApp, dan dropdown formulir pendaftaran.
- **Pembaruan & Kompresi Poster Utama**: Mengganti carousel lama dengan satu poster utama resolusi tinggi berbasis `Flyer IT course.png` yang telah dikompresi ke format WebP ringan dan PNG teroptimasi di `public/`.
- **Showcase Poster Hero**: Mengganti komponen slider/carousel hero menjadi poster showcase terfokus dengan opsi "Buka Full", penyesuaian highlight materi (Coding AI & Data Analyst) dan bonus (POS & Puluhan Template Dashboard).
- **Pembaruan Kontak & Admin WhatsApp**: Memperbarui nomor WhatsApp resmi menjadi `6281385808284` (0813-8580-8284) dan nama admin narahubung menjadi Mas Hendra.
- **Link Pendaftaran**: Mempertahankan pendaftaran langsung via Lynk.id resmi.

## Capabilities

### New Capabilities
- `landing-page/hero-flyer-and-pricing-35k`: Menampilkan poster tunggal resmi berformat WebP terkompresi dengan promo Rp 35.000 (coret Rp 350.000) dan kontak WhatsApp Mas Hendra.

### Modified Capabilities
<!-- Tidak ada modified capabilities karena belum ada base spec di openspec/specs/ -->

## Impact

- File yang terpengaruh:
  - `public/flyer-it-course.webp` & `public/flyer-it-course.png` (aset gambar baru terkompresi)
  - `src/data.ts` (konstanta `WA_NUMBER`, `umkmTraining` harga Rp 35.000, coret Rp 350.000, waMessage)
  - `src/App.tsx` (komponen Hero poster showcase, tombol CTA, kontak Mas Hendra, opsi select form pendaftaran)
