<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col">
    <UITitle title="contacts" sub-title="Контакты" />
    <div class="flex flex-row">
      <div class="">
        <div class="grid grid-cols-2 gap-16">
          <ContactItem
              title="Контактный  номер"
              sub-title="8 (499) 423-63-56"
          />
          <ContactItem
              title="Адрес"
              sub-title="Москва, Костянский пер., 4"
          />
          <ContactItem
              title="Электронная почта"
              sub-title="grafride@gmail.ru"
          />
          <ContactItem
              title="Режим работы"
              sub-title="Ежедневно с 10.00 до 21.00"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>