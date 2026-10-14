import { Fan, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "../data/services";

export function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (page, service = "") => {
    setMenuOpen(false);
    setActivePage(page, service);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f8f8f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="flex items-center gap-3 rounded-full p-1 text-left transition hover:opacity-90"
          onClick={() => navigate("home")}
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
          className={`${menuOpen ? "absolute inset-x-0 top-full flex flex-col items-stretch gap-0 border-b border-slate-200 bg-[#f8f8f3] px-4 py-2 shadow-lg md:static md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none" : "hidden items-center gap-7 md:flex"}`}
          aria-label="Navigasi utama"
        >
          <button
            className={`text-sm font-medium transition ${
              activePage === "home"
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => navigate("home")}
          >
            Beranda
          </button>
          <button
            className="py-3 text-left text-sm font-medium text-slate-600 transition hover:text-slate-900 md:py-0"
            onClick={() => {
              navigate("home", "#layanan");
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
            onClick={() => navigate("booking")}
          >
            Cara pesan
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[11px] font-bold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:px-4"
            href={getWhatsAppUrl("Halo, saya mau konsultasi servis AC")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} className="text-[#5d7d2f]" />
            <span className="hidden sm:inline">Hubungi kami</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 bg-white text-slate-700 md:hidden"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
