<template>
    <header>
    <div id="header-signin">Sign in</div>
    <div id="header-donate"><a
        href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2212OQ18299A06206CX&s_subsrc=topnav&_ga=2.14339250.486991054.1661133227-873731236.1660792952">Donate</a>
    </div>
  </header>

  <Banner />

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
  
    <div @click="displayForm" id="post-btn-container">
    <div id="post-btn-text">
      <h3>ADD ENTRY</h3>
    </div>

    <div id="circle">
      <div class="cross vertical"></div>
      <div class="cross"></div>
    </div>

  </div>


</div>


<!--  -->
<div id="new-input-popup">
      <h2>NEW ENTRY</h2>
    <form>
      <div id="text-input-container">
      <label for="name">NAME</label>
      <input v-model="name" type="text" id="name">
    
      <label for="name">SCIENTIFIC NAME</label>
      <input v-model="scientific" type="text" id="scientific">
    
      <label for="name">STATUS</label>
     <select v-model="status" id="status" >
    <option value ="Critically Endangered">Critically Endangered</option>
    <option value ="Endangered">Endangered</option>
    <option value ="Vulnerable">Vulnerable</option>
    <option value ="Near Threatened">Near Threatened</option>
          </select>
    
      <label for="name">POPULATION</label>
      <input v-model="population" type="text" id="population">
    
      <label for="name">HABITAT</label>
      <input v-model="habitat" type="text" id="habitat">
    
    <button @click="addNewEntry" type="button" id="post-btn">POST ENTRY</button>
    </div>
    
    <div id="image-upload-container">
      <div id="image"></div>
    
    </div>
    </form>
    </div>

<!--  -->

  <div class="card-container">

    <ul id="categorised-list-items">
      <AnimalListItem @delete-animals="deleteAnimals" v-for="animal of categorisedArray" :animalItem="animal" :key="animal.id" />
    </ul>

    <ul id="all-animals">
      <AnimalListItem @delete-animals="deleteAnimals" v-for="animal of animalsArray" :animalItem="animal" :key="animal.id" />
    </ul>
  </div>
</template>

<script>
  import Banner from "./components/Banner.vue";
  import AnimalListItem from "./components/AnimalListItem.vue";

  export default {
    components:{
      Banner,
      AnimalListItem
    },
    data() {
      return {
        name: "",
        scientific: "",
        status: "",
        statusId: 0,
        population: "",
        habitats: "",
  
        animalsArray: [],
        categorisedArray: []
      }
    },
    methods: {
      async addNewEntry() {
        const response = await fetch('http://localhost:3000/animals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            scientific: this.scientific,
            status: this.status,
            statusId: this.statusId,
            habitats: this.habitats,
            population: this.population,
          })
        });
        const data = await response.json();
       this.animalsArray = data;
      },
      async getAnimals() {
        const response = await fetch('http://localhost:3000/animals');
        const data = await response.json();
        console.log(data);
        this.animalsArray = data;
        console.log(this.animalsArray);
      },
      async deleteAnimals(id) {
        const response = await fetch(`http://localhost:3000/animals/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        this.animalsArray = data;
      },
      getAnimalByCategory(e) {
        const categoryValue = e.target.value;
        if(categoryValue != "All") {
          const categorisedArray = this.animalsArray.filter((animal) => {
            return animal.statusId === categoryValue
          });
          this.categorisedArray = categorisedArray;

          document.querySelector("#categorised-list-items").style.display = "flex";
          document.querySelector("#all-animals").style.display = "none";
        } else {
          document.querySelector("#categorised-list-items").style.display = "none";
          document.querySelector("#all-animals").style.display = "flex";
        }
        },
        displayForm(){
  let form = document.querySelector("#new-input-popup");
  form.style.display = "block"
 }
      },
      mounted() {
        this.getAnimals();
      }
    }

</script>

<style scoped>
.form-group{
  margin: 1em 0;
}

label{
  margin-right: 1em;
}

.card-container ul {
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#categorised-list-items {
  display: none;
}

#all-animals {
  display: flex;
  gap:20px;
}
</style>