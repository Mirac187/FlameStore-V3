<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-screwdriver-wrench text-orange-500"></i>
        <span>FlameStore Admin & Geliştirici Üssü</span>
      </h2>
      <p class="text-xs text-gray-400">Sistem ayarlarını yönet, bakım modunu aç ve raporlanan içerikleri denetle.</p>
    </div>

    <!-- Bakım Modu Anahtarı (Görseldeki Özellik) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-sm font-black text-white flex items-center space-x-2">
            <i class="fa-solid fa-power-off text-red-400"></i>
            <span>Sistem Bakım Modu</span>
          </h3>
          <p class="text-[10px] text-gray-400 mt-0.5">Aktif edildiğinde mağaza geçici olarak erişime kapanır.</p>
        </div>
        <button @click="toggleMaintenance" :class="maintenanceMode ? 'bg-red-500 text-white' : 'bg-flame-dark text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs font-bold transition">
          {{ maintenanceMode ? 'Aktif (Kapalı)' : 'Pasif (Açık)' }}
        </button>
      </div>
    </div>

    <!-- Duyuru Banner Yönetimi (Görseldeki Özellik) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-bullhorn text-orange-500"></i>
        <span>Ana Sayfa Duyuru Metni</span>
      </h3>
      <div class="space-y-3">
        <input 
          type="text" 
          v-model="announcementText" 
          placeholder="Yeni duyuru metnini yazın..." 
          class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
        >
        <button @click="updateAnnouncement" class="w-full bg-orange-500 text-white font-black text-xs py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition">
          Duyuruyu Güncelle ve Yayınla
        </button>
      </div>
    </div>

    <!-- Kullanıcı Rapor Geçmişi (Görseldeki Özellik) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-triangle-exclamation text-amber-400"></i>
        <span>Kullanıcı Rapor Geçmişi</span>
      </h3>
      
      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="space-y-1">
            <h4 class="font-bold text-white">FlameBrowser X - Şüpheli Kod</h4>
            <span class="text-[10px] text-gray-400">Raporlayan: AlphaUser • 2 saat önce</span>
          </div>
          <button @click="$emit('notify', 'İşlem', 'Rapor incelendi ve kapatıldı.', 'fa-solid fa-check')" class="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 font-bold rounded-lg border border-emerald-500/30">
            Çözüldü
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
  data() {
    return {
      maintenanceMode: false,
      announcementText: '🔥 FlameStore v2.0 yayında!'
    }
  },
  methods: {
    toggleMaintenance() {
      this.maintenanceMode = !this.maintenanceMode
      this.$emit('notify', 'Bakım Modu', `Sistem durumu: ${this.maintenanceMode ? 'Bakımda' : 'Aktif'}`, 'fa-solid fa-power-off')
    },
    updateAnnouncement() {
      this.$emit('notify', 'Duyuru', 'Ana sayfa duyurusu güncellendi!', 'fa-solid fa-bullhorn')
    }
  }
}
</script>
