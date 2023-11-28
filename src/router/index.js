import { createRouter, createWebHistory } from 'vue-router';
import ApiData from "@/components/ApiData.vue";

const routes = [
  {
    path: "/",
    name: "ApiData",
    component: ApiData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
