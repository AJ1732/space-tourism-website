<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <main class="content-grid py-1600">
    <div
      :class="
        cn(
          'flex items-center justify-center gap-16 max-lg:flex-col max-lg:text-center lg:justify-between',
        )
      "
    >
      <section class="w-full max-w-lg lg:max-w-[33.75rem]">
        <h2
          class="font-barlow-condensed text-primary-300 font-normal tracking-[0.15rem] uppercase md:text-[1.75rem] md:tracking-[0.25rem]"
        >
          so, you want to travel to <br />
          <span class="font-bellefair -ml-1.5 text-[5rem] text-white md:text-[9rem]">space</span>
        </h2>
        <p class="font-barlow text-primary-300 leading-[180%] max-md:text-[0.9375rem] lg:text-lg">
          Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer
          space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll
          give you a truly out of this world experience!
        </p>
      </section>
      <button
        class="font-bellefair text-primary-900 grid size-36 place-content-center rounded-full bg-white text-lg uppercase md:size-[17rem] md:text-[2rem]"
      >
        explore
      </button>
    </div>
  </main>
</template>
