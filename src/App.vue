<template>
  <v-app>
    <v-main>
      <customeAlert />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { customeAlert } from "@/components";

@Component({
  components: {
    customeAlert,
  },
})
export default class App extends Vue {}
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
