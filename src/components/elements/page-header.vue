<script lang="ts" setup>
import { cn } from '@/lib/utils'

const { pageNum } = defineProps<{ pageNum: string | number; className?: string }>()
</script>

<template>
  <header :class="className">
    <h2
      :class="
        cn(
          'font-barlow-condensed flex items-center gap-6 text-base font-normal tracking-[0.25rem] uppercase max-md:justify-center sm:text-xl md:gap-300 md:text-[1.75rem]',
        )
      "
    >
      <span class="font-bold tracking-[0.295rem] opacity-25">{{ pageNum }}</span>
      <slot />
    </h2>
  </header>
</template>
