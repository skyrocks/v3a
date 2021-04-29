import { authApi } from '@/api/modules/auth'
import { User } from '../type'
import { removeToken } from '@/utils/token'

interface StateType {
  user: User | undefined
}

const state = (): StateType => ({
  user: undefined
})

const actions = {
  getProfile: async (context: any) => {
    console.log('getProfile 0')
    await authApi.profile().then(resp => {
      if (resp.success) {
        console.log('getProfile 1')
        context.commit('getProfile', resp.data)
      }
    })
    console.log('getProfile 2')
  },

  logout: async (context: any) => {
    console.log('logout 0')
    await authApi.logout(context.state.user.loginName).then(resp => {
      console.log('logout 1')
      if (resp.success) {
        console.log('logout 2')
        context.commit('logout')
      }
    })
    console.log('logout 3')
  }
}

const mutations = {
  getProfile: (state: StateType, payload: User) => {
    state.user = payload
  },

  logout: (state: StateType) => {
    console.log('logout mutations 0')
    state.user = undefined
    removeToken()
    console.log('logout mutations 1')
  }
}

const getters = {
  user: (state: StateType) => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
