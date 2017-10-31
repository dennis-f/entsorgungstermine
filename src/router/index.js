import Vue from 'vue'
import Router from 'vue-router'
import TerminFinder from '@/components/TerminFinder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entsorgungstermin Finder',
      component: TerminFinder
    }
  ]
})
