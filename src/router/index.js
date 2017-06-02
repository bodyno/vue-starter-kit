import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home.vue')
const zen = () => import('../views/zen.vue')

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {path: '/', component: home},
      {path: '/zen', component: zen},
    ]
  })
}