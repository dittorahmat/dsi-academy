## Why

Website DSI Academy saat ini fokus pada program Data Engineering dengan tampilan bernuansa gelap (dark mode / neon / cyber tech), yang kurang inklusif bagi pemilik UMKM dan berisiko terkesan seperti template AI generic ("AI slop"). Di sisi lain, DSI Academy meluncurkan program pelatihan praktis digitalisasi UMKM (Kasir, Inventory, Akuntansi dengan AI) berdurasi 4 hari dengan biaya terjangkau (Rp 350.000).

Perubahan ini bertujuan untuk menghadirkan segmen UMKM secara sejajar (dual-track) di area *above-the-fold* (Hero Section) serta merombak tema visual menjadi palet bersih putih-biru (look-and-feel clean ala Facebook / modern utility UI) yang fungsional, ramah pengguna, dan bebas kesan AI slop.

## What Changes

- **Transformasi Tema Visual (Clean White-Blue)**: Mengganti background gelap (`#0b0f19`) menjadi putih (`#ffffff`) dengan section latar abu-abu netral (`#f0f2f5`), tipografi tegas slate gelap (`#1c1e21` / `#334155`), dan aksen biru solid (`#1877f2` / `#0b4596`) ala Facebook UI.
- **Hero Dual-Track (Above-the-Fold)**:
  - Mengubah layout hero agar menempatkan Jalur Profesional (Data Engineering) dan Jalur UMKM (Digitalisasi & AI Bisnis) secara berdampingan dan seimbang.
  - Menggantikan visual terminal etl simulator sebelumnya dengan Kartu Pelatihan UMKM Interaktif.
- **Kartu Pelatihan UMKM (Native Web UI)**:
  - Informasi biaya transparan: Rp 350.000.
  - Jadwal riil 4 sesi:
    - 3 Oktober: 08.30 – 14.00 WIB (ada 2x break)
    - 6 Oktober: 20.00 – 22.00 WIB
    - 8 Oktober: 20.00 – 22.00 WIB
    - 10 Oktober: 10.00 – 12.00 WIB
  - Bonus 3 aplikasi siap pakai: Simple POS, Simple Inventory, Simple Accounting.
  - Tombol aksi langsung pendaftaran via WhatsApp dengan prefilled message.
- **Penerapan Prinsip Anti AI-Slop**: Copywriting to-the-point, konkret, tanpa kata-kata klise/buzzword (misal: "transformasi paradigma", "elevate", "supercharge"), serta UI yang mengutamakan fungsi dan keterbacaan tinggi.

## Capabilities

### New Capabilities
- `umkm-training-track`: Penyajian penawaran pelatihan digitalisasi bisnis UMKM (kurikulum, jadwal 4 pertemuan, biaya Rp 350.000, bonus 3 aplikasi, dan integrasi CTA pendaftaran).
- `clean-light-theme`: Penerapan tema putih-biru berbasis utility (Facebook-style) di seluruh halaman untuk meningkatkan keterbacaan dan menghilangkan kesan AI slop.

### Modified Capabilities
<!-- Tidak ada spesifikasi yang sudah ada sebelumnya di openspec/specs/ -->

## Impact

- `src/App.tsx`: Refaktor Header, Hero (Dual Track), serta perataan komponen ke tema terang.
- `src/index.css`: Penggantian token warna, background body, dan eliminasi gaya neon/dark glassmorphism.
- `src/data.ts`: Penambahan metadata dan data jadwal khusus program UMKM.
