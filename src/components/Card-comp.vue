<template>
  <div class="display">
    <div class="card">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <img :src="product.image_url" :alt="product.name" />
        <h2 class="text">{{ product.name }}</h2>
        <p class="text">price R {{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
img {
  height: 80%;
  width: 60%;
  border-radius: 50px;
}
p {
  text-decoration: none;
}
.card {
  color: #b20600;
  padding: 10px;
  margin: 10px;
  width: 30%;
  border-radius: 50px;
  height: 60vh;
  /* display: flex; */
  align-items: center;
}
.text {
  color: #b20600;
}
.display {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
