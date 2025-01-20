<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="sm:m-4 bg-secondary sm:rounded-lg shadow-lg">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex items-center nav-link-no-color text-stone-900 px-6">
        <RouterLink to="/">Logo Soon!</RouterLink>
      </div>
      <span class="text-sm text-stone-900">© 2025. You can copy whatever you want.</span>
    </div>
  </footer>
</template>

<style></style>
