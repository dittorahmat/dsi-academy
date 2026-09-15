import { useState } from 'react';
import {
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  Star,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { batches, courseName, courses, faqs, instructors, testimonials, waLink, type Course } from './data.ts';

/* ---------------------------------- header --------------------------------- */

const NAV = [
  { href: '#kelas', label: 'Kelas' },
  { href: '#alur', label: 'Alur belajar' },
  { href: '#jadwal', label: 'Jadwal' },
  { href: '#instruktur', label: 'Instruktur' },
  { href: '#faq', label: 'FAQ' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#atas" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b4596] font-display text-sm font-bold text-[#cca43b]">
            DS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold text-white">Integra Academy</span>
            <span className="block text-xs text-slate-400">by Daya Solusi Integra</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-300 transition-colors hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#daftar"
            className="hidden rounded-lg bg-[#cca43b] px-4 py-2 text-sm font-semibold text-[#0b0f19] transition-colors hover:bg-[#d9b455] md:inline-block"
          >
            Daftar sekarang
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-white/10 px-5 py-3 md:hidden" aria-label="Navigasi seluler">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-[15px] text-slate-200 hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#daftar"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[#cca43b] px-3 py-2.5 text-center text-[15px] font-semibold text-[#0b0f19]"
          >
            Daftar sekarang
          </a>
        </nav>
      ) : null}
    </header>
  );
}

/* ------------------------------- hero visual ------------------------------ */

const pipelineWindow = (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1e3d] shadow-2xl" aria-hidden="true">
    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      <span className="ml-3 text-xs text-slate-400">etl_penjualan.py — production</span>
    </div>
    <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
      <code>
        <span className="text-slate-500"># DAG berjalan tiap jam 05:00 WIB</span>{'\n'}
        <span className="text-slate-200">extract</span>
        <span className="text-slate-500">  →  </span>
        <span className="text-[#7fb3ff]">validate</span>
        <span className="text-slate-500">  →  </span>
        <span className="text-[#cca43b]">load_warehouse</span>
        {'\n\n'}
        <span className="text-green-400">✓  1.248.903 baris dimuat</span>{'\n'}
        <span className="text-green-400">✓  0 baris gagal validasi</span>{'\n'}
        <span className="text-slate-400">durasi 04:12 — selesai 05:04</span>
      </code>
    </pre>
  </div>
);

const STATS: Array<{ angka: string; arti: string }> = [
  { angka: '1.200+', arti: 'alumni dari 12 batch reguler dan corporate' },
  { angka: '4,8/5', arti: 'rating kepuasan peserta angkatan terakhir' },
  { angka: '25+', arti: 'perusahaan dan instansi mengirim timnya' },
  { angka: '100%', arti: 'kelas berbasis project, bukan ceramah' },
];

