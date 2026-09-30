import { Fan, MessageCircle } from "lucide-react";

export function Navbar({ activePage, setActivePage }) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <button
          className="brand"
          onClick={() => setActivePage("home")}
          aria-label="AirCool Pro, kembali ke beranda"
        >
          <span className="brand-symbol">
            <Fan size={19} strokeWidth={1.8} />
          </span>
          <span className="brand-copy">
            <strong>AirCool Pro</strong>
            <small>servis AC, tanpa ribet</small>
          </span>
        </button>
        <nav className="nav-links" aria-label="Navigasi utama">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            Beranda
          </button>
          <button
            onClick={() => {
              setActivePage("home");
              document
                .getElementById("layanan")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Layanan
          </button>
          <button
            className={activePage === "booking" ? "active" : ""}
            onClick={() => setActivePage("booking")}
          >
            Cara pesan
          </button>
        </nav>
        <a
          className="nav-contact"
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20konsultasi%20servis%20AC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} /> <span>Hubungi kami</span>
        </a>
      </div>
    </header>
  );
}
