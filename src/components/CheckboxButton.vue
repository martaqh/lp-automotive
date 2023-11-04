<script setup lang="ts">
defineProps<{
  label: string;
  id: string;
}>();
</script>

<template>
  <label class="checkbox-button">
    <div>
      <input type="checkbox" class="checkbox-button__input" :name="id" />
      <span class="checkbox-button__control"></span>
    </div>

    <span class="checkbox-button__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.checkbox-button {
  cursor: pointer;
  display: flex;
  gap: 12px;

  &__input {
    opacity: 0;
    position: absolute;
  }

  &__control {
    transform: scale(0.75);
  }

  &__label {
    font-size: 13px;
    line-height: 21px;
    font-family: $font-light;
  }
}

input[type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

input {
  font-size: 1rem;
  line-height: 1.5;
  padding: 11px 23px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0;
  outline: 0;
  background-color: transparent;
}

.checkbox-button .checkbox-button__control {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-color: inherit;
  color: $color-checkbox;
  border: 1px solid $color-checkbox;
}

.checkbox-button__input:checked + .checkbox-button__control:after {
  content: '';
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  background-color: $color-checkbox;
}

.checkbox-button__input:checked + .checkbox-button__control {
  border-color: $color-checkbox;
}
</style>
