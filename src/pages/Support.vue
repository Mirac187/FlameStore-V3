<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-headset text-orange-500"></i>
        <span>Destek & Yardım Merkezi</span>
      </h2>
      <p class="text-xs text-gray-400">Takıldığın bir yer mi oldu? Geliştiricilerle iletişime geç veya sık sorulanlara göz atın.</p>
    </div>

    <!-- Hızlı Destek Butonları -->
    <div class="grid grid-cols-2 gap-3">
      <div @click="$emit('notify', 'Destek', 'Canlı destek ekibine bağlanılıyor...', 'fa-solid fa-comments')" class="bg-flame-card border border-flame-border hover:border-orange-500/50 rounded-2xl p-4 shadow-xl cursor-pointer transition space-y-2 text-center">
        <div class="w-10 h-10 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mx-auto border border-orange-500/30">
          <i class="fa-solid fa-headset text-sm"></i>
        </div>
        <h4 class="font-bold text-xs text-white">Canlı Destek</h4>
        <span class="text-[9px] text-emerald-400 font-bold">● Aktif (7/24)</span>
      </div>

      <div @click="$emit('notify', 'Discord', 'Topluluk sunucumuza yönlendiriliyorsunuz.', 'fa-brands fa-discord')" class="bg-flame-card border border-flame-border hover:border-orange-500/50 rounded-2xl p-4 shadow-xl cursor-pointer transition space-y-2 text-center">
        <div class="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mx-auto border border-indigo-500/30">
          <i class="fa-brands fa-discord text-sm"></i>
        </div>
        <h4 class="font-bold text-xs text-white">Discord Kanalı</h4>
        <span class="text-[9px] text-gray-400">1,200 Üye</span>
      </div>
    </div>

    <!-- Sık Sorulan Sorular (SSS) -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-circle-question text-orange-500"></i>
        <span>Sık Sorulan Sorular</span>
      </h3>

      <div class="space-y-3">
        <div class="bg-flame-dark border border-flame-border rounded-xl p-4 space-y-1">
          <h4 class="font-bold text-xs text-white">Savaş Puanı (SP) nasıl kazanılır?</h4>
          <p class="text-[11px] text-gray-400 leading-relaxed">Mağazaya APK yükleyerek, indirme alarak ve klan savaşlarına katılarak SP kasabilirsin.</p>
        </div>

        <div class="bg-flame-dark border border-flame-border rounded-xl p-4 space-y-1">
          <h4 class="font-bold text-xs text-white">Yüklediğim APK neden inceleniyor?</h4>
          <p class="text-[11px] text-gray-400 leading-relaxed">Güvenlik standartlarımız gereği tüm dosyalar otomatik Alev Guard virüs taramasından geçer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView'
}
</script>
