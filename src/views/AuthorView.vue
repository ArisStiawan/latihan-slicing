<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <HeaderContent/>
  <header class="flex flex-col">
    <section
      class="flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full"
    >
      <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
        <article class="max-w-full w-[952px]">
          <div class="flex gap-5 max-md:flex-col">
            <figure
              data-layername="column"
              class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full"
            >
              <img
                src="@/assets/images/misc/orangkacamata.png"
                alt="Andrew Johnson profile"
                class="object-contain grow w-full aspect-[0.85] max-md:mt-8"
              />
            </figure>
            <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                <h1
                  class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
                >
                  Hey there, I'm Andrew Johnson and welcome to my Blog
                </h1>
                <p
                  class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </div>
          </div>
        </article>
        <div class="line flex pt-32">
          <div class="garis-2 h-6 grow bg-yellow-300"></div>
        </div>
      </div>
    </section>
  </header>

  <section
    class="flex flex-col items-center px-20 py-12 mb-32 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full"
  >
    <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
      <h1 class="text-4xl font-bold tracking-tighter py-12 ">My Posts</h1>
      <article class="max-w-full w-[952px]">
        <div class="flex gap-5 max-md:flex-col">

          <figure
            data-layername="column"
            class="flex flex-col max-md:ml-0 max-md:w-full"
          >
          <h1></h1>
            <img
              src="@/assets/images/misc/gedung.png"
              alt="Andrew Johnson profile"
              class=""
            />
          </figure>
          <div
            class="flex flex-col ml-5 py-8 w-[73%] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
              <h1 class="font-bold text-sm tracking-wider text-x-yellow uppercase">
                Bussiness
              </h1>
              <h2
                class="text-4xl font-bold tracking-tighter"
              >
              Font sizes in UI design: The complete guide to follow
              </h2>
              <p class="text-x-mediumgrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article class="max-w-full mt-12 w-[952px]">
        <div class="flex gap-5 max-md:flex-col">
          <figure
            data-layername="column"
            class="flex flex-col max-md:ml-0 max-md:w-full"
          >
            <img
              src="@/assets/images/misc/gedung.png"
              alt="Andrew Johnson profile"
              class=""
            />
          </figure>
          <div
            class="flex flex-col ml-5 py-8 w-[73%] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
              <h1 class="font-bold text-sm tracking-wider text-x-yellow uppercase">
                Economy
              </h1>
              <h2
                class="text-4xl font-bold tracking-tighter"
              >
              How to build rapport with your web design clients            </h2>
              <p class="text-x-mediumgrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
<FooterContent/>
</template>
