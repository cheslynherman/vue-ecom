<template>
  <button @click="sortPrice" class="sort">Sort by Price</button><br />
  <select v-model="categories">
    <option value="All">All</option>
    <option value="Heroes and Villains">Heroes and Villains</option>
    <option value="Horror">Horror</option>
  </select>
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
  data() {
    return {
      categories: "All",
    };
  },
  created() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    products() {
      return this.$store.state.products
    },
  },

  methods: {
    sortPrice() {
      this.$store.commit("sortProducts");
    },
  },

  components: { CardComp },
};
</script>

<style scoped>
.sort,
select {
  color: #b20600;
  background: white;
  border: 2px solid #b20600;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
</style>
