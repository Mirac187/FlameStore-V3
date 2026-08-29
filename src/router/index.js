import { createRouter, createWebHistory } from 'vue-router'

import AppsView from '../pages/Apps.vue'
import PublishView from '../pages/Publish.vue'
import ChatView from '../pages/Chat.vue'
import ProfileView from '../pages/Profile.vue'
import ClanWarsView from '../pages/ClanWars.vue'
import AppDetailView from '../pages/AppDetail.vue'
import LeaderboardView from '../pages/Leaderboard.vue'
import ClanDetailView from '../pages/ClanDetail.vue'
import AdminView from '../pages/Admin.vue'
import FavoritesView from '../pages/Favorites.vue'
import SettingsView from '../pages/Settings.vue'
import NotificationsView from '../pages/Notifications.vue'
import ClansView from '../pages/Clans.vue'
import WalletView from '../pages/Wallet.vue'
import SupportView from '../pages/Support.vue'
import ModerationView from '../pages/Moderation.vue'
import VoiceChatView from '../pages/VoiceChat.vue'
import GameRoomsView from '../pages/GameRooms.vue'
import BannerStoreView from '../pages/BannerStore.vue'
import BadgesView from '../pages/Badges.vue'
import TournamentsView from '../pages/Tournaments.vue'
import DevLogsView from '../pages/DevLogs.vue'
import GuardReportView from '../pages/GuardReport.vue'
import ClanChestView from '../pages/ClanChest.vue'
import CloudStorageView from '../pages/CloudStorage.vue'

const routes = [
  { path: '/', name: 'Home', component: AppsView },
  { path: '/apps', name: 'Apps', component: AppsView },
  { path: '/publish', name: 'Publish', component: PublishView },
  { path: '/app-detail/:id?', name: 'AppDetail', component: AppDetailView },
  { path: '/chat', name: 'Chat', component: ChatView },
  { path: '/clan-wars', name: 'ClanWars', component: ClanWarsView },
  { path: '/clan-detail/:id?', name: 'ClanDetail', component: ClanDetailView },
  { path: '/leaderboard', name: 'Leaderboard', component: LeaderboardView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/settings', name: 'Settings', component: SettingsView },
  { path: '/notifications', name: 'Notifications', component: NotificationsView },
  { path: '/clans', name: 'Clans', component: ClansView },
  { path: '/wallet', name: 'Wallet', component: WalletView },
  { path: '/support', name: 'Support', component: SupportView },
  { path: '/moderation', name: 'Moderation', component: ModerationView },
  { path: '/voice-chat', name: 'VoiceChat', component: VoiceChatView },
  { path: '/game-rooms', name: 'GameRooms', component: GameRoomsView },
  { path: '/banner-store', name: 'BannerStore', component: BannerStoreView },
  { path: '/badges', name: 'Badges', component: BadgesView },
  { path: '/tournaments', name: 'Tournaments', component: TournamentsView },
  { path: '/dev-logs', name: 'DevLogs', component: DevLogsView },
  { path: '/guard-report', name: 'GuardReport', component: GuardReportView },
  { path: '/clan-chest', name: 'ClanChest', component: ClanChestView },
  { path: '/cloud-storage', name: 'CloudStorage', component: CloudStorageView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
