<script setup lang="ts">
// Конфигурация линий вынесена в константу
const lines = [
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-0' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-14' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-28' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-44' }
] as const;

</script>

<template>
  <div class="relative flex flex-row max-[910px]:flex-col py-8">
    <div class="absolute left-60 top-8 max-[415px]:top-[420px] max-sm:top-[370px] max-sm:left-0 max-[910px]:top-[420px] max-[910px]:left-0 z-10 flex flex-col gap-2.5">
      <motion
          as="div"
          v-for="(line, index) in lines"
          :key="index"
          class="relative h-0.5 overflow-hidden"
          :class="[line.width, line.marginClass]"
      >
        <motion
            as="div"
            class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white to-transparent"
            :initial="{ scaleX: 0, transformOrigin: 'left center' }"
            :whileInView="{
            scaleX: 1,
            transition: {
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }
          }"
        />
      </motion>
    </div>

    <motion
        as="div"
        :initial="{ opacity: 0, x: '-100%' }"
        :whileInView="{ opacity: 1, x: 0 }"
        :viewport="{ once: true, margin: '-50%' }"
        :transition="{duration: 1.2, ease: [0.25, 0.1, 0.25, 1]}"
        class="flex flex-col"
    >
      <div class="absolute w-20 h-20 bg-white rounded-lg blur-3xl opacity-80"/>
      <h1 class="font-gothic mt-10 text-[70px] max-sm:text-[50px] leading-none text-transparent max-sm:text-wrap text-nowrap text-stroke-1 text-stroke-color-white">
        Прокачай <br> свою тачку
      </h1>
      <nuxt-img
          loading="lazy"
          class="mt-5 self-end max-[910px]:self-start w-[400px]"
          src="/images/pump.png"
          alt="Насос"
          width="400"
          height="auto"
      />
      <NuxtLink class="self-end max-[910px]:self-start mt-10" to="/services">
        <UIButton :is-fill="true" class="py-3 px-10">Перейти к услугам</UIButton>
      </NuxtLink>
    </motion>

    <motion
        as="div"
        :initial="{ opacity: 0, x: '100%' }"
        :whileInView="{ opacity: 1, x: 0 }"
        :viewport="{ once: true, margin: '-50%' }"
        :transition="{duration: 1.2, ease: [0.25, 0.1, 0.25, 1]}"
        class="relative max-[910px]:mt-12 w-7/12 max-[910px]:w-full h-[340px] overflow-hidden rounded-tr-xl rounded-br-md"
    >
      <nuxt-img
          loading="lazy"
          src="/images/supra.jpg"
          alt="Toyota Supra"
          class="w-full h-full object-cover opacity-60"
          width="400"
          height="340"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-black/50"></div>
    </motion>

    <nuxt-img
        loading="lazy"
        class="absolute right-0 bottom-0 -mb-6 max-lg:-mb-0 self-end w-[385px] h-[115px] max-sm:w-72 max-sm:h-20 max-sm:left-1/2 max-sm:right-auto max-sm:translate-x-[-50%]"
        src="/images/savage.png"
        alt="Savage Motors"
        width="385"
        height="115"
    />
  </div>
</template>

<style scoped>

</style>