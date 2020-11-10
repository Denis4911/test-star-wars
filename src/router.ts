import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);
import PageLayout from "@/layouts/page-layout.vue";

const Homepage = () =>
  import(
    /* webpackChunkName: "homepage-view" */ "@/views/homepage/homepage.vue"
  );
const PersonPage = () =>
  import(/* webpackChunkName: "homepage-view" */ "@/views/person/person.vue");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PageLayout,
      children: [
        {
          path: "",
          name: "index",
          beforeEnter(to, from, next) {
            store
              .dispatch("getPersons")
              .then(() => {
                next();
              })
              .catch((err: any) => {
                alert("Список персонажей временно недоступен");
                next();
              });
          },
          component: Homepage
        },
        {
          path: "/person/:id",
          name: "person",
          beforeEnter(to, from, next) {
            store
              .dispatch("getPerson", to.params.id)
              .then(() => {
                next();
              })
              .catch((err: any) => {
                alert("Персонаж временно недоступен");
                next();
              });
          },
          component: PersonPage
        }
      ]
    }
  ]
});

export default router;
