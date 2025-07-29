<script setup lang="ts">

</script>

<template>
  <header class="container mx-auto px-4 py-4 flex justify-between items-center font-ruberoid font-bold text-white relative">
    <NuxtLink to="/">
      <Logo :for-ui="true" class="text-stroke-DEFAULT" />
    </NuxtLink>

    <button
        class="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
    >
      <span class="block w-full h-0.5 bg-white"></span>
      <span class="block w-full h-0.5 bg-white"></span>
      <span class="block w-full h-0.5 bg-white"></span>
    </button>

    <nav class="hidden lg:flex text-md gap-8 items-center">
      <NuxtLink to="/about_us">О нас</NuxtLink>
      <NuxtLink to="/services">Услуги</NuxtLink>
      <NuxtLink to="/reviews">Отзывы</NuxtLink>
      <NuxtLink to="/contacts">Контакты</NuxtLink>
    </nav>

    <div class="hidden lg:flex items-center gap-4">
      <Icon name="iconamoon:search-bold" class="w-7 h-7" />
      <p>8 (499) 423-63-56</p>
    </div>

    <nav class="hidden lg:flex gap-3">
      <Icon name="ri:whatsapp-fill" class="w-7 h-7 text-neonpink" />
      <Icon name="ic:baseline-telegram" class="w-7 h-7 text-neonpink" />
      <Icon name="mdi:youtube" class="w-7 h-7 text-neonpink" />
      <Icon name="dashicons:email-alt" class="w-7 h-7 text-neonpink" />
    </nav>

    <div
        class="absolute top-full left-0 w-full bg-neutral-900 text-white flex flex-col items-center gap-4 py-4 overflow-hidden transition-all duration-500 ease-in-out lg:hidden"
        :class="isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
    >
      <NuxtLink to="/about_us" @click="isMenuOpen = false">О нас</NuxtLink>
      <NuxtLink to="/services" @click="isMenuOpen = false">Услуги</NuxtLink>
      <NuxtLink to="/reviews" @click="isMenuOpen = false">Отзывы</NuxtLink>
      <NuxtLink to="/contacts" @click="isMenuOpen = false">Контакты</NuxtLink>
      <Icon name="iconamoon:search-bold" class="w-7 h-7" />
      <p>8 (499) 423-63-56</p>
      <div class="flex gap-3">
        <Icon name="ri:whatsapp-fill" class="w-7 h-7 text-neonpink" />
        <Icon name="ic:baseline-telegram" class="w-7 h-7 text-neonpink" />
        <Icon name="mdi:youtube" class="w-7 h-7 text-neonpink" />
        <Icon name="dashicons:email-alt" class="w-7 h-7 text-neonpink" />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
