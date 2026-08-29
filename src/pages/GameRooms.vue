<template>
  <div class="space-y-6 pb-24">
    <!-- Üst Duyuru Başlığı -->
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
      <p class="text-xs text-gray-400">Aşağıdaki renk tuşlarına tıklayarak o oyuna ait özel sesli, metin ve ekran paylaşım odanızı anında açabilirsiniz.</p>
    </div>

    <!-- Aktif Oda & Canlı Yayın Stüdyosu (Oda Açıldığında Görünür) -->
    <div v-if="activeRoom" class="bg-flame-card border border-orange-500/50 rounded-2xl p-5 shadow-2xl space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-lg">{{ activeRoomEmoji }}</span>
          <div>
            <h3 class="font-black text-sm text-white">{{ activeRoomName }} Odanız</h3>
            <span class="text-[10px] text-emerald-400 font-bold">● Sesli, Metin ve Yayın Kanalı Aktif</span>
          </div>
        </div>
        <button @click="closeRoom" class="px-3 py-1 bg-red-500/20 text-red-400 font-bold text-[10px] rounded-lg border border-red-500/30 hover:bg-red-500/30 transition">
          Odadan Ayrıl
        </button>
      </div>

      <!-- Ekran Paylaşımı ve Yayın Alanı -->
      <div class="relative bg-flame-dark border border-flame-border rounded-xl overflow-hidden aspect-video flex items-center justify-center">
        <video ref="screenVideo" autoplay playsinline muted class="w-full h-full object-cover" :class="{ 'filter blur-md transition-all duration-300': isBlurred }"></video>
        
        <div v-if="!isStreaming" class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-flame-dark/90">
          <i class="fa-solid fa-desktop text-gray-500 text-3xl"></i>
          <span class="text-xs text-gray-400">Ekran paylaşımı başlatılmadı</span>
        </div>

        <!-- Yayın Durum Rozeti -->
        <div v-if="isStreaming" class="absolute top-3 left-3 flex items-center space-x-2">
          <span class="px-3 py-1 bg-red-500/20 text-red-500 font-black text-[10px] rounded-full border border-red-500/40 animate-pulse flex items-center space-x-1.5">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span>🔴 Yayın Yapıyor</span>
          </span>
          <span class="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center space-x-1.5 text-[10px] text-white">
            <i class="fa-solid fa-shield-halved text-orange-400"></i>
            <span>Alev Privacy Blur</span>
          </span>
        </div>
      </div>

      <!-- Yayın ve Ses Kontrol Paneli -->
      <div class="grid grid-cols-3 gap-3 pt-2">
        <button @click="toggleMic" :class="isMuted ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-flame-dark text-gray-300 border-flame-border'" class="border py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition">
          <i :class="isMuted ? 'fa-solid fa-microphone-slash' : 'fa-solid fa-microphone'"></i>
          <span>{{ isMuted ? 'Susturuldu' : 'Mikrofon' }}</span>
        </button>

        <button @click="toggleStream" :class="isStreaming ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30'" class="py-3 rounded-xl font-black text-xs flex items-center justify-center space-x-2 transition">
          <i :class="isStreaming ? 'fa-solid fa-stop' : 'fa-solid fa-tower-broadcast'"></i>
          <span>{{ isStreaming ? 'Yayını Bitir' : 'Ekranı Paylaş' }}</span>
        </button>

        <button @click="toggleBlur" :class="isBlurred ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-flame-dark text-gray-300 border-flame-border'" class="border py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition">
          <i class="fa-solid fa-eye-slash"></i>
          <span>{{ isBlurred ? 'Blur Açık' : 'Blur Kapalı' }}</span>
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
      isStreaming: false,
      isMuted: false,
      isBlurred: true,
      mediaStream: null
    }
  },
  methods: {
    openGameRoom(gameName, emoji) {
      this.activeRoom = true
      this.activeRoomName = gameName
      this.activeRoomEmoji = emoji
      this.isStreaming = false
      this.$emit('notify', 'Özel Oda Oluşturuldu!', `${emoji} Sana Özel ${gameName} Sesli Sohbet, Metin Kanalı ve Yayın Stüdyosu Açıldı!`, 'fa-solid fa-headset')
    },
    closeRoom() {
      this.stopStream()
      this.activeRoom = false
      this.$emit('notify', 'Oda', 'Özel odadan ayrıldınız.', 'fa-solid fa-right-from-bracket')
    },
    toggleMic() {
      this.isMuted = !this.isMuted
      if (this.mediaStream) {
        this.mediaStream.getAudioTracks().forEach(track => {
          track.enabled = !this.isMuted
        })
      }
      this.$emit('notify', 'Ses Durumu', this.isMuted ? 'Mikrofon kapatıldı.' : 'Mikrofon açıldı.', 'fa-solid fa-microphone')
    },
    async toggleStream() {
      if (!this.isStreaming) {
        try {
          this.mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
          if (this.$refs.screenVideo) {
            this.$refs.screenVideo.srcObject = this.mediaStream
          }
          this.isStreaming = true
          
          this.mediaStream.getVideoTracks()[0].onended = () => {
            this.stopStream()
          }
          
          this.$emit('notify', 'Canlı Yayın', '🔴 Yayın başlatıldı! Hassas veriler Alev Privacy Blur ile otomatik korunuyor.', 'fa-solid fa-tower-broadcast')
        } catch (err) {
          this.$emit('notify', 'Hata', 'Ekran paylaşımı izni reddedildi.', 'fa-solid fa-triangle-exclamation')
        }
      } else {
        this.stopStream()
      }
    },
    stopStream() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop())
        this.mediaStream = null
      }
      if (this.$refs.screenVideo) {
        this.$refs.screenVideo.srcObject = null
      }
      this.isStreaming = false
      this.$emit('notify', 'Canlı Yayın', 'Yayın sonlandırıldı.', 'fa-solid fa-stop')
    },
    toggleBlur() {
      this.isBlurred = !this.isBlurred
    }
  }
}
</script>
