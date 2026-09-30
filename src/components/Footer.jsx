import { Fan, MapPin, MessageCircle, Clock3 } from "lucide-react";

export function Footer({ setActivePage }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-brand">
              <span className="footer-brand-mark">
                <Fan size={17} />
              </span>
              <strong>AirCool Pro</strong>
            </div>
            <p>
              Servis AC panggilan untuk rumah dan tempat usaha. Kerja rapi,
              penjelasan jujur, dan biaya yang dibicarakan di depan.
            </p>
          </div>
          <div className="footer-column">
            <h3>Jelajahi</h3>
            <button onClick={() => setActivePage("home")}>Beranda</button>
            <a href="#layanan" onClick={() => setActivePage("home")}>
              Layanan & estimasi biaya
            </a>
            <button onClick={() => setActivePage("booking")}>
              Atur jadwal kunjungan
            </button>
          </div>
          <div className="footer-column">
            <h3>Kontak & area</h3>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} /> +62 812-3456-7890
            </a>
            <p>
              <MapPin size={14} /> Jakarta, Depok, Tangerang, Bekasi
            </p>
            <p>
              <Clock3 size={14} /> Setiap hari, 08.00—21.00
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AirCool Pro · Servis AC panggilan
          </span>
          <span className="footer-tags">
            <span>Biaya transparan</span>
            <span>Garansi 30 hari</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
