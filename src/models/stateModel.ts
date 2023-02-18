import { CalendarEventModel } from "./eventsModelModel";

export interface propActionStateModel {
  commit: (
    name: string,
    payload?: CalendarEventModel,
    { root }?: { root: boolean }
  ) => void;
}
