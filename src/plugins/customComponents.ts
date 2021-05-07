import type { App } from 'vue'
import XButton from '@/components/Button/index.vue'
import AlIcon from '@/components/Icon/AlIcon'

export function setupCustomComponents(app: App) {
  app.component('alIcon', AlIcon)
  app.component('XButton', XButton)
}
