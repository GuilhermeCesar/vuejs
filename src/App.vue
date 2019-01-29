<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos"><img :src="foto.url"  :alt="foto.titulo"  /></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      titulo: 'Calopsita',
      fotos: []
    }
  },
  created() {
    this.$http.get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, erro => console.error(erro))

  }
}
</script>

<style>

</style>
