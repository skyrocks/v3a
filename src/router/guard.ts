import { Router } from 'vue-router'
import store from '@/store'
import { getToken, removeToken } from '@/utils/token'
import { addDynamicRoute } from './dynamic'
import 'nprogress/css/nprogress.css' // 进度条样式
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

// 不需要token的白名单
const whiteList = ['/login', '/404']

export const createGuard = (router: Router) => {
  router.beforeEach(async to => {
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
      if (store.getters.user) {
        // 没有return, 等于next()
      } else {
        //虽然有token, 但是没有登录用户, 先获取用户
        await store.dispatch('auth/getProfile')
        if (store.getters.user) {
          await store.dispatch('menu/findAuthMenu')
          // 创建动态路由,首页的菜单也是基于此路由构建
          addDynamicRoute()
          return to //创建动态路由后必须重新return
        } else {
          //如果获取失败, 删除token, 跳回登录
          removeToken()
          return `/login?redirect=${to.path}`
        }
      }
    } else {
      if (whiteList.indexOf(to.path) === -1) {
        return `/login?redirect=${to.path}`
      }
      // 没有return, 等于next()
    }
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
