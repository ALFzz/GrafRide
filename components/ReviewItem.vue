<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col  relative">
    <div class="border-neonpink border-2 w-full rounded-[35px]  h-[193px]"/>
    <div class="absolute px-10 py-5  top-4 bg-gre font-ruberoid font-bold text-sm  left-3 border-gre border-2 w-full rounded-[35px]  h-[193px]">
      <div class="flex flex-row justify-between items-center">
        <p>— {{name}}, <br>  {{car}}</p>
        <div class="flex flex-row ">
          <Icon
              v-for="i in 5"
              :key="i"
              name="material-symbols:star-rounded"
              class="text-neonpink w-8 h-8"
          />
        </div>
      </div>
      <p class="mt-5">{{reviewText}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>