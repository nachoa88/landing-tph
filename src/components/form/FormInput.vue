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
      class="form-input-base"
    />
  </div>
</template>
