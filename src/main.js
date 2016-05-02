import Vue from 'vue'
import VueRouter from 'vue-router'
import VueApp from 'src/App.vue'
import Routers from 'src/view/routers.js'

const App = Vue.extend(VueApp)

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  linkActiveClass: 'cur'
})

Routers(router)

router.start(App, '#app')
