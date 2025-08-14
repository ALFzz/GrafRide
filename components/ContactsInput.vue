<script setup lang="ts">
interface Props {
  placeholder: string
}

defineProps<Props>()
</script>

<template>
  <input
      type="text"
      class="input-field"
      :placeholder="placeholder"
  >
</template>

<style scoped>
.input-field {
  @apply w-full font-ruberoid font-extrabold px-0 py-2 border-0 border-b-2;
  @apply border-neonpink focus:ring-0 focus:border-pink-700 bg-transparent;
  margin-bottom: 1.5rem;
}
</style>