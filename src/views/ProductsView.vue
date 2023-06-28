<template>
  <div v-if="products" class="flex-container">
    <CardComp
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import CardComp from "@/components/Card-comp.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts")
  },
  

  components: { CardComp },
};
</script>
