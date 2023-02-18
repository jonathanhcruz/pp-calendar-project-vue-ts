<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          @click:event="editEvent"
          @click:time="createEventInTime"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { formatDates } from "@/utils";
import { CalendarEventModel } from "@/models";

@Component
export default class CalendarWeek extends Vue {
  today = formatDates.formatDate(new Date());

  @Prop() events!: Array<CalendarEventModel>;

  public starEvent = (event: CalendarEventModel) => {
    console.log("starEvent", event);

    this.$emit("starEvent", event);
  };

  public editEvent = (event: CalendarEventModel) => {
    console.log("editEvent", event);
    this.$emit("editEvent", event);
  };
  public createEventInTime = (event: CalendarEventModel) => {
    this.$emit("createEventInTime", event);
  };

  public printEvent = (event: CalendarEventModel) => {
    console.log(event);
  };
}
</script>
