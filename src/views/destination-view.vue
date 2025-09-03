<script setup lang="ts">
import { computed, ref } from 'vue'

import { DESTINATION_TABS } from '@/constants/destination'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/elements'

const tabs = ['moon', 'mars', 'europa', 'titan']
const activeTab = ref('moon')

const destination = computed(() => DESTINATION_TABS[activeTab.value])
const handleTabChange = (tab: keyof typeof DESTINATION_TABS) => (activeTab.value = tab)
</script>

<template>
  <main class="content-grid grid-rows-[auto_1fr] space-y-300 py-300 lg:py-600">
    <PageHeader pageNum="01">Pick your destination</PageHeader>

    <section
      :class="
        cn('grid items-center lg:grid-cols-2', 'max-lg:justify-items-center max-lg:text-center')
      "
    >
      <figure
        class="relative my-7 flex size-[9.375rem] items-center justify-center overflow-hidden rounded-full max-lg:mx-auto sm:size-80 md:size-[30rem]"
      >
        <div class="bg-primary-300 grid size-full place-content-center">
          {{ destination.image }}
        </div>
      </figure>
      <div class="space-y-500 max-md:py-400 sm:max-w-[32.125rem] lg:mx-12 lg:max-w-[27.8125rem]">
        <div
          class="font-barlow-condensed flex items-center gap-400 tracking-[0.125rem] max-lg:justify-center lg:gap-300"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="handleTabChange(tab)"
            :class="
              cn('text-primary-300 relative py-3.5 uppercase', { 'text-white': activeTab === tab })
            "
          >
            {{ tab }}

            <span
              aria-hidden="true"
              :class="cn('absolute inset-x-0 bottom-0 h-[3px]', { 'bg-white': activeTab === tab })"
            ></span>
          </button>
        </div>
        <article>
          <h3
            class="font-bellefair -mt-6 text-[3.5rem] font-normal uppercase md:-mt-4 md:text-[6rem]"
          >
            {{ destination.destination }}
          </h3>
          <p
            class="text-primary-300 font-barlow text-[0.9375rem] leading-[180%] text-pretty md:text-lg"
          >
            {{ destination.description }}
          </p>
          <hr class="border-px my-500 border-white opacity-25" />
          <dl class="grid justify-items-center gap-6 md:grid-cols-2">
            <div
              v-for="{ title, value } in destination.details"
              :key="title"
              class="space-y-2 uppercase"
            >
              <dt class="font-barlow-condensed text-primary-300 text-sm tracking-[0.125rem]">
                {{ title }}
              </dt>
              <dd class="font-bellefair text-[1.75rem]">{{ value }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  </main>
</template>
