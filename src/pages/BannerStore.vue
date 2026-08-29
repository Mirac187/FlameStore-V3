<template>
  <div class="space-y-6 pb-24 select-none">
    
    <!-- Üst Asma Tabela & Karakter Karşılama Alanı -->
    <div class="relative pt-6 pb-4 flex flex-col items-center">
      <!-- Halatlı Asma Tabela: DarkFlame Store -->
      <div class="relative mb-6">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-amber-700"></div>
        <div class="bg-gradient-to-r from-amber-800 to-amber-950 border-4 border-amber-600 rounded-xl px-8 py-2.5 shadow-2xl text-center">
          <h1 class="text-sm font-black text-orange-400 tracking-wider uppercase drop-shadow">DarkFlame</h1>
          <span class="text-xs font-black text-white tracking-widest uppercase">Store</span>
        </div>
      </div>

      <!-- Karakter ("Ben") ve Peluşlar (Plushies) Üst Raf Hizalaması -->
      <div class="w-full max-w-md flex items-end justify-between px-4">
        
        <!-- Sol Taraf: Peluş Yığını (Plushies) -->
        <div class="flex items-end space-x-[-12px]">
          <div class="w-10 h-10 bg-flame-dark border-2 border-orange-500 rounded-xl flex items-center justify-center text-xs shadow-lg animate-bounce">
            😈
          </div>
          <div class="w-12 h-12 bg-flame-dark border-2 border-cyan-500 rounded-xl flex items-center justify-center text-xs shadow-lg">
            🔥
          </div>
          <div class="w-9 h-9 bg-flame-dark border-2 border-orange-400 rounded-xl flex items-center justify-center text-[10px] shadow-lg">
            ⚡
          </div>
        </div>

        <!-- Sağ Taraf: "Ben" ve Konuşma Balonu "Merhaba :D" -->
        <div class="flex items-center space-x-3">
          <!-- Konuşma Balonu -->
          <div class="bg-white text-gray-900 font-bold text-xs px-3 py-1.5 rounded-xl shadow-xl relative border border-gray-300">
            Merhaba :D
            <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-white"></div>
          </div>

          <!-- Karakter Avatarın ("Ben") -->
          <div class="w-14 h-14 bg-gradient-to-tr from-cyan-600 to-blue-500 rounded-2xl border-2 border-cyan-300 flex items-center justify-center text-white font-black shadow-xl shadow-cyan-500/20">
            🐱‍👤
          </div>
        </div>

      </div>
    </div>

    <!-- GD Tarzı Ahşap Raf Vitrini -->
    <div class="bg-gradient-to-b from-amber-950 to-stone-950 border-8 border-amber-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
      
      <!-- Raf Okları ve İçerik Alanı -->
      <div class="flex items-center justify-between">
        
        <!-- Sol Ok -->
        <button @click="$emit('notify', 'Vitrin', 'Önceki sayfa yüklendi.', 'fa-solid fa-chevron-left')" class="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 border-2 border-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/40 transition active:scale-95">
          <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>

        <!-- Raflar Izgarası (2 Katlı Ahşap Görünüm) -->
        <div class="flex-1 mx-4 space-y-4">
          
          <!-- Üst Raf -->
          <div class="grid grid-cols-4 gap-3 bg-amber-900/40 border-4 border-amber-800/80 rounded-2xl p-3 shadow-inner">
            <div v-for="i in 4" :key="'top-'+i" @click="selectItem('Banner Sürüm #' + i, i * 150)" class="bg-stone-900/80 border-2 border-amber-700/60 hover:border-orange-500 rounded-xl h-20 flex flex-col items-center justify-center cursor-pointer transition group shadow">
              <span class="text-xs text-amber-500/60 group-hover:text-orange-400 font-bold">#0{{ i }}</span>
              <i class="fa-solid fa-image text-gray-500 group-hover:text-white text-base mt-1 transition"></i>
            </div>
          </div>

          <!-- Alt Raf -->
          <div class="grid grid-cols-4 gap-3 bg-amber-900/40 border-4 border-amber-800/80 rounded-2xl p-3 shadow-inner">
            <div v-for="i in 4" :key="'bot-'+i" @click="selectItem('Özel Efekt #' + i, i * 200)" class="bg-stone-900/80 border-2 border-amber-700/60 hover:border-orange-500 rounded-xl h-20 flex flex-col items-center justify-center cursor-pointer transition group shadow">
              <span class="text-xs text-amber-500/60 group-hover:text-orange-400 font-bold">#0{{ i + 4 }}</span>
              <i class="fa-solid fa-bolt text-gray-500 group-hover:text-amber-400 text-base mt-1 transition"></i>
            </div>
          </div>

        </div>

        <!-- Sağ Ok -->
        <button @click="$emit('notify', 'Vitrin', 'Sonraki sayfa yüklendi.', 'fa-solid fa-chevron-right')" class="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 border-2 border-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/40 transition active:scale-95">
          <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

      </div>

      <!-- Sayfalama Noktaları (Geometry Dash Alttaki Nokta Barı) -->
      <div class="flex items-center justify-center space-x-2 pt-6">
        <span class="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'BannerStoreView',
  methods: {
    selectItem(itemName, price) {
      this.$emit('notify', 'Vitrin Seçimi', `"${itemName}" inceleniyor. Değer: ${price} FlameToken`, 'fa-solid fa-store')
    }
  }
}
</script>
