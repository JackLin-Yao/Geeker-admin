import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/index.vue'),
    },
  ],
})

export default router
