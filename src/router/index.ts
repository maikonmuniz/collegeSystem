import {
    createRouter,
    createWebHistory,
} from "vue-router";

import Login from "../view/Login.vue";
import About from "../view/About.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true }
  },  
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((
    to,
    from,
    next
) => {

  const token = localStorage.getItem('token');
  const isLoginRoute = to.path === '/login';
  const requiresAuth = to.meta.requiresAuth

  if (!token && !isLoginRoute) {
    return next('/login');
  }

  if (token && isLoginRoute) {
    return next('/');
  }

  return next();
});

export default router;
