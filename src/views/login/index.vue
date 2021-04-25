<template>
  <div class="bg">
    <a-row>
      <a-col :span="6" :offset="14">
        <div class="login-container">
          <div class="login-type-container">
            <a-button type="link" size="large" @click="state.loginType = 0">
              <span :class="`login-type ${state.loginType === 0 ? 'active' : ''}`">密码登录</span>
            </a-button>
            <a-button type="link" size="large" @click="state.loginType = 1">
              <span :class="`login-type ${state.loginType === 1 ? 'active' : ''}`">短信登录</span>
            </a-button>
          </div>
          <div v-show="state.loginType === 0" class="login-pwd-container">
            <a-form layout="vertical">
              <a-form-item>
                <a-input v-model:value="state.form.loginName" size="large" placeholder="请输入账号">
                  <template #prefix>
                    <UserOutlined :style="{ color: '#00000073' }" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input v-model:value="state.form.password" size="large" placeholder="请输入密码" type="password">
                  <template #prefix>
                    <LockOutlined :style="{ color: '#00000073' }" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="state.form.captcha"
                  size="large"
                  placeholder="请输入验证码"
                  style="width: 65%"
                  @keyup.enter="handlePwdLogin"
                >
                  <template #prefix>
                    <CodeOutlined :style="{ color: '#00000073' }" />
                  </template>
                </a-input>
                <div style="width: 34%; display: inline-block">
                  <a-tooltip title="点击刷新" placement="bottom">
                    <a-image
                      class="captcha-img"
                      :preview="false"
                      :src="state.captchaUrl"
                      @click="handleRefreshCaptcha"
                      fallback="data:image/png;base64,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"
                    >
                    </a-image>
                  </a-tooltip>
                </div>
              </a-form-item>
              <a-button
                type="primary"
                size="large"
                block
                class="btn-login"
                :disabled="disabledLoginPwdBtn"
                :loading="state.loading"
                @click="handlePwdLogin"
              >
                <span class="submit-text">登录</span>
              </a-button>
            </a-form>
            <!-- <div class="tbar">
              <el-button type="text"><span class="forget-pwd">忘记密码</span></el-button>
            </div> -->
          </div>
          <div v-show="state.loginType === 1" class="login-sms-container">
            <a-form layout="vertical">
              <a-form-item>
                <a-input
                  v-model:value="state.sms.cellphone"
                  size="large"
                  placeholder="请输入手机号码"
                  @keydown="handleInputCellphone($event)"
                >
                  <template #prefix>
                    <PhoneOutlined :style="{ color: '#00000073' }" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="state.sms.code"
                  size="large"
                  placeholder="请输入短信验证码"
                  @keyup.enter="handleSmsLogin"
                >
                  <template #prefix>
                    <CodeOutlined :style="{ color: '#00000073' }" />
                  </template>
                  <template #suffix>
                    <a-button type="link" size="small" :disabled="disabledSendSmsCodeBtn" @click="handleSendSmsCode">
                      <span :class="`get-smsCode ${state.waiting ? 'waiting' : ''}`">
                        {{ state.waiting ? state.waitText : '发送验证码' }}
                      </span>
                    </a-button>
                  </template>
                </a-input>
              </a-form-item>
              <a-button
                type="primary"
                size="large"
                block
                class="btn-login"
                :disabled="disabledLoginSmsBtn"
                :loading="state.loading"
                @click="handleSmsLogin"
              >
                <span class="submit-text">登录</span>
              </a-button>
            </a-form>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { API_BASE } from '@/utils/env'
import { message, Tooltip, Image } from 'ant-design-vue'
import { setToken } from '@/utils/token'
import { v4 as uuidv4 } from 'uuid'
import { UserOutlined, LockOutlined, PhoneOutlined, CodeOutlined } from '@ant-design/icons-vue'
import { authApi } from '@/api/modules/auth'

