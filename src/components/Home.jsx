import React from "react";

export function Home({ setActivePage }) {
  const services = [
    {
      title: "Cuci / Cleaning AC",
      desc: "Pembersihan evaporator, kondensor, filter, dan bak air agar udara kembali segar dan sejuk.",
      price: "Mulai Rp 75.000",
      icon: "❄️",
      popular: true,
    },
    {
      title: "Isi & Tambah Freon",
      desc: "Pengecekan tekanan freon dan pengisian ulang tipe R32, R410a, atau R22 berstandar pabrik.",
      price: "Mulai Rp 150.000",
      icon: "🔋",
      popular: false,
    },
    {
      title: "Perbaikan AC Kurang Dingin / Bocor",
      desc: "Solusi tuntas untuk AC netes air, berisik, bau tak sedap, atau tidak dingin sama sekali.",
      price: "Mulai Rp 100.000",
      icon: "🔧",
      popular: true,
    },
    {
      title: "Bongkar Pasang AC",
      desc: "Layanan pindah AC dari satu ruangan ke ruangan lain atau alamat baru oleh teknisi ahli.",
      price: "Mulai Rp 250.000",
      icon: "📦",
      popular: false,
    },
    {
      title: "Perbaikan Modul & Kelistrikan",
      desc: "Perbaikan PCB/Modul elektronik AC yang error, mati total, atau remote tidak merespons.",
      price: "Mulai Rp 120.000",
      icon: "⚡",
      popular: false,
    },
    {
      title: "Overhaul / Cuci Besar",
      desc: "Turun unit indoor/outdoor untuk pembersihan menyeluruh dari kerak membandel.",
      price: "Mulai Rp 350.000",
      icon: "✨",
      popular: false,
    },
  ];

  const benefits = [
    {
      title: "Teknisi Bersertifikat",
      desc: "Berpengalaman lebih dari 8 tahun menangani berbagai merk AC (Daikin, Panasonic, Sharp, LG, dll).",
    },
    {
      title: "Garansi Servis 30 Hari",
      desc: "Kami memberikan jaminan garansi perbaikan untuk ketenangan pikiran Anda.",
    },
    {
      title: "Transparan & Jujur",
      desc: "Estimasi biaya disetujui terlebih dahulu sebelum pekerjaan dimulai tanpa biaya tersembunyi.",
    },
    {
      title: "Panggilan Cepat ke Lokasi",
      desc: "Tim kami siap datang tepat waktu ke rumah, apartemen, kantor, atau ruko Anda.",
    },
  ];

  const testimonials = [
    {
      name: "Ibu Ratna",
      location: "Jakarta Selatan",
      text: "AC di kamar tiba-tiba netes air parah dan tidak dingin. Panggil teknisi AirCool Pro, langsung datang di hari yang sama dan beres dalam 1 jam. Mantap!",
      rating: 5,
    },
    {
      name: "Bapak Hendra",
      location: "Tangerang",
      text: "Sudah langganan cuci AC kantor di sini. Teknisi ramah, rapi, dan kerjanya bersih tidak bikin kotor lantai. Recommended banget!",
      rating: 5,
    },
    {
      name: "Siska Novita",
      location: "Jakarta Barat",
      text: "Harganya transparan dan dijelasin kerusakannya apa sebelum dibenerin. Ada garansinya juga. Puas banget sama pelayanannya!",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-slate-800 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
                <span>Layanan Panggilan 24/7 & Cepat Tanggap</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Spesialis Perbaikan &{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Perawatan AC
                </span>{" "}
                Profesional
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                AC rumah atau kantor Anda tidak dingin, bocor, atau berisik?
                Jangan tunggu rusak parah. Hubungi teknisi ahli kami sekarang
                juga!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => setActivePage("booking")}
                  className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-cyan-600/30 transition-all transform hover:-translate-y-1 text-center"
                >
                  Booking Jadwal Servis Sekarang
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20AirCool%20Pro,%20saya%20mau%20tanya%20jadwal%20servis%20AC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 -z-10 animate-pulse"></div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
                <div className="flex items-center space-x-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-950 rounded-2xl flex items-center justify-center text-3xl">
                    🛠️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Layanan Darurat AC</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Teknisi langsung meluncur ke lokasi Anda
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Respon Cepat
                    </span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      &lt; 30 Menit
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Garansi Perbaikan
                    </span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      30 Hari
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Area Layanan
                    </span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      Jabodetabek & Sekitarnya
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePage("booking")}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-600/20 hover:opacity-95 transition-all text-center block"
                >
                  Buat Janji Servis Sekarang &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Daftar Layanan & Harga Servis AC
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Transparan, bergaransi, dan dikerjakan oleh profesional
              berpengalaman. Pilih layanan yang Anda butuhkan di bawah ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1"
              >
                {item.popular && (
                  <span className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Paling Sering Dipilih
                  </span>
                )}
                <div>
                  <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-950/60 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">
                      Estimasi Tarif
                    </span>
                    <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                      {item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePage("booking")}
                    className="bg-cyan-50 dark:bg-cyan-950 hover:bg-cyan-600 hover:text-white text-cyan-600 dark:text-cyan-400 font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Mengapa Memilih AirCool Pro?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Kami selalu mengutamakan kepuasan pelanggan dengan standar kerja
              yang tinggi dan teknisi yang jujur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 bg-cyan-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testi" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Ribuan pelanggan telah mempercayakan perawatan AC rumah dan kantor
              mereka kepada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      {t.name}
                    </h4>
                    <span className="text-xs text-slate-400">{t.location}</span>
                  </div>
                  <span className="text-xs bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-full">
                    Terverifikasi
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Butuh Teknisi AC Datang Sekarang Juga?
          </h2>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Jangan biarkan ruangan panas mengganggu aktivitas Anda. Pesan jadwal
            servis atau hubungi kami via WhatsApp untuk respons instan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => setActivePage("booking")}
              className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-cyan-50 font-bold px-8 py-4 rounded-xl shadow-xl transition-all"
            >
              Isi Form Booking Servis
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20AirCool%20Pro,%20saya%20mau%20order%20servis%20sekarang"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all"
            >
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
