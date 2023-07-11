import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
  },

  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
 
    setProduct: (state, product) => {
      state.product = product;
    },
    sortProducts: (state) =>{
      state.products.sort((a, b) =>{
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }
  },

  actions: {
    getProducts: async (context) => {
      fetch ("https://cheslynherman.github.io/data/db.json")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts",  products))
    },
    // async getProducts(context) {
    //   let {products} = (await ( fetch("https://cheslynherman.github.io/data/db.json"))).json()
    //   if(products) {
    //     context.commit('setProducts', products)
    //     console.log(products)
    //   } else{
    //   
    //   }
    // } ,
    getProduct: async (context, id) => {
      fetch ("https://cheslynherman.github.io/data/db.json/" + id)
      .then ((res) => res.json())
      .then ((product) => {let prod; 
      product.forEach (prod => {
        if (prod.id==id){
          product = prod
        }
      });
    context.commit("setProduct", product)});
    }
  },
});
