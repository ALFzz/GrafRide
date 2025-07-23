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
    <div class="w-[360px] h-[200px] border-gre border-2 rounded-[35px]"/>
    <div class="absolute top-2 w-[360px] h-[200px]  border-gre border-2 rounded-[35px]"/>
    <div class="flex flex-col gap-2  py-6  px-8 absolute top-4 w-[360px] h-[200px]  border-neonpink border-2 rounded-[35px]">
      <h1 class="text-base font-gothic">{{title}}</h1>
      <h2 class="text-sm font-ruberoid font-bold">{{subTitle}}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>