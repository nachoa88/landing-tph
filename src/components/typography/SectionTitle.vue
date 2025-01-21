<script setup>
defineProps({
  highlight: String,
  mainText: String,
});
</script>

<template>
  <h1 class="text-stone-900 my-4 md:my-8 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
    {{ mainText }}
    <span v-if="highlight" class="text-emerald-700 font-extrabold">{{ highlight }}</span>
  </h1>
</template>
