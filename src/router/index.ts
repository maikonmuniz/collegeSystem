import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
    NavigationGuardNext, 
    RouteLocationNormalized 
} from "vue-router";

import Login from "@/pages/Login";

const routes: Array<RouteRecordRaw> = [ 
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
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {

  const token = localStorage.getItem('token');
  const isLoginRoute = to.path === '/login';

  if (!token && !isLoginRoute) {
    return next('/login');
  }

  if (token && isLoginRoute) {
    return next('/');
  }

  return next();
});

export default router;
