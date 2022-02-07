import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import SecondPage from "../components/SecondPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "Home",
      component: Home,
      path: "/"
    },
    {
      path: "/second",
      component: SecondPage,
      name: "SecondPage"
    }
  ]
});
