<template>
  <div class="space-y-6">
    <!-- Profil Kartı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center space-x-4">
        <div class="relative">
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mavi" class="w-16 h-16 rounded-2xl border-2 border-orange-500/50 object-cover shadow-lg shadow-orange-500/20">
          <span class="absolute -bottom-1 -right-1 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full border border-flame-dark">LVL 40</span>
        </div>
        <div>
          <h1 class="text-xl font-black text-white flex items-center space-x-2">
            <span>Mavi</span>
            <i class="fa-solid fa-circle-check text-orange-500 text-sm" title="Doğrulanmış Geliştirici"></i>
          </h1>
          <p class="text-xs text-orange-400 font-bold">👑 Kurucu Geliştirici • 8000 XP</p>
        </div>
      </div>

      <!-- XP Çubuğu -->
      <div class="space-y-1 pt-2">
        <div class="flex justify-between text-[11px] text-gray-400 font-bold">
          <span>Seviye İlerlemesi</span>
          <span class="text-orange-400">80% / Sonraki Seviye: 10,000 XP</span>
        </div>
        <div class="w-full h-2.5 bg-flame-dark rounded-full border border-flame-border overflow-hidden p-0.5">
          <div class="h-full bg-gradient-to-r from-orange-600 to-amber-500 rounded-full w-[80%] shadow-lg shadow-orange-500/50"></div>
        </div>
      </div>
    </div>

    <!-- Profil Rozetleri (Görseldeki Özellik) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-medal text-orange-500"></i>
        <span>Kazanılan Rozetler ve Başarılar</span>
      </h3>

      <div class="grid grid-cols-3 gap-3">
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center space-y-2">
          <div class="w-10 h-10 mx-auto rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
            <i class="fa-solid fa-fire text-base"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white">Alev Kralı</h4>
            <span class="text-[9px] text-gray-400">10+ APK Yükledi</span>
          </div>
        </div>

        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center space-y-2">
          <div class="w-10 h-10 mx-auto rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <i class="fa-solid fa-shield-halved text-base"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white">Güvenli Üye</h4>
            <span class="text-[9px] text-gray-400">Temiz Tarama</span>
          </div>
        </div>

        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center space-y-2">
          <div class="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <i class="fa-solid fa-users text-base"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white">Klan Lideri</h4>
            <span class="text-[9px] text-gray-400">Klan Kurucusu</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tema Tercihi Ayarı (Görseldeki Özellik: Karanlık/Aydınlık tema kaydı) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-palette text-orange-500"></i>
        <span>Görünüm ve Tema Tercihi</span>
      </h3>
      <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
        <div>
          <h4 class="font-bold text-xs text-white">Koyu Alev Modu</h4>
          <p class="text-[10px] text-gray-400">Cihaz hafızasında tema tercihini hatırlar.</p>
        </div>
        <button @click="toggleTheme" class="px-4 py-2 bg-orange-500/20 text-orange-400 font-bold text-xs rounded-xl border border-orange-500/30 hover:bg-orange-500 hover:text-white transition">
          {{ isDarkMode ? '🔥 Aktif (Koyu)' : '☀️ Aydınlık' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      isDarkMode: localStorage.getItem('flame_theme') !== 'light'
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('flame_theme', this.isDarkMode ? 'dark' : 'light')
      this.$emit('notify', 'Tema Güncellendi', `Tercihiniz kaydedildi: ${this.isDarkMode ? 'Koyu Alev' : 'Aydınlık'}`, 'fa-solid fa-palette')
    }
  }
}
</script>
