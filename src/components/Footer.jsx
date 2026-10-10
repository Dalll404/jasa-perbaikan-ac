import { Fan, MapPin, MessageCircle, Clock3 } from "lucide-react";

export function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#1f2923] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d9ed77] text-slate-900">
                <Fan size={16} />
              </span>
              <strong className="text-base font-extrabold tracking-[-0.05em] text-white">
                AirCool Pro
              </strong>
            </div>
            <p className="max-w-sm text-xs leading-7 text-slate-400">
              Servis AC panggilan untuk rumah dan tempat usaha. Kerja rapi,
              penjelasan jujur, dan biaya yang dibicarakan di depan.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Jelajahi
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <button
                className="block transition hover:text-[#d9ed77]"
                onClick={() => setActivePage("home")}
              >
                Beranda
              </button>
              <a
                className="block transition hover:text-[#d9ed77]"
                href="#layanan"
                onClick={() => setActivePage("home")}
              >
                Layanan & estimasi biaya
              </a>
              <button
                className="block transition hover:text-[#d9ed77]"
                onClick={() => setActivePage("booking")}
              >
                Atur jadwal kunjungan
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Kontak & area
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                className="flex items-center gap-2 transition hover:text-[#d9ed77]"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={14} className="text-[#d9ed77]" />
                +62 812-3456-7890
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#d9ed77]" />
                Jakarta, Depok, Tangerang, Bekasi
              </p>
              <p className="flex items-center gap-2">
                <Clock3 size={14} className="text-[#d9ed77]" />
                Setiap hari, 08.00—21.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} AirCool Pro · Servis AC panggilan
          </span>
          <div className="flex flex-wrap gap-2 text-[9px]">
            <span className="rounded-full border border-white/10 px-2 py-1 text-slate-300">
              Biaya transparan
            </span>
            <span className="rounded-full border border-white/10 px-2 py-1 text-slate-300">
              Garansi 30 hari
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
