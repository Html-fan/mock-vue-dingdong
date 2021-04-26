// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import './vant/vant'
import './rem/rem'
import "./masonry/masonry"
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  
  console.log(config);
  return config;
}, function (error) {
  return Promise.reject(error);
});


//添加响应拦截
axios.interceptors.response.use(
  response=>{
    console.log(response);
    if (response.data.status == 200){
      router.push({
        path:"/login",
        query:{
          redirect: location.hostname
        }
      })
      
       
      
    }
    return response
  },
   error=>{
     return Promise.reject(error.response.data);
   }
)

import { Toast } from 'vant';
Vue.use(Toast);
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin){
    if (window.localStorage.getItem("token")) {
      next()
    }else{
      Toast("请先登录")
      setTimeout(() => {
        next({
          name: "login",
        })
      }, 2000)
    }
  }else{
    next()
  }
  
})