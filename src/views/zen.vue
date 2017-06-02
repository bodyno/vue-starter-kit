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

export default {
  title () {
    return this.zen.list[0]
  },
  components: {Spinner},
  computed: {
    ...mapState(['zen']),
    fetchText () {
      return this.zen.loading ? 'Fetching...' : 'Fetch Zen'
    }
  },
  asyncData ({store}) {
    return store.dispatch('FETCH_ZEN', 'first')
  },
  beforeMount () {
    this.$store.dispatch('FETCH_ZEN', 'first').then(response => {
      this.$setTitle(response)
    })
  },
  methods: {
    fetch () {
      this.$store.dispatch('FETCH_ZEN', 'normal')
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
