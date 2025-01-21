<script setup>
import SectionTitle from "@/components/typography/SectionTitle.vue";
import SectionSubtitle from "@/components/typography/SectionSubtitle.vue";
import MainContent from "@/components/home/MainContent.vue";
import StatsSection from "@/components/home/StatsSection.vue";
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-4 max-w-screen-xl mx-auto">
      <SectionTitle main-text="Restore balance with" highlight="EcoTrail" />
      <SectionSubtitle
        text="Your all-in-one platform to measure, reduce, and offset your company's carbon footprint."
        highlight-text="Ready to make a difference?"
      />
      <MainContent />
      <StatsSection />
    </div>
  </section>
</template>
