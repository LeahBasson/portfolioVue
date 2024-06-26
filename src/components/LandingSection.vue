<template>
    <div class="row" id="landing-content">
      <div class="
         image-box border-animation">
        <img class="landing-img" src="https://leahbasson.github.io/MyImages/images/portfolioLogo.png" alt="landing-img"
          loading="lazy">
        <div class="landing-text">
          <h4>Leah Basson</h4>
          <p v-if="jobTitle?.length">
            <span>{{ jobTitle[0]?.title }}</span>
          </p>
          <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>
      </div>
      <div class="">
        <h1 class="landing-title">Hi, I'm <span>Leah</span>.</h1>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const jobTitle = computed(() => store.state.jobTitle)
  onMounted(() => {
    store.dispatch('fetchJobTitle')
  })
  </script>
  
<style>
</style>