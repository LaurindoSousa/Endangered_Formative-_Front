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
  
  <li><button @click="getAnimals" type="button">All</button></li>
  <li><button>Critically Endangered</button></li>
  <li><button>Endangered</button></li>
  <li><button>Vulnerable</button></li>
  <li><button>Near Threatened</button></li>
</ul>

  </div>

</div>

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
        console.log(data);
        this.animalsArray = data;
       

      },
    }
  }
</script>

<style scoped>

</style>