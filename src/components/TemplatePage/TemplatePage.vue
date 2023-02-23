<template>
  <div class="">
    <CustomModal />
    <div class="container--calendar">
      <div class="menu">
        <slot name="menu"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CustomModal } from "@/components";

@Component({
  components: {
    CustomModal,
  },
})
export default class TemplatePage extends Vue {
  isMenuOpen = true;
}
</script>

<style lang="scss">
.container {
  &--calendar {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(20%, 300px) 1fr;
    grid-template-rows: 1fr;

    & .content {
      height: 100%;
      height: 100vh;
      overflow: auto;
    }
  }
}
</style>
