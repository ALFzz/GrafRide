<script setup lang="ts">
import type { IProduct } from "~/types/product";

const props = defineProps<IProduct>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('ru-RU').format(props.price);
});

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const imageAnimation = {
  initial: { scale: 0.95, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, delay: 0.1 }
};

const overlayAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.2 }
};

const contentAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.3 }
};

const textAnimation = (delay: number) => ({
  initial: { x: -10, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.4, delay }
});
</script>

<template>
  <Motion
      class="product-card"
      v-bind="cardAnimation"
  >
    <div class="image-container">
      <Motion v-bind="imageAnimation">
        <nuxt-img
            loading="lazy"
            class="product-image"
            :src="`/images/${image}.png`"
            :alt="title"
            width="360"
            height="240"
        />
      </Motion>
      <Motion
          class="image-overlay"
          v-bind="overlayAnimation"
      />
    </div>

    <Motion
        class="content-wrapper"
        v-bind="contentAnimation"
    >
      <Motion v-bind="textAnimation(0.4)" class="product-title">
        {{ title }}
      </Motion>

      <Motion v-bind="textAnimation(0.5)" class="product-subtitle">
        {{ subtitle }}
      </Motion>

      <Motion
          class="product-price"
          :initial="{ y: 10, opacity: 0 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.4, delay: 0.6 }"
      >
        {{ formattedPrice }} ₽
      </Motion>
    </Motion>

    <UIButton
        class="details-button"
        :is-fill="true"
    >
      Подробнее
    </UIButton>
  </Motion>
</template>

<style scoped>
.product-card {
  @apply flex w-[360px] flex-col bg-gre rounded-[35px] overflow-hidden;
}

.image-container {
  @apply relative;
}

.product-image {
  @apply rounded-t-[35px] w-[360px] h-auto;
}

.image-overlay {
  @apply absolute rounded-t-[35px] inset-0 bg-gradient-to-t from-gre via-transparent to-black/10;
}

.content-wrapper {
  @apply flex flex-col px-10;
}

.product-title {
  @apply font-gothic text-base;
}

.product-subtitle {
  @apply font-ruberoid text-start font-bold text-[13px] mt-2 min-h-[38px];
}

.product-price {
  @apply font-ruberoid text-start font-bold text-3xl mt-10;
}

.details-button {
  @apply w-5/6 py-3 self-center mb-10 mt-5;
}
</style>