import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Fan,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import heroImage from "../assets/images-home.webp";

const services = [
  {
    number: "01",
    title: "Cuci AC",
    detail:
      "Bersihkan filter, evaporator, dan saluran air agar hembusan kembali lega.",
    price: "75 ribu",
    icon: Fan,
  },
  {
    number: "02",
    title: "AC tidak dingin",
    detail: "Pengecekan menyeluruh sebelum perbaikan—bukan asal tambah freon.",
    price: "Cek dulu",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Bocor & berisik",
    detail:
      "Cari sumber masalah, rapikan instalasi, dan pastikan unit bekerja normal.",
    price: "100 ribu",
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

export function Home({ setActivePage }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> SERVIS AC PANGGILAN · JAKARTA &
              SEKITARNYA
            </p>
            <h1>
              Rumah adem.
              <br />
              <span>Urusan AC</span>
              <br />
              beres.
            </h1>
            <p className="hero-description">
              Cuci rutin atau AC tiba-tiba ngadat? Teknisi kami datang, cek
              sumber masalahnya, lalu jelaskan pilihan perbaikannya dengan biaya
              yang terang.
            </p>
            <div className="hero-actions">
              <button
                className="button button-dark"
                onClick={() => setActivePage("booking")}
              >
                Jadwalkan teknisi <ArrowRight size={17} />
              </button>
              <a
                className="text-link"
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20konsultasi%20servis%20AC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={16} /> Tanya dulu via WhatsApp
              </a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack">
                <span>R</span>
                <span>H</span>
                <span>S</span>
              </div>
              <p>
                <strong>Dipercaya warga sekitar</strong>
                <br />
                untuk servis rumah dan kantor
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img
                src={heroImage}
                alt="Teknisi sedang memeriksa unit pendingin ruangan"
              />
              <div className="image-shade" />
            </div>
            <div className="photo-caption">
              <span className="caption-mark">
                <Fan size={20} />
              </span>
              <span>
                <strong>Teknisi berpengalaman</strong>
                <small>Alat kerja dibawa lengkap</small>
              </span>
              <ArrowDownRight className="caption-arrow" size={20} />
            </div>
            <div className="service-stamp">
              <span>DATANG</span>
              <strong>Hari ini</strong>
              <small>sesuai ketersediaan</small>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Perawatan berkala itu lebih ringan di kantong.</span>
          <a href="#layanan">
            Lihat layanan <ArrowDownRight size={15} />
          </a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Keunggulan layanan">
        <div>
          <strong>08.00—21.00</strong>
          <span>Jam layanan setiap hari</span>
        </div>
        <div>
          <strong>30 hari</strong>
          <span>Garansi pengerjaan</span>
        </div>
        <div>
          <strong>Jabodetabek</strong>
          <span>Area kunjungan teknisi</span>
        </div>
        <div className="rating">
          <span className="rating-stars">★★★★★</span>
          <span>Ulasan pelanggan</span>
        </div>
      </section>

      <section className="services-section" id="layanan">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BANTUAN YANG DIBUTUHKAN</p>
            <h2>
              AC bermasalah?
              <br />
              Mulai dari sini.
            </h2>
          </div>
          <p className="section-intro">
            Kami periksa kondisi unit lebih dulu. Kalau perlu penggantian
            komponen, Anda tahu alasannya sebelum memutuskan.
          </p>
        </div>
        <div className="service-list">
          {services.map(({ number, title, detail, price, icon: Icon }) => (
            <article className="service-row" key={number}>
              <span className="service-number">{number}</span>
              <span className="service-icon">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <div className="service-copy">
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
              <span className="service-price">
                Mulai <strong>{price}</strong>
              </span>
              <button
                className="round-link"
                aria-label={`Pesan layanan ${title}`}
                onClick={() => setActivePage("booking")}
              >
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
        <p className="service-footnote">
          Punya keluhan lain?{" "}
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20layanan%20servis%20AC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ceritakan ke teknisi kami <ArrowRight size={14} />
          </a>
        </p>
      </section>

      <section className="approach-section">
        <div className="approach-heading">
          <p className="eyebrow">CARA KERJA KAMI</p>
          <h2>
            Teknisi datang.
            <br />
            Masalahnya dijelaskan.
          </h2>
          <p>
            Tidak ada kejutan di akhir pengerjaan. Anda tetap pegang kendali
            dari awal sampai AC kembali nyaman dipakai.
          </p>
        </div>
        <div className="approach-list">
          {proof.map(({ title, text, icon: Icon }, index) => (
            <article className="approach-item" key={title}>
              <span className="approach-index">0{index + 1}</span>
              <div className="approach-icon">
                <Icon size={19} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Check className="approach-check" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div>
          <p className="eyebrow">JANGAN TUNGGU SAMPAI MATI TOTAL</p>
          <h2>AC mulai rewel?</h2>
          <p>Ceritakan gejalanya, kami bantu tentukan langkah berikutnya.</p>
        </div>
        <button
          className="button button-light"
          onClick={() => setActivePage("booking")}
        >
          Atur kunjungan <ArrowRight size={17} />
        </button>
        <div className="closing-spark" aria-hidden="true">
          ✳
        </div>
      </section>
    </div>
  );
}
