import axios from 'axios'

const state = {
  papers: [],
  notes: [],
  links: []
}

const mutations = {
  addPapers (state, information) {
    // state.papers.push(information.paper)
    // state.notes.push(information.notes)
  }
}

const actions = {
  syncInfor: ({commit}, account) => {
    if (account) {
      axios.get('../back/get.php', {
        params: {
          account: account
        }
      })
      .then(function (response) {
        let data = response.data
        let papers = data.papers.split(';')
        let notes = data.notes.split(';')
        let links = []
        papers.splice(-1, 1)
        notes.splice(-1, 1)
        papers.forEach((ele, i) => {
          links[i] = 'https://www.inhave.cc/paper/back/upload/' + ele
        })
        state.papers = papers
        state.notes = notes
        state.links = links
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}

const getters = {
  information: (state) => {
    let temp = []
    state.papers.forEach(function (element, index) {
      temp.push({
        paper: state.papers[index],
        link: state.links[index],
        note: state.notes[index]
      })
    }, this)
    return temp
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
