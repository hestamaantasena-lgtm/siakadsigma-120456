const DashboardComponent = {
  render: function() {
      return `
          <div class="space-y-6 fade-in">
              <!-- Header Title -->
              <div class="border-b border-slate-100 pb-4">
                  <h2 class="text-2xl font-bold text-slate-800">Selamat Datang, ${MockData.student.nama} 👋</h2>
                  <p class="text-slate-500 text-sm mt-0.5">Ringkasan aktivitas akademik dan status siswa hari ini.</p>
              </div>

              <!-- Info Cards Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div class="p-5 bg-gradient-to-br from-sky-50 to-blue-50/30 border border-sky-100 rounded-2xl relative overflow-hidden">
                      <div class="flex justify-between items-start">
                          <div>
                              <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Kelas Aktif</span>
                              <p class="text-2xl font-black text-slate-800 mt-1">${MockData.student.kelas}</p>
                          </div>
                          <div class="bg-sky-500/10 p-2.5 rounded-xl text-sky-600">
                              <i data-lucide="user-check" class="w-5 h-5"></i>
                          </div>
                      </div>
                  </div>

                  <div class="p-5 bg-gradient-to-br from-emerald-50 to-teal-50/30 border border-emerald-100 rounded-2xl relative overflow-hidden">
                      <div class="flex justify-between items-start">
                          <div>
                              <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Status SPP</span>
                              <p class="text-lg font-extrabold text-slate-800 mt-1">Lunas</p>
                              <span class="text-[11px] text-emerald-600 font-medium">Bulan September</span>
                          </div>
                          <div class="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600">
                              <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                          </div>
                      </div>
                  </div>

                  <div class="p-5 bg-gradient-to-br from-amber-50 to-orange-50/30 border border-amber-100 rounded-2xl relative overflow-hidden">
                      <div class="flex justify-between items-start">
                          <div>
                              <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Ujian Aktif</span>
                              <p class="text-2xl font-black text-slate-800 mt-1">2 <span class="text-xs font-semibold text-slate-500">Tersedia</span></p>
                          </div>
                          <div class="bg-amber-500/10 p-2.5 rounded-xl text-amber-600">
                              <i data-lucide="file-clock" class="w-5 h-5"></i>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- Announcement Banner -->
              <div class="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                  <div class="flex items-center gap-2 mb-2">
                      <div class="p-1.5 bg-sky-100 text-sky-600 rounded-lg">
                          <i data-lucide="bell" class="w-4 h-4"></i>
                      </div>
                      <h3 class="font-bold text-slate-800 text-sm">Pengumuman Sekolah</h3>
                  </div>
                  <p class="text-sm text-slate-600 leading-relaxed pl-8">
                      Pelaksanaan Ujian Tengah Semester (UTS) Gasal akan dilaksanakan berbasis Komputer/LMS pada pertengahan bulan Oktober. Harap menyelesaikan administrasi SPP tepat waktu.
                  </p>
              </div>
          </div>
      `;
  }
};