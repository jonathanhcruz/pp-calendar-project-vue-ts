import { CalendarEventModel, propActionStateModel } from "@/models";

export default {
  namespaced: true,
  state: {
    events: [
      {
        name: "Weekly Meeting",
        start: "2023-02-11 01:00",
        end: "2023-02-12 05:00",
      },
    ],
  },

  getters: {
    eventsState: ({
      events,
    }: {
      events: CalendarEventModel[];
    }): CalendarEventModel[] => events,
  },

  mutations: {
    PRINT_DATA(): void {
      console.log("printData");
    },
    ADD_NEW_EVENT(
      state: { events: CalendarEventModel[] },
      payload: CalendarEventModel
    ): void {
      state.events = [...state.events, payload];
    },

    CLEAN_EVENTS(state: { events: CalendarEventModel[] }): void {
      state.events = [];
    },
  },

  actions: {
    createNewEvent(
      { commit }: propActionStateModel,
      payload: CalendarEventModel
    ): void {
      commit("ADD_NEW_EVENT", payload);
    },
  },
};
