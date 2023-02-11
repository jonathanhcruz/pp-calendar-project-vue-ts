<template>
  <div class="home">
    <div class="container">
      <Calendar />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Calendar } from "@/components";

@Component({
  components: {
    Calendar,
  },
})
export default class HomeView extends Vue {}
</script>
