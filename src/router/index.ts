import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Sub from "../views/Sub.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/sub",
    name: "Sub",
    component: Sub,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;