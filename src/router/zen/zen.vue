<template>
  <div class='zen'>
    <h1>Zen page</h1>
    <button class='button' @click='fetch'>{{fetchText}}</button>
    <div v-for='item in zen.list'>
      <div>{{item}}</div>
    </div>
    <spinner :show='zen.loading'></spinner>
  </div>
</template>

<script>

import Spinner from 'components/Spinner.vue'
import {mapState} from 'vuex'

function fetchZen (store, type = 'normal') {
  return store.dispatch('FETCH_ZEN', type)
}

export default {
  components: {Spinner},
  name: 'zen',
  computed: {
    ...mapState(['zen']),
    fetchText () {
      return this.zen.loading ? 'Fetching...' : 'Fetch Zen'
    }
  },
  preFetch: fetchZen,
  beforeMount () {
    fetchZen(this.$store, 'first')
  },
  methods: {
    fetch () {
      fetchZen(this.$store)
    }
  }
}
</script>

<style lang='less' scoped>
.zen {
  text-align: center;
}
.button {
  color: #333;
  background: #ddd;
  border: none;
  width: 200px;
  height: 40px;
  cursor: pointer;
}
</style>
