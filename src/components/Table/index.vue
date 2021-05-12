<template>
  <a-table v-bind="$attrs" :pagination="false"></a-table>
  <a-row style="margin-top: 16px">
    <a-col :span="20">
      <a-pagination
        show-size-changer
        :total="total"
        :show-total="(total, range) => `${range[0]}-${range[1]} | 共 ${total} 条`"
        v-model:pageSize="state.pageSize"
        v-model:current="state.currentPage"
        :page-size-options="state.pageSizeOptions"
        @showSizeChange="onShowSizeChange"
      />
    </a-col>
    <a-col :span="4" style="text-align: right">
      <a-button shape="circle">
        <template #icon><DownloadOutlined /></template>
      </a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { Pagination } from 'ant-design-vue'
import { DownloadOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: { [Pagination.name]: Pagination, DownloadOutlined },
  props: {
    total: {
      type: Number as PropType<number>,
      default: 0
    }
  },
  setup() {
    const state = reactive({
      currentPage: 0,
      pageSize: 50,
      pageSizeOptions: ['5', '10', '20', '30', '40', '50']
    })

    const onShowSizeChange = (current: number, pageSize: number) => {
      state.currentPage = current
      state.pageSize = pageSize
    }

    return {
      state,

      onShowSizeChange
    }
  }
})
</script>

<style lang="scss" scoped></style>
