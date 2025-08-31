<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between pt-10">
    <div class="size-12 bg-white rounded-full"></div>
    <nav class="h-24 bg-white/5 backdrop-blur-2xl flex items-center justify-center gap-12 px-12">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/destination">Destination</RouterLink>
      <RouterLink to="/crew">Crew</RouterLink>
      <RouterLink to="/technology">Technology</RouterLink>
    </nav>
  </header>
</template>
