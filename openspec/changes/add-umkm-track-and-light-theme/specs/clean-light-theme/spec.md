## Purpose

Menerapkan tema visual berbasis palet putih-biru (Facebook-style utility UI) yang bersih, profesional, kontras tinggi, dan bebas dari pola visual klise template AI (anti-AI slop).

## ADDED Requirements

### Requirement: Palet Warna Bersih Putih dan Biru
Sistem SHALL menggunakan latar belakang utama berwarna putih/terang dengan aksen biru dan teks kontras gelap.

#### Scenario: Visual styling tema terang
- **WHEN** halaman web dimuat
- **THEN** background utama halaman berwarna putih (`#ffffff`), elemen latar alternatif menggunakan abu-abu terang lembut (`#f0f2f5`), teks utama berwarna slate gelap (`#1c1e21` / `#0f172a`), dan warna aksen tombol utama menggunakan biru solid khas corporate/Facebook (`#1877f2` / `#0b4596`)

### Requirement: Penghapusan Pola Visual AI Slop
Sistem SHALL meniadakan ornamen visual gelap klise seperti neon glow, background hitam pekat, glassmorphism transparan berlebihan, dan simulator terminal palsu di hero.

#### Scenario: Memeriksa tampilan visual antarmuka
- **WHEN** antarmuka ditampilkan pada berbagai ukuran layar
- **THEN** seluruh kartu menggunakan background solid dengan border abu-abu tegas (`border-slate-200`) dan drop shadow halus tanpa efek glow neon atau terminal code buatan
