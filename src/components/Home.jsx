import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Fan,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../assets/images-home.webp";
import { getWhatsAppUrl, services as serviceCatalog } from "../data/services";

const services = [
  { ...serviceCatalog[0], number: "01", icon: Fan },
  {
    ...serviceCatalog[2],
    number: "02",
    title: "AC tidak dingin / bocor",
    price: "100 ribu",
    icon: Wrench,
  },
  {
    ...serviceCatalog[1],
    number: "03",
    title: "Isi / tambah freon",
    price: "150 ribu",
    icon: Sparkles,
  },
];

const proof = [
  {
    title: "Biaya jelas di awal",
    text: "Teknisi jelaskan temuan dan ongkos sebelum mulai bekerja.",
    icon: BadgeCheck,
  },
  {
    title: "Garansi pengerjaan",
    text: "Ada perlindungan 30 hari untuk pekerjaan perbaikan.",
    icon: ShieldCheck,
  },
  {
    title: "Datang sesuai janji",
    text: "Pilih waktu kunjungan yang cocok dengan aktivitas Anda.",
    icon: Clock3,
  },
];

const quickBenefits = [
  {
    title: "Unit original",
    text: "Komponen yang dipasang sesuai kebutuhan dan disesuaikan kondisi AC Anda.",
  },
  {
    title: "Perbaikan cepat",
    text: "Proses diagnosis singkat agar ruangan tidak lama panas dan tidak lelah menunggu.",
  },
  {
    title: "Layanan rumah & kantor",
    text: "Tersedia jadwal fleksibel untuk kebutuhan tinggal, usaha, atau ruang kerja.",
  },
];

const testimonials = [
  {
    name: "Nadia S.",
    role: "Pemilik rumah",
    text: "Teknisi datang tepat waktu, jelaskan kenapa AC jadi leak, dan hasilnya dingin lagi tanpa drama.",
  },
  {
    name: "Rizky P.",
    role: "Kantor kecil",
    text: "Kami butuh servis cepat sebelum jam kerja. Prosesnya rapi, komunikatif, dan biaya sudah mereka jelaskan dulu.",
  },
  {
    name: "Intan M.",
    role: "Kos-kosan",
    text: "Pernah coba beberapa jasa sebelumnya, tapi yang ini paling jelas dan aman. AC jadi lebih stabil setelah cuci rutin.",
  },
];

const faqs = [
  {
    question: "Apakah bisa konsultasi dulu sebelum servis?",
    answer:
      "Bisa. Anda cukup kirim gejala yang terjadi melalui WhatsApp, lalu tim kami akan bantu menentukan kemungkinan penyebabnya sebelum jadwal tiba.",
  },
  {
    question: "Apakah harga sudah termasuk biaya datang?",
    answer:
      "Untuk sebagian layanan, estimasi biaya sudah mencakup pekerjaan utama. Jika ada kebutuhan tambahan setelah pengecekan, teknisi akan menjelaskan dulu sebelum lanjut.",
  },
  {
    question: "Berapa lama proses servis biasanya?",
    answer:
      "Biasanya 1–3 jam tergantung jenis masalah dan kondisi unit. Untuk pengecekan awal, teknisi akan memberi estimasi jadi lebih jelas.",
  },
  {
    question: "Apakah ada garansi setelah servis?",
    answer:
      "Ya. Kami menyediakan garansi pengerjaan untuk pekerjaan yang sudah kami lakukan, sesuai jenis layanan dan ketentuan yang dijelaskan di awal.",
  },
];

