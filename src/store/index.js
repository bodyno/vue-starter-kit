import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    core: {
      name: 'core'
    }
  }
})

export default store

export function registerModule (name, newStore) {
  if (store._modules[name]) return
  store.registerModule(name, newStore)
}
