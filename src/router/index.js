import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wordle',
      name: 'wordle',
      component: () => import('../views/WordleView.vue')
    },
    {
      path: '/spelling-bee',
      name: 'spelling-bee',
      component: () => import('../views/SpellingBeeView.vue')
    }
  ]
})

export default router
