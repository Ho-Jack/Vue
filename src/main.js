import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IconSvg from './components/iconSvg'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component('icon-svg', IconSvg)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons/svg', false, /\.svg$/)
requireAll(req)
