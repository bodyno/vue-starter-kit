import Vue from 'vue'
import Vuex from 'vuex'
import { getZen } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    zen: [],
    loading: false
  },

  actions: {
    FETCH_ZEN: ({commit, state}, type) => {
      if (state.loading) return
      if (type === 'first' && state.zen[0]) {
        return Promise.resolve(state.zen[0])
      } else {
        commit('LOADING_ZEN', true)
        return getZen().then(({data}) => {
          commit('LOADING_ZEN', false)
          commit('SET_ZEN', data)
        })
      }
    }
  },

  mutations: {
    SET_ZEN: (state, zen) => {
      state.zen.push(zen)
    },
    LOADING_ZEN: (state, loadingState) => {
      state.loading = loadingState
    }
  }
})

export default store
