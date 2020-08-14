<template>
    <div class="switch">
        <a-switch
            :default-checked="false"
            checked-children="展开"
            un-checked-children="收起"
            @change="change"
        />
    </div>
</template>

<script>
export default {
    props: {
        collapsed: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
        }
    },

    methods: {
        change () {
            this.$emit('trigger')
        }
    }
}
</script>

<style lang="less" scoped>
.switch {
  width: 100%;
  text-align: center;
  padding: 15px 0;
}
</style>