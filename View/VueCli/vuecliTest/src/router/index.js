import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from "../components/Hi"
import Hi1 from "../components/Hi1"
import Hi2 from "../components/Hi2"
import hh2 from "../components/hh2"
import hh1 from "../components/hh1"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      //component: HelloWorld
      components:{
        //多个的时候需要写复数
        default:HelloWorld,
        left:hh1,
        right:hh2

      }
    },
    {
      path:'/Hi',

      component:Hi,
      children:[
        {path:'/',name:'Hello/Hi', component:Hi},
        {path:'hi1', name:'hi1', component:Hi1},
        {path:'hi2', name:'hi2', component:Hi2},
      ]
    },
    {
      path: '/jspang',
      name: 'Hello',
      //component: HelloWorld
      components: {
        //多个的时候需要写复数
        default: HelloWorld,
        left: hh2,
        right: hh1

      }
    }
  ]
})
