/* eslint-disable */

import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store, //注册上vuex的store:所有组件对象都多一个属性 $store
  components: { App },
  template: "<App/>"
})
