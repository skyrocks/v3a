<template>
  <div class="layout-header">
    <div class="left-options">
      <span class="menu-fold" @click="triggerHandle">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
      </span>
    </div>
    <div class="right-options">
      <span>bar</span>
      <span>{{ photoUrl }} {{ userName }}</span>
      <Dropdown>
        <a-avatar v-if="photoUrl !== ''" :src="photoUrl" :alt="userName"></a-avatar>
        <a-avatar v-else>
          {{ userName }}
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a @click.prevent="myCenterHandle"><UserOutlined /> 个人中心</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a @click.prevent="logoutHandle"><PoweroffOutlined /> 退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons-vue'
import { Avatar, Dropdown } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { confirm } from '@/plugins/index'
import { userApi } from '@/api/modules/user'

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    PoweroffOutlined,

    [Avatar.name]: Avatar,
    Dropdown
  },
  emits: ['update:collapsed'],
  setup(props, { emit }) {
    const collapsed = ref<boolean>(false)

    const triggerHandle = () => {
      collapsed.value = !collapsed.value
      emit('update:collapsed', collapsed.value)
    }

    const photoUrl = ref('')
    const store = useStore()
    const userName = computed(() => {
      const name = store.getters.user.userName
      return name && name.length > 0 ? name.substr(name.length - 1, 1) : ''
    })

    const getPhoto = () => {
      userApi.browserPhoto(store.getters.user.userId).then((resp: any) => {
        photoUrl.value = URL.createObjectURL(new Blob([resp.origin]))
      })
    }
    onMounted(getPhoto)

    const myCenterHandle = () => {
      console.log('myCenterHandle')
    }

    const router = useRouter()
    const logoutHandle = () => {
      confirm('确定要退出系统吗?', () => {
        // 增加一个中级路由页面, 避免直接使用router.push({ path: '/' }) 而出现同一个路由无法触发调整的情况
        router.push({ name: 'Logout' })
      })
    }

    return {
      photoUrl,
      userName,

      collapsed,

      triggerHandle,
      myCenterHandle,
      logoutHandle
    }
  }
})
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding: 0;
  height: $--header-height;

  .left-options {
    display: flex;
    align-items: center;

    .menu-fold {
      padding: 0 24px;
      font-size: 18px;
      transition: color 0.3s;
      cursor: pointer;
      &:hover {
        color: #1890ff;
      }
    }
  }

  .right-options {
    display: flex;
    align-items: center;

    > * {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
