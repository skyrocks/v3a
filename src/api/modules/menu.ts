import Abstract from '../abstract'

class Menu extends Abstract {
  getAuthMenu() {
    return this.get({ url: '/menus/current' })
  }
}

// 单列模式返回对象
let instance
const menuApi = (() => {
  if (instance) return instance
  instance = new Menu()
  return instance
})()

export { menuApi }
