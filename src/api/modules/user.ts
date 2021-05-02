import { get } from '../request'

const ns = '/users' // namespace

export const userApi = {
  getUserAuth: (params: {}) => {
    return get({ url: `${ns}/100/105`, params })
  },
  getUserPath: (params: {}) => {
    return get({ url: `${ns}err/0/5`, params })
  },
  getUserInner: (params: {}) => {
    return get({ url: `${ns}/0/5`, params })
  },

  browserPhoto: (userId: string) => {
    return get({
      url: `${ns}/photo/${userId}`,
      responseType: 'blob'
    })
  }
}
