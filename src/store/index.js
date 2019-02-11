import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: {}
  },
  plugins: [createPersistedState()],
  getters: {
    getIdByName(state, name) {
      return state.profiles[name];
    }
  },
  mutations: {
    setProfiles(state, data) {
      state.profiles = data;
    }
  }
})