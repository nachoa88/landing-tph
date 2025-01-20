<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary", // primary, secondary, danger
  },
  to: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function,
    default: null,
  },
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center rounded-lg px-6 py-2 text-center transition-colors nav-link-no-color',
      {
        'text-stone-100 bg-emerald-700 hover:bg-emerald-800': variant === 'primary',
        'text-stone-100 bg-stone-600 hover:bg-stone-700': variant === 'secondary',
        'text-stone-100 bg-red-700 hover:bg-red-800': variant === 'danger',
      },
    ]"
  >
    <slot></slot>
  </RouterLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    @click="onClick"
    :class="[
      'inline-flex items-center rounded-lg px-6 py-2 text-center transition-colors nav-link-no-color',
      {
        'text-stone-100 bg-emerald-700 hover:bg-emerald-800': variant === 'primary',
        'text-stone-100 bg-stone-600 hover:bg-stone-700': variant === 'secondary',
        'text-stone-100 bg-red-700 hover:bg-red-800': variant === 'danger',
        'opacity-50 cursor-not-allowed': disabled,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>
