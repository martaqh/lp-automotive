<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <section class="pictures-section limited-width">
    <div class="pictures-section__row">
      <div class="pictures-section__row__image">
        <img src="src/assets/cupra_meters.svg" />
      </div>
      <div class="pictures-section__row__content">
        <h6 class="pictures-section__row__content__heading">Technologia</h6>
        <h1 class="pictures-section__row__content__slogan">
          Poczuj pełną wolność jazdy dzięki licznym innowacjom.
        </h1>
        <BaseButton
          class="pictures-section__row__content__button first"
          text="Umów jazdę próbną"
          variant="light"
          link-to="booking-section"
        />
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
        <BaseButton
          class="pictures-section__row__content__button second"
          text="Umów jazdę próbną"
          variant="light"
          link-to="booking-section"
        />
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
        <BaseButton
          class="pictures-section__row__content__button third"
          text="Umów jazdę próbną"
          variant="light"
          link-to="booking-section"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pictures-section {
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 173px 24px 96px;
  gap: 124px;

  @include tablet {
    padding: 96px 24px;
    gap: 80px;
  }

  @include mobile {
    padding: 48px 0;
    gap: 10px;
  }
  &__row {
    display: flex;
    height: 500px;

    @include mobile {
      flex-direction: column;
      gap: 36px;
      padding: 24px;
      height: fit-content;
    }

    &__image {
      width: 160%;

      @include mobile {
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__content {
      background-color: $color-background;
      display: flex;
      flex-direction: column;
      padding: 0 0 64px 117px;
      height: fit-content;
      transform: translateX(-20%);

      @include mobile {
        transform: translateX(0);
        padding: 0;
      }

      &.left {
        transform: translateX(20%);
        padding: 0 117px 64px 0;

        @include mobile {
          transform: translateX(0);
          padding: 0;
        }
      }

      &__heading {
        color: rgba(255, 255, 255, 0.5);
        font-size: 20px;
        font-family: $font-light;
        line-height: 120%;
        margin-bottom: 16px;

        @include mobile {
          font-size: 16px;
        }
      }

      &__slogan {
        font-size: 36px;
        font-family: $font-light;
        line-height: 107%;
        margin-bottom: 48px;
        color: $color-font-light;

        @include mobile {
          font-size: 24px;
          margin-bottom: 0;
        }

        span {
          text-transform: uppercase;
        }
      }

      &__button {
        @include mobile {
          width: 100%;
          margin-top: 60px;
        }
      }
    }
  }
  .reverse {
    flex-direction: row-reverse;

    @include mobile {
      flex-direction: column;
    }
  }
  .first {
    @include mobile {
      display: none;
    }
  }
  .second {
    @include mobile {
      display: none;
    }
  }
}
</style>
