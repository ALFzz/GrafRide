<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative flex flex-col w-full">
    <!-- Внешняя рамка -->
    <div class="border-2 border-neonpink rounded-[35px] h-[220px] sm:h-[193px] w-full" />

    <!-- Внутренний блок -->
    <div
        class="absolute top-2 left-1 sm:top-4 sm:left-3 w-full h-[220px] sm:h-[193px] bg-gre border-2 border-gre rounded-[35px] px-6 sm:px-10 py-4 sm:py-5 font-ruberoid font-bold text-sm text-white"
    >
      <div class="flex flex-col  sm:flex-row justify-between items-start sm:items-center  sm:gap-0">
        <p>
          — {{ name }}, <br />
          {{ car }}
        </p>
        <div class="flex flex-row">
          <Icon
              v-for="i in 5"
              :key="i"
              name="material-symbols:star-rounded"
              class="text-neonpink w-6 h-6 sm:w-8 sm:h-8"
          />
        </div>
      </div>

      <p class="mt-4 sm:mt-5 text-xs sm:text-sm">
        {{ reviewText }}
      </p>
    </div>
  </div>
</template>
