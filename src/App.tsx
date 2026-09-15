import { useState } from 'react';
import {
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  GraduationCap,
  Image as ImageIcon,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Send,
  Sparkles,
  Star,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import {
  batches,
  courseName,
  courses,
  faqs,
  instructors,
  testimonials,
  umkmTraining,
  waLink,
  type Course,
} from './data.ts';

/* ---------------------------------- header --------------------------------- */

const NAV = [
  { href: '#umkm', label: 'Program UMKM' },
  { href: '#kelas', label: 'Kelas Data Eng' },
  { href: '#alur', label: 'Alur belajar' },
  { href: '#jadwal', label: 'Jadwal' },
  { href: '#instruktur', label: 'Instruktur' },
  { href: '#faq', label: 'FAQ' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur shadow-xs">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#atas" className="flex items-center gap-2.5">
          <img
            src="/dsi-logo.webp"
            alt="Logo PT Daya Solusi Integra"
            className="h-10 w-auto object-contain"
            width="120"
            height="40"
          />
          <span className="hidden sm:inline-block border-l border-slate-300 pl-2.5 leading-tight">
            <span className="block font-display text-[15px] font-bold text-slate-900">Integra Academy</span>
            <span className="block text-[11px] font-medium text-slate-500">Tech & AI Training</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1877f2]">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#umkm"
            className="hidden rounded-lg border border-[#1877f2]/30 bg-[#e7f3ff] px-3.5 py-2 text-xs font-semibold text-[#1877f2] transition-colors hover:bg-[#dbeafe] sm:inline-block"
          >
            Opsi UMKM Rp 350rb
          </a>
          <a
            href="#daftar"
            className="hidden rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#166fe5] md:inline-block"
          >
            Daftar Sekarang
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 shadow-lg md:hidden" aria-label="Navigasi seluler">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#umkm"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg border border-[#1877f2]/30 bg-[#e7f3ff] px-3 py-2.5 text-center text-[15px] font-semibold text-[#1877f2]"
          >
            Pelatihan UMKM — Rp 350.000
          </a>
          <a
            href="#daftar"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[#1877f2] px-3 py-2.5 text-center text-[15px] font-semibold text-white"
          >
            Daftar Sekarang
          </a>
        </nav>
      ) : null}
    </header>
  );
}

/* ------------------------------- umkm card -------------------------------- */

