<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-bell text-orange-500"></i>
        <span>Bildirim Merkezi</span>
      </h2>
      <p class="text-xs text-gray-400">Klan davetleri, uygulama onayları ve sistem uyarıları burada listelenir.</p>
    </div>

    <!-- Bildirim Listesi -->
    <div class="space-y-3">
      <!-- Bildirim Kartı 1 -->
      <div class="bg-flame-card border border-orange-500/30 rounded-2xl p-4 flex items-start justify-between shadow-xl">
        <div class="flex items-start space-x-3">
          <div class="w-10 h-10 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/30 shrink-0">
            <i class="fa-solid fa-fire text-xs"></i>
          </div>
          <div class="space-y-1">
            <h4 class="font-bold text-xs text-white">Sezon 1 Savaşları Başladı!</h4>
            <p class="text-[11px] text-gray-300">FlameBrothers klanınız için savaş puanı toplamaya başlayın.</p>
            <span class="text-[9px] text-gray-500 block">Bugün, 12:00</span>
          </div>
        </div>
        <span class="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
      </div>

      <!-- Bildirim Kartı 2 -->
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 flex items-start justify-between shadow-xl">
        <div class="flex items-start space-x-3">
          <div class="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0">
            <i class="fa-solid fa-circle-check text-xs"></i>
          </div>
          <div class="space-y-1">
            <h4 class="font-bold text-xs text-white">APK Onaylandı</h4>
            <p class="text-[11px] text-gray-300">Yüklediğiniz "FlameBrowser X" virüs taramasından geçti ve mağazada yayınlandı.</p>
            <span class="text-[9px] text-gray-500 block">Dün, 16:45</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsView'
}
</script>
