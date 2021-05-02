<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <a-button type="primary" @click="testErrorPathRequestHandle">测试地址错误的请求</a-button>
    <a-button type="primary" @click="testErrorAuthRequestHandle">测试认证错误的请求</a-button>
    <a-button type="primary" @click="testErrorInnerRequestHandle">测试内部错误的请求</a-button>
    <a-button type="primary" @click="testSuccessRequestHandle">测试正确的请求</a-button>
    <divider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Divider, message } from 'ant-design-vue'
import { userApi } from '@/api/modules/user'
import { menuApi } from '@/api/modules/menu'

export default defineComponent({
  components: { Divider },

  setup() {
    const testErrorPathRequestHandle = () => {
      userApi.getUserPath({}).then(resp => {
        if (resp.success) {
          message.success('success')
        } else {
          message.error(`dashboard ${resp.message}`)
        }
      })
    }
    const testErrorAuthRequestHandle = () => {
      userApi.getUserAuth({}).then(resp => {
        if (resp.success) {
          message.success('success')
        } else {
          message.error(`dashboard ${resp.message}`)
        }
      })
    }
    const testErrorInnerRequestHandle = () => {
      userApi.getUserInner({}).then(resp => {
        if (resp.success) {
          message.success('success')
        } else {
          message.error(`dashboard ${resp.message}`)
        }
      })
    }
    const testSuccessRequestHandle = () => {
      menuApi.getAuthMenu().then(resp => {
        if (resp.success) {
          message.success('success')
        } else {
          message.error(`dashboard ${resp.message}`)
        }
      })
    }
    return {
      testErrorPathRequestHandle,
      testErrorAuthRequestHandle,
      testErrorInnerRequestHandle,
      testSuccessRequestHandle
    }
  }
})
</script>
