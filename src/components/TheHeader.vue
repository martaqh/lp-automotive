<script setup lang="ts">
import TopNav from './TopNav.vue';
</script>

<template>
  <div class="header">
    <div class="header__content limited-width">
      <a class="logo">
        <img src="src/assets/cupra_logo.svg" />
      </a>
      <TopNav />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-background-light;

  &__content {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
