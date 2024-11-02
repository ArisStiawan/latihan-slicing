<script setup lang="ts">
import HeroSection from '@/components/BlogSection/HeroSection.vue';
import PostView from '@/components/BlogSection/PostView.vue';
import FooterContent from '@/components/FooterContent.vue';
import HeaderContent from '@/components/HeaderContent.vue';
import CategorySection from '@/components/HomeSection/CategorySection.vue';
import JoinSection from '@/components/HomeSection/JoinSection.vue';
</script>

<template>
  <HeaderContent/>
  <HeroSection/>
  <PostView/>
  <div class="mx-20">
  <CategorySection/>
  <JoinSection/>
</div>
  <FooterContent/>
</template>
