<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import RegisterForm from "@/components/auth/RegisterForm.vue";

const error = ref(null);
const loading = ref(false);
const router = useRouter();

const handleRegister = async ({ email, password }) => {
  loading.value = true;
  error.value = null;

  try {
    await authService.register({
      email: email,
      password: password,
    });
    router.push("/login");
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
      <RegisterForm :loading="loading" @submit="handleRegister" />
      <p v-if="error" class="mt-4 nav-link-no-color text-red-500 text-center">
        {{ error }}
      </p>
    </div>
  </section>
</template>
