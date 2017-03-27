import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomeView = () => System.import('../views/HomeView.vue')
const ZenView = () => System.import('../views/ZenView.vue')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/zen', component: ZenView }
  ]
})
