<script setup lang="ts"></script>

<template>
  <div class="line flex mx-12">
    <div class="garis-1 flex-none h-6 w-72"></div>
    <div class="garis-2 h-6 grow bg-yellow-300"></div>
    <div class="garis-3 flex-none h-6 w-72 bg-blue-600"></div>
  </div>
  <div class="mx-12 bg-gray-50 flex justify-center py-16">
    <div class="max-w-6xl mx-12 px-4 md:px-8">
      <div class="grid md:grid-cols-2  gap-8">
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-sm uppercase font-medium text-gray-600">
              ABOUT US
            </h2>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              We are a community of content writers who share their learnings
            </h3>
          </div>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            class="text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
          >
            Read More →
          </button>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <h2 class="text-sm uppercase font-medium text-gray-600">
              OUR MISION
            </h2>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              Creating valuable content for creatives all around the world
            </h3>
          </div>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutUsSection',
}
</script>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>