export default defineComponent({
  components: { UserOutlined, LockOutlined, PhoneOutlined, CodeOutlined, [Tooltip.name]: Tooltip, [Image.name]: Image },
  setup() {
    const state = reactive({
      loginType: 0,
      form: {
        loginName: '',
        password: '',
        captcha: '',
        captchaId: ''
      },
      captchaUrl: '',
      sms: {
        id: '',
        code: '',
        cellphone: ''
      },
      loading: false,
      waiting: false,
      waitText: ''
    })

    const disabledLoginPwdBtn = computed(
      () => !(state.form.loginName !== '' && state.form.password !== '' && state.form.captcha !== '')
    )
    const disabledLoginSmsBtn = computed(() => !(state.sms.cellphone !== '' && state.sms.code !== ''))
    const disabledSendSmsCodeBtn = computed(() => !(state.sms.cellphone !== '' && !state.waiting))

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const handleRefreshCaptcha = () => {
      state.form.captchaId = uuidv4()
      state.captchaUrl = `${API_BASE}/auth/captcha/${state.form.captchaId}`
    }
    const handlePwdLogin = () => {
      if (state.form.loginName !== '' && state.form.password != '' && state.form.captcha != '') {
        state.loading = true
        authApi.login(state.form).then(loginCallback)
      }
    }

    const handleSmsLogin = () => {
      if (state.sms.cellphone !== '' && state.sms.code != '' && state.sms.id != '') {
        if (state.sms.cellphone.length !== 11) {
          message.error('手机号码不合法')
        } else {
          state.loading = true
          authApi.loginSms(state.sms).then(loginCallback)
        }
      }
    }
    const handleSendSmsCode = () => {
      if (state.sms.cellphone !== '') {
        if (state.sms.cellphone.length !== 11) {
          message.error('手机号码不合法')
        } else {
          state.sms.id = uuidv4()
          authApi.sendSmsCode(state.sms.id, state.sms.cellphone).then((resp: any) => {
            if (!resp.success) {
              message.error(resp.message)
            } else {
              waitSmsCode()
            }
          })
        }
      }
    }

    const loginCallback = async (resp: any) => {
      state.loading = false
      if (resp.success) {
        setToken(resp.data)
        await store.dispatch('auth/getProfile')
        router.push({ path: (route.query.redirect || '/') as string })
      } else {
        message.error(resp.message)
      }
    }

    const stateTime = reactive<{ intervalId: any; lastTime: number }>({ intervalId: undefined, lastTime: 60 })
    const waitSmsCode = () => {
      state.waiting = true
      state.waitText = '60s后获取'
      stateTime.intervalId = setInterval(() => {
        state.waitText = `${stateTime.lastTime}s后获取`
        stateTime.lastTime--
        if (stateTime.lastTime <= 0) {
          clearInterval(stateTime.intervalId) // 清除计时器
          stateTime.intervalId = undefined // 设置为null
          stateTime.lastTime = 60
          state.waiting = false
        }
      }, 1000)
    }

    const handleInputCellphone = () => {
      //区分不同浏览器,不同操作系统,大键盘小键盘
      //console.log(e)
    }

    onMounted(handleRefreshCaptcha)

    return {
      state,

      disabledLoginPwdBtn,
      disabledLoginSmsBtn,
      disabledSendSmsCodeBtn,

      handleRefreshCaptcha,
      handlePwdLogin,
      handleSmsLogin,
      handleSendSmsCode,

      handleInputCellphone
    }
  }
})
</script>
<style lang="scss" scoped>
.bg {
  min-height: 100%;
  background-image: url('../../assets/images/login-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.login-container {
  background-color: #ffffff66;
  border-radius: 1rem;
  height: 42rem;
  margin-top: 40%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  .login-type-container {
    padding: 1.5rem;
    .login-type {
      font-size: $--size-font-larger;
      color: $--color-text-base;
      opacity: 0.7;
      &.active {
        border-bottom: 1px solid $--color-text-master;
        padding-bottom: 1rem;
        font-weight: bold;
        opacity: 1;
      }
    }
  }

  .login-pwd-container,
  .login-sms-container {
    padding: 1.5rem;
    .get-smsCode {
      padding-right: 1rem;
      &.waiting {
        color: $--color-text-secondary;
      }
    }
    .submit-text {
      font-size: $--size-font-x-larger;
    }
    .tbar {
      text-align: right;
      .forget-pwd {
        color: $--color-text-base;
      }
    }
    .btn-login:disabled {
      background-color: $--color-disabled-primary;
      border-color: $--color-disabled-primary;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      color: #fff;
    }
  }
  ::v-global(.captcha-img) {
    padding: 2px 1px 2px 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;
  }
}
</style>
