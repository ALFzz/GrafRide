<script setup lang="ts">

import AdvantagesItem from "~/components/AdvantageItem.vue";
</script>

<template>
  <div class="flex flex-col my-40">
    <UITitle title="advantages" sub-title="Преимущества"/>
    <div class="flex flex-wrap flex-row justify-center items-center gap-7 max-xl:gap-20">
      <AdvantagesItem
          title="Профессиональный уровень навыков"
          sub-title="Наши специалисты имеют высокий уровень профессионализма.Это позволяет предоставлять услуги высшего качества в области тюнинга."
      />
      <AdvantagesItem
          title="Инновационные технологии современное оборудование"
          sub-title="Мы находимся на передовых позициях в индустрии тюнинга и обеспечиваем клиентов передовыми и эффективными решениями."
      />
      <AdvantagesItem
          title="Гарантированное качество"
          sub-title="Мы предоставляем гарантию на свои услуги и использованные детали. Гарантийный срок составляет 12 месяцев или более."
      />
    </div>
  </div>
</template>

<style scoped>

</style>