import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mockData',
      name: 'mockData',
      component: () => import('./views/mockData.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('./views/tree.vue')
    },
    {
      path: '/sync',
      name: 'sync',
      component: () => import('./views/sync/parent')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('./views/v-model')
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('./views/sort')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('./views/slot')
    },
  ]
})
