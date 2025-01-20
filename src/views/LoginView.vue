<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="p-4">
      <h1 class="primary-text">Hello from Login View</h1>
      <h2 class="secondary-text">Here will be displayed the Sign In Form</h2>
      <RouterLink to="/register" class="text-emerald-800 hover:underline">Don't have an account? Register here</RouterLink>
    </div>
  </section>
</template>
