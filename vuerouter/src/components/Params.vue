<template>
    <div>
    <h2>{{msg}}</h2>
    <p>newId:{{ $route.params.newsId }}</p>
    <p>newTitle:{{ $route.params.newsTitle }}</p>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            msg:'params pages'
          }
        },
        beforeRouteEnter:(to, from, next) => {
          console.log("准备进入params路由模板");
          next();
        },
        beforeRouteLeave: (to, from, next) => {
          console.log("准备离开params路由模板");
          next();
        }
    }
</script>

<style scoped>

</style>
