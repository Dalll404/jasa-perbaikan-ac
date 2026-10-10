import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  address: "",
  serviceType: "Cuci AC (mulai Rp 75.000)",
  acCount: "1 unit",
  date: "",
  time: "Pagi (08.00—12.00)",
  notes: "",
};

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#eef0e8] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Satu langkah lagi menuju ruangan adem
            </p>
            <h1 className="text-3xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl">
              Atur jadwal teknisi
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Isi detail di bawah. Tim kami akan menghubungi Anda untuk
              memastikan waktu kunjungan dan kebutuhan servis.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-200 text-emerald-800">
                <Check size={26} />
              </div>
              <h2 className="text-2xl font-bold tracking-[-0.05em] text-slate-900">
                Permintaan jadwal diterima
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
                Terima kasih, <strong>{formData.name}</strong>. Kami mencatat
                permintaan <strong>{formData.serviceType}</strong> pada{" "}
                <strong>{formData.date || "secepatnya"}</strong>. Tim kami akan
                menghubungi Anda untuk konfirmasi.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo AirCool Pro, saya ${formData.name} sudah mengisi permintaan servis ${formData.serviceType}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konfirmasi via WhatsApp <ArrowRight size={16} />
                </a>
                <button
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialForm);
                  }}
                >
                  Buat permintaan baru
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Nama lengkap *
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    autoComplete="name"
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  />
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Nomor WhatsApp *
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx xxxx xxxx"
                    autoComplete="tel"
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                Alamat pengerjaan *
                <textarea
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Jalan, nomor rumah, kelurahan, dan patokan lokasi"
                  autoComplete="street-address"
                  className="resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Jenis layanan *
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  >
                    <option>Cuci AC (mulai Rp 75.000)</option>
                    <option>Isi / tambah freon (mulai Rp 150.000)</option>
                    <option>
                      Perbaikan bocor / kurang dingin (mulai Rp 100.000)
                    </option>
                    <option>Bongkar pasang AC (mulai Rp 250.000)</option>
                    <option>
                      Perbaikan modul / kelistrikan (mulai Rp 120.000)
                    </option>
                    <option>Overhaul / cuci besar (mulai Rp 350.000)</option>
                  </select>
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Jumlah unit *
                  <select
                    name="acCount"
                    value={formData.acCount}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  >
                    <option>1 unit</option>
                    <option>2 unit</option>
                    <option>3 unit</option>
                    <option>4 unit</option>
                    <option>5+ unit</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Tanggal kunjungan *
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  />
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Waktu kunjungan *
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  >
                    <option>Pagi (08.00—12.00)</option>
                    <option>Siang (13.00—16.00)</option>
                    <option>Sore (16.00—20.00)</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                Catatan untuk teknisi
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Contoh: AC netes air, merek AC, atau keluhan lainnya"
                  className="resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Kirim permintaan jadwal <ArrowRight size={16} />
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
