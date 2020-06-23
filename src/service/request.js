import axios from 'axios';
// 创建一个axios实例
const request = axios.create({
  baseURL: process.env.CONSOLE,
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做某事，比如说 设置token
    // config.headers['token'] = 'token';
    // config.headers['X-Token'] = 'xxxxxxxxxxxxxxxxxxx';
    return config
  },
  error => {
    // 请求错误时做些事
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    // 如果返回的状态不是200 就主动报错
    if (res.code !== 200) {
      return Promise.reject(res.message || 'error')
    }
    return response
  },
  error => {
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

export default request
