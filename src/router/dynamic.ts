import { RouteRecordRaw } from 'vue-router'
import { errorRoutes } from './error'
import router from '.'
import store from '@/store'
import Layout from '@/layout/index.vue'

const addDynamicRoute = () => {
  router.addRoute(createDynamicRoute(store.getters['menu/menus']))

  errorRoutes.forEach((route: RouteRecordRaw) => {
    router.addRoute(route)
  })
}

const createDynamicRoute = (data: any[]) => {
  const homeRoute: RouteRecordRaw = {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard'
  }

  homeRoute.children = createRouteList(data, '')

  return homeRoute
}

const createRouteList = (data: any[], parentPath: string): RouteRecordRaw[] => {
  const menus: Array<RouteRecordRaw> = []

  data.forEach(ele => {
    const path = `${parentPath}${parentPath === '' ? '' : '/'}${ele.path}`
    if (ele.children && ele.children.length > 0) {
      const children = createRouteList(ele.children, path)
      children.forEach(child => {
        menus.push(child)
      })
    } else {
      menus.push({
        path: path,
        name: ele.menuId,
        component: () => Promise.resolve(require(`@/views/${ele.component}/index.vue`).default),
        meta: { title: ele.menuName, funcKeys: ele.funcKeys }
      })
    }
  })

  return menus
}

export { addDynamicRoute }