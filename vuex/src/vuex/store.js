import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  // 状态值
  count:3
}

const mutations={
  // 改变状态的方法
  add(state, n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
}

const getters={
  count:function (state) {
    return state.count+=10;
  }
}

const actions={
  addAction(context){
    context.commit('add',10);
    setTimeout(()=>{context.commit('reduce')},5000);
    console.log('我比reduce先执行了');
  },
  reduceAction({commit}){
    commit('reduce');
  }
}

const moduleA={
  state, mutations, getters,actions
}

const moduleB={
  state, mutations, getters,actions
}

export default new Vuex.Store({
  modules:{a:moduleA}
})
