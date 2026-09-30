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
    <main className="booking-page">
      <div className="booking-wrap">
        <section className="booking-card">
          <div className="booking-heading">
            <p className="eyebrow">SATU LANGKAH LAGI MENUJU RUANGAN ADEM</p>
            <h1>Atur jadwal teknisi</h1>
            <p>
              Isi detail di bawah. Tim kami akan menghubungi Anda untuk
              memastikan waktu kunjungan dan kebutuhan servis.
            </p>
          </div>

          {submitted ? (
            <div className="booking-success">
              <div className="success-icon">
                <Check size={25} />
              </div>
              <h2>Permintaan jadwal diterima</h2>
              <p>
                Terima kasih, <strong>{formData.name}</strong>. Kami mencatat
                permintaan <strong>{formData.serviceType}</strong> pada{" "}
                <strong>{formData.date || "secepatnya"}</strong>. Tim kami akan
                menghubungi Anda untuk konfirmasi.
              </p>
              <div className="success-actions">
                <a
                  className="button button-dark"
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo AirCool Pro, saya ${formData.name} sudah mengisi permintaan servis ${formData.serviceType}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konfirmasi via WhatsApp <ArrowRight size={16} />
                </a>
                <button
                  className="button button-outline"
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
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-grid">
                <label>
                  Nama lengkap *
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    autoComplete="name"
                  />
                </label>
                <label>
                  Nomor WhatsApp *
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx xxxx xxxx"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label>
                Alamat pengerjaan *
                <textarea
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Jalan, nomor rumah, kelurahan, dan patokan lokasi"
                  autoComplete="street-address"
                />
              </label>
              <div className="form-grid">
                <label>
                  Jenis layanan *
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
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
                <label>
                  Jumlah unit *
                  <select
                    name="acCount"
                    value={formData.acCount}
                    onChange={handleChange}
                  >
                    <option>1 unit</option>
                    <option>2 unit</option>
                    <option>3 unit</option>
                    <option>4 unit</option>
                    <option>5+ unit</option>
                  </select>
                </label>
              </div>
              <div className="form-grid">
                <label>
                  Tanggal kunjungan *
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Waktu kunjungan *
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option>Pagi (08.00—12.00)</option>
                    <option>Siang (13.00—16.00)</option>
                    <option>Sore (16.00—20.00)</option>
                  </select>
                </label>
              </div>
              <label>
                Catatan untuk teknisi
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Contoh: AC netes air, merek AC, atau keluhan lainnya"
                />
              </label>
              <button
                type="submit"
                className="button button-dark booking-submit"
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
