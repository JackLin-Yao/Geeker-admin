import { Session } from './../utils/storage'
import { createRouter, createWebHistory } from 'vue-router'
import { Local } from '@/utils/storage'
import { toast } from '@/utils/toast'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录页',
      },
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/Layout/index.vue'),
      meta: {
        title: '布局组件',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: async () => await import('@/views/Notfound/index.vue'),
      meta: { hideMenu: true, title: '404' },
    },
  ],
})

//设置hasGetinfo是因为防止每次切换路由都发一次请求造成性能缓慢的效果
let hasGetInfo = false
// 导航守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = Local.get('token')
  // 没有登录就强制跳转为登录页
  if (!token && to.path != '/login') {
    toast('请先登录', 'error')
    return next({ path: '/login' })
  }
  // 防止重复登录
  if (token && to.path == '/login') {
    // 重复拦截成功
    toast('请勿重复登录', 'error')
    return next({ path: from.path ? from.path : '/' })
  }
  // 如果token存在，就从session中取出后台返回的菜单信息
  if (token && !hasGetInfo) {
    // 获取菜单信息
    const userMenu = Session.get('userMenu')
    console.log(
      '🚀 ~ file: index.ts:45 ~ router.beforeEach ~ userMenu',
      userMenu
    )
    hasGetInfo = true
    // 动态添加路由
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
