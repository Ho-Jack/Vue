import { createRouter, createWebHashHistory } from 'vue-router'

// 1、定义路由组件（以下是从其他文件导入的路由组件）
import Home from './views/Home.vue'


// 2、定义路由，让路由映射到对应的组件中
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/slot',
    component: ()=>import('./views/slot/parent.vue'),
  },
  {
    path: '/myHook',
    component: ()=>import('./views/myHook/parent.vue'),
  },
  {
    path: '/script-setup',
    component: ()=>import('./views/script-setup/parent.vue'),
  },
]
// 3、创建路由实例，把定义的路由挂载到路由实例中
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// 导出路由实例
export default router
