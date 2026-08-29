<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-gear text-orange-500"></i>
        <span>Uygulama Ayarları</span>
      </h2>
      <p class="text-xs text-gray-400">FlameStore deneyiminizi kişiselleştirin.</p>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-4">
      <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
        <div>
          <h4 class="font-bold text-sm text-white">Koyu Alev Teması</h4>
          <p class="text-xs text-gray-400">Gözü yormayan optimize koyu mod.</p>
        </div>
        <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold border border-orange-500/30">Aktif</span>
      </div>

      <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
        <div>
          <h4 class="font-bold text-sm text-white">Önbelleği Temizle</h4>
          <p class="text-xs text-gray-400">Uygulama geçici verilerini sıfırla.</p>
        </div>
        <button @click="$emit('notify', 'Temizlendi', 'Önbellek başarıyla temizlendi.', 'fa-solid fa-broom')" class="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-xs font-bold border border-red-500/30 hover:bg-red-500 hover:text-white transition">Temizle</button>
      </div>

      <div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
        <div>
          <h4 class="font-bold text-sm text-white">Uygulama Sürümü</h4>
          <p class="text-xs text-gray-400">FlameStore v2.0 (Firebase Destekli)</p>
        </div>
        <span class="text-xs font-bold text-gray-500">Kararlı</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  emits: ['notify']
}
</script>
