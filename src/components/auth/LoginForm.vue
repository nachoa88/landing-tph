<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
import FormInput from "@/components/form/FormInput.vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit"]);

const email = ref("");
const password = ref("");

const handleSubmit = (e) => {
  e.preventDefault();
  emit("submit", { email: email.value, password: password.value });
};
</script>

<template>
  <form @submit="handleSubmit" class="form-container">
    <h2 class="text-2xl font-normal text-stone-900 text-center mt-2 mb-6">Log in to <span class="font-bold underline decoration-4 underline-offset-2 decoration-green-400">your account!</span></h2>
    <FormInput v-model="email" type="email" id="email" label="Your email" placeholder="name@email.com" required />

    <FormInput
      v-model="password"
      type="password"
      id="password"
      label="Your password"
      placeholder="Enter your password"
      required
    />

    <div class="form-checkbox-group">
      <div class="form-checkbox-wrapper">
        <input id="remember" type="checkbox" class="form-checkbox" />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-stone-900 tracking-wide">Remember me</label>
    </div>

    <BaseButton type="submit" :disabled="loading">
      {{ loading ? "Logging in..." : "Log in" }}
    </BaseButton>

    <div class="mt-5 text-center">
      <span class="text-stone-900 text-lg">Don't you have an account? </span>
      <RouterLink to="/register" class="nav-link hover:underline">Register here!</RouterLink>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  @apply p-6 rounded-lg shadow-md bg-emerald-700/30;
}
.form-checkbox-group {
  @apply flex items-start my-5;
}

.form-checkbox-wrapper {
  @apply flex items-center h-5;
}

.form-checkbox {
  @apply w-4 h-4 rounded bg-stone-100 border-2 border-emerald-700 outline-none ring-1 ring-emerald-700 focus:ring-emerald-500;
}
</style>
