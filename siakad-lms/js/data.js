const MockData = {
  student: {
      nama: "Ahmad Faliq",
      nisn: "0052918201",
      kelas: "IX-A",
      sppStatus: "Lunas (September 2026)"
  },
  sppBills: [
      { bulan: "Juli 2026", nominal: "Rp 350.000", status: "Lunas", tanggal: "05/07/2026" },
      { bulan: "Agustus 2026", nominal: "Rp 350.000", status: "Lunas", tanggal: "03/08/2026" },
      { bulan: "September 2026", nominal: "Rp 350.000", status: "Lunas", tanggal: "02/09/2026" },
      { bulan: "Oktober 2026", nominal: "Rp 350.000", status: "Belum Bayar", tanggal: "-" }
  ],
  exams: [
      { id: 1, matpel: "Fisika Dasar", materi: "Gelombang & Bunyi", durasi: "45 Menit", status: "Tersedia" },
      { id: 2, matpel: "Matematika", materi: "Persamaan Kuadrat", durasi: "60 Menit", status: "Tersedia" },
      { id: 3, matpel: "Biologi", materi: "Sistem Transpor Sel", durasi: "30 Menit", status: "Selesai" }
  ]
};