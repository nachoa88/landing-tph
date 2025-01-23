<script setup>
import { RouterLink } from "vue-router";
import { useForm } from "vee-validate";
import { registerSchema } from "@/validations/authValidations";
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
  validationSchema: registerSchema,
});

// Submit handler validated by VeeValidate
const onSubmit = handleSubmit(async (values) => {
  emit("submit", values);
});
</script>

<template>
  <BaseForm title="Create" subtitle="your account!" @submit="onSubmit">
    <FormInput name="email" label="Your email" type="email" placeholder="eve.holt@reqres.in" required />
    <FormInput name="password" label="Your password" type="password" placeholder="pistol" required />
    <FormInput
      name="confirmPassword"
      type="password"
      label="Confirm password"
      placeholder="Confirm your password is pistol"
      required
    />

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
