<template>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <transition name="zoom-fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
