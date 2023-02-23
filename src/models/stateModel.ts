import { CalendarEventModel } from "./eventsModelModel";

export interface propActionStateModel {
  commit: (name: string, payload?: CalendarEventModel) => void;
}
