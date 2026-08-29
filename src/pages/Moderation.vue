<template>
  <div class="space-y-6">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-shield-virus text-orange-500"></i>
        <span>Moderatör Denetim Kuyruğu</span>
      </h2>
      <p class="text-xs text-gray-400">Şüpheli dosyalar ve topluluk raporları güvenlik süzgeci.</p>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-8 shadow-xl text-center space-y-3">
      <div class="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
        <i class="fa-solid fa-circle-check text-2xl"></i>
      </div>
      <h3 class="font-bold text-base text-white">Her Şey Güvenli!</h3>
      <p class="text-xs text-gray-400 max-w-sm mx-auto">Şu an inceleme bekleyen zararlı veya şüpheli dosya bildirimi bulunmuyor. VirusTotal entegrasyonu kusursuz çalışıyor.</p>
    </div>
  </div>
</template>

<script>
export default { name: 'ModerationView' }
</script>
