<script setup lang="ts">
import { computed, ref } from 'vue'

import { PageHeader } from '@/components/elements'
import { CREW_TABS } from '@/constants/crew'
import { cn } from '@/lib/utils'

const tabs = [1, 2, 3, 4]
const activeTab = ref(1)

const crew = computed(() => CREW_TABS[activeTab.value])
const handleTabChange = (tab: keyof typeof CREW_TABS) => (activeTab.value = tab)
</script>

<template>
  <main class="content-grid grid-rows-[auto_1fr] space-y-300 py-300 lg:py-600">
    <PageHeader pageNum="02">Meet your crew</PageHeader>
    <section
      :class="
        cn(
          'my-auto grid h-fit items-center gap-8 lg:grid-cols-2',
          'max-lg:justify-items-center max-lg:text-center',
        )
      "
    >
      <div class="flex h-full max-w-lg flex-col gap-16 lg:max-w-[33.6375rem] lg:gap-8">
        <article class="flex flex-1 flex-col justify-center max-lg:pt-10 max-md:pt-500">
          <span
            class="font-bellefair mb-200 text-lg uppercase opacity-50 sm:text-2xl lg:text-[2rem]"
          >
            {{ crew.position }}
          </span>
          <h3
            class="font-bellefair mb-300 text-2xl leading-[80%] uppercase sm:text-[2.5rem] lg:text-[3.5rem] lg:leading-[115%]"
          >
            {{ crew.name }}
          </h3>
          <p class="font-barlow text-primary-300 leading-[180%] lg:text-lg">
            {{ crew.description }}
          </p>
        </article>
        <menu class="flex items-center justify-center gap-200 lg:justify-start lg:gap-10">
          <li
            v-for="tab in tabs"
            :key="tab"
            @click="handleTabChange(tab)"
            :class="
              cn('size-[0.625rem] cursor-pointer rounded-full bg-white/25 lg:size-[0.9375rem]', {
                'bg-primary-300': activeTab === tab,
              })
            "
          ></li>
        </menu>
      </div>
      <figure class="sm:max-xl: aspect-[0.797] size-full max-h-[21.25rem] md:max-h-[35rem]">
        <img
          :src="crew['image']['src']['png']"
          :alt="crew['image']['alt']"
          class="size-full object-contain"
        />
      </figure>
    </section>
  </main>
</template>
