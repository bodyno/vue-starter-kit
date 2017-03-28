<template>
  <div class='zen'>
    <h1>Zen page</h1>
    <button class='button' @click='fetch'>{{fetchText}}</button>
    <div v-for='item in list'>
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>

function fetchZen (store, type = 'normal') {
  return store.dispatch('FETCH_ZEN', type)
}

export default {
  name: 'zen',
  computed: {
    list () {
      return this.$store.state.zen.list
    },
    loading () {
      return this.$store.state.zen.loading
    },
    fetchText () {
      return this.loading ? 'Fetching...' : 'Fetch Zen'
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

<style lang='less'>
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
