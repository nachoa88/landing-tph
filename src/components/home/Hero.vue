<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import SectionTitle from "@/components/typography/SectionTitle.vue";
import ContentSection from "@/components/typography/ContentSection.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import ArrowButton from "../ui/ArrowButton.vue";
import dashboardImage from "@/assets/images/dashboard.webp";
import accentureLogo from "@/assets/logos/accenture_logo.png";
import decathlonLogo from "@/assets/logos/decathlon_logo.png";
import ibmLogo from "@/assets/logos/ibm_logo.png";
import microsoftLogo from "@/assets/logos/microsoft_logo.png";

const authStore = useAuthStore();

const guestHeroContent = [
  "Transform your business's environmental impact with real-time carbon tracking, actionable insights, and automated sustainability reporting. All in one powerful platform.",
];

const userHeroContent = [
  "Continue driving your sustainability goals with real-time tracking, actionable insights, and automated reports. Your journey to a greener future starts here.",
];

const stats = [
  { number: "40%", text: "Average Carbon Reduction" },
  { number: "90%", text: "Report Accuracy" },
  { number: "60%", text: "Process Automation" },
];

const trustBadges = [
  { logo: microsoftLogo, name: "Microsoft" },
  { logo: decathlonLogo, name: "Decathlon" },
  { logo: ibmLogo, name: "IBM" },
  { logo: accentureLogo, name: "Accenture" },
];
</script>

<template>
  <!-- If i have time I'll create subcomponents -->
  <div class="grid px-4 lg:px-8 grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 sm:gap-y-20">
    <!-- Left Column: Text Content -->
    <div class="lg:col-span-7 lg:pr-8 flex flex-col justify-center">
      <div class="lg:max-w-lg">
        <SectionTitle
          v-if="!authStore.isLoggedIn"
          text="Track your carbon footprint"
          highlight="without the complexity"
        />
        <SectionTitle v-else text="Welcome back, let's make" highlight="an impact together!" />
        <ContentSection v-if="!authStore.isLoggedIn" :content="guestHeroContent" />
        <ContentSection v-else :content="userHeroContent" />

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row gap-6">
          <BaseButton v-if="!authStore.isLoggedIn" to="/register" variant="primary">Start Free Trial</BaseButton>
          <BaseButton v-else to="/ecotracker" variant="primary" class="justify-center">Go to Dashboard</BaseButton>
          <ArrowButton v-if="!authStore.isLoggedIn" to="/about" variant="primary" class="justify-center"
            >Learn more</ArrowButton
          >
        </div>

        <!-- Stats -->
        <div class="mt-10 grid grid-cols-3 gap-4 animate-slide-up">
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
      <div class="mt-6 space-y-4 animate-slide-in-right animation-delay-300">
        <p class="nav-link-no-color text-stone-700 text-center">Trusted by leading companies worldwide</p>
        <div class="grid grid-cols-4 gap-4 md:gap-8">
          <div
            v-for="badge in trustBadges"
            :key="badge.name"
            class="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <div class="h-14 sm:h-16 w-14 sm:w-16 rounded-xl hover:bg-emerald-700/10 mb-2 overflow-hidden">
              <img :src="badge.logo" :alt="`${badge.name} logo`" class="w-full h-full object-contain p-2" />
            </div>
            <span class="text-stone-700 font-semibold text-sm sm:text-base">{{ badge.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
