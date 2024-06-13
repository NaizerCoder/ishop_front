import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../view/main/Index.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../view/product/Index.vue')
    },
  ]
})

export default router
