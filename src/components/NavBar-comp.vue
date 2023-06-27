<template>
  <nav class="navbar">
    <div class="navButtons">
      <router-link class="active" to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: black;
  overflow-x: hidden;
}
.navButtons {
  float: right;
}
router-link {
    background: black;
    color: khaki;
    padding: 15px;
    border: 2px solid khaki;
    margin-left: 10px;
    width: 100px;
}
</style>
