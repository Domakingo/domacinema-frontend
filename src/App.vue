<script setup>
import MainHeader from '@/components/MainHeader.vue'

</script>

<template>
  <div class="app-container">
    <MainHeader />

    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  position: relative;
}

.nav-link {
  padding: 8px;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--color-accent);
}
</style>
