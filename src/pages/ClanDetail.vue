<template>
  <div class="space-y-6">
    <!-- Klan Üst Bilgi Kartı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-600/30">
          🔥
        </div>
        <div>
          <h1 class="text-xl font-black text-white">FlameBrothers</h1>
          <p class="text-xs text-orange-400 font-bold">Lider: Mavi • Seviye 10 Klan</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-2">
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">Toplam Savaş Puanı</span>
          <h4 class="text-sm font-black text-orange-400">45,200 SP</h4>
        </div>
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">Üye Kapasitesi</span>
          <h4 class="text-sm font-black text-white">15 / 20</h4>
        </div>
      </div>
    </div>

    <!-- Klan Üyeleri Listesi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-users text-orange-500"></i>
        <span>Klan Üyeleri</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mavi" class="w-9 h-9 rounded-xl border border-orange-500/50">
            <div>
              <h4 class="font-bold text-white">Mavi</h4>
              <span class="text-[10px] text-orange-400">Kurucu • 8,000 XP</span>
            </div>
          </div>
          <span class="px-2.5 py-1 bg-orange-500/20 text-orange-400 rounded-lg font-bold border border-orange-500/30">👑 Lider</span>
        </div>

        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Alpha" class="w-9 h-9 rounded-xl border border-flame-border">
            <div>
              <h4 class="font-bold text-white">CodeMaster</h4>
              <span class="text-[10px] text-gray-400">Kıdemli Üye • 4,200 XP</span>
            </div>
          </div>
          <span class="text-[10px] text-gray-400">Üye</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClanDetailView'
}
</script>
