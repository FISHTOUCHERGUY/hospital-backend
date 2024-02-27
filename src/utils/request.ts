//对于axios函数库进行二次封装
//目的：利用aixos请求 响应拦截器---统一处理错误
//请求拦截器：请求头中携带公共参数(如token)
//响应拦截器简化服务器响应数据 处理http网络错误

import axios from "axios";
// import { error } from "console";
// import { config } from "process";

//利用axios.create方法创建一个axios实例，设置基础路径，超时时间
const request = axios.create({
  baseURL: "/api", //请求的基础路径
  timeout: 10000,
});


//请求拦截器
request.interceptors.request.use((config) => {
  //config：请求拦截器回调注入的对象（配置对象），header携带公共参数

  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    //处理http网络错误

    return Promise.reject(new Error(error.message))
  }
);

//对外暴露axios

export default request;