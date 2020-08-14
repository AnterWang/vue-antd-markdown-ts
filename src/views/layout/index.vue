<template>
  <a-layout style="min-height: 100vh;">
    <!-- 左侧 -->
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      :class="['side_bar_'+theme]"
      class="left-sider"
      :width="130"
    >
      <side-bar :theme="theme" :collapsed="collapsed"/>
      <collapse class="collapsed" :collapsed="collapsed" @trigger="trigger"></collapse>
      <user class="user-center" :collapsed="collapsed"></user>
    </a-layout-sider>
    <!-- 中心 -->
    <a-layout>
      <!-- <a-layout-header>
        <header-bar :collapsed="collapsed" @trigger="trigger"/>
      </a-layout-header> -->
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
    <!-- 设置 -->
    <!-- <drawer v-model="showSetting" placement="right">
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'"/>
      </div>
      <setting />
    </drawer>-->
  </a-layout>
</template>
<script>
// import headerBar from './components/header_bar'
import sideBar from './components/side_bar'
import collapse from './components/collapse'
import user from './components/user'
// import Drawer from './components/setting/drawer/index'
// import Setting from './components/setting/setting'
export default {
  components: {
    sideBar,
    collapse,
    user,
    // headerBar,
    // Setting,
    // Drawer
  },
  data () {
    return {
      collapsed: true,
      theme: 'light',
      // showSetting: false
    }
  },
  methods: {
    trigger () {
      this.collapsed = !this.collapsed
    },
    changeLeftBar (val) {
      if (val) this.theme = 'dark'
      else this.theme = 'light'
    }
  }
}
</script>
<style lang="less">
@shadow-color: rgba(0, 0, 0, 0.4);
@primary-color: rgba(0, 0, 0, 0.4);
@base-bg-color: #ffffff;
#app {
  min-height: 100%;
  width: 100%;
}
.setting {
  background-color: var(--primary);
  color: @base-bg-color;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px @shadow-color;
}
.left-sider{
  background: #ffffff !important;
  .user-center{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .collapsed{
    position: absolute;
    bottom: 70px;
    left: 0;
  }
}
</style>
