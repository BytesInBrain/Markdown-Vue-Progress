<template>
  <div class="container">
    <NavBar />
    <NotebookList />
  </div>
</template>

<script>
import NavBar from "../components/Navbar";
import NotebookList from "../components/NotebookList";
export default {
  components: {
    NavBar,
    NotebookList,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
