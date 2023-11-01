<script setup lang="ts">
import TopNav from './TopNav.vue';
</script>

<template>
  <div class="header">
    <a class="logo">
      <img src="src/assets/cupra 1.svg" />
    </a>
    <TopNav />
  </div>
</template>

<style scoped lang="scss">
.header {
  margin: 0 0 30px 0;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
