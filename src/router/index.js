import { createRouter, createWebHistory } from 'vue-router'
import Member from '../views/Member.vue'
import Top from '../views/2025Portal.vue'

const routes = [
  {
    path: '/',
    name: '2025Portal',
    component: Top
  },
  {
    path: '/Member',
    name: 'Member',
    component: Member
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // savedPositionがある場合（ブラウザの戻る/進むボタン）はその位置に戻る
    if (savedPosition) {
      return savedPosition
    }
    // それ以外の場合は一番上にスクロール
    return { top: 0 }
  }
})

export default router