<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-10 lg:gap-40 mt-16 lg:mt-32 px-4 lg:px-0">
    <div class="w-full lg:w-1/2 flex flex-col">
      <div class="flex flex-col w-fit mb-6 lg:mb-10">
        <h1 class="uppercase font-marksquad text-gre text-4xl lg:text-[48px]">about</h1>
        <h3 class="font-gothic self-end text-xl lg:text-[26px] -mr-2 lg:-mr-6 -mt-2 lg:-mt-6">О нас</h3>
      </div>
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