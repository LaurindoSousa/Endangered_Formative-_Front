<template>
  <div>
    <div>
      <h2>New Entry</h2>
    </div>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name">
      </div>
      <div class="form-group">
        <label for="sciencename">Scientific Name</label>
        <input id="sciencename">
      </div>
      <div class="form-group">
        <label for="habitat">Habitat</label>
        <input id="habitat">
      </div>
      <div class="form-group">
        <label for="population">Population</label>
        <input id="population">
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="priority" id="status">
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
  export default {
    data() {
      return {
        name: "",
        scientific: "",
        status: 0,
        habitats: "",
        population: "",

        animalsArray: [],
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
        console.log(animalsArray);
      },
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
</style>