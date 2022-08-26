<template>

 <li>
    <div class="card">
        <div class="card__image"><img src="#"></div>
        <h4>{{animalItem.status}}</h4>

    </div>

 </li>

</template>

<script>
    export default {
        props:{
    animalItem:Object,
},
        
    }
</script>

<style scoped>
li{
    list-style: none;
    border: 2px solid black;
}
.card__image{
    width:300px;
    height:300px;
    background-color: grey;
}
.card__image img{
width: 100%;
height:100%;
}

</style>
