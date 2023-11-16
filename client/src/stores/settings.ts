import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

export const useSettingsStore = defineStore('settings', () => {
  const { name, mobile } = useDisplay()

  const isTabOrMob = computed(() => (
    name.value === 'xs' || name.value === 'sm'
  ))

  return { name, mobile, isTabOrMob }
})

// xs	Small to large phone	< 600px
// sm	Small to medium tablet	600px > < 960px
// md	Large tablet to laptop	960px > < 1280px
// lg	Laptop to desktop	1280px > < 1920px
// xl	1080p to 1440p desktop	1920px > < 2560px
// xxl	4k and ultra-wide	> 2560px

