<template>
  <div class="sider-wrap">
    <Logo :collapsed="collapsed" />
    <Menu />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  components: { Logo, Menu },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.sider-wrap {
  height: 100vh;
  overflow-y: auto;
}
</style>
