## Context

Landing page DSI Academy saat ini telah menggunakan poster versi 2 dan menampilkan section mentor riil. Pengguna ingin melengkapi profil mentor dengan logo sertifikasi resmi (Python, Azure, Airflow untuk Ditto; SAS, PSM 1, MS SQL DWH, MS SQL Query, MCP untuk Hendra) serta logo tools workshop (OpenCode).

## Goals / Non-Goals

**Goals:**
- Mengompresi dan mengonversi semua gambar sertifikasi dan logo tools ke WebP berukuran ringkas di `public/badges/`.
- Memperluas interface `Mentor` di `src/data.ts` untuk memuat daftar sertifikasi (`certifications: { nama: string; logo: string }[]`) dan tools workshop (`workshopTools?: { nama: string; logo: string }[]`).
- Mendesain container lencana di `src/App.tsx` yang bersih, minimalis, dan tidak membebani layout kartu (ukuran seragam, background putih lembut, border tipis, tooltip/label yang jelas).

**Non-Goals:**
- Mengubah alur pendaftaran WhatsApp atau pricing.
- Menampilkan dokumen ijazah/transkrip penuh di halaman (cukup logo resmi).

## Decisions

1. **Penyimpanan Aset**:
   - Badge disimpan di `public/badges/`:
     - `sas.webp`, `scrum.webp`, `ms-sql-dwh.webp`, `ms-sql-query.webp`, `mcp.webp`
     - `python.webp`, `azure.webp`, `airflow.webp`, `opencode.webp`
2. **Desain Tampilan**:
   - Disajikan di bawah section Track Record.
   - Masing-masing badge berada dalam kapsul/kartu mini (`h-9` atau `h-10`) dengan `object-contain` dan label nama sertifikasi saat hover atau di bawahnya, menjaga keseimbangan visual kedua kartu mentor.

## Risks / Trade-offs

- [Kerapatan visual / keramean]: Terlalu banyak logo warna-warni bisa membuat kartu tampak penuh.
  *Mitigasi*: Kelompokkan logo dalam barisan flex-wrap rapi dengan padding halus, ukuran tinggi dibatasi maksimal 32–36px, dan latar belakang kartu putih bersih ber-border lembut.
