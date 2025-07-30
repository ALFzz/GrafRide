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
</script>

<template>
  <div class="flex flex-col my-32">
    <UITitle title="reviews" sub-title="Отзывы" />
    <div class="flex relative flex-row max-lg:flex-col gap-10">
      <Motion
          class="flex flex-col w-1/2 max-lg:w-full relative"
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6 }"
      >
        <Motion
            class="absolute top-0 w-24 h-24 bg-white rounded-lg blur-3xl opacity-80"
            :initial="{ scale: 0.8, opacity: 0 }"
            :whileInView="{ scale: 1, opacity: 0.8 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
        />

        <Motion
            class="font-gothic text-transparent text-stroke-1 text-stroke-color-white text-[40px] leading-tight"
            :initial="{ y: 20, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
        >
          Ваш опыт, <br> наши достижения
        </Motion>

        <Motion
            class="font-ruberoid font-bold text-[13px] mt-4"
            :initial="{ y: 15, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.4 }"
        >
          Мы стремимся не просто удовлетворять ожидания клиентов, а превосходить их,
          <span class="text-neonpink">создавая уникальные и неповторимые творения</span>.
        </Motion>

        <div class="relative flex flex-col gap-5 mt-16">
          <Motion
              class="absolute max-[1355px]:hidden bottom-0 -left-28"
              :initial="{ x: -50, opacity: 0 }"
              :whileInView="{ x: 0, opacity: 1 }"
              :transition="{ duration: 0.7, delay: 0.6 }"
          >
            <nuxt-img class="w-[100px] h-[360px]" loading="lazy" src="/images/Exclusive.png" alt="Exclusive"/>
          </Motion>

          <div class="relative">
            <Motion
                class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]"
                :initial="{ opacity: 0 }"
                :whileInView="{ opacity: 1 }"
                :transition="{ duration: 1.2, delay: 0.7 }"
            />

            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 0, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.7 }"
            >
              <nuxt-img class="w-full h-full" loading="lazy" src="/images/carousel_1.png" alt="carousel_1"/>
            </Motion>

            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 10, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.8 }"
            >
              <nuxt-img class="w-full h-full" loading="lazy" src="/images/carousel_2.png" alt="carousel_2"/>
            </Motion>

            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 20, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.9 }"
            >
              <nuxt-img class="w-full h-full" loading="lazy" src="/images/carousel_3.png" alt="carousel_3"/>
            </Motion>
          </div>
        </div>
      </Motion>

      <div class="flex relative w-1/2 max-lg:w-full flex-col gap-20">
        <div class="absolute top-1/2 right-0 w-32 h-32 bg-neonpink rounded-lg blur-3xl  "/>
        <ReviewItem
            v-for="review in reviews"
            :key="review.id"
            :id="review.id"
            :name="review.name"
            :car="review.car"
            :review-text="review.reviewText"
        />
      </div>



    </div>

  </div>
</template>

<style scoped>
img {
  position: relative;
  z-index: 1;
}

.bg-gradient-to-r {
  z-index: 2;
  transition: opacity 1.2s ease;
}
</style>