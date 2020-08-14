<template>
    <div class="container-view">
        <mavon-editor
            ref="md"
            v-model="value"
            @change="editorChange"
            @save="editorSave"
            @imgAdd="imgAdd"
            @imgDel="imgDel"
        ></mavon-editor>
    </div>
</template>

<script>
import { uploadImg } from '@/api/upload'
export default {
    name: 'note',
    data () {
        return {
            value: `sdasdasdasd|column1|column2|column3|
                        |-|-|-|
                        |content1|content2|content3|1. 
                        |column1|column2|column3|~^==~~下角标~~==^~
                        |-|-|-|
                        |content1|content2|content3|# ==一级标题==
                        [sadasd](asdasd)==标记==\
                        ssss
                        1. - `
        }
    },
    beforeCreate () {

    },
    created () {

    },
    methods: {
        editorChange (content, render) {
            console.log(content)
            console.log(render)
        },
        editorSave (val) {
            console.log(val)
        },
        // * 上传图片
        async imgAdd(pos, file) {
            let formdata = new FormData();
            formdata.append('file', file);
            let res = await uploadImg(formdata)
            if(res.data.code === '200'){
                this.$refs.md.$img2Url(pos, res.data.data)
            }
        },
        imgDel(pos){
            console.log(pos)
        }
    }
}
</script>
<style lang="less" scoped>
</style>
