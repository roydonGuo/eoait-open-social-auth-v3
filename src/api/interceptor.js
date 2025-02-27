import axios from 'axios'
import {ElMessage, ElMessageBox} from "element-plus";

// if (import.meta.env.VITE_API_BASE_URL) {
//     axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
//     axios.defaults.timeout = 20000
// }
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000 // request timeout
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // const token = getToken()
    // if (token) {
    //     config.headers.Authorization = 'Bearer ' + token
    // }

    config.headers.Authorization = 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImE4ZmNjYzUwLWM0ZjUtNDY5Ni1iMDMzLTk1NDY5MjMzZDBmYiJ9.OOQp3q2H3WpWC-eXHEiWxQ9oNP12LgHBRQcjzTgr5H_p-vow4aKINk0NgWSckbooYLQnvV1eAaCh7R-Wccm0mQ"
    config.headers.terrace = 'terrace'

    return config
}, error => {
    return Promise.reject(error);
});

let loginDialog = true

// 添加响应拦截器
instance.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code
    // 获取错误信息
    // const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    // if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    //     return res.data
    // }
    // 未认证
    if (code === 401) {
        // 展示重新登陆逻辑
        if (loginDialog) {
            loginDialog = false
            ElMessageBox.confirm('登录状态已过期，是否选择重新登录', '提示', {
                confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning'
            }).then(() => {
                location.href = '/';
            }).catch(() => {
                loginDialog = true
            });
            return Promise.reject('请重新登录。')
        }
    } else if (code === 500) {
        // ElMessage.error("系统错误")
        return Promise.reject(res.data.msg)
    } else if (code !== 200) {
        ElMessage.error("业务异常")
        return Promise.reject('error')
    } else {
        return res
    }
}, function (error) {
    return Promise.reject(error)
});

export default instance;
