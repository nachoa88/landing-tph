<script setup>
import Quote from "@/components/typography/Quote.vue";

const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
  quote: {
    type: String,
    required: false,
  },
  quoteIndex: {
    type: Number,
    default: 1, // Default index to insert the quote, in order to mix the quote with the content.
  },
});
</script>

<template>
  <div class="px-5 sm:px-10 md:px-20 py-5 md:py-10">
    <div v-for="(paragraph, index) in content" :key="index" class="text-stone-900 text-base md:text-lg my-2">
      <p v-html="paragraph"></p>
      <Quote v-if="quote && index === quoteIndex" :quote="quote" />
    </div>
  </div>
</template>
