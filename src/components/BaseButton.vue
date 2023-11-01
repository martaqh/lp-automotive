<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: 'dark' | 'light' | 'borderless';
    text: string;
    destination?: string;
  }>(),
  {
    variant: 'light'
  }
);
</script>

<template>
  <a class="button" :class="props.variant" :href="destination">{{ text }}</a>
</template>

<style scoped lang="scss">
.button {
  border: 1px solid $color-font-dark;
  padding: 24px;
  color: $color-font-dark;

  &:hover {
    border: 2px solid $color-font-dark;
  }

  &.dark {
    background-color: $color-font-dark;
    color: $color-font-light;
    border: 1px solid $color-font-light;

    &:hover {
      background-color: $color-focus-dark;
    }
  }

  &.borderless {
    border: none;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
