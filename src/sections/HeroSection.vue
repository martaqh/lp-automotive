<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <section class="hero-section">
    <div class="hero-section__content limited-width">
      <h6 class="hero-section__heading"><span>Cupra</span> Formentor</h6>
      <h1 class="hero-section__slogan">
        Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha marki.
      </h1>
      <BaseButton text="Umów jazdę próbną" variant="light" link-to="booking-section" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  height: 880px;
  background-image: url('src/assets/cupra_hero.svg');

  @include tablet {
    height: 700px;
  }

  @include mobile {
    max-height: 500px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 344px 48px 0 48px;

    @include tablet {
      padding: 200px 36px 0 36px;
    }

    @include mobile {
      text-align: center;
      align-items: center;
      padding: 100px 24px;
    }
  }

  &__heading {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
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

    @include tablet {
      font-size: 48px;
    }

    @include mobile {
      font-size: 36px;
    }
  }
}
</style>
