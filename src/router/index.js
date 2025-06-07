import { createRouter, createWebHashHistory } from "vue-router";
// Pages
import Home from "../pages/Home.vue";
import Career from "../pages/Career.vue";
import Skills from "../pages/Skills.vue";
import PublishedProjects from "../pages/PublishedProjects.vue";
import PrivateProjects from "../pages/PrivateProjects.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/home", component: Home },
  { path: "/career", component: Career },
  { path: "/skills", component: Skills },
  { path: "/projects", component: PublishedProjects },
  { path: "/private-projects", component: PrivateProjects },
];

const router = createRouter({
  history: createWebHashHistory("/portfolio/"),
  routes,
});

export default router;
