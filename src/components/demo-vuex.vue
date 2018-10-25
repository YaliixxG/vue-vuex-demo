<template>
<div class="hello">
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">如果奇数就增加</button>
    <button @click="incrementAsync">2秒异步增加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex"
export default {
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    ...mapState(["count"]),
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapGetters(["evenOrOdd"])
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT")
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT")
    // },
    ...mapMutations(["increment", "decrement"]),
    //只有奇数才加一
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd") //触发store中对应的actions
    // },
    // //过两秒的异步加一
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync")
    // }

    ...mapActions(["incrementIfOdd", "incrementAsync"])
  }
}
</script>




