<template>
  <Layout class="layout">
    <Sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutSider :collapsed="collapsed" />
    </Sider>
    <Layout>
      <Header class="header">
        <LayoutHeader v-model:collapsed="collapsed" />
      </Header>
      <Content class="content">
        <LayoutContent />
      </Content>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Layout } from 'ant-design-vue'
import LayoutSider from './Sider.vue'
import LayoutHeader from './Header.vue'
import LayoutContent from './Content.vue'

const { Header, Sider, Content } = Layout

export default defineComponent({
  components: {
    Layout,
    Header,
    Sider,
    Content,

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
  .content {
    flex: none;
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
</style>
