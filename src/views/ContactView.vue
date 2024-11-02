<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>


<template>
  <HeaderContent />
  <main class="flex overflow-hidden flex-col items-center">
      <section class="mt-32 max-md:mt-10">
        <h1 class="text-base font-black leading-none text-center text-gray-800 uppercase tracking-[3px]">
          Contact us
        </h1>
        <h2 class="mt-3 text-5xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full max-md:text-4xl">
          Let's Start a Conversation
        </h2>
        <p class="mt-6 text-base leading-7 text-center text-zinc-500 w-[768px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </section>

      <section class="px-16 py-12 mt-16 max-w-full bg-amber-300 w-[768px] max-md:px-5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
              <h3 class="text-sm leading-none opacity-60">Working hours</h3>
              <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
              <p class="mt-4 font-bold">Monday To Friday</p>
              <p class="font-bold">9:00 AM to 8:00 PM</p>
              <p class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
              <h3 class="text-sm leading-none opacity-60">Contact Us</h3>
              <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
              <p class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905</p>
              <p class="text-base leading-7 opacity-60">hello@finsweet.com</p>
            </div>
          </div>
        </div>
      </section>
  </main>

  <form class="mt-8 w-[768px] justify-center mx-auto max-md:max-w-full">
        <div class="flex flex-col gap-4">
          <label for="fullName" class="sr-only">Full Name</label>
          <input id="fullName" type="text" placeholder="Full Name" class="p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full" />

          <label for="email" class="sr-only">Your Email</label>
          <input id="email" type="email" placeholder="Your Email" class="p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full" />

          <div class="flex flex-wrap gap-4">
            <div class="flex-1 min-w-[240px]">
              <label for="province" class="sr-only">Province</label>
              <select id="province" class="w-full p-6 text-base leading-7 text-gray-800 border border-solid border-zinc-500 border-opacity-50 appearance-none bg-white">
                <option>Province</option>
              </select>
            </div>
            <div class="flex-1 min-w-[240px]">
              <label for="city" class="sr-only">City</label>
              <select id="city" class="w-full p-6 text-base leading-7 text-gray-800 border border-solid border-zinc-500 border-opacity-50 appearance-none bg-white">
                <option>City</option>
              </select>
            </div>
          </div>

          <label for="message" class="sr-only">Message</label>
          <textarea id="message" placeholder="Message" class="p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full min-h-[144px]"></textarea>

          <button type="submit" class="mb-[100px] px-16 py-4 mt-4 text-2xl font-bold leading-none text-gray-800 bg-blue-600 w-full">
            Send Message
          </button>
        </div>
      </form>
      <FooterContent />
</template>
