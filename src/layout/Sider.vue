<template>
  <div class="sider-wrap">
    <div class="logo" :style="{ width: `${collapsed ? 80 : 200}px` }">
      <img src="~@/assets/images/logo.png" alt="" />
      <h2 v-show="!collapsed" class="title">One Piece</h2>
    </div>
    <a-menu class="menu" theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <DashboardOutlined />
        <span>工作台</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <DesktopOutlined />
            <span>Demo演示</span>
          </span>
        </template>
        <a-menu-item key="5">验证表单</a-menu-item>
        <a-menu-item key="6">学生管理</a-menu-item>
        <a-menu-item key="7">异步提交</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Vue框架</span>
          </span>
        </template>
        <a-menu-item key="8">验证表单</a-menu-item>
        <a-sub-menu key="9" title="学生管理">
          <a-menu-item key="91">报表查询</a-menu-item>
          <a-menu-item key="92">文档管理</a-menu-item>
          <a-menu-item key="93">进度管理</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="10">异步提交</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <AppstoreOutlined />
            <span>Antd组件</span>
          </span>
        </template>
        <a-menu-item key="11">验证表单</a-menu-item>
        <a-sub-menu key="12" title="学生管理">
          <a-menu-item key="13">报表查询</a-menu-item>
          <a-menu-item key="14">文档管理</a-menu-item>
          <a-menu-item key="15">进度管理</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="16">异步提交</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { DashboardOutlined, DesktopOutlined, AppstoreOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  components: {
    DashboardOutlined,
    DesktopOutlined,
    AppstoreOutlined
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1'])
    }
  }
})
</script>

<style lang="scss" scoped>
.sider-wrap {
  height: 100vh;
  overflow-y: auto;

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

  .menu {
    margin-top: 64px;
  }
}
</style>
