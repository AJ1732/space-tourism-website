<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from '@/components/icons'
import { NAVLINKS } from '@/constants/links'
import { cn } from '@/lib/utils'

const open = ref(false)

const route = useRoute()
const isActive = (href: string) => route.path === href

const handleClick = () => (open.value = false)
</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger class="mx-300 md:hidden">
      <MenuIcon />
    </SheetTrigger>
    <SheetContent class="w-72 space-y-600 bg-[rgba(11,_13,_23,_0.15)] backdrop-blur-2xl">
      <SheetHeader>
        <SheetTitle class="sr-only">Mobile Navigation</SheetTitle>
      </SheetHeader>

      <menu class="font-barlow-condensed space-y-400 pl-400 uppercase">
        <li v-for="{ id, label, href } in NAVLINKS" :key="id" class="relative flex w-full">
          <RouterLink
            :to="href"
            @click="handleClick"
            :class="
              cn(
                'flex w-full items-center justify-start gap-150 tracking-[var(--spacing-25)]',
                'transition-colors duration-300 ease-in-out',
                'border-r-[3px] border-transparent hover:border-white/50',
                { 'border-white hover:border-white': isActive(href) },
              )
            "
          >
            <span class="font-bold tracking-[0.16875rem]">{{ id }}</span>
            <span>{{ label }}</span>
          </RouterLink>
        </li>
      </menu>
    </SheetContent>
  </Sheet>
</template>
