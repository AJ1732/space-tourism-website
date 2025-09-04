<script setup lang="ts">
import { computed } from 'vue'

import { Navbar } from '@/components/layout'

import { images } from './assets/images'
import { useRoute } from 'vue-router'

const backgrounds: Record<string, { desktop: string; tablet: string; mobile: string }> = {
  '/': {
    desktop: images['home-background-desktop'],
    tablet: images['home-background-tablet'],
    mobile: images['home-background-mobile'],
  },
  '/destination': {
    desktop: images['destination-background-desktop'],
    tablet: images['destination-background-tablet'],
    mobile: images['destination-background-mobile'],
  },
  '/crew': {
    desktop: images['crew-background-desktop'],
    tablet: images['crew-background-tablet'],
    mobile: images['crew-background-mobile'],
  },
  '/technology': {
    desktop: images['technology-background-desktop'],
    tablet: images['technology-background-tablet'],
    mobile: images['technology-background-mobile'],
  },
}

const route = useRoute()
const activeBg = computed(() => {
  return backgrounds[route.path] ?? backgrounds['/']
})
</script>

<template>
  <div class="relative grid min-h-dvh grid-rows-[auto_1fr]">
    <picture class="absolute inset-0 -z-[1]">
      <source :srcset="activeBg['desktop']" media="(min-width: 1024px)" />
      <source :srcset="activeBg['tablet']" media="(min-width: 768px)" />
      <img :src="activeBg['mobile']" class="size-full object-cover" />
    </picture>
    <Navbar />
    <RouterView />
  </div>
</template>
