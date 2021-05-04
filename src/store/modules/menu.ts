import { menuApi } from '@/api/modules/menu'
import { Menu } from '../type'

interface StateType {
  menus: Menu[]
  menuIndex: {
    // 以路menuId键值
    [key: string]: Menu
  }
}

const state: StateType = {
  menus: [],
  menuIndex: {}
}

const actions = {
  findAuthMenu: async ({ commit }: any) => {
    await menuApi.getAuthMenu().then(resp => {
      if (resp.success) {
        commit('SET_MENUS', resp.data)
      }
    })
  }
}

const mutations = {
  SET_MENUS: (state: StateType, payload: Menu[]) => {
    state.menus = payload
    state.menus.unshift({
      menuId: 'dashboard',
      menuName: '工作台',
      path: 'dashboard',
      component: 'dashboard',
      parentId: '',
      iconClass: 'iconzhuye',
      hidden: 0,
      funcKeys: 'add',
      children: []
    })
    state.menus.forEach(menu => {
      state.menuIndex[menu.menuId] = menu
    })
  }
}

const getters = {
  menus: (state: StateType) => state.menus,
  menuIndex: (state: StateType) => state.menuIndex
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
