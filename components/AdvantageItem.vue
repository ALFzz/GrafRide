<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  }
})

const borderAnimation = {
  initial: { x: -10, y: -10, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

const middleBorderAnimation = {
  ...borderAnimation,
  initial: { x: -5, y: -5, opacity: 0 },
  transition: { duration: 0.5, delay: 0.1 }
}

const contentAnimation = {
  initial: { scale: 0.95, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { type: 'spring', stiffness: 300, damping: 10, delay: 0.2 }
}

const textAnimation = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

const borderClass = 'w-[360px] h-[200px] border-gre border-2 rounded-[35px]'
const contentClass = 'flex flex-col gap-2 py-6 px-8 absolute top-4 w-[360px] h-[200px] border-neonpink border-2 rounded-[35px]'
</script>

<template>
  <div class="relative">
    <!-- Границы -->
    <Motion
        :class="borderClass"
        v-bind="borderAnimation"
    />

    <Motion
        :class="[borderClass, 'absolute top-2']"
        v-bind="middleBorderAnimation"
    />

    <!-- Контент -->
    <Motion
        :class="contentClass"
        v-bind="contentAnimation"
    >
      <Motion
          class="text-base font-gothic"
          v-bind="textAnimation"
          :transition="{ ...textAnimation.transition, delay: 0.3 }"
      >
        {{ title }}
      </Motion>

      <Motion
          class="text-sm font-ruberoid font-bold"
          v-bind="textAnimation"
          :transition="{ ...textAnimation.transition, delay: 0.4 }"
      >
        {{ subTitle }}
      </Motion>
    </Motion>
  </div>
</template>