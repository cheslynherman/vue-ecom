<template>
  <h2 class="text">Contact Us</h2>
  
  <p class="text">* Indicates required fields</p>
  <div class="contactForm">
    <form action="https://formspree.io/f/xwkdenpe" method="POST">
      <div class="contactInputs">
        <label>Full Name *</label>
        <input name="name" required placeholder="Tina Turner" />
      </div>
      <div class="contactInputs">
        <label>Email *</label>
        <input type="email" required placeholder="tinaturner@gmail.com" />
      </div>
      <div class="contactInputs">
        <label>Leave a Message *</label>
        <textarea rows="4"></textarea>
      </div>
      <div class="contactButtons">
        <button type="submit">Submit</button>
        <button type="reset">Clear Form</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.text {
    color: #b20600;
}
.contactForm {
    margin: auto;
    padding: 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    border: 2px solid #b20600;
    border-radius: 10px;
    color: #b20600;
}
.contactInputs {
 
  margin: 20px;
  padding: 10px;
}

button {
    color: #b20600;
    background: white;
    border: 2px solid #b20600;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
    margin: 10px;
}

input, textarea {
    color: #b20600;
    border: 2px solid #b20600;
    border-radius: 10px;
    width: 100%;
}

input {
    height: 30px;
}

::placeholder {
    color: #b20600;
}
</style>
