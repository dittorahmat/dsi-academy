## Purpose

Menyajikan landing page pelatihan praktis Coding with AI dengan poster resmi tunggal terbaru, penawaran harga promo Rp 35.000 (coret Rp 350.000), serta narahubung resmi WhatsApp Mas Hendra.

## ADDED Requirements

### Requirement: Tampilan Poster Tunggal Teroptimasi pada Hero Section
Sistem SHALL menampilkan poster resmi pelatihan tunggal berformat WebP terkompresi dengan fallback PNG, menggantikan sistem carousel lama.

#### Scenario: Pengunjung melihat poster pelatihan
- **WHEN** pengunjung membuka landing page pada bagian Hero
- **THEN** sistem menampilkan poster visual Flyer IT Course yang tajam, ringan dimuat, serta menyediakan tombol "Buka Full" untuk melihat poster resolusi penuh.

### Requirement: Informasi Harga Promo Rp 35.000
Sistem SHALL menampilkan informasi harga promo Rp 35.000 dengan harga coret Rp 350.000 secara konsisten di seluruh elemen penawaran landing page.

#### Scenario: Pengunjung memeriksa harga program
- **WHEN** pengunjung melihat bagian Hero, tombol CTA pendaftaran, navigasi mobile, maupun dropdown form pendaftaran
- **THEN** sistem menampilkan nominal harga aktif Rp 35.000 dan coret Rp 350.000 secara seragam.

### Requirement: Narahubung Resmi WhatsApp Mas Hendra
Sistem SHALL mengarahkan komunikasi WhatsApp ke nomor admin resmi Mas Hendra (+62 813-8580-8284) dengan template pesan pendaftaran Rp 35.000.

#### Scenario: Pengunjung memilih konsultasi atau pendaftaran via WhatsApp
- **WHEN** pengunjung menekan tombol Tanya via WA atau floating WhatsApp button
- **THEN** sistem membuka tautan WhatsApp ke nomor 6281385808284 dengan salam pembuka kepada Mas Hendra dan nominal biaya Rp 35.000.
