import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from '@/plugins'

const app = createApp(App)

// 注册全局常用的ant-design-vue组件
setupAntd(app)

app.use(store).use(router)

app.mount('#app')
