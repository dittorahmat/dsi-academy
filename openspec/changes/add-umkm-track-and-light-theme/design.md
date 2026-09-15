## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini aplikasi dibangun dengan React + Vite + Tailwind CSS v4. Seluruh styling landing page menggunakan tema gelap (`bg-[#0b0f19]`), teks slate terang, aksen gold, dan mockup terminal simulasi pipeline di Hero. Kita akan mengonversi styling ini ke tema terang bernuansa putih-biru (Facebook clean aesthetic) dan mendesain komponen Hero Dual-Track dengan kartu program UMKM interaktif.

## Goals / Non-Goals

**Goals:**
- Mengubah arsitektur tema warna di `src/index.css` dan seluruh komponen di `src/App.tsx` menjadi tema putih-biru yang kontras, bersih, dan mudah dibaca.
- Menambahkan data struktur pelatihan UMKM di `src/data.ts` (jadwal 4 sesi, benefit, 3 aplikasi bonus, biaya Rp 350.000).
- Membangun komponen kartu native `UmkmCard` di Hero section yang menonjol di viewport pertama (above-the-fold) menggantikan mock terminal.
- Memastikan semua CTA pendaftaran mengarah ke WhatsApp dengan pesan prefilled yang spesifik untuk program UMKM vs program profesional.

**Non-Goals:**
- Membuat backend pendaftaran / payment gateway otomatis (pendaftaran tetap ditangani via WhatsApp tim DSI).
- Menghapus kurikulum Data Engineering reguler (keduanya berjalan berdampingan sebagai dual-track).

## Decisions

### 1. Palet Warna Putih-Biru "Facebook Style"
- **Pilihan:** Background `#ffffff` dengan alternate section `#f0f2f5`, border `#e4e6eb`, teks heading `#1c1e21`, teks body `#4b5563`, aksen primary `#1877f2` (hover `#166fe5`), dan secondary `#0b4596`.
- **Alasan:** Menghilangkan kesan "AI template / dark glow slop" dan meningkatkan keterbacaan bagi pemilik bisnis UMKM serta pengunjung korporat.
- **Alternatif:** Tetap mempertahankan dark mode dengan opsi toggle switch (ditolak karena audiens UMKM lebih cocok dengan tampilan terang yang familiar dan bersih).

### 2. Native UI vs Embed Gambar Poster
- **Pilihan:** Merender komponen kartu responsif (Native Web UI) di hero, dilengkapi badge, daftar tanggal/jam akurat, dan rincian bonus.
- **Alasan:** Poster PNG rasio 1:1 memiliki teks kecil yang tidak responsif di layar HP dan belum memuat jam detail (08.30-14.00, 20.00-22.00, dst). Teks native juga lebih tajam, ramah SEO, dan dapat disalin.
- **Alternatif:** Menampilkan gambar poster langsung di hero (ditolak karena tidak terbaca di mobile dan sulit diperbarui).

### 3. Struktur Data Terpusat di `data.ts`
- **Pilihan:** Menambahkan objek `umkmTraining` di `src/data.ts` yang menyimpan jadwal, durasi, harga, benefit, dan generator link WhatsApp khusus.
- **Alasan:** Memisahkan data dari komponen tampilan agar mudah diperbarui untuk batch berikutnya tanpa mengotori markup React.

## Risks / Trade-offs

- **[Banyaknya komponen yang terdampak perubahan tema gelap ke terang]** → Lakukan audit menyeluruh pada kelas Tailwind di `src/App.tsx` (seperti `bg-white/10`, `text-white`, dsb) dan gantikan secara konsisten dengan utility tema terang (`bg-white`, `border-slate-200`, `text-slate-900`).
- **[Kepadatan informasi di Hero desktop]** → Gunakan layout grid 2 kolom dengan kartu UMKM terstruktur rapi (menggunakan highlight badges, sub-cards untuk bonus aplikasi, dan accordion/list ringkas untuk 4 tanggal jadwal).
