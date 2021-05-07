<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>name {{ currentRoute.name }}</div>
    <div>path {{ currentRoute.path }}</div>
    <div>fullPath {{ currentRoute.fullPath }}</div>
    <div>meta {{ currentRoute.meta }}</div>
    <x-button type="warning" @click="clickHandler" :log="true">ab click</x-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const currentRoute = useRoute()

    const clickHandler = () => {
      console.log('about page')
    }
    return {
      currentRoute,
      clickHandler
    }
  }
})
</script>
