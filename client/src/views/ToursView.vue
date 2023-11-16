<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSettingsStore } from '@/stores/settings'
import { useReservationStore } from '@/stores/reservation';
import PageHeading from '@/components/PageHeading.vue';

const settingsStore = useSettingsStore()
const reservationStore = useReservationStore()
const router = useRouter()

</script>

<template>
  <section class="page-section tours text-center">
    <page-heading title="Tours" tag="Explore the most beautiful mountain trails"></page-heading>
    <v-card
      v-for="tour in reservationStore.tours"
      :key="tour.name"
      class="mb-8 rounded-0"
      :class="{ 'flex-column': settingsStore.isTabOrMob }"
    >
      <v-carousel hide-delimiter-background>
        <v-carousel-item
          v-for="(img, i) in tour.images"
          :key="i"
          :src="img.src"
          cover
          :alt="`${tour.name} image`"
        ></v-carousel-item>
      </v-carousel>
      <v-card-text class="d-flex flex-column justify-space-between">
        <v-container>
          <v-row>
            <v-col>title</v-col>
            <v-col>{{ tour.name }}</v-col>
          </v-row>
          <v-row>
            <v-col>Description</v-col>
            <v-col>{{ tour.description }}</v-col>
          </v-row>
          <v-row>
            <v-col>Duration</v-col>
            <v-col>{{ tour.duration }}</v-col>
          </v-row>
          <v-row>
            <v-col>Difficulty level</v-col>
            <v-col>{{ tour.difficulty }}</v-col>
          </v-row>
        </v-container>
        <v-card-actions class="text-center">
          <v-btn
            block
            size="large"
            rounded="0"
            variant="elevated"
            color="#233565"
            @click="router.push({ name: 'reservation', query: { id: tour.id }})"
          >
            Reservation
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </section>
</template>

<style>
.tours .v-card {
  display: flex;
  text-align: start;
}

.tours .v-card-text {
  font-size: 1rem;
}

/* .tours .v-carousel {
  width: 50%;
} */
</style>