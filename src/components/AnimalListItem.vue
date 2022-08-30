<template>
<div class="single-card">
            <div class="card-image">
                <img :src="animalItem.url" alt="">
            </div>
            <div class="card-text">
                <div class="card-status">
                    <p>{{animalItem.status}}</p>
                </div>
                <div class="card-header">
                    <h2>{{animalItem.name}}</h2>
                </div>
                <ul class="card-list">
                    <li class="card-items"><i class="fa-solid fa-dna"></i>{{animalItem.scientific}}</li>
                    <li class="card-items"><i class="fa-solid fa-leaf"></i>{{animalItem.habitats}}</li>
                    <li class="card-items"><i class="fa-solid fa-chart-simple"></i>{{animalItem.population}}</li>
                </ul>
                <div class="card-more">
                    <i class="fa-solid fa-trash-can" @click="$emit('deleteAnimals',animalItem.id)"></i>
                </div>
            </div>
        </div>
   </template>
   
<script>
    export default {
        props:{
        animalItem: Object,
        }
    }
</script>
   
<style scoped>
    li{
       list-style: none;
    }
    .card__image{
       width: 300px;
       height: 300px;
       background-color: grey;
    }
    .card__image img{
        width: 100%;
        height: 100%;
    }
    p, li{
        font-family: "Abel-Pro";
    }
    p, h1, h2, h3, h4, h5, h6, ul, li{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #E5E7E9;
    }
    h2{
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
        font-size:2em;
    }
    .single-card{
        width: 300px;
        height: 500px;
        background-color: white;
        box-shadow: 6px 8px 10px #888888;
        margin: 1em 0;
    }

    .card-image{
        padding: 1em 1em 0 1em;
        height: 45%;
        text-align: center;
    }

    .card-image img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .card-text{
        padding: 1em;
    }

    .card-status{
        text-transform: uppercase;
    }
    .card-status p{
        font-family: 'Oswald', sans-serif;
        
    }
    .card-list{
        text-decoration: none;
    }

    .card-items{
        list-style: none;
        margin: 1em 0;
        font-family: 'Oswald', sans-serif;
        font-weight: 200;
    }

    .card-items i{
        margin-right: 1em;
        color: #A5A5A5;
    }

    .card-more{
        text-align: right;
    }

    .critical{
        color: #922B21;
    }

    .endangered{
        color: #E96404;
    }

    .vulnerable{
        color: #F1C40F;
    }

    .near-threatened{
        color: #28B463;
    }

    i{
        color: red;
    }
</style>
