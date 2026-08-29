<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-user-shield text-orange-500"></i>
        <span>Gelişmiş Admin Kontrol Paneli</span>
      </h2>
      <p class="text-xs text-gray-400">Sistem yöneticisi olarak kullanıcıları ve akışı denetleyin.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1">
        <span class="text-2xl font-black text-orange-500">1</span>
        <h4 class="text-xs font-bold text-gray-300">Aktif Geliştirici</h4>
      </div>
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1">
        <span class="text-2xl font-black text-emerald-400">0</span>
        <h4 class="text-xs font-bold text-gray-300">Tehlikeli Dosya</h4>
      </div>
      <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl text-center space-y-1">
        <span class="text-2xl font-black text-amber-400">12</span>
        <h4 class="text-xs font-bold text-gray-300">Toplam Klan</h4>
      </div>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <h3 class="text-base font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-users-gear text-orange-500"></i>
        <span>Kullanıcı Yetkilendirme ve Ban Yönetimi</span>
      </h3>

      <div class="space-y-3">
        <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-3 text-xs">
          <div class="flex items-center space-x-3">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mavi" class="w-9 h-9 rounded-full border border-orange-500/30 object-cover">
            <div>
              <h4 class="font-bold text-white">Mavi</h4>
              <span class="text-[10px] text-orange-400">DEVELOPER</span>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">Aktif</span>
            <button @click="$emit('notify', 'Yetki', 'Değiştirilemez ana geliştirici.', 'fa-solid fa-shield')" class="bg-orange-500/20 text-orange-400 px-3 py-1.5 rounded-xl font-bold border border-orange-500/30 hover:bg-orange-500 hover:text-white transition">Yönet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
  props: ['currentUser'],
  emits: ['notify']
}
</script>
