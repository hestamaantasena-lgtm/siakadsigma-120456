const LmsComponent = {
  render: function() {
      const cards = MockData.exams.map(exam => `
          <div class="p-5 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all bg-white group">
              <div>
                  <div class="flex justify-between items-center mb-3">
                      <span class="text-xs font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">${exam.matpel}</span>
                      <span class="text-xs font-semibold text-slate-400 flex items-center gap-1">
                          <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${exam.durasi}
                      </span>
                  </div>
                  <h3 class="font-bold text-slate-800 text-base group-hover:text-sky-600 transition-colors">${exam.materi}</h3>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span class="text-xs font-medium text-slate-500">Status: <strong class="${exam.status === 'Tersedia' ? 'text-amber-600' : 'text-slate-400'}">${exam.status}</strong></span>
                  ${exam.status === 'Tersedia' 
                      ? `<button onclick="LmsComponent.startExam('${exam.matpel}')" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 active:scale-95">Mulai Ujian <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></button>`
                      : `<button disabled class="px-4 py-2 bg-slate-100 text-slate-400 rounded-xl text-xs font-bold cursor-not-allowed">Selesai</button>`
                  }
              </div>
          </div>
      `).join('');

      return `
          <div class="space-y-6 fade-in">
              <div class="border-b border-slate-100 pb-4">
                  <h2 class="text-2xl font-bold text-slate-800">LMS Ujian & Tugas Online</h2>
                  <p class="text-slate-500 text-sm mt-0.5">Pilih dan kerjakan modul ujian berbasis komputer yang sedang aktif.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  ${cards}
              </div>
          </div>
      `;
  },
  
  startExam: function(matpel) {
      alert(`Ujian ${matpel} dimulai! Membuka lembar soal...`);
  }
};