import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsList from "../views/ProjectsList.vue";
import ProjectCreate from "../views/ProjectCreate.vue";
import ProjectView from "../views/ProjectView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "projects-list",
    component: ProjectsList
  },
  {
    path: "/create",
    name: "project-create",
    component: ProjectCreate
  },
  {
    path: "/view",
    name: "project-view",
    component: ProjectView
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
