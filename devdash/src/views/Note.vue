<template>
  <div class="container">
    <NavBar />
    <NoteList />
    <Noteboard />
  </div>
</template>

<script>
import NavBar from "../components/Navbar"
import NoteList from "../components/NoteList"
import Noteboard from "../components/Noteboard"
export default {
  components: {
    NavBar,
    NoteList,
    Noteboard,
  },
  mounted() {},
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
