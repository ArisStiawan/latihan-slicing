<script setup lang="ts">
</script>

<template>
  <section class="p-[80px] flex flex-col gap-8">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
        <div class="flex flex-col gap-8 pt-[48px] border-t border-x-mediumgrey border-opacity-32">
          <a href="/BlogPost" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/ngajar.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">STARTUP</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Design tips for designers that cover everything you need</h2>
              <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="blog/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/meeting.png" alt="People doing handshake">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">How to build rapport with your web design clients</h2>
              <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="blog/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/terpesona.png" alt="Woman looking at man">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">STARTUP</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Logo design trends to avoid in 2022</h2>
              <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="blog/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/ohgitu.png" alt="People walking">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">TECHNOLOGY</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">8 Figma design systems you can download for free today</h2>
              <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="blog/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/ngajar.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">ECONOMY</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Font sizes in UI design: The complete guide to follow</h2>
              <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <div class="flex justify-center items-center gap-4">
            <a class="text-x-mediumgrey text-2xl text-center hover:text-3xl font-bold hover:text-x-black leading-[32px]" href="#">Prev</a>
            <a class="text-x-mediumgrey text-2xl text-center font-bold hover:text-3xl hover:text-x-black leading-[40px] tracking-[-1px]" href="#">Next</a>
          </div>
        </div>
      </section>
</template>




<script lang="ts">
export default {
  name: 'PostView'
}
</script>
