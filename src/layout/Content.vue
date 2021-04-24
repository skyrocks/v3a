<template> Content xxx </template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log(route)
    console.log(router)
    console.log(route.matched)
    console.log(router.getRoutes(), 'currentRoute')

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
