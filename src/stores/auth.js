import { defineStore } from 'pinia';
import router from '@/router';
import jwtDecode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt') || null,
    user: null
  }),

  actions: {
    setToken(token) {
      if (!this.isValidToken(token)) {
        this.logout();
        throw new Error('Token non valido');
      }

      this.token = token;
      localStorage.setItem('jwt', token);
      this.decodeUser();
    },

    decodeUser() {
      try {
        if (this.token) {
          const payload = JSON.parse(atob(this.token.split('.')[1]));

          const TOKEN_EXP_MARGIN = 30000;
          //console.log('Token scade il:', new Date(payload.exp * 1000).toISOString());

          if ((payload.exp * 1000 - TOKEN_EXP_MARGIN) < Date.now()) {
            this.logout();
            router.push('/login?error=token_expired');
            return;
          }

          this.user = {
            id: payload.id,
            email: payload.email,
            role: payload.role
          };
        }
      } catch (error) {
        this.logout();
      }
    },

    isValidToken(token) {
      try {
        const decoded = jwtDecode(token);
        return decoded.exp * 1000 > Date.now();
      } catch {
        return false;
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('jwt');
      router.push('/login');
    }
  }
});
