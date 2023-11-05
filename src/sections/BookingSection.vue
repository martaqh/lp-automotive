<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import CheckboxButton from '@/components/CheckboxButton.vue';
import { ref } from 'vue';

const cupraModels = [
  {
    name: 'Cupra Formentor',
    imageUrl: 'src/assets/select_cupra_formentor.svg',
    selected: true
  },
  {
    name: 'Cupra Leon',
    imageUrl: 'src/assets/select_cupra_leon.svg'
  },
  {
    name: 'Cupra Leon Sport',
    imageUrl: 'src/assets/select_cupra_leon_s.svg'
  },
  {
    name: 'Cupra Ateca',
    imageUrl: 'src/assets/select_cupra_ateca.svg'
  },
  {
    name: 'Nowa Cupra Born',
    imageUrl: 'src/assets/select_nowa_cupra_born.svg'
  }
];

const selectedModel = ref(cupraModels[0]);

const bookingData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
});
</script>

<template>
  <section class="booking-section" id="booking-section">
    <div class="booking-section__content">
      <div class="booking-section__heading">
        <h6 class="booking-section__heading__title">Jazda próbna</h6>
        <h1 class="booking-section__heading__slogan">
          Umów się na bezpłatną <br />
          jazdę próbną
        </h1>
      </div>

      <v-form class="booking-section__form">
        <v-select
          class="booking-section__form__select"
          :items="cupraModels"
          item-title="name"
          item-value="id"
          v-model="selectedModel"
          variant="outlined"
          rounded="0"
        >
          <template #selection="{ item }">
            <span class="booking-section__form__select__item">
              <img :src="item.raw.imageUrl" :alt="item.raw.name" />
              <span>{{ item.raw.name }}</span>
            </span>
          </template>
          <template #item="{ item, props }">
            <v-list-item v-bind="props">
              <template #title>
                <span class="booking-section__form__select__item">
                  <img :src="item.raw.imageUrl" :alt="item.raw.name" />
                  <span>{{ item.raw.name }}</span>
                </span>
              </template>
            </v-list-item>
          </template>
        </v-select>

        <v-text-field
          class="booking-section__form__text-field"
          label="Imię*"
          variant="underlined"
          required
          v-model="bookingData.firstName"
          ref="firstName"
          :rules="[() => !!bookingData.firstName || 'To pole jest obowiązkowe.']"
        ></v-text-field>
        <v-text-field
          class="booking-section__form__text-field"
          label="Nazwisko (opcjonalnie)"
          variant="underlined"
          v-model="bookingData.lastName"
          ref="lastName"
        ></v-text-field>
        <v-text-field
          class="booking-section__form__text-field"
          label="Adres e-mail*"
          variant="underlined"
          required
          v-model="bookingData.email"
          ref="email"
          :rules="[() => !!bookingData.email || 'To pole jest obowiązkowe.']"
        ></v-text-field>
        <v-text-field
          class="booking-section__form__text-field"
          label="Numer telefonu*"
          variant="underlined"
          required
          v-model="bookingData.phone"
          ref="phone"
          :rules="[() => !!bookingData.phone || 'To pole jest obowiązkowe.']"
        ></v-text-field>
        <span class="booking-section__form__disclaimer">* Pole wymagane </span>

        <div class="booking-section__consents">
          <p>
            Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia
            informacji handlowej w wybrany przez Ciebie sposób w związku <span>Czytaj więcej</span>
          </p>
          <p>
            Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci
            atrakcyjnych ofert/promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.
          </p>

          <CheckboxButton
            id="consent"
            label="Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną
        odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i
        handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA
        akcesoriów, produktów i usług motoryzacyjnych za pomocą:"
          />

          <CheckboxButton id="consent-email" label="E-mail" />
          <CheckboxButton id="consent-phone" label="Telefon" />
          <CheckboxButton id="consent-message" label="Wiadomość SMS/MMS" />

          <p>
            Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych
            oraz do wycofania w każdym momencie swojej zgody.
          </p>
          <p>
            Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego
            celu.
          </p>
          <p>
            Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością
            Spółka Komandytowa, z siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do
            zapoznania się z naszą polityką prywatności umieszczoną pod linkiem:
            <a href="https://www.plichta.com.pl/polityka-prywatnosci">
              https://www.plichta.com.pl/polityka-prywatnosci
            </a>
          </p>

          <BaseButton
            class="booking-section__consents__submit"
            text="Umów jazdę próbną"
            variant="dark"
          />
        </div>
      </v-form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.booking-section {
  background-color: $color-background-light;
  padding: 104px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include mobile {
    padding: 60px 24px;
  }

  &__content {
    max-width: 600px;
    height: fit-content;
  }

  &__heading {
    font-family: $font-light;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;

    &__title {
      line-height: 26px;
      line-height: 26px;
    }

    &__slogan {
      font-size: 36px;
      line-height: 46px;
    }
  }

  &__form {
    gap: 20px;
    &__select {
      &__item {
        display: flex;
        align-items: center;
        padding-right: 74px;

        img {
          @include mobile {
            max-width: 200px;
          }
        }
      }
    }

    &__text-field {
      color: $color-font-black;
      font-family: $font-main;
    }

    &__disclaimer,
    p {
      font-size: 13px;
      line-height: 21px;
      font-family: $font-light;

      a {
        text-decoration: underline;
        color: $color-font-dark;
      }
    }
  }
  &__consents {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__submit {
      align-self: center;
      margin-top: 24px;
    }
  }
}
</style>
