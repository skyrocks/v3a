import Abstract from '../abstract'

interface Pwd {
  loginName: string
  password: string
  captcha: string
  captchaId: string
}
interface Sms {
  id: string
  code?: string
  cellphone: string
}

class Auth extends Abstract {
  login(data: Pwd) {
    return this.post({ url: '/auth/login', data })
  }
  profile() {
    return this.get({ url: '/auth/profile' })
  }
  sendSmsCode(data: Sms) {
    return this.post({ url: '/auth/sms/code', data })
  }
  loginSms(data: Sms) {
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
