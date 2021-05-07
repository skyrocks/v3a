<template>
  <antd-button
    ref="btn"
    v-bind="$attrs"
    :type="buttonTypes.includes(type) ? type : 'default'"
    :class="[`ant-btn-${type}`]"
  >
    <template v-for="(value, key) in $slots">
      <slot :name="key"></slot>
    </template>
  </antd-button>
</template>

<script lang="ts">
import { Button } from 'ant-design-vue'
import { PropType, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { ButtonType } from 'ant-design-vue/lib/button/buttonTypes'
import { logAction } from '@/utils/log'

const buttonTypes = ['default', 'primary', 'ghost', 'dashed', 'danger', 'link']

export default defineComponent({
  name: 'AButton',
  components: { 'antd-button': Button }, // 换个名称，避免成死递归组件
  props: {
    type: {
      type: String as PropType<ButtonType | 'warning' | 'success'>,
      default: 'default'
    },
    log: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const btn = ref()
    let $el: any

    const clickHandler = () => {
      if (props.log) {
        const text = btn.value.$el.innerText
        logAction(text)
      }
    }

    onMounted(() => {
      if (props.log) {
        $el = btn.value.$el
        $el.addEventListener('click', clickHandler)
      }
    })
    onUnmounted(() => {
      if (props.log) {
        $el.removeEventListener('click', clickHandler)
      }
    })

    return {
      btn,
      buttonTypes,
      clickHandler
    }
  }
})
</script>

<style lang="less" scoped>
@import './styles/success';
</style>

<style lang="less" scoped>
@import './styles/warning';
</style>
