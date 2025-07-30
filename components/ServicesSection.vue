<script setup lang="ts">

import type {IProduct} from "~/types/product";

const products: IProduct[] = [
  {
    id: 1,
    title: 'Оклейка виниловой пленкой',
    subtitle: 'Полная без проемов / с проемами',
    image: 'bmw',
    price: 195000
  },
  {
    id: 2,
    title: 'Тюнинговые фары',
    subtitle: 'Современные и стильные оптические решения для вашего автомобиля',
    image: 'light',
    price: 50000
  },
  {
    id: 3,
    title: 'Доводчики дверей',
    subtitle: 'Установка доводчиков / замена / доработка',
    image: 'closers',
    price: 150000
  },
  {
    id: 4,
    title: 'Выдвижные пороги',
    subtitle: 'Установка выдвижных порогов',
    image: 'thresholds',
    price: 210000
  },
  {
    id: 5,
    title: 'Аэродинамический тюнинг',
    subtitle: 'Работа над формой для улучшения аэродинамических характеристик',
    image: 'airdynamics',
    price: 50000
  },
  {
    id: 6,
    title: 'Легкосплавные диски',
    subtitle: 'Диски для улучшения управляемости и внешнего вида',
    image: 'disks',
    price: 30000
  },
]


</script>

<template>
  <div class="flex flex-col my-32">
    <UITitle title="services" sub-title="Услуги"/>
    <div class="flex relative flex-row justify-center items-center flex-wrap gap-7">
      <div class="absolute top-0 right-32 w-80 h-80 bg-neonpink rounded-lg blur-3xl opacity-60 "/>
      <div class="absolute -bottom-20 max-sm:left-0  left-52 w-52 h-52 bg-neonpink rounded-lg blur-3xl opacity-60 "/>
      <ServiceItem
          class="z-20"
          v-for="(product, index) in products"
          :key="index"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :subtitle="product.subtitle"
          :price="product.price"
      />
    </div>
    <div class="flex flex-row justify-center max-sm:justify-between max-[460px]:gap-0 gap-12 items-center mt-10">
      <div class="bg-gre h-0.5 w-1/2"></div>
      <UIButton class="px-14 py-2 text-nowrap " :is-fill="false">Показать больше</UIButton>
      <div class="bg-gre h-0.5 w-1/2"></div>
    </div>
  </div>


</template>

<style scoped>

</style>