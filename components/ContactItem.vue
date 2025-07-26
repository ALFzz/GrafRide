<script setup lang="ts">
defineProps({
  title: {
    type:String,
    required:true
  },
  subTitle: {
    type: String,
    required:true
  }
})
</script>

<template>
  <div>
    <p class="font-gothic text-base">{{title}}:</p>
    <p class="font-ruberoid text-neonpink font-extrabold text-sm mt-4">{{subTitle}}</p>
  </div>
</template>

<style scoped>

</style>