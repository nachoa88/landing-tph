<script setup>
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
//   Logout...
];
</script>

<template>
  <nav class="flex justify-center p-4 m-4 bg-slate-600 rounded-lg shadow-lg">
    <!-- Logo -->
    <div class="flex items-center text-slate-200 px-6">
      <RouterLink to="/">Logo Here!</RouterLink>
    </div>
    <!-- Navigation Links -->
    <div class="flex items-center gap-6">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="inline-flex items-center nav-link nav-link-hover"
      >
        {{ link.text }}
      </RouterLink>
    </div>
  </nav>
</template>