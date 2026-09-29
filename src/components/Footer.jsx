import React from "react";

export function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white">
                <svg
                  className="w-6 h-6"
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
              <span className="text-xl font-bold text-white">AirCool Pro</span>
            </div>
            <p className="text-sm text-slate-400">
              Solusi profesional untuk segala permasalahan AC rumah, kantor, dan
              gedung Anda. Dikerjakan oleh teknisi bersertifikat dan bergaransi
              resmi.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Navigasi Utama
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setActivePage("home")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Beranda & Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("booking")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Formulir Booking Servis
                </button>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setActivePage("home")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Daftar Harga & Jasa
                </a>
              </li>
              <li>
                <a
                  href="#testi"
                  onClick={() => setActivePage("home")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Testimoni Pelanggan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Cuci & Cleaning AC Berkala</li>
              <li>Isi & Tambah Freon (R32, R410a, R22)</li>
              <li>Perbaikan AC Bocor & Kurang Dingin</li>
              <li>Bongkar Pasang AC Baru/Bekas</li>
              <li>Overhaul & Perbaikan Kompresor</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Kontak Cepat
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Jl. Raya Servis AC No. 45, Kota Jakarta / Sekitarnya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-cyan-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 812-3456-7890 (Call / WhatsApp)</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-cyan-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Senin - Minggu: 08.00 - 21.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} AirCool Pro Jasa Perbaikan AC. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">
              Garansi 30 Hari
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Teknisi Berpengalaman
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Respon Cepat
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
