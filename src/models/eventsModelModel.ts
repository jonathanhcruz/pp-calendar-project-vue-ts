export interface CalendarEventModel {
  name: string;
  start: string; // "2023-02-09 09:00"
  end: string; // "2023-02-09 11:00"
}

export interface eventNativeModel {
  date: string;
  day: number;
  future: boolean;
  hasDay: boolean;
  hasTime: boolean;
  hour: number;
  minute: number;
  month: number;
  past: boolean;
  present: boolean;
  time: string;
  weekday: number;
  year: number;
}
