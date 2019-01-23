import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import Map from '@/components/Map'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      meta: {
        index: 0
      }, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        index: 2
      },
      component: test
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
