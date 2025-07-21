<script setup lang="ts">

</script>

<template>
  <div class="relative flex flex-row max-lg:px-10 max-[910px]:flex-col py-8">
    <div class="flex flex-col">
      <div class="absolute left-60 top-8 max-[415px]:top-[420px] max-sm:top-[370px] max-sm:left-10 max-[910px]:top-[420px] max-[910px]:left-0 z-10 flex self-end flex-col gap-2.5">
        <span class="block h-0.5 w-52 max-sm:w-32 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-14 w-52 max-sm:w-32 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-28 w-52 max-sm:w-32 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-44 w-52 max-sm:w-32 bg-gradient-to-r from-white via-white to-transparent"></span>
      </div>
      <h1 class="font-gothic mt-10 text-[70px] max-sm:text-[50px] leading-none text-transparent max-sm:text-wrap text-nowrap text-stroke-1 text-stroke-color-white">Прокачай <br> свою тачку</h1>
      <img class=" mt-5 self-end max-[910px]:self-start w-[400px]" src="public/images/pump.png" alt="pump">
      <NuxtLink class="self-end max-[910px]:self-start mt-10" to="/services">
        <UIButton :is-fill="true" class="py-3 px-10"/>
      </NuxtLink>
    </div>
    <div class="relative max-[910px]:mt-12 w-7/12 max-[910px]:w-full h-[340px] overflow-hidden rounded-tr-xl rounded-br-md">
      <img
          src="public/images/supra.jpg"
          alt="supra"
          class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute  inset-0 bg-gradient-to-r from-dark via-transparent to-black/50"></div>
    </div>
    <img
        class="absolute
         right-0 bottom-0 -mb-6
         max-lg:-mb-0 self-end
         max-sm:w-72 max-sm:h-20
         max-sm:left-1/2 max-sm:right-auto max-sm:translate-x-[-50%]"
        src="/public/images/savage.png"
        alt="savage"
    />  </div>


</template>

<style scoped>

</style>