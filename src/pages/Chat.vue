<template>
  <div class="space-y-4 pb-16">
    <!-- Sohbet Başlığı -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-4 shadow-xl flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
          <i class="fa-solid fa-comments"></i>
        </div>
        <div>
          <h2 class="text-sm font-black text-white">Flame Genel Sohbet</h2>
          <span class="text-[10px] text-emerald-400 font-bold">● 1,420 Çevrimiçi Üye</span>
        </div>
      </div>
    </div>

    <!-- Mesajlaşma Akışı -->
    <div class="space-y-3">
      <!-- Başkasının Mesajı -->
      <div class="flex items-start space-x-3">
        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Alpha" class="w-8 h-8 rounded-xl bg-flame-card border border-flame-border">
        <div class="bg-flame-card border border-flame-border rounded-2xl p-3 max-w-[80%] space-y-1">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-bold text-orange-400">CodeMaster</span>
            <span class="text-[9px] text-gray-500">14:20</span>
          </div>
          <p class="text-xs text-gray-300">Arkadaşlar yeni yüklediğim tarayıcı APK'sını test eden var mı? Hız nasıl?</p>
        </div>
      </div>

      <!-- Kendi Mesajınız -->
      <div class="flex items-start justify-end space-x-3">
        <div class="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-3 max-w-[80%] space-y-1 text-white shadow-lg shadow-orange-600/20">
          <div class="flex items-center justify-end space-x-2">
            <span class="text-[9px] text-orange-200">14:22</span>
            <span class="text-xs font-bold">Mavi</span>
          </div>
          <p class="text-xs">Ben test ettim, arayüz çok akıcı olmuş eline sağlık dostum! 🔥</p>
        </div>
        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mavi" class="w-8 h-8 rounded-xl bg-flame-card border border-orange-500/50">
      </div>
    </div>

    <!-- Mesaj Gönderme Kutusu (Sabit) -->
    <div class="fixed bottom-16 left-0 right-0 p-4 bg-flame-dark/80 backdrop-blur-md max-w-md mx-auto">
      <div class="flex items-center space-x-2 bg-flame-card border border-flame-border rounded-xl p-1.5 shadow-xl">
        <input 
          type="text" 
          v-model="newMessage" 
          @keyup.enter="sendMessage"
          placeholder="Mesajını yaz..." 
          class="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
        >
        <button @click="sendMessage" class="w-9 h-9 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:bg-orange-600 transition shadow-md shadow-orange-500/20">
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatView',
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    sendMessage() {
      if (!this.newMessage.trim()) return
      this.$emit('notify', 'Gönderildi', 'Mesajınız sohbete iletildi.', 'fa-solid fa-paper-plane')
      this.newMessage = ''
    }
  }
}
</script>
