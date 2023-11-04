<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/sections/HeroSection.vue';
import TrySection from '@/sections/TrySection.vue';
import PicturesSection from '@/sections/PicturesSection.vue';
import BookingSection from '@/sections/BookingSection.vue';
import CarouselSection from '@/sections/CarouselSection.vue';
</script>

<template>
  <main class="app">
    <TheHeader />
    <HeroSection />
    <TrySection />
    <CarouselSection />
    <PicturesSection class="limited-width" />
    <BookingSection />
  </main>
</template>

<style lang="scss">
@keyframes transitionIn {
  from {
    opacity: 0;
    transition: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transition: rotateX(0);
  }
}

.app {
  font-family: $font-main;
  max-width: 1920px;
  background-color: $color-background;
  animation: transitionIn 1s;
}

.limited-width {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.v-application {
  [class*='text-'] {
    font-family: $font-main, sans-serif !important;
  }
  font-family: $font-main, sans-serif !important;
  opacity: 1;
}

// .v-label {
//   //font-size: 13px !important;
//   color: black !important;
//   opacity: 1 !important;
// }
</style>
