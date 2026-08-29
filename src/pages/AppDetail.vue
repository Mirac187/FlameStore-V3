<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/30 shrink-0">
            <i class="fa-solid fa-gamepad text-white text-2xl"></i>
          </div>
          <div>
            <h1 class="text-2xl font-black text-white">FlameBrowser X</h1>
            <p class="text-xs text-gray-400">Yayıncı: <strong class="text-orange-400">Mavi</strong> • Kategori: Araçlar</p>
          </div>
        </div>
        <a href="https://drive.google.com" target="_blank" class="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-xl font-bold text-xs hover:opacity-95 transition shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2">
          <i class="fa-solid fa-download"></i>
          <span>APK İndir (1,420 İndirme)</span>
        </a>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-flame-border">
        <div class="bg-flame-dark p-3 rounded-xl border border-flame-border text-center">
          <span class="text-[10px] text-gray-400 block">VirusTotal</span>
          <strong class="text-xs text-emerald-400 flex items-center justify-center space-x-1 mt-1">
            <i class="fa-solid fa-shield-halved"></i> <span>Temiz (0/65)</span>
          </strong>
        </div>
        <div class="bg-flame-dark p-3 rounded-xl border border-flame-border text-center">
          <span class="text-[10px] text-gray-400 block">Puan</span>
          <strong class="text-xs text-amber-400 flex items-center justify-center space-x-1 mt-1">
            <i class="fa-solid fa-star"></i> <span>4.9 / 5.0</span>
          </strong>
        </div>
        <div class="bg-flame-dark p-3 rounded-xl border border-flame-border text-center">
          <span class="text-[10px] text-gray-400 block">Depolama</span>
          <strong class="text-xs text-white mt-1 block">Google Drive</strong>
        </div>
        <div class="bg-flame-dark p-3 rounded-xl border border-flame-border text-center">
          <span class="text-[10px] text-gray-400 block">Sürüm</span>
          <strong class="text-xs text-orange-400 mt-1 block">v2.1.0</strong>
        </div>
      </div>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3">
      <h3 class="text-base font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-circle-info text-orange-500"></i>
        <span>Uygulama Açıklaması</span>
      </h3>
      <p class="text-xs text-gray-300 leading-relaxed">
        FlameBrowser X, tamamen gizlilik odaklı, reklamsız ve alev temalı hızlandırılmış bir internet tarayıcısıdır. Kendi depolama alanınızdan doğrudan senkronizasyon sağlar ve hiçbir veri üçüncü şahıslarla paylaşılmaz.
      </p>
    </div>
  </div>
</template>

<script>
export default { name: 'AppDetailView' }
</script>
