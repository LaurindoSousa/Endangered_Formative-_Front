<template>

<header>
  <div id="header-signin">Sign in</div>
<div id="header-donate"><a href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2212OQ18299A06206CX&s_subsrc=topnav&_ga=2.14339250.486991054.1661133227-873731236.1660792952">Donate</a></div>
</header>


<Banner/>


<div class="menu-container">
  <div id="menu-categories">
    <h4>Search by</h4>
<ul>
  
  <li><button @click="getAnimalByCategory" value="All" type="button">All</button></li>
  <li><button @click="getAnimalByCategory" value="0" type="button">Critically Endangered</button></li>
  <li><button @click="getAnimalByCategory" value="1" type="button">Endangered</button></li>
  <li><button @click="getAnimalByCategory" value="2" type="button">Vulnerable</button></li>
  <li><button @click="getAnimalByCategory" value="3" type="button">Near Threatened</button></li>
</ul>
  </div>
<!-- Post button insert here -->
</div>

<div class="card-container">

<ul id="categorised-list-items">
  <AnimalListItem v-for="animal of categorisedArray" :animalItem="animal" :key="animal.id"/>
</ul>

<ul id="all-animals">
  <AnimalListItem v-for="animal of animalsArray" :animalItem="animal" :key="animal.id"/>
</ul>
</div>

</template>

<script>

import Banner from "./components/Banner.vue";
import AnimalListItem from "./components/AnimalListItem.vue";

  export default {
    components: {
    Banner,
    AnimalListItem
},
    data() {

      return{
        name:"",
        scientific:"",
        status:0,
        population:"",
        habitat:"",
        animalsArray:[],
        categorisedArray:[],
      }

    },
 mounted(){
      this.getAnimals();
    },

    methods: {
      async getAnimals() {
        // console.log('hello');
        const response = await fetch ('http://localhost:3000/animals');
        const data = await response.json()
        console.log(data);
        this.animalsArray = data;
            console.log(this.animalsArray);

      },

getAnimalByCategory(e){
  const categoryValue =  e.target.value;
  

  if (categoryValue != "All"){
    const categorisedArray =  this.animalsArray.filter((animal)=>{
    return animal.statusId === categoryValue
  });
  this.categorisedArray = categorisedArray;

  document.querySelector("#categorised-list-items").style.display = "flex";
  document.querySelector("#all-animals").style.display = "none";
  } else{
      document.querySelector("#categorised-list-items").style.display = "none";
  document.querySelector("#all-animals").style.display = "flex";
  }
}
     
    }

  }

  // this.getAnimals();
</script>

<style scoped>

.card-container ul{
  width:100vw;
  height:fit-content;

  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: center;

}


#categorised-list-items{
  display:none;
}
#all-animals{
  display:flex;
}

</style> 