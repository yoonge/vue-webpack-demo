import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from 'src/App.vue'
import Routers from 'src/view/routers.js'

const VueApp = Vue.extend(App)

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  hashbang: true,
  linkActiveClass: 'cur'
})

Routers(router)

router.start(VueApp, '#app')
