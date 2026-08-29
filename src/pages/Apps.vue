<!-- Kategori Filtre Butonları -->
<div class="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
  <button @click="selectedCategory = 'all'" :class="selectedCategory === 'all' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-card text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🔥 Tümü</button>
  <button @click="selectedCategory = 'games'" :class="selectedCategory === 'games' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-card text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🎮 Oyunlar</button>
  <button @click="selectedCategory = 'tools'" :class="selectedCategory === 'tools' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-card text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">🛠 Araçlar</button>
  <button @click="selectedCategory = 'social'" :class="selectedCategory === 'social' ? 'bg-orange-500 text-white font-bold' : 'bg-flame-card text-gray-400 border border-flame-border'" class="px-4 py-2 rounded-xl text-xs whitespace-nowrap transition">💬 Sosyal</button>
</div>
