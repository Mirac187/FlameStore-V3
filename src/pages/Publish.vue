<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-cloud-arrow-up text-orange-500"></i>
        <span>Uygulama ve Oyun Yayınla</span>
      </h2>
      <p class="text-xs text-gray-400">APK dosyanı yükle, FlameToken fiyatını belirle ve toplulukla buluştur.</p>
    </div>

    <!-- Yükleme Formu -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      
      <!-- Uygulama Adı -->
      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">Uygulama / Oyun Adı</label>
        <input 
          type="text" 
          v-model="form.name" 
          placeholder="Örn: CyberBlade RPG" 
          class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
        >
      </div>

      <!-- Kategori Seçimi -->
      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">Kategori</label>
        <select 
          v-model="form.category" 
          class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500 transition"
        >
          <option value="games">Aksiyon & Oyunlar</option>
          <option value="tools">Araçlar & Optimizasyon</option>
          <option value="social">Sosyal & İletişim</option>
          <option value="customization">Kişiselleştirme</option>
        </select>
      </div>

      <!-- FlameToken Fiyatlandırma Alanı (Yeni Özellik) -->
      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300 flex items-center justify-between">
          <span>Uygulama Fiyatı (FlameToken)</span>
          <span class="text-[10px] text-orange-400 font-normal">1 - 1000 FT arası (0 = Ücretsiz)</span>
        </label>
        <div class="relative flex items-center">
          <input 
            type="number" 
            min="0" 
            max="1000" 
            v-model="form.tokenPrice" 
            placeholder="Örn: 500" 
            class="w-full bg-flame-dark border border-flame-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition pr-14"
          >
          <div class="absolute right-4 flex items-center space-x-1 text-orange-400 font-bold text-xs">
            <span>FT</span>
            <i class="fa-solid fa-fire-flame-curved text-orange-500 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- APK Dosya Yükleme Alanı -->
      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-300">APK Dosyası</label>
        <div class="border-2 border-dashed border-flame-border hover:border-orange-500/50 rounded-2xl p-6 text-center space-y-2 cursor-pointer transition bg-flame-dark">
          <i class="fa-solid fa-file-arrow-up text-orange-500 text-xl"></i>
          <p class="text-xs text-gray-300 font-bold">APK dosyasını buraya sürükle veya seç</p>
          <span class="text-[10px] text-gray-500 block">Maksimum dosya boyutu: 150 MB (Alev Guard taramasından geçer)</span>
        </div>
      </div>

      <!-- Yayınla Butonu -->
      <button @click="publishApp" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg shadow-orange-600/30 hover:opacity-95 transition">
        Onaya Gönder & Yayınla
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PublishView',
  data() {
    return {
      form: {
        name: '',
        category: 'games',
        tokenPrice: 100
      }
    }
  },
  methods: {
    publishApp() {
      if (!this.form.name) {
        this.$emit('notify', 'Hata', 'Lütfen uygulama adını girin!', 'fa-solid fa-triangle-exclamation')
        return
      }
      this.$emit('notify', 'Başarılı', `"${this.form.name}" ${this.form.tokenPrice} FT fiyatıyla incelemeye gönderildi!`, 'fa-solid fa-circle-check')
      this.form.name = ''
      this.form.tokenPrice = 100
    }
  }
}
</script>
