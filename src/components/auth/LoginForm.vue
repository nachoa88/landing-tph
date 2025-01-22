<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
import FormInput from "@/components/form/FormInput.vue";
import BaseForm from "@/components/form/BaseForm.vue";

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
  <BaseForm title="Log in to" subtitle="your account!" @submit="handleSubmit">
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
        <input id="remember" type="checkbox" class="form-checkbox-base" />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-stone-900 tracking-wide"> Remember me </label>
    </div>

    <BaseButton type="submit" :disabled="loading">
      {{ loading ? "Logging in..." : "Log in" }}
    </BaseButton>

    <div class="mt-5 text-center">
      <span class="text-stone-900 text-lg">Don't have an account? </span>
      <RouterLink
        to="/register"
        class="primary-text hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-green-400"
      >
        Sign up!
      </RouterLink>
    </div>
  </BaseForm>
</template>
