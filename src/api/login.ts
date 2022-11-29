import service from '@/utils/request'
import type { LoginFormType } from '@/views/login/type/login'

export function login(param: LoginFormType) {
  return service({
    url: '/login',
    method: 'post',
    data: param,
  })
}
