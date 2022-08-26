<template>


</template>

<script>
  export default {

    data(){
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
      },
        

      async deleteAnimals(id) {
        
        const response = await fetch(`http://localhost:3000/animals/${id}`, {
        method: 'DELETE',
        })
        
        const data = await response.json();
       
        console.log(data);
  
        this.animalsArray = data;
      }
       

      }
    }

</script>

<style scoped>

</style>