<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white flex items-center space-x-2">
          <i class="fa-solid fa-shield-cat text-orange-500"></i>
          <span>Flame Klanlar Arenası</span>
        </h2>
        <button @click="$emit('notify', 'Klan', 'Yeni klan oluşturma paneli açıldı.', 'fa-solid fa-plus')" class="bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-lg shadow-orange-500/20 hover:opacity-90 transition">
          Klan Kur
        </button>
      </div>
      <p class="text-xs text-gray-400">Klanınızı kurun, üyeleri toplayın ve mağazanın zirvesine adınızı yazdırın.</p>
    </div>

    <div class="space-y-3">
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-base shadow-lg shadow-orange-600/30">
            🔥
          </div>
          <div>
            <h4 class="font-bold text-sm text-white">FlameBrothers</h4>
            <span class="text-[10px] text-gray-400">Lider: Mavi • 15 Üye • 45,000 Puan</span>
          </div>
        </div>
        <button @click="$emit('notify', 'Klan', 'Klan detayları yüklendi.', 'fa-solid fa-users')" class="bg-orange-500/20 text-orange-400 font-bold text-xs px-4 py-2 rounded-xl border border-orange-500/30 hover:bg-orange-500 hover:text-white transition">
          Katıl / İncele
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'ClansView' }
</script>
