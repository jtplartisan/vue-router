import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router: routes,
  render: h => h(App),
}).$mount('#app')
