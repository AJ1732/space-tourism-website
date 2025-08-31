<script setup lang="ts">
import type { SVGIconProps } from '@/types/svgs'
const props = defineProps<SVGIconProps>()
</script>

<template>
  <svg
    v-bind="props"
    :width="props.width || 24"
    :height="props.height || 22"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 22"
    fill="none"
  >
    <rect y="0.5" width="24" height="3" fill="#D0D6F9" />
    <rect y="9.5" width="24" height="3" fill="#D0D6F9" />
    <rect y="18.5" width="24" height="3" fill="#D0D6F9" />
  </svg>
</template>
