<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="p-6 bg-emerald-700/10 rounded-lg text-center">
    <div class="mb-4">
      <div class="h-24 w-24 rounded-full bg-emerald-700/30 mx-auto mb-2"></div>
      <h3 class="text-xl font-semibold text-stone-900">{{ member.name }}</h3>
      <p class="text-stone-700">{{ member.role }}</p>
    </div>
  </div>
</template>
