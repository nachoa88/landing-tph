<script setup>
import { RouterLink } from "vue-router";
import { useForm } from "vee-validate";
import { loginSchema } from "@/validations/authValidations";
import BaseButton from "@/components/ui/BaseButton.vue";
import FormInput from "@/components/form/FormInput.vue";
import BaseForm from "@/components/form/BaseForm.vue";

const emit = defineEmits(["submit"]);
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

// Configurations for VeeValidate
const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema,
});

// Submit handler validated by VeeValidate
const onSubmit = handleSubmit(async (values) => {
  emit("submit", values);
});
</script>

<template>
  <BaseForm title="Log in to" subtitle="your account!" @submit="onSubmit">
    <FormInput name="email" label="Your email" type="email" placeholder="eve.holt@reqres.in" />
    <FormInput name="password" label="Your password" type="password" placeholder="cityslicka" />

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
