import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Messanger from './views/Messanger.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/messanger', name: 'about', component: Messanger},
    {path: '/about', name: 'about', component: About}
  ]
})
