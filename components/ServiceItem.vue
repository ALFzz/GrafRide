<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
})

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('ru-RU').format(props.price)
})


</script>

<template>
  <div class="flex w-[360px] flex-col bg-gre rounded-[35px]">
    <div class="relative">
      <img
          class="rounded-t-[35px]"
          :src="`/images/${image}.png`"
          :alt="image">
      <div class="absolute rounded-t-[35px] inset-0 bg-gradient-to-t from-gre via-transparent to-black/10"/>
    </div>
    <div class="flex flex-col px-10 ">
      <p class="font-gothic text-base">{{title}}</p>
      <p class="font-ruberoid text-start font-bold text-[13px] mt-2 min-h-[38px]">{{subtitle}}</p>
      <p class="font-ruberoid text-start font-bold text-3xl mt-10">{{formattedPrice}} ₽</p>
    </div>
    <UIButton class="w-5/6 py-3 self-center mb-10 mt-5" :is-fill="true">Подробнее</UIButton>
  </div>
</template>

<style scoped>

</style>