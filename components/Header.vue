<script setup lang="ts">
const isMenuOpen = ref(false)

const menuItems = [
  { path: '/about_us', label: 'О нас' },
  { path: '/services', label: 'Услуги' },
  { path: '/reviews', label: 'Отзывы' },
  { path: '/contacts', label: 'Контакты' }
]

const socialIcons = [
  { name: 'ri:whatsapp-fill' },
  { name: 'ic:baseline-telegram' },
  { name: 'mdi:youtube' },
  { name: 'dashicons:email-alt' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="container mx-auto px-4 py-4 flex justify-between items-center font-ruberoid font-bold text-white relative">
    <NuxtLink to="/" aria-label="На главную">
      <Logo :for-ui="true" class="text-stroke" />
    </NuxtLink>

    <button
        class="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative"
        @click="toggleMenu"
        aria-label="Меню"
        aria-expanded="isMenuOpen"
    >
  <span
      class="block w-6 h-[2px] bg-white transition-all duration-300 absolute"
      :class="isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-2'"
  />
      <span
          class="block w-6 h-[2px] bg-white transition-all duration-300"
          :class="{'opacity-0': isMenuOpen}"
      />
      <span
          class="block w-6 h-[2px] bg-white transition-all duration-300 absolute"
          :class="isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-2'"
      />
    </button>

    <nav class="hidden lg:flex text-md gap-8 items-center">
      <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="hover:text-neonpink transition-colors"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div class="hidden lg:flex items-center gap-4">
      <Icon name="iconamoon:search-bold" class="w-7 h-7 hover:scale-110 transition-transform" />
      <p>8 (499) 423-63-56</p>
    </div>

    <nav class="hidden lg:flex gap-3">
      <Icon
          v-for="icon in socialIcons"
          :key="icon.name"
          :name="icon.name"
          class="w-7 h-7 text-neonpink hover:scale-110 transition-transform"
      />
    </nav>

    <Transition
        enter-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-500 ease-in-out"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
    >
      <div
          v-if="isMenuOpen"
          class="absolute z-20 top-full left-0 w-full bg-neutral-900 text-white flex flex-col items-center gap-4 py-4 overflow-hidden lg:hidden"
      >
        <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-neonpink transition-colors"
            @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>

        <Icon name="iconamoon:search-bold" class="w-7 h-7 hover:scale-110 transition-transform" />
        <p>8 (499) 423-63-56</p>

        <div class="flex gap-3">
          <Icon
              v-for="icon in socialIcons"
              :key="icon.name"
              :name="icon.name"
              class="w-7 h-7 text-neonpink hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </Transition>
  </header>
</template>