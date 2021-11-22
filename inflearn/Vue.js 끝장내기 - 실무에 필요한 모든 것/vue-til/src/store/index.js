import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
  },
  getters: {
    isLogined(state) {
      return state.email !== '';
    },
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    clearEmail(state) {
      state.email = '';
    },
  },
});
