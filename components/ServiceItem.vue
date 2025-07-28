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
  <Motion
      class="flex w-[360px] flex-col bg-gre rounded-[35px] overflow-hidden"
      :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
  >
    <!-- Анимация изображения -->
    <div class="relative">
      <Motion
          :initial="{ scale: 0.95, opacity: 0 }"
          :whileInView="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
      >
        <img
            class="rounded-t-[35px] w-full h-auto"
            :src="`/images/${image}.png`"
            :alt="image"
        >
      </Motion>
      <Motion
          class="absolute rounded-t-[35px] inset-0 bg-gradient-to-t from-gre via-transparent to-black/10"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
      />
    </div>

    <Motion
        class="flex flex-col px-10"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
    >
      <Motion
          class="font-gothic text-base"
          :initial="{ x: -10, opacity: 0 }"
          :whileInView="{ x: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.4 }"
      >
        {{ title }}
      </Motion>

      <Motion
          class="font-ruberoid text-start font-bold text-[13px] mt-2 min-h-[38px]"
          :initial="{ x: -10, opacity: 0 }"
          :whileInView="{ x: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.5 }"
      >
        {{ subtitle }}
      </Motion>

      <Motion
          class="font-ruberoid text-start font-bold text-3xl mt-10"
          :initial="{ y: 10, opacity: 0 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.6 }"
      >
        {{ formattedPrice }} ₽
      </Motion>
    </Motion>
      <UIButton class="w-5/6 py-3 self-center mb-10 mt-5"  :is-fill="true">Подробнее</UIButton>
  </Motion>
</template>

<style scoped>

</style>