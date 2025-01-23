<script setup>
import BaseButton from '../ui/BaseButton.vue';

</script>

<template>
  <div class="my-12 p-8 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg text-white text-center">
    <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Environmental Impact?</h3>
    <p class="mb-6 max-w-2xl mx-auto">
      Join over 1,200 companies already making a difference. Start your 30-day free trial today.
    </p>
    <div class="flex justify-center gap-4">
      <BaseButton variant="secondary" to="/register">Start Free Trial</BaseButton>
      <!-- This should someday sent you to a demo version of the Calculator -->
      <BaseButton variant="other">Request a Demo</BaseButton>
    </div>
  </div>
</template>
