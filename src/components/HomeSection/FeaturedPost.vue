<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col p-12">
    <div
      class="min-[1272px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8"
    >
      <div class="flex flex-col gap-y-8 items-start">
        <div
          class="tracking-[-2px] leading-[48px] text-slate-800 font-bold text-4xl"
        >
          Featured Post
        </div>
        <div
          class="[max-width:733px] flex relative z-0 justify-center flex-grow self-stretch flex-col gap-y-4 items-start p-8"
        >
          <div
            class="items-start flex absolute z-0 inset-0 border-x-mediumgrey flex-shrink-0 h-full w-full -scale-x-100 border border-opacity-20"
          ></div>
          <img
            class="z-[2] h-[352px] w-[669px] flex-shrink-0 object-center object-cover"
            src="@/assets/images/misc/featured.png"
            loading="lazy"
          />
          <div class="z-[3] flex pt-4 items-end">
            <div class="font-inter font-medium leading-5 text-sm">
              <span
                ><span class="text-x-verydarkgrey">By </span>
                <a href="#"><span class="text-x-yellow">John Doe </span></a>
                <span class="text-x-verydarkgrey">l May 23, 2022</span></span
              >
            </div>
          </div>
          <div
            class="text-x-verydarkgrey text-[28px] z-[4] font-bold flex self-stretch"
          >
            <a href="#">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </a>
          </div>
          <div class="text-x-darkgrey w-[551px] flex">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div class="z-[6] flex pt-4 items-end">
            <a
              href="#"
              class="bg-x-blue text-center leading-6 font-bold text-lg py-4 px-12 text-white hover:bg-x-yellow transition duration-150 ease-in-out"
            >
              Read More >
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="gap-y-[15px] flex pr-0.5 items-center mb-7 justify-between">
          <div class="font-bold text-4xl">All Posts</div>
          <div class="">
            <a href="#" class="font-inter leading-7 text-x-yellow">View All</a>
          </div>
        </div>
        <div
          class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20"
        >
          <div class="text-gray-600 text-xs mb-1">
            <span class="text-x-yellow font-medium">John Doe</span>
            <span> | </span>
            <span>Aug 23, 2021</span>
          </div>
          <div class="text-2xl font-bold text-gray-900">
            8 Figma design systems that you can download for free today.
          </div>
        </div>
        <div
          class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20"
        >
          <div class="text-gray-600 text-xs mb-1">
            <span class="text-x-yellow font-medium">John Doe</span>
            <span> | </span>
            <span>Aug 23, 2021</span>
          </div>
          <div class="text-2xl font-bold text-gray-900">
            8 Figma design systems that you can download for free today.
          </div>
        </div>
        <div
          class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20"
        >
          <div class="text-gray-600 text-xs mb-1">
            <span class="text-x-yellow font-medium">John Doe</span>
            <span> | </span>
            <span>Aug 23, 2021</span>
          </div>
          <div class="text-2xl font-bold text-gray-900">
            8 Figma design systems that you can download for free today.
          </div>
        </div>
        <div
          class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20"
        >
          <div class="text-gray-600 text-xs mb-1">
            <span class="text-x-yellow font-medium">John Doe</span>
            <span> | </span>
            <span>Aug 23, 2021</span>
          </div>
          <div class="text-2xl font-bold text-gray-900">
            8 Figma design systems that you can download for free today.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeaturedPost',
}
</script>
