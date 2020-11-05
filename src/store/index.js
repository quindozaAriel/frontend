import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import SecureLs from "secure-ls"
var ls = new SecureLs({
  encodingType: "aes",
  encryptionSecret: "fdtp",
  isCompression: true
})

import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    login,
  },
  getters:{
   
  },
  plugins:[createPersistedState({
    storage:{
      getItem:(key)=>ls.get(key),
      setItem:(key, value) => ls.set(key,value),
      removeItem:(key) => ls.remove(key)
    }
  })]
})
