<script setup>
import SectionSubtitle from "@/components/typography/SectionSubtitle.vue";
import mapImage from "@/assets/images/map.webp";
</script>

<template>
  <SectionSubtitle text="Where" highlight="Are We?" />
  <div class="flex justify-center">
    <div class="w-auto rounded-2xl overflow-hidden">
      <img :src="mapImage" alt="Map with where we are info." class="object-cover" />
    </div>
  </div>
</template>
