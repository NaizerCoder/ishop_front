import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home.menu',
      component: () => import('../view/main/Index.vue')
    },
  ]
})

export default router
