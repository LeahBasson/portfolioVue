<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead text-white">
                <span class="shadow">Leah's Portfolio</span>
                <span>&copy; 2024</span>
            </p>
        </div>
      </footer>
  </template>
  
  <script>
  export default {
      name: "FooterComp",
      data(){
          return{
              cYear: new Date().getUTCFullYear()
          }
      }
  }
  </script>
  
  <style>
  
  </style>