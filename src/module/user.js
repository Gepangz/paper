import axios from 'axios'

const state = {
  logState: true,
  account: '',
  password: ''
}

const mutations = {
  userIn (state, information) {
    state.account = information.account
    state.password = information.password
  }
}

const actions = {
  logIn: ({commit}) => {
    state.logState = false
    axios({
      url: '../back/logIn.php',
      method: 'post',
      data: {
        account: state.account,
        password: state.password
      },
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (res) {
      if (res.data) {
        state.logState = false
      }
    })
  }
}

const getters = {
  account: () => {
    return state.account
  },
  password: () => {

  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
