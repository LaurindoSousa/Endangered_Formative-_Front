<template>
<div>
  <h1>Hello World</h1>
  <button type="button">Delete</button>
</div>

 <button @click="getAnimals" type="button">Get Animals</button>

</template>

<script>
  export default {

    data(){
      return{
        animalsArray:[]

      }
    },
    methods: {

      async deleteAnimals(id) {
        
        const response = await fetch(`http://localhost:3000/animals/${id}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
       
        console.log(data);
  
        this.animalsArray = data;
      }
    }

    
  };

</script>

<style scoped>

</style>