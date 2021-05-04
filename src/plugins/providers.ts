import { hasPermission } from '@/utils/permission'
import { App } from 'vue'

/**
 * 注册全局方法
 * @param app
 */
export const installProviders = (app: App) => {
  // 方法一: 用 provider 也行
  app.provide('$hasPermission', hasPermission)

  // 方法二: 在getCurrentInstance()上挂载一个贯穿方法，
  app.config.globalProperties.$hasPermission = hasPermission
}
