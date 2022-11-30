import { defineStore } from 'pinia'
import { login, getUserById, getUserMenuByRoleId } from '@/api/login'
import { Local } from '@/utils/storage'
import router from '../router/index'

export const userStore = defineStore('userStore', {
  state: (): userStoreType => ({
    username: '',
    id: '',
    token: '',
    loading: false,
    userInfo: {},
    userMenu: [],
  }),
  actions: {
    // 用户登录,获取用户信息和token

    async loginAtion(data: { name: String; password: String }) {
      this.loading = true
      const loginResult = await login(data)
      this.username = loginResult.data.name
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.loading = false
      // 进行token的保存，对登录状态的记录。

      Local.set('token', this.token)
      // 获取用户的详细信息（role信息）

      const userInfoResult = await getUserById(this.id)
      this.userInfo = userInfoResult.data
      // 根据用户角色获取用户的权限菜单

      const userMenuResult = await getUserMenuByRoleId(this.id)
      this.userMenu = userMenuResult.data

      // 进行页面的跳转。

      router.push('/main')
    },
  },
})

interface userStoreType {
  username: string
  id: string
  token: string
  loading: boolean
  userInfo: any
  userMenu: any
}
