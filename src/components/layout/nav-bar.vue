<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { NAVLINKS } from '@/constants/links'
import { cn } from '@/lib/utils'

const route = useRoute()
const isActive = (href: string) => route.path === href
</script>

<template>
  <header class="flex items-center justify-between pt-10">
    <div class="mx-800 size-12 min-w-12 rounded-full bg-white"></div>

    <hr class="inset-x-0 z-10 -mr-10 w-full border-white/25" />

    <nav class="flex h-24 min-w-[46rem] justify-end bg-white/5 px-800 backdrop-blur-2xl">
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
  </header>
</template>
