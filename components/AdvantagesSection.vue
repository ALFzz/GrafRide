<script setup lang="ts">
const advantages = [
  {
    id: 1,
    title: "Профессиональный уровень навыков",
    subtitle: "Наши специалисты имеют высокий уровень профессионализма.Это позволяет предоставлять услуги высшего качества в области тюнинга."
  },
  {
    id: 2,
    title: "Инновационные технологии современное оборудование",
    subtitle: "Мы находимся на передовых позициях в индустрии тюнинга и обеспечиваем клиентов передовыми и эффективными решениями."
  },
  {
    id: 3,
    title: "Гарантированное качество",
    subtitle: "Мы предоставляем гарантию на свои услуги и использованные детали. Гарантийный срок составляет 12 месяцев или более."
  },
]
</script>

<template>
  <div class="flex flex-col my-32">
    <UITitle title="advantages" sub-title="Преимущества"/>
    <div class="flex flex-wrap flex-row justify-center items-center gap-7 max-xl:gap-20">
      <AdvantageItem
          v-for="(advantage, index) in advantages"
          :key="index"
          :title="advantage.title"
          :sub-title="advantage.subtitle"
      />
    </div>
  </div>
</template>

<style scoped>

</style>