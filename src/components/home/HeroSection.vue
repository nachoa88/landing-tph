<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import SectionTitle from "@/components/typography/SectionTitle.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import dashboardImage from "@/assets/images/dashboard.webp";
const authStore = useAuthStore();

const stats = [
  { number: "40%", text: "Average Carbon Reduction" },
  { number: "90%", text: "Report Accuracy" },
  { number: "60%", text: "Process Automation" },
];
</script>

<template>
  <div class="grid px-4 lg:px-8 grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 sm:gap-y-20">
    <!-- Left Column: Text Content -->
    <div class="lg:col-span-7 lg:pr-8 flex flex-col justify-center">
      <div class="lg:max-w-lg">
        <SectionTitle main-text="Track your carbon footprint" highlight="without the complexity" />
        <p class="mt-6 text-lg leading-8 text-stone-700">
          Transform your business's environmental impact with real-time carbon tracking, actionable insights, and
          automated sustainability reporting. All in one powerful platform.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex gap-x-6">
          <BaseButton v-if="!authStore.isLoggedIn" to="/login" variant="primary">Start Free Trial</BaseButton>
          <BaseButton v-else to="/" variant="primary">Go to Dashboard</BaseButton>
          <button
            v-if="!authStore.isLoggedIn"
            class="text-base font-semibold leading-6 text-stone-900 hover:text-emerald-700 transition-colors"
          >
            <!-- Maybe change to "Learn more" instead, with a scroll down, change arrow down or go to about section -->
            Schedule a Demo <span aria-hidden="true">→</span>
          </button>
        </div>

        <!-- Stats -->
        <div class="mt-10 grid grid-cols-3 gap-4">
          <div v-for="stat in stats" :key="stat.number" class="border-l-4 border-emerald-700/30 pl-4">
            <div class="text-2xl font-bold text-emerald-700">{{ stat.number }}</div>
            <div class="text-sm font-semibold text-stone-600">{{ stat.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Visual Element -->
    <div class="lg:col-span-5">
      <div class="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
        <img :src="dashboardImage" alt="Carbon footprint tracking dashboard" class="object-cover w-full h-full" />
      </div>

      <!-- Trust Badges -->
      <div class="mt-6 space-y-4">
        <p class="nav-link-no-color text-stone-700 text-center">Trusted by leading companies worldwide</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div class="h-16 w-16 rounded-xl bg-emerald-700/30 animate-pulse mb-2"></div>
            <span class="text-stone-700 font-semibold">Microsoft</span>
          </div>
          <div class="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div class="h-16 w-16 rounded-xl bg-emerald-700/20 mb-2"></div>
            <span class="text-stone-700 font-semibold">Decathlon</span>
          </div>
          <div class="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div class="h-16 w-16 rounded-xl bg-emerald-700/30 animate-pulse delay-200 mb-2"></div>
            <span class="text-stone-700 font-semibold">IBM</span>
          </div>
          <div class="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div class="h-16 w-16 rounded-xl bg-emerald-700/20 mb-2"></div>
            <span class="text-stone-700 font-semibold">Accenture</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
