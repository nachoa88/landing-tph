<script setup>
import SectionSubtitle from "@/components/typography/SectionSubtitle.vue";
import HeroSection from "@/components/home/Hero.vue";
import Features from "@/components/home/Features.vue";
import Overview from "@/components/home/Overview.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";
import CallToAction from "@/components/home/CallToAction.vue";
import Testimonials from "@/components/home/Testimonials.vue";
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-0 sm:p-4 max-w-screen-xl mx-auto">
      <div class="relative overflow-hidden bg-gradient-to-b from-stone-100 to-transparent pt-12 sm:pt-24 sm:rounded-lg">
        <HeroSection />
        <div class="mt-10 sm:mt-20">
          <SectionSubtitle
            text="Your all-in-one platform to measure, reduce, and offset your company's carbon footprint."
            highlight="Ready to make a difference?"
          />
        </div>
        <Overview />
      </div>
      <Features />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
    </div>
  </section>
</template>
