<template>
  <div class="noteboard">
    <div class="options">
      <h1>Options</h1>
      <router-link :to="{ name: 'notebooks' }">
        <button>Go to Notebooks</button></router-link
      >
      <button @click="showmodel">Add note</button>
      <p>{{ UpdateStatus }}</p>
    </div>
    <div class="area">
      <section class="preview">
        <div v-html="notePreview"></div>
      </section>
    </div>

    <!-- modal -->

    <transition name="modal">
      <div class="modal-mask" @click="close" v-if="showModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>New Post</h3>
          </div>
          <div class="modal-body">
            <label class="form-label">
              Title
              <input v-model="title" class="form-control" />
            </label>
            <label class="form-label">
              Description
              <textarea
                v-model="description"
                rows="5"
                class="form-control"
              ></textarea>
            </label>
            <label class="form-label">
              Tags
              <textarea v-model="tags" rows="5" class="form-control"></textarea>
            </label>
          </div>
          <div class="modal-footer text-right">
            <button class="modal-default-button" @click="addnote">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import marked from "marked"
export default {
  data() {
    return {
      UpdateStatus: "",
      showModal: false,
    }
  },
  computed: {
    note() {
      return this.$store.state.note.note
    },
    notePreview() {
      return marked(this.note.noteBody || "")
    },
    title: {
      get() {
        return this.$store.state.note.addNote.title
      },
      set(value) {
        this.$store.commit("note/setantitle", value)
      },
    },
    description: {
      get() {
        return this.$store.state.note.addNote.description
      },
      set(value) {
        this.$store.commit("note/setandesc", value)
      },
    },
    tags: {
      get() {
        return this.$store.state.note.addNote.tags
      },
      set(value) {
        this.$store.commit("note/setantags", value)
      },
    },
  },
  methods: {
    close: function () {
      this.showModal = false
    },
    showmodel: function () {
      this.showModal = true
    },
    updateNote() {
      this.$store.dispatch("note/updateNote")
    },
    addnote() {
      this.$store.dispatch("note/addNote", [this.$route.params.notebookID])
      this.$store.dispatch("note/fetchNote", [this.$route.params.noteID])
      this.showModal = false
    },
  },
  watch: {
    note: {
      handler() {
        this.UpdateStatus = "Saving....."
        clearInterval(this.timer)
        this.timer = setTimeout(() => {
          this.updateNote()
          this.UpdateStatus = "Saved"
        }, 3000)
      },
      deep: true,
    },
  },
  beforeCreate() {
    this.$store.dispatch("note/fetchNote", [this.$route.params.noteID])
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 700px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}
.form-label textarea {
  width: 100%;
  height: 25px;
}
.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* modal */
.noteboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.area {
  display: flex;
}
.options {
  width: 100%;
  height: 9vh;
}
.options h1 {
  margin: auto;
}
.preview {
  width: 100%;
  height: 91vh;
  border: solid #c3aed6;
  border-radius: 5px;
  overflow-y: scroll;
}
/* .preview >>> p {
  color: #42b983;
} */
.preview::-webkit-scrollbar {
  width: 0.2em;
  border-radius: 1px;
}

.preview::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.preview::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
