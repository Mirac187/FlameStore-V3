<template>
  <div class="space-y-6">
    <!-- Üst Başlık & Özet -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-600/30">
          FB
        </div>
        <div>
          <h1 class="text-xl font-black text-white">FlameBrowser X</h1>
          <p class="text-xs text-orange-400 font-bold">Geliştirici: Mavi • Sürüm v2.4.1</p>
        </div>
      </div>

      <!-- Güvenlik & Tarama Durumu (Görseldeki Özellik) -->
      <div class="flex items-center justify-between bg-flame-dark border border-emerald-500/30 rounded-xl p-3 text-xs">
        <div class="flex items-center space-x-2 text-emerald-400 font-bold">
          <i class="fa-solid fa-shield-check"></i>
          <span>Alev Guard: %100 Temiz / Virüssüz</span>
        </div>
        <span class="text-[10px] text-gray-400">VirusTotal Onaylı</span>
      </div>

      <!-- İndir Butonu ve İstatistikler -->
      <div class="grid grid-cols-2 gap-3 pt-2">
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">İndirme Sayısı</span>
          <h4 class="text-sm font-black text-white">1,420</h4>
        </div>
        <div class="bg-flame-dark border border-flame-border rounded-xl p-3 text-center">
          <span class="text-[10px] text-gray-400">Puanlama</span>
          <h4 class="text-sm font-black text-amber-400">⭐ 4.9</h4>
        </div>
      </div>

      <button @click="downloadApp" class="w-full bg-orange-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition flex items-center justify-center space-x-2">
        <i class="fa-solid fa-download"></i>
        <span>APK'yı Güvenli İndir (45 MB)</span>
      </button>
    </div>

    <!-- Açıklama ve Özellikler -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-circle-info text-orange-500"></i>
        <span>Uygulama Hakkında</span>
      </h3>
      <p class="text-xs text-gray-300 leading-relaxed">
        FlameBrowser X, reklam engelleyici altyapısı, ultra hızlı sekme yönetimi ve karanlık mod optimizasyonuyla mobil deneyiminizi zirveye taşıyan yeni nesil bir tarayıcıdır.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDetailView',
  methods: {
    downloadApp() {
      this.$emit('notify', 'İndirme Başladı', 'FlameBrowser X APK dosyası indiriliyor...', 'fa-solid fa-download')
    }
  }
}
</script>
