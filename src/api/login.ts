import service from '@/utils/request'

export function login(params: Object) {
  return service({
    url: '/login',
    method: 'post',
    data: params,
  })
}
