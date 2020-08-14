import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'

import './permission' // 路由钩子
import './utils/antd-components.js' // 按需引入组件
// import './config/theme.less' // 引入主题默认
// import {initI18n} from '@/utils/i18n' // 引入语言设置

// 引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 引入粒子
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false
// const i18n = initI18n('CN', 'US')

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
