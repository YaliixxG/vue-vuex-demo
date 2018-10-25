# Vuex

在vue-cli中的应用实例，现在除了vue-cli3.0了。(●—●)

#### vue 应用程序开发时的状态管理模式

- state，驱动应用的数据源
- view，以声明方式将 state 映射到视图
- actions，响应在 view 上的用户输入导致的状态变化

## 安装

    npm install vuex --save

## 引入

    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

## State

Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。每个应用将仅仅包含一个 store 实例。

根实例注册 store,子组件可以通过 this.$store 访问到。

## Getter

可以认为是 store 的计算属性。getter 的返回值会根据它的依赖被缓存起来，只有当它的依赖值发生了改变才会被重新计算。

`mapGetters` 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

## Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。(非常类似于事件)

##### 一条重要的原则就是要记住 mutation 必须是同步函数。

在组件中：this.$store.commit('xxxx)

## Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

在组件中：this.$store.dispatch('xxxx)

## Module

在大型项目中，为了防止变得臃肿

    const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
    }

    const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
    }

    const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
    })

    store.state.a // -> moduleA 的状态
    store.state.b // -> moduleB 的状态