import Vue from "vue"
import Router from "vue-router"
import Dashboard from "../views/Dashboard"
import Notebook from "../views/Notebook"
import Note from "../views/Note"
Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/notebooks",
    },
    {
      path: "/notebooks",
      name: "notebooks",
      component: Dashboard,
    },
    {
      path: "/:notebookID/note/:noteID",
      name: "note",
      component: Note,
    },
    {
      path: "/notebook/:notebookID",
      name: "notebook",
      component: Notebook,
    },
    // {
    //   path: "/words/new",
    //   name: "new-word",
    //   component: New,
    // },
    // {
    //   path: "/words/:id",
    //   name: "show",
    //   component: Show,
    // },
    // {
    //   path: "/words/:id/edit",
    //   name: "edit",
    //   component: Edit,
    // },
    // {
    //   path: "/test",
    //   name: "test",
    //   component: Test,
    // },
  ],
})
