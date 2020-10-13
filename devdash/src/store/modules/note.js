import axios from "axios"

const state = {
  addNote: {
    title: "Enter Title Here:",
    description: "Desscription",
    tags: "tag1,tag2,tag3",
  },
  allnotes: [],
  note: [],
}

const getters = {
  allNotes: state => state.notes,
  getNote: state => state.allnotes,
}

const actions = {
  async fetchNotes({ commit }, notebookID) {
    const response = await axios.get(
      `http://localhost:5000/api/v1/note/notes/${notebookID.notebookID}`,
    )
    // console.log(response.data);
    commit("setallNotes", response.data.data)
  },
  async fetchNote({ commit }, noteID) {
    const response = await axios.get(
      `http://localhost:5000/api/v1/note/${noteID[0]}`,
    )
    commit("setNote", response.data.data)
  },
  async updateNote({ state }) {
    try {
      await axios.put(
        `http://localhost:5000/api/v1/note/${state.note._id}`,
        state.note,
      )
    } catch (err) {
      console.log(err.message)
    }
  },
  async addNote({ state, commit }, notebookID) {
    let tags = state.addNote.tags.split(/[ ,]+/)
    let body = {
      title: state.addNote.title,
      description: state.addNote.description,
      tags: tags,
      notebookID: notebookID.notebookID,
    }
    let note = ""
    try {
      await axios
        .post(`http://localhost:5000/api/v1/note/notes/${notebookID[0]}`, body)
        .then(res => {
          note = res.data
        })
    } catch (err) {
      console.log(err)
    }
    if (!(note === "")) {
      commit("pushNote", note.data)
    }
  },
}

const mutations = {
  setNote: (state, note) => (state.note = note),
  pushNote: (state, note) => {
    state.allnotes.push(note)
  },
  setallNotes: (state, allnotes) => {
    state.allnotes = allnotes
  },
  setantitle: (state, val) => {
    state.addNote.title = val
  },
  setandesc: (state, val) => {
    state.addNote.description = val
  },
  setantags: (state, val) => {
    state.addNote.tags = val
  },
  null: () => console.log("null"),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
