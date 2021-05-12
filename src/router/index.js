import Vue from 'vue'
import Router from 'vue-router'
import DofEdm from './../pages/vue/DofEdm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/edm'
    },
    {
      path: '/edm',
      name: 'dofEdm',
      component: DofEdm
    }
  ]
})
