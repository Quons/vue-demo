import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueDemo from '@/components/Demo'
import BandDemo from '@/components/Band'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-demo',
      name: 'vue-demo',
      component: VueDemo
    },
    {
      path: '/band-demo',
      name: 'brand-demo',
      component: BandDemo
    }
  ]
})
