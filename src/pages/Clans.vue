<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Başlık -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white flex items-center space-x-2">
          <i class="fa-solid fa-shield-halved text-orange-500"></i>
          <span>Klanlar Dizini</span>
        </h2>
        <span class="text-[10px] px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full font-bold border border-orange-500/30">
          Sezon 1 Aktif
        </span>
      </div>
      <p class="text-xs text-gray-400">Güçlü bir klana katıl, savaş puanlarını birleştir ve birlikte zirveye tırman.</p>
      
      <!-- Arama Çubuğu -->
      <div class="relative pt-1">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Klan ara..." 
          class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
        >
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-5 text-gray-500 text-xs"></i>
      </div>
    </div>

    <!-- Klan Listesi -->
    <div class="space-y-3">
      <div class="bg-flame-card border border-orange-500/40 rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-600/30">
            🔥
          </div>
          <div>
            <h4 class="font-bold text-sm text-white">FlameBrothers</h4>
            <span class="text-[10px] text-orange-400 font-bold">Seviye 10 • 15/20 Üye</span>
          </div>
        </div>
        <router-link to="/clan-detail" class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/20 transition">
          İncele
        </router-link>
      </div>

      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-flame-dark border border-flame-border rounded-xl flex items-center justify-center text-gray-300 font-black text-lg">
            ⚡
          </div>
          <div>
            <h4 class="font-bold text-sm text-white">CodeDestroyers</h4>
            <span class="text-[10px] text-gray-400 font-bold">Seviye 7 • 12/20 Üye</span>
          </div>
        </div>
        <button @click="$emit('notify', 'Klan', 'Klana katılım isteği gönderildi!', 'fa-solid fa-user-plus')" class="px-4 py-2 bg-flame-dark border border-flame-border hover:border-orange-500/50 text-gray-300 font-bold text-xs rounded-xl transition">
          Katıl
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClansView',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>
