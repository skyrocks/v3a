import Abstract from '../abstract'

class Auth extends Abstract {
  login(data: any) {
    return this.post({ url: '/auth/login', data })
  }
  profile() {
    return this.get({ url: '/auth/profile' })
  }
  sendSmsCode(id: string, cellphone: string) {
    return this.post({ url: '/auth/sms/code', data: { id, cellphone } })
  }
  loginSms(data: any) {
    return this.post({ url: '/auth/sms/login', data })
  }
  logout(loginName: string) {
    return this.post({ url: `/auth/logout/${loginName}` })
  }
}

// 单列模式返回对象
let instance
const authApi = (() => {
  if (instance) return instance
  instance = new Auth()
  return instance
})()

export { authApi }
