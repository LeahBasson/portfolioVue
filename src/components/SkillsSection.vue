<template>
  <div class="container-fluid">
    <div class="row">
                <h2 class="display-3 text-white fadeInUp secHeading mt-4">Skills</h2>
                <div class=" sectionP" v-if="skills?.length">
                    <div class="skillsText" v-for="skills in skills" :key="skills.id">
                        <h4 class="fw-bold mt-3" v-if="skills">{{  skills.skillName }}<span>{{  skills.level }}</span></h4>
                        
                        <p v-if="skills">{{  skills.description }}</p>
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
  const skills = computed(() => store.state.skills)
  
  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchSkills')
    }, 1000)
  })
</script>

<style>

</style>