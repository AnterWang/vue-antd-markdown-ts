<template>
  <a-row class="header_bar">
    <a-col :xl="1" :lg="2" :md="3" :sm="3">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
    </a-col>
    <a-col :xl="23" :lg="22" :md="21" :sm="21">
      <a-row type="flex" justify="end">
        <a-col :xl="2" :lg="3" :md="5" :sm="10">
          <a-dropdown>
            <div class="menu-icon">
              <span>
                <span class="user_name">你好，{{ user.real_name }}</span>
              </span>
            </div>
            <a-menu slot="overlay" @click="dropClick">
              <a-menu-item key="account">
                <span rel="noopener noreferrer">
                  <a-icon type="user"/>&nbsp;&nbsp;个人中心
                </span>
              </a-menu-item>
              <a-menu-item key="setting">
                <span rel="noopener noreferrer">
                  <a-icon type="setting"/>&nbsp;&nbsp;设置中心
                </span>
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="logout">
                <span rel="noopener noreferrer">
                  <a-icon type="logout"/>&nbsp;&nbsp;退出
                </span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>
        <!-- 语言切换 -->
        <!-- <a-col :xl="2" :lg="2" :md="3" :sm="4">
          <a-dropdown>
            <div class="menu-icon">
              <span>
                <a-icon type="global" class="menu-icon-item"/>
                {{ locale==='CN'?'简体中文':'English' }}
              </span>
            </div>
            <a-menu slot="overlay" @click="changeLang">
              <a-menu-item key="zh-cn">
                <span rel="noopener noreferrer">zh 简体中文</span>
              </a-menu-item>
              <a-menu-item key="en">
                <span rel="noopener noreferrer">en English</span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>-->
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: { collapsed: { type: Boolean } },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['user']),
    // locale(){
    //   return this.$i18n.locale
    // }
  },
  methods: {
    changeCollapsed () { this.$emit('trigger') },
    // 切换语言
    // changeLang () {
    //   console.log(this.$i18n.locale)
    //   let locale = this.$i18n.locale
    //   locale === 'CN' ? this.$i18n.locale = 'US' : this.$i18n.locale = 'CN'
    // },
    dropClick ({ key }) {
      switch (key) {
        case 'info':
          this.$router.push('/account/index')
          break
        case 'logout':
          this.$store.dispatch('Logout')
          this.$router.push('./login')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="less">
.header_bar {
  background: #fff;
  padding: 0;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .menu-icon {
    text-align: center;
    .menu-icon-item {
      color: var(--PC);
      font-size: 20px;
    }
    .user_name {
      font-weight: bold;
    }
  }
  .menu-icon:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.w_theme_select {
  width: 130px;
  height: 170px;
  padding: 8px 0 8px 12px;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  .w_theme_select_title {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 22px;
  }
  .w_theme_color_block {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
}
.ant-dropdown:before {
  //为了解决 无法点击自定义的东西
  z-index: -1;
}
</style>