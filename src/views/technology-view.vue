<script setup lang="ts">
import { computed, ref } from 'vue'

import { PageHeader } from '@/components/elements'
import { SPACE_TECH_TABS } from '@/constants/technology'
import { cn } from '@/lib/utils'

const tabs = [1, 2, 3]
const activeTab = ref(1)

const space_tech = computed(() => SPACE_TECH_TABS[activeTab.value])
const handleTabChange = (tab: keyof typeof SPACE_TECH_TABS) => (activeTab.value = tab)
</script>

<template>
  <main
    class="xl:content-grid-flow w-full grid-rows-[auto_1fr] space-y-16 py-300 lg:py-600 xl:space-y-12"
  >
    <PageHeader pageNum="03" class="max-xl:content-grid max-xl:mb-[5.5rem]"
      >Space Launch 101</PageHeader
    >
    <section
      :class="
        cn(
          'grid items-center max-xl:space-y-500 xl:grid-cols-[repeat(2,_auto)_1fr]',
          'max-xl:justify-items-center max-xl:text-center',
        )
      "
    >
      <menu class="font-bellefair mb-500 flex gap-400 max-xl:mt-400 xl:flex-col">
        <li
          v-for="tab in tabs"
          :key="tab"
          @click="handleTabChange(tab)"
          :class="
            cn(
              'grid size-10 cursor-pointer place-content-center rounded-full border border-white/25 text-lg md:size-14 md:text-2xl lg:size-20 lg:text-[2rem]',
              {
                'text-primary-900 bg-white': activeTab === tab,
              },
            )
          "
        >
          {{ tab }}
        </li>
      </menu>
      <article
        class="max-lg:space-y-100 max-lg:px-6 sm:max-w-lg lg:mr-400 lg:ml-800 xl:max-w-[30.6875rem]"
      >
        <span
          class="font-bellefair mb-4 block text-lg text-white/50 uppercase sm:text-2xl xl:text-[2rem]"
        >
          The Terminology...
        </span>
        <h3 class="font-bellefair mb-200 text-2xl uppercase sm:text-[2.5rem] xl:text-[3.5rem]">
          {{ space_tech.term }}
        </h3>
        <p class="text-primary-300 text-[0.9375rem] leading-[180%] sm:text-base xl:text-lg">
          {{ space_tech.description }}
        </p>
      </article>
      <figure
        class="max-lg:full-width size-full min-h-60 max-xl:row-start-1 sm:min-h-96 xl:aspect-[1.01] xl:max-w-4xl"
      >
        <picture>
          <!-- landscape image for large screens -->
          <source :srcset="space_tech['image']['src']['portrait']" media="(min-width: 1280px)" />
          <!-- portrait image for mobile (default fallback) -->
          <img
            :src="space_tech['image']['src']['landscape']"
            :alt="space_tech['image']['alt']"
            class="size-full object-cover"
          />
        </picture>
      </figure>
    </section>
  </main>
</template>
