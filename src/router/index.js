import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Zen from './zen'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      Home,
      Zen,
    ]
  })
}