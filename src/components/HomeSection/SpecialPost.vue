<script setup lang="ts"></script>

<template>
  <div class="flex items-center relative mt-12 mx-12">
    <img src="@/assets/images/misc/Rangkulan.png" alt="People"  />
    <div
      class="w-[706px] bg-white p-[80px] flex flex-col gap-4 absolute right-0 bottom-0"
    >
      <h5
        class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]"
      >
        WHY WE STARTED
      </h5>
      <h1
        class="text-x-black text-5xl font-bold leading-[64px] tracking-[-2px]"
      >
        It started out as a simple idea and evolved into our passion
      </h1>
      <p class="text-x-mediumgrey leading-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <a
        href="/"
        class="w-[269px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
      >
        Discover our story >
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SpecialPost',
}
</script>

