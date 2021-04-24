<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <divider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Divider } from 'ant-design-vue'

export default defineComponent({
  components: { Divider }
})
</script>
