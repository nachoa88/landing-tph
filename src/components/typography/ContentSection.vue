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
  <div v-for="(paragraph, index) in content" :key="index" class="mt-6 text-lg leading-8 text-stone-700">
    <p v-html="paragraph"></p>
    <Quote v-if="quote && index === quoteIndex" :quote="quote" />
  </div>
</template>
