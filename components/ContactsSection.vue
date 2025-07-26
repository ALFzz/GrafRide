<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>

<template>
  <div class="flex flex-col ">
    <UITitle title="contacts" sub-title="Контакты" />

    <div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
      <!-- Левая колонка -->
      <div class="flex flex-col w-1/2 max-lg:w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <ContactItem title="Контактный номер" sub-title="8 (499) 423-63-56" />
          <ContactItem title="Адрес" sub-title="Москва, Костянский пер., 4" />
          <ContactItem title="Электронная почта" sub-title="grafride@gmail.ru" />
          <ContactItem title="Режим работы" sub-title="Ежедневно с 10.00 до 21.00" />
        </div>

        <div class="relative mt-10">
          <img class="w-full rounded-l-3xl" src="/images/contact_1.png" alt="contact" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]" />
          <h1
              class="absolute -bottom-5 right-5 text-[36px] sm:text-[60px] lg:text-[90px] font-kobar text-transparent text-stroke-color-white text-stroke-1"
          >
            Disobedience
          </h1>
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="flex flex-col w-full lg:w-1/2 gap-5">
        <ContactsInput placeholder="Введите Ваше имя" />
        <ContactsInput placeholder="8 (ххх) ххх-хх-хх" />
        <ContactsInput placeholder="Задайте интересующий вопрос" />

        <!-- Чекбокс -->
        <div class="flex">
          <label class="flex items-start gap-3 cursor-pointer select-none text-white">
            <input type="checkbox" v-model="checked" class="hidden peer" />
            <div class="mt-1">
              <Icon
                  v-if="checked"
                  name="ri:checkbox-circle-fill"
                  class="text-neonpink transition w-6 h-6"
              />
              <div v-else class="w-6 h-6 rounded-full border-2 border-neonpink" />
            </div>

            <p class="text-sm sm:text-base font-medium">
              Я согласен(а) с
              <a href="#" class="text-neonpink underline hover:text-neonpink transition">
                политикой конфиденциальности
              </a>
              и
              <a href="#" class="text-neonpink underline hover:text-neonpink transition">
                обработкой персональных данных
              </a>
            </p>
          </label>
        </div>

        <UIButton class="w-full sm:w-1/2 self-center py-3 mt-5" :is-fill="false">
          Связаться
        </UIButton>
      </div>
    </div>
  </div>
</template>
