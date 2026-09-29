const SiakadComponent = {
  render: function() {
      const rows = MockData.sppBills.map(bill => `
          <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
              <td class="py-3.5 px-4 font-semibold text-slate-700">${bill.bulan}</td>
              <td class="py-3.5 px-4 font-medium text-slate-600">${bill.nominal}</td>
              <td class="py-3.5 px-4">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full ${
                      bill.status === 'Lunas' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' 
                      : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                  }">
                      <span class="w-1.5 h-1.5 rounded-full ${bill.status === 'Lunas' ? 'bg-emerald-500' : 'bg-rose-500'}"></span>
                      ${bill.status}
                  </span>
              </td>
              <td class="py-3.5 px-4 text-slate-500 text-sm font-mono">${bill.tanggal}</td>
          </tr>
      `).join('');

      return `
          <div class="space-y-6 fade-in">
              <div class="border-b border-slate-100 pb-4">
                  <h2 class="text-2xl font-bold text-slate-800">SIAKAD & Admin Keuangan</h2>
                  <p class="text-slate-500 text-sm mt-0.5">Rekapitulasi riwayat pembayar tagihan SPP dan status kelulusan administrasi.</p>
              </div>

              <div class="border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
                  <div class="overflow-x-auto">
                      <table class="w-full text-left border-collapse text-sm">
                          <thead class="bg-slate-50 border-b border-slate-200/80 text-slate-600 font-semibold">
                              <tr>
                                  <th class="py-3.5 px-4">Bulan</th>
                                  <th class="py-3.5 px-4">Nominal Tagihan</th>
                                  <th class="py-3.5 px-4">Status</th>
                                  <th class="py-3.5 px-4">Tanggal Pembayaran</th>
                              </tr>
                          </thead>
                          <tbody class="divide-y divide-slate-100">
                              ${rows}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      `;
  }
};