<template>
    <div v-if="product" class="product-details">
        <img :src="product.image_url" :alt="product.name">
        <h2>{{product.name}}</h2>
        <p>R {{product.price}} </p>
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
    mounted (){
        this.$store.dispatch("getProduct",this.id);
    },
};
</script>