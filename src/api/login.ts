import { Local } from './../utils/storage'
import service from '@/utils/request'
import type { LoginFormType } from '@/views/login/type/login'

export function login(param: LoginFormType) {
  return service({
    url: '/login',
    method: 'post',
    data: param,
  })
}

export function getUserById(id: string) {
  return service({
    url: `/users/${id}`,
    method: 'get',
  })
}

export function getUserMenuByRoleId(id: string) {
  return service({
    url: `/role/${id}/menu`,
    method: 'get',
  })
}
