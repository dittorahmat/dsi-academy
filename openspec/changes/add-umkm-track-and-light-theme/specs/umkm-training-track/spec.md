## Purpose

Menyediakan informasi dan akses pendaftaran program pelatihan praktis digitalisasi bisnis bagi pemilik UMKM, mencakup materi aplikasi kasir, inventory, dan akuntansi berbasis AI dengan jadwal serta biaya yang transparan.

## ADDED Requirements

### Requirement: Tampilan Kartu Pelatihan UMKM di Area Above-The-Fold
Sistem SHALL menampilkan kartu program Pelatihan UMKM di area Hero secara sejajar dan seimbang dengan program Data Engineering.

#### Scenario: Menampilkan detail program UMKM
- **WHEN** pengguna membuka halaman utama
- **THEN** sistem menampilkan judul "Pelatihan Praktis Digitalisasi Bisnis UMKM: Kasir, Inventory & Akuntansi dengan AI", badge "Program Terjangkau UMKM", serta ringkasan manfaat langsung di viewport pertama (above-the-fold)

### Requirement: Tampilan Jadwal Lengkap 4 Hari Pelatihan
Sistem SHALL menyajikan rincian jadwal pelaksanaan 4 hari pelatihan secara jelas dan eksplisit.

#### Scenario: Memeriksa tanggal dan jam pelatihan
- **WHEN** calon peserta melihat kartu pelatihan UMKM
- **THEN** sistem menampilkan rincian waktu:
  - Hari 1: Jumat, 3 Oktober (08.30 – 14.00 WIB, dengan 2x istirahat)
  - Hari 2: Senin, 6 Oktober (20.00 – 22.00 WIB)
  - Hari 3: Rabu, 8 Oktober (20.00 – 22.00 WIB)
  - Hari 4: Jumat, 10 Oktober (10.00 – 12.00 WIB)

### Requirement: Transparansi Biaya dan Bonus Aplikasi
Sistem SHALL menampilkan nominal biaya investasi pelatihan sebesar Rp 350.000 serta 3 bonus aplikasi bisnis siap pakai.

#### Scenario: Menampilkan informasi harga dan bonus
- **WHEN** calon peserta membaca kartu UMKM
- **THEN** sistem menampilkan harga "Rp 350.000" dan daftar 3 bonus aplikasi: Simple POS, Simple Inventory, dan Simple Accounting

### Requirement: Aksi Pendaftaran WhatsApp Terarah
Sistem SHALL menyediakan tombol pendaftaran yang langsung mengarahkan pengguna ke kontak WhatsApp dengan pesan pra-isi yang relevan.

#### Scenario: Menekan tombol daftar kelas UMKM
- **WHEN** calon peserta mengklik tombol pendaftaran pada kartu UMKM
- **THEN** sistem membuka tautan WhatsApp ke nomor DSI Academy dengan pesan otomatis terkait pendaftaran batch pelatihan UMKM 3-10 Oktober
