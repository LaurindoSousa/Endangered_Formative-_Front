<template>
<div>

</div>

 <button @click="getAnimals" type="button">Get Animals</button>

</template>

<script>
  export default {
    components: {

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
        //console.log(data);
        this.animalsArray = data;
       

      },
    }
  }
</script>

<style scoped>

</style>