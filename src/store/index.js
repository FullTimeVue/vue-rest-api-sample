import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // initial state
  },
  actions,
  mutations
})

export default store
