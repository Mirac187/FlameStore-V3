<template>
  <div class="space-y-6 pb-20">
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-code text-orange-500"></i>
        <span>Geliştirici Kod & Hata Günlüğü</span>
      </h2>
      <p class="text-xs text-gray-400">Çökme raporları ve açık kaynak kod parçacıklarını toplulukla paylaş.</p>
    </div>

    <div class="bg-flame-card border border-flame-border rounded-2xl p-5 shadow-xl space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="font-bold text-xs text-white">Crash Log #4092</h4>
        <span class="text-[10px] text-red-400 font-mono">Unity Engine Error</span>
      </div>
      <div class="bg-flame-dark border border-flame-border p-3 rounded-xl font-mono text-[10px] text-gray-300 overflow-x-auto">
        NullReferenceException: Object reference not set to an instance of an object
        at PlayerController.Update () [0x00012] in C:\Projects\Script.cs:45
      </div>
      <button @click="$emit('notify', 'Log Paylaşıldı', 'Hata günlüğü geliştirici mutfağına eklendi.', 'fa-solid fa-share')" class="w-full bg-flame-dark border border-flame-border hover:border-orange-500/50 text-gray-300 font-bold text-xs py-2.5 rounded-xl transition">
        Yeni Log Paylaş
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevLogsView'
}
</script>
