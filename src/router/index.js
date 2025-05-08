import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js';
import LoginView from '@/views/LoginView.vue';
import AuthSuccess from '@/views/AuthSuccess.vue';
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/auth-success',
    name: 'auth-success',
    component: AuthSuccess
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.token && !authStore.isValidToken(authStore.token)) {
    authStore.logout();
  }

  if (to.meta.requiresAuth) {
    authStore.token ? next() : next('/login');
  } else {
    next();
  }
});

export default router
