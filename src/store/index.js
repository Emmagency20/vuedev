import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'This is some text'
  },
  mutations: {
    changeMessage (state, payload) {
      state.message = payload.message
    }
  }
});