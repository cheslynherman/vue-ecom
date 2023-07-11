<template>
  <NavBarComp />
  <router-view />
  <FooterComp />
</template>

<script>
import NavBarComp from "@/components/NavBar-comp.vue";
import FooterComp from "@/components/Footer-comp.vue";
export default {
  components: {
    NavBarComp,
    FooterComp,
  },
};

</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
body {
  background-image: url(https://i.postimg.cc/X79YM02w/stefano-pollio-ZC0-Ebd-LC8-G0-unsplash.jpg);
  background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  background-attachment: fixed;
}
</style>
