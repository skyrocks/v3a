<template>
  <a-menu class="menu" v-model:selected-keys="selectedKeys" mode="inline" theme="dark" @click="clickMenuItem">
    <template v-for="item in menus" :key="item.menuId">
      <MenuItem :menu-info="item" />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import MenuItem from './MenuItem.vue'

export default defineComponent({
  components: { MenuItem },
  setup() {
    const router = useRouter()
    const currentRoute = useRoute()

    const state = reactive({
      selectedKeys: [currentRoute.name]
    })

    const store = useStore()
    const menus = computed(() => store.getters['menu/menus'])

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        state.selectedKeys = [currentRoute.name]
      }
    )

    // // 跟随页面路由变化，切换菜单选中状态
    // watch(
    //   () => currentRoute.fullPath,
    //   () => {
    //     if (currentRoute.name == 'login' || props.collapsed) return
    //     state.openKeys = getOpenKeys()
    //     state.selectedKeys = [currentRoute.name]
    //   }
    // )

    // 点击菜单
    const clickMenuItem = ({ key }: any) => {
      router.push({ name: key })
    }

    return {
      ...toRefs(state),
      menus,
      clickMenuItem
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 64px;
}
</style>
