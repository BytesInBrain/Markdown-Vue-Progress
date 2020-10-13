import axios from "axios"

const state = {
  notebooks: [],
}

const getters = {
  allNotenotebooks: state => state.notebooks,
}

const actions = {
  async fetchNotebooks({ commit }) {
    const response = await axios.get("http://localhost:5000/api/v1/notebook")
    commit("setNotes", response.data.data)
  },
}
const mutations = {
  setNotes: (state, notebooks) => (state.notebooks = notebooks),
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
