<template>
  <div class="custome-input-date">
    <label :for="id" class="d-block">{{ label }}</label>
    <input
      :id="id"
      type="datetime-local"
      :name="id"
      class="d-block"
      :min="minDate"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { formatDate } from "@/utils";

@Component({
  components: {},
})
export default class InputDate extends Vue {
  @Prop() minDateProp?: string;

  @Prop({}) id!: string;
  @Prop({}) label!: string;

  get minDate() {
    return this.minDateProp ?? formatDate(new Date());
  }

  onInput(event: any) {
    this.$emit("onInput", event?.target?.value ?? "");
  }
}
</script>

<style lang="scss" scoped>
$primary: rgba(0, 0, 0, 0.6);

.custome-input-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: $primary;

  label {
    margin-bottom: 0.5rem;
    font-size: 12px;
  }
  input {
    border: 1px solid $primary;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    font-size: 16px;
    color: $primary;
  }
}
</style>
