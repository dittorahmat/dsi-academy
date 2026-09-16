## Why

Website Integra Academy membutuhkan pembaruan materi visual promosi ke versi poster terbaru (`Ads_TrainingIT_ver2.png`) yang telah dioptimasi (WebP & kompresi) agar waktu muat cepat. Selain itu, untuk meningkatkan kredibilitas program pelatihan, profil mentor diganti dari placeholder fiktif menjadi profil praktisi riil (Ditto R. K. Asnar dan Hendra Wahyudi) dengan ringkasan kredensial dari CV mereka, serta logo sertifikasi resmi (Python, Azure, Airflow untuk Ditto; SAS, PSM 1, MS SQL DWH, MS SQL Query, MCP untuk Hendra) dan tools workshop (OpenCode), diposisikan tepat sebelum blok "Kenapa belajar di Integra Academy".

## What Changes

- **Poster Pelatihan v2**: Mengonversi dan mengompresi `Ads_TrainingIT_ver2.png` ke WebP (dan fallback ukuran optimal), lalu memperbarui komponen Hero di landing page untuk menampilkannya dengan rasio yang tepat.
- **Profil Mentor Riil**: Mengganti instruktur placeholder di data dan menampilkan profil mentor utama (Ditto R. K. Asnar & Hendra Wahyudi) dengan foto asli berformat WebP teroptimasi, gelar/almamater, peran profesional, serta ringkasan keahlian & track record terverifikasi.
- **Badge Sertifikasi & Tools Workshop**: Menampilkan logo sertifikasi resmi terverifikasi di bawah track record masing-masing mentor:
  - **Ditto**: Sertifikasi Python, Microsoft Azure, Apache Airflow, serta badge Tools Workshop OpenCode.
  - **Hendra**: Sertifikasi SAS Certified Specialist, Professional Scrum Master (PSM I), Microsoft Certified: Implementing DWH, Microsoft Certified: Querying SQL Server, dan Microsoft Certified Professional (MCP).
- **Reposisi Section Mentor**: Menempatkan blok profil mentor utama tepat di bawah Hero Section (sebelum section "Kenapa belajar di Integra Academy"), sehingga terlihat alami setelah pengguna mulai scroll ke bawah.

## Capabilities

### New Capabilities
- `landing-page/mentors-and-promo`: Menampilkan poster promosi terbaru versi 2 berformat WebP hemat bandwidth, profil mentor praktisi riil (Ditto R. K. Asnar & Hendra Wahyudi), serta deretan badge sertifikasi kredensial resmi dan tools workshop sebelum section keunggulan akademi.

### Modified Capabilities
<!-- Tidak ada capability tersimpan sebelumnya di openspec/specs/ -->

## Impact

- File terpengaruh:
  - `public/Ads_TrainingIT_ver2.webp`
  - `public/mentors/*.webp` (foto mentor dan badge logo sertifikasi/tools teroptimasi)
  - `src/data.ts` (penambahan field sertifikasi & tools workshop pada data mentor)
  - `src/App.tsx` (rendering badge rapi & responsif di bawah track record mentor)
- Tidak ada breaking change pada route atau API backend.
