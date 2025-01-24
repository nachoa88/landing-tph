<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-primary">
    <header class="relative z-10">
      <TheNavbar />
    </header>
    <main class="flex flex-1 my-4 sm:m-4 relative bg-secondary sm:rounded-lg shadow-lg">
      <RouterView />
    </main>
    <TheFooter />
    <ScrollToTopButton />
  </div>
</template>

<style scoped></style>
