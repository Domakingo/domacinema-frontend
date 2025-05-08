<template>
  <div class="auth-success-container">
    <div class="loading-message">
      <p>Autenticazione in corso...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const token = params.get('token');

  if (token) {
    authStore.setToken(token);
    window.history.replaceState({}, document.title, window.location.pathname);
    router.push({ name: 'home' });
  } else {
    router.push({ name: 'login', query: { error: 'missing_token' } });
  }
});
</script>

<style scoped>
.auth-success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
}

.loading-message {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

.loading-message p {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
