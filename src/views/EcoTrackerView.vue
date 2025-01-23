<script setup>
import ContentSection from "@/components/typography/ContentSection.vue";
import EcoHeader from "@/components/ecotracker/EcoHeader.vue";
import CarbonCalculator from "@/components/ecotracker/CarbonCalculator.vue";

const content = [
  "The Carbon Calculator is designed to provide users with a quick and easy way to estimate their environmental impact. By inputting basic data such as energy consumption, car travel, and flights, you can instantly see an approximation of your carbon footprint in kilograms of CO₂ equivalent.",
  "This tool uses globally recognized conversion factors to ensure accurate results. Whether you're looking to understand your current emissions or explore ways to reduce them, this calculator empowers you to take meaningful steps toward sustainability.",
];
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-0 sm:p-4 max-w-screen-xl mx-auto">
      <div class="relative overflow-hidden bg-gradient-to-b from-stone-100 to-transparent pt-12 sm:pt-24 sm:rounded-lg">
        <EcoHeader />
        <ContentSection :content="content" />
      </div>

      <main class="mx-auto p-0 mb-8 sm:p-4">
        <CarbonCalculator />
      </main>
    </div>
  </section>
</template>
