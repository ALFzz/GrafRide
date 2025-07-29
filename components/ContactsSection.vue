<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)

const lines = [
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-0' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-14' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-28' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-44' }
]
</script>

<template>
  <div class="flex flex-col">
    <UITitle title="contacts" sub-title="Контакты" />

    <div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
      <Motion
          class="flex flex-col w-1/2 max-lg:w-full"
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6 }"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <Motion
              v-for="(item, index) in [
              { title: 'Контактный номер', subTitle: '8 (499) 423-63-56' },
              { title: 'Адрес', subTitle: 'Москва, Костянский пер., 4' },
              { title: 'Электронная почта', subTitle: 'grafride@gmail.ru' },
              { title: 'Режим работы', subTitle: 'Ежедневно с 10.00 до 21.00' }
            ]"
              :key="item.title"
              :initial="{ y: 20, opacity: 0 }"
              :whileInView="{ y: 0, opacity: 1 }"
              :transition="{ duration: 0.5, delay: 0.1 + index * 0.1 }"
          >
            <ContactItem :title="item.title" :sub-title="item.subTitle" />
          </Motion>
        </div>

        <Motion
            class="relative mt-10"
            :initial="{ opacity: 0 }"
            :whileInView="{ opacity: 1 }"
            :transition="{ duration: 0.6, delay: 0.5 }"
        >
          <Motion
              class="absolute bottom-0 w-32 h-32 bg-white rounded-lg blur-3xl opacity-50"
              :initial="{ scale: 0.8, opacity: 0 }"
              :whileInView="{ scale: 1, opacity: 0.5 }"
              :transition="{ duration: 0.8, delay: 0.6 }"
          />

          <Motion
              class=" rounded-l-3xl"
              :initial="{ scale: 0.95, opacity: 0 }"
              :whileInView="{ scale: 1, opacity: 1 }"
              :transition="{ duration: 0.7, delay: 0.6 }"
          >
            <nuxt-img class="w-full" loading="lazy" src="/images/contact_1.png" alt="contact" />
          </Motion>

          <Motion
              class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]"
              :initial="{ opacity: 0 }"
              :whileInView="{ opacity: 1 }"
              :transition="{ duration: 1.0, delay: 0.7 }"
          />

          <Motion
              class="absolute -bottom-10 -right-20 max-lg:left-1/2 max-lg:right-auto max-lg:transform max-lg:-translate-x-1/2"
              :initial="{ y: 30, opacity: 0 }"
              :whileInView="{ y: 0, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 300, damping: 10, delay: 0.8 }"
          >
            <img class="max-lg:mx-auto" src="/public/images/Disobedience.png" alt="dis" />
          </Motion>
        </Motion>
      </Motion>

      <Motion
          class="flex relative flex-col w-full lg:w-1/2 gap-5"
          :initial="{ opacity: 0, x: 20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
      >
        <Motion
            class="absolute top-0 right-0 w-40 h-40 bg-neonpink rounded-lg blur-3xl opacity-60"
            :initial="{ scale: 0.8, opacity: 0 }"
            :whileInView="{ scale: 1, opacity: 0.6 }"
            :transition="{ duration: 0.8, delay: 0.3 }"
        />

        <Motion
            v-for="(placeholder, index) in [
            'Введите Ваше имя',
            '8 (ххх) ххх-хх-хх',
            'Задайте интересующий вопрос'
          ]"
            :key="placeholder"
            :initial="{ y: 20, opacity: 0 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.3 + index * 0.1 }"
        >
          <ContactsInput :placeholder="placeholder" />
        </Motion>

        <Motion
            class="flex flex-row gap-5"
            :initial="{ opacity: 0 }"
            :whileInView="{ opacity: 1 }"
            :transition="{ duration: 0.5, delay: 0.6 }"
        >
          <label class="flex items-start gap-3 cursor-pointer select-none text-white">
            <input type="checkbox" v-model="checked" class="hidden peer" />
            <Motion
                :key="checked.toString()"
                :initial="{ scale: 0.8 }"
                :animate="{ scale: 1 }"
                :transition="{ type: 'spring', stiffness: 500 }"
            >
              <Icon
                  v-if="checked"
                  name="ri:checkbox-circle-fill"
                  class="text-neonpink transition w-6 h-6"
              />
              <div v-else class="w-6 h-6 rounded-full border-2 border-neonpink" />
            </Motion>
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
        </Motion>

          <UIButton class="w-full sm:w-1/2 self-center py-3 mt-5" :is-fill="false">Связаться</UIButton>

        <div class="absolute -bottom-20  top-8 max-[415px]:top-[420px] max-sm:top-[370px] max-sm:left-0 max-[910px]:top-[420px] max-[910px]:left-0 z-10 flex self-end flex-col gap-2.5">
          <motion
              as="div"
              v-for="(line, index) in lines"
              :key="index"
              class="relative h-0.5 overflow-hidden"
              :class="[line.width, line.marginClass]"
          >
            <motion
                as="div"
                class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white to-transparent"
                :initial="{ scaleX: 0, transformOrigin: 'left center' }"
                :whileInView="{
            scaleX: 1,
            transition: {
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }
          }"
            />
          </motion>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style scoped>

</style>