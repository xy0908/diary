import { createRouter, createWebHashHistory } from "vue-router";
import home from "../view/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/see/",
    name: "see",
    component: () => import("../view/see.vue"),
  },
  {
    path: "/remind",
    name: "remind",
    component: () => import("../view/remind.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
