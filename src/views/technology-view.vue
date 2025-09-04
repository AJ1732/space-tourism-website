<script setup lang="ts">
import { PageHeader } from '@/components/elements'
import { cn } from '@/lib/utils'
</script>

<template>
  <main
    class="content-grid lg:content-grid-flow w-full grid-rows-[auto_1fr] space-y-300 py-300 lg:py-600"
  >
    <PageHeader pageNum="03">Space Launch 101</PageHeader>
    <section
      :class="
        cn(
          'grid items-center lg:grid-cols-[repeat(2,_auto)_1fr]',
          'max-lg:justify-items-center max-lg:text-center',
        )
      "
    >
      <menu class="font-bellefair flex gap-400 lg:flex-col">
        <li
          v-for="tab in [1, 2, 3]"
          :key="tab"
          :class="
            cn(
              'grid size-10 place-content-center rounded-full border border-white/25 text-lg md:size-20 md:text-[2rem]',
              {
                'text-primary-900 bg-white': tab === 1,
              },
            )
          "
        >
          {{ tab }}
        </li>
      </menu>
      <article class="max-w-[30.6875rem] max-lg:space-y-100 lg:mr-400 lg:ml-800">
        <span class="font-bellefair block text-lg text-white/50 uppercase sm:text-[2rem]">
          The Terminology...
        </span>
        <h3 class="font-bellefair mb-200 text-2xl uppercase sm:text-[3.5rem]">Launch Vehicle</h3>
        <p class="text-primary-300 text-[0.9375rem] sm:text-lg">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
          from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket
          is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring
          sight on the launch pad!
        </p>
      </article>
      <figure class="max-lg:full-width size-full max-lg:row-start-1 max-lg:mt-16 lg:aspect-[1.01]">
        <div class="bg-primary-300 size-full">image</div>
      </figure>
    </section>
  </main>
</template>
