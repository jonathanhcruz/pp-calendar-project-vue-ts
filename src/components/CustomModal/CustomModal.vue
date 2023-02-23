<template>
  <v-dialog transition="dialog-top-transition " v-model="dialog" width="700">
    <v-card>
      <v-card-title>From the bottom</v-card-title>
      <v-card-text>
        <FormEvents />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FormEvents } from "@/components";

@Component({
  components: {
    FormEvents,
  },
})
export default class CustomModal extends Vue {
  dialog = true;
}
</script>
