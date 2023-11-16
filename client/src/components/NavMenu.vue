<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
import { navRoutes } from '@/data/nav-routes';

const settingsStore = useSettingsStore()

</script>

<template>
  <v-app-bar>
    <template #prepend>
      <v-btn
        to="/"
        variant="text"
        size="x-large"
        color="transparent"
      >
        <img
          src="@/assets/logo.png"
          width="48"
          height="48"
          alt="Logo"
        >
      </v-btn>
    </template>
    <ul  v-if="!settingsStore.isTabOrMob" class="nav-menu d-flex align-center mr-auto">
      <li v-for="route in navRoutes" :key="route.name" class="nav-menu__item d-flex align-center">
        <RouterLink class="nav-menu__link py-4 px-8 text-uppercase" :to="route.name">{{ route.text }}</RouterLink>
      </li>
    </ul>
    <template v-if="settingsStore.isTabOrMob" #append>
      <v-menu>
        <template #activator="{ props }">
          <v-app-bar-nav-icon
            variant="text"
            rounded="rounded"
            v-bind="props"
          >
          </v-app-bar-nav-icon>
        </template>

        <v-list class="mobile-menu">
          <v-list-item
            v-for="route in navRoutes"
            :key="route.name"
            class="mobile-menu__item"
            active-class="mobile-menu__item--active"
            :to="route.name"
          >
            <v-list-item-title class="text-uppercase">
              {{ route.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<style>
.nav-menu,
.nav-menu__item,
.nav-menu__link {
  height: 100%;
}
.router-link-exact-active,
.mobile-menu__item--active {
  opacity: 0.5;
  pointer-events: none;
}
.nav-menu__link {
  font-size: 1rem;
  line-height: 2rem;
}
.nav-menu__link:not(.nav-menu__item .router-link-exact-active):hover,
.mobile-menu .v-list-item:hover {
  background-color: #233565;
  opacity: 1;
  color: white;
}
</style>