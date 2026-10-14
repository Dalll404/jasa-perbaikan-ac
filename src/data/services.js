export const WHATSAPP_NUMBER = "6281234567890";

export const services = [
  {
    id: "cleaning",
    title: "Cuci AC",
    label: "Cuci AC (mulai Rp 75.000)",
    detail:
      "Bersihkan filter, evaporator, dan saluran air agar hembusan kembali lega.",
    price: "75 ribu",
  },
  {
    id: "freon",
    title: "Isi / tambah freon",
    label: "Isi / tambah freon (mulai Rp 150.000)",
    detail:
      "Pengecekan tekanan dan kebocoran dilakukan sebelum pengisian freon.",
    price: "150 ribu",
  },
  {
    id: "repair",
    title: "Perbaikan AC tidak dingin / bocor",
    label: "Perbaikan bocor / kurang dingin (mulai Rp 100.000)",
    detail:
      "Cari sumber masalah, rapikan instalasi, dan jelaskan opsi perbaikannya.",
    price: "100 ribu",
  },
  {
    id: "installation",
    title: "Bongkar pasang AC",
    label: "Bongkar pasang AC (mulai Rp 250.000)",
    detail:
      "Pemasangan dan pemindahan unit dengan pemeriksaan fungsi setelah selesai.",
    price: "250 ribu",
  },
  {
    id: "electrical",
    title: "Perbaikan modul / kelistrikan",
    label: "Perbaikan modul / kelistrikan (mulai Rp 120.000)",
    detail:
      "Pemeriksaan komponen dan kelistrikan sebelum persetujuan perbaikan.",
    price: "120 ribu",
  },
  {
    id: "overhaul",
    title: "Overhaul / cuci besar",
    label: "Overhaul / cuci besar (mulai Rp 350.000)",
    detail:
      "Pembersihan menyeluruh untuk unit yang membutuhkan perawatan ekstra.",
    price: "350 ribu",
  },
];

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
