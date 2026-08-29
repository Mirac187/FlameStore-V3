<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-trophy text-orange-500"></i>
        <span>Ateş Liderlik Arenası</span>
      </h2>
      <p class="text-xs text-gray-400">Platformun en aktif geliştiricileri ve en çok indirme alan kral uygulamalar.</p>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-base font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-medal text-orange-500"></i>
        <span>En İyi Geliştiriciler</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <span class="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center border border-orange-500/30">1</span>
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mavi" class="w-9 h-9 rounded-full border border-orange-500/30 object-cover">
            <div>
              <h4 class="font-bold text-white">Mavi</h4>
              <span class="text-[10px] text-orange-400">Seviye 40 • 8000 XP</span>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-bold border border-orange-500/30">👑 Kurucu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'LeaderboardView' }
</script>
