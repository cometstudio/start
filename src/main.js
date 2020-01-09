// VueJS
import Vue from 'vue'
Vue.config.productionTip = false

/**
 * Element UI Components Lib
 * https://element.eleme.io
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// Moment Lib
import moment from 'moment'
Vue.prototype.$moment = moment

// Router Lib
import router from './router'
// Store Lib
import store from './store'
// Internationalisation Lib
import i18n from './i18n'

// App Component
import App from './App.vue'
// Layout Components
require('./layouts')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
