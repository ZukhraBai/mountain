<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';

const settingsStore = useSettingsStore()
const props = defineProps<({ title: string, tag?: string })>()

</script>

<template>
  <div class="page-heading">
    <h1 class="page-heading__title my-12" :class="settingsStore.isTabOrMob ? 'text-h-3' : 'text-h2'">{{ props.title }}</h1>
    <p v-if="props.tag" :class="settingsStore.name === 'xs' ? 'text-h6' : 'text-h4'" class="page-heading__tag mb-6">{{ props.tag }}</p>
  </div>
</template>

<style>
.page-heading__title {
  font-weight: 700;
}

.page-heading__tag {
  background-color: rgba(255,255,255,0.7);
  padding: 2rem !important;
  box-shadow: 3px 3px 6px -3px black;
  font-family: 'Caveat', cursive !important;
  color: #233565;
}
</style>