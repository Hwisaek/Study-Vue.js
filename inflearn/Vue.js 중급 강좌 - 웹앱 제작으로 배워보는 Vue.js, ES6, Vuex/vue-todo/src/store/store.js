import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import todoApp from './modules/todoApp.js'

Vue.use(Vuex)


export const store = new Vuex.Store({
    modules: {
        todoApp
    },
    // getters,
    // mutations, // this.$store.commit(함수명, 인자1, 인자2, ....) 으로 호출
    // actions: { // 비동기 처리
    // }
});