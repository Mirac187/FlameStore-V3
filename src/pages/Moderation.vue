<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-shield-halved text-orange-500"></i>
        <span>Moderatör & Rehber Denetim Üssü</span>
      </h2>
      <p class="text-xs text-gray-400">Ücretsiz inceleme hakkını kullanarak şüpheli veya düşük kaliteli uygulamaları denetle ve mağazadan kaldır.</p>
    </div>

    <!-- Denetim Listesi -->
    <div class="space-y-3">
      <div class="bg-flame-card border border-orange-500/30 rounded-2xl p-4 shadow-xl space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-flame-dark border border-flame-border rounded-xl flex items-center justify-center text-orange-400 font-bold text-lg shadow-inner">
              🎮
            </div>
            <div>
              <h4 class="font-bold text-sm text-white">PixelRunner Pro</h4>
              <div class="flex items-center space-x-1.5 mt-0.5">
                <span class="text-[10px] text-gray-400">Geliştirici: ShadowDev •</span>
                <span class="text-[10px] text-orange-400 font-bold flex items-center space-x-0.5">
                  <span>500</span>
                  <i class="fa-solid fa-fire-flame-curved text-[9px]"></i>
                  <span>FT</span>
                </span>
              </div>
            </div>
          </div>
          <span class="px-2.5 py-1 bg-amber-500/20 text-amber-400 font-bold text-[10px] rounded-full border border-amber-500/30">
            İncelemede
          </span>
        </div>

        <!-- Mod Yetki Butonları -->
        <div class="grid grid-cols-2 gap-2 pt-1 border-t border-flame-border">
          <button @click="$emit('notify', 'Mod İnceleme', 'Ücretsiz inceleme modu aktif: Dosya test için indirildi (Yayınlanamaz).', 'fa-solid fa-eye')" class="w-full bg-flame-dark border border-flame-border hover:border-orange-500/50 text-orange-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-shield-cat text-xs"></i>
            <span>Ücretsiz İncele</span>
          </button>
          
          <button @click="$emit('notify', 'Temizlik', 'Uygulama kalitesiz bulunduğu için mağazadan kaldırıldı!', 'fa-solid fa-trash')" class="w-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-ban text-xs"></i>
            <span>Kaldır / Reddet</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModerationView'
}
</script>
