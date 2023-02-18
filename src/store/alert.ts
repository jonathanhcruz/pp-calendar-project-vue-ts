import { alertModel } from "@/models";

export default {
  namespaced: true,
  state: {
    title: "",
    message: "",
    type: "",
    show: false,
  },

  getters: {
    alertState: (state: alertModel): alertModel => state,
  },

  Mutations: {
    setAlert(
      { alertState: state }: { alertState: alertModel },
      payload: alertModel
    ): void {
      state.title = payload.title;
      state.message = payload.message;
      state.type = payload.type;
      state.show = payload.show;
    },

    clearAlert({ alertState: state }: { alertState: alertModel }): void {
      state.title = "";
      state.message = "";
      state.type = "";
      state.show = false;
    },
  },
};
