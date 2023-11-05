<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';
</script>

<template>
  <div class="header">
    <div class="header__content limited-width">
      <a class="header__content__logo" href="/">
        <img src="src/assets/cupra_logo.svg" alt="logo cupra" />
      </a>
      <TopNav />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-background-light;

  @include tablet {
    padding: 0 60px;
  }

  @include mobile {
    padding: 0 24px;
  }

  &__content {
    padding: 30px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mobile {
      justify-content: center;
    }
  }
}
</style>
