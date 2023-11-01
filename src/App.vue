<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/sections/HeroSection.vue';
</script>

<template>
  <main class="app">
    <TheHeader class="limited-width" />
    <HeroSection />
    <TrySection />
  </main>
</template>

<style lang="scss">
.app {
  font-family: $font-main;
}

.limited-width {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
</style>
