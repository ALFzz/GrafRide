<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="relative">
    <!-- Первый слой с анимацией при появлении -->
    <Motion
        class="w-[360px] h-[200px] border-gre border-2 rounded-[35px]"
        :initial="{ x: -10, y: -10, opacity: 0 }"
        :whileInView="{ x: 0, y: 0, opacity: 1 }"
        :transition="{ duration: 0.5 }"
    />

    <!-- Второй слой с анимацией при появлении -->
    <Motion
        class="absolute top-2 w-[360px] h-[200px] border-gre border-2 rounded-[35px]"
        :initial="{ x: -5, y: -5, opacity: 0 }"
        :whileInView="{ x: 0, y: 0, opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.1 }"
    />

    <!-- Основной контент с анимацией -->
    <Motion
        class="flex flex-col gap-2 py-6 px-8 absolute top-4 w-[360px] h-[200px] border-neonpink border-2 rounded-[35px]"
        :initial="{ scale: 0.95, opacity: 0 }"
        :whileInView="{ scale: 1, opacity: 1 }"
        :transition="{ type: 'spring', stiffness: 300, damping: 10, delay: 0.2 }"
    >
      <!-- Анимация заголовка -->
      <Motion
          class="text-base font-gothic"
          :initial="{ opacity: 0, y: 10 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: 0.3 }"
      >
        {{ title }}
      </Motion>

      <!-- Анимация подзаголовка -->
      <Motion
          class="text-sm font-ruberoid font-bold"
          :initial="{ opacity: 0, y: 10 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: 0.4 }"
      >
        {{ subTitle }}
      </Motion>
    </Motion>
  </div>
</template>

<style scoped>

</style>