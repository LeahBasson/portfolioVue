<template>
  <div class="wrapper">
    <NavComp />
    <main class="container-fluid">
      <router-view />
    </main>
    <FooterComp />
  </div>

</template>

<script>
import NavComp from '@/components/Nav.vue' 
import FooterComp from '@/components/Footer.vue'

export default {
  components: {
    NavComp,
    FooterComp
  },
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle
    }
  },

}
</script>

<style>

</style>