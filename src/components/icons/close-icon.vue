<script setup lang="ts">
import type { SVGIconProps } from '@/types/svgs'
const props = defineProps<SVGIconProps>()
</script>

<template>
  <svg
    v-bind="props"
    :width="props.width || 20"
    :height="props.height || 21"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 21"
    fill="none"
  >
    <rect
      x="2.5752"
      y="0.954102"
      width="24"
      height="3"
      transform="rotate(45 2.5752 0.954102)"
      fill="#D0D6F9"
    />
    <rect
      x="0.454102"
      y="17.9246"
      width="24"
      height="3"
      transform="rotate(-45 0.454102 17.9246)"
      fill="#D0D6F9"
    />
  </svg>
</template>
