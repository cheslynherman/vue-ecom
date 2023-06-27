<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
    <img :src="product.image_url" :alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p>price R {{ product.price }}</p>
  </router-link>
</template>

<script>
export default {
    props: ["tutorial"],
};
</script>
