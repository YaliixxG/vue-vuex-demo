import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    //包含了过个直接更新state函数的对象
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
    //当读取属性值时自动调用并返回属性值
    evenOrOdd(state) {
      return state.count % 2 === 0 ? "偶数" : "奇数"
    }
  },
  actions: {
    //包含了多个对应事件回调函数的对象
    incrementIfOdd({ commit, state }) {
      //带条件的action
      if (state.count % 2 === 1) {
        commit("increment")
      }
    },
    incrementAsync({ commit }) {
      //异步的action
      setInterval(() => {
        commit("decrement")
      }, 2000)
    }
  }
})

export default store //用export default 封装代码，让外部可以引用