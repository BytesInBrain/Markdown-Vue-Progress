<template>
  <section class="card-list">
    <div class="search-container">
      <span class="nbtitle">{{ title }}</span>
      <input class="search-input" type="text" placeholder="Search" >
    </div>
    <div class="card-container">
      <div v-for="note in allnotes" :key="note._id" class="card">
        <router-link
            :to="{
              name: 'note',
              params: {
                notebookID: notebookID,
                noteID: note._id,
              },
            }"
            ><div>
        <header class="card-header">
          <p>{{ note.createdAt }}</p>
          {{ note.title }}
        </header>
        </div></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: "All Notes",
      notebookID: "12345988945",
    }
  },
  computed: {
    allnotes() {
      return this.$store.state.note.allnotes
    },
  },
  methods: {},
  created() {
    this.title = this.$store.state.notebook.notebooks.find(
      (notebook) => notebook._id === this.$route.params.notebookID,
    ).title
  },
  mounted() {
    this.$store.dispatch("note/fetchNotes", {
      notebookID: this.$route.params.notebookID,
    })
    this.notebookID = this.$route.params.notebookID
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap");
body {
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: white;
  font-family: "DM Mono", monospace;
  float: left;
}

a {
  text-decoration: none;
}
.search-container {
  width: 100%;
  height: 10vh;
  border-right:2px solid black;
  border-bottom:1px solid black;
}
.search-input {
  width:150px;
  height:20px;
  border: 2px solid #ccc;
  border-radius: 8px;
}
.card-container {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height:90vh;
  width: 350px;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  border-right:2px solid black;
  padding-top:5px;

}
.card-container::-webkit-scrollbar {
  width: 0.2em;
  border-radius: 1px;
}

/* .card-container::-webkit-scrollbar-track {
} */

.card-container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
.card-list {
  height:100vh;
}

.card {
  height: 100px;
  width: 95%;
  border-radius: 16px;
  background: #eeeeee;
  box-shadow: -0.1rem 0 0.5rem #132743;
  border:1px solid black;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 0;
  scroll-snap-align: start;
  clear: both;
  align-self: center;
  margin-left:5px;
}

.card:focus-within ~ .card,
.card:hover ~ .card {
  transform: translateY(10px);
}
.card:first-child:hover ~ .card {
  transform: translateY(50px);
}
.card:hover:not(:first-child) {
  transform: translateY(-2.5rem);
}
.card:first-child {
  margin-bottom: -50px;
}
.card:not(:first-child) {
  margin-bottom: -50px;
}
.card:last-child:hover {
  transform: translateY(-1rem);
}
.card-header {
  margin-bottom: auto;
}

.card-header p {
  font-size: 14px;
  margin: 0 0 1rem;
  color: #7a7a8c;
}

.card-header h2 {
  font-size: 20px;
  margin: 0.25rem 0 auto;
  text-decoration: none;
  color: black;
  border: 0;
  display: inline-block;
  cursor: pointer;
}

.card-header h2:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.nbtitle{
  font-size:25px;
  text-align: center;
}
</style>
