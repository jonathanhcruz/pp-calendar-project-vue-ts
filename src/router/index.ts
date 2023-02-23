import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { CalendarView } from "@/views";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "CalendarView",
    component: CalendarView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
