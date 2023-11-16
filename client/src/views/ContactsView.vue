<script setup lang="ts">
// import { useRouter } from 'vue-router';
import { useSettingsStore } from '@/stores/settings';
import PageHeading from '@/components/PageHeading.vue';

const settingsStore = useSettingsStore()
// const router = useRouter()

</script>

<template>
  <section class="page-section text-center">
    <page-heading title="Contacts"></page-heading>
    <!-- <v-card class="mb-8 rounded-0" title="Feedback form" >
      <v-form>
        <v-container>
          <v-row :class="{ 'flex-column': settingsStore.isTabOrMob }">
            <v-col>
              <v-text-field variant="outlined" label="Enter your name"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field variant="outlined" label="Enter your phone"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea variant="outlined" label="Description"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-btn block @click="router.push('/')">
          Send
        </v-btn>
      </v-card-actions>
    </v-card> -->
    <v-card class="d-flex rounded-0 mb-12" :class="{ 'flex-column': settingsStore.isTabOrMob }">
      <div class="mapouter" :style="`width: ${settingsStore.name === 'xs' ? '100%' : '600px'}`">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=karachaevsk&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe></div>
      </div>
      <v-card-text class="d-flex flex-column text-h6 align-start">
        <v-container>
          <v-row dense :class="{ 'flex-column': settingsStore.isTabOrMob }">
            <v-col class="flex-grow-0">Phone:</v-col>
            <v-col>+7-938-029-00-66</v-col>
          </v-row>
          <v-row dense :class="{ 'flex-column': settingsStore.isTabOrMob }">
            <v-col class="flex-grow-0">Email:</v-col>
            <v-col>zukhrab@gmail.com</v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </section>
</template>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none!important;
  width: 100%;
  height: 400px;
}
.gmap_iframe {
  width: 100% !important;
  height: 400px !important;
}
</style>