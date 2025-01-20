<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
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
  id: {
    type: String,
    required: true,
  },
  placeholder: String,
  required: Boolean,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-group">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :id="id"
      :required="required"
      :placeholder="placeholder"
      class="form-input"
    />
  </div>
</template>

<style scoped>
.form-group {
  @apply mb-5;
}

.form-label {
  @apply block mb-2 nav-link-no-color text-stone-900;
}

.form-input {
  @apply shadow-sm text-stone-900 text-sm rounded-lg bg-stone-100 border-2 border-emerald-700 outline-none focus:border-emerald-500 block w-full p-2.5;
}
</style>
