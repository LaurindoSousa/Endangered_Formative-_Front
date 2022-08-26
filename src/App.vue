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
  
  <li><input @click="getAnimals" value="All" type="button"></li>
  <li><input value="Critically Endangered" type="button"></li>
  <li><input value="Endangered" type="button"></li>
  <li><input value="Vulnerable" type="button"></li>
  <li><input value="Near Threatened" type="button"></li>
</ul>
  </div>
<!-- Post button insert here -->
</div>

<div class="card-container">
<ul>
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
        animalsArray:[]
      }

    },
    methods: {
      async getAnimals() {
        // console.log('hello');
        const response = await fetch ('http://localhost:3000/animals');
        const data = await response.json()
        console.log(data);
        this.animalsArray = data;
            console.log(this.animalsArray);

      }
    },
    mounted(){
      this.getAnimals;
    }

  }
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

</style> TESTING COMMIT