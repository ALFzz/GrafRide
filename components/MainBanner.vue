<script setup lang="ts">

</script>

<template>
  <div class="relative flex flex-row py-8">
    <div class="flex flex-col">
      <div class="absolute left-60 top-8 z-10 flex self-end flex-col gap-2.5">
        <span class="block h-0.5 w-52 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-14 w-52 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-28 w-52 bg-gradient-to-r from-white via-white to-transparent"></span>
        <span class="block h-0.5 ml-44 w-52 bg-gradient-to-r from-white via-white to-transparent"></span>
      </div>
      <h1 class="font-gothic mt-10 text-[70px] leading-none text-transparent text-stroke-1 text-stroke-color-white">Прокачай <br> свою тачку</h1>
      <img class=" mt-5 self-end w-[400px]" src="public/images/pump.png" alt="pump">
      <NuxtLink class="self-end mt-10" to="/services">
        <UIButton :is-fill="true" class="py-3 px-10"/>
      </NuxtLink>
    </div>
    <div class="relative w-7/12 h-[340px] overflow-hidden rounded-tr-xl rounded-br-md">
      <img
          src="public/images/supra.jpg"
          alt="supra"
          class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute  inset-0 bg-gradient-to-r from-dark via-transparent to-black/50"></div>
    </div>
    <div class="absolute right-0 bottom-0 -mb-6 self-end">
      <h1 class="font-kobar self-end text-[100px] text-transparent text-stroke-1 text-stroke-color-white">SAVAGE</h1>
    </div>
  </div>


</template>

<style scoped>

</style>