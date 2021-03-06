import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tracker from "../views/Tracker.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apollo Rebase Dashboard",
    component: Dashboard,
  },
  {
    path: "/tracker",
    name: "Apollo Rebase Tracker",
    component: Tracker,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  window.title = next.name;
  next();
});

export default router;
