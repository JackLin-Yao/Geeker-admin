import { createRouter, createWebHistory } from 'vue-router'
import { Local } from '@/utils/storage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
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

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = Local.get('token')
  if (to.path === '/main' && !token) {
    return '/login'
  }

  next()
})
export default router
