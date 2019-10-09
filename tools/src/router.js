import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Encode from './views/Encode.vue'
import Decode from './views/Decode.vue'

//components
import Info from './components/Information'
Vue.component('info-text', Info)


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/encode', name: 'encode', component: Encode},
    {path: '/decode', name: 'decode', component: Decode},
  ]
})
