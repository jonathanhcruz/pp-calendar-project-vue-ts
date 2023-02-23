import { CalendarEventModel, propActionStateModel } from "@/models";
import { selectLocal } from "@/data";

export default {
  namespaced: true,
  state: {
    local: selectLocal(),
    events: [
      {
        id: 1,
        title: "Event 2",
        start: "2023-02-22 08:00",
        end: "2023-02-23 10:00",
        class: "work",
        backgound: true,
      },
    ],
  },

  getters: {
    eventsState: ({
      events,
    }: {
      events: CalendarEventModel[];
    }): CalendarEventModel[] => events,

    localeState: ({ local }: { local: string }): string => local,
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
