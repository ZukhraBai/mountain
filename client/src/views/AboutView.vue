<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue';
import { useReservationStore } from '@/stores/reservation';
import { useSettingsStore } from '@/stores/settings';

const reservationsStore = useReservationStore()
const settingsStore = useSettingsStore()

</script>

<template>
  <section class="page-section about text-center">
    <page-heading title="About us" tag="We know the mountains like the back of our hand"></page-heading>
    <div class="mb-12">
      <h2 class="text-h4 mb-4">History</h2>
      <p>
        Our company is just about to be founded by Zukhra Baichorova, who was inspired after completing the online course CS50.
      </p>
    </div>

    <div class="mb-12">
      <h2 class="text-h4 mb-4">Guides</h2>
      <p class="mb-8">
        Therefore, we have not hired guides yet and cannot provide information or photos about them. 
        But I hope we won’t keep you waiting long, dear clients.
      </p>
      <v-expansion-panels variant="popout" :class="{'pa-4': !settingsStore.mobile}">
        <v-expansion-panel
          v-for="guide in reservationsStore.guides"
          :key="guide.id"
          hide-actions
          class="rounded-0"
        >
          <v-expansion-panel-title>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="x-large"
                >
                  <v-icon size="x-large">mdi-account-circle</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only text-left ms-2"
                sm="5"
                md="3"
              >
                <strong>{{ guide.firstname }} </strong>
                <span>
                  &nbsp;{{ guide.phone }}
                </span>
              </v-col>
            </v-row>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card-text>{{ guide.about }}</v-card-text>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

  </section>
</template>

<style>
</style>
