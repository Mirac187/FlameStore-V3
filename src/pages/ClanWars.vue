<template>
  <div class="space-y-6">
    <!-- Sezon Başlığı ve Sayaç -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3 text-center relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      
      <div class="inline-flex items-center space-x-2 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-[10px] font-black border border-orange-500/30">
        <i class="fa-solid fa-fire"></i>
        <span>SEZON 1 • AKTİF SAVAŞ ARENASI</span>
      </div>
      <h2 class="text-2xl font-black text-white">Büyük Ateş Ligi</h2>
      <p class="text-xs text-gray-400 max-w-sm mx-auto">Klanınızı zafere taşıyın, uygulamalarınızı indirtin ve haftanın zirvesine adınızı kazıyın.</p>
    </div>

    <!-- Canlı Sıralama -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-ranking-star text-orange-500"></i>
        <span>Canlı Savaş Sıralaması</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-orange-500/40 rounded-xl p-4 shadow-lg shadow-orange-500/10">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-xs shadow-md">1</span>
            <div>
              <h4 class="font-bold text-sm text-white">FlameBrothers</h4>
              <span class="text-[10px] text-orange-400">15 Üye • Savaş Puanı: 45,200 SP</span>
            </div>
          </div>
          <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">Lider 👑</span>
        </div>

        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-full bg-flame-border text-gray-300 font-black flex items-center justify-center text-xs">2</span>
            <div>
              <h4 class="font-bold text-sm text-white">CodeDestroyers</h4>
              <span class="text-[10px] text-gray-400">12 Üye • Savaş Puanı: 28,400 SP</span>
            </div>
          </div>
          <span class="text-xs text-gray-400 font-bold">Takipte</span>
        </div>
      </div>
    </div>

    <!-- Geçmiş Sezonlar / Onur Listesi (Hall of Fame) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-trophy text-amber-400"></i>
        <span>Eski Sezon Şampiyonları (Onur Listesi)</span>
      </h3>

      <div class="space-y-2">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <span class="text-amber-400 font-black">🏆 Sezon 0</span>
            <span class="text-white font-bold">AlphaTesters Clan</span>
          </div>
          <span class="text-[10px] text-gray-400">98,000 SP • Kurucu: Mavi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClanWarsView'
}
</script>
