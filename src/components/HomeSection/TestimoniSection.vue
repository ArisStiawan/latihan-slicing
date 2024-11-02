<script setup lang="ts"></script>

<template>
  <section class="flex flex-col justify-center m-12 rounded-none">
    <div class="grid grid-cols-2 bg-x-lightyellow place-content-around text-left p-12">
      <div class=" m-12 flex flex-col text-balance border-r-2">
        <h1 class="font-bold tracking-wider leading-none">TESTIMONIALs</h1>
        <h3 class="mt-3 text-4xl font-bold tracking-normal">
          What people <br>say about our blog
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class=" m-12 flex flex-col text-balance">
        <h2 class="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a
          aliquam harum dolorum, nisi beatae labore fuga ipsam delectus
          provident est, ipsum accusamus cum ducimus, fugiat mollitia
          accusantium earum ex?
        </h2>
        <div class="flex py-12">
          <img src="@/assets/images/profile/jonathan.png" alt="" class="w-12 rounded-full">
          <h2 class="pl-5">
          Jonathan Vallem
          <p class="text-gray-400">
          New york, USA
          </p>
          </h2>
      </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'TestimoniSection',
}
</script>
