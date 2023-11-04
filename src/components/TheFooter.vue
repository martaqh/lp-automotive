<script setup land="ts"></script>

<template>
  <footer class="footer limited-width">
    <span> SEAT CUPRA S.A.U. 2022 ® </span>
    <div class="footer__legal-info">
      <a>Obowiązek informacyjny</a>
      <a>Polityka cookies</a>
    </div>
    <div class="footer__social-media">
      <img src="src/assets/footer/icons/vimeo.svg" />
      <img src="src/assets/footer/icons/instagram.svg" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $color-background-white;
  font-family: $font-light;
  padding: 46px 24px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @include mobile {
    justify-content: center;
    gap: 36px;
  }

  &__legal-info {
    * {
      padding: 4px 16px;
      height: 24px;
    }
    :nth-child(1) {
      border-right: 1px solid $color-divider;
    }

    @include mobile {
      display: none;
    }
  }

  &__social-media {
    display: flex;
    gap: 32px;
  }
}
</style>
