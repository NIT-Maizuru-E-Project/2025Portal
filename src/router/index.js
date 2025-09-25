import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Top from '../views/2025Portal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2025Portal/About',
    name: 'About',
    component: About
  },
  {
    path: '/2025Portal',
    name: '2025Portal',
    component: Top
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router