## Context

Kampanye sebelumnya dengan harga Rp 350.000 untuk 4 sesi dievaluasi ulang karena kurang menarik minat pasar. Tim memutuskan melakukan repositioning:
- Harga promo Rp 99.000.
- Durasi dipersingkat menjadi 1 hari intensif (Sabtu, 3 Oktober 2026, 09.00 - 15.00 WIB).
- Hero section menggunakan visual carousel 3 slide (Flyer Gratis POS, Flyer Gratis Dashboard 2, Flyer Course 2).

## Goals / Non-Goals

**Goals:**
- Kompresi & konversi 3 flyer (`Flyer Gratis POS.png`, `Flyer Gratis Dashboard 2.png`, `Flyer Course 2.png`) ke format WebP di `public/carousel/` dengan kualitas tinggi (85%) dan ukuran berkas < 250 KB.
- Mengganti komponen `HeroPosterShowcase` menjadi `HeroPosterCarousel` dengan slide responsif, tombol prev/next, dot indicators, dan dukungan auto-advance opsional yang pause saat hover.
- Memperbarui data harga, durasi, jadwal 1 hari, dan template pesan WhatsApp di `src/data.ts`.
- Memperbarui copy pada navbar header, hero section, dan dropdown opsi pendaftaran di `src/App.tsx`.

**Non-Goals:**
- Mengubah materi kurikulum atau silabus kelas Data Engineering lainnya.
- Mengubah alur routing aplikasi secara keseluruhan.

## Decisions

1. **Format & Container Carousel**:
   - Flyer 1 memiliki dimensi 1024x1199, sedangkan Flyer 2 & 3 adalah 1254x1254.
   - Untuk mencegah content layout shift (CLS), container carousel diberi fixed aspect ratio `aspect-square` dengan gambar diatur `object-contain w-full h-full` di atas background netral halus.
2. **State Management Carousel**:
   - Komponen carousel lokal menggunakan `useState(0)` untuk indeks slide aktif.
   - Disediakan tombol navigasi kiri/kanan dengan ikon Lucide (`ChevronLeft`, `ChevronRight`).
   - Indikator 3 titik di bawah carousel memungkinkan pengunjung langsung melompat ke slide yang diinginkan.
3. **Penyelarasan Data**:
   - Objek `umkmTraining` di `src/data.ts` menampung array gambar carousel sehingga data visual tetap terpusat dan mudah diubah kemudian hari.

## Risks / Trade-offs

- [Layout Shift Antar Slide]: Perbedaan sedikit rasio pada Flyer 1.
  *Mitigasi*: Gunakan container `aspect-square` dengan `object-contain`.
- [Konsistensi Harga di Seluruh Halaman]: Potensi ada teks lama "350rb" yang terlewat.
  *Mitigasi*: Gunakan pencarian teks global `350` di seluruh codebase dan verifikasi saat review.
