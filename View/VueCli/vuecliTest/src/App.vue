<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <router-link :to="{name:'hi1', params:{username:'JSPang', id: '888'}}">Hi页面1</router-link>|
      <router-link to="/hi/hi2">Hi页面2</router-link>
    </div>

    <p>{{ $route.name }}</p>

    <router-view></router-view>
    <router-view name="left" style="float:left;width: 50%;height: 300px;background-color: #ccc;"></router-view>
    <router-view name="right" style="float:left;width: 50%;height: 300px;background-color: #c0c;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
