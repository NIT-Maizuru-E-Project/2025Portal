import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Top from '../views/2025Portal.vue'

const routes = [
  {
    path: '/',
    name: '2025Portal',
    component: Top
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router