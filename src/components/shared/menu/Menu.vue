<template>
  <nav>
    <li v-for="rota in rotas">
      <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
    </li>
  </nav>
</template>

<script>
	export default {
		name: "menu",
    props:{
		  rotas:{
		    required:true,
        type:Array
      }
    },
    data(){

    }
	}
</script>

<style scoped>

</style>
