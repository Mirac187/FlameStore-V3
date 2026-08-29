<template>
  <div class="min-h-screen bg-flame-dark text-white font-sans antialiased pb-20 selection:bg-orange-500 selection:text-white">
    
    <!-- Üst Duyuru Banner'ı (Görseldeki özellik) -->
    <div class="p-4 max-w-4xl mx-auto">
      <AnnouncementBanner 
        v-if="showBanner" 
        :announcement="currentAnnouncement" 
        @close="showBanner = false" 
      />
    </div>

    <!-- Ana Sayfa İçeriği (Router View) -->
    <main class="max-w-4xl mx-auto px-4 py-2">
      <router-view @notify="triggerNotification" />
    </main>

    <!-- Alt Navigasyon Çubuğu (Navbar) -->
    <nav class="fixed bottom-0 left-0 right-0 bg-flame-card/90 backdrop-blur-lg border-t border-flame-border px-4 py-3 z-50">
      <div class="max-w-md mx-auto flex items-center justify-around">
        <router-link to="/" class="flex flex-col items-center text-gray-400 hover:text-orange-500 transition">
          <i class="fa-solid fa-house text-lg"></i>
          <span class="text-[10px] font-bold mt-1">Ana Sayfa</span>
        </router-link>

        <router-link to="/apps" class="flex flex-col items-center text-gray-400 hover:text-orange-500 transition">
          <i class="fa-solid fa-store text-lg"></i>
          <span class="text-[10px] font-bold mt-1">Mağaza</span>
        </router-link>

        <router-link to="/publish" class="flex flex-col items-center text-orange-500 hover:scale-110 transition">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-600/40">
            <i class="fa-solid fa-plus text-sm"></i>
          </div>
        </router-link>

        <router-link to="/chat" class="flex flex-col items-center text-gray-400 hover:text-orange-500 transition">
          <i class="fa-solid fa-comments text-lg"></i>
          <span class="text-[10px] font-bold mt-1">Sohbet</span>
        </router-link>

        <router-link to="/profile" class="flex flex-col items-center text-gray-400 hover:text-orange-500 transition">
          <i class="fa-solid fa-user text-lg"></i>
          <span class="text-[10px] font-bold mt-1">Profil</span>
        </router-link>
      </div>
    </nav>

    <!-- Global Bildirim Kutusu (Toast) -->
    <transition name="fade">
      <div v-if="notification.show" class="fixed top-5 right-5 bg-flame-card border border-orange-500/40 px-5 py-3 rounded-2xl shadow-2xl z-50 flex items-center space-x-3">
        <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
          <i :class="notification.icon"></i>
        </div>
        <div>
          <h4 class="text-xs font-black text-white">{{ notification.title }}</h4>
          <p class="text-[10px] text-gray-300">{{ notification.message }}</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import AnnouncementBanner from './components/AnnouncementBanner.vue'

export default {
  name: 'App',
  components: { AnnouncementBanner },
  data() {
    return {
      showBanner: true,
      currentAnnouncement: '🔥 FlameStore v2.0 yayında! Kendi APK\'larını yükle, klanını kur ve ödülleri kap.',
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
      this.notification = { show: true, title, message, icon: icon || 'fa-solid fa-bell' }
      setTimeout(() => {
        this.notification.show = false
      }, 3000)
    }
  }
}
</script>
