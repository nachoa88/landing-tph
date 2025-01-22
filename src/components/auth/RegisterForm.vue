<script setup>
import { ref, watch } from "vue";
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
const confirmPassword = ref("");
const passwordError = ref("");

// Check if passwords match
watch([password, confirmPassword], ([newPassword, newConfirmPassword]) => {
  if (newConfirmPassword && newPassword !== newConfirmPassword) {
    passwordError.value = "Passwords do not match";
  } else {
    passwordError.value = "";
  }
});

const handleSubmit = (e) => {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    passwordError.value = "Passwords do not match";
    return;
  }
  emit("submit", {
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <BaseForm title="Create" subtitle="your account!" @submit="handleSubmit">
    <FormInput v-model="email" type="email" id="email" label="Your email" placeholder="name@email.com" required />

    <FormInput
      v-model="password"
      type="password"
      id="password"
      label="Your password"
      placeholder="Enter your password"
      required
    />

    <FormInput
      v-model="confirmPassword"
      type="password"
      id="confirmPassword"
      label="Confirm password"
      placeholder="Confirm your password"
      required
    />

    <p v-if="passwordError" class="mt-1 text-sm text-red-500">
      {{ passwordError }}
    </p>

    <BaseButton type="submit" :disabled="loading">
      {{ loading ? "Creating account..." : "Sign up" }}
    </BaseButton>

    <div class="mt-5 text-center">
      <span class="text-stone-900 text-lg">Already have an account? </span>
      <RouterLink
        to="/login"
        class="primary-text hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-green-400"
      >
        Log in!
      </RouterLink>
    </div>
  </BaseForm>
</template>
