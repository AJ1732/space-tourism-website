<script setup lang="ts">
import { Navbar } from '@/components/layout'
</script>

<template>
  <div class="grid min-h-dvh grid-rows-[auto_1fr]">
    <Navbar />
    <RouterView />
  </div>
</template>
