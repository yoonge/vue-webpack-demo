import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  currentIndex: 0
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

// if (module.hot) {
//   module.hot.accept(['./actions', './mutations'], () => {
//     const newActions = require('./actions').default
//     const newMutations = require('./mutations').default
//     store.hotUpdate({
//       actions: newActions,
//       mutations: newMutations
//     })
//   })
// }

export default store