function UmkmCard() {
  return (
    <div id="umkm" className="scroll-mt-24 rounded-2xl border-2 border-[#1877f2]/30 bg-white p-6 shadow-xl ring-4 ring-[#1877f2]/5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7f3ff] px-3 py-1 text-xs font-bold text-[#1877f2]">
          <Sparkles size={14} className="text-[#1877f2]" aria-hidden="true" /> Batch Khusus UMKM
        </span>
        <div className="text-right">
          <span className="text-xs text-slate-400 line-through mr-2">{umkmTraining.hargaCoret}</span>
          <span className="font-display text-2xl font-extrabold text-[#1877f2]">{umkmTraining.harga}</span>
          <span className="block text-[11px] font-medium text-slate-500">Investasi 4 hari intensif</span>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="font-display text-xl font-bold leading-snug text-slate-900">
          Digitalisasi Bisnis UMKM: Bangun Sistem Kasir, Inventory & Akuntansi dengan AI
        </h2>
        <p className="mt-1.5 text-sm text-slate-600">
          Pelajari cara membuat dan memakai aplikasi bisnis sendiri tanpa ribet koding manual, dibantu AI praktis.
        </p>
      </div>

      {/* Bonus 3 Aplikasi */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          <PackageCheck size={16} className="text-[#1877f2]" aria-hidden="true" /> Bonus Spesial 3 Aplikasi Siap Pakai:
        </p>
        <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {umkmTraining.bonusAplikasi.map((app) => (
            <div key={app.nama} className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
              <p className="font-semibold text-xs text-slate-900">{app.nama}</p>
              <p className="text-[11px] text-slate-500">{app.keterangan}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Jadwal 4 Pertemuan */}
      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          <CalendarDays size={15} className="text-[#1877f2]" aria-hidden="true" /> Jadwal Live via Zoom:
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
          {umkmTraining.jadwal.map((j) => (
            <div key={j.tanggal} className="flex items-start justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div>
                <span className="font-semibold text-slate-900">{j.hari}</span>
                <span className="block text-[11px] text-slate-500">{j.tanggal}</span>
              </div>
              <div className="text-right">
                <span className="font-mono font-medium text-[#1877f2]">{j.jam}</span>
                {j.catatan ? <span className="block text-[10px] text-slate-500">{j.catatan}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={waLink(umkmTraining.waMessage)}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1877f2] px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition-all hover:bg-[#166fe5] hover:shadow"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Daftar via WA (Rp 350rb)
        </a>
        <a
          href="#poster-resmi"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          <ImageIcon size={16} className="text-[#1877f2]" aria-hidden="true" />
          Lihat Poster
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-slate-500">
        Konfirmasi pendaftaran & konsultasi via WhatsApp resmi (+62 813-1909-5252 / Rahmat).
      </p>
    </div>
  );
}

/* ---------------------------- poster showcase ------------------------------ */

function PosterShowcase() {
  return (
    <section id="poster-resmi" className="scroll-mt-20 border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Kolom Kiri: Tampilan Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="group relative max-w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-lg transition-all hover:shadow-xl">
              <a href="/Ads_TrainingIT.webp" target="_blank" rel="noreferrer" className="block relative">
                <picture>
                  <source srcSet="/Ads_TrainingIT.webp" type="image/webp" />
                  <img
                    src="/Ads_TrainingIT.png"
                    alt="Poster Resmi Pelatihan Praktis Coding with AI"
                    className="w-full h-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    width="800"
                    height="1200"
                  />
                </picture>
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-900/40 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                    <ExternalLink size={15} aria-hidden="true" /> Buka Poster Resolusi Penuh
                  </span>
                </div>
              </a>
              <p className="py-2 text-center text-[11px] font-medium text-slate-500">
                Klik gambar untuk membuka / mengunduh poster ukuran penuh
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Rincian & Pendaftaran */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#1877f2]">
              <Sparkles size={14} aria-hidden="true" /> Batch Resmi Mulai 3 Oktober 2026
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Pelatihan Praktis Coding with AI: Solusi Nyata Karier & Bisnis Anda
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Program ini didesain khusus agar materi mudah dipahami dan langsung dapat diterapkan. Cocok bagi Fresh Graduate IT yang ingin memperkuat portofolio, praktisi IT yang ingin memanfaatkan AI tools modern, hingga pelaku UMKM yang ingin otomatisasi kasir, stok, dan pencatatan keuangan.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <p className="text-xs font-bold text-slate-900">Target Semua Kalangan</p>
                <p className="mt-1 text-xs text-slate-600">Fresh graduate, pekerja profesional, pelaku UMKM, & masyarakat umum.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <p className="text-xs font-bold text-slate-900">Fleksibel & Terjadwal</p>
                <p className="mt-1 text-xs text-slate-600">100% Online via Google Meet + rekaman dan materi lengkap.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <p className="text-xs font-bold text-slate-900">Bonus 3 Aplikasi Bisnis</p>
                <p className="mt-1 text-xs text-slate-600">Aplikasi POS Kasir, Sistem Inventory, dan Akuntansi Sederhana siap pakai.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fafc] p-3.5">
                <p className="text-xs font-bold text-slate-900">Sertifikat Resmi Kelulusan</p>
                <p className="mt-1 text-xs text-slate-600">Sebagai bukti kompetensi nyata untuk portofolio atau kredensial bisnis.</p>
              </div>
            </div>

            {/* Price tag & CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">Harga Promo Terbatas:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400 line-through">Rp 1.000.000</span>
                  <span className="font-display text-2xl font-extrabold text-[#1877f2]">Rp 350.000</span>
                </div>
              </div>
              <div className="ml-auto flex flex-wrap gap-2.5">
                <a
                  href={waLink('Halo Mas Rahmat (DSI Academy), saya ingin mendaftar Pelatihan Praktis Coding with AI (Batch 3-10 Oktober) seharga Rp 350.000.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1877f2] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-[#166fe5]"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Daftar via WhatsApp (Rahmat)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- hero section ------------------------------ */

const STATS: Array<{ angka: string; arti: string }> = [
  { angka: '≤ 25', arti: 'peserta maksimal per kelas (interaktif)' },
  { angka: '100%', arti: 'sesi live interaktif bareng mentor' },
  { angka: '1 Modul', arti: '1 project nyata masuk portofolio' },
  { angka: 'Lifetime', arti: 'akses rekaman & grup diskusi' },
];

function Hero() {
  return (
    <section id="atas" className="relative border-b border-slate-200 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 md:pt-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-[#1877f2]">
          <span className="h-2 w-2 rounded-full bg-[#1877f2]" />
          Pusat Pelatihan Teknologi Terapan & Data Indonesia
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Sisi Kiri: Jalur Profesional Data Engineer */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                JALUR 1: DATA ENGINEERING PRO
              </span>
              <h1 className="text-3xl font-extrabold leading-[1.18] text-slate-900 sm:text-4xl">
                Belajar Data Engineering sampai bisa deploy pipeline beneran.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Kelas intensif 2 kali seminggu bersama praktisi data industri. Tiap modul berakhir dengan project nyata yang langsung masuk portofolio kerja Anda.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#kelas"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-slate-800"
                >
                  Lihat 6 Kelas Reguler
                </a>
                <a
                  href="#daftar"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.arti}>
                  <dt className="sr-only">{s.arti}</dt>
                  <dd className="font-display text-2xl font-bold text-slate-900">{s.angka}</dd>
                  <dd className="mt-0.5 text-xs text-slate-500 leading-snug">{s.arti}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sisi Kanan: Jalur UMKM (Above-The-Fold) */}
          <div className="lg:col-span-6">
            <UmkmCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- keunggulan ------------------------------ */

const KEUNGGULAN = [
  {
    ikon: Users,
    judul: 'Kelas kecil & interaktif',
    isi: 'Mentor mendampingi progres setiap peserta. Pertanyaan dijawab langsung dan tugas mendapat review detail.',
  },
  {
    ikon: Workflow,
    judul: 'Satu modul, satu hasil nyata',
    isi: 'Lulus pelatihan artinya Anda membawa sistem yang benar-benar jalan, baik pipeline data maupun aplikasi toko.',
  },
  {
    ikon: Briefcase,
    judul: 'Mentor praktisi industri nyata',
    isi: 'Diajar langsung oleh lead engineer dan konsultan digital yang sehari-hari menangani sistem operasional production.',
  },
  {
    ikon: Award,
    judul: 'Sertifikat & dukungan karier/bisnis',
    isi: 'Dilengkapi sertifikat resmi sebagai bukti kompetensi dan grup diskusi aktif yang tetap terbuka setelah pelatihan selesai.',
  },
];

function Keunggulan() {
  return (
    <section className="border-b border-slate-200 bg-[#f0f2f5] py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Kenapa belajar di Integra Academy</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Target kami sederhana: tiap lulusan pulang membawa bukti kerja konkret yang bisa langsung diterapkan di kantor atau bisnis sendiri.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {KEUNGGULAN.map((k) => (
            <div key={k.judul} className="card-hover rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7f3ff] text-[#1877f2]">
                <k.ikon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-slate-900">{k.judul}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{k.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- katalog -------------------------------- */

function levelWarna(level: Course['level']) {
  if (level === 'Pemula') return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
  if (level === 'Menengah') return 'bg-sky-50 text-sky-700 border border-sky-200';
  return 'bg-purple-50 text-purple-700 border border-purple-200';
}

function CourseCard({
  course,
  terbuka,
  onToggle,
  onDaftar,
}: {
  course: Course;
  terbuka: boolean;
  onToggle: () => void;
  onDaftar: () => void;
}) {
  return (
    <article className="card-hover flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">{course.kategori}</span>
        <span className={`rounded-full px-2.5 py-1 font-medium ${levelWarna(course.level)}`}>{course.level}</span>
        {course.badge ? (
          <span className="rounded-full bg-blue-50 px-2.5 py-1 font-bold text-[#1877f2] border border-blue-200">
            {course.badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-slate-900">{course.judul}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{course.deskripsi}</p>
      <p className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-500">
        <Clock size={15} aria-hidden="true" className="text-slate-400" /> {course.durasi}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {course.tools.map((t) => (
          <span key={t} className="rounded bg-slate-100 px-2 py-1 font-mono text-xs text-slate-700">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={terbuka}
          className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-800 hover:text-[#1877f2]"
        >
          Silabus {course.silabus.length} modul
          <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${terbuka ? 'rotate-180' : ''}`} />
        </button>
        {terbuka ? (
          <ul className="mt-3 space-y-2">
            {course.silabus.map((s) => (
              <li key={s} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                <CheckCircle2 size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600" />
                {s}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
        <div>
          {course.hargaCoret ? (
            <p className="text-xs text-slate-400 line-through">{course.hargaCoret}</p>
          ) : null}
          <p className="font-display text-xl font-extrabold text-slate-900">{course.harga}</p>
        </div>
        <button
          type="button"
          onClick={onDaftar}
          className="rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#166fe5]"
        >
          Pilih kelas
        </button>
      </div>
    </article>
  );
}

function Katalog({
  filter,
  onFilter,
  courseTerbuka,
  onToggleCourse,
  onDaftar,
}: {
  filter: string;
  onFilter: (f: string) => void;
  courseTerbuka: string | null;
  onToggleCourse: (id: string) => void;
  onDaftar: (id: string) => void;
}) {
  const kategori = ['Semua', ...Array.from(new Set(courses.map((c) => c.kategori)))];
  const tampil = filter === 'Semua' ? courses : courses.filter((c) => c.kategori === filter);

  return (
    <section id="kelas" className="scroll-mt-20 border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Program Profesional Data Engineering</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Ambil modul spesifik sesuai kebutuhan karier Anda, atau pilih bootcamp komprehensif untuk persiapan kerja penuh.
        </p>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Saring kelas berdasarkan kategori">
          {kategori.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onFilter(k)}
              aria-pressed={filter === k}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === k
                  ? 'bg-[#1877f2] text-white shadow-xs'
                  : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tampil.map((c) => (
            <CourseCard
              key={c.id}
              course={c}
              terbuka={courseTerbuka === c.id}
              onToggle={() => onToggleCourse(c.id)}
              onDaftar={() => onDaftar(c.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- alur belajar ------------------------------ */

const ALUR = [
  {
    tahap: 'Tahap 1',
    judul: 'Fondasi Python & SQL',
    isi: 'Menguatkan dasar pemrograman data. Anda akan mahir membersihkan data kotor dan menulis query analitik yang teroptimasi.',
  },
  {
    tahap: 'Tahap 2',
    judul: 'Pipeline ETL Terjadwal',
    isi: 'Membangun DAG Airflow yang menarik data terjadwal, memvalidasi kualitas data, dan memuatnya ke warehouse.',
  },
  {
    tahap: 'Tahap 3',
    judul: 'Skala Besar & Cloud',
    isi: 'Memproses jutaan baris dengan Spark, pemodelan data dengan dbt, serta deployment cloud yang efisien.',
  },
  {
    tahap: 'Tahap 4',
    judul: 'Siap Kerja & Produksi',
    isi: 'Empat project lengkap di portofolio GitHub, simulasi interview teknis, dan pendampingan karier intensif.',
  },
];

function Alur() {
  return (
    <section id="alur" className="scroll-mt-20 border-b border-slate-200 bg-[#f0f2f5] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Alur Belajar Terstruktur</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Urutan materi dirancang agar setiap tahapan menghasilkan pipeline nyata yang langsung bisa diuji coba.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {ALUR.map((a, i) => (
            <li key={a.judul} className="card-hover rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <p className="font-mono text-xs font-bold text-[#1877f2]">TAHAP 0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-900">{a.judul}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{a.isi}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------ jadwal & harga ----------------------------- */

function statusWarna(status: string) {
  if (status === 'Hampir penuh') return 'bg-amber-50 text-amber-800 border border-amber-200';
  if (status === 'Segera hadir') return 'bg-slate-100 text-slate-700 border border-slate-200';
  return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
}

function Jadwal({ onDaftar }: { onDaftar: (id: string) => void }) {
  return (
    <section id="jadwal" className="scroll-mt-20 border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Jadwal Kelas Terdekat</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Kelas live malam hari via Zoom. Seluruh sesi direkam dan dapat diakses ulang kapan saja.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 uppercase">
                <th scope="col" className="px-5 py-3.5">Batch</th>
                <th scope="col" className="px-5 py-3.5">Mulai</th>
                <th scope="col" className="px-5 py-3.5">Format</th>
                <th scope="col" className="px-5 py-3.5">Kuota</th>
                <th scope="col" className="px-5 py-3.5">Status</th>
                <th scope="col" className="px-5 py-3.5"><span className="sr-only">Aksi</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {batches.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-bold text-slate-900">{b.nama}</p>
                    <p className="text-xs text-slate-500">{courseName(b.courseId)}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-700 font-medium">{b.tanggal}</td>
                  <td className="px-5 py-4 text-slate-600">{b.format}</td>
                  <td className="px-5 py-4 text-slate-600">{b.kuota}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusWarna(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onDaftar(b.courseId)}
                      className="rounded-lg border border-[#1877f2] bg-white px-3.5 py-1.5 text-xs font-bold text-[#1877f2] transition-colors hover:bg-[#1877f2] hover:text-white"
                    >
                      Pilih Kursi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-start gap-2 text-xs text-slate-500">
          <CalendarDays size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-slate-400" />
          Butuh jadwal khusus untuk tim kantor atau komunitas bisnis? Hubungi kami untuk penyesuaian jadwal in-house.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- corporate -------------------------------- */

function Corporate() {
  return (
    <section className="border-b border-slate-200 bg-[#0b4596] text-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
            Corporate & In-House
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white">Pelatihan Khusus Tim Kantor & Perusahaan</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100">
            Materi dan studi kasus kami rancang langsung sesuai data stack yang digunakan di kantor Anda (GCP, AWS, PostgreSQL, atau on-premise).
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-blue-50">
            {[
              'Kapasitas 10–50 peserta, online via Zoom atau in-house di kantor Anda',
              'Pre-test dan post-test resmi untuk mengukur peningkatan tim',
              'Studi kasus privat disesuaikan dengan data riil perusahaan',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-amber-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Testimoni Klien Corporate</p>
          <p className="mt-3 font-display text-xl font-bold leading-snug text-white">
            “Skor post-test tim meningkat 41%. Pipeline ETL yang kami susun saat sesi pelatihan langsung masuk ke staging produksi.”
          </p>
          <p className="mt-3 text-xs text-blue-200">Head of Data, Perusahaan Logistik Nasional (Batch 25 Engineer)</p>
          <a
            href={waLink('Halo Admin DSI Academy, saya ingin berdiskusi mengenai penawaran training corporate untuk perusahaan kami.')}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#0b4596] shadow-sm transition-colors hover:bg-blue-50"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Minta Proposal Corporate via WA
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- instruktur & testimoni ------------------------- */

function Instruktur() {
  return (
    <section id="instruktur" className="scroll-mt-20 border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Didampingi Mentor Praktisi</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Pengajar kami adalah praktisi data dan software engineer aktif yang sehari-hari berkutat dengan sistem skala riil.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {instructors.map((ins) => (
            <div key={ins.nama} className="card-hover rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-2xs">
              <p className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b4596] font-display font-bold text-white shadow-xs">
                {ins.inisial}
              </p>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{ins.nama}</h3>
              <p className="mt-1 text-xs font-semibold text-[#1877f2]">{ins.peran}</p>
              <p className="mt-2 text-xs text-slate-600 font-mono bg-white p-2 rounded border border-slate-200">
                {ins.keahlian}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  return (
    <section className="border-b border-slate-200 bg-[#f0f2f5] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Pengalaman Para Alumni</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Ulasan jujur dari peserta yang telah mempraktikkan materi di tempat kerja masing-masing.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.nama} className="card-hover flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <blockquote className="text-sm leading-relaxed text-slate-700">“{t.teks}”</blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-bold text-sm text-slate-900">{t.nama}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <Star size={13} aria-hidden="true" className="fill-amber-400 text-amber-400" /> {t.kelas}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ faq ----------------------------------- */

function Faq({ terbuka, onToggle }: { terbuka: number | null; onToggle: (i: number) => void }) {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-3xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Semua hal yang perlu Anda ketahui mengenai mekanisme belajar dan pendaftaran.
        </p>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-2xs">
          {faqs.map((f, i) => {
            const buka = terbuka === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => onToggle(i)}
                  aria-expanded={buka}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm md:text-base">{f.q}</span>
                  <ChevronDown size={18} aria-hidden="true" className={`shrink-0 text-slate-400 transition-transform ${buka ? 'rotate-180' : ''}`} />
                </button>
                {buka ? <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- form daftar ------------------------------- */

interface FormState {
  nama: string;
  wa: string;
  email: string;
  kelas: string;
  batch: string;
  kebutuhan: string;
  pesan: string;
}

const FORM_AWAL: FormState = {
  nama: '',
  wa: '',
  email: '',
  kelas: '',
  batch: '',
  kebutuhan: 'Individu',
  pesan: '',
};

function Daftar({ kelasDipilih }: { kelasDipilih: string }) {
  const [form, setForm] = useState<FormState>(FORM_AWAL);
  const [error, setError] = useState<Partial<FormState>>({});
  const [terkirim, setTerkirim] = useState(false);

  const kelasAktif = kelasDipilih || form.kelas;
  const batchTersedia = kelasAktif ? batches.filter((b) => b.courseId === kelasAktif) : batches;

  function isi<K extends keyof FormState>(kunci: K, nilai: FormState[K]) {
    setForm((f) => ({ ...f, [kunci]: nilai }));
    setTerkirim(false);
  }

  function validasi(): string | null {
    const e: Partial<FormState> = {};
    if (form.nama.trim().length < 3) e.nama = 'Isi nama lengkap Anda, minimal 3 huruf.';
    if (!/^[0-9+ ]{9,16}$/.test(form.wa.trim())) e.wa = 'Isi nomor WhatsApp aktif, contoh 081234567890.';
    if (form.email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Format email kurang tepat, periksa lagi.';
    if (kelasAktif === '') e.kelas = 'Pilih dulu kelas yang diminati.';
    setError(e);
    const urutan: Array<{ kunci: keyof FormState; id: string }> = [
      { kunci: 'nama', id: 'f-nama' },
      { kunci: 'wa', id: 'f-wa' },
      { kunci: 'email', id: 'f-email' },
      { kunci: 'kelas', id: 'f-kelas' },
    ];
    return urutan.find((u) => e[u.kunci])?.id ?? null;
  }

  function kirim(ev: React.FormEvent) {
    ev.preventDefault();
    const idErrorPertama = validasi();
    if (idErrorPertama) {
      document.getElementById(idErrorPertama)?.focus();
      return;
    }
    setTerkirim(true);
  }

  const pesanWA = terkirim
    ? waLink(
        `Halo Integra Academy, saya mau daftar.\n\nNama: ${form.nama}\nNo WA: ${form.wa}\nEmail: ${form.email || '-'}\nKelas: ${courseName(kelasAktif)}\nBatch: ${form.batch || 'minta rekomendasi'}\nKebutuhan: ${form.kebutuhan}\nCatatan: ${form.pesan || '-'}\n\nMohon info langkah selanjutnya.`,
      )
    : '';

  const inputKelas =
    'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20 focus-visible:outline-none';

  return (
    <section id="daftar" className="scroll-mt-20 border-b border-slate-200 bg-[#f0f2f5] py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1877f2] mb-2">
            Pendaftaran & Konsultasi
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Mulai Belajar Bersama Kami</h2>
          <p className="mt-3 leading-relaxed text-sm text-slate-600">
            Silakan lengkapi formulir pendaftaran. Data Anda akan disusun menjadi format WhatsApp otomatis dan langsung terhubung dengan admin resmi kami (0813-1909-5252).
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <GraduationCap size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1877f2]" />
              Konsultasi pemilihan kurikulum gratis sebelum pembayaran
            </li>
            <li className="flex gap-3">
              <MapPin size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1877f2]" />
              Format online via Zoom interaktif dari seluruh Indonesia
            </li>
            <li className="flex gap-3">
              <MessageCircle size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1877f2]" />
              Grup diskusi suportif yang tetap aktif setelah kelas usai
            </li>
          </ul>
        </div>
        <form onSubmit={kirim} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="f-nama" className="mb-1 block text-xs font-semibold text-slate-700">
                Nama lengkap
              </label>
              <input
                id="f-nama"
                name="nama"
                type="text"
                autoComplete="name"
                placeholder="cth. Hendra Wijaya…"
                value={form.nama}
                onChange={(ev) => isi('nama', ev.target.value)}
                className={inputKelas}
                aria-invalid={Boolean(error.nama)}
                aria-describedby={error.nama ? 'f-nama-err' : undefined}
              />
              {error.nama ? (
                <p id="f-nama-err" aria-live="polite" className="mt-1 text-xs text-red-600">
                  {error.nama}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="f-wa" className="mb-1 block text-xs font-semibold text-slate-700">
                Nomor WhatsApp
              </label>
              <input
                id="f-wa"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                placeholder="cth. 081234567890…"
                value={form.wa}
                onChange={(ev) => isi('wa', ev.target.value)}
                className={inputKelas}
                aria-invalid={Boolean(error.wa)}
                aria-describedby={error.wa ? 'f-wa-err' : undefined}
              />
              {error.wa ? (
                <p id="f-wa-err" aria-live="polite" className="mt-1 text-xs text-red-600">
                  {error.wa}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="f-email" className="mb-1 block text-xs font-semibold text-slate-700">
              Email <span className="font-normal text-slate-500">(opsional)</span>
            </label>
            <input
              id="f-email"
              name="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="cth. hendra@email.com…"
              value={form.email}
              onChange={(ev) => isi('email', ev.target.value)}
              className={inputKelas}
              aria-invalid={Boolean(error.email)}
              aria-describedby={error.email ? 'f-email-err' : undefined}
            />
            {error.email ? (
              <p id="f-email-err" aria-live="polite" className="mt-1 text-xs text-red-600">
                {error.email}
              </p>
            ) : null}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="f-kelas" className="mb-1 block text-xs font-semibold text-slate-700">
                Program yang diminati
              </label>
              <select
                id="f-kelas"
                name="kelas"
                value={kelasAktif}
                onChange={(ev) => isi('kelas', ev.target.value)}
                className={inputKelas}
                aria-invalid={Boolean(error.kelas)}
                aria-describedby={error.kelas ? 'f-kelas-err' : undefined}
              >
                <option value="">Pilih program</option>
                <option value="umkm-batch">Pelatihan UMKM: Kasir, Inventory & AI — Rp 350.000</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.judul} — {c.harga}
                  </option>
                ))}
              </select>
              {error.kelas ? (
                <p id="f-kelas-err" aria-live="polite" className="mt-1 text-xs text-red-600">
                  {error.kelas}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="f-batch" className="mb-1 block text-xs font-semibold text-slate-700">
                Batch
              </label>
              <select
                id="f-batch"
                name="batch"
                value={form.batch}
                onChange={(ev) => isi('batch', ev.target.value)}
                className={inputKelas}
              >
                <option value="">Minta rekomendasi admin</option>
                <option value="Batch UMKM Oktober 2026">Batch UMKM (3 - 10 Oktober 2026)</option>
                {batchTersedia.map((b) => (
                  <option key={b.id} value={b.nama}>
                    {b.nama} — {b.tanggal}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <fieldset className="mt-4">
            <legend className="mb-1.5 text-xs font-semibold text-slate-700">Kebutuhan</legend>
            <div className="flex gap-2">
              {['Individu / UMKM', 'Corporate / Tim'].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => isi('kebutuhan', k)}
                  aria-pressed={form.kebutuhan === k}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    form.kebutuhan === k
                      ? 'bg-[#1877f2] text-white font-semibold'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-4">
            <label htmlFor="f-pesan" className="mb-1 block text-xs font-semibold text-slate-700">
              Catatan <span className="font-normal text-slate-500">(opsional)</span>
            </label>
            <textarea
              id="f-pesan"
              name="pesan"
              rows={3}
              placeholder="cth. apakah ada rekaman jika bentrok jam kantor?…"
              value={form.pesan}
              onChange={(ev) => isi('pesan', ev.target.value)}
              className={`${inputKelas} resize-none`}
            />
          </div>
          {terkirim ? (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                <Send size={16} aria-hidden="true" /> Pesan Anda telah tersusun rapi.
              </p>
              <p className="mt-1 text-xs text-emerald-700">
                Klik tombol di bawah ini untuk mengirimkannya langsung via WhatsApp ke admin academy.
              </p>
              <a
                href={pesanWA}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-emerald-700"
              >
                <MessageCircle size={16} aria-hidden="true" /> Buka WhatsApp & Kirim
              </a>
            </div>
          ) : (
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#1877f2] py-2.5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-[#166fe5]"
            >
              Lanjutkan ke WhatsApp Admin
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------------------------------- footer --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-3">
            <img
              src="/dsi-logo.webp"
              alt="Logo PT Daya Solusi Integra"
              className="h-10 w-auto object-contain"
              width="120"
              height="40"
            />
            <span className="border-l border-slate-300 pl-2.5 font-display font-bold text-slate-900">Integra Academy</span>
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
            Divisi pelatihan Daya Solusi Integra. Berfokus menghadirkan teknologi praktis, data engineering, dan digitalisasi bisnis yang langsung bisa diterapkan.
          </p>
        </div>
        <nav aria-label="Tautan footer">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-[#1877f2] transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#daftar" className="hover:text-[#1877f2] transition-colors">
                Pendaftaran & Konsultasi
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Kontak Resmi</p>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            <li>WhatsApp: 0813-1909-5252 (Admin Academy)</li>
            <li>Email: academy@dsintegra.co.id</li>
            <li>Jakarta, Indonesia — Layanan Online ke Seluruh Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        © 2026 Daya Solusi Integra. Seluruh biaya sudah termasuk modul & pendampingan.
      </div>
    </footer>
  );
}

/* ------------------------------------ app ----------------------------------- */

export default function App() {
  const [filter, setFilter] = useState('Semua');
  const [courseTerbuka, setCourseTerbuka] = useState<string | null>('etl-airflow');
  const [faqTerbuka, setFaqTerbuka] = useState<number | null>(0);
  const [kelasDipilih, setKelasDipilih] = useState('');

  function pilihKelas(id: string) {
    setKelasDipilih(id);
    const kurangGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('daftar')?.scrollIntoView({ behavior: kurangGerak ? 'auto' : 'smooth' });
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-800">
      <Header />
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#1877f2] focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <main id="konten">
        <Hero />
        <PosterShowcase />
        <Keunggulan />
        <Katalog
          filter={filter}
          onFilter={setFilter}
          courseTerbuka={courseTerbuka}
          onToggleCourse={(id) => setCourseTerbuka((buka) => (buka === id ? null : id))}
          onDaftar={pilihKelas}
        />
        <Alur />
        <Jadwal onDaftar={pilihKelas} />
        <Corporate />
        <Instruktur />
        <Testimoni />
        <Faq terbuka={faqTerbuka} onToggle={(i) => setFaqTerbuka((buka) => (buka === i ? null : i))} />
        <Daftar kelasDipilih={kelasDipilih} />
      </main>
      <Footer />
      <a
        href={waLink('Halo Integra Academy, saya mau tanya-tanya informasi seputar kelas dan pelatihan.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp dengan admin academy"
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] p-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#166fe5]"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
