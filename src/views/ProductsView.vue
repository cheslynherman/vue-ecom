<template>
  <button @click="sortPrice" class="sort">Sort by Price</button><br>
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
    return{
      categories: "All"
    }
  },

  methods: {
    sortPrice() {
      this.$store.commit ("sortProducts")
    }
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch= true;
        if (this.categories !== "All" && this.categories !==product.categories){
          isMatch = false
        }
        return isMatch
      })
    }
  },
  mounted() {
    this.$store.dispatch("getProducts")
  },
  

  components: { CardComp },
};
</script>

<style scoped>
.sort, select {
  color: #b20600;
  background: white;
  border: 2px solid #b20600;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}

</style>