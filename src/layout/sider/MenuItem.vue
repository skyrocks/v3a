<template>
  <template v-if="menuInfo.hidden == 0">
    <a-sub-menu v-if="menuInfo.children.length > 0" :key="menuInfo.menuId">
      <template #title>
        <span>
          <al-icon :type="menuInfo.iconClass" v-if="menuInfo.iconClass" />
          <span>{{ menuInfo.menuName }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.menuId">
        <template v-if="item.children.length === 0 && menuInfo.hidden == 0">
          <a-menu-item :key="item.menuId">
            <span>{{ item.menuName }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item :key="item.menuId" :menu-info="item" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuInfo.menuId">
      <al-icon :type="menuInfo.iconClass" v-if="menuInfo.iconClass" />
      <span>{{ menuInfo.menuName }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
