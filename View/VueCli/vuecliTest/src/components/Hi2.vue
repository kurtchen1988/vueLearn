<template>
<div>
  <h2>{{msg}}</h2>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: 'hi2',
    data () {
      return {
        msg: 'I am Hi2 page.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
