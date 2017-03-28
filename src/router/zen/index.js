import {registerModule} from 'store/index'
import nowStore from './stores/zen'

export default {
  path: '/zen',
  component: () => System.import('./components/zen.vue'),
  beforeEnter (to, from, next) {
    registerModule('zen', nowStore)
    next()
  }
}