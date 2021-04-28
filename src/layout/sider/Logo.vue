<template>
  <div class="logo" :style="{ width: `${collapsed ? 80 : 200}px` }">
    <img src="~@/assets/images/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">Vue3 Antd</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.logo {
  position: fixed;
  z-index: 1;
  display: flex;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  align-items: center;
  white-space: nowrap;
  background-color: #001529;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    margin-bottom: 0;
    color: white;
  }
}
</style>
