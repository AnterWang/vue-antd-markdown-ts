<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
// import { updateTheme } from '@/utils/theme';
import 'moment/locale/zh-cn';

moment.locale('en');
export default {
  name: 'App',
  data() {
    return {
      locale: zh_CN
    };
  },
  mounted() {
    // 编译主题
    // updateTheme();
  }
};
</script>

<style lang="less">
#app {
  min-height: 100%;
  width: 100%;
}
</style>
