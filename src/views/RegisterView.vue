<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import { useAuthStore } from "@/stores/useAuthStore";
import RegisterForm from "@/components/auth/RegisterForm.vue";

const error = ref(null);
const loading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const handleRegister = async ({ email, password }) => {
  loading.value = true;
  error.value = null;

  try {
    const { token, id } = await authService.register({
      email: email,
      password: password,
    });
    // If token is returned, set it in the store, auto-login and redirect to home
    if (token) {
      authStore.setToken(token);
      console.log("User registered successfully with ID:", id);
      router.push("/");
    }
  } catch (err) {
    error.value = err.message || "Registration failed. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="flex justify-center items-center w-full h-auto">
    <div class="w-full max-w-sm">
      <RegisterForm :loading="loading" @submit="handleRegister" />
      <p v-if="error" class="mt-4 nav-link-no-color text-red-500 text-center">
        {{ error }}
      </p>
    </div>
  </section>
</template>
