import Vue from 'vue'
import Vuex from 'vuex'

import userModule from '../module/user'
import paperModule from '../module/paper'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userState: userModule,
    paperModule: paperModule
  }
})
