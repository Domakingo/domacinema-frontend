<template>
  <header class="main-header">
    <div class="header-content">
      <div class="header-side left">
        <component :is="headerStore.leftContent" v-if="headerStore.leftContent" />
      </div>

      <div class="header-center">
        <router-link to="/" class="logo">
          <span class="logo-text">DOMACINEMA</span>
        </router-link>
      </div>

      <div class="header-side right">
        <component :is="headerStore.rightContent" v-if="headerStore.rightContent" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useHeaderStore } from '@/stores/header'
const headerStore = useHeaderStore()
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  height: 60px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.header-side {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.left {
  justify-content: flex-start;
}

.right {
  justify-content: flex-end;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-heading);
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 10px;
  }

  .logo-text {
    font-size: 1.2rem;
  }
}
</style>
