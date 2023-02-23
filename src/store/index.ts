import Vue from "vue";
import Vuex from "vuex";
import alertStore from "./alert";
import calendarStore from "./calendar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alertStore,
    calendarStore,
  },
});
