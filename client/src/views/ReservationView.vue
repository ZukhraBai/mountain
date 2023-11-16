<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
import { onBeforeMount } from 'vue';
import axios from 'axios';
import { useReservationStore } from '@/stores/reservation' 
import PageHeading from '@/components/PageHeading.vue';
import { useSettingsStore } from '@/stores/settings';
import type { Ref } from 'vue';

const tours: Ref<{name: string, id: number}[]> = ref([])

onBeforeMount(async () => {
  await axios.get('http://localhost:3000/api/v1/tours')
    .then(({ data }) => tours.value = data)
})

const reservationStore = useReservationStore()
const settingsStore = useSettingsStore()

const menu = ref(false)

const displayedDate = computed(() => {
  if (reservationStore.reservation.date) {
    const date = new Date(reservationStore.reservation.date);
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
  return ''
})

const updateDate= (e: string) => {
  reservationStore.updateReservation({ field: 'date', value: e })
  menu.value = false
} 

const selectTour = (e: string) => {
  const tour = tours.value.find(t => t.name === e)

  console.log(e, tour);
  
  
  reservationStore.updateReservation({ field: 'tour_id', value: tour?.id || -1 })
}

const selectedTour = computed(() => {
  return tours.value.find(t => t.id === reservationStore.reservation.tour_id)?.name || ''
})

</script>

<template>
  <section class="page-section reservation text-center">
    <page-heading title="Reservation"></page-heading>
    <v-card title="Book your date now!">
      <v-container>
        <v-form>
          <v-row :dense="settingsStore.isTabOrMob" :class="{'flex-column': settingsStore.isTabOrMob}">
            <v-col>
              <v-text-field
                :model-value="reservationStore.reservation.firstname"
                variant="outlined"
                label="first name"
                @update:model-value="reservationStore.updateReservation({ field: 'firstname', value: $event })"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :model-value="reservationStore.reservation.lastname"
                variant="outlined"
                label="last name"
                @update:model-value="reservationStore.updateReservation({ field: 'lastname', value: $event })"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :model-value="reservationStore.reservation.phone"
                variant="outlined"
                label="phone"
                @update:model-value="reservationStore.updateReservation({ field: 'phone', value: $event })"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row :dense="settingsStore.isTabOrMob" :class="{'flex-column': settingsStore.isTabOrMob}">
            <v-col>
              <v-menu v-model="menu" :close-on-content-click="false" >
                <template #activator="{ props }">
                  <v-text-field
                    :model-value="displayedDate"
                    readonly
                    variant="outlined"
                    label="date"
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :model-value="[reservationStore.reservation.date]"
                  :min="new Date(Date.now())"
                  :max="new Date(new Date().setFullYear(new Date().getFullYear()+1))"
                  @update:model-value="$event ? updateDate($event.toString()) : false"
                  @click:cancel="menu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col><v-text-field
              :model-value="reservationStore.reservation.persons_count"
              variant="outlined"
              label="number of participants"
              type="number"
              @update:model-value="reservationStore.updateReservation({ field: 'persons_count', value: $event })"
            ></v-text-field></v-col>
            <v-col><v-select
              :items="reservationStore.tours"
              :model-value="selectedTour" 
              item-title="name"
              item-value="name"
              @update:model-value="selectTour($event)"
            ></v-select></v-col>
            <v-col><v-select
              :items="reservationStore.guides"
              :model-value="reservationStore.reservation.guide_id" 
              item-title="firstname"
              item-value="id"
              @update:model-value="reservationStore.updateReservation({ field: 'guide_id', value: $event })"
            ></v-select></v-col>
          </v-row>
          <v-row :dense="settingsStore.isTabOrMob">
            <v-col>
              <v-textarea
                :model-value="reservationStore.reservation.details"
                label="details"
                placeholder="Provide any details if any"
                @update:model-value="reservationStore.updateReservation({ field: 'details', value: $event })"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn
              block
              color="#233565"
              size="large"
              @click="reservationStore.submitReservation()"
            >submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </section>
</template>