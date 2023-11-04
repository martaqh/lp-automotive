<script setup lang="ts">
import BaseButton from './BaseButton.vue';
</script>
<template>
  <nav class="top-nav">
    <ul class="top-nav__tab-bar">
      <a class="top-nav__tab-bar__item" href="/">Samochody</a>
      <a class="top-nav__tab-bar__item" href="/">Jazda próbna</a>
      <a class="top-nav__tab-bar__item" href="/">Oferta</a>
      <a class="top-nav__tab-bar__item" href="/">Salony Cupra</a>
    </ul>
    <div class="top-nav__buttons">
      <BaseButton text="+48 58 506 65 65" variant="borderless" />
      <BaseButton text="Zapytaj o ofertę" variant="transparent" />
      <BaseButton text="Umów jazdę próbną" link-to="booking-section" variant="dark" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__tab-bar {
    @include tablet {
      display: none;
    }

    @include mobile {
      display: none;
    }
    &__item {
      padding: 20px;
      font-size: 1rem;
      color: $color-font-dark;
      font-family: $font-light;
      line-height: 162.5%;

      &:hover {
        text-decoration: underline;
      }

      @include desktop {
        padding: 20px 16px;
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    :nth-child(1) {
      @include desktop {
        display: none;
      }

      @include tablet {
        display: none;
      }
    }

    @include desktop {
      margin-left: 32px;
    }

    @include mobile {
      display: none;
    }
  }
}
</style>
