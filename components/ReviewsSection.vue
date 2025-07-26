<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col my-32">
    <UITitle title="reviews" sub-title="Отзывы" />
    <div class="flex flex-row gap-10">
      <div class="flex flex-col w-1/2">
        <h1 class="font-gothic text-transparent text-stroke-1 text-stroke-color-white text-[48px] leading-tight">Ваш опыт, <br> наши достижения</h1>
        <p class="font-ruberoid font-bold text-[13px] mt-4">Мы стремимся не просто удовлетворять ожидания клиентов, а превосходить их,
          <span class="text-neonpink">создавая уникальные и неповторимые творения</span>.
        </p>
        <div class="relative flex flex-col gap-5 mt-16">
          <div class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]"></div>
          <img src="/public/images/carousel_1.png" alt="carousel_1">
          <img src="/public/images/carousel_2.png" alt="carousel_2">
          <img src="/public/images/carousel_3.png" alt="carousel_3">
        </div>
      </div>

      <div class="flex w-1/2 flex-col gap-20">
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

</style>