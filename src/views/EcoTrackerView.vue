<script setup>
import SectionTitle from "@/components/typography/SectionTitle.vue";
import ContentSection from "@/components/typography/ContentSection.vue";

const content = [
  "Maybe some content here, who knows?",
  "I'll attempt to make a Carbon Footprint Tracker/Calculator, but I'm not sure if I'll have time to develop the full logic for this.",
];
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-0 sm:p-4 max-w-screen-xl mx-auto">
      <div class="relative overflow-hidden bg-gradient-to-b from-stone-100 to-transparent pt-12 sm:pt24 sm:rounded-lg">
        <div class="p-10 sm:pt-20 text-center">
          <SectionTitle text="Welcome to" highlight="EcoTracker" />
        </div>
        <ContentSection :content="content" />
      </div>
    </div>
  </section>
</template>
