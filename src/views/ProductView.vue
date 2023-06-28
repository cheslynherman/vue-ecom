<template>
  <div v-if="product" class="product-details">
    <img :src="product.image_url" :alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p>R {{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>

<style scoped>
.product-details {
    height: 70vh;
    margin: 20px;
    padding: 20px;
    color: #b20600;
}

img {
    height: 70%;
    
    margin: 10px;
}
</style>