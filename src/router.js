import { createRouter, createWebHistory } from 'vue-router'

// Mevcut Sayfalar
import AppsView from '../pages/Apps.vue'
import PublishView from '../pages/Publish.vue'
import ChatView from '../pages/Chat.vue'
import ProfileView from '../pages/Profile.vue'
import ClanWarsView from '../pages/ClanWars.vue'
import AppDetailView from '../pages/AppDetail.vue'
import LeaderboardView from '../pages/Leaderboard.vue'
import ClanDetailView from '../pages/ClanDetail.vue'

const routes = [
  // Temel Ekranlar
  { path: '/', name: 'Home', component: AppsView },
  { path: '/apps', name: 'Apps', component: AppsView },
  
  // Geliştirici & İçerik
  { path: '/publish', name: 'Publish', component: PublishView },
  { path: '/app-detail/:id?', name: 'AppDetail', component: AppDetailView },
  
  // Topluluk & Sosyal
  { path: '/chat', name: 'Chat', component: ChatView },
  { path: '/clan-wars', name: 'ClanWars', component: ClanWarsView },
  { path: '/clan-detail/:id?', name: 'ClanDetail', component: ClanDetailView },
  { path: '/leaderboard', name: 'Leaderboard', component: LeaderboardView }, // Efsaneler Arenası
  
  // Kullanıcı & Profil
  { path: '/profile', name: 'Profile', component: ProfileView },

  // Gelecekte Lazım Olacak Ekstra Rotalar (Şimdiden Hazır!)
  { path: '/settings', name: 'Settings', component: ProfileView }, // Geçici olarak profile yönlendirildi
  { path: '/notifications', name: 'Notifications', component: ChatView }, // Geçici olarak chat'e yönlendirildi
  { path: '/favorites', name: 'Favorites', component: AppsView },
  { path: '/admin', name: 'AdminPanel', component: PublishView },

  // Hatalı / Bulunamayan Sayfalar İçin Yönlendirme (404)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // Sayfa değiştiğinde en üste kaydır
  }
})

export default router
