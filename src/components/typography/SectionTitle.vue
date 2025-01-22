<script setup>
defineProps({
  text: String,
  highlight: String,
});
</script>

<template>
  <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900">
    {{ text }}
    <span v-if="highlight" class="text-emerald-700">{{ highlight }}</span>
  </h1>
</template>