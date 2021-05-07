import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd, setupCustomComponents, installProviders, setupDirectives } from '@/plugins'

const app = createApp(App)

// 注册全局常用的ant-design-vue组件
setupAntd(app)

// 注册自定义组件
setupCustomComponents(app)

// 安装全局方法
installProviders(app)

// 注册全局自定义指令
setupDirectives(app)

app.use(store).use(router)

app.mount('#app')
