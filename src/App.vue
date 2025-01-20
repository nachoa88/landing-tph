<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-primary">
    <header>
      <TheNavbar />
    </header>

    <main class="flex flex-1 m-4 bg-secondary rounded-lg shadow-lg">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped></style>
