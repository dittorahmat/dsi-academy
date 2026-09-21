## Purpose

Menampilkan interactive carousel 3 slide promosi berformat WebP pada hero section dan menyajikan harga promo Rp 99.000 dengan format belajar 1 hari intensif pada landing page.

## ADDED Requirements

### Requirement: Interactive Carousel Flyer Promosi
Landing page SHALL menampilkan carousel interaktif 3 slide flyer promosi pada hero section (`#program-ai`), memuat:
1. Slide 1: Flyer Gratis POS
2. Slide 2: Flyer Gratis Dashboard 2
3. Slide 3: Flyer Course 2
Semua flyer disajikan dalam format WebP terkompresi dengan aspect ratio seragam, dilengkapi navigasi slide (sebelumnya/berikutnya), pagination dots, dan tombol perbesar gambar.

#### Scenario: Pengunjung melihat dan berinteraksi dengan carousel
- **WHEN** pengunjung mengakses hero section
- **THEN** sistem menampilkan slide aktif pertama (Flyer Gratis POS) dalam format WebP
- **WHEN** pengunjung mengklik tombol navigasi berikutnya atau dot pagination
- **THEN** sistem beralih ke slide berikutnya secara mulus tanpa layout shift
- **WHEN** pengunjung mengklik tombol "Buka Resolusi Penuh"
- **THEN** sistem membuka file gambar slide aktif di tab baru

### Requirement: Harga Rp 99.000 dan Jadwal 1 Hari Intensif
Landing page SHALL menampilkan harga pelatihan sebesar Rp 99.000 dan jadwal 1 hari intensif (Sabtu, 3 Oktober 2026, 09.00 – 15.00 WIB) secara konsisten di seluruh elemen antarmuka.

#### Scenario: Pengunjung memeriksa detail harga dan jadwal
- **WHEN** pengunjung melihat header, hero section, atau formulir pendaftaran
- **THEN** sistem menampilkan harga Rp 99.000 (dengan harga coret promosi Rp 1.000.000)
- **THEN** sistem menampilkan jadwal 1 hari intensif (Sabtu, 3 Oktober 2026, 09.00 – 15.00 WIB)
- **WHEN** pengunjung mengklik tombol konsultasi / pendaftaran WhatsApp
- **THEN** sistem mengarahkan ke tautan WhatsApp dengan pesan pendaftaran resmi seharga Rp 99.000
