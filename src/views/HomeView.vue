<template>
  <div class="home">
    <div class="container">
      <!-- TODO: create to pop up to create a new event -->
      <CalendarWeek
        :events="eventsCalendar"
        @createEventInTime="createEventInTime"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarWeek } from "@/components";
import { Getter, Action } from "vuex-class";
import { CalendarEventModel, eventNativeModel } from "@/models";

@Component({
  components: {
    CalendarWeek,
  },
})
export default class HomeView extends Vue {
  @Getter("eventsState", { namespace: "eventsStore" })
  eventsCalendar!: CalendarEventModel;

  @Action("createNewEvent", { namespace: "eventsStore" })
  createNewEvent!: (event: CalendarEventModel) => void;

  createEventInTime(event: eventNativeModel) {
    const startDate = `${event.date} ${event.time}`;
    const endDate = `${event.date} ${event.time}`;

    this.createNewEvent({
      name: "This is a new event",
      start: startDate,
      end: endDate,
    });
  }
}
</script>
