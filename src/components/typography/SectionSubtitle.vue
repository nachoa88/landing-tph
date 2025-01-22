<script setup>
defineProps({
  text: String,
  highlightText: String,
});
</script>

<template>
  <h2 class="text-stone-800 text-lg md:text-2xl my-4 max-w-3xl mx-auto text-center">
    {{ text }}
    <span v-if="highlightText" class="underline decoration-4 decoration-emerald-500 font-semibold">
      {{ highlightText }}
    </span>
  </h2>
</template>
