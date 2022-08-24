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

    },
    methods: {
      async getAnimals() {
        //console.log('hello');
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