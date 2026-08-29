import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './pages/Home.vue'
import AppsView from './pages/Apps.vue'
import PublishView from './pages/Publish.vue'
import ChatView from './pages/Chat.vue'
import ClansView from './pages/Clans.vue'
import InboxView from './pages/Inbox.vue'
import ProfileView from './pages/Profile.vue'
import RulesView from './pages/Rules.vue'
import AdminView from './pages/Admin.vue'
import DeveloperView from './pages/Developer.vue'
import ModerationView from './pages/Moderation.vue'
import SettingsView from './pages/Settings.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/apps', name: 'Apps', component: AppsView },
  { path: '/publish', name: 'Publish', component: PublishView },
  { path: '/chat', name: 'Chat', component: ChatView },
  { path: '/clans', name: 'Clans', component: ClansView },
  { path: '/inbox', name: 'Inbox', component: InboxView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/rules', name: 'Rules', component: RulesView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '/developer', name: 'Developer', component: DeveloperView },
  { path: '/moderation', name: 'Moderation', component: ModerationView },
  { path: '/settings', name: 'Settings', component: SettingsView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
