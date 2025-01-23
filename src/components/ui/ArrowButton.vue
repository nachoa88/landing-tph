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
    default: "primary",
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
      'nav-link leading-6 flex items-center transition-colors',
      {
        'text-stone-900 hover:text-emerald-700': variant === 'primary',
        'text-stone-100 hover:text-stone-300': variant === 'secondary',
        'text-red-700 hover:text-red-800': variant === 'danger',
      },
    ]"
  >
    <slot></slot>
    <svg
      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </RouterLink>

  <button
    v-else
    :class="[
      'nav-link leading-6 flex items-center transition-colors',
      {
        'text-stone-900 hover:text-emerald-700': variant === 'primary',
        'text-stone-100 hover:text-stone-300': variant === 'secondary',
        'text-red-700 hover:text-red-800': variant === 'danger',
        'opacity-50 cursor-not-allowed': disabled,
      },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
    <svg
      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </button>
</template>
