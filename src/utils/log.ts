import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { logApi } from '@/api/modules/log'

/**
 * 记录菜单进入的日志
 * @param param0
 */
export const logRoute = ({ fullPath, meta }: RouteLocationNormalized) => {
  logApi.info({ route: fullPath, menu: meta?.title as string, logType: '1' })
}

/**
 * 记录方法操作日志
 * @param method
 */
export const logAction = (method: string) => {
  const route = router.currentRoute.value
  logApi.info({ route: route.fullPath, menu: route?.meta?.title as string, method, logType: '2' })
}
