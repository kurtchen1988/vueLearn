<template>
    <div>
      <h2>{{msg}}</h2><hr/>
      <h3>{{$store.state.a.count}}-{{count}}</h3>
      <p>
        <button @click="$store.commit('add', 10)">+</button>
        <!--固定写法：$store.commit('add') -->
        <!--<button @click="$store.commit('reduce')">-</button>-->
        <button @click="reduce">-</button>
      </p>
      <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
      </p>
    </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default {
        data (){
          return {
            msg:'Hello Vuex'
          }
        },

/**
*        computed: mapState({
*          // 利用mapState编写
*          count:state=>state.count
*        }),
**/
        computed: {
        //...mapState(['count'])
        //count(){
        //  return this.$store.getters.count;
        //}
        //...mapGetters(['count'])
        count(){
          return this.$store.state.a.count;
        }
      },

    /** computed: mapState{
     *    count:function(state){
     *        return state.count;
     *    }
     *   }
     *
     */
        methods:{
          ...mapMutations(['add','reduce']),
          ...mapActions(['addAction','reduceAction'])
    },
        store
    }
</script>

<style scoped>

</style>
