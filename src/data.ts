export const WA_NUMBER = "6281234567890"; // TODO: ganti dengan nomor WA admin academy

export interface Course {
  id: string;
  kategori: string;
  judul: string;
  deskripsi: string;
  durasi: string;
  level: "Pemula" | "Menengah" | "Lanjutan";
  harga: string;
  hargaCoret?: string;
  tools: string[];
  silabus: string[];
  badge?: string;
}

export const courses: Course[] = [
  {
    id: "de-fundamental",
    kategori: "Fondasi",
    judul: "Data Engineering Fundamental",
    deskripsi:
      "Fondasi wajib: Python, SQL, Linux, Git & konsep pipeline data. Cocok untuk pemula dan career-switcher.",
    durasi: "4 minggu · 16 sesi",
    level: "Pemula",
    harga: "Rp 2.900.000",
    hargaCoret: "Rp 3.900.000",
    tools: ["Python", "PostgreSQL", "Docker", "Git"],
    silabus: [
      "Python untuk data: pandas, API & file processing",
      "SQL lanjutan: join, window function, CTE & optimasi",
      "Linux, Git & Docker untuk data engineer",
      "Mini project: pipeline CSV → Postgres terjadwal",
    ],
    badge: "Best Seller",
  },
  {
    id: "etl-airflow",
    kategori: "Pipeline & Orkestrasi",
    judul: "ETL & Workflow dengan Airflow",
    deskripsi:
      "Bangun pipeline ETL produksi: DAG design, scheduling, monitoring, dan data quality checks.",
    durasi: "3 minggu · 12 sesi",
    level: "Menengah",
    harga: "Rp 3.500.000",
    tools: ["Airflow", "Postgres", "dbt", "Great Expectations"],
    silabus: [
      "Arsitektur Airflow & penulisan DAG yang idempoten",
      "Ingestion API, file & database ke data warehouse",
      "Data quality test & alerting",
      "Capstone: pipeline end-to-end + dokumentasi",
    ],
    badge: "Paling Diminati",
  },
  {
    id: "spark-bigdata",
    kategori: "Big Data",
    judul: "Big Data Processing dengan Spark",
    deskripsi:
      "Olah data skala besar dengan PySpark: batch & streaming, tuning job, dan lakehouse.",
    durasi: "4 minggu · 14 sesi",
    level: "Lanjutan",
    harga: "Rp 4.200.000",
    tools: ["PySpark", "Delta Lake", "Kafka", "MinIO/S3"],
    silabus: [
      "Spark core: RDD, DataFrame & Catalyst optimizer",
      "Batch processing & optimasi partisi",
      "Structured Streaming + Kafka",
      "Project: lakehouse analytics 100jt+ rows",
    ],
  },
  {
    id: "dbt-modeling",
    kategori: "Warehouse & Modeling",
    judul: "Data Modeling & dbt",
    deskripsi:
      "Disukai perusahaan modern: dimensional modeling, dbt project structure, testing & docs.",
    durasi: "3 minggu · 10 sesi",
    level: "Menengah",
    harga: "Rp 3.200.000",
    tools: ["dbt", "BigQuery", "Snowflake"],
    silabus: [
      "Star schema, SCD & data vault intro",
      "dbt models, macros, snapshots & seeds",
      "Testing, documentation & CI untuk analytics",
      "Project: marts siap dashboard",
    ],
  },
  {
    id: "cloud-de",
    kategori: "Cloud",
    judul: "Cloud Data Engineering (GCP/AWS)",
    deskripsi:
      "Pipeline cloud-native: storage, data warehouse serverless, orchestrator managed & IaC dasar.",
    durasi: "4 minggu · 14 sesi",
    level: "Lanjutan",
    harga: "Rp 4.900.000",
    tools: ["BigQuery", "Cloud Composer", "S3", "Terraform intro"],
    silabus: [
      "Cloud storage & data lake design",
      "Warehouse serverless & cost control",
      "Managed Airflow & CI/CD pipeline data",
      "Project: deploy pipeline production di cloud",
    ],
    badge: "Corporate Favorite",
  },
  {
    id: "bootcamp-endtoend",
    kategori: "Bootcamp",
    judul: "Bootcamp Data Engineer End-to-End",
    deskripsi:
      "Paket lengkap 12 minggu: fundamental → ETL → Spark → dbt → cloud + career prep & portofolio review.",
    durasi: "12 minggu · 48 sesi",
    level: "Pemula",
    harga: "Rp 9.900.000",
    hargaCoret: "Rp 14.500.000",
    tools: ["Semua tools", "1-on-1 mentoring", "Review CV"],
    silabus: [
      "Semua modul inti + 4 project portofolio",
      "Mentoring 1-on-1 tiap 2 minggu",
      "Simulasi interview & review CV/LinkedIn",
      "Sertifikat + rekomendasi penyaluran kerja",
    ],
    badge: "Hemat 32%",
  },
];

