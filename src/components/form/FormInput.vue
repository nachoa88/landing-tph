<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});

// UseField from VeeValidate:
const { value, errorMessage, handleBlur, handleChange } = useField(props.name);
</script>

<template>
  <div class="form-group">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      :name="name"
      :type="type"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="handleChange"
      @blur="handleBlur"
      :class="['form-input-base', { 'form-input-error': errorMessage }]"
    />
    <span v-if="errorMessage" class="text-red-700 text-xs uppercase tracking-widest p-1">
      {{ errorMessage }}
    </span>
  </div>
</template>
