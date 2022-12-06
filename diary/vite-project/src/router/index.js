import { createRouter, createWebHashHistory } from "vue-router";
import home from "../view/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/see/", //查看日记
    name: "see",
    component: () => import("../view/see.vue"),
  },
  {
    path: "/remind", // 提醒
    name: "remind",
    component: () => import("../view/remind.vue"),
  },
  {
    path: "/about", // 关于我
    name: "about",
    component: () => import("../view/about.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
