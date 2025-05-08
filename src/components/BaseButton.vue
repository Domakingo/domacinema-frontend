<template>
  <button :class="['base-button', type, size]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
});

defineEmits(['click']);
</script>

<style scoped>
.base-button {
  --button-primary: var(--color-accent);
  --button-secondary: transparent;
  --button-text: var(--color-text);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  letter-spacing: 0.025em;
  white-space: nowrap;
}

:deep(.base-button) {
  line-height: 1.2;
  /* Allineamento verticale preciso */
  vertical-align: middle;
}

:deep(.base-button) span {
  display: inline-block;
  vertical-align: middle;
}

/* Tipi */
.primary {
  background: var(--button-primary);
  color: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.secondary {
  background: var(--button-secondary);
  color: var(--button-primary);
  border: 2px solid var(--button-primary);
}

.text {
  background: transparent;
  color: var(--button-text);
  border-radius: 0.5rem;
}

/* Dimensioni */
.small {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.medium {
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
}

.large {
  padding: 1rem 2.25rem;
  font-size: 1.125rem;
}

/* Stati interattivi */
.base-button:not(.text):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.base-button:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

.secondary:hover {
  background: rgba(193, 155, 108, 0.1);
}

.text:hover {
  text-decoration: underline;
}
</style>
