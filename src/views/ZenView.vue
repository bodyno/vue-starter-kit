<template>
  <div class='zen'>
    <h1>Zen page</h1>
    <button class='button' @click='fetch'>{{fetchText}}</button>
    <spinner :show='loading'></spinner>
    <div v-for='item in zen'>
      {{item}}
    </div>
  </div>
</template>

<script>
  import Spinner from 'components/Spinner.vue'

  function fetchZen (store, type = 'normal') {
    return store.dispatch('FETCH_ZEN', type)
  }

  export default {
    components: {Spinner},
    name: 'zen',
    computed: {
      zen () {
        return this.$store.state.zen
      },
      loading () {
        return this.$store.state.loading
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
