import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import config from './../config.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: {},
    backendUrl: config.backendUrl,
    mediumUrl: config.mediumUrl,
    mediumRss: config.mediumRss,
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