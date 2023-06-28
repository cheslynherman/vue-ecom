<template>
  <div class="home">
    <div class="landing">
      <div class="name">
        <h1>The Quirky Studio</h1>
      </div>
      <div class="phrase">
        <p>Where Imagination Meets Quirkiness</p>
      </div>
    </div>
  </div>

  <div class="sellers">
    <h2>Best Sellers</h2>
    <div class="products">
      <div class="card">
        <img
          src="https://i.postimg.cc/yNZtQmyj/pexels-wilson-vitorino-3230473.jpg"
          alt="PennyWise The Clown Costume"
        />
        <h2 class="text">PennyWise The Clown Costume</h2>
        <p class="text">R 9000</p>
         <router-link class="seeMore" to="/products">See More</router-link>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/BvMnmGZ4/daniel-lincoln-EZNEEg-WSV3k-unsplash.jpg"
          alt="Joker Costume"
        />
        <h2 class="text">Joker Costume</h2>
        <p class="text">R 8000</p>
        <router-link class="seeMore" to="/products">See More</router-link>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/3JSjNCqz/pexels-duren-williams-10682514.jpg"
          alt="Captain America Outfit"
        />
        <h2 class="text">Captain America Outfit</h2>
        <p class="text">R 9500</p>
         <router-link class="seeMore" to="/products">See More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBar-comp.vue";
export default {
  NavBarComp
};
</script>

<style scoped>
.home {
  color: #b20600;
  height: 45vh;
  margin-bottom: 20px;
  margin-top: 20px;
}

.name,
.phrase {
  display: flex;
  justify-content: start;
}

.landing {
  margin-top: 40vh;
  margin-left: 10vh;
}

.name {
  font-size: 21px;
}

.phrase {
  font-size: 19px;
}

img {
  height: 80%;
  width: 60%;
  border-radius: 50px;
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

.text, .sellers, .seeMore {
  color: #b20600;
}
.products {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.seeMore {
  border: 2px solid #b20600;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
}
</style>
