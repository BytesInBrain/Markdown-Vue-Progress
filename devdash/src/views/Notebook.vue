<template>
  <div class="container">
    <NavBar />
    <NoteList />
    <router-link :to="{ name: 'notebooks' }"
      ><button>Go to Notebooks</button></router-link
    >
  </div>
</template>

<script>
import NavBar from "../components/Navbar"
import NoteList from "../components/NoteList"
export default {
  components: {
    NavBar,
    NoteList,
  },
  mounted() {},
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
