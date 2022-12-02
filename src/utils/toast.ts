import { ElNotification } from 'element-plus'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'

export function toast(
  message: string,
  type: EpPropMergeType<
    StringConstructor,
    'success' | 'warning' | 'info' | 'error',
    unknown
  > = 'success',
  showClose?: boolean
) {
  ElNotification({
    message,
    type,
    duration: 2000,
    showClose: false,
  })
}
