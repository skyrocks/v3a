import { Router } from 'vue-router'
import store from '@/store'
import { getToken, removeToken } from '@/utils/token'
import { addDynamicRoute } from './dynamic'

// 不需要token的白名单
const whiteList = ['/login', '/404']

export const createGuard = (router: Router) => {
  router.beforeEach(async to => {
    console.log('beforeEach -1')
    const hasToken = getToken()
    if (hasToken) {
      console.log('beforeEach 0')
      if (store.getters.user) {
        console.log('beforeEach 1')
        // console.log(store.getters.user)
        // 没有return, 等于next()
      } else {
        //虽然有token, 但是没有登录用户, 先获取用户
        console.log('beforeEach 2')
        // console.log(store.getters.user)

        console.log('await auth/getProfile 0')
        await store.dispatch('auth/getProfile')
        console.log('await auth/getProfile 1')
        // console.log(store.getters.user)
        if (store.getters.user) {
          // console.log('beforeEach 3')
          // console.log(store.getters.user)
          console.log('await auth/findAuthMenu 0')
          await store.dispatch('menu/findAuthMenu')
          console.log('await auth/findAuthMenu 1')
          // 创建动态路由,首页的菜单也是基于此路由构建
          addDynamicRoute()
          // 没有return, 等于next()
          // console.log(store.state.menu.routes)
          // console.log(router)
          // console.log(router.getRoutes(), 'currentRoute')
          return to
        } else {
          //如果获取失败, 删除token, 跳回登录
          // console.log('beforeEach 4')
          // console.log(store.getters.user)
          removeToken()
          return `/login?redirect=${to.path}`
        }
      }
      // NProgress.done()
    } else {
      console.log('beforeEach 5')
      if (whiteList.indexOf(to.path) === -1) {
        return `/login?redirect=${to.path}`
      }
      // 没有return, 等于next()
    }
  })

  router.afterEach(() => {
    // NProgress.done()
  })
}
