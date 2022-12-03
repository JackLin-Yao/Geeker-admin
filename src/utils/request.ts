import axios from 'axios'
import { ElNotification } from 'element-plus'
import NProgress from 'nprogress'
import { Local, Session } from './storage'
import { userStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { toast } from './toast'

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as any,
  timeout: 10000,
  // headers: { 'Content-Type': 'application/json' },
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    NProgress.start()
    // 在发送请求之前做些什么 token
    // if (Session.get('token')) {
    //   ; (<any>config.headers).common['Authorization'] = `${Session.get('token')}`
    // }
    const token =
      Local.get('token') ||
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE2Njk5NjYwMjgsImV4cCI6MTY3MjU1ODAyOH0.Q6l5RpZGAZvCBE-N6gdEtPmSt6-tefpZlDaRk17iYRoGhv9-kIz3OAIp390PvpD-rvVfQWMk-Eliajk2LKzDIOEbyslFTJeek30OJkKDV8aUo5OntmU2vCNL5qHZXkhTqf0ZmoUr_SJsAP3a2iF9IqCqPTHO5Ue0OBrLVxlNFqo'
    console.log('🚀 ~ file: request.ts:26 ~ token', token)
    // config.headers!.Authorization = 'Bearer' + token
    // if (config.headers && token) {
    // 类型缩小
    // config.headers.Authorization = 'Bearer ' + token
    config.headers!.Authorization = token
    // }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    NProgress.done()
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error)

    toast(error.response.data || '请求失败，请联系管理员', 'error')
    // ElNotification({
    //   message: error.response.data,
    //   type: 'error',
    //   duration: 3000,
    //   dangerouslyUseHTMLString: false,
    //   showClose: false,
    // })
    const Store = userStore()
    const { loading } = storeToRefs(Store)
    loading.value = false
    NProgress.done()
    return Promise.reject(error)
  }
)

export default service
