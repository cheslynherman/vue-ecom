<template>
    <footer>
    <div class="text">
        <p>©️ Made by Cheslyn Herman 2023</p>
    </div>
    <div class="social-links">
        <a href=""><img src="https://i.postimg.cc/dVx0HSfC/icons8-github-150.png" alt="GitHub"></a>
        <a href=""><img src="https://i.postimg.cc/MGsPC1Sg/icons8-facebook-150-2.png" alt="Facebook"></a>
        <a href=""><img src="https://i.postimg.cc/rpLMdXRq/icons8-instagram-150-4.png" alt="Instagram"></a>
        <a href=""><img src="https://i.postimg.cc/KcKGsNbS/icons8-twitter-150-3.png" alt="Twitter"></a>
    </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer {
        background-color: #b20600;
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .text {
        display: flex;
        align-items: center;
    }

    .social-links {
        display: flex;
        justify-content: end;
    }
    img {
        width: 50px;
        height: 50px;
    }
</style>