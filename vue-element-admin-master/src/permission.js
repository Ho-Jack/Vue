import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // 禁用小圆圈

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    /*  有token的情况 */
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // 通过getinfo确定用户是否已获得其权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // 由于roles等信息放在
      if (hasRoles) {
        //   debugger
        next()
      } else {
        try {
          // 在判断没有hasRoles的情况下，再次获取用户信息
          // 注意:角色必须是对象数组！例如:["admin"]或["Developer","Editor"]
          const { roles } = await store.dispatch('user/getInfo')

          // 基于角色生成可访问路由映射
          const accessRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )
          //   debugger
          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method 确保 addRoutes已经加载完
          // set the replace: true, 这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有token的情况*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly 如果没携带token 在白名单中直接进入
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
