<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col w-fit mb-6 lg:mb-10">
    <h1 class="uppercase font-marksquad text-gre text-4xl lg:text-[48px]">{{title}}</h1>
    <h3 class="font-gothic self-end text-xl lg:text-[26px] -mr-2 lg:-mr-6 mt-2">{{subTitle}}</h3>
  </div>
</template>

<style scoped>

</style>