import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { useAuthStore } from "@/stores/useAuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/ecotracker",
      name: "ecotracker",
      component: () => import("../views/EcoTrackerView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  // Scroll behaviour for Footer and a Sticky button to scroll to top.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Guard to check if user is logged in before accessing some routes.
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  // This will only work for simple routes, won't work for nested routes, in this case could be used.
  // if (to.meta.requiresAuth && !authStore.isLoggedIn) {
  // This will work for nested routes, it will check if any of the matched routes requires auth.
  if (to.matched.some((record) => record.meta.requiresAuth) && !authStore.isLoggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
