import axios from 'axios'

export function uploadImg (formdata) {
    return axios({
        url: '/ops/upload-oss-image',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
    })
}