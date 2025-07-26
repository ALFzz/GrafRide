<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="mb-6">
    <input
        type="text"
        class="w-full font-ruberoid font-extrabold px-0 py-2 border-0 border-b-2 border-neonpink focus:ring-0 focus:border-pink-700 bg-transparent"
        :placeholder="placeholder"
    >
  </div>
</template>

<style scoped>

</style>