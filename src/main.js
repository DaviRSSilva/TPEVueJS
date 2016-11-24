import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './router-config'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
});


new Vue({  
  router,
  el: '#app',
  render: h => h(App)
})
