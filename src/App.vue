<template>
  <NavBarComp />
  <router-view />
  <FooterComp/>
</template>

<script>
import NavBarComp from "@/components/NavBar-comp.vue";
import FooterComp from "@/components/Footer-comp.vue"
export default {
  components: {
    NavBarComp,
    FooterComp
  }
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: khaki;
  margin-left: 15px;
  border: 2px solid khaki;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  text-align: center;
  
}

nav a.router-link-exact-active {
  color: white;
}
</style>
