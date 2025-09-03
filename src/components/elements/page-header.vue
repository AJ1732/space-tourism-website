<script lang="ts" setup>
const { pageNum } = defineProps<{ pageNum: string | number }>()
</script>

<template>
  <header>
    <h2
      class="font-barlow-condensed flex items-center gap-6 text-base font-normal tracking-[0.25rem] uppercase max-md:justify-center sm:text-xl md:gap-300 md:text-[1.75rem]"
    >
      <span class="font-bold tracking-[0.295rem] opacity-25">{{ pageNum }}</span>
      <slot />
    </h2>
  </header>
</template>
