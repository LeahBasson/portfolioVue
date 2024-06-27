<template>
  <div class="container-fluid">
    <div class="row">
              <div class=".col-lg-12">
                <h2 class="display-3 text-white fadeInUp p-3 secHeading">About</h2>
                <p  class="text-white sectionP mt-4" v-if="about">
                    <span>{{ about[0]}}</span>
                </p>
                <Spinner v-else/>
                </div>
    </div>
  </div>
</template>

<script setup>
  import Spinner from './Spinner.vue'
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const about = computed(() => store.state.about)
  onMounted(() => {
    setTimeout(()=>{
      store.dispatch('fetchAbout')
    }, 1000)
  })
</script>

<style>

</style>