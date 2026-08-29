<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-cloud-arrow-up text-orange-500"></i>
        <span>Yeni APK / Uygulama Yükle</span>
      </h2>
      <p class="text-xs text-gray-400">Geliştirdiğin uygulamayı FlameStore klanına sun, indirme rekorları kır ve XP kazan.</p>
    </div>

    <!-- Yükleme Formu -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">Uygulama Adı</label>
        <input type="text" v-model="appName" placeholder="Örn: FlameChat v1.2" class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition">
      </div>

      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">Kategori Seçimi</label>
        <select v-model="appCategory" class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 transition">
          <option value="games">🎮 Oyunlar</option>
          <option value="tools">🛠 Araçlar & Yardımcılar</option>
          <option value="social">💬 Sosyal & Medya</option>
        </select>
      </div>

      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">Uygulama Açıklaması</label>
        <textarea v-model="appDesc" rows="3" placeholder="Uygulamanın ne işe yaradığını kısaca anlat..." class="w-full bg-flame-dark border border-flame-border rounded-xl p-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"></textarea>
      </div>

      <!-- Dosya Seçim Alanı -->
      <div class="border-2 border-dashed border-flame-border rounded-2xl p-6 text-center space-y-2 hover:border-orange-500/50 transition cursor-pointer">
        <i class="fa-solid fa-file-arrow-up text-2xl text-orange-500"></i>
        <h4 class="text-xs font-bold text-white">APK Dosyasını Sürükle veya Seç</h4>
        <p class="text-[10px] text-gray-400">Maksimum Boyut: 150MB • Otomatik Virüs Taraması Yapılır</p>
      </div>

      <button @click="submitApp" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-600/30 hover:opacity-95 transition">
        🚀 Yayınla ve Savaş Puanı Kazan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublishView',
  data() {
    return {
      appName: '',
      appCategory: 'games',
      appDesc: ''
    }
  },
  methods: {
    submitApp() {
      if (!this.appName) {
        this.$emit('notify', 'Hata', 'Lütfen uygulama adını girin!', 'fa-solid fa-triangle-exclamation')
        return
      }
      this.$emit('notify', 'Başarılı!', `${this.appName} başarıyla yüklendi ve sıraya alındı!`, 'fa-solid fa-circle-check')
      this.appName = ''
      this.appDesc = ''
    }
  }
}
  <!-- Fiyat Belirleme Alanı (Publish.vue içine eklenecek) -->
<div class="space-y-2">
  <label class="text-xs font-bold text-gray-300 flex items-center justify-between">
    <span>Uygulama Fiyatı (FlameToken)</span>
    <span class="text-[10px] text-orange-400 font-normal">1 - 1000 FT arası</span>
  </label>
  <div class="relative flex items-center">
    <input 
      type="number" 
      min="1" 
      max="1000" 
      placeholder="Örn: 500" 
      class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition pr-12"
    >
    <div class="absolute right-4 flex items-center space-x-1 text-orange-400">
      <i class="fa-solid fa-fire-flame-curved text-xs"></i>
    </div>
  </div>
</div>

</script>
