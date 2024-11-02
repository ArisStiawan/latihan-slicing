<script setup lang="ts">


</script>

<template>

      <section class="p-20 bg-gray-100 max-md:px-5">
        <div class="flex gap-5 max-md:flex-col">
          <header class="w-[55%] max-md:w-full">
            <p class="text-base text-gray-800 uppercase tracking-[3px]">Featured Post</p>
            <h1 class="mt-5 text-4xl font-bold text-gray-800">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p class="mt-4 text-sm text-amber-300">
              By <span>John Doe</span> l <time datetime="2022-05-23">May 23, 2022</time>
            </p>
            <p class="mt-4 text-base leading-7 text-zinc-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button class="px-12 py-4 mt-8 text-lg font-bold text-white bg-blue-600 max-md:px-5">
              Read More >
            </button>
          </header>
          <figure >
            <img
              loading="lazy"
              src="@/assets/images/misc/mringis.png"
              alt="Featured post illustration"

            />
          </figure>
        </div>
      </section>

</template>

<script lang="ts">
export default {
  name : 'HeroSection'
}
</script>
