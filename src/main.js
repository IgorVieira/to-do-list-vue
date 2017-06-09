import VueFire from 'vuefire'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueResource)
Vue.http.options.root = 'http://pokeapi.co/api'


Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
