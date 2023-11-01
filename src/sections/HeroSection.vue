<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <div class="hero-section">
    <div class="hero-section__content limited-width">
      <h6 class="hero-section__heading"><span>Cupra</span> Formentor</h6>
      <h1 class="hero-section__slogan">
        Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha marki.
      </h1>
      <BaseButton text="Umów jazdę próbną" variant="light" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-section {
  height: 880px;
  background-image: url('src/assets/cupra_hero.svg');

  &__content {
    display: flex;
    flex-direction: column;
    padding: 344px 0 0 0;
  }

  &__heading {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 16px;

    span {
      text-transform: uppercase;
    }
  }

  &__slogan {
    font-size: 60px;
    font-family: $font-light;
    line-height: 107%;
    margin-bottom: 48px;
    color: $color-font-light;
  }
}
</style>
