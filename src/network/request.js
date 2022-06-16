import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://netease-cloud-music-api-six-navy.vercel.app',
        // baseURL: 'http://localhost:3000',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        if (config.meth === 'post' && !(config.data instanceof FormData)) {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) /*这里是，后端要求传数组的时候做的设置，以前出过错*/
        }

        return config
    }, error => {
        console.log(error)
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        // console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}