import { ObjectDirective } from 'vue'
import { hasPermission } from '@/utils/permission'

export const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    if (binding.value == undefined) return

    const val = binding.value
    console.log(typeof val)
    let { action, effect } = { action: '', effect: '' }
    if (typeof val === 'string') {
      action = val
    } else {
      action = val.action
      effect = val.effect
    }

    // 如果action不传，则认为不需要授权认证
    if (action == undefined) {
      return
    }
    if (!hasPermission(action)) {
      if (effect == 'disabled') {
        el.disabled = true
        el.setAttribute('title', '没有权限')
      } else {
        el.remove()
      }
    }
  }
}
