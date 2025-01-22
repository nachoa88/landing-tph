<script setup>
import SectionTitle from '@/components/typography/SectionTitle.vue';
import SectionSubtitle from '@/components/typography/SectionSubtitle.vue';
</script>

<template>
  <section class="w-full flex flex-col">
    <div class="p-0 sm:p-4 max-w-screen-xl mx-auto">
      <SectionTitle text="About Us: " highlight="EcoTrail" />
      <SectionSubtitle
            text="Here i'll put some text about the company"
            highlight="And here a highlight."
          />
    </div>
  </section>
</template>
