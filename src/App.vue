<template>
  <div class="min-h-screen bg-[#09090b] text-gray-100 font-mono relative overflow-x-hidden pb-24 selection:bg-cyan-500 selection:text-black">
    
    <!-- Arka Plan Siber Izgara ve Işık Efektleri -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#00ffcc08_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

    <!-- ÜST BAR (HEADER) -->
    <header class="relative z-10 border-b border-cyan-500/30 bg-[#12121a]/80 backdrop-blur-md px-4 py-3 flex items-center justify-between sticky top-0">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-pink-500 flex items-center justify-center shadow-[0_0_10px_#00ffcc]">
          <i class="fa-solid fa-fire text-black font-black"></i>
        </div>
        <div>
          <h1 class="text-sm font-black tracking-wider text-cyan-400 uppercase">FlameStore <span class="text-pink-500 text-[10px]">V3.0</span></h1>
          <p class="text-[9px] text-gray-400">NIGHT CITY SECURE ARCHIVE</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-3">
        <button class="w-8 h-8 rounded bg-[#1a1a24] border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-[0_0_8px_rgba(0,255,204,0.2)] hover:bg-cyan-500 hover:text-black transition">
          <i class="fa-solid fa-bell text-xs"></i>
        </button>
        <button class="w-8 h-8 rounded bg-[#1a1a24] border border-pink-500/40 text-pink-400 flex items-center justify-center shadow-[0_0_8px_rgba(255,0,255,0.2)] hover:bg-pink-500 hover:text-black transition">
          <i class="fa-solid fa-gear text-xs"></i>
        </button>
      </div>
    </header>

    <!-- ANA İÇERİK ALANI -->
    <main class="relative z-10 p-4 space-y-5">
      
      <!-- Hoş Geldin / Duyuru Kartı -->
      <div class="relative bg-gradient-to-r from-[#12121a] to-[#1a1a2e] border border-cyan-500/50 rounded-xl p-4 shadow-[0_0_15px_rgba(0,255,204,0.15)] overflow-hidden">
        <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
        <div class="flex items-center space-x-3 mb-2">
          <span class="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500 text-cyan-400 text-[9px] font-bold uppercase tracking-widest rounded">SİBER GÜVENLİK AKTİF</span>
          <span class="text-[10px] text-pink-400 animate-pulse">● CANLI BAĞLANTI</span>
        </div>
        <h2 class="text-base font-bold text-white tracking-wide">Alev Mağazası & APK Arşivi</h2>
        <p class="text-xs text-gray-400 mt-1">Şifrelenmiş tüneller üzerinden en son Android modlarını ve siber araçları keşfet.</p>
      </div>

      <!-- ARAMA ÇUBUĞU -->
      <div class="relative">
        <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-cyan-400">
          <i class="fa-solid fa-terminal text-xs"></i>
        </span>
        <input type="text" placeholder="Sistemde uygulama veya oyun ara..." class="w-full bg-[#12121a] border border-cyan-500/40 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition shadow-inner">
      </div>

      <!-- KATEGORİ SEKMELERİ -->
      <div class="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
        <button class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black text-xs rounded-lg shadow-[0_0_10px_rgba(0,255,204,0.4)] whitespace-nowrap flex items-center space-x-1.5">
          <i class="fa-solid fa-fire text-black"></i>
          <span>Tümü</span>
        </button>
        <button class="px-4 py-2 bg-[#12121a] border border-cyan-500/30 text-cyan-400 font-bold text-xs rounded-lg hover:bg-cyan-500/10 whitespace-nowrap flex items-center space-x-1.5 transition">
          <i class="fa-solid fa-gamepad"></i>
          <span>Oyunlar</span>
        </button>
        <button class="px-4 py-2 bg-[#12121a] border border-pink-500/30 text-pink-400 font-bold text-xs rounded-lg hover:bg-pink-500/10 whitespace-nowrap flex items-center space-x-1.5 transition">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <span>Araçlar</span>
        </button>
        <button class="px-4 py-2 bg-[#12121a] border border-purple-500/30 text-purple-400 font-bold text-xs rounded-lg hover:bg-purple-500/10 whitespace-nowrap flex items-center space-x-1.5 transition">
          <i class="fa-solid fa-globe"></i>
          <span>Sosyal</span>
        </button>
      </div>

      <!-- ÖNE ÇIKAN UYGULAMA KARTI (FlameBrowser X) -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center space-x-2">
            <i class="fa-solid fa-bolt text-yellow-400"></i>
            <span>Haftanın En Çok İndirilenleri</span>
          </h3>
          <span class="text-[10px] text-cyan-400 cursor-pointer hover:underline">TÜMÜNÜ GÖR</span>
        </div>

        <div class="bg-[#12121a] border border-cyan-500/40 rounded-xl p-4 shadow-[0_0_15px_rgba(0,255,204,0.1)] hover:border-pink-500 transition-all duration-300 space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-tr from-orange-600 to-pink-600 flex items-center justify-center shadow-[0_0_10px_rgba(255,0,255,0.4)]">
                <i class="fa-solid fa-globe text-white text-lg"></i>
              </div>
              <div>
                <h4 class="text-sm font-black text-white tracking-wide">FlameBrowser X</h4>
                <p class="text-[10px] text-cyan-400">Araçlar • 1.4k İndirme</p>
              </div>
            </div>
            <span class="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[9px] font-bold rounded">v3.5.2</span>
          </div>

          <p class="text-[11px] text-gray-400 leading-relaxed">
            Süper hızlandırılmış siber tarayıcı. Yerleşik reklam engelleyici ve karanlık ağ koruması ile donatılmıştır.
          </p>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <button class="py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black text-xs rounded-lg shadow-[0_0_10px_rgba(0,255,204,0.3)] hover:opacity-90 transition flex items-center justify-center space-x-1.5">
              <i class="fa-solid fa-download"></i>
              <span>YÜKLE</span>
            </button>
            <button class="py-2.5 bg-[#1a1a24] border border-cyan-500/40 text-cyan-400 font-bold text-xs rounded-lg hover:bg-cyan-500/20 transition flex items-center justify-center space-x-1.5">
              <i class="fa-solid fa-circle-info"></i>
              <span>İNCELE</span>
            </button>
          </div>
        </div>
      </div>

    </main>

    <!-- ALT MENÜ (DOCK NAVBAR) -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 bg-[#12121a]/90 backdrop-blur-md border-t border-cyan-500/30 px-3 py-2 flex items-center justify-around">
      <button class="flex flex-col items-center text-cyan-400 space-y-0.5">
        <i class="fa-solid fa-store text-base drop-shadow-[0_0_8px_#00ffcc]"></i>
        <span class="text-[9px] font-black uppercase">Mağaza</span>
      </button>
      <button class="flex flex-col items-center text-gray-400 hover:text-pink-400 space-y-0.5 transition">
        <i class="fa-solid fa-shield-halved text-base"></i>
        <span class="text-[9px] font-bold uppercase">Savaşlar</span>
      </button>
      <button class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-pink-500 text-black flex items-center justify-center shadow-[0_0_15px_#ff00ff] -mt-4 border-2 border-[#09090b]">
        <i class="fa-solid fa-plus font-black text-base"></i>
      </button>
      <button class="flex flex-col items-center text-gray-400 hover:text-cyan-400 space-y-0.5 transition">
        <i class="fa-solid fa-comments text-base"></i>
        <span class="text-[9px] font-bold uppercase">Sohbet</span>
      </button>
      <button class="flex flex-col items-center text-gray-400 hover:text-purple-400 space-y-0.5 transition">
        <i class="fa-solid fa-user-gear text-base"></i>
        <span class="text-[9px] font-bold uppercase">Profil</span>
      </button>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log("FlameStore Cyberpunk Core v3.0 Aktif Edildi.");
  }
}
</script>
