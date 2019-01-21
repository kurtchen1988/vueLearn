import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from "@/components/Hi1"
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  // 有两种模式，一种是history，就是常见的普通路由。还有一种是hash，就是后面带井号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias:'/home1'
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      //beforeEnter: (to,from,next) => {
        //console.log(to);
        //console.log(from);
        //next();
        // 这里的next是允许跳转的开关，通过里面的参数可以设置是否允许跳转
        // next({path:'/'});
      //}
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/jspang'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
