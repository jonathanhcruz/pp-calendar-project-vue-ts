<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  created() {
    console.log("created");
  }
}
</script>
