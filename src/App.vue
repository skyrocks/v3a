<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default defineComponent({
  components: { [ConfigProvider.name]: ConfigProvider },
  setup() {
    return {
      zhCN
    }
  }
})
</script>
