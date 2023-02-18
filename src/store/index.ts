import Vue from "vue";
import Vuex from "vuex";
import alertStore from "./alert";
import eventsStore from "./events";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alertStore,
    eventsStore,
  },
});
