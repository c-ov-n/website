import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/anq",
      name: "anq",
      component: () => import("../views/ANQView.vue"),
    },
    {
      path: "/anq/trees",
      name: "anq-trees",
      component: () => import("../views/anq/ANQTreesView.vue"),
    },
  ],
});

export default router;
