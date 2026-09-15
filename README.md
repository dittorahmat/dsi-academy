# DS Integra Academy

Landing page resmi untuk **DS Integra Academy** by Daya Solusi Integra — Pusat Pelatihan Teknologi Terapan, Data Engineering, dan Digitalisasi Bisnis (Coding with AI & UMKM) di Indonesia.

---

## 🚀 Fitur Utama

- **Dual-Track Learning (Above-the-Fold):**
  - **Jalur 1 (Data Engineering Pro):** Modul fundamental, ETL Airflow, Big Data Spark, dbt, Cloud GCP/AWS, hingga persiapan karier.
  - **Jalur 2 (Pelatihan Praktis Coding with AI & UMKM):** Pelatihan intensif 4 hari (mulai 3 Oktober) untuk Fresh Graduate IT, pekerja IT yang ingin eksplorasi AI, serta pemilik UMKM & umum.
- **Bonus 3 Aplikasi Bisnis Siap Pakai:**
  - Simple POS (Aplikasi Kasir Sederhana)
  - Simple Inventory (Pengelolaan Stok Barang)
  - Simple Accounting (Pencatatan Keuangan Praktis)
- **Showcase Poster & Flyer Resmi:** Menampilkan flyer promosi `Ads_TrainingIT.png` beresolusi tinggi dengan link unduh langsung.
- **Desain Bersih & Fungsional (White-Blue Theme):** Terinspirasi dari Facebook/Modern SaaS UI utility yang kontras tinggi, nyaman dibaca, dan bebas dari pola visual klise template AI (*anti-AI slop*).
- **Integrasi WhatsApp Langsung:** Seluruh tombol pendaftaran terhubung langsung ke admin resmi (+62 813-1909-5252 / Rahmat) dengan format pesan otomatis.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript

---

## 📦 Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18+ direkomendasikan).

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Mode Development
```bash
npm run dev
```
Buka browser dan akses URL lokal yang tampil di terminal (biasanya `http://localhost:5173/` atau `http://localhost:5174/`).

### 3. Build untuk Production
```bash
npm run build
```
Hasil build siap deploy akan tersimpan di folder `dist/`.

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## ⚙️ Konfigurasi Data & Kontak

Semua data kelas, jadwal, nomor WhatsApp, dan materi pelatihan terpusat di satu file:
- **Lokasi file:** `src/data.ts`
- **Ganti nomor WhatsApp:** Ubah konstanta `WA_NUMBER` pada baris pertama:
  ```typescript
  export const WA_NUMBER = "6281319095252";
  ```
- **Edit detail jadwal & materi program Coding with AI:** Sesuaikan objek `umkmTraining`.
- **Edit kurikulum Data Engineering reguler:** Sesuaikan array `courses`.

---

## 📄 Lisensi
© 2026 PT Daya Solusi Integra. All rights reserved.
