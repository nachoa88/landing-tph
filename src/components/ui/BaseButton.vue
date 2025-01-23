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
      'inline-flex items-center justify-center rounded-lg px-6 py-2 transition-colors nav-link-no-color min-w-36',
      {
        'text-stone-100 bg-emerald-700 hover:bg-emerald-800 min-w-12': variant === 'primary',
        'text-emerald-700 bg-stone-100 hover:bg-stone-200 min-w-12': variant === 'secondary',
        'text-stone-100 bg-red-700 hover:bg-red-800 min-w-12': variant === 'danger',
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
      'inline-flex items-center justify-center rounded-lg px-6 py-2 transition-colors nav-link-no-color min-w-24 sm:min-w-36',
      {
        'text-stone-100 bg-emerald-700 hover:bg-emerald-800': variant === 'primary',
        'text-emerald-700 bg-stone-100 border-2 border-emerald-700 hover:bg-stone-200': variant === 'secondary',
        'text-stone-100 bg-red-700 hover:bg-red-800': variant === 'danger',
        'opacity-50 cursor-not-allowed': disabled,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>
