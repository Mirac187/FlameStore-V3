<template>
  <div class="space-y-6 pb-24">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-headset text-orange-500"></i>
        <span>FlameVoice & Canlı Ekran Stüdyosu</span>
      </h2>
      <p class="text-xs text-gray-400">Sesli iletişim kur, ekranını paylaş ve hassas verilerini Alev Privacy Blur ile otomatik koru.</p>
    </div>

    <!-- Yayın ve Ses Kontrol Alanı -->
    <div class="bg-flame-card border border-orange-500/50 rounded-2xl p-5 shadow-2xl space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xs font-black text-white">Aktif Oda: <span class="text-orange-400">#Klan Savaş Arenası</span></span>
        </div>
        <span v-if="isStreaming" class="px-3 py-1 bg-red-500/20 text-red-500 font-black text-[10px] rounded-full border border-red-500/40 animate-pulse flex items-center space-x-1.5">
          <span class="w-2 h-2 rounded-full bg-red-500"></span>
          <span>🔴 Yayın Yapıyor</span>
        </span>
        <span v-else class="text-[10px] text-gray-400 font-bold">Yayın Kapalı</span>
      </div>

      <div class="relative bg-flame-dark border border-flame-border rounded-xl overflow-hidden aspect-video flex items-center justify-center">
        <video ref="screenVideo" autoplay playsinline muted class="w-full h-full object-cover" :class="{ 'filter blur-md transition-all duration-300': isBlurred }"></video>
        
        <div v-if="!isStreaming" class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-flame-dark/90">
          <i class="fa-solid fa-desktop text-gray-500 text-3xl"></i>
          <span class="text-xs text-gray-400">Ekran paylaşımı başlatılmadı</span>
        </div>

        <div v-if="isStreaming" class="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center space-x-2 text-[10px] text-white">
          <i class="fa-solid fa-shield-halved text-orange-400"></i>
          <span>Alev Privacy Blur (Aktif)</span>
        </div>
      </div>

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
  </div>
</template>

<script>
export default {
  name: 'VoiceChatView',
  data() {
    return {
      isMuted: false,
      isStreaming: false,
      isBlurred: true,
      mediaStream: null
    }
  },
  methods: {
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
          
          this.$emit('notify', 'Canlı Yayın', '🔴 Yayın başlatıldı! Hassas veriler Alev Privacy Blur ile korunuyor.', 'fa-solid fa-tower-broadcast')
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
