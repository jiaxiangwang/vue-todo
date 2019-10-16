import Vue from "vue";
import Router from "vue-router";
import TodoItem from "./pages/Todo";
import About from "./pages/About";

Vue.use(Router);

const routes = [
  { path: "/todo", component: TodoItem },
  { path: "/about", component: About }
];

const router = new Router({
  routes
});

export default router;
