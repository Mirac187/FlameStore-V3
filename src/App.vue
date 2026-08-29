<template>
  <div class="min-h-screen bg-flame-dark text-white flex justify-center selection:bg-orange-500 selection:text-white pb-24">
    <div class="w-full max-w-md bg-flame-dark min-h-screen relative flex flex-col shadow-2xl border-x border-flame-border">
      
      <!-- Üst Başlık / Header -->
      <header class="sticky top-0 z-40 bg-flame-dark/80 backdrop-blur-md border-b border-flame-border px-4 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-black text-xs shadow-md shadow-orange-600/30">
            🔥
          </div>
          <span class="font-black text-sm tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">FlameStore</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <router-link to="/notifications" class="w-9 h-9 rounded-xl bg-flame-card border border-flame-border flex items-center justify-center text-gray-300 hover:text-orange-400 transition relative">
            <i class="fa-solid fa-bell text-xs"></i>
            <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500"></span>
          </router-link>
          <router-link to="/admin" class="w-9 h-9 rounded-xl bg-flame-card border border-flame-border flex items-center justify-center text-gray-300 hover:text-orange-400 transition">
            <i class="fa-solid fa-gear text-xs"></i>
          </router-link>
        </div>
      </header>

      <!-- Dinamik Sayfa İçeriği -->
      <main class="flex-1 p-4 overflow-y-auto">
        <router-view @notify="triggerNotification" />
      </main>

      <!-- Bildirim Toast Pop-up -->
      <transition name="slide-up">
        <div v-if="notification.show" class="fixed top-16 left-4 right-4 max-w-md mx-auto z-50 bg-flame-card border border-orange-500/50 rounded-2xl p-4 shadow-2xl flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
            <i :class="notification.icon"></i>
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-xs text-white">{{ notification.title }}</h4>
            <p class="text-[11px] text-gray-300">{{ notification.message }}</p>
          </div>
        </div>
      </transition>

      <!-- Alt Navigasyon Çubuğu (Bottom Navigation Bar) -->
      <nav class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-flame-dark/90 backdrop-blur-lg border-t border-flame-border px-4 py-2 z-40 flex items-center justify-around">
        <router-link to="/apps" class="flex flex-col items-center space-y-1 text-gray-400 hover:text-orange-400 transition" active-class="text-orange-500">
          <i class="fa-solid fa-store text-sm"></i>
          <span class="text-[10px] font-bold">Mağaza</span>
        </router-link>
        
        <router-link to="/clan-wars" class="flex flex-col items-center space-y-1 text-gray-400 hover:text-orange-400 transition" active-class="text-orange-500">
          <i class="fa-solid fa-fire text-sm"></i>
          <span class="text-[10px] font-bold">Savaşlar</span>
        </router-link>

        <router-link to="/publish" class="flex flex-col items-center space-y-1 text-white hover:opacity-90 transition -mt-5">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/40 border-4 border-flame-dark">
            <i class="fa-solid fa-plus text-sm"></i>
          </div>
          <span class="text-[10px] font-bold text-orange-400">Yükle</span>
        </router-link>

        <router-link to="/chat" class="flex flex-col items-center space-y-1 text-gray-400 hover:text-orange-400 transition" active-class="text-orange-500">
          <i class="fa-solid fa-comments text-sm"></i>
          <span class="text-[10px] font-bold">Sohbet</span>
        </router-link>

        <router-link to="/profile" class="flex flex-col items-center space-y-1 text-gray-400 hover:text-orange-400 transition" active-class="text-orange-500">
          <i class="fa-solid fa-user text-sm"></i>
          <span class="text-[10px] font-bold">Profil</span>
        </router-link>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      notification: {
        show: false,
        title: '',
        message: '',
        icon: 'fa-solid fa-bell'
      }
    }
  },
  methods: {
    triggerNotification(title, message, icon) {
      this.notification = { show: true, title, message, icon }
      setTimeout(() => {
        this.notification.show = false
      }, 3000)
    }
  }
}
</script>

<style>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
