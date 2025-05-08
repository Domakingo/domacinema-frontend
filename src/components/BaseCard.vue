<template>
  <div class="card-container">
    <div class="card">
      <h2 v-if="title">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.card {
  background: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.card h2 {
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}
</style>
