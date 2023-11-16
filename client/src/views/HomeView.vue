<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

</script>

<template>
  <section class="hero d-flex flex-column justify-center align-center text-blue-grey-darken-4 text-center pt-16">
    <h1
      :class="[
        {'text-h4 mb-6': settingsStore.name === 'xs'}, 
        {'text-h2 mb-8': settingsStore.name === 'sm'},
        {'text-h1 mb-16': settingsStore.name !== 'sm' && settingsStore.name !== 'xs'},
        'font-weight-bold text-white']"
    >Discover Mountain Adventures with Us!</h1>
    <v-container class="hero__container">
      <p :class="settingsStore.name === 'xs' ? 'text-h6' : 'text-h4'" class="mb-6">We offer unique opportunities to explore stunning
        mountain destinations where you can enjoy breathtaking views, experience adrenaline rushes, and create unforgettable memories. 
        Let's open the doors to the world of mountains and nature together!</p>
      <v-btn
        rounded="0"
        color="#233565"
        :size="settingsStore.mobile ? 'large' : 'x-large'"
        to="/reservation"
      >Start adventure</v-btn>
    </v-container>
    <Teleport to="body">
      <div class="backround-overlay"></div>
    </Teleport>
  </section>
</template>

<style>
.backround-overlay {
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  width: 100%; 
  height: 100%;
  z-index: 1;
  background: #68628f;
  background-image: url('../assets/images/dombai_1.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  filter: contrast(0.8) sepia(0.2);
}
.hero__container {
  background-color: rgba(255,255,255,0.7);
  padding: 2rem !important;
}

.hero__container p {
  font-family: 'Caveat', cursive !important;
}

.hero h1 {
  text-shadow: 1px 1px 2px black;
}
</style>
