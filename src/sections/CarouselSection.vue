<script setup lang="ts">
import CarouselCard from '@/components/CarouselCard.vue';

const carsDetails = [
  {
    model: 'Formentor',
    imageUrl: 'src/assets/carousel/cupra_formentor.svg',
    maxSpeed: 204,
    enginePower: 150,
    monthly: 1439,
    totalPrice: 127800
  },
  {
    model: 'Formentor VZ',
    imageUrl: 'src/assets/carousel/cupra_formentor_vz.svg',
    maxSpeed: 250,
    enginePower: 310,
    monthly: 1553,
    totalPrice: 152400
  },
  {
    model: 'Ateca',
    imageUrl: 'src/assets/carousel/cupra_ateca.svg',
    maxSpeed: 247,
    enginePower: 300,
    monthly: 2334,
    totalPrice: 220700
  },
  {
    model: 'Born',
    imageUrl: 'src/assets/carousel/cupra_born.svg',
    battery: 58,
    enginePower: 204,
    monthly: 1943,
    totalPrice: 179600
  },
  {
    model: 'Leon Sportstourer',
    imageUrl: 'src/assets/carousel/cupra_leon_sportstourer.svg',
    maxSpeed: 250,
    enginePower: 310,
    monthly: 1601,
    totalPrice: 156200
  }
];
</script>

<template>
  <section class="carousel-section">
    <v-carousel
      class="carousel-section__swiper"
      height="635"
      hide-delimiters
      show-arrows
      continuous
    >
      <template v-slot:prev="{ props }">
        <v-btn
          class="carousel-section__swiper__control"
          variant="flat"
          color="white"
          height="50px"
          width="50px"
          rounded="0"
          @click="props.onClick"
        >
          <img src="src/assets/carousel/icons/chevron_prev.svg" />
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="flat"
          color="white"
          height="50px"
          width="20px"
          rounded="0"
          @click="props.onClick"
        >
          <img src="src/assets/carousel/icons/chevron_next.svg" />
        </v-btn>
      </template>
      <CarouselCard v-for="item of carsDetails" :key="carsDetails.indexOf(item)" :data="item" />
    </v-carousel>
  </section>
</template>

<style scoped lang="scss">
.carousel-section {
  background-color: $color-background-light;
  height: fit-content;
  padding: 104px 0;

  @include mobile {
    padding: 80px 0;
  }

  &__swiper {
    max-width: 1066px;
    margin: 0 auto;

    &__control {
      &:hover {
        background-color: $color-button-grey;
      }
    }
  }
}
</style>
