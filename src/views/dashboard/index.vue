<template>
  <div>
    <a-button type="primary" v-permission="{ action: 'add', effect: 'd' }">Primary</a-button>
    <a-button type="primary" @click="testErrorPathRequestHandle">测试地址错误的请求</a-button>
    <a-button type="primary" @click="testErrorAuthRequestHandle">测试认证错误的请求</a-button>
    <a-button type="primary" @click="testErrorInnerRequestHandle">测试内部错误的请求</a-button>
    <a-button type="primary" v-permission="'add'" @click="testSuccessRequestHandle">测试正确的请求</a-button>
    <x-button type="success" @click="testXButtonHandler">自定义组件</x-button>
    <divider />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject } from 'vue'
import { Divider } from 'ant-design-vue'
// import { userApi } from '@/api/modules/user'
// import { menuApi } from '@/api/modules/menu'
import { log } from '@/utils'

export default defineComponent({
  components: { Divider },

  setup() {
    const { proxy } = getCurrentInstance() as any

    const hasPermission = inject('$hasPermission') as any

    const testErrorPathRequestHandle = () => {
      console.log(proxy.$hasPermission('add'))
      console.log(proxy.$hasPermission('add', 'system'))

      console.log('inject', hasPermission('add'))
      console.log('inject', hasPermission('add', 'system'))
      /*
      userApi.getUserPath({}).then(resp => {
        if (resp.success) {
          message.success('success')
        } else {
          message.error(`dashboard ${resp.message}`)
        }
      })
      */
    }
    const testErrorAuthRequestHandle = () => {
      // userApi.getUserAuth({}).then(resp => {
      //   if (resp.success) {
      //     message.success('success')
      //   } else {
      //     message.error(`dashboard ${resp.message}`)
      //   }
      // })
    }
    const testErrorInnerRequestHandle = () => {
      // userApi.getUserInner({}).then(resp => {
      //   if (resp.success) {
      //     message.success('success')
      //   } else {
      //     message.error(`dashboard ${resp.message}`)
      //   }
      // })
    }

    const testSuccessRequestHandle = () => {
      log.action('测试正确的请求')
      // menuApi.getAuthMenu().then(resp => {
      //   if (resp.success) {
      //     message.success('success')
      //   } else {
      //     message.error(`dashboard ${resp.message}`)
      //   }
      // })
    }

    const testXButtonHandler = () => {
      console.log('testXButtonHandler')
    }

    return {
      testErrorPathRequestHandle,
      testErrorAuthRequestHandle,
      testErrorInnerRequestHandle,
      testSuccessRequestHandle,
      testXButtonHandler
    }
  }
})
</script>
