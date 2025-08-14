<script setup lang="ts">
import type { IReview } from '@/types/review'

const reviews: IReview[] = [
  {
    id: 1,
    name: "Екатерина",
    car: "владелица Audi R8",
    reviewText: "От начала до конца GRAFRIDE были на высоте. Они не только слушают вас внимательно, но и добавляют свои собственные идеи, чтобы сделать ваш автомобиль уникальным. Спасибо за великолепную работу!",
  },
  {
    id: 2,
    name: "Александр",
    car: "владелец BMW M5",
    reviewText: "GRAFRIDE - это не просто тюнинг, это искусство! Они преобразили мой автомобиль, сделав его неотразимым. Профессионализм и внимание к деталям на высшем уровне.",

  },
  {
    id: 3,
    name: "Дмитрий",
    car: "владелец Mercedes-AMG GT",
    reviewText: "GRAFRIDE не просто мастера тюнинга, они создают произведения искусства. Вся команда профессионалов, и каждый проект - это отражение их страсти к автомобилям.",
  }
]
const animations = {
  section: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  glow: {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 0.8 },
    transition: { duration: 0.8, delay: 0.2 }
  },
  title: {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 }
  },
  subtitle: {
    initial: { y: 15, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.4 }
  },
  exclusiveImg: {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.6 }
  },
  carousel: (delay: number, y: number) => ({
    initial: { y: 30, opacity: 0 },
    whileInView: { y, opacity: 1 },
    transition: { duration: 0.7, delay }
  })
}
</script>

<template>
  <section class="my-32">
    <UITitle title="reviews" sub-title="Отзывы" />

    <div class="relative flex flex-col lg:flex-row gap-10">
      <Motion class="relative w-full lg:w-1/2" v-bind="animations.section">
        <Motion
            class="absolute top-0 w-24 h-24 bg-white rounded-lg blur-3xl opacity-80"
            v-bind="animations.glow"
        />

        <Motion class="text-block" v-bind="animations.title">
          <h2 class="font-gothic text-transparent text-stroke-1 text-stroke-color-white text-[40px] leading-tight">
            Ваш опыт, <br> наши достижения
          </h2>
        </Motion>

        <Motion class="mt-4" v-bind="animations.subtitle">
          <p class="font-ruberoid font-bold text-[13px]">
            Мы стремимся не просто удовлетворять ожидания клиентов, а превосходить их,
            <span class="text-neonpink">создавая уникальные и неповторимые творения</span>.
          </p>
        </Motion>

        <div class="relative mt-16">
          <Motion
              class="absolute max-[1355px]:hidden bottom-0 -left-28"
              v-bind="animations.exclusiveImg"
          >
            <nuxt-img
                width="100"
                height="430"
                loading="lazy"
                src="/images/Exclusive.png"
                alt="Exclusive"
            />
          </Motion>

          <div class="carousel-container">
            <Motion class="carousel-overlay" :initial="{ opacity: 0 }" :whileInView="{ opacity: 1 }" :transition="{ duration: 1.2, delay: 0.7 }" />

            <Motion v-bind="animations.carousel(0.7, 0)">
              <nuxt-img class="carousel-img" loading="lazy" src="/images/carousel_1.png" alt="carousel_1"/>
            </Motion>

            <Motion v-bind="animations.carousel(0.8, 10)">
              <nuxt-img class="carousel-img" loading="lazy" src="/images/carousel_2.png" alt="carousel_2"/>
            </Motion>

            <Motion v-bind="animations.carousel(0.9, 20)">
              <nuxt-img class="carousel-img" loading="lazy" src="/images/carousel_3.png" alt="carousel_3"/>
            </Motion>
          </div>
        </div>
      </Motion>

      <div class="relative w-full lg:w-1/2 flex flex-col gap-20">
        <div class="absolute top-1/2 right-0 w-32 h-32 bg-neonpink rounded-lg blur-3xl" />
        <ReviewItem
            v-for="review in reviews"
            :key="review.id"
            v-bind="review"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-container {
  @apply relative;
}

.carousel-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318] z-10;
}

.carousel-img {
  @apply w-full h-full relative z-0;
}

.text-block {
  @apply mb-4;
}
</style>