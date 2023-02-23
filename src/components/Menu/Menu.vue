<template>
  <div class="menu">
    <h1>Menu</h1>
    <button
      v-for="(item, index) in intesMenu"
      @click="onActionButton(item)"
      :class="item.active ? 'active' : ''"
      :key="index"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MenuModel } from "@/models";

@Component({})
export default class Menu extends Vue {
  intesMenu: MenuModel[] = [
    {
      title: "creat new event",
      active: true,
      action: () => {
        console.log("create new event");
      },
    },
    {
      title: "vista elemental",
      active: false,
      path: "/calendar",
    },
    {
      title: "All events",
      active: false,
      path: "/allEvents",
    },
  ];

  get isRoute() {
    return this.$route.path === "/calendar" ? "active" : "";
  }

  onCreateNewEvents() {
    this.$emit("onCreateNewEvents");
  }

  goToView(path: string) {
    this.$router.push(path);
  }

  onActionButton(item: MenuModel): void {
    if (item.path) {
      this.goToView(item.path);
    } else if (item.action) {
      item.action();
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 20px;
  }
  button {
    margin-bottom: 20px;
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    background: rgb(0, 135, 169);
    color: #fff;

    &.active {
      background: rgb(255, 255, 255);
      color: rgb(0, 135, 169);
      border: 1px solid rgb(0, 135, 169);
    }
  }
}
</style>
