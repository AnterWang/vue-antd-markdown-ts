<template>
    <div class="common-layout">
        <div class="particles">
            <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        ></vue-particles>
        </div>
        <div class="content">
            <div class="top">
                <div class="header">
                    <img alt="logo" class="logo" src="">
                    <span class="title">jasdjasljdalsdjlaslkdaksdasdasd</span>
                </div>
                <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
            </div>
            <div class="login">
                <a-form @submit="onSubmit" :form="form">
                    <a-tabs
                        size="large"
                        :tabBarStyle="{textAlign: 'center'}"
                        style="padding: 0 2px;"
                    >
                        <a-tab-pane tab="账户密码登录" key="1">
                            <a-form-item>
                                <a-input
                                    autocomplete="autocomplete"
                                    size="large"
                                    placeholder="admin"
                                    v-decorator="['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"
                                >
                                    <a-icon slot="prefix" type="user"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-input
                                    size="large"
                                    placeholder="888888"
                                    autocomplete="autocomplete"
                                    type="password"
                                    v-decorator="['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"
                                >
                                    <a-icon slot="prefix" type="lock"/>
                                </a-input>
                            </a-form-item>
                        </a-tab-pane>
                    </a-tabs>
                    <div>
                        <router-link style="float: right" to="/dashboard/workplace">注册账户</router-link>
                        <a style="float: right">忘记密码</a>
                    </div>
                    <a-form-item>
                        <a-button
                            :loading="logging"
                            style="width: 100%;margin-top: 24px"
                            size="large"
                            htmlType="submit"
                            type="primary"
                        >登录</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import { loginByUsername } from '@/api/login'
export default {
    name: 'Login',
    data () {
        return {
            form: this.$form.createForm(this),
            logging: false,
        }
    },
    mounted () {

    },
    methods: {
        onSubmit () {
            this.logging = true
            this.form.validateFields((err, values) => {
                if (!err) {
                    // 调取登录接口
                    loginByUsername(values.userName, values.password).then(res => {
                        if (res.code == '200') {
                            this.$store.dispatch('LoginByUsername', res.data).then(() => {
                                this.$message.success('登录成功')
                                this.$router.push('/dashboard')
                                this.logging = false
                            })
                        } else {
                            this.$message.error(res.msg)
                            this.logging = false
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: #ffffff;
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 110px;
  background-size: 100%;
  position: relative;
  overflow: hidden;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
  }
}
.top {
  text-align: center;
  .header {
    height: 44px;
    line-height: 44px;
    a {
      text-decoration: none;
    }
    .logo {
      height: 44px;
      vertical-align: top;
      margin-right: 16px;
    }
    .title {
      font-size: 33px;
      color: rgba(0, 0, 0, 0.85);
      font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
    }
  }
  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 12px;
    margin-bottom: 40px;
  }
}
.login {
  width: 368px;
  margin: 0 auto;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
  @media screen and (max-width: 320px) {
    .captcha-button {
      font-size: 14px;
    }
  }
  .icon {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.45);
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
.particles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
