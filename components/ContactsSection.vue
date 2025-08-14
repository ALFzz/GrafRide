<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)

const contactItems = [
  { title: 'Контактный номер', subTitle: '8 (499) 423-63-56' },
  { title: 'Адрес', subTitle: 'Москва, Костянский пер., 4' },
  { title: 'Электронная почта', subTitle: 'grafride@gmail.ru' },
  { title: 'Режим работы', subTitle: 'Ежедневно с 10.00 до 21.00' }
]

const inputPlaceholders = [
  'Введите Ваше имя',
  '8 (ххх) ххх-хх-хх',
  'Задайте интересующий вопрос'
]

const lines = [
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-0' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-14' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-28' },
  { width: 'w-52 max-sm:w-32', marginClass: 'ml-44' }
]

const animations = {
  leftSection: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  rightSection: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  contactItem: (index: number) => ({
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.1 + index * 0.1 }
  }),
  glowEffect: {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 0.5 },
    transition: { duration: 0.8, delay: 0.6 }
  },
  contactImage: {
    initial: { scale: 0.95, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.7, delay: 0.6 }
  },
  imageOverlay: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.0, delay: 0.7 }
  },
  logoImage: {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 10, delay: 0.8 }
  },
  inputField: (index: number) => ({
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 + index * 0.1 }
  }),
  checkboxSection: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.6 }
  },
  checkboxAnimation: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 500 }
  },
  lineAnimation: (index: number) => ({
    initial: { scaleX: 0, transformOrigin: 'left center' },
    whileInView: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  })
}
</script>

<template>
  <div class="flex flex-col">
    <UITitle title="contacts" sub-title="Контакты" />

    <div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
      <Motion
          class="flex flex-col w-full lg:w-1/2"
          v-bind="animations.leftSection"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <Motion
              v-for="(item, index) in contactItems"
              :key="item.title"
              v-bind="animations.contactItem(index)"
          >
            <ContactItem :title="item.title" :sub-title="item.subTitle" />
          </Motion>
        </div>

        <div class="relative mt-10">
          <Motion
              class="absolute bottom-0 w-32 h-32 bg-white rounded-lg blur-3xl opacity-50"
              v-bind="animations.glowEffect"
          />

          <Motion v-bind="animations.contactImage">
            <nuxt-img
                class="w-full rounded-l-3xl"
                width="943"
                height="350"
                loading="lazy"
                src="/images/contact_1.png"
                alt="contact"
            />
          </Motion>

          <Motion
              class="absolute inset-0 bg-gradient-to-r from-[#171318]/0 via-transparent to-[#171318]"
              v-bind="animations.imageOverlay"
          />

          <Motion
              class="absolute -bottom-10 -right-20 max-lg:left-1/2 max-lg:right-auto max-lg:transform max-lg:-translate-x-1/2"
              v-bind="animations.logoImage"
          >
            <nuxt-img
                class="max-lg:mx-auto max-lg:h-[60px] max-[400px]:h-[30px] max-[500px]:h-[40px] max-sm:h-[50px]"
                width="490"
                height="86"
                src="/images/Disobedience.png"
                alt="dis"
                loading="lazy"
            />
          </Motion>
        </div>
      </Motion>

      <Motion
          class="flex relative flex-col w-full lg:w-1/2 gap-5"
          v-bind="animations.rightSection"
      >
        <Motion
            class="absolute top-0 right-0 w-40 h-40 bg-neonpink rounded-lg blur-3xl opacity-60"
            v-bind="animations.glowEffect"
        />

        <Motion
            v-for="(placeholder, index) in inputPlaceholders"
            :key="placeholder"
            v-bind="animations.inputField(index)"
        >
          <ContactsInput :placeholder="placeholder" />
        </Motion>

        <Motion
            class="flex flex-row gap-5"
            v-bind="animations.checkboxSection"
        >
          <label class="flex items-start gap-3 cursor-pointer select-none text-white">
            <input type="checkbox" v-model="checked" class="hidden peer" />
            <Motion
                :key="checked.toString()"
                v-bind="animations.checkboxAnimation"
            >
              <Icon
                  v-if="checked"
                  name="ri:checkbox-circle-fill"
                  class="text-neonpink transition w-6 h-6"
              />
              <div v-else class="w-6 h-6 rounded-full border-2 border-neonpink" />
            </Motion>
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
        </Motion>

        <UIButton class="w-full sm:w-1/2 self-center py-3 mt-5" :is-fill="false">
          Связаться
        </UIButton>

        <div class="absolute -bottom-20 top-8 max-[415px]:top-[420px] max-sm:top-[370px] max-sm:left-0 max-[910px]:top-[420px] max-[910px]:left-0 z-10 flex self-end flex-col gap-2.5">
          <Motion
              v-for="(line, index) in lines"
              :key="index"
              class="relative h-0.5 overflow-hidden"
              :class="[line.width, line.marginClass]"
              v-bind="animations.lineAnimation(index)"
          >
            <div class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white to-transparent" />
          </Motion>
        </div>
      </Motion>
    </div>
  </div>
</template>