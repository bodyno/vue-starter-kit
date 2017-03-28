import axios from 'axios'

export default {
  state: {
    list: [],
    loading: false
  },

  actions: {
    FETCH_ZEN: ({commit, state}, type) => {
      if (state.loading) return
      if (type === 'first' && state.list[0]) {
        return Promise.resolve(state.list[0])
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
    SET_ZEN: (state, item) => {
      state.list.push(item)
    },
    LOADING_ZEN: (state, loadingState) => {
      state.loading = loadingState
    }
  }
}

function getZen () {
  return axios.get('https://api.github.com/zen')
}