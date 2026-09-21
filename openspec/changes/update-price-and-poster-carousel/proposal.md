## Why

Hasil evaluasi iklan menunjukkan bahwa penawaran harga Rp 350.000 dengan komitmen multi-hari memiliki konversi rendah. Untuk meningkatkan daya tarik dan menurunkan friksi pendaftaran secara drastis, program diubah menjadi model harga terjangkau Rp 99.000 dengan format 1 hari intensif (Sabtu, 3 Oktober 2026, 09.00 - 15.00 WIB). Tampilan visual juga ditingkatkan dari 1 poster statis menjadi interactive carousel 3 slide yang menonjolkan keuntungan konkret: bonus aplikasi kasir (POS), dashboard analitik, dan kurikulum lengkap.

## What Changes

- **Pembaruan Harga & Jadwal**: Mengubah harga pelatihan Coding with AI menjadi Rp 99.000 (dari Rp 350.000) dan memadatkan jadwal menjadi 1 hari intensif (Sabtu, 3 Oktober 2026, 09.00 - 15.00 WIB).
- **Kompresi & Optimasi Aset Carousel**: Mengonversi 3 flyer (`Flyer Gratis POS.png`, `Flyer Gratis Dashboard 2.png`, `Flyer Course 2.png`) ke format WebP di `public/carousel/` dengan kompresi optimal dan ukuran file ringan.
- **Komponen Interactive Carousel**: Mengganti tampilan poster tunggal pada Hero Section dengan carousel 3 slide interaktif yang dilengkapi tombol navigasi (prev/next), indikator dots, auto-play halus (dengan jeda saat hover), dan tombol buka gambar resolusi penuh.
- **Sinkronisasi Teks & Tombol**: Memperbarui semua label harga di Header, Hero CTA, template pesan WhatsApp, dan opsi dropdown form pendaftaran.

## Capabilities

### New Capabilities
- `landing-page/hero-carousel-and-pricing`: Menyajikan showcase carousel 3 slide interaktif berformat WebP pada hero section serta menerapkan pricing promo Rp 99.000 dengan jadwal 1 hari intensif.

### Modified Capabilities
<!-- Tidak ada delta spec capability sebelumnya di openspec/specs/ -->

## Impact

- File yang terpengaruh:
  - `public/carousel/` (file gambar WebP terkompresi baru)
  - `src/data.ts` (pembaruan data `umkmTraining` mencakup harga, jadwal 1 hari, dan pesan WhatsApp)
  - `src/App.tsx` (pembaruan komponen Hero menjadi carousel interaktif dan penyesuaian label navigasi/tombol)
- Tidak ada breaking change terhadap sistem pembayaran atau routing luar.
