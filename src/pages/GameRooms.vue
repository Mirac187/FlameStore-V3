<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Başlık / Duyuru Odası Bilgisi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-black text-white flex items-center space-x-2">
          <i class="fa-solid fa-bullhorn text-orange-500"></i>
          <span># Duyuru & Oyun Odası Seçimi</span>
        </h2>
        <span class="text-[10px] px-2.5 py-1 bg-red-500/20 text-red-400 font-bold rounded-full border border-red-500/30">
          Salt Okunur (Sadece Yetkili)
        </span>
      </div>
      <p class="text-xs text-gray-400">Aşağıdaki renk tuşlarına tıklayarak o oyuna ait özel sesli, metin ve ekran paylaşım odanızı açabilirsiniz.</p>
    </div>

    <!-- Aktif Oda & Ekran Paylaşımı Paneli (Oda Açıldığında Görünür) -->
    <div v-if="activeRoom" class="bg-flame-card border border-orange-500/50 rounded-2xl p-5 shadow-2xl space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-lg">{{ activeRoomEmoji }}</span>
          <div>
            <h3 class="font-black text-sm text-white">{{ activeRoomName }} Odanız</h3>
            <span class="text-[10px] text-emerald-400 font-bold">● Sesli ve Metin Kanalı Aktif</span>
          </div>
        </div>
        <button @click="closeRoom" class="px-3 py-1 bg-red-500/20 text-red-400 font-bold text-[10px] rounded-lg border border-red-500/30 hover:bg-red-500/30 transition">
          Odadan Ayrıl
        </button>
      </div>

      <!-- Yayın ve Gizlilik (Blur) Alanı -->
      <div class="bg-flame-dark border border-flame-border rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <i class="fa-solid fa-desktop text-orange-400 text-xs"></i>
            <span class="font-bold text-xs text-white">Canlı Ekran Paylaşımı</span>
          </div>
          <!-- Yayın Durum Rozeti -->
          <span v-if="isStreaming" class="px-2.5 py-1 bg-red-500/20 text-red-500 font-black text-[10px] rounded-full border border-red-500/40 animate-pulse flex items-center space-x-1">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span>🔴 Yayın Yapıyor</span>
          </span>
          <span v-else class="text-[10px] text-gray-400">Yayın Kapalı</span>
        </div>

        <!-- Alev Privacy Blur Bilgisi -->
        <div class="flex items-center justify-between bg-flame-card p-3 rounded-xl border border-flame-border text-[11px]">
          <div class="flex items-center space-x-2 text-gray-300">
            <i class="fa-solid fa-shield-halved text-orange-400"></i>
            <span>Alev Privacy Blur (Kredi Kartı / Özel Sekme Koruması)</span>
          </div>
          <span class="text-emerald-400 font-bold text-[10px]">Aktif 🛡️</span>
        </div>

        <!-- Yayın Başlat / Durdur Butonu -->
        <button @click="toggleStream" :class="isStreaming ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30'" class="w-full font-black text-xs py-3 rounded-xl transition flex items-center justify-center space-x-2">
          <i :class="isStreaming ? 'fa-solid fa-stop' : 'fa-solid fa-tower-broadcast'"></i>
          <span>{{ isStreaming ? 'Yayını Durdur' : 'Ekranı Paylaş & Yayın Başlat' }}</span>
        </button>
      </div>
    </div>

    <!-- Admin Sabit Duyuru Mesajı -->
    <div class="bg-flame-card border border-orange-500/40 rounded-2xl p-5 shadow-xl space-y-4 relative overflow-hidden">
      <div class="absolute top-0 right-0 bg-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl">
        YÖNETİCİ DUYURUSU
      </div>

      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black shadow-lg">
          🔥
        </div>
        <div>
          <h4 class="font-bold text-xs text-white">DarkFlameOfficial</h4>
          <span class="text-[10px] text-gray-400">Bugün, 12:15</span>
        </div>
      </div>

      <div class="text-xs text-gray-200 leading-relaxed space-y-2 bg-flame-dark/60 p-4 rounded-xl border border-flame-border">
        <p class="font-bold text-orange-400">Dostlar! Buradaki renk tuşlarına tıklarsanız size özel sesli sohbet alanı, metin kanalı ve ekran paylaşım odası açılacaktır:</p>
      </div>

      <!-- Renkli Oyun Butonları Izgarası -->
      <div class="grid grid-cols-2 gap-3 pt-2">
        <button @click="openGameRoom('Minecraft', '🟫🟩')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟫🟩</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Minecraft</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Roblox', '⬛️⬜️')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">⬛️⬜️</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Roblox</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Valorant', '🟥⬛️')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟥⬛️</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Valorant</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Brawl Stars', '🟨⬛️')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟨⬛️</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Brawl Stars</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Counter Strike', '🟦🟨')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟦🟨</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Counter Strike</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Among Us', '🟥🟨')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟥🟨</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Among Us</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Clash Royale', '🟥🟦')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🟥🟦</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Clash Royale</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>

        <button @click="openGameRoom('Diğer Oyunlar', '🎮🕹')" class="bg-flame-dark border border-flame-border hover:border-orange-500/50 p-3 rounded-xl flex items-center space-x-3 transition text-left group">
          <span class="text-lg">🎮🕹</span>
          <div>
            <h5 class="font-bold text-xs text-white group-hover:text-orange-400 transition">Diğer Oyunlar</h5>
            <span class="text-[9px] text-gray-400">Özel Oda Aç</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRoomsView',
  data() {
    return {
      activeRoom: false,
      activeRoomName: '',
      activeRoomEmoji: '',
      isStreaming: false
    }
  },
  methods: {
    openGameRoom(gameName, emoji) {
      this.activeRoom = true
      this.activeRoomName = gameName
      this.activeRoomEmoji = emoji
      this.isStreaming = false
      this.$emit('notify', 'Özel Oda Oluşturuldu!', `${emoji} Sana Özel ${gameName} Sesli Sohbet ve Metin Kanalı Açıldı!`, 'fa-solid fa-headset')
    },
    closeRoom() {
      this.activeRoom = false
      this.isStreaming = false
      this.$emit('notify', 'Oda', 'Özel odadan ayrıldınız.', 'fa-solid fa-right-from-bracket')
    },
    toggleStream() {
      this.isStreaming = !this.isStreaming
      if (this.isStreaming) {
        this.$emit('notify', 'Canlı Yayın', '🔴 Yayın Başlatıldı! Hassas veriler Alev Privacy Blur ile otomatik gizlendi.', 'fa-solid fa-tower-broadcast')
      } else {
        this.$emit('notify', 'Canlı Yayın', 'Yayın durduruldu.', 'fa-solid fa-stop')
      }
    }
  }
}
</script>
