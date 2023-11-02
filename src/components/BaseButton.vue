<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(
  defineProps<{
    variant: 'dark' | 'light' | 'borderless' | 'transparent';
    text: string;
    linkTo?: string;
  }>(),
  {
    variant: 'light'
  }
);

const componentType = computed(() => {
  return props.linkTo ? 'a' : 'button';
});

const buttonType = computed(() => {
  return componentType.value === 'button' ? 'submit' : null;
});

const scrollDestination = computed(() => {
  return props.linkTo ? `#${props.linkTo}` : '';
});
</script>

<template>
  <component
    :is="componentType"
    class="base-button"
    :class="props.variant"
    :href="scrollDestination"
    :type="buttonType"
  >
    {{ text }}
  </component>
</template>

<style scoped lang="scss">
.base-button {
  border: 1px solid $color-font-dark;
  padding: 24px;
  color: $color-font-dark;
  width: fit-content;
  background-color: $color-button-beige;

  &:hover {
    background-color: $color-button-white;
  }

  &.transparent {
    background-color: inherit;

    &:hover {
      border: 2px solid $color-font-dark;
    }
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
    background-color: inherit;
    border: none;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
