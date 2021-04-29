import { menuApi } from '@/api/modules/menu'

interface StateType {
  menus: any[]
}

const state = (): StateType => ({
  menus: []
})

const actions = {
  findAuthMenu: async ({ commit }: any) => {
    console.log('findAuthMenu 0')
    await menuApi.getAuthMenu().then((resp: any) => {
      console.log('findAuthMenu 1')
      const { data } = resp
      commit('SET_MENUS', data)
    })
    console.log('findAuthMenu 2')
  }
}

const mutations = {
  SET_MENUS: (state: any, menus: any) => {
    console.log('SET_MENUS 0')
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
    console.log('SET_MENUS 1')
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
