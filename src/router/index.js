import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)



// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }


export default new VueRouter({
  routes: [
    { 
      name:"index",
      path:"/",
      redirect:"/home",
      component: () => import("@/view/index"),
      children:[
        {
          name:"home",
          path:"/home",
          component: () => import("@/view/home"),
        },
        {
          name:"fenlei",
          path:"/fenlei",
          component: () => import("@/view/fenlei"),
        },
        {
          name:"xingqiu",
          path:"/xingqiu",
          component: () => import("@/view/xingqiu"),
        },
        {
          name:"cart",
          path:"/cart",
          component: () => import("@/view/cart"),
          meta:{
            needLogin:true,
          }
        },
        {
          name:"user",
          path:"/user",
          component: () => import("@/view/user"),
        },
      ]
    },

    {
      path:"/register",
      name:"regsiter",
      component: () => import("@/components/register")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/login")
    },
    {
      path: "/pdsno",
      name: "pdsno",
      component: () => import("@/components/pdsno")
    },
  ]
})
