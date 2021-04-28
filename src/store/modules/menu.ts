import { menuApi } from '@/api/modules/menu'

interface StateType {
  menus: any[]
  routes: any[]
}

const state = (): StateType => ({
  menus: [],
  routes: []
})

const actions = {
  findAuthMenu({ commit }: any) {
    return new Promise((resolve, reject) => {
      menuApi
        .getAuthMenu()
        .then((resp: any) => {
          const { data } = resp
          commit('SET_MENUS', data)
          resolve(data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  },
  saveRoutes({ commit }: any, routes: any) {
    commit('SET_ROUTES', routes)
  }
}

const mutations = {
  SET_MENUS: (state: any, menus: any) => {
    state.menus = menus
    state.menus.unshift({
      menuId: 'dashboard',
      menuName: '工作台',
      path: 'dashboard',
      component: 'dashboard',
      parentId: '',
      iconClass: 'iconzhuye',
      hidden: 0,
      funcKeys: '',
      children: []
    })
  },
  SET_ROUTES: (state: any, routes: any) => {
    state.routes = routes
  }
}

const getters = {
  menus: (state: StateType) => state.menus,
  routes: (state: StateType) => state.routes
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
