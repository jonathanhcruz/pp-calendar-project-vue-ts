<template>
  <div class="home">
    <CustomeAlert />

    <div class="calendar">
      <h1>Calendar</h1>
      <CalendarWeek
        :propEvents="eventsCalendar"
        @onEditEvent="onEditEvent"
        @onCreateNewEvents="onCreateNewEvents"
        @onRemoveEvent="onRemoveEvent"
        @onCurrentEvent="onCurrentEvent"
        @onChangeEventTitle="onChangeEventTitle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarWeek } from "@/components";
import { Getter, Action } from "vuex-class";
import { CalendarEventModel } from "@/models";
import { CustomeAlert } from "@/components";

@Component({
  components: {
    CalendarWeek,
    CustomeAlert,
  },
})
export default class CalendarView extends Vue {
  @Getter("eventsState", { namespace: "calendarStore" })
  eventsCalendar!: CalendarEventModel;

  @Action("createNewEvent", { namespace: "calendarStore" })
  createNewEvent!: (event: CalendarEventModel) => void;

  onEditEvent(event: CalendarEventModel) {
    console.log("editEvent", event);
  }

  onCreateNewEvents(event?: CalendarEventModel) {
    console.log("createNewEvents", event);
  }

  onRemoveEvent(event: CalendarEventModel) {
    console.log("removeEvent", event);
  }

  onCurrentEvent() {
    console.log("currentEvent");
  }

  onChangeEventTitle(event: CalendarEventModel) {
    console.log("changeEventTitle", event);
  }

  goToView(path: string) {
    this.$router.push(path);
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;

  h1 {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    height: 40px;
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
