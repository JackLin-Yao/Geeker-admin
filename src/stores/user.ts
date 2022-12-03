import { defineStore } from 'pinia'
import { login, getUserById, getUserMenuByRoleId } from '@/api/login'
import { Local, Session } from '@/utils/storage'
import router from '../router/index'
import { toast } from '@/utils/toast'

interface userStoreType {
  username: string
  id: string
  token: string
  loading: boolean
  userInfo: any
  userMenu: any
}

export const userStore = defineStore('userStore', {
  state: (): userStoreType => ({
    username: '',
    id: '',
    token: Local.get('token') ?? '',
    loading: false,
    userInfo: Session.get('userInfo') ?? {},
    userMenu: Session.get('userMenu') ?? [],
  }),
  actions: {
    // 用户登录,获取用户信息和token

    async loginAtion(data: { name: String; password: String }) {
      this.loading = true
      const loginResult = await login(data)
      this.username = loginResult.data.name
      this.id = loginResult.data.id
      this.token = loginResult.data.token

      // 获取用户的详细信息（role信息）

      const userInfoResult = await getUserById(this.id)
      this.userInfo = userInfoResult.data

      // 根据用户角色获取用户的权限菜单

      const userMenuResult = await getUserMenuByRoleId(this.id)
      this.userMenu = userMenuResult.data

      // 进行信息的本地保存，对信息状态的记录。

      Local.set('token', this.token)
      Session.set('userInfo', this.userInfo)
      Session.set('userMenu', this.userMenu)

      // 进行页面的跳转。

      toast('登陆成功', 'success')
      this.loading = false
      router.push('/')
    },
  },
})
