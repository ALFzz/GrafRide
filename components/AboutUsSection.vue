<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 my-32 lg:mt-32 px-4 lg:px-0">
    <div class="w-full lg:w-1/2 flex flex-col">
      <UITitle title="about" sub-title="О нас" />

      <Motion
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.8, delay: 0.2 }"
      >
        <p class="font-ruberoid font-bold text-base lg:text-lg">
          В <span class="text-neonpink">GRAFRIDE</span> мы объединяем страсть к автомобилям, профессиональный опыт и инновационные технологии, чтобы превратить обычный автомобиль в настоящее произведение искусства на колесах.
        </p>
      </Motion>

      <Motion
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, margin: '-50px' }"
          :transition="{ duration: 0.8, delay: 0.4 }"
      >
        <p class="font-ruberoid font-bold mt-6 lg:mt-8 text-base lg:text-lg">
          Наша компания, основанная на высших стандартах качества и клиентского сервиса, предоставляет широкий спектр услуг по тюнингу, призванных подчеркнуть индивидуальность и улучшить производительность вашего автомобиля.
        </p>
      </Motion>
    </div>

    <div class="w-full relative lg:w-auto mt-10 lg:mt-0 flex justify-center items-center lg:justify-start">
      <Motion
          :initial="{ scale: 0.8, opacity: 0, rotate: -50 }"
          :whileInView="{ scale: 1, opacity: 1, rotate: 0 }"
          :viewport="{ once: true }"
          :transition="{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }"
      >
        <Logo :for-ui="false" />
      </Motion>

      <Motion
          :initial="{ scale: 0.5, opacity: 0, x: '0%', y: '0%' }"
          :whileInView="{ scale: 1, opacity: 0.6 }"
          :viewport="{ once: true }"
          :transition="{ duration: 1.5, delay: 0.8 }"
      >
        <div class="transform-gpu absolute max-lg:right-0  -right-28 w-44 h-44 bg-neonpink rounded-lg blur-3xl opacity-60"/>
      </Motion>
    </div>
  </div>
</template>