<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import { useAuthStore } from "@/stores/useAuthStore";
import LoginForm from "@/components/auth/LoginForm.vue";

const error = ref(null);
const loading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async ({ email, password }) => {
  loading.value = true;
  error.value = null;

  try {
    const token = await authService.login({
      email: email,
      password: password,
    });

    authStore.setToken(token);
    console.log("Token after login:", token);
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
      <LoginForm :loading="loading" @submit="handleLogin" />
      <p v-if="error" class="mt-4 nav-link-no-color text-red-500 text-center">
        {{ error }}
      </p>
    </div>
  </section>
</template>
