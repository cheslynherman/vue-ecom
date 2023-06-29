<template>
  <h1>This is an about page</h1>
  <div class="about">
    <div class="founderImage">
      <img
        src="https://i.postimg.cc/1ts3jCbs/C12-Cheslyn-Herman-1.jpg"
        alt="Founder" class="founderImg"
      />
    </div>
    <div class="founderText">
      <h3>Meet Our Founder</h3>
      <p>
        Meet Cheslyn, the founder behind The Quirky Studio, a captivating
        costume store that brings fantasy to life. From a young age, Cheslyn was
        enamored with the captivating worlds of anime, superhero movies and
        horrors.Cheslyn transformed his lifelong love into a thriving business,
        curating a treasure trove of meticulously crafted costumes.
      </p>
    </div>
  </div>

  <div class="testimonialsSection">
    <h3>Customer Testimonials</h3>
    <div class="cardSection">
      <div class="card">
        <img
          src="https://i.postimg.cc/44QMjKfs/a61e0923-3516-466d-8262-7d06676dbf76.jpg"
          alt="Taahirah" class="cardImg"
        />
        <h2 class="text">Taahirah Ismail</h2>
        <p class="text">
          "I've been a loyal customer of The Quirky Studio for years, and they
          never disappoint. The costumes are unique and well-made, and the
          prices are reasonable. The store has a great atmosphere, and the staff
          goes above and beyond to ensure a fantastic shopping experience."
        </p>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/GtK5Df7H/4d17b286-2338-4458-b799-5700b2b7b508.jpg"
          alt="Timothy" class="cardImg"
        />
        <h2 class="text">Timothy Barry</h2>
        <p class="text">
          "I was thrilled with my experience at The Quirky Studio. The staff was
          incredibly friendly and patient, helping me explore different options
          and offering creative ideas. I will definitely be back!"
        </p>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/8Pk3G1cW/673e7e8d-254c-4c1f-9651-fd7f4d5b9e37.jpg"
          alt="Caryn" class="cardImg"
        />
        <h2 class="text">Caryn Lodewyk</h2>
        <p class="text">
          "The Quirky Studio exceeded my expectations in every way. The costumes
          are comfortable to wear and made with quality materials. The customer
          service is exceptional, and they truly care about customer
          satisfaction."
        </p>
      </div>
      <div class="card">
        <img src="https://i.postimg.cc/YqXPqJLP/IMG-0310.jpg" alt="Ethan" class="cardImg"/>
        <h2 class="text">Ethan Lesar</h2>
        <p class="text">
          "I cannot speak highly enough of The Quirky Studio. Their attention to
          detail is remarkable, and the costumes are authentic and true to the
          characters or themes they represent. It's my go-to place for any
          costume event!"
        </p>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/Rqr7Cp6B/97ac8d55-f366-4424-b10e-698cc1b8a1ce.jpg"
          alt="Lyle" class="cardImg"
        />
        <h2 class="text">Lyle Brown</h2>
        <p class="text">
          "I absolutely love shopping at The Quirky Studio! The selection is
          incredible, and the quality of the costumes is top-notch. I always
          find exactly what I'm looking for, and the staff is friendly and
          helpful. Highly recommended!"
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  color: #b20600;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
}
.founderImg {
  height: 50vh;
}
 .card {
  color: #b20600;
  padding: 10px;
  margin: 30px;
  width: 30%;
  border-radius: 50px;
  height: 60vh;
  align-items: center;
}
.cardImg {
  height: 80%;
  width: 60%;
  border-radius: 50px;
}
.cardSection {
  display: flex;
  margin: auto;

}

.text {
  padding: 10px;
}
</style>