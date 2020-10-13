<template>
  <div class="container">
    <div class="options">
      <h1>Notebooks</h1>
    </div>
    <div class="options2">
      <input type="search" placeholder="Search" class="searchbar" />
    <button>Add Notebook</button>
    </div>
    
    <div class="notebooks-container">
      <div class="cards-container">
        <div class="add-card">
          <svg
            id="_x31__px"
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.02 21h-6.52c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v6.06c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.06c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h6.52c.276 0 .5.224.5.5s-.224.5-.5.5z"
            />
            <path
              d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"
            />
            <path
              d="m9.5 13h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"
            />
            <path
              d="m8.5 5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z"
            />
            <path
              d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z"
            />
            <path
              d="m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z"
            />
            <path
              d="m20.5 18h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"
            />
          </svg>
          <span>Add Notebook</span>
        </div>

        <div v-for="notebook in notebooks" :key="notebook.id">
          <router-link
            :to="{ name: 'notebook', params: { notebookID: notebook._id } }"
          >
          <div class="card">
            <h1 class="nbtitle">
              {{ notebook.title }}
            </h1>
            <p class="nbcretime">{{ getDate(notebook.createdAt) }}</p>
            <p class="nbdesc">{{ notebook.description }}</p>
            <div class="nbtagsC">
            <div  v-for="tag in notebook.tags" :key="tag" >
            <span class="nbtags">{{ tag }}</span>
            </div></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  computed: mapState({
    notebooks: (state) => state.notebook.notebooks,
  }),
  methods: {
    ...mapActions(["fetchNotebooks"]),
    getDate:function(str){
      var date = new Date(str)
      return date.toUTCString()
          }
  },
  mounted() {
    this.$store.dispatch("notebook/fetchNotebooks")
  },
}
</script>

<style scoped>
.container {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.searchbar {
  width: 175px;
  height:30px;
  border: 2px solid #ccc;
  border-radius: 8px;
  position: relative;
  align-self:center;
  left:30px;

}
.options {
  background-color:#dddddd;
  height: 8vh;
  width: 100%;
  display:flex;
}
.options2{
  display:flex;
  width:100%;
  height:6vh;
  background-color: #f3f3f3;
}
.options2 button{
  width:150px;
  height:20px;
  position: relative;
  left:75%;
  align-self:center;
}
.options h1 {
  margin: auto;
}
.notebooks-container {
  width: 100%;
  height: 100%;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.add-card {
  width: 230px;
  height: 330px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.add-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.add-card svg {
  width: 70px;
  height: 70px;
  margin-top: 60px;
  margin-bottom: 40px;
}
.card {
  width: 230px;
  height: 330px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
a {  text-decoration: none;}
.nbtitle{
  position: relative;
  top:30px;
  font-size:25px;
  color:#373a40;
}
.nbcretime{
  font-size:10px;
   position: relative;
  top:30px;
  color:#373a40;
}
.nbdesc{
  text-align: center;
   position: relative;
  top:100px;
  color:#373a40;
}
.nbtagsC{
  background-color: #eeeeee;
  display: flex;
  flex-wrap: wrap;
  width:200px;
   position: relative;
  top:170px;
  height:50px;
  color:#373a40;
  border-radius:10px;
}
.nbtags{
  font-size:13px;
  border:1px solid black;
  position: relative;
  top:3px;
  margin:5px;
  color:#373a40;
  border-radius:10px;
  padding: 2px;
}
.nbtitle:hover,
.nbcretime:hover,
.nbdesc:hover,
.nbtags:hover{
  color:#637373;
}
</style>