<script setup>
defineProps({
  quote: String,
});
</script>

<template>
  <blockquote class="p-4 my-4 border-s-4 border-emerald-300 bg-emerald-700/20">
    <p class="text-lg sm:text-xl md:text-2xl italic font-medium leading-relaxed text-stone-700">
      {{ quote }}
    </p>
  </blockquote>
</template>
