<template>
  <div class="space-y-6">
    <!-- Başlık ve Arama -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white flex items-center space-x-2">
          <i class="fa-solid fa-store text-orange-500"></i>
          <span>Alev Mağazası & APK Arşivi</span>
        </h2>
        <router-link to="/leaderboard" class="text-xs text-orange-400 font-bold hover:underline flex items-center space-x-1">
          <i class="fa-solid fa-trophy"></i> <span>Liderlik</span>
        </router-link>
      </div>

      <!-- Arama Çubuğu -->
      <div class="relative">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-gray-500 text-sm"></i>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Uygulama veya oyun ara..." 
          class="w-full bg-flame-dark border border-flame-border rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
        >
      </div>

      <!-- Kategori Filtreleme (Görseldeki özellik) -->
      <div class="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
        <button @click="selectedCategory = 'all'" :class="selectedCategory === 'all' ? 'bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🔥 Tümü</button>
        <button @click="selectedCategory = 'games'" :class="selectedCategory === 'games' ? 'bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🎮 Oyunlar</button>
        <button @click="selectedCategory = 'tools'" :class="selectedCategory === 'tools' ? 'bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🛠 Araçlar</button>
        <button @click="selectedCategory = 'social'" :class="selectedCategory === 'social' ? 'bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">💬 Sosyal</button>
      </div>
    </div>

    <!-- Haftanın En Çok İndirilenleri (Görseldeki özellik) -->
    <div class="space-y-3">
      <h3 class="text-sm font-black text-white flex items-center space-x-2 px-1">
        <i class="fa-solid fa-fire text-orange-500"></i>
        <span>Haftanın / Ayın En Çok İndirilenleri</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <!-- Uygulama Kartı Örneği -->
        <router-link to="/app-detail" class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl flex items-center justify-between hover:border-orange-500/50 transition group">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black shadow-lg shadow-orange-600/30 group-hover:scale-105 transition">
              FB
            </div>
            <div>
              <h4 class="font-bold text-sm text-white">FlameBrowser X</h4>
              <span class="text-[10px] text-gray-400">Araçlar • 1.4k İndirme</span>
            </div>
          </div>
          <span class="text-xs font-bold text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/20">İncele</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsView',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all'
    }
  }
}
</script>
