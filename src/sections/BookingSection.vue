<script setup lang="ts">
const items = [
  {
    name: 'Cupra Formentor',
    imageUrl: 'src/assets/select_cupra.svg',
    selected: true
  },
  {
    name: 'Cupra Leon',
    imageUrl: 'src/assets/select_cupra_leon.svg'
  },
  {
    name: 'Cupra Leon Sport',
    imageUrl: 'src/assets/select_leon_s.svg'
  },
  {
    name: 'Nowa Cupra Born',
    imageUrl: 'src/assets/select_nowa_cupra_born.svg'
  }
];
</script>

<template>
  <section class="booking-section">
    <h6>Jazda próbna</h6>
    <h1>Umów się na bezpłatną jazdę próbną</h1>

    <v-select :items="items" item-title="name" item-value="id" menu v-model="items[0]">
      <template #item="{ item, props }">
        <v-list-item v-bind="props">
          <template #title>
            <span><img :src="item.raw.imageUrl" /> {{ item.raw.name }}</span>
          </template>
        </v-list-item>
      </template>
    </v-select>
    <v-form> </v-form>
  </section>
</template>

<style scoped lang="scss">
.booking-section {
  background-color: $color-background-light;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__select {
    background-color: red;
    height: 64px;
    &__option {
      &--1 {
        background-image: url('src/assets/cupra_seats.svg');
      }
    }
  }
}
</style>
