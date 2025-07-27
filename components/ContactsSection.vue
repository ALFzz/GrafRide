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
          <div class="absolute bottom-0 w-32 h-32 bg-white rounded-lg blur-3xl opacity-50 "/>

          <img class="w-full rounded-l-3xl" src="/images/contact_1.png" alt="contact" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]" />
          <img
              src="/public/images/Disobedience.png" alt="dis"
              class="absolute max-lg:left-1/2 max-lg:-translate-x-1/2 -bottom-10  -right-20 font-kobar text-transparent text-stroke-color-white text-stroke-1"
          />
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="flex relative flex-col w-full lg:w-1/2 gap-5">
        <div class="absolute top-0 right-0 w-40 h-40 bg-neonpink rounded-lg blur-3xl opacity-60 "/>
        <ContactsInput placeholder="Введите Ваше имя" />
        <ContactsInput placeholder="8 (ххх) ххх-хх-хх" />
        <ContactsInput placeholder="Задайте интересующий вопрос" />

        <!-- Чекбокс -->
        <div class="flex flex-row gap-5">
          <label class="flex items-start gap-3 cursor-pointer select-none text-white">
            <input type="checkbox" v-model="checked" class="hidden peer" />
              <Icon
                  v-if="checked"
                  name="ri:checkbox-circle-fill"
                  class="text-neonpink transition w-6 h-6"
              />
              <div v-else class="w-6 h-6 rounded-full border-2 border-neonpink" />
          </label>
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
        </div>

        <UIButton class="w-full sm:w-1/2 self-center py-3 mt-5" :is-fill="false">
          Связаться
        </UIButton>
        <div class="absolute -bottom-20  top-8 max-[415px]:top-[420px] max-sm:top-[370px] max-sm:left-0 max-[910px]:top-[420px] max-[910px]:left-0 z-10 flex self-end flex-col gap-2.5">
          <span class="block h-0.5 ml-44 w-52 max-sm:w-32 bg-gradient-to-l from-white via-white to-transparent"></span>
          <span class="block h-0.5 ml-28 w-52 max-sm:w-32 bg-gradient-to-l from-white via-white to-transparent"></span>
          <span class="block h-0.5 ml-14 w-52 max-sm:w-32 bg-gradient-to-l from-white via-white to-transparent"></span>
          <span class="block h-0.5 w-52 max-sm:w-32 bg-gradient-to-l from-white via-white to-transparent"></span>



        </div>
      </div>
    </div>
  </div>
</template>
