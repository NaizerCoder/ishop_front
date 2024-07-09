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
      name: 'product.index',
      component: () => import('../view/product/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'product.show',
      component: () => import('../view/product/Show.vue')
    },

  ]
})

export default router
