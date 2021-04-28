import type { App } from 'vue'
import AlIcon from './AlIcon'

export function registerIcon(app: App<Element>) {
  app.component('al-icon', AlIcon)
}
