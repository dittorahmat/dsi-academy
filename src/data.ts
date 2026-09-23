export const WA_NUMBER = "6281385808284";
export const LYNK_ID_REGISTRATION_URL = "https://lynk.id/dsintegraacademy/9d2gmkd0mde5";

export interface UmkmSchedule {
  hari: string;
  tanggal: string;
  jam: string;
  catatan?: string;
}

export interface UmkmAppBonus {
  nama: string;
  keterangan: string;
  fitur: string[];
}

export interface CarouselSlide {
  id: string;
  judul: string;
  subjudul: string;
  srcWebp: string;
  srcPng: string;
}

export interface UmkmTrainingData {
  judul: string;
  tagline: string;
  harga: string;
  hargaCoret: string;
  durasi: string;
  format: string;
  targetPeserta: string[];
  materiPilar: string[];
  bonusAplikasi: UmkmAppBonus[];
  posterWebp: string;
  posterPng: string;
  carouselSlides: CarouselSlide[];
  jadwal: UmkmSchedule[];
  waMessage: string;
}

export const umkmTraining: UmkmTrainingData = {
  judul: "Pelatihan Praktis Coding with AI: Belajar Membuat Aplikasi dengan Code AI",
  tagline: "Punya Skill Baru, Buka Peluang Penghasilan Baru",
  harga: "Rp 35.000",
  hargaCoret: "Rp 350.000",
  durasi: "1 Hari Intensif (09.00 – 15.00 WIB via Google Meet)",
  format: "100% Online Hands-on Project + Full Source Code & Template",
  targetPeserta: [
    "Pelajar / Mahasiswa",
    "Fresh Graduate IT & Non-IT",
    "Profesional & Karyawan",
    "UMKM & Pengusaha",
    "Umum",
  ],
  materiPilar: [
    "Coding dengan AI: Buat aplikasi lebih mudah dengan bantuan AI",
    "Pengenalan Data Analyst: Kelola data, buat insight, ambil keputusan",
  ],
  bonusAplikasi: [
    {
      nama: "1 Aplikasi POS (Kasir)",
      keterangan: "Siap Pakai untuk Bisnis Anda",
      fitur: ["Transaksi penjualan cepat", "Cetak struk / nota", "Laporan penjualan harian"],
    },
    {
      nama: "Puluhan Template Dashboard",
      keterangan: "Untuk Analisis Bisnis, Laporan & Pengambilan Keputusan",
      fitur: ["Visualisasi performa penjualan", "Laporan siap presentasi", "Mudah dikustomisasi"],
    },
  ],
  posterWebp: "/flyer-it-course.webp",
  posterPng: "/flyer-it-course.png",
  carouselSlides: [
    {
      id: "flyer-it-course",
      judul: "Poster Pelatihan Coding with AI",
      subjudul: "Mulai 3 Oktober 2026 via Google Meet",
      srcWebp: "/flyer-it-course.webp",
      srcPng: "/flyer-it-course.png",
    },
  ],
  jadwal: [
    {
      hari: "Sabtu",
      tanggal: "3 Oktober 2026",
      jam: "09.00 – 15.00 WIB",
      catatan: "1 Hari Intensif (Jeda Ishoma 12.00–13.00)",
    },
  ],
  waMessage: "Halo Mas Hendra (DSI Academy), saya ingin mendaftar Pelatihan Praktis Coding with AI (Sabtu, 3 Oktober 2026) seharga Rp 35.000.",
};

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

export interface CredentialBadge {
  nama: string;
  logo: string;
  keterangan?: string;
}

export interface Mentor {
  nama: string;
  gelar?: string;
  peran: string;
  pengalaman: string;
  foto: string;
  keahlian: string;
  ringkasan: string;
  highlights: string[];
  certifications?: CredentialBadge[];
  toolsWorkshop?: CredentialBadge[];
  inisial: string;
}

export const instructors: Mentor[] = [
  {
    nama: "Ditto R. K. Asnar, S.T.",
    gelar: "Institut Teknologi Bandung (ITB)",
    peran: "Lead Technical",
    pengalaman: "17+ Tahun Pengalaman",
    foto: "/mentors/ditto-asnar.webp",
    keahlian: "Data Warehouse · Cloud ETL · Python · AI Tools · Full-stack App",
    ringkasan: "Praktisi senior dengan pengalaman 17+ tahun merancang arsitektur Data Warehouse, pipeline ETL skala besar, hingga aplikasi full-stack modern dengan bantuan AI Coding Tools. Memiliki rekam jejak memimpin proyek data di Daya Solusi Integra, konsultan IESR, Upwork USA (remote), Smartfren, hingga perbankan.",
    highlights: [
      "Lead Technical PT Daya Solusi Integra & Konsultan IESR",
      "10+ tahun remote Data Engineer (Upwork USA: SSIS, Azure SQL, AWS MWAA, Airflow, dbt)",
      "Ex-Datawarehouse Supervisor di Smartfren & Smart Telecom",
    ],
    certifications: [
      { nama: "Python Certified", logo: "/badges/python.webp" },
      { nama: "Microsoft Azure", logo: "/badges/azure.webp" },
      { nama: "Apache Airflow", logo: "/badges/airflow.webp" },
    ],
    toolsWorkshop: [
      { nama: "OpenCode AI Agent", logo: "/badges/opencode.webp", keterangan: "Tools Praktik Workshop AI Coding" },
    ],
    inisial: "DA",
  },
  {
    nama: "Hendra Wahyudi, S.Kom",
    gelar: "Universitas Bina Nusantara (BINUS)",
    peran: "Manager IT Data Analytics & Project Management",
    pengalaman: "15+ Tahun Pengalaman",
    foto: "/mentors/hendra-wahyudi.webp",
    keahlian: "Project Management · Agile/Scrum · DWH & ETL · SAS & Power BI · AI for Data",
    ringkasan: "Leader di bidang Data Analytics dan IT Project Management dengan pengalaman 15+ tahun mengawal proyek kompleks perbankan, retail multinasional, dan telekomunikasi. Pemegang sertifikasi Microsoft Certified Professional (MCP SQL Server), SAS Certified Specialist, dan PSM 1 Scrum Master.",
    highlights: [
      "Project Manager Data & Lead Data Analytic di PT Mitra Mandiri Informatika",
      "Ex-Manager IT Data Analytics di PT MAP Aktif Adiperkasa, Tbk",
      "Ex-Lead Consultant IT Data Solution & Analytics di AIMIA Inc (Global Passion Award Winner)",
    ],
    certifications: [
      { nama: "SAS Certified Specialist (Viya)", logo: "/badges/sas.webp" },
      { nama: "Professional Scrum Master (PSM I)", logo: "/badges/scrum.webp" },
      { nama: "MS Certified: Implementing DWH", logo: "/badges/ms-sql-dwh.webp" },
      { nama: "MS Certified: Querying SQL Server", logo: "/badges/ms-sql-query.webp" },
      { nama: "Microsoft Certified Professional", logo: "/badges/mcp.webp" },
    ],
    inisial: "HW",
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
