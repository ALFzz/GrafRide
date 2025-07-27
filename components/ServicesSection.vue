<script setup lang="ts">

class ServiceProduct {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;

  constructor(
      id: number,
      image: string,
      title: string,
      subtitle: string,
      price: number
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
  }
}

const products: ServiceProduct[] = [
  new ServiceProduct(
      1,
      'bmw',
      'Оклейка виниловой пленкой',
      'Полная без проемов / с проемами',
      195000
  ),
  new ServiceProduct(
      2,
      'light',
      'Тюнинговые фары',
      'Современные и стильные оптические решения для вашего автомобиля',
      50000
  ),
  new ServiceProduct(
      3,
      'closers',
      'Доводчики дверей',
      'Установка доводчиков / замена / доработка',
      150000
  ),
  new ServiceProduct(
      4,
      'thresholds',
      'Выдвижные пороги',
      'Установка выдвижных порогов',
      210000
  ),
  new ServiceProduct(
      5,
      'airdynamics',
      'Аэродинамический тюнинг',
      'Работа над формой для улучшения аэродинамических характеристик',
      50000
  ),
  new ServiceProduct(
      6,
      'disks',
      'Легкосплавные диски',
      'Диски для улучшения управляемости и внешнего вида',
      30000
  ),
];

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