<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

type ModelDetails = {
  model: string;
  imageUrl: string;
  maxSpeed?: number;
  battery?: number;
  enginePower: number;
  monthly: number;
  totalPrice: number;
};

const props = defineProps<{
  data: ModelDetails;
}>();

const cardHeading = computed(() => {
  return props.data.model === 'Born'
    ? `Nowa CUPRA ${props.data.model}`
    : `CUPRA ${props.data.model}`;
});

const techParams = computed(() => {
  return props.data.model === 'Born'
    ? {
        param1: `Akumulator ${props.data.battery} kWh`,
        param2: `Moc do ${props.data.enginePower} KM²`
      }
    : {
        param1: `Maksymalna prędkość: ${props.data.maxSpeed} KM/H`,
        param2: `Moc silnika: ${props.data.enginePower} KM`
      };
});

const formattedPrice = computed(() => {
  const stringifiedPrice = props.data.totalPrice.toString();
  return `${stringifiedPrice.substring(0, 3)} ${stringifiedPrice.substring(3, 6)}`;
});
</script>

<template>
  <v-carousel-item cover>
    <div class="carousel-card">
      <h2 class="carousel-card__heading">{{ cardHeading }}</h2>
      <img class="carousel-card__image" :src="data.imageUrl" />
      <div class="carousel-card__tech-params">
        <p class="carousel-card__tech-params__item">{{ techParams.param1 }}</p>
        <p class="carousel-card__tech-params__item">{{ techParams.param2 }}</p>
      </div>
      <div class="carousel-card__purchase-details">
        <p class="carousel-card__purchase-details__item">
          Dostępny w leasingu <br />
          z 0% opłaty własnej
        </p>
        <p class="carousel-card__purchase-details__item">
          Rata netto/mies. od* <br />
          <strong>{{ data.monthly }} zł</strong>
        </p>
        <p class="carousel-card__purchase-details__item">
          Cena brutto już od <br />
          <strong>{{ formattedPrice }} zł</strong>
        </p>
      </div>
      <BaseButton text="Umów jazdę próbną" variant="dark" link-to="booking-section" />
    </div>
  </v-carousel-item>
</template>

<style scoped lang="scss">
.carousel-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 0 24px;

  @include mobile {
    gap: 36px;
  }

  &__heading {
    font-size: 48px;

    @include mobile {
      font-size: 36px;
    }
  }

  &__image {
    @include mobile {
      max-width: 400px;
    }
  }

  &__tech-params {
    display: flex;
    @include mobile {
      flex-direction: column;
      text-align: center;
    }
  }

  &__purchase-details {
    display: flex;
    gap: 48px;

    @include mobile {
      flex-direction: column;
      gap: 16px;
    }

    &__item {
      text-align: center;
      font-size: 14px;
      line-height: 20px;

      strong {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
