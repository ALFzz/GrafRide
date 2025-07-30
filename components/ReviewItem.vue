<script setup lang="ts">

import type { IReview } from '@/types/review'

defineProps<IReview>()
</script>

<template>
  <div class="relative flex flex-col w-full">
    <Motion
        class="border-2 border-neonpink rounded-[35px] h-[220px] sm:h-[193px] w-full"
        :initial="{ opacity: 0, scale: 0.95 }"
        :whileInView="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.5 }"
    />

    <Motion
        class="absolute top-2 left-1 sm:top-4 sm:left-3 w-full h-[220px] sm:h-[193px] bg-gre border-2 border-gre rounded-[35px] px-6 sm:px-10 py-4 sm:py-5 font-ruberoid font-bold text-sm text-white"
        :initial="{ y: 20, opacity: 0 }"
        :whileInView="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.6, delay: 0.1 }"
    >
      <Motion
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:gap-0"
          :initial="{ x: -10, opacity: 0 }"
          :whileInView="{ x: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.2 }"
      >
        <p>
          — {{ name }}, <br />
          {{ car }}
        </p>

        <Motion
            class="flex flex-row"
            :initial="{ scale: 0.5, opacity: 0 }"
            :whileInView="{ scale: 1, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 500, damping: 15, delay: 0.3 }"
        >
          <Icon
              v-for="i in 5"
              :key="i"
              name="material-symbols:star-rounded"
              class="text-neonpink w-6 h-6 sm:w-8 sm:h-8"
          />
        </Motion>
      </Motion>

      <Motion
          class="mt-4 sm:mt-5 text-xs sm:text-sm"
          :initial="{ y: 10, opacity: 0 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.4 }"
      >
        {{ reviewText }}
      </Motion>
    </Motion>
  </div>
</template>

<style scoped>

</style>