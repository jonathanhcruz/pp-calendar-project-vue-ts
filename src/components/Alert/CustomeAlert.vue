<template>
  <v-alert
    border="right"
    :color="alertState.type"
    :type="alertState.type"
    :text="alertState.message"
    :tile="alertState.title"
    closable
    v-if="alertState.show"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { alertModel } from "@/models";

@Component
export default class CustomeAlert extends Vue {
  @Getter("alertState", { namespace: "alertStore" }) alertState!: alertModel;

  created() {
    console.log("Alert created");
  }
}
</script>
