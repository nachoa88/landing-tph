<script setup>
defineProps({
  title: String,
  subtitle: String,
});

defineEmits(["submit"]);
</script>

<template>
  <form @submit="$emit('submit', $event)" class="form-base">
    <h2 v-if="title" class="form-title">
      {{ title }}
      <span v-if="subtitle" class="form-title-highlight">
        {{ subtitle }}
      </span>
    </h2>
    <slot></slot>
  </form>
</template>
