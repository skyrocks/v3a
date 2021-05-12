<template>
  <!-- 组件需要有个根节点包裹, 否则页面Transition动画效果会出错, 
  Component inside <Transition> renders non-element root node that cannot be animated. -->
  <div>
    <x-table
      :columns="columns"
      :row-key="record => record.userId"
      :data-source="state.dataSource.list"
      :total="state.total"
    ></x-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { userApi } from '@/api/modules/user'

const columns = [
  {
    title: 'Name',
    dataIndex: 'userName',
    sorter: true,
    width: '20%',
    slots: { customRender: 'name' }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'UserCode',
    dataIndex: 'userCode'
  }
]

export default defineComponent({
  setup() {
    // const { data: dataSource, run, loading, current, pageSize } = usePagination<APIResult>(
    //   queryData,
    //   {
    //     formatResult: res => res.results,
    //     pagination: {
    //       currentKey: 'page',
    //       pageSizeKey: 'results',
    //     },
    //   },
    // );
    const state = reactive({
      dataSource: [],
      total: 0
    })

    const getUser = () => {
      userApi.getUser({}).then(resp => {
        if (resp.success) {
          console.log(resp.data)
          state.dataSource = resp.data
          state.total = resp.data.total
        }
      })
    }

    onMounted(() => {
      getUser()
    })

    return {
      state,
      columns
    }
  }
})
</script>

<style lang="scss" scoped></style>
