<script setup lang="ts">
import { PageHeader } from '@/components/elements'
import { cn } from '@/lib/utils';
</script>

<template>
  <main class="content-grid grid-rows-[auto_1fr] space-y-300 py-300 lg:py-600">
    <PageHeader pageNum="03">Space Launch 101</PageHeader>
    <section
      :class="
        cn(
          'grid items-center lg:grid-cols-[auto_repeat(2,_1fr)]',
          'max-lg:justify-items-center max-lg:text-center',
        )
      "
    >
      <div class="font-bellefair">tabs</div>
      <article class="ml-800 mr-400">content</article>
      <figure>image</figure>
    </section>
  </main>
</template>
