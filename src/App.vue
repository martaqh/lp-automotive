<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/sections/HeroSection.vue';
import TrySection from '@/sections/TrySection.vue';
import PicturesSection from '@/sections/PicturesSection.vue';
</script>

<template>
  <main class="app">
    <TheHeader class="limited-width" />
    <HeroSection />
    <TrySection />
    <PicturesSection class="limited-width" />
  </main>
</template>

<style lang="scss">
.app {
  font-family: $font-main;
  background-color: $color-background;
}

.limited-width {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
</style>
