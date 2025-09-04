<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { NAVLINKS } from '@/constants/links'
import { cn } from '@/lib/utils'
import MobileSheet from './mobile-sheet.vue'

const route = useRoute()
const isActive = (href: string) => route.path === href
</script>

<template>
  <header class="flex items-center justify-between py-300 md:max-lg:pt-0 lg:pt-10">
    <div
      class="mr-10 ml-300 size-12 min-w-12 rounded-full bg-white transition-transform xl:mx-800"
    ></div>

    <!-- DESKTOP NAVIGATION -->
    <hr
      aria-hidden="true"
      :class="cn('inset-x-0 z-10 -mr-10 w-full border-white/25', 'max-lg:hidden')"
    />

    <nav
      :class="
        cn(
          'flex h-24 justify-end bg-white/5 px-800 backdrop-blur-2xl max-lg:pr-500 lg:min-w-[46rem]',
          'max-md:hidden',
        )
      "
    >
      <menu
        class="font-barlow-condensed my-auto flex h-full items-center justify-end gap-600 uppercase"
      >
        <li v-for="{ id, label, href } in NAVLINKS" :key="id" class="relative flex h-full">
          <RouterLink
            :to="href"
            :class="
              cn(
                'flex items-center justify-center gap-150 tracking-[var(--spacing-25)]',
                'transition-colors duration-300 ease-in-out',
                'border-b-[3px] border-transparent hover:border-white/50',
                { 'border-white hover:border-white': isActive(href) },
              )
            "
          >
            <span class="font-bold tracking-[0.16875rem]">{{ id }}</span>
            <span>{{ label }}</span>
          </RouterLink>
        </li>
      </menu>
    </nav>

    <!-- MOBILE NAVIGATION -->
    <MobileSheet />
  </header>
</template>
