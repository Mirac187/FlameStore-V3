<template>
  <div class="space-y-6 pb-20">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-vault text-orange-500"></i>
        <span>Klan Ortak Yatırım Sandığı</span>
      </h2>
      <p class="text-xs text-gray-400">Klan üyeleri token bağışlayarak seviye atlar ve özel avantajlar açar.</p>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-5 shadow-xl space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[10px] text-gray-400 font-bold">Klan Seviyesi</span>
          <h3 class="text-lg font-black text-white">Seviye 10 Kasa</h3>
        </div>
        <span class="text-xs font-bold text-orange-400">%85 Dolu</span>
      </div>

      <div class="w-full bg-flame-dark h-3 rounded-full overflow-hidden border border-flame-border">
        <div class="bg-gradient-to-r from-orange-600 to-amber-500 h-full w-[85%]"></div>
      </div>

      <button @click="$emit('notify', 'Bağış Yapıldı', 'Klan sandığına 250 FlameToken yatırıldı!', 'fa-solid fa-coins')" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition">
        Klan Sandığına 250 FT Bağışla
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClanChestView'
}
</script>
