<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-3 rounded-2xl shadow-lg bg-emerald-700 text-stone-100 hover:bg-emerald-800 transition-all duration-300 z-50 animate-fade-slide-in"
    aria-label="Scroll to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>
