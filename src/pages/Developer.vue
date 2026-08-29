<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-code text-orange-500"></i>
        <span>Geliştirici Konsolu</span>
      </h2>
      <p class="text-xs text-gray-400">Yayınladığınız uygulamaların indirme istatistikleri ve performans grafikleri.</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1">
        <span class="text-2xl font-black text-orange-500">1</span>
        <h4 class="text-xs font-bold text-gray-300">Yayınlanan Uygulama</h4>
      </div>
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1">
        <span class="text-2xl font-black text-emerald-400">1,420</span>
        <h4 class="text-xs font-bold text-gray-300">Toplam İndirme</h4>
      </div>
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1 col-span-2 sm:col-span-1">
        <span class="text-2xl font-black text-amber-400">4.9</span>
        <h4 class="text-xs font-bold text-gray-300">Ortalama Puan</h4>
      </div>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-base font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-box-archive text-orange-500"></i>
        <span>Yayınlarım ve Depo Durumu</span>
      </h3>
      <div class="bg-flame-dark border border-flame-border rounded-xl p-4 flex items-center justify-between text-xs">
        <div>
          <h4 class="font-bold text-white">FlameBrowser X</h4>
          <span class="text-[10px] text-gray-400">Depo: Google Drive • Durum: Aktif</span>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">Yayında</span>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: 'DeveloperView' }
</script>
