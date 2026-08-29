<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-bookmark text-orange-500"></i>
        <span>Favorilerim ve İndirme Geçmişim</span>
      </h2>
      <p class="text-xs text-gray-400">Kaydettiğiniz favori uygulamalar ve cihazınıza indirdiğiniz dosyaların arşivi.</p>
    </div>

    <!-- Sekmeler -->
    <div class="flex space-x-2 border-b border-flame-border pb-3">
      <button @click="activeTab = 'favorites'" :class="activeTab === 'favorites' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs transition">Favoriler (2)</button>
      <button @click="activeTab = 'history'" :class="activeTab === 'history' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs transition">İndirme Geçmişi (5)</button>
    </div>

    <!-- Favoriler Listesi -->
    <div v-if="activeTab === 'favorites'" class="space-y-3">
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-xl flex items-center justify-center text-white font-black">FB</div>
          <div>
            <h4 class="font-bold text-sm text-white">FlameBrowser X</h4>
            <span class="text-[10px] text-gray-400">Araçlar • 1.4k İndirme</span>
          </div>
        </div>
        <button class="text-red-400 hover:text-red-300 text-xs px-3 py-1.5 bg-red-500/10 rounded-xl border border-red-500/20">Kaldır</button>
      </div>
    </div>

    <!-- İndirme Geçmişi -->
    <div v-if="activeTab === 'history'" class="space-y-3">
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/30">
            <i class="fa-solid fa-download text-xs"></i>
          </div>
          <div>
            <h4 class="font-bold text-xs text-white">FlameChat v1.2.apk</h4>
            <span class="text-[10px] text-gray-400">İndirildi: Bugün, 14:20</span>
          </div>
        </div>
        <span class="text-[10px] px-2.5 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-full border border-emerald-500/30">Kuruldu</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoritesView',
  data() {
    return { activeTab: 'favorites' }
  }
}
</script>
