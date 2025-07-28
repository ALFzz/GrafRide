<script setup lang="ts">

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
        <!-- Анимированное свечение -->
        <Motion
            class="absolute top-0 w-24 h-24 bg-white rounded-lg blur-3xl opacity-80"
            :initial="{ scale: 0.8, opacity: 0 }"
            :whileInView="{ scale: 1, opacity: 0.8 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
        />

        <!-- Анимированный заголовок -->
        <Motion
            class="font-gothic text-transparent text-stroke-1 text-stroke-color-white text-[40px] leading-tight"
            :initial="{ y: 20, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
        >
          Ваш опыт, <br> наши достижения
        </Motion>

        <!-- Анимированный текст -->
        <Motion
            class="font-ruberoid font-bold text-[13px] mt-4"
            :initial="{ y: 15, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.4 }"
        >
          Мы стремимся не просто удовлетворять ожидания клиентов, а превосходить их,
          <span class="text-neonpink">создавая уникальные и неповторимые творения</span>.
        </Motion>

        <!-- Анимированная галерея -->
        <div class="relative flex flex-col gap-5 mt-16">
          <!-- Декоративный элемент -->
          <Motion
              class="absolute max-[1355px]:hidden bottom-0 w-[100px] h-[360px] -left-28"
              :initial="{ x: -50, opacity: 0 }"
              :whileInView="{ x: 0, opacity: 1 }"
              :transition="{ duration: 0.7, delay: 0.6 }"
          >
            <img src="/public/images/Exclusive.png" alt="Exclusive">
          </Motion>

          <!-- Контейнер для изображений с градиентом -->
          <div class="relative">
            <!-- Градиент (теперь анимируется вместе с изображениями) -->
            <Motion
                class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]"
                :initial="{ opacity: 0 }"
                :whileInView="{ opacity: 1 }"
                :transition="{ duration: 1.2, delay: 0.7 }"
            />

            <!-- Изображения карусели -->
            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 0, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.7 }"
            >
              <img src="/public/images/carousel_1.png" alt="carousel_1">
            </Motion>

            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 10, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.8 }"
            >
              <img src="/public/images/carousel_2.png" alt="carousel_2">
            </Motion>

            <Motion
                :initial="{ y: 30, opacity: 0 }"
                :whileInView="{ y: 20, opacity: 1 }"
                :transition="{ duration: 0.7, delay: 0.9 }"
            >
              <img src="/public/images/carousel_3.png" alt="carousel_3">
            </Motion>
          </div>
        </div>
      </Motion>

      <div class="flex relative w-1/2 max-lg:w-full flex-col gap-20">
        <div class="absolute top-1/2 right-0 w-32 h-32 bg-neonpink rounded-lg blur-3xl  "/>

        <ReviewItem
            name="Екатерина"
            car="владелица Audi R8"
            review-text="От начала до конца GRAFRIDE были на высоте. Они не только слушают вас внимательно, но и добавляют свои собственные идеи, чтобы сделать ваш автомобиль уникальным. Спасибо за великолепную работу!"
        />
        <ReviewItem
            name="Андрей"
            car="владелец Toyota Land Cruiser"
            review-text="GRAFRIDE - это не просто тюнинг, это искусство! Они преобразили мой автомобиль, сделав его неотразимым. Профессионализм и внимание к деталям на высшем уровне."
        />
        <ReviewItem
            name="Алексей"
            car="владелец Porsche 911"
            review-text="GRAFRIDE не просто мастера тюнинга, они создают произведения искусства. Вся команда профессионалов, и каждый проект - это отражение их страсти к автомобилям."
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