## Purpose

Menyediakan presentasi visual promosi terbaru yang teroptimasi WebP dan menampilkan profil kredensial instruktur mentor praktisi riil beserta logo sertifikasi resmi dan tools workshop pada landing page.

## ADDED Requirements

### Requirement: Tampilan Poster Pelatihan Terbaru (Versi 2)
Landing page SHALL menampilkan materi visual promosi terbaru dari poster versi 2 (`Ads_TrainingIT_ver2`) dalam format WebP dengan fallback PNG, dikompresi untuk performa muat cepat, serta dapat diklik untuk melihat atau mengunduh versi resolusi penuh.

#### Scenario: Pengunjung melihat dan membuka poster versi 2
- **WHEN** pengunjung mengakses landing page pada section `#program-ai`
- **THEN** sistem menampilkan poster versi 2 berformat WebP dengan rasio persegi (1:1) yang tajam dan responsif
- **WHEN** pengunjung mengklik poster
- **THEN** sistem membuka gambar poster resolusi penuh di tab baru

### Requirement: Bagian Profil Mentor Praktisi Riil & Kredensial Sertifikasi
Landing page SHALL menampilkan bagian profil mentor praktisi riil (Ditto R. K. Asnar dan Hendra Wahyudi) sebelum section "Kenapa belajar di Integra Academy", memuat foto profil asli berformat WebP teroptimasi, nama lengkap dengan gelar/almamater, jabatan/peran profesional, ringkasan keahlian, rekam jejak, serta jajaran logo sertifikasi resmi dan tools workshop.

#### Scenario: Pengunjung melihat kredensial sertifikasi dan tools mentor
- **WHEN** pengunjung scroll ke section profil mentor
- **THEN** sistem menampilkan profil Ditto R. K. Asnar lengkap dengan badge sertifikasi resmi (Python, Azure, Airflow) dan badge tools workshop (OpenCode)
- **THEN** sistem menampilkan profil Hendra Wahyudi lengkap dengan badge sertifikasi resmi (SAS, PSM I, MS SQL DWH, MS SQL Query, MCP) di bawah track record utama
- **THEN** setiap badge ditampilkan dalam bentuk logo berformat WebP yang proporsional, bersih, dan dilengkapi nama label/tooltip
