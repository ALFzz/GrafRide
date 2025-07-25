<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-10 lg:gap-40 my-32 lg:mt-32 px-4 lg:px-0">
    <div class="w-full lg:w-1/2 flex flex-col">
      <UITitle title="about" sub-title="О нас" />
      <p class="font-ruberoid font-bold text-base lg:text-lg">
        В <span class="text-neonpink">GRAFRIDE</span> мы объединяем страсть к автомобилям, профессиональный опыт и инновационные технологии, чтобы превратить обычный автомобиль в настоящее произведение искусства на колесах.
      </p>
      <p class="font-ruberoid font-bold mt-6 lg:mt-8 text-base lg:text-lg">
        Наша компания, основанная на высших стандартах качества и клиентского сервиса, предоставляет широкий спектр услуг по тюнингу, призванных подчеркнуть индивидуальность и улучшить производительность вашего автомобиля.
      </p>
    </div>

    <div class="w-full lg:w-auto mt-10 lg:mt-0 flex justify-center lg:justify-start">
      <Logo :for-ui="false" />
    </div>
  </div>

</template>

<style scoped>

</style>