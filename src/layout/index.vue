<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutSider :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <LayoutHeader v-model:collapsed="collapsed" />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <LayoutContent />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import LayoutSider from './sider/index.vue'
import LayoutHeader from './Header.vue'
import LayoutContent from './Content.vue'

export default defineComponent({
  components: {
    LayoutSider,
    LayoutHeader,
    LayoutContent
  },
  setup() {
    return {
      collapsed: ref<boolean>(false)
    }
  }
})
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  .ant-layout {
    overflow: hidden;
  }

  .header {
    background: #fff;
    padding: 0;
  }
  .layout-content {
    flex: none;
    margin: $--header-content-space $--sider-content-space;
    padding: 24px;
    background: #fff;
    min-height: 280px;
    height: $--content-height;
    overflow: auto;
  }
}
</style>
