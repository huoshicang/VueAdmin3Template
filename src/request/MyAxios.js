import axios from "axios";

axios.defaults.baseURL = "http://47.115.206.215:3000";
axios.defaults.withCredentials = true;
axios.defaults.headers

const MyGet = (url) => axios.get(url)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

const MyPost = (url, data) => axios.post(url, data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   if (localStorage.getItem('cookie')) {
//     config.headers["cooike"] = localStorage.getItem('cookie');
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export {MyGet, MyPost}