function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(700px 340px at 15% 0%, rgba(11,69,150,0.35), transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-14 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full border border-[#cca43b]/40 px-3 py-1 text-[13px] text-[#e3c86a]">
            Pendaftaran batch Oktober–November 2026 dibuka
          </p>
          <h1 className="text-4xl font-bold leading-[1.12] text-white md:text-5xl">
            Belajar Data Engineering sampai bisa deploy pipeline beneran.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Kelas live 2 kali seminggu. Setiap modul berakhir dengan project yang masuk portofolio.
            Mentornya praktisi yang sehari-hari pegang data production.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#kelas"
              className="rounded-lg bg-[#cca43b] px-6 py-3 font-semibold text-[#0b0f19] transition-colors hover:bg-[#d9b455]"
            >
              Lihat 6 kelas
            </a>
            <a
              href="#daftar"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Konsultasi gratis
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.arti}>
                <dt className="sr-only">{s.arti}</dt>
                <dd className="font-display text-3xl font-bold text-white">{s.angka}</dd>
                <dd className="mt-1 text-[13px] leading-snug text-slate-400">{s.arti}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          {pipelineWindow}
          <p className="mt-3 text-[13px] text-slate-500">
            Contoh output project peserta kelas ETL Airflow, batch 16.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- keunggulan ------------------------------ */

const KEUNGGULAN = [
  {
    ikon: Users,
    judul: 'Kelas kecil, maksimal 25 orang',
    isi: 'Mentor hafal progres tiap peserta. Pertanyaan tidak antre dan tugas selalu dapat review tertulis.',
  },
  {
    ikon: Workflow,
    judul: 'Satu modul, satu project jalan',
    isi: 'Lulus kelas ETL artinya Anda punya DAG Airflow yang berjalan terjadwal, lengkap dengan data quality check.',
  },
  {
    ikon: Briefcase,
    judul: 'Mentor dari industri, bukan full-time trainer',
    isi: 'Pengajar kami lead data engineer dan analytics engineer yang PR code-nya direview tim production tiap hari.',
  },
  {
    ikon: Award,
    judul: 'Sertifikat plus review karier',
    isi: 'Bootcamp 12 minggu termasuk simulasi interview, bedah CV, dan polesan LinkedIn sampai siap dilamar.',
  },
];

function Keunggulan() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="max-w-2xl text-3xl font-bold text-white">Kenapa belajar di Integra Academy</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Kami tidak mengejar jumlah peserta. Target kami sederhana: tiap lulusan punya bukti kerja yang bisa
          ditunjukkan ke pemberi kerja.
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-2">
          {KEUNGGULAN.map((k) => (
            <div key={k.judul} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0b4596]/30 text-[#7fb3ff]">
                <k.ikon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{k.judul}</h3>
                <p className="mt-1.5 leading-relaxed text-slate-300">{k.isi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- katalog -------------------------------- */

function levelWarna(level: Course['level']) {
  if (level === 'Pemula') return 'bg-emerald-400/15 text-emerald-300';
  if (level === 'Menengah') return 'bg-sky-400/15 text-sky-300';
  return 'bg-violet-400/15 text-violet-300';
}

function CourseCard({ course, terbuka, onToggle, onDaftar }: {
  course: Course;
  terbuka: boolean;
  onToggle: () => void;
  onDaftar: () => void;
}) {
  return (
    <article className="card-hover glass flex flex-col rounded-xl p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-white/10 px-2.5 py-1 font-medium text-slate-200">{course.kategori}</span>
        <span className={`rounded-full px-2.5 py-1 font-medium ${levelWarna(course.level)}`}>{course.level}</span>
        {course.badge ? (
          <span className="rounded-full bg-[#cca43b]/20 px-2.5 py-1 font-semibold text-[#e3c86a]">{course.badge}</span>
        ) : null}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-white">{course.judul}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-300">{course.deskripsi}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
        <Clock size={15} aria-hidden="true" /> {course.durasi}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {course.tools.map((t) => (
          <span key={t} className="rounded bg-white/5 px-2 py-1 font-mono text-xs text-slate-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={terbuka}
          className="flex w-full items-center justify-between text-left text-sm font-semibold text-white"
        >
          Silabus {course.silabus.length} modul
          <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${terbuka ? 'rotate-180' : ''}`} />
        </button>
        {terbuka ? (
          <ul className="mt-3 space-y-2">
            {course.silabus.map((s) => (
              <li key={s} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-400" />
                {s}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          {course.hargaCoret ? (
            <p className="text-sm text-slate-500 line-through">{course.hargaCoret}</p>
          ) : null}
          <p className="font-display text-xl font-bold text-white">{course.harga}</p>
        </div>
        <button
          type="button"
          onClick={onDaftar}
          className="rounded-lg bg-[#cca43b] px-4 py-2.5 text-sm font-semibold text-[#0b0f19] transition-colors hover:bg-[#d9b455]"
        >
          Pilih kelas
        </button>
      </div>
    </article>
  );
}

function Katalog({ filter, onFilter, courseTerbuka, onToggleCourse, onDaftar }: {
  filter: string;
  onFilter: (f: string) => void;
  courseTerbuka: string | null;
  onToggleCourse: (id: string) => void;
  onDaftar: (id: string) => void;
}) {
  const kategori = ['Semua', ...Array.from(new Set(courses.map((c) => c.kategori)))];
  const tampil = filter === 'Semua' ? courses : courses.filter((c) => c.kategori === filter);

  return (
    <section id="kelas" className="scroll-mt-20 border-t border-white/10 bg-[#0d1e3d]/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">6 kelas, dari nol sampai cloud</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Ambil satu kelas sesuai kebutuhan, atau hemat dengan bootcamp 12 minggu yang mencakup semuanya.
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
                  ? 'bg-[#cca43b] text-[#0b0f19]'
                  : 'border border-white/15 text-slate-300 hover:border-white/35 hover:text-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    judul: 'Fondasi Python dan SQL',
    isi: 'Empat minggu menguatkan dasar. Lulus tahap ini, Anda bisa membersihkan data kotor dan menulis query agregat tanpa mencontek.',
  },
  {
    tahap: 'Tahap 2',
    judul: 'Pipeline ETL terjadwal',
    isi: 'Bangun DAG Airflow yang menarik data tiap pagi, memvalidasinya, dan memuat ke warehouse. Ini project pertama portofolio Anda.',
  },
  {
    tahap: 'Tahap 3',
    judul: 'Skala besar dan cloud',
    isi: 'Spark untuk data ratusan juta baris, dbt untuk modeling, lalu deploy semuanya di cloud dengan biaya terkontrol.',
  },
  {
    tahap: 'Tahap 4',
    judul: 'Siap kerja',
    isi: 'Empat project lengkap, simulasi interview dengan mentor, dan CV yang menonjolkan bukti bukan klaim.',
  },
];

function Alur() {
  return (
    <section id="alur" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">Alur bootcamp 12 minggu</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Urutannya dirancang supaya tiap tahap menghasilkan sesuatu yang jalan, bukan sekadar materi selesai.
        </p>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {ALUR.map((a, i) => (
            <li key={a.judul} className="relative border-t-2 border-[#0b4596] pt-5">
              <p className="font-mono text-sm text-[#7fb3ff]">0{i + 1}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{a.tahap}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{a.judul}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{a.isi}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------ jadwal & harga ----------------------------- */

function statusWarna(status: string) {
  if (status === 'Hampir penuh') return 'bg-red-400/15 text-red-300';
  if (status === 'Segera hadir') return 'bg-white/10 text-slate-300';
  return 'bg-emerald-400/15 text-emerald-300';
}

function Jadwal({ onDaftar }: { onDaftar: (id: string) => void }) {
  return (
    <section id="jadwal" className="scroll-mt-20 border-t border-white/10 bg-[#0d1e3d]/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">Jadwal batch terdekat</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Kelas live pukul 19.00–21.30 WIB, dua kali seminggu. Semua sesi direkam dan bisa ditonton ulang kapan saja.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[720px] text-left text-[15px] tabular-nums">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm text-slate-300">
                <th scope="col" className="px-5 py-3.5 font-semibold">Batch</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Mulai</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Format</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Kuota</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Status</th>
                <th scope="col" className="px-5 py-3.5"><span className="sr-only">Aksi</span></th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white">{b.nama}</p>
                    <p className="text-sm text-slate-400">{courseName(b.courseId)}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-200">{b.tanggal}</td>
                  <td className="px-5 py-4 text-slate-200">{b.format}</td>
                  <td className="px-5 py-4 text-slate-400">{b.kuota}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${statusWarna(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onDaftar(b.courseId)}
                      className="rounded-lg border border-[#cca43b]/50 px-3.5 py-1.5 text-sm font-semibold text-[#e3c86a] transition-colors hover:bg-[#cca43b] hover:text-[#0b0f19]"
                    >
                      Amankan kursi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-start gap-2 text-sm text-slate-400">
          <CalendarDays size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          Butuh jadwal khusus untuk tim kantor? Bagian corporate training di bawah bisa menyesuaikan hari dan jam.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- corporate -------------------------------- */

function Corporate() {
  return (
    <section className="border-t border-white/10 bg-[#0b4596]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Training in-house untuk tim data kantor Anda</h2>
          <p className="mt-3 leading-relaxed text-blue-100">
            Sudah dipercaya 25+ perusahaan dan instansi. Kurikulumnya kami sesuaikan dengan stack yang dipakai tim,
            studinya kasusnya pakai data sejenis milik Anda.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Peserta 10–50 orang, online atau datang ke kantor Anda',
              'Pre-test dan post-test untuk mengukur hasil ke HR',
              'Materi dan studi kasus disesuaikan dengan GCP, AWS, atau on-premise',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-blue-50">
                <CheckCircle2 size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-[#e3c86a]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-[#0b0f19]/60 p-7 backdrop-blur">
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <Database size={16} aria-hidden="true" /> Contoh klien corporate
          </p>
          <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white">
            “Pre/post test tim naik 41%. Pipeline yang dibangun saat training langsung dipakai di produksi.”
          </p>
          <p className="mt-3 text-sm text-slate-400">Head of Data, perusahaan logistik nasional — 25 engineer, 6 hari</p>
          <a
            href="#daftar"
            className="mt-6 inline-block rounded-lg bg-[#cca43b] px-6 py-3 font-semibold text-[#0b0f19] transition-colors hover:bg-[#d9b455]"
          >
            Minta proposal corporate
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- instruktur & testimoni ------------------------- */

function Instruktur() {
  return (
    <section id="instruktur" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">Diajar orang yang kerjaannya memang ini</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {instructors.map((ins) => (
            <div key={ins.nama} className="glass rounded-xl p-6">
              <p className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4596] font-display font-bold text-[#e3c86a]">
                {ins.inisial}
              </p>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{ins.nama}</h3>
              <p className="mt-1 text-sm text-slate-300">{ins.peran}</p>
              <p className="mt-2 font-mono text-xs text-slate-500">{ins.keahlian}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  return (
    <section className="border-t border-white/10 bg-[#0d1e3d]/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">Kata mereka yang sudah lulus</h2>
        <div className="mt-8 space-y-8">
          {testimonials.map((t) => (
            <figure key={t.nama} className="border-l-2 border-[#cca43b] pl-6">
              <blockquote className="max-w-3xl text-lg leading-relaxed text-slate-100">“{t.teks}”</blockquote>
              <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-white">{t.nama}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Star size={13} aria-hidden="true" className="text-[#cca43b]" /> {t.kelas}
                </span>
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
    <section id="faq" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="gold-rule mb-6 w-16" aria-hidden="true" />
        <h2 className="text-3xl font-bold text-white">Pertanyaan yang sering masuk</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10">
          {faqs.map((f, i) => {
            const buka = terbuka === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => onToggle(i)}
                  aria-expanded={buka}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white hover:bg-white/[0.03]"
                >
                  {f.q}
                  <ChevronDown size={19} aria-hidden="true" className={`shrink-0 text-slate-400 transition-transform ${buka ? 'rotate-180' : ''}`} />
                </button>
                {buka ? <p className="px-6 pb-6 leading-relaxed text-slate-300">{f.a}</p> : null}
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
    'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-[15px] text-white placeholder:text-slate-500 focus:border-[#cca43b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cca43b]';

  return (
    <section id="daftar" className="scroll-mt-20 border-t border-white/10 bg-[#0d1e3d]/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="gold-rule mb-6 w-16" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white">Daftar, kami hubungi maks. 1x24 jam</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Isi form di samping. Data Anda langsung tersusun jadi pesan WhatsApp, tinggal tekan kirim.
            Tanpa telepon marketing, tanpa spam.
          </p>
          <ul className="mt-6 space-y-3 text-[15px] text-slate-200">
            <li className="flex gap-3">
              <GraduationCap size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-[#e3c86a]" />
              Konsultasi pemilihan kelas gratis sebelum bayar
            </li>
            <li className="flex gap-3">
              <MapPin size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-[#e3c86a]" />
              Online dari mana saja, offline tersedia di Jakarta
            </li>
            <li className="flex gap-3">
              <MessageCircle size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-[#e3c86a]" />
              Grup diskusi tiap batch, aktif bahkan setelah lulus
            </li>
          </ul>
        </div>
        <form onSubmit={kirim} noValidate className="glass rounded-xl p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="f-nama" className="mb-1.5 block text-sm font-medium text-slate-200">
                Nama lengkap
              </label>
              <input
                id="f-nama"
                name="nama"
                type="text"
                autoComplete="name"
                placeholder="cth. Putri Ayu…"
                value={form.nama}
                onChange={(ev) => isi('nama', ev.target.value)}
                className={inputKelas}
                aria-invalid={Boolean(error.nama)}
                aria-describedby={error.nama ? 'f-nama-err' : undefined}
              />
              {error.nama ? (
                <p id="f-nama-err" aria-live="polite" className="mt-1.5 text-sm text-red-300">
                  {error.nama}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="f-wa" className="mb-1.5 block text-sm font-medium text-slate-200">
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
                <p id="f-wa-err" aria-live="polite" className="mt-1.5 text-sm text-red-300">
                  {error.wa}
                </p>
              ) : null}
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="f-email" className="mb-1.5 block text-sm font-medium text-slate-200">
              Email <span className="font-normal text-slate-500">(opsional)</span>
            </label>
            <input
              id="f-email"
              name="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="cth. putri@email.com…"
              value={form.email}
              onChange={(ev) => isi('email', ev.target.value)}
              className={inputKelas}
              aria-invalid={Boolean(error.email)}
              aria-describedby={error.email ? 'f-email-err' : undefined}
            />
            {error.email ? (
              <p id="f-email-err" aria-live="polite" className="mt-1.5 text-sm text-red-300">
                {error.email}
              </p>
            ) : null}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="f-kelas" className="mb-1.5 block text-sm font-medium text-slate-200">
                Kelas yang diminati
              </label>
              <select
                id="f-kelas"
                name="kelas"
                value={kelasAktif}
                onChange={(ev) => isi('kelas', ev.target.value)}
                className={`${inputKelas} ${kelasDipilih !== '' ? 'border-[#cca43b]/60' : ''}`}
                aria-invalid={Boolean(error.kelas)}
                aria-describedby={error.kelas ? 'f-kelas-err' : undefined}
              >
                <option value="" className="bg-[#0b0f19]">
                  Pilih kelas
                </option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#0b0f19]">
                    {c.judul} — {c.harga}
                  </option>
                ))}
              </select>
              {error.kelas ? (
                <p id="f-kelas-err" aria-live="polite" className="mt-1.5 text-sm text-red-300">
                  {error.kelas}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="f-batch" className="mb-1.5 block text-sm font-medium text-slate-200">
                Batch
              </label>
              <select
                id="f-batch"
                name="batch"
                value={form.batch}
                onChange={(ev) => isi('batch', ev.target.value)}
                className={inputKelas}
              >
                <option value="" className="bg-[#0b0f19]">
                  Minta rekomendasi admin
                </option>
                {batchTersedia.map((b) => (
                  <option key={b.id} value={b.nama} className="bg-[#0b0f19]">
                    {b.nama} — {b.tanggal}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <fieldset className="mt-5">
            <legend className="mb-1.5 text-sm font-medium text-slate-200">Ikut sebagai</legend>
            <div className="flex gap-2">
              {['Individu', 'Corporate / tim'].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => isi('kebutuhan', k)}
                  aria-pressed={form.kebutuhan === k}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    form.kebutuhan === k
                      ? 'bg-[#cca43b] text-[#0b0f19]'
                      : 'border border-white/15 text-slate-300 hover:border-white/35'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-5">
            <label htmlFor="f-pesan" className="mb-1.5 block text-sm font-medium text-slate-200">
              Catatan <span className="font-normal text-slate-500">(opsional)</span>
            </label>
            <textarea
              id="f-pesan"
              name="pesan"
              rows={3}
              placeholder="cth. background saya akuntansi, cocok mulai dari mana?…"
              value={form.pesan}
              onChange={(ev) => isi('pesan', ev.target.value)}
              className={`${inputKelas} resize-none`}
            />
          </div>
          {terkirim ? (
            <div className="mt-6 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-4">
              <p className="flex items-center gap-2 font-semibold text-emerald-200">
                <Send size={17} aria-hidden="true" /> Pesan Anda sudah tersusun rapi.
              </p>
              <p className="mt-1 text-sm text-emerald-100/80">
                Tekan tombol di bawah untuk mengirimnya via WhatsApp ke admin academy.
              </p>
              <a
                href={pesanWA}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-[#0b0f19] transition-colors hover:bg-emerald-400"
              >
                <MessageCircle size={18} aria-hidden="true" /> Kirim via WhatsApp
              </a>
            </div>
          ) : (
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-[#cca43b] py-3 font-semibold text-[#0b0f19] transition-colors hover:bg-[#d9b455]"
            >
              Susun pesan pendaftaran
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
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b4596] font-display text-sm font-bold text-[#cca43b]">
              DS
            </span>
            <span className="font-display font-semibold text-white">Integra Academy</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Divisi training Daya Solusi Integra. Fokus satu hal: mencetak data engineer yang siap production.
          </p>
        </div>
        <nav aria-label="Tautan footer">
          <p className="text-sm font-semibold text-white">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#daftar" className="hover:text-white">
                Pendaftaran
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-white">Hubungi kami</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>WhatsApp: 0812-3456-7890 (admin academy)</li>
            <li>Email: academy@dsintegra.co.id</li>
            <li>Jakarta, Indonesia — online ke seluruh Indonesia</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 Daya Solusi Integra. Seluruh harga sudah termasuk PPN dan materi.
      </p>
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
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <Header />
      <a href="#konten" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#cca43b] focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0b0f19]">
        Lewati ke konten utama
      </a>
      <main id="konten">
        <Hero />
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
        href={waLink('Halo Integra Academy, saya mau tanya-tanya dulu soal kelas Data Engineering.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp dengan admin academy"
        className="fixed bottom-5 right-5 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 p-3.5 text-[#0b0f19] shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
