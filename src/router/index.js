import Vue from "vue";
import Router from "vue-router";
import Ebook from "@/Ebook.vue";
import Home from "@/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      path: "/ebook",
      component: Ebook
    }
  ]
});
