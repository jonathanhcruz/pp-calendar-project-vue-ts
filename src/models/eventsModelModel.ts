export interface CalendarEventModel {
  id: number;
  start: string; // "2018-11-20 12:00";
  end: string; // "2018-11-20 12:00";
  title: string;
  class?: string;
  background?: boolean;
  content?: string;
  repeat?: {
    weekdays?: number[]; // You can repeat on multiple days of the week.
    every?: string;
  };
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
