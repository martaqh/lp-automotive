<script setup lang="ts">
import TopNav from './TopNav.vue';
</script>

<template>
  <div class="header">
    <a class="logo">
      <img src="src/assets/cupra_logo.svg" />
    </a>
    <TopNav />
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-background-light;
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
