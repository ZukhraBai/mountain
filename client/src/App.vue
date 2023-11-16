<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useReservationStore } from '@/stores/reservation';
import NavMenu from '@/components/NavMenu.vue'

const reservationStore = useReservationStore()

reservationStore.fetchTours()
reservationStore.fetchGuides()

</script>

<template>
  <v-app>
    <nav-menu></nav-menu>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-snackbar
        :model-value="reservationStore.snackbar.visible"
        :timeout="3000"
        :color="reservationStore.snackbar.status"
        @update:model-value="reservationStore.snackbar.visible = $event"
      >
        {{ reservationStore.snackbar.message }}
      </v-snackbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
/* TODO: local fonts */
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script:wght@400;700&family=Kaushan+Script&family=Montserrat+Alternates&display=swap');

#app .v-main,
#app .v-application {
  background-color: transparent !important;
  color: #233565;
}

.v-application__wrap {
  min-height: 100% !important;
  z-index: 2;
}

</style>
