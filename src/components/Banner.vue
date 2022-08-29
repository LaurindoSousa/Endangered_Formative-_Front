<template>
    <section class="banner">
        <div class="banner-image">
            <img src="../assets/images/richard-jacobs-8oenpCXktqQ-unsplash.jpg" alt="">
        </div>
      <div id="banner-text">
        <h1>White Elephant</h1>
        <p>Did you know that the white elephants can eat 300 tonnes a day whilst walking 3,000 kms in 2 days? That's from Toronto to LA Disney Land!</p>
      </div>
    </section>
</template>
    
<script>
    export default {
    }
</script>
    
<style scoped>
    .banner{
        position: relative;
        width: 100%;
        height: 400px;
    }

    .banner-image{
        width: 100%;
        height: 100%;
        text-align: center;
        overflow-x: hidden;
    }
    .banner-image img{
        display: block;
        width: 120%;
        height: 400px;
        object-fit: cover;
        object-position: 50% 85%;
        filter: brightness(80%)
    }

    #banner-text{
        position: absolute;
        margin: 2em;
        color: white;
        top: 260px;
        width: 50%;
    }

    h1{
        margin-bottom: 0.5em;
    }
</style>

