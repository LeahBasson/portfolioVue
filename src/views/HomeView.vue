<template>
  <div>
    <section class="row" id="landing">
      <LandingSection /> 
    </section>
    <section class="row max-height" id="about">
      <h2>About</h2>
      <div class="row">
        <!-- <p class="card-title"><i class="fa-solid fa-location-dot"></i>Cape Town, South Africa, 7100</p> -->
      </div>
    </section>
    <section class="row max-height" id="resume">
      <h2>Resume</h2>
    </section>
    <section class="row max-height" id="skills">
      <h2>Skills</h2>
    </section>
    <section class="row max-height" id="testimonials">
      <h2>Testimonials</h2>
    </section>
    <section class="row max-height" id="projects">
      <h2>Projects</h2>
    </section>
    <section class="row max-height" id="contact">
      <h2>Contact</h2>
    </section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection
  }
}
</script>
