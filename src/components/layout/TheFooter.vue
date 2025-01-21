<script setup>
import { RouterLink } from "vue-router";
import Logo from "@/components/ui/Logo.vue";
</script>

<template>
  <footer class="sm:m-4 bg-secondary sm:rounded-lg shadow-lg">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between"
    >
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <span class="mt-3 lg:mt-0 text-sm text-stone-900">© 2025. You can copy whatever you want.</span>
    </div>
  </footer>
</template>

<style></style>
