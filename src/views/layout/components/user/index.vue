<template>
    <div class="user">
        <a-popover v-model="visible" trigger="click" placement="rightTop">
            <a-menu slot="content" mode="vertical" style="border-right:0;width:200px">
                <a-menu-item key="1">
                    <a-icon type="mail"/> 个人中心
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="calendar"/> 退出登录
                </a-menu-item>
            </a-menu>
            <a-tooltip placement="rightTop">
                <template slot="title">
                    <span>账户</span>
                </template>
                <img
                    class="img"
                    src="http://hh-oss-picture.miyapay.com/hhimage/qr-code/1597377562319"
                >
            </a-tooltip>
        </a-popover>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        collapsed: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            visible: false
        }
    },

    methods: {

    }
}
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  padding: 15px;
  text-align: center;
  border-top: 1px solid rgba(0,0,0,0.1);
}
.img {
  width: 40px;
  height: 40px;
  background-size: 100%;
  border-radius: 50%;
}
</style>