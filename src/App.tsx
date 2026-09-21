import { useState } from 'react';
import {
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  GraduationCap,
  Image as ImageIcon,
  Laptop,
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
  LYNK_ID_REGISTRATION_URL,
  testimonials,
  umkmTraining,
  waLink,
  type Course,
} from './data.ts';

/* ---------------------------------- header --------------------------------- */

const NAV = [
  { href: '#program-ai', label: 'Coding with AI' },
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
            href={LYNK_ID_REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-[#1877f2]/30 bg-[#e7f3ff] px-3.5 py-2 text-xs font-semibold text-[#135cb8] transition-colors hover:bg-[#dbeafe] sm:inline-block"
          >
            Coding with AI Rp 99rb
          </a>
          <a
            href={LYNK_ID_REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#166fe5] md:inline-block"
          >
            Daftar Sekarang
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-slate-200 bg-white px-5 py-3 shadow-lg md:hidden" aria-label="Navigasi seluler">
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
            href={LYNK_ID_REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg border border-[#1877f2]/30 bg-[#e7f3ff] px-3 py-2.5 text-center text-[15px] font-semibold text-[#135cb8]"
          >
            Pelatihan Coding with AI — Rp 99.000 (1 Hari)
          </a>
          <a
            href={LYNK_ID_REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
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

/* ---------------------------- hero & poster showcase ------------------------------ */

/* ---------------------------- hero & poster carousel ------------------------------ */

function HeroPosterCarousel() {
  const [slideAktif, setSlideAktif] = useState(0);
  const slides = umkmTraining.carouselSlides;

  function prevSlide() {
    setSlideAktif((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function nextSlide() {
    setSlideAktif((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  const slideSekarang = slides[slideAktif] ?? slides[0];

  return (
    <section id="program-ai" className="relative border-b border-slate-200 bg-white py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Kolom Kiri: Interactive Poster Carousel */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="group relative w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-lg transition-all hover:shadow-xl">
              {/* Gambar Carousel */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                <picture>
                  <source srcSet={slideSekarang.srcWebp} type="image/webp" />
                  <img
                    src={slideSekarang.srcPng}
                    alt={slideSekarang.judul}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="eager"
                    width="1200"
                    height="1200"
                  />
                </picture>

                {/* Tombol Navigasi Carousel */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Slide sebelumnya"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur-xs transition hover:bg-slate-900 hover:scale-110 shadow-md"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Slide berikutnya"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur-xs transition hover:bg-slate-900 hover:scale-110 shadow-md"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>

                {/* Badge Penunjuk Slide */}
                <div className="absolute top-3 left-3 rounded-full bg-slate-900/75 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  Slide {slideAktif + 1} / {slides.length}
                </div>

                {/* Tombol Perbesar Resolusi Penuh */}
                <a
                  href={slideSekarang.srcPng}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 shadow backdrop-blur-xs hover:bg-white"
                >
                  <ExternalLink size={14} aria-hidden="true" /> Buka Full
                </a>
              </div>

              {/* Dots Pagination */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSlideAktif(idx)}
                    aria-label={`Pilih ${s.judul}`}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === slideAktif ? 'w-8 bg-[#1877f2]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Keterangan Slide Terpilih */}
              <div className="mt-2 text-center">
                <p className="font-display text-xs font-bold text-slate-900">{slideSekarang.judul}</p>
                <p className="text-[11px] text-slate-500">{slideSekarang.subjudul}</p>
              </div>
            </div>

            {/* Badge Jaminan Kualitas */}
            <div className="mt-4 grid grid-cols-2 gap-2 w-full max-w-[440px] text-center text-xs">
              <div className="rounded-lg border border-slate-200 bg-slate-50 py-2 px-1">
                <p className="font-bold text-slate-800">1 Hari Intensif</p>
                <p className="text-[10px] text-slate-500">Sabtu, 3 Okt (09.00–15.00)</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 py-2 px-1">
                <p className="font-bold text-slate-800">Full Source Code</p>
                <p className="text-[10px] text-slate-500">POS, Dashboard & Rekaman</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Detail Program, Jadwal Lengkap, & Pendaftaran */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#1877f2]">
                  <Sparkles size={14} aria-hidden="true" /> Batch 1 Hari: Sabtu, 3 Oktober 2026
                </span>
                <span className="text-xs font-medium text-slate-500">Format: 100% Online via Google Meet</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl">
                Pelatihan Praktis Coding with AI: Solusi Nyata Karier & Bisnis Anda
              </h1>
              <p className="mt-2 text-xs font-semibold text-[#1877f2]">
                Untuk Fresh Graduate IT, Pengalaman IT yang Ingin Explore AI, Pelaku UMKM & Umum
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Bangun skill digital terapan, kuasai bantuan AI tools modern, dan ciptakan solusi nyata tanpa ribet. Pelatihan 1 hari intensif dirancang praktis, mudah dipahami, dan langsung menghasilkan aplikasi siap pakai.
              </p>

              {/* Bonus 3 Aplikasi */}
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <PackageCheck size={16} className="text-[#1877f2]" aria-hidden="true" /> Bonus Spesial Aplikasi Bisnis & Dashboard Siap Pakai:
                </p>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3 text-xs">
                  {umkmTraining.bonusAplikasi.map((app) => (
                    <div key={app.nama} className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-2xs">
                      <p className="font-bold text-slate-900">{app.nama}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{app.keterangan}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jadwal 1 Hari Intensif */}
              <div className="mt-5 space-y-2">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <CalendarDays size={16} className="text-[#1877f2]" aria-hidden="true" /> Jadwal Live Pelatihan (Google Meet):
                </p>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {umkmTraining.jadwal.map((j) => (
                    <div key={j.tanggal} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                      <div>
                        <span className="font-bold text-slate-900">{j.hari}, {j.tanggal}</span>
                        <span className="block text-[11px] text-slate-500">{j.catatan}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold tabular-nums text-[#1877f2] text-sm">{j.jam}</span>
                        <span className="block text-[10px] text-emerald-600 font-medium">Live Praktik + Tanya Jawab</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price tag & CTA Bar */}
            <div className="mt-8 rounded-2xl border-2 border-[#1877f2]/20 bg-white p-5 shadow-sm ring-4 ring-[#1877f2]/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">Investasi Pelatihan (Promo Spesial):</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400 line-through tabular-nums">{umkmTraining.hargaCoret}</span>
                    <span className="font-display text-3xl font-extrabold tabular-nums text-[#1877f2]">{umkmTraining.harga}</span>
                    <span className="text-xs font-semibold text-slate-600">/ peserta (1 hari intensif tuntas)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={LYNK_ID_REGISTRATION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1877f2] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#166fe5] hover:shadow"
                  >
                    Daftar Sekarang (Rp 99.000)
                  </a>
                  <a
                    href={waLink(umkmTraining.waMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Tanya via WA
                  </a>
                </div>
              </div>
              <p className="mt-2 text-center sm:text-left text-[11px] text-slate-500">
                Pendaftaran resmi via Lynk.id / WhatsApp Mas Rahmat (+62 813-1909-5252).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ profil mentor ----------------------------- */

function MentorSection() {
  return (
    <section id="instruktur" className="scroll-mt-20 border-b border-slate-200 bg-white py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#1877f2]">
            Instruktur & Mentor Praktisi Riil
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
            Belajar Langsung dari Praktisi Berpengalaman 15+ Tahun
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Bukan sekadar teori. Mentor kami adalah senior lead engineer dan konsultan aktif yang mengawal sistem data enterprise di perusahaan telekomunikasi, retail besar, dan proyek global.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {instructors.map((m) => (
            <div
              key={m.nama}
              className="card-hover flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-7 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                  <picture>
                    <source srcSet={m.foto} type="image/webp" />
                    <img
                      src={m.foto}
                      alt={`Foto mentor ${m.nama}`}
                      className="h-28 w-28 rounded-2xl object-cover object-top border-2 border-white shadow-md ring-1 ring-slate-200"
                      width="112"
                      height="112"
                      loading="lazy"
                    />
                  </picture>
                  <span className="absolute -bottom-2 -right-2 rounded-full bg-[#1877f2] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                    {m.pengalaman}
                  </span>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-display text-xl font-bold text-slate-900">{m.nama}</h3>
                  <p className="mt-0.5 text-xs font-bold text-[#1877f2]">{m.peran}</p>
                  {m.gelar ? (
                    <p className="mt-1 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500">
                      <GraduationCap size={14} className="text-slate-400" aria-hidden="true" />
                      {m.gelar}
                    </p>
                  ) : null}
                  <div className="mt-2.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-left">
                    <p className="text-[11px] font-mono text-slate-600 leading-snug">
                      <span className="font-semibold text-slate-800">Keahlian:</span> {m.keahlian}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-[13px] leading-relaxed text-slate-600 border-t border-slate-200/60 pt-3.5">
                {m.ringkasan}
              </p>

              <div className="mt-4 space-y-1.5 rounded-xl bg-white p-3.5 border border-slate-200/70 text-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Track Record Utama:</p>
                {m.highlights.map((h, i) => (
                  <p key={i} className="flex items-start gap-2 text-slate-600 leading-tight">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#1877f2]" aria-hidden="true" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>

              {/* Logo Sertifikasi Resmi Terverifikasi */}
              {m.certifications && m.certifications.length > 0 ? (
                <div className="mt-4 rounded-xl border border-slate-200/70 bg-white p-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Sertifikasi Resmi Terverifikasi:
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {m.certifications.map((c) => (
                      <div
                        key={c.nama}
                        title={c.nama}
                        className="group relative flex h-11 items-center justify-center rounded-lg border border-slate-200/90 bg-slate-50/70 px-2.5 py-1 transition-all hover:border-[#1877f2]/50 hover:bg-blue-50/40 hover:shadow-2xs"
                      >
                        <picture>
                          <source srcSet={c.logo} type="image/webp" />
                          <img
                            src={c.logo}
                            alt={c.nama}
                            className="h-8 w-auto max-w-[85px] object-contain transition-transform group-hover:scale-105"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Tools Praktik Workshop */}
              {m.toolsWorkshop && m.toolsWorkshop.length > 0 ? (
                <div className="mt-3 rounded-xl border border-slate-200/70 bg-white p-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Tools Praktik Hands-on Workshop:
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {m.toolsWorkshop.map((t) => (
                      <div
                        key={t.nama}
                        title={t.nama}
                        className="group relative flex h-11 items-center gap-2 rounded-lg border border-slate-200/90 bg-slate-900 px-3 py-1 text-white transition-all hover:shadow-2xs"
                      >
                        <picture>
                          <source srcSet={t.logo} type="image/webp" />
                          <img
                            src={t.logo}
                            alt={t.nama}
                            className="h-7 w-auto max-w-[90px] object-contain rounded"
                            loading="lazy"
                          />
                        </picture>
                        <span className="text-[11px] font-mono font-medium text-slate-200">
                          {t.keterangan ?? t.nama}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- keunggulan ------------------------------ */

const KEUNGGULAN = [
  {
    ikon: Laptop,
    judul: 'Kurikulum praktis & siap pakai',
    isi: 'Materi langkah demi langkah tanpa teori bertele-tele. Langsung praktik membuat aplikasi bisnis dan pipeline yang siap dipakai.',
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
            <p className="text-xs text-slate-400 line-through tabular-nums">{course.hargaCoret}</p>
          ) : null}
          <p className="font-display text-xl font-extrabold tabular-nums text-slate-900">{course.harga}</p>
        </div>
        <button
          type="button"
          onClick={onDaftar}
          aria-label={`Daftar kelas ${course.judul}`}
          className="rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#166fe5]"
        >
          Daftar kelas
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
        <div
          tabIndex={0}
          role="region"
          aria-label="Tabel Jadwal Kelas Terdekat"
          className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877f2]"
        >
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
                  <td className="px-5 py-4 text-slate-700 font-medium tabular-nums">{b.tanggal}</td>
                  <td className="px-5 py-4 text-slate-600">{b.format}</td>
                  <td className="px-5 py-4 text-slate-600 tabular-nums">{b.kuota}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusWarna(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onDaftar(b.courseId)}
                      aria-label={`Pilih kursi untuk ${b.nama}`}
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

/* -------------------------------- testimoni --------------------------------- */

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
    'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877f2] focus-visible:ring-offset-1 transition-shadow';

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
                <option value="umkm-batch">Pelatihan Coding with AI (1 Hari) — Rp 99.000</option>
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
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#1877f2] focus:px-4 focus:py-2 focus:font-semibold focus:text-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Lewati ke konten utama
      </a>
      <Header />
      <main id="konten">
        <HeroPosterCarousel />
        <MentorSection />
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
        className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] p-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#166fe5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
