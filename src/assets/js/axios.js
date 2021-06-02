import axios from 'axios'
import { BASEURL, BASEURL2, BASEURL3 } from './config.js'
import { Message } from 'element-ui'
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
  // 判断是否存在token，如果存在的话，则每个http header都加上token
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    config.headers.mark = 'bigscreen'
    return config
  },
  error => {
    return Promise.reject(error)
  })

export const myAxios = (method, url, params = {}) => {
  let request = method != 'get' ? {
    method: method,
    url: BASEURL + url,
    data: params
  } : {
    methods: method,
    url: BASEURL + url,
    params
  }
  if (method == 'formData') {
    request = {
      method: 'post',
      url: BASEURL + url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params,
      transformRequest: [
        function (data) {
          let ret = ''
          for (const it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          ret = ret.substring(0, ret.lastIndexOf('&'))
          return ret
        }
      ]
    }
  }
  return new Promise((resolve, reject) => {
    axios(request)
      .then(function (response) {
        if (response.data.code == 200) {
          resolve(response.data)
        } else if (response.data.code == 403) {
          sessionStorage.clear()
          location.href = '/#/login'
        } else {
          Message({
            message: response.data.msg || response.data.message,
            type: 'error'
          })
          reject(response.data)
          // resolve(response.data)
        }
      })
      .catch(function (err) {
        Message({
          message: '获取信息失败',
          type: 'error'
        })
        reject(err)
      })
  })
}
