<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <main>
    <TheHeader class="limited-width" />
  </main>
</template>

<style lang="scss">
.limited-width {
  max-width: 1440px;
  margin: 0;
  padding: 0;
}
</style>
