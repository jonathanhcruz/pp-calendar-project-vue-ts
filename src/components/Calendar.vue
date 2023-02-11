<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Calendar extends Vue {
  today = new Date().toISOString().substr(0, 10);
  events = [
    {
      name: "Weekly Meeting",
      start: "2023-02-09 09:00",
      end: "2023-02-09 11:00",
    },
  ];

  @Prop() public msg!: string;

  Created() {
    console.log(this.today);
  }
}
</script>

<style lang="scss">
.app {
  background: #f5f5f5;
  .container {
    width: 100%;
    max-width: 1200px;
  }
}
</style>
