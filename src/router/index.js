import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/container/index/index'
import Header from '@/components/container/header/header'
import Detail from '@/components/container/details/detail'
import film from '@/components/container/film/film'
import login from '@/components/container/user/login'
import my from '@/components/container/user/my'
import shopping from '@/components/container/shopping/shopping'
import card from '@/components/container/card/card'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props : true,
      meta : {
        login : true
      }
    },
    {
      path: '/film',
      name: 'film',
      component: film,
      props : true
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
  ]
})

router.beforeEach((to, from, next)=>{
  let flag = to.matched.some((item)=>{
    return item.meta.login
  })
  if(flag){
    if(sessionStorage.getItem("username")){
      next();
    }else {
      router.push({name : 'login'})
    }
  }else{
    next();
  }
})

export default router;