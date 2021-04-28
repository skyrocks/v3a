import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from '@/plugins'
import { registerIcon } from '@/components/Icon'

const app = createApp(App)

// 注册全局常用的ant-design-vue组件
setupAntd(app)

//注册图标组件
registerIcon(app)

app.use(store).use(router)

app.mount('#app')
