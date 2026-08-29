<template>
  <div class="space-y-6 pb-20">
    <!-- Başlık -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-gear text-orange-500"></i>
        <span>Uygulama ve Hesap Ayarları</span>
      </h2>
      <p class="text-xs text-gray-400">Bildirim tercihlerinizi yönetin, hesap güvenliğinizi sağlayın ve verilerinizi güncelleyin.</p>
    </div>

    <!-- Bildirim Tercihleri -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-bell text-orange-500"></i>
        <span>Bildirim Tercihleri</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4 text-xs">
          <div>
            <h4 class="font-bold text-white">Anlık İndirme Bildirimleri</h4>
            <p class="text-[10px] text-gray-400">Yüklediğiniz APK'lar indirildiğinde bildirim alın.</p>
          </div>
          <input type="checkbox" checked class="accent-orange-500 w-4 h-4 cursor-pointer">
        </div>

        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4 text-xs">
          <div>
            <h4 class="font-bold text-white">Klan Savaşı Hatırlatıcıları</h4>
            <p class="text-[10px] text-gray-400">Sezon bitişlerinde ve savaş skorlarında uyarılın.</p>
          </div>
          <input type="checkbox" checked class="accent-orange-500 w-4 h-4 cursor-pointer">
        </div>
      </div>
    </div>

    <!-- Güvenlik ve Şifre -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-sm font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-shield-halved text-orange-500"></i>
        <span>Güvenlik ve Hesap</span>
      </h3>

      <div class="space-y-3">
        <button @click="$emit('notify', 'Güvenlik', 'Şifre sıfırlama bağlantısı e-postanıza gönderildi.', 'fa-solid fa-key')" class="w-full bg-flame-dark border border-flame-border hover:border-orange-500/50 text-gray-300 font-bold text-xs py-3 rounded-xl transition text-left px-4 flex items-center justify-between">
          <span>Şifreyi Değiştir</span>
          <i class="fa-solid fa-chevron-right text-[10px]"></i>
        </button>

        <button @click="$emit('notify', 'Oturum', 'Hesaptan güvenle çıkış yapıldı.', 'fa-solid fa-right-from-bracket')" class="w-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-xs py-3 rounded-xl hover:bg-red-500/20 transition text-left px-4 flex items-center justify-between">
          <span>Oturumu Kapat</span>
          <i class="fa-solid fa-right-from-bracket text-[10px]"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView'
}
</script>
