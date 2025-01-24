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
      <div class="flex items-center gap-4 mt-4 lg:mt-0">
        <a
          href="https://www.linkedin.com/in/ignacio-albiol/"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex me-4 md:me-6"
          ><span class="mb-2 nav-link hover:text-emerald-800">LinkedIn</span
          ><span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full"
          ></span
        ></a>

        <a
          href="https://ignacioalbiol.es"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex me-4 md:me-6"
          ><span class="mb-2 nav-link hover:text-emerald-800 transition-all duration-500">About Me</span
          ><span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full"
          ></span
        ></a>
      </div>
      <span class="mt-3 lg:mt-0 text-sm text-stone-900">© 2025. You can copy whatever you want.</span>
    </div>
  </footer>
</template>

<style></style>
