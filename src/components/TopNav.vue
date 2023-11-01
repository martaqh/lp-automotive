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
    <div class="nop-nav__buttons">
      <BaseButton text="3773917486" variant="borderless" />
      <BaseButton text="Zapytaj o ofertę" />
      <BaseButton text="Umów jazdę próbną" variant="dark" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  &__tab-bar {
    &__item {
      padding: 20px;
      font-size: 1rem;
      color: $color-font-grey;
      font-weight: 300;
      line-height: 162.5%;
    }
  }
}
</style>
