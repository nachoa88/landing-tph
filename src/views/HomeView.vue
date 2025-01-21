<script setup>
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-4 max-w-screen-xl mx-auto">
      <h1 class="text-stone-900 my-4 md:my-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
        This is <span class="text-emerald-700 font-extrabold">Home Page</span>
      </h1>
      <!-- Guest welcome -->
      <h2 v-if="!authStore.isLoggedIn" class="text-lg md:text-2xl text-stone-900 my-4 md:my-8">
        Welcome! This is the guest home page. As a guest you can only see the ranking.
        <span class="underline decoration-4 decoration-emerald-500 font-semibold"
          >Please login or register to start playing.</span
        >
      </h2>

      <!-- Authenticated user welcome -->
      <h2 v-else class="text-lg md:text-2xl text-stone-900 my-4 md:my-8">
        Welcome back!
        <span class="underline decoration-4 decoration-emerald-500 font-semibold">Ready to play?</span>
      </h2>

      <!-- Highlit section -->
      <div class="highlight-section p-8 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border-accent border-l-4 pl-4">
            <span class="primary-text">2,500kg</span>
            <p class="secondary-text">CO2 Saved</p>
          </div>
          <div class="border-accent border-l-4 pl-4">
            <span class="primary-text">1,200</span>
            <p class="secondary-text">Active Users</p>
          </div>
          <div class="accent-color p-4 rounded-lg text-center">
            <span class="text-xl font-bold">Join now!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
