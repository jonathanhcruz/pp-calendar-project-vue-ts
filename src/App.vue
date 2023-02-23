<template>
  <v-app>
    <v-main>
      <TemplatePage>
        <template #menu>
          <Menu />
        </template>
        <template #content>
          <router-view />
        </template>
      </TemplatePage>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TemplatePage, Menu } from "@/components";

@Component({
  components: {
    TemplatePage,
    Menu,
  },
})
export default class App extends Vue {
  get isRoute() {
    return this.$route.path === "/calendar" ? "active" : "";
  }
}
</script>

<style lang="scss">
.app {
  background: #f5f5f5;
}
</style>
