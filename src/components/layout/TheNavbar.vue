<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";

const isMenuOpen = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleLogout = () => {
  console.log("Logging out...");
  authStore.logout();
  console.log("Token after logout:", authStore.token);
  router.push("/");
};
</script>

<template>
  <div class="relative">
    <nav class="flex items-center justify-between p-4 sm:p-2 sm:m-4 bg-secondary sm:rounded-lg shadow-lg">
      <!-- Logo -->
      <div class="nav-link">
        <RouterLink to="/">Logo Soon!</RouterLink>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden sm:flex items-center gap-6">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link nav-link-hover">
          {{ link.text }}
        </RouterLink>
      </div>

      <!-- Login / Logout Buttons -->
      <div class="flex items-center gap-4">
        <div v-if="!authStore.isLoggedIn">
          <RouterLink
            to="/login"
            class="inline-flex items-center mr-0 sm:mr-2 px-6 py-2 nav-link-no-color text-stone-100 rounded-lg bg-emerald-700 hover:bg-emerald-800 transition-colors"
          >
            Log in
          </RouterLink>
        </div>
        <div v-else>
          <button
            @click="handleLogout"
            class="inline-flex items-center mr-0 sm:mr-2 px-6 py-2 nav-link-no-color text-stone-100 rounded-lg bg-red-700 hover:bg-red-800 transition-colors"
          >
            Log out
          </button>
        </div>
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-emerald-700 hover:text-emerald-800 transition-colors"
          type="button"
          aria-controls="mobile-menu"
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">{{ isMenuOpen ? "Close menu" : "Open menu" }}</span>
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              v-show="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-show="isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <div v-show="isMenuOpen" class="absolute w-full sm:hidden bg-emerald-700/95 shadow-lg overflow-hidden">
      <div class="flex flex-col py-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 my-1 nav-link-no-color text-stone-100 border-l-4 border-green-400"
          @click="isMenuOpen = false"
        >
          {{ link.text }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
