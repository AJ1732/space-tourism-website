<script setup lang="ts">
import { computed, ref } from 'vue'
import { DESTINATION_TABS } from '@/constants/destination'
import { cn } from '@/lib/utils'

const tabs = ['moon', 'mars', 'europa', 'titan']
const activeTab = ref('moon')

const destination = computed(() => DESTINATION_TABS[activeTab.value])
const handleTabChange = (tab: keyof typeof DESTINATION_TABS) => (activeTab.value = tab)
</script>

<template>
  <main class="content-grid grid-rows-[auto_1fr] space-y-300 py-300 lg:py-600">
    <header>
      <h2
        class="font-barlow-condensed flex items-center gap-300 text-[1.75rem] font-normal tracking-[0.25rem] uppercase"
      >
        <span class="font-bold tracking-[0.295rem] opacity-25">01</span>
        Pick your destination
      </h2>
    </header>

    <section class="grid grid-cols-2 items-center">
      <figure
        class="relative flex size-[30rem] items-center justify-center overflow-hidden rounded-full"
      >
        <div class="bg-primary-300 grid size-full place-content-center">
          {{ destination.image }}
        </div>
      </figure>
      <div class="max-w-[27.8125rem] space-y-500 lg:mx-12">
        <div class="font-barlow-condensed flex items-center gap-300 tracking-[0.125rem]">
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
          <h3 class="font-bellefair -mt-4 text-[6rem] font-normal uppercase">
            {{ destination.destination }}
          </h3>
          <p class="text-primary-300 font-barlow text-lg leading-[180%]">
            {{ destination.description }}
          </p>
          <hr class="my-500 border-[0.0625rem] border-white opacity-25" />
          <dl class="grid gap-6 md:grid-cols-2">
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
