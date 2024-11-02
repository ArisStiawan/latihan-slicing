<script setup lang="ts">
import AuthorSection from '@/components/HomeSection/AuthorSection.vue';
import FooterContent from '@/components/FooterContent.vue';
import HeaderContent from '@/components/HeaderContent.vue';
import HeroSection from '@/components/AboutSection/HeroSection.vue';
import JoinSection from '@/components/HomeSection/JoinSection.vue';
</script>

<template>
  <HeaderContent/>
  <HeroSection/>
  <div class="mx-20">
  <AuthorSection/>
</div>
  <JoinSection/>
  <FooterContent/>
</template>





