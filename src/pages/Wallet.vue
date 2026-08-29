<template>
  <div class="space-y-6 pb-20">
    <!-- Cüzdan & XP Kartı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4 relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[10px] text-gray-400 font-bold">Toplam Varlıklar</span>
          <h2 class="text-2xl font-black text-white">8,450 XP</h2>
        </div>
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black shadow-lg shadow-orange-600/30">
          <i class="fa-solid fa-wallet"></i>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-2">
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">Savaş Puanı (SP)</span>
          <h4 class="text-sm font-black text-orange-400">12,400 SP</h4>
        </div>
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">Alev Sandıkları</span>
          <h4 class="text-sm font-black text-amber-400">3 Adet 🎁</h4>
        </div>
      </div>

      <button @click="$emit('notify', 'Sandık Açıldı', 'Tebrikler! 500 Savaş Puanı kazandın!', 'fa-solid fa-gift')" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-600/30 hover:opacity-95 transition">
        🎁 Alev Sandığını Aç
      </button>
    </div>

    <!-- İşlem Geçmişi / Ödül Akışı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-clock-rotate-left text-orange-500"></i>
        <span>XP ve Ödül Geçmişi</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <div class="w-9 h-9 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/30">
              <i class="fa-solid fa-arrow-up text-xs"></i>
            </div>
            <div>
              <h4 class="font-bold text-white">APK İndirme Primi</h4>
              <span class="text-[10px] text-gray-400">Bugün, 14:10</span>
            </div>
          </div>
          <span class="text-xs font-black text-emerald-400">+250 XP</span>
        </div>

        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <div class="w-9 h-9 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/30">
              <i class="fa-solid fa-trophy text-xs"></i>
            </div>
            <div>
              <h4 class="font-bold text-white">Sezon 0 Ödülü</h4>
              <span class="text-[10px] text-gray-400">Geçen Hafta</span>
            </div>
          </div>
          <span class="text-xs font-black text-amber-400">+1,000 SP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletView'
}
</script>