export interface Batch {
  id: string;
  courseId: string;
  nama: string;
  tanggal: string;
  format: "Online" | "Offline Jakarta" | "Hybrid";
  kuota: string;
  status: "Pendaftaran dibuka" | "Hampir penuh" | "Segera hadir";
}

export const batches: Batch[] = [
  { id: "b1", courseId: "de-fundamental", nama: "Batch 24 — Fundamental", tanggal: "6 Okt 2026", format: "Online", kuota: "12 kursi tersisa", status: "Pendaftaran dibuka" },
  { id: "b2", courseId: "etl-airflow", nama: "Batch 18 — ETL Airflow", tanggal: "13 Okt 2026", format: "Online", kuota: "6 kursi tersisa", status: "Hampir penuh" },
  { id: "b3", courseId: "cloud-de", nama: "Batch 9 — Cloud DE", tanggal: "27 Okt 2026", format: "Hybrid", kuota: "15 kursi tersisa", status: "Pendaftaran dibuka" },
  { id: "b4", courseId: "bootcamp-endtoend", nama: "Batch 7 — Bootcamp", tanggal: "3 Nov 2026", format: "Online", kuota: "8 kursi tersisa", status: "Hampir penuh" },
  { id: "b5", courseId: "spark-bigdata", nama: "Batch 11 — Spark", tanggal: "10 Nov 2026", format: "Online", kuota: "Segera dibuka", status: "Segera hadir" },
];

export const instructors = [
  {
    nama: "Andi Pratama",
    peran: "Lead Data Engineer · ex-E-commerce Unicorn",
    keahlian: "Airflow · Spark · GCP · 8+ thn",
    inisial: "AP",
  },
  {
    nama: "Sari Dewi",
    peran: "Analytics Engineer · Konsultan BUMN",
    keahlian: "dbt · BigQuery · Modeling · 6+ thn",
    inisial: "SD",
  },
  {
    nama: "Budi Santoso",
    peran: "Cloud Data Architect · AWS/GCP Certified",
    keahlian: "Cloud · Terraform · Streaming · 10+ thn",
    inisial: "BS",
  },
];

export const testimonials = [
  {
    nama: "Rizky — Staff IT Bank BUMN",
    teks: "Materi Airflow-nya langsung kepakai di proyek ETL core banking. Mentornya responsif, tugasnya realistis, bukan sekadar teori.",
    kelas: "ETL & Airflow",
  },
  {
    nama: "Maya — Career Switcher",
    teks: "Ikut bootcamp 12 minggu dari nol. Sekarang lolos sebagai junior data engineer. Portofolio review-nya ngebantu banget pas interview.",
    kelas: "Bootcamp End-to-End",
  },
  {
    nama: "HR Learning — Perusahaan Logistik",
    teks: "Corporate training untuk 25 engineer. Kurikulum disesuaikan dengan stack kami (Spark + S3). Pre/post test naik signifikan.",
    kelas: "Corporate Training",
  },
];

export const faqs = [
  {
    q: "Apakah cocok untuk pemula tanpa background IT?",
    a: "Ya. Mulai dari kelas Fundamental. Anda cukup bisa mengoperasikan komputer dan punya kemauan belajar logika dasar. Setiap sesi ada rekaman + asisten mentor.",
  },
  {
    q: "Bagaimana format belajarnya?",
    a: "Live via Zoom 2x seminggu (19.00–21.30 WIB) + rekaman, modul, quiz, dan tugas project. Kelas offline/hybrid tersedia di Jakarta untuk corporate.",
  },
  {
    q: "Apakah dapat sertifikat?",
    a: "Ya, sertifikat kelulusan + portofolio project untuk semua kelas. Bootcamp mendapat sertifikat + surat rekomendasi mentor.",
  },
  {
    q: "Apakah tersedia corporate / in-house training?",
    a: "Tersedia untuk 10–50 peserta. Kurikulum, jadwal, dan studi kasus bisa disesuaikan dengan stack perusahaan (GCP/AWS/on-premise). Hubungi kami via form di bawah.",
  },
  {
    q: "Bagaimana cara daftar & pembayaran?",
    a: "Isi form pendaftaran → kami hubungi via WhatsApp maks. 1x24 jam → pembayaran via transfer bank / VA / QRIS → akses grup & LMS. Cicilan 0% tersedia untuk bootcamp.",
  },
];

export function waLink(pesan: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
}

export function courseName(id: string) {
  return courses.find((c) => c.id === id)?.judul ?? id;
}
