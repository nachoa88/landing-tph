<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div class="highlight-section p-8 my-8 rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="border-accent border-l-4 pl-4">
        <span class="primary-text">5,000+</span>
        <p class="secondary-text">Tons of CO2 offset</p>
      </div>
      <div class="border-accent border-l-4 pl-4">
        <span class="primary-text">1,200+</span>
        <p class="secondary-text">Active users</p>
      </div>
      <!-- Guest User Call-to-Action -->
      <div v-if="!authStore.isLoggedIn" class="accent-color p-4 rounded-lg text-center">
        <span class="text-xl font-bold">Join the action!</span>
      </div>
      <!-- Authenticated User Call-to-Action -->
      <div v-else class="accent-color p-4 rounded-lg text-center">
        <span class="text-xl font-bold">Continue helping!</span>
      </div>
    </div>
  </div>
</template>
