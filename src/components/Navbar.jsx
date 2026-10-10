import { Fan, MessageCircle } from "lucide-react";

export function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f8f8f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="flex items-center gap-3 rounded-full p-1 text-left transition hover:opacity-90"
          onClick={() => setActivePage("home")}
          aria-label="AirCool Pro, kembali ke beranda"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9ed77] text-slate-900 shadow-sm">
            <Fan size={19} strokeWidth={1.8} />
          </span>
          <span>
            <strong className="block text-base font-extrabold tracking-[-0.05em] text-slate-900">
              AirCool Pro
            </strong>
            <small className="block text-[10px] uppercase tracking-[0.12em] text-slate-500">
              servis AC, tanpa ribet
            </small>
          </span>
        </button>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navigasi utama"
        >
          <button
            className={`text-sm font-medium transition ${
              activePage === "home"
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setActivePage("home")}
          >
            Beranda
          </button>
          <button
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
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
            className={`text-sm font-medium transition ${
              activePage === "booking"
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setActivePage("booking")}
          >
            Cara pesan
          </button>
        </nav>

        <a
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[11px] font-bold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:px-4"
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20konsultasi%20servis%20AC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} className="text-[#5d7d2f]" />
          <span>Hubungi kami</span>
        </a>
      </div>
    </header>
  );
}
