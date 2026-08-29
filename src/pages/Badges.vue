<template>
  <div class="space-y-6 pb-20">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-award text-orange-500"></i>
        <span>Rozetler & Başarımlar</span>
      </h2>
      <p class="text-xs text-gray-400">Profilinde sergileyeceğin prestijli unvanlar ve kazanılan başarımlar.</p>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="bg-flame-card border border-orange-500/40 rounded-2xl p-4 shadow-xl space-y-3 text-center">
        <div class="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mx-auto border border-orange-500/30 text-lg shadow-lg">
          <i class="fa-solid fa-fire"></i>
        </div>
        <div>
          <h4 class="font-bold text-xs text-white">10K İndirme Barajı</h4>
          <span class="text-[9px] text-orange-400 font-bold block mt-1">Kilidi Açıldı (Geliştirici)</span>
        </div>
      </div>

      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl space-y-3 text-center opacity-60">
        <div class="w-12 h-12 bg-flame-dark text-gray-500 rounded-2xl flex items-center justify-center mx-auto border border-flame-border text-lg">
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div>
          <h4 class="font-bold text-xs text-white">1 Numaralı Hata Avcısı</h4>
          <span class="text-[9px] text-gray-400 block mt-1">Kilitli (%40)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgesView'
}
</script>
