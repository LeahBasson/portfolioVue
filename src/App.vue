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
    FooterComp,
  }

}
</script>

<style src="./assets/style.css">
</style>

