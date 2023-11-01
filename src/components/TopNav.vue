<script setup lang="ts">
import BaseButton from './BaseButton.vue';
</script>
<template>
  <div class="top-nav">
    <ul class="top-nav__tab-bar">
      <a class="top-nav__tab-bar__item">Samochody</a>
      <a class="top-nav__tab-bar__item">Jazda próbna</a>
      <a class="top-nav__tab-bar__item">Oferta</a>
      <a class="top-nav__tab-bar__item">Salony Cupra</a>
    </ul>
    <div class="top-nav__buttons">
      <BaseButton text="3773917486" variant="borderless" />
      <BaseButton text="Zapytaj o ofertę" variant="transparent" />
      <BaseButton text="Umów jazdę próbną" variant="dark" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__tab-bar {
    &__item {
      padding: 20px;
      font-size: 1rem;
      color: $color-font-dark;
      font-family: $font-light;
      line-height: 162.5%;
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
}
</style>
