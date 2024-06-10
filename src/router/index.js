import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/one',
      name: 'one',
      component: () => import('../components/One.vue')
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('../components/Two.vue')
    }
  ]
})

export default router
