import Vue from 'vue'
import Vuex from 'vuex'
import zen from './zen'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    zen
  }
})

export default store