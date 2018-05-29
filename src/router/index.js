import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/container/index/index'
import Header from '@/components/container/header/header'
import Detail from '@/components/container/details/detail'
import film from '@/components/container/film/film'

Vue.use(Router)

export default new Router({
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
      path: '/detail',
      name: 'Detail',
      component: Detail,
      props : true
    },
    {
      path: '/film',
      name: 'film',
      component: film,
      props : true
    },
  ]
})
