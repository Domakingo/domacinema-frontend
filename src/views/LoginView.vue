<template>
  <div class="login-container">
    <BaseCard>
      <h2>Accedi al tuo account</h2>

      <BaseButton class="google-btn" type="primary" size="large" @click="handleGoogleLogin">
        <img src="@/assets/google-logo.svg" alt="Google Logo">
        Continua con Google
      </BaseButton>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { useAuthStore } from '@/stores/auth';
import BaseCard from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const authStore = useAuthStore();
const error = ref(false);
const errorMessage = ref('');

const handleGoogleLogin = () => {
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
};

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const errorParam = urlParams.get('error');

  if (errorParam === 'auth_failed') {
    error.value = true;
    errorMessage.value = 'Autenticazione fallita. Riprova.';
  }

  if (authStore.token && authStore.user) {
    router.push({ name: 'home' });
  }
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: var(--color-background-soft);
}

.login-container :deep(.card) {
  width: 600px;
  min-height: 350px;
  padding: 5rem;
  font-size: 1.5em;
}

.google-btn {
  width: 100%;
  gap: 0.25em;
  font-weight: bolder;
  font-size: 1.1em;
}

.google-btn img {
  width: 1.5em;
  height: 1.5em;
}

.error-message {
  color: #dc3545;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
