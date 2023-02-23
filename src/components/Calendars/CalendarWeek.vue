<template>
  <v-row>
    <v-col>
      <v-sheet>
        <!-- :selected-date="new Date('August 20, 2021 10:31:30 GMT-05:00')" -->
        <VueCal
          :locale="localeState"
          :events="propEvents"
          hide-view-selector
          class="vuecal__flex vuecal vuecal--year-view vuecal--blue-theme"
          :disable-views="['years', 'year']"
          vuecal__cell--disabled="{text-decoration: line-through;color: #bbb;}"
          events-on-month-view="short"
          :editable-events="{
            title: false,
            drag: false,
            resize: false,
            delete: true,
          }"
          :on-event-click="onEditEvent"
          @ready="onCurrentEvent"
          @event-delete="onRemoveEvent($event)"
          @cell-click="onCreateNewEvents"
          :on-event-create="onCreateNewEvents"
          @event-drag-create="onCreateNewEvents"
          @event-title-change="onChangeEventTitle"
          @event-duration-change="onEditEvent"
        >
          <vuecal--blue-theme />
        </VueCal>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { formatDate } from "@/utils";
import { CalendarEventModel } from "@/models";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

@Component({
  components: {
    VueCal,
  },
})
export default class CalendarWeek extends Vue {
  today = formatDate(new Date());

  @Prop() propEvents!: Array<CalendarEventModel>;

  @Getter("localeState", { namespace: "calendarStore" }) localeState!: string;

  onEditEvent(event: CalendarEventModel) {
    // TODO: open modal to edit event
    this.$emit("onEditEvent", event);
  }

  onCreateNewEvents(event: CalendarEventModel) {
    // TODO: open modal to create new event
    this.$emit("onCreateNewEvents", event);
  }

  onRemoveEvent(event: CalendarEventModel) {
    // TODO: remove event from database
    this.$emit("onRemoveEvent", event);
  }

  onCurrentEvent() {
    // TODO: Show alert start new event
    this.$emit("onCurrentEvent");
  }

  onChangeEventTitle(event: CalendarEventModel) {
    // TODO: change event title
    this.$emit("onEditEvent", event);
  }
}
</script>

<style lang="scss">
.vuecal__now-line {
  color: #06c;
  opacity: 1;
  border-top: 3px solid currentColor;
  &:before {
    display: none;
  }
}

.vuecal__event {
  &.leisure {
    background-color: rgba(253, 156, 66, 0.9);
    border: 1px solid rgb(233, 136, 46);
    color: #fff;
  }
  &.work {
    background-color: rgba(0, 188, 212, 0.9);
    border: 1px solid rgb(0, 168, 192);
    color: #fff;
  }
}
</style>
