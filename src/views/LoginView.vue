<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";

const email = ref("");
const password = ref("");
const error = ref(null);
const loading = ref(false);
const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  loading.value = true;
  error.value = null;

  try {
    const token = await authService.login({
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", token);
    console.log("Token:", token);
    router.push("/");
  } catch (err) {
    error.value = err.message || err;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="flex justify-center items-center w-full h-auto">
    <div class="w-full max-w-sm">
      <form @submit="handleSubmit" class="p-6 rounded-lg shadow-md bg-emerald-700/30">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            required
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@email.com"
          />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            required
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your password"
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="nav-link-no-color text-stone-100 rounded-lg bg-emerald-700 hover:bg-emerald-800 transition-colors px-6 py-2 text-center"
        >
          {{ loading ? "Loggin in..." : "Log in" }}
        </button>
        <div class="mt-5 text-center">
          <span class="text-sm font-semibold secondary-text">Don't you have an account? </span>
          <RouterLink to="/register" class="nav-link hover:underline">Register here!</RouterLink>
        </div>
      </form>
    </div>
  </section>
</template>
