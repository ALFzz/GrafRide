<script setup lang="ts">
defineProps({
  isFill: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <button
      :class="[
    'font-ruberoid font-extrabold text-center rounded-full transition-all duration-300 ease-in-out transform',
    isFill ? 'text-dark bg-neonpink' : 'text-white bg-transparent border-2 border-neonpink',
    'hover:scale-105 active:scale-95 hover:shadow-lg z-20 relative'
  ]"
  >
    Перейти к услугам
  </button>

</template>

<style scoped>

</style>