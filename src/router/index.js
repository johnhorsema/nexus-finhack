//index.js
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import FAQ from '../pages/FAQ'
import Settings from '../pages/Settings'
Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})