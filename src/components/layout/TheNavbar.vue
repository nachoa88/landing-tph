<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import Logo from "../ui/Logo.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import ArrowButton from "../ui/ArrowButton.vue";

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
    <nav class="flex sm:m-4 bg-secondary sm:rounded-lg shadow-lg">
      <div class="w-full p-4 sm:py-2 mx-auto max-w-screen-xl flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/">
          <Logo />
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden sm:flex items-center gap-6 md:gap-12">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link nav-link-hover px-4 py-2">
            {{ link.text }}
          </RouterLink>
          <RouterLink v-if="authStore.isLoggedIn" to="/ecotracker" class="nav-link nav-link-hover px-4 py-2">
            EcoTracker
          </RouterLink>
        </div>

        <!-- Login / Logout Buttons -->
        <div class="flex items-center gap-4">
          <BaseButton v-if="!authStore.isLoggedIn" to="/login" variant="primary">Log in</BaseButton>
          <div class="hidden sm:block">
            <ArrowButton v-if="authStore.isLoggedIn" variant="danger" :onClick="handleLogout">Log out</ArrowButton>
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
          @click.native="toggleMenu"
        >
          {{ link.text }}
        </RouterLink>
      </div>
      <div v-if="authStore.isLoggedIn" class="flex flex-col py-1">
        <span class="border-y border-green-400 my-2"></span>
        <RouterLink
          to="/ecotracker"
          class="px-4 py-2 my-1 nav-link-no-color text-stone-100 border-l-4 border-green-400"
          @click.native="toggleMenu"
        >
          EcoTracker
        </RouterLink>
        <ArrowButton variant="secondary" class="px-4 py-2 my-1 border-l-4 border-green-400" :onClick="handleLogout"
          >Log out</ArrowButton
        >
      </div>
    </div>
  </div>
</template>
