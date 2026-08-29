<template>
<div class="space-y-6">
<div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2 text-center">
<h2 class="text-xl font-black text-white flex items-center justify-center space-x-2">
<i class="fa-solid fa-trophy text-amber-400"></i>
<span>Efsaneler Arenası</span>
</h2>
<p class="text-xs text-gray-400">Mağazanın en aktif geliştiricileri ve en çok indirilen uygulamaları.</p>
</div>
​<!-- Sıralama Listesi -->
<div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3">
<div class="flex items-center justify-between bg-flame-dark border border-orange-500/40 rounded-xl p-4 shadow-lg shadow-orange-500/10">
<div class="flex items-center space-x-3">
<span class="w-8 h-8 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-xs shadow-md">1</span>
<div>
<h4 class="font-bold text-sm text-white">Mavi</h4>
<span class="text-[10px] text-orange-400">Kurucu Geliştirici • 8,000 XP</span>
</div>
</div>
<span class="text-xs font-black text-amber-400">👑 1. Sırada</span>
</div>
​<div class="flex items-center justify-between bg-flame-dark border border-flame-border rounded-xl p-4">
<div class="flex items-center space-x-3">
<span class="w-8 h-8 rounded-full bg-flame-border text-gray-300 font-black flex items-center justify-center text-xs">2</span>
<div>
<h4 class="font-bold text-sm text-white">AlphaCoder</h4>
<span class="text-[10px] text-gray-400">Klan Lideri • 6,450 XP</span>
</div>
</div>
<span class="text-xs font-bold text-gray-400">6,450 XP</span>
</div>
</div>
</div>
</template>
​<script>
export default {
name: 'LeaderboardView'
}
</script>
