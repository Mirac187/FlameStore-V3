<template>
  <div class="space-y-6 pb-20">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-shield-virus text-orange-500"></i>
        <span>Alev Guard Güvenlik Raporu</span>
      </h2>
      <p class="text-xs text-gray-400">İndirilen APK dosyasının detaylı izin ve virüs tarama analizleri.</p>
    </div>

    <div class="bg-flame-card border border-emerald-500/40 rounded-2xl p-5 shadow-xl space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
          <span class="font-bold text-xs text-white">Temiz & Güvenli Dosya</span>
        </div>
        <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">0 / 32 Antivirüs Algıladı</span>
      </div>

      <div class="space-y-2 text-xs">
        <div class="flex justify-between bg-flame-dark p-2.5 rounded-xl border border-flame-border">
          <span class="text-gray-400">İmza Doğrulaması</span>
          <span class="text-emerald-400 font-bold">Geçerli (RSA-2048)</span>
        </div>
        <div class="flex justify-between bg-flame-dark p-2.5 rounded-xl border border-flame-border">
          <span class="text-gray-400">Tehlikeli İzinler</span>
          <span class="text-gray-200 font-bold">Bulunamadı</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuardReportView'
}
</script>
