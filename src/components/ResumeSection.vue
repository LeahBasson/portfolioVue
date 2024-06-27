<template>
    <div class="container-fluid">
        <div class="row">
            <div class=".col-lg-12" v-if="resume?.length">
              <h2 class="display-3 text-white fadeInUp secHeading">Resume</h2>
              <div class="sectionP resText" v-for="resume in resume" :key="resume.id">
        
                <h4 class="fw-bold" v-if="resume">
                    <span>{{ resume.certificate}}</span>
                </h4>
                  
                <p class="fw-bold" v-if="resume">
                    <span>{{ resume.place }}</span>
                </p>
               
              </div>
              <div class="sectionP resText">
                <h4 class="fw-bold"></h4>
                <p class="fw-bold"></p>
                <p class="fw-bold"></p>
                <p class="fw-bold"></p>
              </div>    
            </div>
            <Spinner v-else/>
          </div>
    </div>
</template>

<script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const resume = computed(() => store.state.resume)
    

  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchResume')
    }, 1000)
  })
</script>

<style>

</style>