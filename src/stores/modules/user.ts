import { defineStore } from 'pinia'
import { login } from '@/api/login'

export const userStore = defineStore('userStore', {
  state: () => ({
    user: {
      username: '',
      id: '',
    },
    token: '',
  }),
  actions: {
    // 用户登录
    async loginAtion(data: any) {

    },
  },
})
