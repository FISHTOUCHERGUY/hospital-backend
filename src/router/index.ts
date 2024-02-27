import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/index",
      component: () => import("@/views/index/index.vue"),
      children:[
        {
          path:"city",
          component: () => import("@/views/index/content/component/city/index.vue")
        },
        {
          path:"company",
          component: () => import("@/views/index/content/component/company/index.vue")
        },
        {
          path:"company_policy",
          component: () => import("@/views/index/content/component/company_policy/index.vue")
        },
        {
          path:"doctor",
          component: () => import("@/views/index/content/component/doctor/index.vue")
        },
        {
          path:"home",
          component: () => import("@/views/index/content/component/home/index.vue")
        },
        {
          path:"insurance_policy",
          component: () => import("@/views/index/content/component/insurance_policy/index.vue")
        },
        {
          path:"material",
          component: () => import("@/views/index/content/component/material/index.vue")
        },
        {
          path:"medicine",
          component: () => import("@/views/index/content/component/medicine/index.vue")
        },
        {
          path:"sale",
          component: () => import("@/views/index/content/component/sale/index.vue")
        }
      ]
    },
    {
      path: "/",
      redirect: "/index",
    },
  ],
});

export default router;
