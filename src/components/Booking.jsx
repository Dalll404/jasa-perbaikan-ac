import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl, services } from "../data/services";

const createInitialForm = (selectedService = "") => ({
  name: "",
  phone: "",
  address: "",
  serviceType: services.some((service) => service.label === selectedService)
    ? selectedService
    : services[0].label,
  acCount: "1 unit",
  date: "",
  time: "Pagi (08.00—12.00)",
  notes: "",
});

export function Booking({ selectedService, setActivePage }) {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(() =>
    createInitialForm(selectedService),
  );
  const [phoneError, setPhoneError] = useState("");
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const whatsappMessage = [
    "Halo AirCool Pro, saya ingin mengonfirmasi permintaan servis AC:",
    `Nama: ${formData.name}`,
    `WhatsApp: ${formData.phone}`,
    `Layanan: ${formData.serviceType}`,
    `Jumlah unit: ${formData.acCount}`,
    `Tanggal: ${formData.date}`,
    `Waktu: ${formData.time}`,
    `Alamat: ${formData.address}`,
    `Catatan: ${formData.notes || "-"}`,
  ].join("\n");

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) {
      setPhoneError("Masukkan nomor telepon yang valid (9–15 digit).");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  };

  return (
    <section
      className="bg-[#eef0e8] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <button
            type="button"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-slate-900"
            onClick={() => setActivePage("home")}
          >
            <ArrowLeft size={15} /> Kembali ke beranda
          </button>
          <div className="mb-8 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Satu langkah lagi menuju ruangan adem
            </p>
            <h1
              id="booking-heading"
              className="text-3xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl"
            >
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
                permintaan <strong>{formData.serviceType}</strong> untuk{" "}
                <strong>{formData.date}</strong> pada{" "}
                <strong>{formData.time}</strong>. Ini belum menjadi jadwal
                terkonfirmasi; tim kami akan menghubungi Anda.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konfirmasi via WhatsApp <ArrowRight size={16} />
                </a>
                <button
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(createInitialForm(selectedService));
                    setPhoneError("");
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
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
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
                    inputMode="tel"
                    autoComplete="tel"
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  />
                  {phoneError && (
                    <span
                      role="alert"
                      className="text-xs font-medium normal-case tracking-normal text-red-600"
                    >
                      {phoneError}
                    </span>
                  )}
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
                  className="min-h-24 resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Jenis layanan *
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  Jumlah unit *
                  <select
                    name="acCount"
                    value={formData.acCount}
                    onChange={handleChange}
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
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
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
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
                  className="min-h-20 resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8ba24b] focus:outline-none focus:ring-4 focus:ring-[#8ba24b]/15"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Kirim permintaan jadwal <ArrowRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
