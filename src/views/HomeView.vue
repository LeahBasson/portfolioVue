<template>
   <div>
    <section class="row" id="home">
      <LandingSection/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="resume">
      <ResumeSection/>
    </section>
    <section class="row" id="project">

    </section>
    <section class="row" id="testimonials">

    </section>
    <section class="row" id="reachMe">

    </section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';

export default {
  name: 'HomeView',
  components: {
   LandingSection,
   AboutSection,
   ResumeSection
  }
}
</script>

<style>
</style>