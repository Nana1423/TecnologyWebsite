import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeaturesView from "../views/FeaturesView.vue";
import PricingView from "../views/PricingView.vue";
import BlogView from "../views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/features",
      name: "features",
      component: FeaturesView,
    },
    {
        path: "/pricing",
        name: "pricing",
        component: PricingView,
      },
      {
        path: "/blog",
        name: "blog",
        component: BlogView,
      },
  ],
});

export default router;
