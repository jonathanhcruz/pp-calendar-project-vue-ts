<template>
  <form @submit.prevent="onSubmit">
    <v-container>
      <v-col cols="12">
        <v-text-field label="Title" reuired @input="onSetTitle" />
      </v-col>
      <v-col cols="12">
        <CustomeInputDate
          id="startDate"
          label="Start Date"
          @onInput="onSetStartDate"
        />
      </v-col>
      <v-col cols="12">
        <CustomeInputDate
          id="endDate"
          label="End Date"
          v-model="endDate"
          @onInput="onSetEndDate"
        />
      </v-col>
      <v-col cols="12" md="4"></v-col>
    </v-container>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CustomeInputDate } from "@/components";

@Component({
  components: {
    CustomeInputDate,
  },
})
export default class FormEvents extends Vue {
  title = "";
  startDate = "";
  endDate = "";

  onSetTitle(value: string) {
    this.title = value;
    console.log("onSetTitle", this.title);
  }

  onSetStartDate(startDate: string) {
    this.startDate = startDate;
    console.log("onSetStartDate", this.startDate);
  }

  onSetEndDate(endDate: string) {
    this.endDate = endDate;
    console.log("onSetEndDate", this.endDate);
  }

  onSubmit(event: any) {
    console.log("submit", event.target.value);
  }
}
</script>
