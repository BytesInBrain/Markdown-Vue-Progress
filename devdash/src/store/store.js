import Vue from "vue";
import Vuex from "vuex";
import notebook from "./modules/notebooks";
import note from "./modules/note";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    notebook,
    note,
  },
});
