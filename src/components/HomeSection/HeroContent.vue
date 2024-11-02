<script setup lang="ts">
</script>

<template>
<main class="relative flex h-screen text-white">
    <img src="@/assets/images/misc/cover.png" alt="Background" class="absolute inset-0 w-full h-full object-cover -z-10" />
    <section class="hero text-left py-36">
      <div class="flex flex-col text-base mb-5 ml-16">
        <h2>POSTED ON <b>STARTUP</b></h2>
      </div>
      <div class="text-3xl ml-16 md:text-5xl font-bold leading-tight mb-5">
        <h1>Step-by-step guide to choosing<br>great font pairs</h1>
      </div>
      <div class="text-sm ml-16 mb-5">
        <h3>By <span class="text-x-blue">James West</span> | May 23, 2022</h3>
      </div>
      <p class="text-md md:text-sm mb-5 ml-16">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu<br> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <button
        class="bg-blue-500 hover:bg-x-yellow transition duration-150 ease-in-out font-semibold ml-16 py-3 px-6"
      >
        Read More
      </button>
    </section>
  </main> 
</template>

  <script lang="ts">
export default {
  name: 'HeroSection',
}
</script>

