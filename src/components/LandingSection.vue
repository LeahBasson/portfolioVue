<template>

    <div class="container-fluid"> 
      <div class="row d-flex justify-content-center align-items-center">

        
        <div class="banner">
          <div class="stars">
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>

                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <!-- <div><span class="star"><i class="bi bi-dot text-white"></i></span></div> -->
                
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div> 

                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
                <div><span class="star"><i class="bi bi-dot text-white"></i></span></div>
             </div> 
              <img class="img-fluid" src="https://leahbasson.github.io/MyImages/images/leah.png" alt="leah" loading="eager">
             
             
           
          <div class="Greeting p-5">
           <h1 class="display-3 fw-bold text-white">Hi I'm <span>Leah Basson</span></h1>
           <h3 v-if="jobTitle">
            <span>{{ jobTitle[0]}}</span>
           </h3>  
          <Spinner v-else/>
           <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
           <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
           <a class="lnk text-white" href="https://github.com/LeahBasson" target="_blank"><i class="bi bi-github"></i></a>
          </div>
          </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const jobTitle = computed(() => store.state.jobTitle)

  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchJobTitle')
    }, 1000)
  })
  </script>
  
<style>

</style>