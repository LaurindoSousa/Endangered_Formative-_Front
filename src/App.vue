<template>
  <div>
    <div>
      <h2>New Entry</h2>
    </div>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" id="name">
      </div>
      <div class="form-group">
        <label for="scientific">Scientific Name</label>
        <input v-model="scientific" id="scientific">
      </div>
      <div class="form-group">
        <label for="habitats">Habitat</label>
        <input v-model="habitats" id="habitats">
      </div>
      <div class="form-group">
        <label for="population">Population</label>
        <input v-model="population" id="population">
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="status" id="status">
          <option value="0">Critically Endangered</option>
          <option value="1">Endangered</option>
          <option value="2">Vulnerable</option>
          <option value="3">Near Threatened</option>
        </select>
      </div>
      <button @click="addNewEntry" type="button">Post New Entry</button>
    </form>
    <div>
      <h2>Add Image</h2>
    </div>
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
        status: 0,
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
            habitats: this.habitats,
            population: this.population,
          })
        });
        const data = await response.json();
        console.log("New Entry has been added.");
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
      getAnimalsByCategory(e) {
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
}
</style>