<script setup lang="ts">

import AboutUsSection from '@/components/HomeSection/AboutUsSection.vue';
import HeroContent from '@/components/HomeSection/HeroContent.vue';
import FeaturedPost from '@/components/HomeSection/FeaturedPost.vue';
import CategorySection from '@/components/HomeSection/CategorySection.vue';
import SpecialPost from '@/components/HomeSection/SpecialPost.vue';
import AuthorSection from '@/components/HomeSection/AuthorSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import FooterContent from '@/components/FooterContent.vue';
import LogoSection from '@/components/HomeSection/LogoSection.vue';
import TestimoniSection from '@/components/HomeSection/TestimoniSection.vue';
import JoinSection from '@/components/HomeSection/JoinSection.vue';

</script>

<template>
  <MainLayout/>
  <HeroContent/>
  <FeaturedPost />
  <AboutUsSection />
  <div class="mx-20">
  <CategorySection/>
  </div>
  <SpecialPost />
  <div class="mx-20"><AuthorSection/></div>
  <LogoSection/>
  <TestimoniSection/>
  <JoinSection/>
  <FooterContent/>


</template>