export function Home({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#f8f8f3] text-slate-800">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-[#91b449] shadow-[0_0_0_5px_rgba(145,180,73,0.18)]" />
              Servis AC panggilan · Jakarta & sekitarnya
            </p>

            <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.08em] text-slate-900 sm:text-6xl lg:text-[6.3rem]">
              Rumah adem.
              <span className="block text-[#839b3a]">Urusan AC</span>
              beres.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Cuci rutin atau AC tiba-tiba ngadat? Teknisi kami datang, cek
              sumber masalahnya, lalu jelaskan pilihan perbaikannya dengan biaya
              yang terang.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                onClick={() => setActivePage("booking")}
              >
                Jadwalkan teknisi <ArrowRight size={17} />
              </motion.button>

              <a
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 transition hover:text-slate-900"
                href={getWhatsAppUrl("Halo, saya mau konsultasi servis AC")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={16} className="text-[#5d7d2f]" />
                Tanya dulu via WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["R", "H", "S"].map((item, index) => (
                  <span
                    key={item}
                    className={`grid h-8 w-8 place-items-center rounded-full border-2 border-[#f8f8f3] text-[9px] font-bold ${
                      index === 0
                        ? "bg-[#b9c4a8] text-slate-800"
                        : index === 1
                          ? "bg-[#d7b49c] text-slate-800"
                          : "bg-[#778069] text-white"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-[10px] leading-5 text-slate-500">
                <strong className="font-bold text-slate-700">
                  Dipercaya warga sekitar
                </strong>
                <br />
                untuk servis rumah dan kantor
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[500px] lg:justify-self-end"
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-200 shadow-[0_20px_50px_rgba(12,18,16,0.12)]">
              <img
                className="h-[min(112vw,440px)] w-full object-cover object-center saturate-75 sm:h-[500px]"
                src={heroImage}
                alt="Teknisi sedang memeriksa unit pendingin ruangan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 left-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-sm sm:bottom-0 sm:left-6 sm:gap-3 sm:px-4 sm:py-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d9ed77] text-slate-900">
                <Fan size={18} />
              </span>
              <div>
                <strong className="block text-[11px] font-bold text-slate-900">
                  Teknisi berpengalaman
                </strong>
                <small className="block text-[9px] text-slate-500">
                  Alat kerja dibawa lengkap
                </small>
              </div>
              <ArrowDownRight className="ml-2 text-[#7f9b46]" size={20} />
            </div>

            <div className="absolute right-1 top-3 flex h-24 w-24 rotate-[8deg] flex-col items-center justify-center rounded-full bg-[#d9ed77] text-slate-900 shadow-lg sm:right-0 sm:top-6 sm:h-28 sm:w-28">
              <span className="text-[8px] font-bold uppercase tracking-[0.18em]">
                Datang
              </span>
              <strong className="mt-1 text-xl font-black tracking-[-0.06em]">
                Hari ini
              </strong>
              <small className="text-[8px] text-slate-600">
                sesuai ketersediaan
              </small>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-4 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Perawatan berkala itu lebih ringan di kantong.</span>
          <a
            href="#layanan"
            className="inline-flex items-center gap-1 font-bold text-slate-700"
          >
            Lihat layanan <ArrowDownRight size={15} />
          </a>
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-white/60"
        aria-label="Keunggulan layanan"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "08.00—21.00", label: "Jam layanan setiap hari" },
            { value: "30 hari", label: "Garansi pengerjaan" },
            { value: "Jabodetabek", label: "Area kunjungan teknisi" },
            { value: "★★★★★", label: "Ulasan pelanggan" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 border-slate-200 py-2 sm:border-r sm:pr-4 last:border-r-0"
            >
              <strong className="text-sm font-bold tracking-[-0.04em] text-slate-900">
                {item.value}
              </strong>
              <span className="text-[10px] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="layanan"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Bantuan yang dibutuhkan
            </p>
            <h2 className="text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
              AC bermasalah?
              <span className="block">Mulai dari sini.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-600">
            Kami periksa kondisi unit lebih dulu. Kalau perlu penggantian
            komponen, Anda tahu alasannya sebelum memutuskan.
          </p>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white">
          {services.map(
            ({ number, title, detail, price, label, icon: Icon }) => (
              <article
                key={number}
                className="grid grid-cols-[30px_44px_minmax(0,1fr)_40px] items-center gap-x-3 gap-y-2 border-b border-slate-200 px-3 py-4 last:border-b-0 sm:px-5 sm:py-5 lg:grid-cols-[42px_52px_minmax(0,1fr)_130px_44px] lg:gap-6 lg:px-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {number}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-[#f7f8f3] text-[#5f7b32]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.05em] text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-6 text-slate-500">
                    {detail}
                  </p>
                </div>
                <span className="col-start-3 row-start-2 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500 lg:col-auto lg:row-auto">
                  Mulai{" "}
                  <strong className="text-sm font-bold tracking-[-0.04em] text-slate-800">
                    {price}
                  </strong>
                </span>
                <button
                  className="col-start-4 row-start-2 grid h-10 w-10 place-self-end place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-900 hover:text-white lg:col-auto lg:row-auto"
                  aria-label={`Pesan layanan ${title}`}
                  onClick={() => setActivePage("booking", label)}
                >
                  <ArrowRight size={17} />
                </button>
              </article>
            ),
          )}
        </div>

        <p className="mt-5 text-[10px] text-slate-500">
          Punya keluhan lain?{" "}
          <a
            className="inline-flex items-center gap-1 font-bold text-slate-700"
            href={getWhatsAppUrl("Halo, saya mau tanya layanan servis AC")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ceritakan ke teknisi kami <ArrowRight size={14} />
          </a>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Kenapa pilih AirCool Pro
          </p>
          <h2 className="text-3xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
            Perbaikan AC yang terasa ringan untuk Anda.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {quickBenefits.map(({ title, text }) => (
            <article
              key={title}
              className="rounded-[22px] border border-slate-200 bg-[#f7f8f2] p-5 shadow-sm"
            >
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-[#dceab3] text-slate-900">
                <Check size={16} />
              </div>
              <h3 className="text-xl font-bold tracking-[-0.05em] text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <motion.section
        className="bg-[#edf0e7] py-20"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Cara kerja kami
            </p>
            <h2 className="text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
              Teknisi datang.
              <span className="block">Masalahnya dijelaskan.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Tidak ada kejutan di akhir pengerjaan. Anda tetap pegang kendali
              dari awal sampai AC kembali nyaman dipakai.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/80">
            {proof.map(({ title, text, icon: Icon }, index) => (
              <article
                key={title}
                className="grid items-center gap-4 border-b border-slate-200 px-4 py-4 last:border-b-0 sm:px-5 lg:grid-cols-[30px_42px_minmax(0,1fr)_20px]"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  0{index + 1}
                </span>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f5ee] text-[#5e7d2d]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-[-0.04em] text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-6 text-slate-500">
                    {text}
                  </p>
                </div>
                <Check className="text-[#7f9b46]" size={18} />
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Ulasan pelanggan
            </p>
            <h2 className="text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
              Yang mereka rasakan setelah servis.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#edf3da] px-4 py-2 text-[11px] font-bold text-[#41552c]">
            <Star size={13} fill="currentColor" />
            Cerita pelanggan
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(({ name, role, text }) => (
            <article
              key={name}
              className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 text-[12px] tracking-[0.12em] text-[#96a85a]">
                ★★★★★
              </div>
              <p className="text-sm leading-7 text-slate-600">“{text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dfe9c8] text-xs font-bold text-slate-800">
                  {name.charAt(0)}
                </span>
                <div>
                  <strong className="block text-[11px] font-bold text-slate-900">
                    {name}
                  </strong>
                  <small className="block text-[10px] text-slate-500">
                    {role}
                  </small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Pertanyaan umum
          </p>
          <h2 className="text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
            Yang sering ditanyakan sebelum booking.
          </h2>
        </div>

        <div className="grid gap-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={question}
                className={`overflow-hidden rounded-2xl border ${
                  isOpen
                    ? "border-slate-300 bg-white"
                    : "border-slate-200 bg-[#f9faf6]"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold tracking-[-0.04em] text-slate-800">
                    {question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-7 text-slate-600">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto my-10 max-w-7xl overflow-hidden rounded-[30px] bg-[#28332b] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c3d69d]">
              Jangan tunggu sampai mati total
            </p>
            <h2 className="text-3xl font-black tracking-[-0.07em] sm:text-5xl">
              AC mulai rewel?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Ceritakan gejalanya, kami bantu tentukan langkah berikutnya.
            </p>
          </div>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d9ed77] px-5 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-[#e5f5a4]"
            onClick={() => setActivePage("booking")}
          >
            Atur kunjungan <ArrowRight size={17} />
          </button>
        </div>

        <div className="pointer-events-none absolute -right-10 top-[-30px] text-[180px] font-light text-white/10">
          ✳
        </div>
      </section>
    </div>
  );
}
