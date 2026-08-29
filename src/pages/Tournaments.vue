<template>
  <div class="space-y-6 pb-20">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-trophy text-orange-500"></i>
        <span>Haftalık Turnuva Arenası</span>
      </h2>
      <p class="text-xs text-gray-400">Klanlar arası rekabet havuzu. İlk 3'e giren klanlar devasa FlameToken ödülü kazanır.</p>
    </div>

    <div class="bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/50 rounded-2xl p-5 shadow-2xl space-y-3">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-bold text-orange-400 px-3 py-1 bg-orange-500/20 rounded-full border border-orange-500/30">Sezon 1 • Hafta 3</span>
        <span class="text-[10px] text-gray-300 font-mono">Bitiş: 2 Gün 14 Saat</span>
      </div>
      <div>
        <h3 class="text-lg font-black text-white">Ödül Havuzu</h3>
        <div class="flex items-center space-x-1 mt-1">
          <span class="text-2xl font-black text-orange-400">25,000</span>
          <i class="fa-solid fa-fire-flame-curved text-orange-500 text-sm"></i>
          <span class="text-xs text-gray-400">FT</span>
        </div>
      </div>
      <button @click="$emit('notify', 'Turnuva', 'Klanınız turnuva savaşlarına kayıt edildi!', 'fa-solid fa-trophy')" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3 rounded-xl shadow-lg shadow-orange-600/30 transition">
        Klanı Turnuvaya Kaydet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TournamentsView'
}
</script>
