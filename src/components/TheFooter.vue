<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__content limited-width">
      <span> SEAT CUPRA S.A.U. 2022 ® </span>
      <div class="footer__content__legal-info">
        <a href="/">Obowiązek informacyjny</a>
        <a href="/">Polityka cookies</a>
      </div>
      <div class="footer__content__social-media">
        <a href="https://vimeo.com/">
          <img src="src/assets/footer/icons/vimeo.svg" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="src/assets/footer/icons/instagram.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $color-background-white;

  &__content {
    padding: 46px 24px;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    font-family: $font-light;
    font-size: 14px;

    @include mobile {
      justify-content: center;
      gap: 36px;
    }

    &__legal-info {
      * {
        padding: 4px 16px;
        height: 24px;

        &:hover {
          text-decoration: underline;
        }
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
}
</style>
