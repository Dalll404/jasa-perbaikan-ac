import React, { useState } from "react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "Cuci / Cleaning AC (Rp 75.000)",
    acCount: "1 Unit",
    date: "",
    time: "Pagi (08.00 - 12.00)",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center space-y-3 mb-10">
            <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Pemesanan Online Cepat
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Formulir Booking Jasa AC
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto">
              Silakan isi data diri dan detail kebutuhan servis Anda. Tim admin
              kami akan segera menghubungi Anda untuk konfirmasi jadwal.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-600/30">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                  Booking Berhasil Dikirim!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Terima kasih{" "}
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {formData.name}
                  </span>
                  . Jadwal untuk{" "}
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {formData.serviceType}
                  </span>{" "}
                  pada tanggal{" "}
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {formData.date || "secepatnya"}
                  </span>{" "}
                  telah kami terima.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20AirCool%20Pro,%20saya%20atas%20nama%20${encodeURIComponent(formData.name)}%20telah%20mengisi%20form%20booking%20untuk%20${encodeURIComponent(formData.serviceType)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-center"
                >
                  Konfirmasi via WhatsApp Sekarang
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-semibold px-6 py-3 rounded-xl transition-all text-center"
                >
                  Buat Pesanan Baru
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Alamat Lengkap Pengerjaan *
                </label>
                <textarea
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, patokan lokasi..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Pilih Jenis Layanan *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option>Cuci / Cleaning AC (Rp 75.000)</option>
                    <option>Isi / Tambah Freon (Mulai Rp 150.000)</option>
                    <option>
                      Perbaikan AC Bocor / Kurang Dingin (Mulai Rp 100.000)
                    </option>
                    <option>Bongkar Pasang AC (Mulai Rp 250.000)</option>
                    <option>
                      Perbaikan Modul / Kelistrikan (Mulai Rp 120.000)
                    </option>
                    <option>Overhaul / Cuci Besar (Mulai Rp 350.000)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Jumlah Unit AC *
                  </label>
                  <select
                    name="acCount"
                    value={formData.acCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option>1 Unit</option>
                    <option>2 Unit</option>
                    <option>3 Unit</option>
                    <option>4 Unit</option>
                    <option>5+ Unit (Gedung/Kantor)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Tanggal Kedatangan *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Waktu Kedatangan *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option>Pagi (08.00 - 12.00)</option>
                    <option>Siang (13.00 - 16.00)</option>
                    <option>Sore / Malam (16.00 - 20.00)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Merk AC, keluhan khusus seperti AC berisik atau netes air..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-95 text-white font-bold py-4 rounded-xl shadow-xl shadow-cyan-600/20 transition-all text-center"
              >
                Kirim Booking Servis AC Sekarang
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
