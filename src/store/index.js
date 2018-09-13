import Vuex from 'Vuex'
import token from './module/token'

var createStore = () =>
  new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      token
    }
  })
export default createStore
