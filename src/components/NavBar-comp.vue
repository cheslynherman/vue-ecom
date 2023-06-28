<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/"><img src="https://i.postimg.cc/P5X580xk/Black-And-White-Modern-Vintage-Retro-Brand-Logo.png" alt="The Quirky Studio"></router-link>
    </div>
    <div class="navButtons">
      <router-link class="routerLink" to="/">Home</router-link>
      <router-link class="routerLink" to="/products">Products</router-link>
      <router-link class="routerLink" to="/about">About</router-link>
      <router-link class="routerLink" to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #B20600;
  overflow-x: hidden;
  padding: 20px;
  color: white;
}
.navButtons {
  float: right;
  
}
.routerLink {
    background: #B20600;
    color: white;
    padding: 15px;
    border: 2px solid white;
    margin: 10px;
    width: 100px;
    text-decoration: none;
    border-radius: 10px;
}

img {
  height: 50px;
  width: 50px;  

}
</style>
