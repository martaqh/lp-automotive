<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <section class="pictures-section">
    <div class="pictures-section__row">
      <div class="pictures-section__row__image">
        <img src="src/assets/cupra_meters.svg" />
      </div>
      <div class="pictures-section__row__content">
        <h6 class="pictures-section__row__content__heading">Technologia</h6>
        <h1 class="pictures-section__row__content__slogan">
          Poczuj pełną wolność jazdy dzięki licznym innowacjom.
        </h1>
        <BaseButton text="Umów jazdę próbną" variant="light" />
      </div>
    </div>
    <div class="pictures-section__row reverse">
      <div class="pictures-section__row__image">
        <img src="src/assets/cupra_beach.svg" />
      </div>
      <div class="pictures-section__row__content left">
        <h6 class="pictures-section__row__content__heading">Potęga designu</h6>
        <h1 class="pictures-section__row__content__slogan">
          Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.
        </h1>
        <BaseButton text="Umów jazdę próbną" variant="light" />
      </div>
    </div>
    <div class="pictures-section__row">
      <div class="pictures-section__row__image">
        <img src="src/assets/cupra_seats.svg" />
      </div>
      <div class="pictures-section__row__content">
        <h6 class="pictures-section__row__content__heading">Design wnętrza</h6>
        <h1 class="pictures-section__row__content__slogan">
          Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu <span>Cupry</span>.
        </h1>
        <BaseButton text="Umów jazdę próbną" variant="light" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pictures-section {
  height: fit-content;
  padding: 173px 0 96px;
  &__row {
    display: flex;
    padding: 80px 0;

    &__image {
      min-height: 590px;
      width: 80%;
    }
    &__content {
      background-color: $color-background;
      display: flex;
      flex-direction: column;
      padding: 0 0 64px 117px;
      height: fit-content;
      transform: translateX(-20%);

      &.left {
        transform: translateX(20%);
        padding: 0 117px 64px 0;
      }

      &__heading {
        color: rgba(255, 255, 255, 0.5);
        font-size: 20px;
        font-family: $font-light;
        line-height: 120%;
        margin-bottom: 16px;
      }

      &__slogan {
        font-size: 36px;
        font-family: $font-light;
        line-height: 107%;
        margin-bottom: 48px;
        color: $color-font-light;

        span {
          text-transform: uppercase;
        }
      }
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }
}
</style>
