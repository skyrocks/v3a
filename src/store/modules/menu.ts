import { menuApi } from '@/api/modules/menu'

interface StateType {
  menus: any[]
}

const state = (): StateType => ({
  menus: []
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
  }
}

const getters = {
  menus: (state: StateType) => state.menus
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
