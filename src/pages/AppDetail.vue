<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi & Fiyat Kartı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-14 h-14 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-600/30">
            🎮
          </div>
          <div>
            <h1 class="text-base font-black text-white">CyberBlade RPG</h1>
            <span class="text-[10px] text-gray-400">Aksiyon • Sürüm 1.4</span>
          </div>
        </div>
        
        <!-- Fiyat Etiketi (FlameToken) -->
        <div class="bg-flame-dark border border-orange-500/30 px-3 py-2 rounded-xl text-right">
          <span class="text-[9px] text-gray-400 block">Değer</span>
          <div class="flex items-center space-x-1">
            <span class="text-sm font-black text-orange-400">750</span>
            <i class="fa-solid fa-fire-flame-curved text-orange-500 text-xs"></i>
            <span class="text-[10px] text-gray-400">FT</span>
          </div>
        </div>
      </div>

      <!-- İndirme / Satın Alma Butonları -->
      <div class="space-y-2 pt-2">
        <!-- Normal Kullanıcı / Satın Al Butonu -->
        <button @click="$emit('notify', 'Mağaza', '750 FlameToken hesabınızdan düşüldü ve indirme başladı!', 'fa-solid fa-download')" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-600/30 hover:opacity-95 transition flex items-center justify-center space-x-2">
          <i class="fa-solid fa-coins"></i>
          <span>750 FlameToken ile Satın Al & İndir</span>
        </button>

        <!-- Moderatör / Rehber Özel Ücretsiz İnceleme Butonu -->
        <div class="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-shield-halved text-orange-400 text-xs"></i>
            <span class="text-[11px] text-orange-300 font-bold">Moderatör / Rehber Hakları</span>
          </div>
          <button @click="$emit('notify', 'İnceleme Modu', 'Ücretsiz İnceleme Modu aktif! Dosya analiz için indirildi (Yayınlanamaz).', 'fa-solid fa-eye')" class="px-3 py-1.5 bg-orange-500 text-white font-bold text-[10px] rounded-lg shadow">
            Ücretsiz İncele
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDetailView'
}
</script>
