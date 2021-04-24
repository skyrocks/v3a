<template>
  <menu-unfold-outlined v-if="collapsed" class="trigger" @click="triggerHandle" />
  <menu-fold-outlined v-else class="trigger" @click="triggerHandle" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { Breadcrumb } from 'ant-design-vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    // Breadcrumb,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  emits: ['update:collapsed'],
  setup(props, { emit }) {
    const collapsed = ref<boolean>(false)

    const triggerHandle = () => {
      collapsed.value = !collapsed.value
      emit('update:collapsed', collapsed.value)
    }

    return {
      collapsed,
      triggerHandle
    }
  }
})
</script>

<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
}
</style>
