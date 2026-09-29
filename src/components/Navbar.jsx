import React from "react";

export function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              AirCool Pro
            </span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
              Jasa Perbaikan & Perawatan AC Terpercaya
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <button
            onClick={() => setActivePage("home")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activePage === "home"
                ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400"
                : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => setActivePage("booking")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activePage === "booking"
                ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400"
                : "text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            }`}
          >
            Pesan Layanan / Booking
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20AirCool%20Pro,%20saya%20mau%20konsultasi%20masalah%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>WhatsApp CS</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden space-x-2">
            <button
              onClick={() =>
                setActivePage(activePage === "home" ? "booking" : "home")
              }
              className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-sm font-medium"
            >
              {activePage === "home" ? "Booking" : "Beranda"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
